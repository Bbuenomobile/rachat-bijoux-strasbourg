import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Bijoux Anciens & Or à Strasbourg (Place Kléber) | Estimation Haute Époque | " + site.name,
  description: "Expertise et rachat de bijoux anciens, parures Art Déco, bijoux d'époque 18K et or d'héritage à Strasbourg (Place Kléber). Paiement immédiat par virement bancaire.",
  alternates: {
    canonical: `${site.url}/rachat-bijoux-anciens-strasbourg`,
  },
};

const criteria = {'title': "Critères d'Expertise des Bijoux Anciens", 'items': [{'label': 'Titre du Métal', 'text': "Contrôle du titre d'or (750/1000 - 18k ou platine 950/1000) et des poinçons officiels."}, {'label': 'Époque & Style', 'text': 'Valorisation des périodes recherchées : Art Déco, Belle Époque, XIXe siècle, rétro 1940-1950.'}, {'label': 'Gemmes Serties', 'text': 'Gradation des diamants anciens et pierres précieuses de couleur sans desceller les montures.'}, {'label': "Signature d'Atelier", 'text': 'Reconnaissance des poinçons de maîtres orfèvres et fabricants parisiens réputés.'}, {'label': 'État de Conservation', 'text': "Intégrité des maillons, des fermoirs et authenticité des patines d'époque."}]};
const process = {'title': 'Comment Vendre Vos Bijoux Anciens à Strasbourg', 'steps': [{'title': '1. Demande Confidentielle', 'body': 'Envoyez photos et descriptions par notre formulaire sécurisé ou via WhatsApp.'}, {'title': '2. Expertise Personnalisée', 'body': 'Rendez-vous confidentiel à Strasbourg (Place Kléber) ou visite à domicile privé.'}, {'title': '3. Évaluation Globale', 'body': 'Offre claire cumulant valeur du métal, des gemmes et prime artistique.'}, {'title': '4. Règlement Immédiat', 'body': 'Virement bancaire instantané accompagné du bordereau officiel de transaction.'}]};
const faqs = [{'q': "Dessertissez-vous les pierres précieuses pour l'expertise ?", 'a': "Non, nos gemmologues évaluent les diamants et pierres précieuses directement sur leur monture d'époque afin de ne jamais altérer l'intégrité de la pièce."}, {'q': "Quelle est la différence avec un simple rachat d'or ?", 'a': "Un rachat d'or classique ne rémunère que le poids brut à la fonte. Nous achetons vos bijoux comme des objets d'art, en payant une prime sur la signature et l'époque."}, {'q': "Rachetez-vous également des débris d'or ou pièces abîmées ?", 'a': 'Oui, nous rachetons tout objet en or 18 carats ou platine, même cassé, au meilleur cours spot du marché.'}];
const related = [{'label': 'Diamants Certifiés', 'href': '/rachat-diamant-strasbourg'}, {'label': 'Haute Joaillerie Signée', 'href': '/rachat-haute-joaillerie-signee-strasbourg'}, {'label': "Or d'Investissement", 'href': '/rachat-lingots-pieces-or-strasbourg'}, {'label': 'Jardin Alpin', 'href': '/rachat-bijoux-strasbourg-jardin-alpin'}];
const gallery = [
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
];

export default function Page() {
  return (
    <ServicePage
      slug="rachat-bijoux-anciens-strasbourg"
      hero={{
        eyebrow: "Bijoux d'Époque & Or 18K · Strasbourg",
        title: "Rachat de Bijoux Anciens et Or 18K à Strasbourg",
        titleHighlight: "Valorisation Historique & Manuelle",
        intro: "À la différence des comptoirs de fonte traditionnels, nous valorisons à Strasbourg la rareté historique, la finesse du travail d'atelier et les gemmes serties de vos bijoux anciens.",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Rachat bijoux anciens Art Déco et or 18k à Strasbourg",
      }}
      category="Bijoux Anciens & Or"
      defaultItemType="Bijoux Anciens"
      defaultSubject="Estimation Bijoux Anciens à Strasbourg"
      introBlock={{
        eyebrow: "Bijoux d'Époque & Or 18K · Strasbourg",
        title: "Valorisation Impartiale de Joyaux Anciens et Successions à Strasbourg",
        paragraphs: ["Nous estimons l'or 18 carats (750 millièmes) et le platine selon le cours boursier international, tout en récompensant le cachet artistique et l'époque de vos pièces.", "Qu'il s'agisse de broches Art Nouveau, de bagues Art Déco serties d'émeraudes ou de diamants taille ancienne, ou de parures de familles nobles et industrielles, nous dégageons la pleine valeur patrimoniale de votre collection.", "Toutes les pesées s'effectuent sur balances homologuées avec test non destructif du titre des métaux précieux."],
      }}
      criteria={criteria}
      process={process}
      gallery={gallery}
      faqs={faqs}
      related={related}
    />
  );
}
