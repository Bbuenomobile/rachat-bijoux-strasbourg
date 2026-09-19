// Filtre anti-spam server-side pour les formulaires de contact du réseau.
// Retourne une raison (string) si la soumission est du spam, sinon null.
// Calibré pour des formulaires de rachat de bijoux : un vendeur légitime
// ne colle jamais d'URL ni de jargon SEO/marketing/crypto. Volontairement
// conservateur (≈ zéro faux positif). Le japonais/chinois n'est PAS bloqué
// (obagem.fr a des pages i18n) ; seul le cyrillique l'est.

// Lien explicite (schéma / www.) ou domaine suivi d'un chemin.
const LINK_RE = /(https?:\/\/|www\.|\b[a-z0-9-]{2,}\.(?:com|net|org|io|info|biz)\/[a-z0-9])/i;
// TLD quasi exclusivement utilisés par le spam.
const SPAM_TLD_RE =
  /\b[a-z0-9-]{2,}\.(?:ru|xyz|top|online|site|shop|club|link|icu|cn|buzz|live|website|space|fun|tech|store|monster|rest|click|work|men|loan|date)\b/i;
const CYRILLIC_RE = /[Ѐ-ӿ]/;

// Jargon quasi exclusif au spam de formulaire (webdesign, SEO, crypto…).
const TERM_RE = new RegExp(
  '\\b(' +
    [
      'seo', 'backlinks?', 'link ?building', 'guest post(ing)?', 'digital marketing',
      'web ?design', 'website design', 'we design', 'redesign', 'new website',
      'grow (your )?(business|online)', 'increase (your )?traffic', 'more traffic',
      'rank(ing)? (higher|on google)', 'first page of google', 'search engine optimi',
      'more (customers|leads)', 'lead generation', 'crypto(currency)?', 'bitcoin', 'forex',
      'casino', 'viagra', 'cialis', 'porn', 'loan offer', 'investment opportunity',
      'weblaunched', 'portfolio and pricing', 'view our portfolio',
      "we'?d love to (work|help)", 'work with you', 'reaching out',
      'came across your (site|website)', 'noticed your (site|website)',
      'affordable (rates|price)', 'limited[- ]time offer',
    ].join('|') +
    ')',
  'i'
);

export function looksLikeSpam(data: Record<string, string>): string | null {
  const name = String(data.name || '').toLowerCase();
  const email = String(data.email || '').toLowerCase();
  const message = String(data.message || '');
  const hay = `${name}\n${message}`;

  if (/^(no-?reply|do-?not-?reply)@/.test(email)) return 'email:noreply';
  if (LINK_RE.test(message) || LINK_RE.test(name)) return 'link';
  if (SPAM_TLD_RE.test(hay)) return 'spam-tld';
  if (CYRILLIC_RE.test(hay)) return 'cyrillic';
  if (/\d{5,}/.test(name)) return 'name-digits';
  if (TERM_RE.test(hay)) return 'term';
  // Message agrégeant plusieurs adresses e-mail (récolte / annuaire de spam).
  if ((message.match(/@/g) || []).length >= 3) return 'many-emails';
  return null;
}
