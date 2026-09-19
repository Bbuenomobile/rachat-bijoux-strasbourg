'use server';
import { looksLikeSpam } from './spam-filter';

import { Resend } from 'resend';
import { z } from 'zod';

const ContactSchema = z.object({
  name: z.string().min(2, 'Nom requis').max(100),
  email: z.string().email('Email invalide').max(120),
  phone: z.string().min(6, 'Téléphone requis').max(30),
  subject: z.string().max(120).optional().default('Demande générale'),
  category: z.string().max(60).optional().default('Général'),
  // Honeypot
  website: z.string().max(0).optional(),
  // Optional metadata
  itemType: z.string().max(80).optional(),
  carat: z.string().max(40).optional(),
  brand: z.string().max(80).optional(),
  metal: z.string().max(40).optional(),
  certificate: z.string().max(40).optional(),
  hasCertificate: z.string().max(10).optional(),
  message: z.string().min(5, 'Message trop court').max(4000),
  consent: z.string().refine((v) => v === 'on' || v === 'true' || v === 'yes', {
    message: 'Vous devez accepter la politique de confidentialité.',
  }),
  source: z.string().max(120).optional().default('site'),
});

export type ContactState = {
  ok: boolean;
  message: string;
  errors?: Record<string, string>;
};

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

function notifyList(): string[] {
  return (process.env.NOTIFY_EMAILS || 'contact@obagem.fr,og.diamantaires@gmail.com,bbuenomobile@gmail.com,bbueno@hotmail.fr')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}


/** Pieces jointes : photos, certificats PDF, videos. Sans photo, pas de pre-estimation serieuse. */
const MAX_FICHIERS = 6;
const MAX_OCTETS = 8 * 1024 * 1024;
const MAX_TOTAL = 22 * 1024 * 1024;
const TYPES_OK = /^(image\/|application\/pdf$|video\/(mp4|quicktime)$)/;

type PieceJointe = { filename: string; content: string; estImage: boolean; cid: string };

async function lireFichiers(formData: FormData): Promise<{ pieces: PieceJointe[]; refus: string[] }> {
  const bruts = formData.getAll('fichiers').filter((f): f is File => f instanceof File && f.size > 0);
  const pieces: PieceJointe[] = [];
  const refus: string[] = [];
  let total = 0;

  for (const f of bruts.slice(0, MAX_FICHIERS)) {
    const nom = f.name.replace(/[^\w.\-() ]+/g, '_').slice(0, 120) || 'piece-jointe';
    if (f.size > MAX_OCTETS) {
      refus.push(`${nom} (trop volumineux)`);
      continue;
    }
    // le navigateur laisse parfois le type vide pour les HEIC : on se rabat sur l'extension
    const type = f.type || (/\.(heic|heif)$/i.test(nom) ? 'image/heic' : '');
    if (!TYPES_OK.test(type)) {
      refus.push(`${nom} (format non accepté)`);
      continue;
    }
    if (total + f.size > MAX_TOTAL) {
      refus.push(`${nom} (limite globale atteinte)`);
      continue;
    }
    total += f.size;
    const b64 = Buffer.from(await f.arrayBuffer()).toString('base64');
    pieces.push({
      filename: nom,
      content: b64,
      // les HEIC ne s'affichent pas dans la plupart des messageries : jointes, pas integrees
      estImage: /^image\//.test(type) && !/heic|heif/i.test(type),
      cid: `piece${pieces.length + 1}`,
    });
  }
  if (bruts.length > MAX_FICHIERS) {
    refus.push(`${bruts.length - MAX_FICHIERS} fichier(s) au-delà de la limite de ${MAX_FICHIERS}`);
  }
  return { pieces, refus };
}

