import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Diamant Strasbourg | Diamants Certifiés GIA & HRD au Cours Rapaport",
  description: "Cabinet d'expertise pour le rachat de diamants solitaires et brillants à Strasbourg. Évaluation selon les 4C et cotation en direct du Rapaport Diamond Report.",
  alternates: {
    canonical: `${site.url}/rachat-diamant-strasbourg`,
  },
};

export default function Page() {
  return (
    <ServicePage
      slug="rachat-diamant-strasbourg"
      h1="Rachat de Diamants Certifiés à Strasbourg"
      subtitle="Expertise gemmologique indépendante, cotations officielles Rapaport en temps réel et paiement immédiat par virement bancaire Place Kléber."
      image="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80"
      benefits={[
        {"title": "Cotation Rapaport en Direct", "desc": "Calcul immédiat de la valeur marchande selon la grille officielle internationale du diamant brut et taillé."}, {"title": "Laboratoire de Réfractométrie & UV", "desc": "Contrôle d'authenticité, détection de fluorescence et examen des inclusions à la loupe binoculaire 10x à 40x."}, {"title": "Diamants Montés ou Libres", "desc": "Évaluation précise de solitaires sur bague, pendentifs ou pierres descellées de 0.50 ct à plus de 10 carats."}, {"title": "Règlement Immédiat", "desc": "Virement bancaire instantané immédiat après acceptation de notre offre d'achat ferme."}
      ]}
      sections={[
        {"title": "Le Marché du Diamant d'Investissement à Strasbourg", "body": "Au carrefour de la France, de l'Allemagne et de la Suisse, Strasbourg bénéficie d'une tradition centenaire de transactions précieuses. Nos experts diplômés appliquent les critères scientifiques les plus rigoureux reconnus par les grands laboratoires internationaux (GIA, HRD, IGI, SSEF)."}, {"title": "Méthode des 4C Appliquée sous vos Yeux", "body": "Carat (poids exact au centième), Color (nuance de D à Z), Clarity (pureté et localisation des inclusions) et Cut (qualité de la taille, symétrie et poli). Chaque paramètre vous est expliqué en toute transparence."}
      ]}
      faqs={[
        {"q": "Achetez-vous les diamants sans certificat ?", "a": "Oui. Notre équipement de laboratoire permet de certifier les 4C de votre pierre directement sur place lors du rendez-vous."}, {"q": "Comment fixez-vous le prix de rachat ?", "a": "Le prix est directement indexé sur la grille hebdomadaire du Rapaport Diamond Report, corrigé de la surcote ou décote du marché international."}
      ]}
    />
  );
}
