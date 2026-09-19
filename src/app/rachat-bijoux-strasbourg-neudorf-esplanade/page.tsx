import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Bijoux Strasbourg Neudorf & Esplanade | Rachat Or, Montres & Joaillerie",
  description: "Expertise gemmologique et rachat d'or 18k, lingots et montres au Neudorf, à l'Esplanade et Rivetoile à Strasbourg. Paiement comptant par virement.",
  alternates: {
    canonical: `${site.url}/rachat-bijoux-strasbourg-neudorf-esplanade`,
  },
};

const introParagraphs = ["Pôle de dynamisme urbain en pleine expansion reliant le centre historique aux rives du Rhin, le secteur de Neudorf et de l'Esplanade réunit une population active et diversifiée.", "Notre cabinet rachète vos bijoux anciens, débris d'or, colliers et montres de grandes marques suisses (Rolex, Omega, Cartier, Breitling) aux meilleures conditions.", 'Transactions claires et rapides sur simple rendez-vous, avec pesée certifiée et versement immédiat sans commission cachée.'];
const neighborhoods = ['Place du Marché Neudorf', 'Route du Polygone', "Rivetoile & Presqu'île Malraux", "Place de l'Étoile", 'Campus Esplanade', 'Rue de Bâle'];

export default function Page() {
  return (
    <LocalPage
      slug="rachat-bijoux-strasbourg-neudorf-esplanade"
      cityName="Neudorf & Esplanade"
      context="Strasbourg 67100 · Neudorf, Place de l'Étoile, Rivetoile, Esplanade & Bassin d'Austerlitz"
      introParagraphs={introParagraphs}
      neighborhoods={neighborhoods}
      image="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
