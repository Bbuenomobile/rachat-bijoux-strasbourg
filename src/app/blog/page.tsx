import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/section';
import { blogPosts } from '@/lib/blog';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Guides, Actualités & Expertise Gemmologique | Rachat Bijoux Strasbourg",
  description: "Consultez les analyses, guides de valorisation des diamants, fiscalité de l'or et conseils d'experts gemmologues à Strasbourg.",
  alternates: { canonical: `${site.url}/blog` },
};

export default function BlogIndexPage() {
  return (
    <Section className="py-16 md:py-24">
      <div className="container-x max-w-5xl space-y-12">
        <div className="text-center space-y-4">
          <span className="label text-[#d4af37]">Analyses & Conseils</span>
          <h1 className="h1 text-ink-900">Le Guide de la Joaillerie & de l'Or à Strasbourg</h1>
          <p className="lead text-ink-600 max-w-2xl mx-auto">
            Les conseils de nos gemmologues diplômés pour comprendre les cours, authentifier vos bijoux et optimiser votre vente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-2xl border border-ink-900/10 p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs text-[#997b24] font-semibold uppercase tracking-wider">
                  <span>{post.category}</span>
                  <span className="text-ink-400">{post.readTime}</span>
                </div>
                <h2 className="font-display text-xl font-semibold text-ink-900 hover:text-[#997b24] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-sm text-ink-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              <div className="pt-6 border-t border-ink-900/5 mt-6 flex justify-between items-center">
                <span className="text-xs text-ink-400">{post.date}</span>
                <Link href={`/blog/${post.slug}`} className="text-xs font-semibold text-[#997b24] hover:underline uppercase tracking-wider">
                  Lire l'article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
