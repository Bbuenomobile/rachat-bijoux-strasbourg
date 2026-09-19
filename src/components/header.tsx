import Link from 'next/link';
import { site } from '@/lib/site';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#081a30]/95 backdrop-blur border-b border-white/10 text-white">
      <div className="container-x flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37] to-[#997b24] text-[#081a30] font-serif font-bold text-lg shadow-md transition-transform group-hover:scale-105">
            RS
          </span>
          <div className="flex flex-col">
            <span className="font-display text-lg tracking-tight font-semibold text-white group-hover:text-[#d4af37] transition-colors">
              {site.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-[#d4af37]">
              Place Kléber · Salons Privés & Alsace
            </span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-6 text-xs uppercase tracking-wider font-medium text-ink-200">
          <Link href="/rachat-diamant-strasbourg" className="hover:text-white transition-colors">Diamants GIA</Link>
          <Link href="/rachat-bijoux-anciens-strasbourg" className="hover:text-white transition-colors">Bijoux & Or</Link>
          <Link href="/rachat-haute-joaillerie-signee-strasbourg" className="hover:text-white transition-colors">Haute Joaillerie</Link>
          <Link href="/rachat-montres-luxe-strasbourg" className="hover:text-white transition-colors">Montres de Prestige</Link>
          <Link href="/comment-ca-marche" className="hover:text-white transition-colors">Comment ça Marche</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phone.replace(/\s/g, '')}`}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[#d4af37] border border-[#d4af37]/40 px-3 py-2 rounded-lg hover:bg-[#d4af37]/10 transition-colors"
          >
            <span>📞</span> {site.phoneDisplay}
          </a>
          <Link
            href="/estimation-gratuite"
            className="btn-gold text-xs uppercase tracking-wider font-semibold py-2.5 px-4"
          >
            Estimation Gratuite
          </Link>
        </div>
      </div>
    </header>
  );
}
