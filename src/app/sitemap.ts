import { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;
  const now = new Date().toISOString();

  const routes = [
    // 1 Homepage
    { url: `${baseUrl}`, priority: 1.0, changeFrequency: 'weekly' as const },

    // 7 Services & Lab
    { url: `${baseUrl}/rachat-diamant-strasbourg`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-anciens-strasbourg`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-haute-joaillerie-signee-strasbourg`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-lingots-pieces-or-strasbourg`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-montres-luxe-strasbourg`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-pierres-precieuses-strasbourg`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/laboratoire-gemmologique-strasbourg`, priority: 0.85, changeFrequency: 'monthly' as const },

    // 8 Districts & Alsace
    { url: `${baseUrl}/rachat-bijoux-strasbourg-centre-grande-ile`, priority: 0.85, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-strasbourg-petite-france`, priority: 0.85, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-strasbourg-neustadt-contades`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-strasbourg-orangerie-robertsau`, priority: 0.85, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-strasbourg-neudorf-esplanade`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-schiltigheim-bischheim`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-haguenau-nord-alsace`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-colmar-mulhouse-alsace`, priority: 0.85, changeFrequency: 'weekly' as const },

    // 7 Institutional
    { url: `${baseUrl}/a-propos`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/comment-ca-marche`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/contact`, priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/faq`, priority: 0.75, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/estimation-gratuite`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/mentions-legales`, priority: 0.4, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/politique-confidentialite`, priority: 0.4, changeFrequency: 'yearly' as const },

    // 1 Blog Index + 6 Blog Articles
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/blog/guide-vendre-diamants-strasbourg`, priority: 0.75, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog/comprendre-les-4c-du-diamant-strasbourg`, priority: 0.75, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog/certificats-gia-vs-hrd-ssef-strasbourg`, priority: 0.75, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog/vendre-montre-luxe-rolex-patek-richard-mille-strasbourg`, priority: 0.75, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog/valeur-haute-joaillerie-signee-cartier-van-cleef-strasbourg`, priority: 0.75, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog/fiscalite-or-lingots-pieces-france`, priority: 0.75, changeFrequency: 'monthly' as const },
  ];

  return routes.map((r) => ({
    url: r.url,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
