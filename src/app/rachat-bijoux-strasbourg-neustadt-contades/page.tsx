import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Bijoux Strasbourg Neustadt & Contades | Haute Joaillerie & Montres Suisses",
  description: "Cabinet d'expertise pour le rachat de bijoux de prestige, diamants certifiés et montres de collection dans le quartier impérial de la Neustadt et aux Contades.",
  alternates: {
    canonical: `${site.url}/rachat-bijoux-strasbourg-neustadt-contades`,
  },
};

const introParagraphs = ["Quartier impérial allemand inscrit au patrimoine de l'UNESCO, la Neustadt et le secteur des Contades se distinguent par leurs hôtels particuliers et leurs appartements cossus.", "Nous intervenons régulièrement auprès d'une clientèle privée exigeante pour l'expertise successorale et le rachat de parures de haute joaillerie signée (Cartier, Boucheron, Van Cleef & Arpels).", 'Évaluation précise, respect absolu du secret des affaires et règlement instantané par virement bancaire sur votre compte.'];
const neighborhoods = ['Place de la République', 'Avenue de la Liberté', 'Parc des Contades', 'Boulevard Tauler', 'Avenue des Vosges', 'Rue Paul Muller Simonis'];

export default function Page() {
  return (
    <LocalPage
      slug="rachat-bijoux-strasbourg-neustadt-contades"
      cityName="Neustadt & Contades"
      context="Strasbourg 67000 · Neustadt (UNESCO), Parc des Contades, Place de la République & Avenue de la Liberté"
      introParagraphs={introParagraphs}
      neighborhoods={neighborhoods}
      image="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
