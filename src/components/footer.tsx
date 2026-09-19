import Link from 'next/link';
import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="bg-[#050f1d] text-ink-100 border-t border-white/10">
      <div className="container-x py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37] to-[#997b24] text-[#081a30] font-serif font-bold text-lg">
              RS
            </span>
            <span className="font-display text-xl text-white font-semibold">{site.name}</span>
          </div>
          <p className="mt-4 text-sm text-ink-300 leading-relaxed max-w-xs">
            Cabinet gemmologique indépendant et rachat de haute joaillerie à Strasbourg : diamants certifiés GIA / HRD selon le cours officiel Rapaport, bijoux anciens et signés (Cartier, Van Cleef & Arpels, Chaumet, Boucheron), or d'investissement et montres suisses de collection.
          </p>
          <div className="mt-5 text-sm text-ink-300 space-y-1">
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="block text-[#d4af37] hover:text-white font-medium">{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`} className="block hover:text-white">{site.email}</a>
            <p className="pt-2">{site.address.street}</p>
            <p>{site.address.postalCode} {site.address.city} ({site.department}), France</p>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#d4af37]">Nos Domaines d'Expertise</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/rachat-diamant-strasbourg" className="text-ink-300 hover:text-white">Diamants Certifiés (GIA, HRD)</Link></li>
            <li><Link href="/rachat-bijoux-anciens-strasbourg" className="text-ink-300 hover:text-white">Bijoux Anciens & Époque (18k)</Link></li>
            <li><Link href="/rachat-haute-joaillerie-signee-strasbourg" className="text-ink-300 hover:text-white">Haute Joaillerie Signée</Link></li>
            <li><Link href="/rachat-lingots-pieces-or-strasbourg" className="text-ink-300 hover:text-white">Or d'Investissement & Lingots</Link></li>
            <li><Link href="/rachat-montres-luxe-strasbourg" className="text-ink-300 hover:text-white">Montres de Prestige (Rolex, Patek)</Link></li>
            <li><Link href="/rachat-pierres-precieuses-strasbourg" className="text-ink-300 hover:text-white">Pierres Précieuses & Émeraudes</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#d4af37]">La Maison</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/a-propos" className="text-ink-300 hover:text-white">À Propos</Link></li>
            <li><Link href="/laboratoire-gemmologique-strasbourg" className="text-ink-300 hover:text-white">Laboratoire Gemmologique</Link></li>
            <li><Link href="/comment-ca-marche" className="text-ink-300 hover:text-white">Comment ça Marche</Link></li>
            <li><Link href="/faq" className="text-ink-300 hover:text-white">Questions Fréquentes (FAQ)</Link></li>
            <li><Link href="/blog" className="text-ink-300 hover:text-white">Guides & Analyses du Marché</Link></li>
            <li><Link href="/contact" className="text-ink-300 hover:text-white">Salons Privés & Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#d4af37]">Strasbourg & Alsace</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/rachat-bijoux-strasbourg-centre-grande-ile" className="text-ink-300 hover:text-white">Grande Île & Place Kléber</Link></li>
            <li><Link href="/rachat-bijoux-strasbourg-petite-france" className="text-ink-300 hover:text-white">Petite France & Ponts Couverts</Link></li>
            <li><Link href="/rachat-bijoux-strasbourg-neustadt-contades" className="text-ink-300 hover:text-white">Neustadt & Contades</Link></li>
            <li><Link href="/rachat-bijoux-strasbourg-orangerie-robertsau" className="text-ink-300 hover:text-white">Orangerie & Robertsau</Link></li>
            <li><Link href="/rachat-bijoux-strasbourg-neudorf-esplanade" className="text-ink-300 hover:text-white">Neudorf & Esplanade</Link></li>
            <li><Link href="/rachat-bijoux-schiltigheim-bischheim" className="text-ink-300 hover:text-white">Schiltigheim & Bischheim</Link></li>
            <li><Link href="/rachat-bijoux-haguenau-nord-alsace" className="text-ink-300 hover:text-white">Haguenau & Nord Alsace</Link></li>
            <li><Link href="/rachat-bijoux-colmar-mulhouse-alsace" className="text-ink-300 hover:text-white">Colmar & Mulhouse</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-xs text-ink-400">
        <div className="container-x flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} {site.name}. Tous droits réservés. Maison Obagem Strasbourg.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-white">Mentions Légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-white">Politique de Confidentialité</Link>
            <Link href="/estimation-gratuite" className="hover:text-white">Estimation Gratuite</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
