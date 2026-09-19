import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Haute Joaillerie Signée Strasbourg | Cartier, Van Cleef, Boucheron, Graff | " + site.name,
  description: "Rachat au meilleur prix de haute joaillerie signée à Strasbourg (Place Kléber) : Cartier, Van Cleef & Arpels, Boucheron, Graff, Bulgari, Chopard. Discrétion absolue.",
  alternates: {
    canonical: `${site.url}/rachat-haute-joaillerie-signee-strasbourg`,
  },
};

const criteria = {'title': 'Critères de Valorisation de la Joaillerie Signée', 'items': [{'label': 'Authenticité & Poinçons', 'text': 'Contrôle microscopique de la signature de la maison et de la gravure de série.'}, {'label': 'Ligne & Modèle Iconique', 'text': 'Prime significative sur les collections emblématiques et modèles intemporels.'}, {'label': "Écrin & Certificat d'Origine", 'text': 'Valorisation maximale pour les parures complètes avec facture ou certificat de la maison.'}, {'label': 'Sélection des Pierres', 'text': "Examen de la pureté et de l'éclat des diamants selon les critères de haute joaillerie."}, {'label': 'État Esthétique', 'text': 'Préservation de la structure originelle sans intervention non agréée.'}]};
const process = {'title': "Étapes de Vente d'un Bijou de Grande Maison", 'steps': [{'title': '1. Pré-expertise Discrète', 'body': 'Partagez les photos et numéros de série par formulaire crypté ou WhatsApp.'}, {'title': '2. Rendez-vous Privé', 'body': 'Rencontre dans nos salons de Strasbourg (Place Kléber) ou directement dans votre suite ou chalet.'}, {'title': '3. Offre Immédiate', 'body': 'Offre ferme positionnée au niveau des meilleures cotes internationales de collection.'}, {'title': '4. Virement Bancaire Sécurisé', 'body': 'Paiement instantané en EUR avec remise de justificatif légal complet.'}]};
const faqs = [{'q': 'Achetez-vous des bijoux de grandes maisons sans certificat à Strasbourg ?', 'a': "Oui, grâce à notre expérience et à nos archives de fabrication, nous sommes habilités à authentifier formellement les pièces signées même dépourvues de papiers d'origine."}, {'q': 'Quelles sont les marques les plus recherchées à Strasbourg ?', 'a': 'Cartier, Van Cleef & Arpels, Boucheron, Graff, Bulgari, Chaumet, Chopard, Buccellati, Messika et Harry Winston.'}, {'q': 'Quel délai pour le versement des fonds ?', 'a': "Le virement bancaire instantané est exécuté séance tenante dès signature de l'accord de cession."}];
const related = [{'label': 'Diamants Certifiés', 'href': '/rachat-diamant-strasbourg'}, {'label': 'Montres de Prestige', 'href': '/rachat-montres-luxe-strasbourg'}, {'label': 'Bijoux Anciens', 'href': '/rachat-bijoux-anciens-strasbourg'}, {'label': 'Strasbourg Moriond', 'href': '/rachat-bijoux-strasbourg-moriond-1650'}];
const gallery = [
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
];

export default function Page() {
  return (
    <ServicePage
      slug="rachat-haute-joaillerie-signee-strasbourg"
      hero={{
        eyebrow: "Haute Joaillerie de Place Vendôme · Strasbourg (Place Kléber)",
        title: "Rachat de Haute Joaillerie Signée à Strasbourg",
        titleHighlight: "Cartier, Van Cleef & Arpels, Boucheron, Graff & Bulgari",
        intro: "Valorisation et rachat immédiat des plus grandes signatures de la haute joaillerie internationale dans la station la plus exclusive des Alpes.",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Rachat haute joaillerie signée Cartier et Van Cleef à Strasbourg (Place Kléber)",
      }}
      category="Haute Joaillerie Signée"
      defaultItemType="Bijou Signé"
      defaultSubject="Estimation Haute Joaillerie Signée à Strasbourg"
      introBlock={{
        eyebrow: "Haute Joaillerie de Place Vendôme · Strasbourg (Place Kléber)",
        title: "La Meilleure Cotation Internationale pour Vos Pièces Signées",
        paragraphs: ['Les créations des grandes maisons joaillières (Cartier, Van Cleef & Arpels avec ses pièces Alhambra ou Serti Mystérieux, Boucheron, Graff, Bulgari avec Serpenti, Chopard, Harry Winston) possèdent une valeur intrinsèque et une cote mondiale remarquable.', "Nos spécialistes analysent l'authenticité de la gravure, les numéros de série uniques, la provenance et la présence des écrins et certificats d'origine pour formuler des propositions d'achat supérieures.", 'Nous intervenons avec une réactivité et une discrétion adaptées à la clientèle haut de gamme de Strasbourg (Place Kléber).'],
      }}
      criteria={criteria}
      process={process}
      gallery={gallery}
      faqs={faqs}
      related={related}
    />
  );
}
