import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Lingots & Pièces d'Or à Strasbourg (Place Kléber) | Cours Officiel de l'Or | " + site.name,
  description: "Achat et estimation d'or d'investissement à Strasbourg (Place Kléber) : lingots certifiés LBMA (10g à 1kg) et pièces d'or (Napoléons, Souverains, Krugerrands). Virement instantané.",
  alternates: {
    canonical: `${site.url}/rachat-lingots-pieces-or-strasbourg`,
  },
};

const criteria = {'title': "Critères d'Achat des Lingots et Monnaies", 'items': [{'label': 'Certification Fondeur LBMA', 'text': "Scellé d'origine, bulletin d'essai et numéro de série gravé garantissant la traçabilité."}, {'label': 'Titre Vérifié', 'text': "Pureté 999,9‰ pour les lingots d'or pur et titre officiel de frappe pour les pièces d'époque."}, {'label': 'État des Pièces', 'text': 'Absence de choc ou de rayures sur la tranche pour préserver la prime numismatique.'}, {'label': 'Fixing en Direct', 'text': "Calcul rigoureux calqué sur le cours spot de l'or sans intermédiaire."}, {'label': 'Régime Fiscal Conforme', 'text': 'Accompagnement sur le choix entre la taxe forfaitaire (TMP) et le régime des plus-values (TPV).'}]};
const process = {'title': 'Protocole de Vente de Vos Lingots et Pièces', 'steps': [{'title': '1. Communication des Actifs', 'body': 'Indiquez-nous la quantité, le poids et le type de pièces ou lingots à céder.'}, {'title': '2. Blocage du Cours', 'body': "Fixation du prix en cohérence avec le cours international de l'or au moment convenu."}, {'title': '3. Contrôle Sécurisé', 'body': 'Pesée et vérification de densité non destructive dans nos salons de Strasbourg (Place Kléber).'}, {'title': '4. Virement Bancaire Immédiat', 'body': "Règlement immédiat par virement avec remise de l'attestation fiscale de vente."}]};
const faqs = [{'q': "Quels documents présenter pour vendre des lingots d'or à Strasbourg ?", 'a': "Une pièce d'identité en cours de validité (carte nationale ou passeport) et un justificatif de domicile ou document bancaire pour le virement."}, {'q': "Achetez-vous des lingots sans scellé d'origine ?", 'a': 'Oui, nous procédons à un test de spectrométrie XRF ou balance hydrostatique pour certifier la teneur à 24 carats avant rachat.'}, {'q': 'Y a-t-il une limite de montant ?', 'a': 'Aucune limite quantitative : nous disposons des réserves de liquidité nécessaires pour honorer des cessions importantes.'}];
const related = [{'label': 'Diamants Certifiés', 'href': '/rachat-diamant-strasbourg'}, {'label': 'Bijoux Anciens', 'href': '/rachat-bijoux-anciens-strasbourg'}, {'label': 'Montres de Prestige', 'href': '/rachat-montres-luxe-strasbourg'}, {'label': 'Strasbourg Village', 'href': '/rachat-bijoux-strasbourg-village-1550'}];
const gallery = [
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
];

export default function Page() {
  return (
    <ServicePage
      slug="rachat-lingots-pieces-or-strasbourg"
      hero={{
        eyebrow: "Or d'Investissement · Strasbourg (Place Kléber)",
        title: "Rachat de Lingots et Pièces d'Or à Strasbourg : Cours Spot en Direct",
        titleHighlight: "Transparence Totale & Cours de Bourse",
        intro: "Rachat immédiat d'or fin 24 carats (999,9/1000) et pièces d'or de bourse au fixing officiel de Londres (LBMA) à Strasbourg (Place Kléber).",
        image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Rachat de lingots d'or certifiés LBMA et pièces à Strasbourg (Place Kléber)",
      }}
      category="Or d'Investissement"
      defaultItemType="Lingots ou Pièces d'Or"
      defaultSubject="Estimation Or d'Investissement à Strasbourg"
      introBlock={{
        eyebrow: "Or d'Investissement · Strasbourg (Place Kléber)",
        title: "Comptoir Professionnel d'Or d'Investissement à Strasbourg",
        paragraphs: ["Les lingots scellés issus de fondeurs reconnus Good Delivery LBMA (Metalor, C.Hafner, Umicore, Argor-Heraeus, Valcambi) et les pièces d'or historiques constituent des actifs de réserve de premier plan.", "Dans notre cabinet de Strasbourg, nous achetons lingotins de 10g à 500g, lingots de 1 kilo ainsi que les monnaies d'or françaises et internationales (Napoléon 20 Francs, Croix Suisse 20 CHF, Souverain George V, Krugerrand, American Eagle).", "La valorisation s'effectue strictement au fixing du marché en direct, avec respect scrupuleux du cadre fiscal français applicable aux métaux précieux (TMP ou TPV)."],
      }}
      criteria={criteria}
      process={process}
      gallery={gallery}
      faqs={faqs}
      related={related}
    />
  );
}
