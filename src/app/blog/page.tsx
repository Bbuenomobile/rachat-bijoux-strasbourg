import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/section';
import { blogPosts } from '@/lib/blog';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Blog & Analyses Gemmologiques Rapaport | Rachat Bijoux Strasbourg",
  description: "Articles techniques et analyses du marché de l'art : cotation officielle Rapaport, haute joaillerie signée et montres de collection à Strasbourg (Place Kléber).",
  alternates: { canonical: `${site.url}/blog` },
};

const blogImages: Record<string, string> = {
  'guide-vendre-diamants-strasbourg': 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
  'comprendre-les-4c-du-diamant-strasbourg': 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
  'certificats-gia-vs-hrd-ssef-strasbourg': 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
  'vendre-montre-luxe-rolex-patek-richard-mille-strasbourg': 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
  'valeur-haute-joaillerie-signee-cartier-van-cleef-strasbourg': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
  'fiscalite-or-lingots-pieces-france': 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80',
};

export default function BlogIndexPage() {
  return (
    <Section className="py-16 md:py-24">
      <div className="container-x">
        <div className="text-center space-y-4 mb-16">
          <span className="label text-[#d4af37]">Publications & Analyses Gemmologiques</span>
          <h1 className="h1">Guides et Articles Spécialisés sur les Bijoux et Diamants à Strasbourg</h1>
          <p className="lead max-w-2xl mx-auto text-ink-600">
            Conseils d'experts, dynamique des grandes ventes aux enchères et guides pratiques pour valoriser vos diamants certifiés, bijoux de maison et montres de collection dans les Alpes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-2xl border border-ink-900/10 overflow-hidden group hover:border-[#d4af37]/60 transition-all shadow-sm hover:shadow-xl bg-white flex flex-col justify-between">
              <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
                <Image
                  src={blogImages[post.slug] || 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80'}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-ink-500 mb-2">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span className="text-[#d4af37] font-semibold">{post.category}</span>
                  </div>
                  <h2 className="font-display text-xl text-ink-900 group-hover:text-[#d4af37] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-ink-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-ink-100 flex items-center justify-between">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-semibold uppercase tracking-wider text-ink-900 group-hover:text-[#d4af37] flex items-center gap-1"
                  >
                    Lire l'article <span>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
