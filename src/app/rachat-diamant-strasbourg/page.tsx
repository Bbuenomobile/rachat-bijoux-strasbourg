import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Diamant Strasbourg (Place Kléber) : Rapaport & GIA | Expertise & Achat Immédiat | " + site.name,
  description: "Cabinet gemmologique spécialisé dans l'expertise et le rachat immédiat de diamants certifiés (GIA, HRD, SSEF, IGI), solitaires et brillants d'exception à Strasbourg (Place Kléber).",
  alternates: {
    canonical: `${site.url}/rachat-diamant-strasbourg`,
  },
};

const criteria = {'title': "Critères d'Évaluation du Diamant", 'items': [{'label': 'Poids en Carats (Carat)', 'text': 'Pesée de haute précision au centième de carat sur balance hydrostatique homologuée.'}, {'label': 'Couleur (Color)', 'text': 'Gradation chromatique comparative avec pierres étalons de D à Z et expertise des Fancy Colors.'}, {'label': 'Pureté (Clarity)', 'text': 'Examen minutieux sous grossissement 10x de FL/IF aux inclusions visibles.'}, {'label': 'Qualité de Taille (Cut)', 'text': 'Analyse des proportions, de la symétrie et du poli (Triple Excellent).'}, {'label': 'Certificat International', 'text': "Plus-value reconnue pour les rapports d'expertise GIA, HRD ou SSEF."}]};
const process = {'title': 'Procédure de Rachat en 4 Étapes', 'steps': [{'title': '1. Premier Contact', 'body': "Transmettez-nous les certificats ou photos et convenez d'un rendez-vous privé à Strasbourg."}, {'title': '2. Examen Gemmologique', 'body': 'Analyse visuelle et spectroscopique réalisée sous vos yeux en salon ou à domicile.'}, {'title': '3. Offre Ferme', 'body': "Proposition d'achat immédiat basée sur le cours mondial Rapaport du jour."}, {'title': '4. Virement Immédiat', 'body': "Signature de l'acte de vente et virement bancaire instantané sur votre compte."}]};
const faqs = [{'q': 'Achetez-vous des diamants sans certificat à Strasbourg ?', 'a': 'Parfaitement. Nos gemmologues diplômés GIA établissent la gradation complète des 4C directement dans notre laboratoire de Strasbourg (Place Kléber).'}, {'q': "Comment est calculée l'offre de rachat ?", 'a': "L'offre s'appuie directement sur le cours mondial officiel du Rapaport Diamond Report et sur la demande du marché international de la haute joaillerie."}, {'q': 'Pouvez-vous vous déplacer dans mon hôtel ou chalet ?', 'a': 'Oui, nous organisons des rendez-vous discrets en hôtels de luxe (Hôtel Régent Petite France, Maison Rouge, Sofitel) ou dans les chalets privés de Strasbourg et des Alsace & Grand Est.'}];
const related = [{'label': 'Haute Joaillerie Signée', 'href': '/rachat-haute-joaillerie-signee-strasbourg'}, {'label': 'Bijoux Anciens & Époque', 'href': '/rachat-bijoux-anciens-strasbourg'}, {'label': 'Montres de Prestige', 'href': '/rachat-montres-luxe-strasbourg'}, {'label': 'Strasbourg (Place Kléber)', 'href': '/rachat-bijoux-strasbourg-1850'}];
const gallery = [
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
];

export default function Page() {
  return (
    <ServicePage
      slug="rachat-diamant-strasbourg"
      hero={{
        eyebrow: "Gemmologie Officielle · Place Kléber & Salons Privés Strasbourg",
        title: "Rachat de Diamants à Strasbourg : Cours Rapaport & Certificats GIA",
        titleHighlight: "Cotation Officielle Rapaport en Direct",
        intro: "Cabinet gemmologique indépendant spécialisé dans l'expertise et le rachat immédiat de diamants taillés ou bruts, solitaires d'exception et diamants de couleur Fancy à Strasbourg. Virement instantané.",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Expertise et rachat de diamants certifiés GIA à Strasbourg (Place Kléber)",
      }}
      category="Diamants Certifiés"
      defaultItemType="Diamant"
      defaultSubject="Estimation Diamant Certifié à Strasbourg"
      introBlock={{
        eyebrow: "Gemmologie Officielle · Place Kléber & Salons Privés Strasbourg",
        title: "Expertise Scientifique et Rachat Immédiat de Diamants à Strasbourg",
        paragraphs: ["Dans nos salons privés de Strasbourg (Place Kléber) ou directement dans la quiétude de votre chalet, nos gemmologues diplômés réalisent l'expertise de vos diamants à l'aide d'instruments optiques de précision : microscopie stéréoscopique, réfractomètre et lampe UV.", "Qu'il s'agisse d'un diamant rond taille brillant moderne, de tailles fantaisie (émeraude, poire, coussin, radiant, ovale, princesse) ou de diamants anciens taillés à la mine, nous appliquons rigoureusement la grille officielle du Rapaport Diamond Report.", 'Nous garantissons un rachat direct sans intermédiaires ni commissions de vente aux enchères, avec règlement immédiat par virement bancaire sécurisé en Euros.'],
      }}
      criteria={criteria}
      process={process}
      gallery={gallery}
      faqs={faqs}
      related={related}
    />
  );
}
