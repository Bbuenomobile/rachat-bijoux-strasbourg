import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { Section } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Estimation Gratuite & Confidentielle | Rachat Bijoux Strasbourg",
  description: "Demandez une estimation gratuite et sans engagement de vos bijoux, diamants certifiés, or et montres de collection à Strasbourg Place Kléber.",
  alternates: { canonical: `${site.url}/estimation-gratuite` },
};

export default function EstimationGratuitePage() {
  return (
    <Section className="py-16 md:py-24">
      <div className="container-x max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <span className="label text-[#d4af37]">Service Sans Engagement</span>
          <h1 className="h1 text-ink-900">Estimation Gratuite de Vos Bijoux Précieux</h1>
          <p className="lead text-ink-600 max-w-2xl mx-auto">
            Bénéficiez d'une évaluation professionnelle par un gemmologue diplômé, fondée sur les cours mondiaux du diamant Rapaport et du métal précieux.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl border border-ink-900/10 shadow-sm">
          <ContactForm
            variant="full"
            headline="Formulaire d'Estimation en Ligne"
            intro="Indiquez les caractéristiques de vos pièces (nature du métal, poinçon, poids approximatif, type de gemme, certificat GIA ou marque) pour une première évaluation sous 24h."
          />
        </div>
      </div>
    </Section>
  );
}