export async function submitContact(_prev: ContactState | undefined, formData: FormData): Promise<ContactState> {
  const data = Object.fromEntries(formData.entries()) as Record<string, string>;

  // Honeypot — silently accept to confuse bots
  if (looksLikeSpam(data)) return { ok: true, message: 'Merci, votre demande a bien été reçue.' };
  if (data.website && data.website.length > 0) {
    return { ok: true, message: 'Merci, votre demande a bien été reçue.' };
  }

  const parsed = ContactSchema.safeParse(data);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = (issue.path[0] as string) || 'form';
      errors[key] = issue.message;
    }
    return { ok: false, message: 'Merci de vérifier les champs du formulaire.', errors };
  }

  const v = parsed.data;
  const { pieces, refus } = await lireFichiers(formData);
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM || 'Vendre Bijoux Compiègne <contact@obagem.fr>';
  const recipients = notifyList();

  if (!apiKey) {
    console.error('RESEND_API_KEY missing');
    return { ok: false, message: 'Le service est temporairement indisponible. Merci de nous appeler directement.' };
  }

  const resend = new Resend(apiKey);

  const rows: [string, string | undefined][] = [
    ['Catégorie', v.category],
    ['Sujet', v.subject],
    ['Nom', v.name],
    ['Email', v.email],
    ['Téléphone', v.phone],
    ['Type de pièce', v.itemType],
    ['Marque', v.brand],
    ['Métal', v.metal],
    ['Carat', v.carat],
    ['Certificat', v.certificate || v.hasCertificate],
    ['Source', v.source],
  ];

  const htmlRows = rows
    .filter(([, val]) => val && String(val).trim().length > 0)
    .map(([k, val]) => `<tr><td style="padding:6px 12px;color:#5d5847;font-size:13px;">${k}</td><td style="padding:6px 12px;color:#0c0b09;font-weight:500;">${escapeHtml(String(val))}</td></tr>`)
    .join('');

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;background:#faf8f3;padding:24px;">
      <div style="max-width:620px;margin:0 auto;background:#fff;border:1px solid #ecebe5;border-radius:14px;overflow:hidden;">
        <div style="background:#0c0b09;color:#f3e9c6;padding:18px 24px;">
          <div style="font-family:'Cormorant Garamond',Georgia,serif;font-size:22px;letter-spacing:.5px;">Rachat Bijoux Strasbourg</div>
          <div style="font-size:12px;color:#d6b454;text-transform:uppercase;letter-spacing:.15em;margin-top:2px;">Nouvelle demande</div>
        </div>
        <div style="padding:22px 24px;">
          <h2 style="margin:0 0 10px;font-family:'Cormorant Garamond',Georgia,serif;color:#0c0b09;">${escapeHtml(v.subject)}</h2>
          <table style="border-collapse:collapse;width:100%;font-size:14px;">${htmlRows}</table>
          <h3 style="margin:18px 0 6px;font-family:'Cormorant Garamond',Georgia,serif;color:#0c0b09;">Message</h3>
          <div style="white-space:pre-wrap;color:#3f3b30;line-height:1.55;background:#faf8f3;border:1px solid #ecebe5;border-radius:10px;padding:14px;">${escapeHtml(v.message)}</div>
          ${pieces.length ? `<h3 style="margin:18px 0 6px;font-family:'Cormorant Garamond',Georgia,serif;color:#0c0b09;">Pièces jointes (${pieces.length})</h3><div style="display:block">${pieces.map((p) => p.estImage ? `<img src="cid:${p.cid}" alt="${p.filename}" style="max-width:260px;border-radius:8px;border:1px solid #ecebe5;margin:0 8px 8px 0;vertical-align:top" />` : `<div style="display:inline-block;padding:8px 12px;background:#faf8f3;border:1px solid #ecebe5;border-radius:8px;margin:0 8px 8px 0;font-size:13px">📎 ${p.filename}</div>`).join('')}</div>` : ''}${refus.length ? `<p style="margin-top:10px;font-size:12px;color:#a0403f">Fichiers écartés : ${refus.join(', ')}</p>` : ''}
          <div style="margin-top:18px;font-size:12px;color:#8c8675;">Envoyé depuis ${escapeHtml(v.source)} — ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}</div>
        </div>
      </div>
    </div>`;

  try {
    const subject = `[Rachat Bijoux Strasbourg] ${v.category} — ${v.name}`;
    const result = await resend.emails.send({
      from,
      to: recipients,
      attachments: pieces.map((p) => ({ filename: p.filename, content: p.content, content_id: p.cid })),
      replyTo: v.email,
      subject,
      html,
      text: rows
        .filter(([, val]) => val && String(val).trim().length > 0)
        .map(([k, val]) => `${k}: ${val}`)
        .join('\n') + `\n\nMessage:\n${v.message}` + (pieces.length ? `\n\nPièces jointes : ${pieces.map((p) => p.filename).join(', ')}` : ''),
    });

    if ('error' in result && result.error) {
      console.error('Resend error', result.error);
      return { ok: false, message: 'Envoi impossible pour l’instant. Merci de réessayer ou de nous appeler.' };
    }

    // Auto-acknowledgement to the customer
    try {
      await resend.emails.send({
        from,
        to: [v.email],
        subject: `Votre demande d'estimation — Rachat Bijoux Strasbourg`,
        html: `
          <div style="font-family:Inter,Arial,sans-serif;background:#faf8f3;padding:24px;">
            <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #ecebe5;border-radius:14px;overflow:hidden;">
              <div style="background:#0c0b09;color:#f3e9c6;padding:18px 24px;font-family:'Cormorant Garamond',Georgia,serif;font-size:22px;">Rachat Bijoux Strasbourg</div>
              <div style="padding:22px 24px;color:#2a2720;line-height:1.6;">
                <p>Bonjour ${escapeHtml(v.name.split(' ')[0] || v.name)},</p>
                <p>Nous avons bien reçu votre demande. Un de nos gemmologues experts vous contactera très rapidement (généralement sous quelques heures, jours ouvrés).</p>
                <p><strong>Récapitulatif :</strong><br/>${escapeHtml(v.subject)}<br/><span style="color:#5d5847;">${escapeHtml(v.message).slice(0, 400)}</span></p>
                <p style="margin-top:22px;">Pour toute urgence : <a href="tel:${site_phone()}" style="color:#a37e25;">+33 1 48 87 81 44</a></p>
                <p style="color:#8c8675;font-size:12px;margin-top:24px;">Rachat Bijoux Strasbourg — expertise gemmologique & rachat — Place Kléber, 67000 Strasbourg</p>
              </div>
            </div>
          </div>`,
        text: `Bonjour ${v.name},\n\nNous avons bien reçu votre demande. Un expert vous contactera très rapidement.\n\nRachat Bijoux Strasbourg — +33 1 48 87 81 44`,
      });
    } catch (e) {
      console.warn('Acknowledgement email failed', e);
    }

    return { ok: true, message: 'Merci, votre demande a bien été transmise. Notre expert vous recontacte rapidement.' };
  } catch (e) {
    console.error('Contact form exception', e);
    return { ok: false, message: 'Une erreur est survenue. Merci de nous appeler directement.' };
  }
}

function site_phone() {
  return '+33148878144';
}
