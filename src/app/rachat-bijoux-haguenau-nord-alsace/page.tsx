import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Bijoux Haguenau & Nord Alsace | Estimation Or, Diamants & Successions",
  description: "Expertise gemmologique et rachat de bijoux de famille, or 18 carats et diamants à Haguenau, Wissembourg et dans le Nord Alsace. Paiement direct.",
  alternates: {
    canonical: `${site.url}/rachat-bijoux-haguenau-nord-alsace`,
  },
};

const introParagraphs = ['Deuxième pôle économique du Bas-Rhin, Haguenau et les cités historiques du Nord Alsace (Wissembourg, Saverne) possèdent une forte tradition patrimoniale.', 'Dans le cadre de successions, de donations familiales ou de désinvestissements, nous assistons particuliers et notaires avec une évaluation impartiale et certifiée.', "Achat comptant de bijoux anciens, pièces d'or boursables et diamants certifiés avec virement bancaire instantané garanti."];
const neighborhoods = ['Haguenau Centre Piéton', "Grand'Rue Haguenau", 'Wissembourg Cité Historique', 'Saverne Château des Rohan', 'Bischwiller', 'Reichshoffen'];

export default function Page() {
  return (
    <LocalPage
      slug="rachat-bijoux-haguenau-nord-alsace"
      cityName="Haguenau & Nord Alsace"
      context="Haguenau 67500, Wissembourg 67160, Saverne 67700 & Plaine du Nord Alsace"
      introParagraphs={introParagraphs}
      neighborhoods={neighborhoods}
      image="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
