import type { Metadata } from 'next';
import { Section } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Rachat Bijoux Strasbourg",
  description: "Politique de protection des données personnelles et respect de la confidentialité des clients de Maison Obagem à Strasbourg.",
  alternates: { canonical: `${site.url}/politique-confidentialite` },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <Section className="py-16 md:py-24">
      <div className="container-x max-w-4xl bg-white p-8 md:p-12 rounded-2xl border border-ink-900/10 shadow-sm space-y-8 text-ink-700 leading-relaxed text-sm md:text-base">
        <h1 className="h1 text-ink-900">Politique de Confidentialité</h1>
        
        <p>
          La protection de votre vie privée et la stricte confidentialité de vos biens précieux constituent une priorité absolue pour Maison Obagem. Cette politique précise les conditions de collecte et de traitement de vos données personnelles via notre site.
        </p>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink-900 mb-2">Données Collectées</h2>
          <p>Nous collectons uniquement les informations transmises volontairement via notre formulaire de contact ou d'estimation : nom, prénom, numéro de téléphone, adresse courriel et photographies de vos bijoux ou certificats. Ces données sont exclusivement utilisées pour traiter votre demande d'estimation et convenir d'un rendez-vous.</p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink-900 mb-2">Confidentialité & Secret Professionnel</h2>
          <p>Aucune information personnelle ou relative à la valeur de vos joyaux n'est cédée, louée ou transmise à des tiers. Nos experts gemmologues sont tenus à une obligation rigoureuse de discrétion.</p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink-900 mb-2">Vos Droits (RGPD)</h2>
          <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données personnelles. Vous pouvez exercer ce droit à tout moment en écrivant à : <strong>{site.email}</strong>.</p>
        </div>
      </div>
    </Section>
  );
}
