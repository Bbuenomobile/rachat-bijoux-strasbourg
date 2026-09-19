import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Bijoux Schiltigheim & Bischheim | Eurométropole Nord Strasbourg",
  description: "Cabinet pour le rachat d'or, diamants et bijoux précieux à Schiltigheim, Bischheim et dans l'Eurométropole nord de Strasbourg. Rendez-vous rapide.",
  alternates: {
    canonical: `${site.url}/rachat-bijoux-schiltigheim-bischheim`,
  },
};

const introParagraphs = ["Bordant directement Strasbourg au nord, Schiltigheim et Bischheim forment un bassin résidentiel et économique majeur de l'Eurométropole.", "Maison Obagem accueille les propriétaires de bijoux anciens, or d'investissement (lingotins, Napoléons) et pièces signées pour une estimation transparente et sans frais.", "Bénéficiez de la proximité de nos salons strasbourgeois ou d'un déplacement à votre domicile pour toute collection importante."];
const neighborhoods = ['Route de Bischwiller', 'Place de la Gare Schiltigheim', 'Cœur Historique Bischheim', "Espace Européen de l'Entreprise", 'Quartier des Brasseurs', 'Le Marais'];

export default function Page() {
  return (
    <LocalPage
      slug="rachat-bijoux-schiltigheim-bischheim"
      cityName="Schiltigheim & Bischheim"
      context="Schiltigheim 67300 & Bischheim 67800 · Eurométropole de Strasbourg Nord"
      introParagraphs={introParagraphs}
      neighborhoods={neighborhoods}
      image="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
