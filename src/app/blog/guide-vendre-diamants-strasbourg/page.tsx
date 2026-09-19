import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Section } from '@/components/section';
import { blogPosts } from '@/lib/blog';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Comment Vendre des Diamants Certifiés à Strasbourg : Guide du Gemmologue | Rachat Bijoux Strasbourg",
  description: "Découvrez comment faire expertiser et vendre vos diamants au cours mondial Rapaport à Strasbourg et en Alsace dans un cadre strictement confidentiel.",
  alternates: { canonical: `${site.url}/blog/guide-vendre-diamants-strasbourg` },
};

export default function BlogPostPage() {
  const post = blogPosts.find((p) => p.slug === 'guide-vendre-diamants-strasbourg');
  if (!post) notFound();

  return (
    <Section className="py-16 md:py-24">
      <article className="container-x max-w-3xl space-y-8">
        <div className="space-y-3">
          <Link href="/blog" className="text-xs font-semibold uppercase tracking-wider text-[#997b24] hover:underline">
            ← Retour aux articles
          </Link>
          <div className="flex gap-4 text-xs text-ink-500 pt-2">
            <span className="font-semibold text-[#d4af37] uppercase tracking-wider">{post.category}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="h1 text-ink-900 pt-2">{post.title}</h1>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl border border-ink-900/10 shadow-sm space-y-6 text-ink-700 leading-relaxed text-base md:text-lg">
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="bg-[#081a30] text-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-semibold">Une Question sur Vos Bijoux à Strasbourg ?</h3>
            <p className="text-sm text-ink-300 mt-1">Prenez rendez-vous en salon privé Place Kléber pour une estimation confidentielle.</p>
          </div>
          <Link href="/estimation-gratuite" className="btn-gold text-xs py-3.5 px-6 uppercase tracking-wider font-semibold whitespace-nowrap">
            Estimation Gratuite
          </Link>
        </div>
      </article>
    </Section>
  );
}
