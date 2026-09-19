import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "À Propos — Maison Obagem Strasbourg | Tradition Joaillière & Expertise Gemmologique",
  description: "Depuis plus de quatre décennies, Maison Obagem conseille une clientèle privée exigeante, collectionneurs et études notariales pour l'évaluation et le rachat de haute joaillerie à Strasbourg.",
  alternates: { canonical: `${site.url}/a-propos` },
};

export default function AProposPage() {
  return (
    <>
      <Section className="py-16 md:py-24">
        <div className="container-x max-w-4xl space-y-12">
          <div className="text-center space-y-4">
            <span className="label text-[#d4af37]">Maison Obagem Strasbourg</span>
            <h1 className="h1 text-ink-900">Quatre Décennies d'Excellence en Gemmologie & Haute Joaillerie</h1>
            <p className="lead text-ink-600 max-w-2xl mx-auto">
              Une tradition d'intégrité, de rigueur scientifique et de discrétion absolue à Strasbourg, Place Kléber et dans toute l'Alsace.
            </p>
          </div>

          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80"
              alt="Maison Obagem Salons Privés Place Kléber Strasbourg"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6 text-ink-700 leading-relaxed text-base md:text-lg bg-white p-8 md:p-12 rounded-2xl border border-ink-900/10 shadow-sm">
            <h2 className="font-display text-2xl font-semibold text-ink-900">Histoire & Philosophie</h2>
            <p>
              Maison Obagem a été fondée pour offrir aux particuliers, collectionneurs et études notariales une alternative transparente, confidentielle et immédiate aux ventes aux enchères publiques. Alors que les enchères imposent d'importantes commissions (20 à 30%), des mois d'attente et une issue incertaine, nous garantissons une valorisation nette et un virement bancaire instantané.
            </p>
            <p>
              À <strong>Strasbourg (Place Kléber)</strong> ainsi que lors de nos déplacements confidentiels en Alsace, nos gemmologues diplômés appliquent les critères d'évaluation les plus rigoureux reconnus par le Gemological Institute of America (GIA) et le laboratoire HRD d'Anvers.
            </p>
            <h2 className="font-display text-2xl font-semibold text-ink-900 pt-4">Nos Engagements</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#081a30] text-white text-xs font-bold mt-0.5">✓</span>
                <div>
                  <strong>Indépendance & Rigueur Scientifique :</strong> Chaque estimation s'appuie sur des mesures en laboratoire et les cours officiels internationaux (Rapaport Diamond Report et fixing or LBMA).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#081a30] text-white text-xs font-bold mt-0.5">✓</span>
                <div>
                  <strong>Confidentialité & Discrétion Rhénane :</strong> Vos entretiens ont lieu en salons privés sur rendez-vous ou à votre domicile, dans le strict respect du secret des affaires.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#081a30] text-white text-xs font-bold mt-0.5">✓</span>
                <div>
                  <strong>Paiement Immédiat :</strong> Dès accord sur notre proposition d'achat, le montant est transféré sans délai par virement bancaire instantané sécurisé en EUR.
                </div>
              </li>
            </ul>
          </div>

          <div className="text-center pt-6">
            <Link href="/contact" className="btn-gold text-sm py-4 px-8 uppercase tracking-wider font-semibold">
              Prendre Rendez-vous en Salon Privé
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
