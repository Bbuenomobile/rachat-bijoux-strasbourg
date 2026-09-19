import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Bijoux Anciens Strasbourg | Bijoux d'Époque, Art Déco & Or 18k en Alsace",
  description: "Estimation et rachat de bijoux anciens, bague époque 1900, Art Déco, bijoux régionaux alsaciens et or 18k à Strasbourg. Valorisation historique.",
  alternates: {
    canonical: `${site.url}/rachat-bijoux-anciens-strasbourg`,
  },
};

export default function Page() {
  return (
    <ServicePage
      slug="rachat-bijoux-anciens-strasbourg"
      h1="Rachat de Bijoux Anciens & d'Époque à Strasbourg"
      subtitle="Valorisation de l'histoire, des poinçons de maître et du travail d'orfèvrerie pour vos bijoux de famille en or 18 carats et platine."
      image="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80"
      benefits={[
        {"title": "Reconnaissance des Poinçons", "desc": "Identification certifiée des poinçons français (Tête d'Aigle, Mascaron, Tête de Mercure) et anciens orfèvres alsaciens."}, {"title": "Prime Historique & Stylistique", "desc": "Surcote substantielle pour les pièces Art Déco, Belle Époque, Napoléon III et créations 1940-1970 par rapport au poids d'or brut."}, {"title": "Successions & Notariats", "desc": "Accompagnement rigoureux pour partages familiaux, inventaires successoraux et liquidations patrimoniales."}, {"title": "Paiement Comptant Garanti", "desc": "Aucune commission de vente aux enchères déduite, paiement intégral par virement bancaire immédiat."}
      ]}
      sections={[
        {"title": "La Richesse Patrimoniale de la Joaillerie en Alsace", "body": "Strasbourg et les cités rhénanes abritent des trésors joailliers transmis de génération en génération. Qu'il s'agisse de broches serties de roses de diamant, de bagues tank des années 40 ou de parures ciselées en or jaune 18k, nous accordons une prime artistique supérieure à la seule fonte du métal."}, {"title": "Expertise des Métaux Précieux et Gemmes Anciennes", "body": "Chaque bijou est soumis à un test non destructif (pierre de touche et spectrométrie de masse) afin de valider le titre exact de l'alliage (750‰ or, 950‰ platine, 800‰ argent)."}
      ]}
      faqs={[
        {"q": "Faut-il nettoyer les bijoux anciens avant expertise ?", "a": "Non, il est fortement recommandé de ne pas les frotter ou polir afin de préserver la patine d'époque recherchée par les collectionneurs."}, {"q": "Achetez-vous les bijoux abîmés ou dépareillés ?", "a": "Oui, nous rachetons également les pièces accidentées, boucles d'oreilles isolées ou débris d'or pour leur valeur métallique et gemmologique."}
      ]}
    />
  );
}
