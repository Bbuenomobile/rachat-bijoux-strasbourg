import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Pierres Précieuses Strasbourg (Place Kléber) | Émeraudes, Rubis, Saphirs, Perles | " + site.name,
  description: "Expertise gemmologique scientifique et rachat de pierres précieuses de couleur et perles fines à Strasbourg (Place Kléber) : émeraudes de Colombie, saphirs non chauffés, rubis.",
  alternates: {
    canonical: `${site.url}/rachat-pierres-precieuses-strasbourg`,
  },
};

const criteria = {'title': "Critères d'Évaluation des Pierres de Couleur", 'items': [{'label': 'Origine Géographique', 'text': 'Prime déterminante pour les gisements légendaires (Muzo, Mogok, Cachemire, Ceylan).'}, {'label': 'Absence de Traitement', 'text': "Valorisation maximale pour les saphirs et rubis 'non chauffés' et émeraudes 'sans huile'."}, {'label': 'Pureté & Éclat', 'text': 'Équilibre entre transparence cristalline et intensité de la saturation de couleur.'}, {'label': 'Qualité de Taille', 'text': 'Mise en valeur de la couleur primaire et symétrie des facettes.'}, {'label': 'Qualité des Perles', 'text': 'Orient, lustre nacré, régularité du grain et certification fine vs culture.'}]};
const process = {'title': 'Protocole de Vente de Vos Gemmes', 'steps': [{'title': '1. Éléments Préliminaires', 'body': 'Partagez certificats existants ou photographies haute résolution de vos pierres.'}, {'title': '2. Analyse Optique', 'body': 'Examen instrumental des inclusions diagnostiques à Strasbourg (Place Kléber).'}, {'title': '3. Offre de Rachat', 'body': "Proposition claire positionnée selon les ventes de gemmes d'exception internationales."}, {'title': '4. Règlement Immédiat', 'body': 'Virement bancaire instantané formalisé par acte de cession en règle.'}]};
const faqs = [{'q': "Comment certifiez-vous qu'un saphir n'a pas été chauffé ?", 'a': "Par examen microscopique à immersion et polariscope pour analyser l'intégrité des inclusions de rutile ('soie') et les zones de croissance cristalline."}, {'q': 'Achetez-vous des rangs de perles fines anciennes à Strasbourg ?', 'a': "Oui, nous rachetons colliers de perles fines naturelles d'époque ainsi que des perles de culture haut de gamme (Mers du Sud, Tahiti, Akoya)."}, {'q': 'Faut-il démonter les pierres de leur monture ?', 'a': "Non, notre matériel permet d'estimer les constantes optiques des pierres directement sur leur serti."}];
const related = [{'label': 'Diamants Certifiés', 'href': '/rachat-diamant-strasbourg'}, {'label': 'Haute Joaillerie Signée', 'href': '/rachat-haute-joaillerie-signee-strasbourg'}, {'label': 'Bijoux Anciens', 'href': '/rachat-bijoux-anciens-strasbourg'}, {'label': 'Méribel & Alsace & Grand Est', 'href': '/rachat-bijoux-meribel-val-thorens-3-vallees'}];
const gallery = [
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
];

export default function Page() {
  return (
    <ServicePage
      slug="rachat-pierres-precieuses-strasbourg"
      hero={{
        eyebrow: "Gemmes Rares & Perles Fines · Strasbourg (Place Kléber)",
        title: "Rachat de Pierres Précieuses et Perles Fines à Strasbourg",
        titleHighlight: "Émeraudes, Rubis, Saphirs & Perles Fines",
        intro: "Expertise gemmologique avancée et rachat de pierres précieuses de couleur exceptionnelles non traitées et perles naturelles d'époque à Strasbourg (Place Kléber).",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Expertise et rachat de pierres précieuses émeraudes et saphirs à Strasbourg",
      }}
      category="Pierres Précieuses & Perles"
      defaultItemType="Pierre Précieuse ou Perles"
      defaultSubject="Estimation Pierres Précieuses à Strasbourg"
      introBlock={{
        eyebrow: "Gemmes Rares & Perles Fines · Strasbourg (Place Kléber)",
        title: "Identification Gemmologique de Pointe à Strasbourg",
        paragraphs: ["Les pierres précieuses de couleur présentent des exigences gemmologiques pointues : identification de l'origine géographique (Colombie pour les émeraudes, Birmanie pour les rubis, Ceylan ou Cachemire pour les saphirs) et détection des traitements thermiques ou résines.", 'Grâce à des instruments de laboratoire portables (réfractomètre, polariscope, spectroscopie), nos gemmologues certifient la nature exacte de vos gemmes montées ou isolées.', "Nous rachetons les pierres d'exception avec ou sans certificat suisse (SSEF, Gübelin, GIA), au plus haut niveau de valorisation du marché international."],
      }}
      criteria={criteria}
      process={process}
      gallery={gallery}
      faqs={faqs}
      related={related}
    />
  );
}
