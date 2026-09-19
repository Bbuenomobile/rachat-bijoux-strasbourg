import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Montres de Luxe Strasbourg (Place Kléber) | Rolex, Patek Philippe, Richard Mille | " + site.name,
  description: "Cabinet d'expertise horlogère à Strasbourg (Place Kléber) : estimation et rachat immédiat de montres suisses d'exception (Rolex, Patek Philippe, Richard Mille, Audemars Piguet).",
  alternates: {
    canonical: `${site.url}/rachat-montres-luxe-strasbourg`,
  },
};

const criteria = {'title': "Critères d'Expertise d'une Montre de Prestige", 'items': [{'label': 'Référence & Numéro de Série', 'text': "Vérification de l'authenticité de la boîte, du fond et des poinçons d'atelier."}, {'label': 'État du Boîtier & Bracelet', 'text': "Contrôle des chanfreins d'origine, absence de polissage excessif et tension du bracelet."}, {'label': 'Cadran & Aiguilles Coévals', 'text': "Examen minutieux de l'originalité du cadran (tritium, luminova) et authenticité des index."}, {'label': 'Set Complet (Full Set)', 'text': "Forte plus-value pour la présence de la boîte d'origine, de la carte de garantie et des manuels."}, {'label': 'Précision Mécanique', 'text': "Test au chrono-comparateur de l'amplitude, du repère et de la réserve de marche."}]};
const process = {'title': 'Comment Céder Votre Montre à Strasbourg', 'steps': [{'title': '1. Évaluation Préliminaire', 'body': 'Transmettez photos nettes du cadran, du boîtier et des documents de garantie.'}, {'title': '2. Expertise Physique', 'body': 'Contrôle visuel et mécanique dans nos salons de 1850 ou à votre chalet.'}, {'title': '3. Offre Ferme', 'body': 'Proposition transparente calquée sur les cotes de collection actuelles.'}, {'title': '4. Virement Immédiat', 'body': 'Règlement immédiat par virement bancaire instantané avec facture de rachat.'}]};
const faqs = [{'q': 'Rachetez-vous des montres sans boîte ni papiers à Strasbourg ?', 'a': 'Oui, nous expertisons et rachetons des montres authentiques même sans papiers, après vérification rigoureuse de leur provenance légale et de leurs composants.'}, {'q': 'Achetez-vous des montres à réviser ou non fonctionnelles ?', 'a': "Tout à fait, nous déduisons simplement le coût d'une révision technique dans l'offre formulée."}, {'q': 'Quel type de règlement est effectué ?', 'a': 'Le paiement est opéré obligatoirement par virement bancaire sécurisé instantané dès validation de la vente.'}];
const related = [{'label': 'Haute Joaillerie Signée', 'href': '/rachat-haute-joaillerie-signee-strasbourg'}, {'label': 'Diamants Certifiés', 'href': '/rachat-diamant-strasbourg'}, {'label': 'Or & Bijoux Anciens', 'href': '/rachat-bijoux-anciens-strasbourg'}, {'label': 'Strasbourg Le Praz', 'href': '/rachat-bijoux-strasbourg-le-praz-1300'}];
const gallery = [
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
];

export default function Page() {
  return (
    <ServicePage
      slug="rachat-montres-luxe-strasbourg"
      hero={{
        eyebrow: "Haute Horlogerie Suisse · Strasbourg (Place Kléber)",
        title: "Rachat de Montres de Luxe à Strasbourg (Place Kléber)",
        titleHighlight: "Rolex, Patek Philippe, Richard Mille & Audemars Piguet",
        intro: "Expertise horlogère indépendante et rachat immédiat des garde-temps les plus convoités au monde dans les salons ou chalets de Strasbourg.",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Expertise et rachat montres de luxe Rolex et Patek Philippe à Strasbourg (Place Kléber)",
      }}
      category="Montres de Prestige"
      defaultItemType="Montre de Luxe"
      defaultSubject="Estimation Montre de Prestige à Strasbourg"
      introBlock={{
        eyebrow: "Haute Horlogerie Suisse · Strasbourg (Place Kléber)",
        title: "Évaluation Horlogère de Précision et Achat Immédiat à Strasbourg",
        paragraphs: ["Le marché de la haute horlogerie exige une maîtrise pointue des calibres, de l'état des boîtiers, de la coévité des cadrans et des composants d'origine.", "À Strasbourg (Place Kléber), nous recevons collectionneurs et esthètes souhaitant céder des références emblématiques : Rolex Daytona, Submariner, GMT-Master II 'Pepsi', Patek Philippe Nautilus ou Aquanaut, Royal Oak d'Audemars Piguet ainsi que les chefs-d'œuvre de Richard Mille et F.P. Journe.", 'Nous évaluons les pièces modernes comme les modèles vintage patinés, en formulant des offres en adéquation avec les derniers résultats des grandes ventes internationales.'],
      }}
      criteria={criteria}
      process={process}
      gallery={gallery}
      faqs={faqs}
      related={related}
    />
  );
}
