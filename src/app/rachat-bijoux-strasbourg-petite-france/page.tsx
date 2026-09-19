import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Bijoux Strasbourg Petite France | Estimation Or, Bijoux d'Époque & Diamants",
  description: "Rachat discret et expertise de bijoux anciens, or 18k et diamants à la Petite France et aux Ponts Couverts à Strasbourg. Virement immédiat.",
  alternates: {
    canonical: `${site.url}/rachat-bijoux-strasbourg-petite-france`,
  },
};

const introParagraphs = ["Quartier historique emblématique bordé par l'Ill, la Petite France et les Ponts Couverts séduisent par leur atmosphère préservée et leur cachet rhénan.", 'Maison Obagem offre aux résidents et propriétaires de la Petite France une solution directe et transparente pour la cession de bijoux de famille, or 18k et parures anciennes.', "Estimation gratuite sans engagement fondée sur les cours réels de l'or et du diamant Rapaport, avec accueil en salon privé ou déplacement à domicile."];
const neighborhoods = ['Rue du Bain-aux-Plantes', 'Ponts Couverts', 'Quai des Moulins', 'Rue des Dentelles', 'Barrage Vauban', 'Quai de la Bruche'];

export default function Page() {
  return (
    <LocalPage
      slug="rachat-bijoux-strasbourg-petite-france"
      cityName="Petite France & Ponts Couverts"
      context="Strasbourg 67000 · Petite France, Ponts Couverts, Barrage Vauban & Quai des Bateliers"
      introParagraphs={introParagraphs}
      neighborhoods={neighborhoods}
      image="https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
