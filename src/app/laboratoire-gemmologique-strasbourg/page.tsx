import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Laboratoire Gemmologique Strasbourg | Analyse & Certification Scientifique de Gemmes",
  description: "Laboratoire d'analyse gemmologique indépendant à Strasbourg : réfractomètre, polariscope, spectromètre UV-Visible et microscopie pour diamants et pierres précieuses.",
  alternates: {
    canonical: `${site.url}/laboratoire-gemmologique-strasbourg`,
  },
};

export default function Page() {
  return (
    <ServicePage
      slug="laboratoire-gemmologique-strasbourg"
      h1="Laboratoire Gemmologique Indépendant à Strasbourg"
      subtitle="Rigueur scientifique, expertise certifiée GIA & HRD et diagnostic d'authenticité pour particuliers, notaires et collectionneurs."
      image="https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1200&q=80"
      benefits={[
        {"title": "Microscopie Optique Binoculaire", "desc": "Grossissement jusqu'à 40x sous fond noir pour l'examen morphologique des inclusions internes et fractures."}, {"title": "Réfractométrie & Polariscope", "desc": "Mesure précise de l'indice de réfraction et du caractère optique uniaxe/biaxe pour identifier toute espèce minérale."}, {"title": "Spectrométrie & Fluorescence UV", "desc": "Détection des diamants de synthèse HPHT/CVD, résines d'imprégnation et traitements thermiques."}, {"title": "Avis Indépendant Sans Biais", "desc": "Rapport technique objectif préalable à la vente, à la succession ou à l'assurance de joyaux de valeur."}
      ]}
      sections={[
        {"title": "L'Excellence de la Science Gemmologique à Strasbourg", "body": "La gemmologie contemporaine ne laisse aucune place à l'approximation. Face à la prolifération des gemmes créées en laboratoire et des traitements de surface complexes, notre cabinet s'est doté des outils scientifiques de dernière génération."}, {"title": "Services aux Études Notariales et Cabinets d'Avocats", "body": "Nous intervenons régulièrement dans le cadre de partages successoraux, divorces ou inventaires fiscaux pour délivrer des expertises amiables contradictoires reconnues."}
      ]}
      faqs={[
        {"q": "Délivrez-vous un certificat officiel ?", "a": "Nous délivrons une attestation d'expertise gemmologique détaillée avec descriptif complet des caractéristiques physiques et optiques de la pièce."}, {"q": "Combien de temps prend une analyse en laboratoire ?", "a": "La plupart des examens sont réalisés sous vos yeux en 30 à 45 minutes lors de votre rendez-vous privé."}
      ]}
    />
  );
}
