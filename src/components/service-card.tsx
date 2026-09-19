import Link from 'next/link';
import Image from 'next/image';

export function ServiceCard({
  title,
  description,
  href,
  image,
  alt,
}: {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
}) {
  return (
    <Link href={href} className="card overflow-hidden flex flex-col group">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-100">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-2xl text-ink-900">{title}</h3>
        <p className="mt-2 text-sm text-ink-600 leading-relaxed flex-1">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-700 group-hover:gap-2.5 transition-all">
          En savoir plus
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M13 5l7 7-7 7"/></svg>
        </span>
      </div>
    </Link>
  );
}
