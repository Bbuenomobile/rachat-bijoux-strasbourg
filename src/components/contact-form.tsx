'use client';

import { useActionState, useState } from 'react';
import { submitContact, type ContactState } from '@/lib/contact-action';
import { compresserImages, formaterMo } from '@/lib/compresser-images';

type Props = {
  variant?: 'compact' | 'full' | 'estimation';
  category?: string;
  defaultSubject?: string;
  defaultItemType?: string;
  source?: string;
  headline?: string;
  intro?: string;
  title?: string;
  subtitle?: string;
};

const initial: ContactState = { ok: false, message: '' };

export function ContactForm({
  variant = 'full',
  category = 'Général',
  defaultSubject = '',
  defaultItemType = '',
  source = 'site',
  headline,
  intro,
  title,
  subtitle,
}: Props) {
  const displayHeadline = headline || title;
  const displayIntro = intro || subtitle;
  const [state, action, pending] = useActionState(submitContact, initial);

  const [fichiersInfo, setFichiersInfo] = useState('');
  const [fichiersErreur, setFichiersErreur] = useState(false);

  const MAX_FICHIERS = 6;
  const MAX_OCTETS = 8 * 1024 * 1024;
const MAX_TOTAL = 22 * 1024 * 1024;

  async function onFichiers(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target;
    const liste = Array.from(input.files ?? []);
    if (liste.length === 0) {
      setFichiersInfo('');
      setFichiersErreur(false);
      return;
    }

    // On ecarte seulement le surplus au lieu de vider toute la selection :
    // un fichier en trop ne doit pas faire perdre les autres photos.
    const retenus = liste.slice(0, MAX_FICHIERS);
    const ecartes = liste.length - retenus.length;

    setFichiersErreur(false);
    setFichiersInfo('Préparation des photos…');

    const { fichiers, octetsAvant, octetsApres, compresses } = await compresserImages(retenus);

    const gardes: File[] = [];
    const refuses: string[] = [];
    let cumul = 0;
    for (const x of fichiers) {
      if (x.size > MAX_OCTETS) { refuses.push(x.name); continue; }
      if (cumul + x.size > MAX_TOTAL) { refuses.push(x.name); continue; }
      cumul += x.size;
      gardes.push(x);
    }

    // le formulaire est soumis via action={} : on remplace les fichiers de l'input
    // par leurs versions compressees pour que ce soit elles qui partent.
    try {
      const dt = new DataTransfer();
      for (const x of gardes) dt.items.add(x);
      input.files = dt.files;
    } catch {
      /* navigateur sans DataTransfer : les originaux seront envoyes, le serveur tranchera */
    }

    const bouts: string[] = [`${gardes.length} fichier${gardes.length > 1 ? 's' : ''} prêt${gardes.length > 1 ? 's' : ''} · ${formaterMo(cumul)}`];
    if (compresses > 0) bouts.push(`photos optimisées : ${formaterMo(octetsAvant)} → ${formaterMo(octetsApres)}`);
    if (ecartes > 0) bouts.push(`${ecartes} au-delà de ${MAX_FICHIERS} non retenu${ecartes > 1 ? 's' : ''}`);
    if (refuses.length) bouts.push(`trop volumineux même après optimisation : ${refuses.join(', ')}`);
    setFichiersErreur(gardes.length === 0);
    setFichiersInfo(bouts.join(' · '));
  }


  if (state.ok) {
    return (
      <div className="rounded-2xl bg-white border border-gold-300/50 p-8 text-center shadow-lg">
        <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-gold-100 text-gold-700">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <h3 className="h3">Demande envoyée</h3>
        <p className="mt-2 text-ink-600">{state.message}</p>
        <p className="mt-4 text-sm text-ink-500">
          Pour toute urgence, appelez le <a href="tel:+33148878144" className="text-gold-700 underline">+33 1 48 87 81 44</a>.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-4" noValidate>
      {displayHeadline && <h3 className="h3">{displayHeadline}</h3>}
      {displayIntro && <p className="text-ink-600">{displayIntro}</p>}

      <input type="hidden" name="category" value={category} />
      <input type="hidden" name="source" value={source} />
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nom complet *" htmlFor="name" error={state.errors?.name}>
          <input id="name" name="name" required autoComplete="name" className="input" placeholder="Jean Dupont" />
        </Field>
        <Field label="Téléphone *" htmlFor="phone" error={state.errors?.phone}>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className="input" placeholder="06 12 34 56 78" />
        </Field>
      </div>

      <Field label="Email *" htmlFor="email" error={state.errors?.email}>
        <input id="email" name="email" type="email" required autoComplete="email" className="input" placeholder="vous@email.fr" />
      </Field>

      {variant !== 'compact' && (
        <>
          <Field label="Sujet" htmlFor="subject">
            <input id="subject" name="subject" defaultValue={defaultSubject} className="input" placeholder="Rachat diamant 1.2 ct" />
          </Field>

          {variant === 'estimation' && (
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Type de pièce" htmlFor="itemType">
                <select id="itemType" name="itemType" defaultValue={defaultItemType} className="input bg-white">
                  <option value="">Choisir…</option>
                  <option>Diamant nu</option>
                  <option>Bague diamant</option>
                  <option>Collier / pendentif diamant</option>
                  <option>Boucles d’oreilles diamants</option>
                  <option>Bracelet diamants</option>
                  <option>Bijou signé (Cartier, Van Cleef…)</option>
                  <option>Montre de luxe</option>
                  <option>Or (chaîne, alliance, etc.)</option>
                  <option>Perles</option>
                  <option>Autre</option>
                </select>
              </Field>
              <Field label="Marque (si signé)" htmlFor="brand">
                <input id="brand" name="brand" className="input" placeholder="Cartier, Bulgari, Rolex…" />
              </Field>
              <Field label="Métal" htmlFor="metal">
                <select id="metal" name="metal" className="input bg-white">
                  <option value="">Choisir…</option>
                  <option>Or jaune 18k</option>
                  <option>Or blanc 18k</option>
                  <option>Or rose 18k</option>
                  <option>Platine</option>
                  <option>Argent</option>
                  <option>Autre / je ne sais pas</option>
                </select>
              </Field>
              <Field label="Carat / poids approximatif" htmlFor="carat">
                <input id="carat" name="carat" className="input" placeholder="ex : 1.20 ct ou 12 g" />
              </Field>
              <Field label="Certificat ?" htmlFor="certificate">
                <select id="certificate" name="certificate" className="input bg-white">
                  <option value="">Choisir…</option>
                  <option>GIA</option>
                  <option>HRD</option>
                  <option>IGI</option>
                  <option>Autre laboratoire</option>
                  <option>Sans certificat</option>
                </select>
              </Field>
            </div>
          )}
        </>
      )}


      {/* Depot de fichiers — mis en avant : c'est ce qui permet une vraie pre-estimation */}
      <div className="rounded-xl border-2 border-dashed border-gold-300 bg-gold-50/40 p-4">
        <label htmlFor="fichiers" className="block cursor-pointer">
          <span className="block font-medium text-ink-900">
            Ajoutez des photos, un certificat ou une vidéo
          </span>
          <span className="mt-1 block text-sm text-ink-600">
            C’est ce qui nous permet de vous donner une fourchette de prix fiable dès le premier
            échange. Photos du bijou, du poinçon, du certificat (GIA, HRD, IGI) — même prises au
            téléphone.
          </span>
          <input
            id="fichiers"
            name="fichiers"
            type="file"
            multiple
            accept="image/*,.heic,.heif,application/pdf,video/mp4,video/quicktime,.mov"
            onChange={onFichiers}
            className="mt-3 block w-full text-sm text-ink-700 file:mr-3 file:rounded-md file:border-0 file:bg-gold-500 file:px-4 file:py-2 file:text-white file:font-medium hover:file:bg-gold-600 file:cursor-pointer"
          />
        </label>
        {fichiersInfo && (
          <p className={`mt-2 text-sm ${fichiersErreur ? 'text-red-700' : 'text-ink-600'}`}>{fichiersInfo}</p>
        )}
        <p className="mt-2 text-xs text-ink-500">
          Jusqu’à 6 fichiers, 8 Mo chacun. Formats acceptés : photos, PDF, vidéos.
        </p>
      </div>

      <Field label="Décrivez votre pièce *" htmlFor="message" error={state.errors?.message}>
        <textarea id="message" name="message" required rows={4} className="input min-h-[120px] w-full resize-y text-sm py-3 px-4 leading-relaxed rounded-xl border border-ink-200 bg-white placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-[#d4a373] focus:border-transparent transition-all shadow-sm" placeholder="Décrivez votre bijou : caractéristiques, état, photos disponibles, etc." />
      </Field>

      <label className="flex items-start gap-3 text-sm text-ink-600">
        <input type="checkbox" name="consent" value="on" required className="mt-1 h-4 w-4 shrink-0 rounded border-ink-300 text-gold-500 focus:ring-gold-400" />
        <span>
          J’accepte d’être recontacté(e) et la <a href="/politique-confidentialite" className="underline hover:text-ink-900 transition-colors whitespace-nowrap">politique de confidentialité</a>.
        </span>
      </label>
      {state.errors?.consent && <p className="text-sm text-red-700">{state.errors.consent}</p>}

      {!state.ok && state.message && (
        <p className="text-sm text-red-700">{state.message}</p>
      )}

      <button type="submit" disabled={pending} className="btn-gold w-full justify-center py-3.5 px-6 font-bold disabled:opacity-60 shadow-md hover:shadow-lg transition-all disabled:cursor-not-allowed">
        {pending ? 'Envoi…' : 'Envoyer ma demande'}
        {!pending && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M13 5l7 7-7 7"/></svg>
        )}
      </button>

      <p className="text-xs text-ink-500">
        Réponse sous quelques heures (jours ouvrés). Confidentialité totale, expertise gratuite et sans engagement.
      </p>
    </form>
  );
}

function Field({ label, htmlFor, error, children }: { label: string; htmlFor: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink-700">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-700">{error}</p>}
    </div>
  );
}
