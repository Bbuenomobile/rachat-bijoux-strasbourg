import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Bijoux Strasbourg Grande Île & Place Kléber | Diamants, Or & Montres",
  description: "Cabinet gemmologique pour le rachat de haute joaillerie, diamants GIA et montres de collection à la Grande Île et Place Kléber à Strasbourg. Salons confidentiels.",
  alternates: {
    canonical: `${site.url}/rachat-bijoux-strasbourg-centre-grande-ile`,
  },
};

const introParagraphs = ["Classée au patrimoine mondial de l'UNESCO, la Grande Île et la Place Kléber constituent le cœur battant et élégant de la métropole strasbourgeoise.", "Nos salons privés accueillent collectionneurs, familles et études notariales pour l'évaluation rigoureuse de diamants solitaires, bijoux anciens de grande tradition et pièces de haute horlogerie suisse.", 'Chaque expertise est réalisée sous vos yeux selon les standards de la gemmologie scientifique internationale ; le règlement est opéré immédiatement par virement bancaire instantané.'];
const neighborhoods = ['Place Kléber', 'Place Broglie', 'Rue des Grandes Arcades', 'Rue Mercière & Cathédrale', 'Place Gutenberg', 'Rue du Dôme'];

export default function Page() {
  return (
    <LocalPage
      slug="rachat-bijoux-strasbourg-centre-grande-ile"
      cityName="Grande Île & Place Kléber"
      context="Strasbourg 67000 · Grande Île, Place Kléber, Place Broglie, Rue des Grandes Arcades & Cathédrale"
      introParagraphs={introParagraphs}
      neighborhoods={neighborhoods}
      image="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
