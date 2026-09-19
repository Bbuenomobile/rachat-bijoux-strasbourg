import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Or & Lingots Strasbourg | Vente Lingotins, Napoléons, Souverains en Alsace",
  description: "Rachat d'or d'investissement à Strasbourg au cours officiel de la bourse de Londres (LBMA). Lingots certifiés, pièces boursables et or 18k / 24k comptant.",
  alternates: {
    canonical: `${site.url}/rachat-lingots-pieces-or-strasbourg`,
  },
};

export default function Page() {
  return (
    <ServicePage
      slug="rachat-lingots-pieces-or-strasbourg"
      h1="Rachat d'Or d'Investissement & Lingots à Strasbourg"
      subtitle="Cours de l'or en direct, pesée sur balance homologuée sous vos yeux et exonérations fiscales avantageuses."
      image="https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=80"
      benefits={[
        {"title": "Fixing de Londres (LBMA) en Direct", "desc": "Offre indexée sur les cotations officielles internationales du cours de l'once d'or en temps réel."}, {"title": "Pièces Boursables Sans Décote", "desc": "Napoléons 20 Francs, Souverains britanniques, Krugerrands, 20 Francs Suisse Vreneli, 50 Pesos, US Eagles."}, {"title": "Lingots 1g à 1kg", "desc": "Rachat de lingots et lingotins certifiés par les affineurs agréés LBMA (C-Hafner, Umicore, Metalor, Valcambi)."}, {"title": "Optimisation Fiscale", "desc": "Conseil personnalisé sur le choix optimal entre la TMP (Taxe Forfaitaire) et le régime des plus-values réelles (TPV)."}
      ]}
      sections={[
        {"title": "L'Or d'Investissement à Strasbourg et dans le Grand Est", "body": "Valeur refuge par excellence dans un contexte économique incertain, l'or physique constitue une réserve de valeur majeure. Notre cabinet applique scrupuleusement la réglementation financière française et garantit une transaction parfaitement transparente."}, {"title": "Pesée et Contrôle de Pureté Certifiés", "body": "Chaque lingot ou pièce est contrôlé sur balance de précision homologuée classe II avec vignette annuelle en vigueur, assurant une conformité métrologique totale."}
      ]}
      faqs={[
        {"q": "Quelle fiscalité s'applique lors de la vente d'or en France ?", "a": "Vous pouvez choisir entre la taxe forfaitaire sur les métaux précieux (11,5% tout compris) ou le régime des plus-values réelles (TPV avec abattement de 5% par an dès la 3e année et exonération totale après 22 ans sur justificatif)."}, {"q": "Peut-on être payé en espèces pour l'or ?", "a": "Non, la loi française interdit strictement tout paiement en espèces pour les métaux précieux. Le paiement s'effectue exclusivement par virement bancaire nominatif."}
      ]}
    />
  );
}
