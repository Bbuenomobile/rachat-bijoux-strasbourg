# Diamantaire Lille — site officiel

Site SEO multi-pages pour un diamantaire à Lille (rachat de diamants, bijoux signés, or, montres).

- **Framework** : Next.js 15 (App Router, SSR, standalone output)
- **Styles** : Tailwind CSS 3
- **Email** : Resend (server actions)
- **Hébergement** : VPS Linux (Node.js + PM2 + Nginx)

## Stack

- Next.js 15 / React 19 / TypeScript
- Tailwind CSS
- Resend (notifications de formulaires + accusé client)
- Zod (validation côté serveur)

## Variables d’environnement

Copier `.env.example` vers `.env.local` (dev) ou `.env` (prod) et renseigner :

```
RESEND_API_KEY=re_xxx
RESEND_FROM="Diamantaire Lille <contact@obagem.luxe>"
NOTIFY_EMAILS="bbueno@hotmail.fr,contact@obagem.fr,og.diamantaires@gmail.com"
SITE_URL=https://diamantairelille.co
```

## Développement

```bash
npm install
npm run dev
```

## Production

```bash
npm install
npm run build
npm run start        # ou: pm2 start ecosystem.config.cjs
```

## Pages

- `/` — Accueil
- `/rachat-de-diamants-lille`
- `/rachat-de-bijoux-lille`
- `/rachat-bijoux-signes-lille`
- `/rachat-or-lille`
- `/rachat-montres-luxe-lille`
- `/rachat-perles-lille`
- `/estimation-gratuite`
- `/expertise-diamantaire-lille`
- `/comment-ca-marche`
- `/a-propos`
- `/contact`
- `/faq`
- `/blog` + 6 articles
- 8 pages locales (quartiers / villes de la MEL)
- `/mentions-legales`, `/politique-confidentialite`
- `/sitemap.xml`, `/robots.txt`

## SEO

- Title/description optimisés par page
- Données structurées JSON-LD : `JewelryStore`, `FAQPage`, `BreadcrumbList`, `Article`
- Sitemap dynamique
- Robots.txt
- Canonicals
- OpenGraph + Twitter cards

## Déploiement VPS

Voir `/deploy/` pour Nginx + PM2.
