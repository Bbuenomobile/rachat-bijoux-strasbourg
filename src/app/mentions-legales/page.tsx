import type { Metadata } from 'next';
import { Section } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Mentions Légales | Rachat Bijoux Strasbourg",
  description: "Mentions légales, informations juridiques et conditions d'utilisation du site rachat-bijoux-strasbourg.site.",
  alternates: { canonical: `${site.url}/mentions-legales` },
};

export default function MentionsLegalesPage() {
  return (
    <Section className="py-16 md:py-24">
      <div className="container-x max-w-4xl bg-white p-8 md:p-12 rounded-2xl border border-ink-900/10 shadow-sm space-y-8 text-ink-700 leading-relaxed text-sm md:text-base">
        <h1 className="h1 text-ink-900">Mentions Légales</h1>
        
        <div>
          <h2 className="font-display text-xl font-semibold text-ink-900 mb-2">Éditeur du Site</h2>
          <p><strong>Dénomination :</strong> {site.legalName}</p>
          <p><strong>Adresse :</strong> {site.address.street}, {site.address.postalCode} {site.address.city}, France</p>
          <p><strong>Téléphone :</strong> {site.phoneDisplay}</p>
          <p><strong>Courriel :</strong> {site.email}</p>
          <p><strong>Directeur de la publication :</strong> Direction Générale Maison Obagem</p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink-900 mb-2">Hébergement</h2>
          <p>Le site est hébergé sur des serveurs sécurisés situés au sein de l'Union Européenne.</p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink-900 mb-2">Propriété Intellectuelle</h2>
          <p>L'ensemble des contenus, textes, logos, éléments visuels et charte graphique présents sur ce site relèvent de la législation sur le droit d'auteur et la propriété intellectuelle. Toute reproduction, même partielle, est interdite sans accord préalable.</p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-ink-900 mb-2">Activité de Rachat de Métaux Précieux & Gemmes</h2>
          <p>Toute transaction d'achat de bijoux, métaux précieux ou gemmes est régie par la législation française en vigueur. Une pièce d'identité en cours de validité est obligatoirement exigée pour tout acte de vente. Conformément à la réglementation, les règlements sont opérés par virement bancaire scriptural.</p>
        </div>
      </div>
    </Section>
  );
}
