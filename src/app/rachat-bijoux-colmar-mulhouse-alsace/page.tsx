import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Bijoux Colmar & Mulhouse | Haute Joaillerie, Or & Diamants en Alsace",
  description: "Rachat de haute joaillerie signée, diamants certifiés GIA et or d'investissement à Colmar, Mulhouse, Sélestat et dans tout le Haut-Rhin.",
  alternates: {
    canonical: `${site.url}/rachat-bijoux-colmar-mulhouse-alsace`,
  },
};

const introParagraphs = ["De la Petite Venise de Colmar aux grandes demeures industrielles et patronales de Mulhouse, le Haut-Rhin et l'Alsace centrale recèlent des pièces joaillères prestigieuses.", 'Nos gemmologues experts se déplacent régulièrement à Colmar, Mulhouse et Sélestat pour expertiser parures signées (Van Cleef & Arpels, Cartier, Chaumet) et collections horlogères.', "Profitez d'un service d'excellence indépendant des enchères publiques, avec une valorisation nette et un paiement sécurisé immédiat."];
const neighborhoods = ['Colmar Petite Venise', 'Place de la Cathédrale Colmar', 'Mulhouse Place de la Réunion', 'Quartier Rebberg Mulhouse', 'Sélestat Centre', 'Ribeauvillé & Riquewihr'];

export default function Page() {
  return (
    <LocalPage
      slug="rachat-bijoux-colmar-mulhouse-alsace"
      cityName="Colmar & Mulhouse"
      context="Colmar 68000, Mulhouse 68100, Sélestat 67600 & Région Alsace"
      introParagraphs={introParagraphs}
      neighborhoods={neighborhoods}
      image="https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
