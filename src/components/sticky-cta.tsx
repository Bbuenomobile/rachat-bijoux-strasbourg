import Link from 'next/link';
import { site } from '@/lib/site';

export function StickyCTA() {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-30 md:hidden border-t border-white/10 bg-[#081a30]/95 backdrop-blur p-3 flex gap-2 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
      aria-label="Actions rapides"
    >
      <a
        href={`tel:${site.phone.replace(/\s/g, '')}`}
        className="btn-outline flex-1 justify-center py-3 text-sm text-white border-white/20"
        aria-label="Appeler nos gemmologues"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.4 12.4 0 0 0 .68 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.4 12.4 0 0 0 2.81.68A2 2 0 0 1 22 16.92z"/>
        </svg>
        Appeler
      </a>
      <Link href="/estimation-gratuite" className="btn-gold flex-1 justify-center py-3 text-sm">
        Estimation Gratuite
      </Link>
    </div>
  );
}

export const StickyCta = StickyCTA;
