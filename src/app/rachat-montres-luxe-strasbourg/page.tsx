import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Montres de Luxe Strasbourg | Rolex, Patek Philippe, Audemars Piguet, Cartier",
  description: "Expertise horlogère et rachat direct de montres suisses de collection à Strasbourg. Estimation immédiate Rolex, Patek, Omega, Jaeger-LeCoultre.",
  alternates: {
    canonical: `${site.url}/rachat-montres-luxe-strasbourg`,
  },
};

export default function Page() {
  return (
    <ServicePage
      slug="rachat-montres-luxe-strasbourg"
      h1="Rachat de Montres de Prestige à Strasbourg"
      subtitle="Cabinet d'expertise horlogère indépendante : valorisation immédiate de votre garde-temps suisse vintage ou contemporain."
      image="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
      benefits={[
        {"title": "Manufactures Suisses de Référence", "desc": "Rolex, Patek Philippe, Audemars Piguet, Jaeger-LeCoultre, Cartier, Omega, Vacheron Constantin, IWC, Breitling."}, {"title": "Modèles Sport & Mythiques", "desc": "Submariner, Daytona, GMT-Master II, Nautilus, Royal Oak, Santos, Speedmaster, Reverso."}, {"title": "Prime pour Full Set", "desc": "Surcote importante pour les montres accompagnées de leur boîte, livret de garantie et maillons supplémentaires."}, {"title": "Contrôle d'Authenticité Non Intrusif", "desc": "Vérification des numéros de série, de la gravure rehaut et analyse de l'amplitude au chronocomparateur."}
      ]}
      sections={[
        {"title": "Le Marché Horloger de Collection à Strasbourg", "body": "La proximité immédiate des grands centres horlogers helvétiques confère à Strasbourg une culture horlogère affirmée. Nous proposons aux propriétaires de pièces d'exception une alternative directe aux plateformes en ligne, sans commission intermédiaire ni risque d'impayé."}, {"title": "Critères d'Évaluation de Votre Garde-Temps", "body": "État mécanique, conservation du cadran d'origine, présence de patine naturelle non polie et traçabilité historique déterminent la prime accordée à votre montre de luxe."}
      ]}
      faqs={[
        {"q": "Achetez-vous les montres sans papiers ?", "a": "Oui, nous rachetons des montres sans boîte ni papiers sous réserve d'authentification complète et de signature d'un certificat de propriété légal."}, {"q": "La montre doit-elle être révisée avant la vente ?", "a": "Il est préférable de la présenter en l'état sans engager de frais préalables de révision."}
      ]}
    />
  );
}
