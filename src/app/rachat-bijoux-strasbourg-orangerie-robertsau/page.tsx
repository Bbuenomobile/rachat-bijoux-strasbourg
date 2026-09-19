import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Bijoux Strasbourg Orangerie & Robertsau | Salons Diplomatiques & Joyaux",
  description: "Service haut de gamme de rachat de haute joaillerie, diamants d'investissement et montres de luxe à l'Orangerie et à la Robertsau. Déplacement VIP.",
  alternates: {
    canonical: `${site.url}/rachat-bijoux-strasbourg-orangerie-robertsau`,
  },
};

const introParagraphs = ["Quartier diplomatique par excellence abritant le Conseil de l'Europe, le Parlement Européen et de superbes résidences consulaires, l'Orangerie et la Robertsau concentrent d'importants patrimoines précieux.", "Nos gemmologues diplômés proposent un service sur mesure aux diplomates, collectionneurs et familles résidentes : expertise de diamants de couleur, solitaires et pièces horlogères d'exception.", 'Déplacement confidentiel et sécurisé à votre résidence privée ou rendez-vous individuel dans nos salons de la Place Kléber.'];
const neighborhoods = ['Allée de la Robertsau', "Parc de l'Orangerie", "Boulevard de l'Orangerie", 'Quartier Européen', 'Rue Boecklin', 'Château de Pourtalès'];

export default function Page() {
  return (
    <LocalPage
      slug="rachat-bijoux-strasbourg-orangerie-robertsau"
      cityName="Orangerie & Robertsau"
      context="Strasbourg 67000 · Parc de l'Orangerie, Institutions Européennes, Allée de la Robertsau & Quartier Diplomatique"
      introParagraphs={introParagraphs}
      neighborhoods={neighborhoods}
      image="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
