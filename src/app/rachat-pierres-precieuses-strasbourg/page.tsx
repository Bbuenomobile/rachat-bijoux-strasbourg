import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Pierres Précieuses Strasbourg | Saphirs, Émeraudes, Rubis, Perles en Alsace",
  description: "Laboratoire gemmologique pour le rachat de pierres précieuses de couleur à Strasbourg : saphirs de Ceylan, émeraudes de Colombie, rubis birmans. Expertise scientifique.",
  alternates: {
    canonical: `${site.url}/rachat-pierres-precieuses-strasbourg`,
  },
};

export default function Page() {
  return (
    <ServicePage
      slug="rachat-pierres-precieuses-strasbourg"
      h1="Rachat de Pierres Précieuses & Gemmes à Strasbourg"
      subtitle="Identification gemmologique de pointe pour émeraudes, saphirs, rubis non traités et perles fines de collection."
      image="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80"
      benefits={[
        {"title": "Les 4 Pierres Cardinales", "desc": "Diamant, Saphir, Rubis et Émeraude évalués avec précision selon leur origine géographique et traitements thermiques."}, {"title": "Laboratoires de Renom", "desc": "Reconnaissance des certificats SSEF, Gübelin, GIA, LFG et Carat Gem Lab pour gemmes d'exception."}, {"title": "Perles Fines & Spinelles", "desc": "Valorisation des perles naturelles de culture ancienne, spinelles rouges de Mahenge et tanzanites intenses."}, {"title": "Analyse Spectroscopique", "desc": "Matériel scientifique de pointe pour différencier les gemmes naturelles des synthèses ou imitations."}
      ]}
      sections={[
        {"title": "L'Art de l'Expertise des Pierres de Couleur", "body": "Contrairement aux diamants qui répondent à une grille standardisée, l'évaluation des pierres de couleur exige une connaissance approfondie des gisements historiques (Mogok, Cachemire, Muzo, Ceylan) et de la saturation chromatique."}, {"title": "Salons Confidentiels et Déplacements Privés", "body": "Nos gemmologues vous accueillent à Strasbourg Place Kléber ou se déplacent sur rendez-vous pour les collections importantes dans tout le Grand Est."}
      ]}
      faqs={[
        {"q": "Comment savoir si mon saphir ou rubis a été chauffé ?", "a": "L'observation microscopique des inclusions (givres, aiguilles de rutile) et la spectrométrie permettent de déterminer si la gemme a subi un traitement thermique ou chimique."}, {"q": "Rachetez-vous les pierres non montées ?", "a": "Oui, nous rachetons aussi bien les pierres serties sur bijoux que les gemmes isolées en lot ou à l'unité."}
      ]}
    />
  );
}
