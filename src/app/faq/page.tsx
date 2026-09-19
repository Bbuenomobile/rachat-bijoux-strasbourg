import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Foire Aux Questions (FAQ) | Rachat Bijoux Strasbourg",
  description: "Réponses à toutes vos questions sur l'expertise, l'estimation et le rachat de haute joaillerie, diamants et montres de collection à Strasbourg.",
  alternates: { canonical: `${site.url}/faq` },
};

export default function FaqPage() {
  const faqs = [
    {
      q: "Comment est calculée la valeur d'un diamant certifié ?",
      a: "La valorisation d'un diamant certifié (GIA, HRD, IGI ou SSEF) repose sur la règle des 4C (Carat, Color, Clarity, Cut) et sur la grille officielle internationale du Rapaport Diamond Report, actualisée chaque semaine. Nous y appliquons les décotes ou surcotes réelles du marché international.",
    },
    {
      q: "Rachetez-vous les bijoux sans certificat d'origine ?",
      a: "Absolument. Notre laboratoire gemmologique dispose de tout l'équipement scientifique nécessaire (réfractomètre, polariscope, microscope et testeurs thermiques/conducteurs) pour analyser vos gemmes et métaux précieux sur place et en déterminer précisément la pureté et l'authenticité.",
    },
    {
      q: "Pouvez-vous vous déplacer à domicile en Alsace ?",
      a: "Oui. Pour des pièces de haute joaillerie, collections horlogères ou diamants d'investissement importants, nos gemmologues experts se déplacent dans la plus stricte discrétion à Strasbourg (Orangerie, Robertsau, Contades), ainsi qu'à Colmar, Mulhouse ou Haguenau.",
    },
    {
      q: "Quel est le délai de paiement lors d'une transaction ?",
      a: "Le paiement est instantané. Dès acceptation de notre offre d'achat ferme et vérification des pièces d'identité requises par la législation française, nous effectuons immédiatement un virement bancaire instantané SEPA sur votre compte bancaire.",
    },
    {
      q: "Quelles sont les marques de haute joaillerie les plus recherchées ?",
      a: "Nous rachetons avec de fortes primes à la signature les créations des grandes maisons de la Place Vendôme et internationales : Cartier, Van Cleef & Arpels, Boucheron, Chaumet, Bulgari, Chopard, Graff, Harry Winston et Buccellati.",
    },
    {
      q: "Quelle fiscalité s'applique lors de la vente de bijoux précieux en France ?",
      a: "En France, les cessions d'objets précieux et bijoux par des particuliers bénéficient d'une exonération totale de taxe si le montant de la transaction est inférieur ou égal à 5 000 euros. Au-delà, le vendeur peut opter soit pour la taxe forfaitaire sur les objets précieux (TMP de 6,5%), soit pour le régime des plus-values réelles sur justificatif d'acquisition.",
    },
  ];

  return (
    <Section className="py-16 md:py-24">
      <div className="container-x max-w-4xl space-y-12">
        <div className="text-center space-y-4">
          <span className="label text-[#d4af37]">Questions Fréquentes</span>
          <h1 className="h1 text-ink-900">Tout Savoir sur le Rachat de Haute Joaillerie</h1>
          <p className="lead text-ink-600 max-w-2xl mx-auto">
            Retrouvez les réponses aux interrogations de nos clients privés et collectionneurs à Strasbourg.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-ink-900/10 shadow-sm space-y-3">
              <h2 className="font-display text-xl font-semibold text-ink-900">{f.q}</h2>
              <p className="text-ink-700 leading-relaxed text-base">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="text-center pt-6">
          <Link href="/contact" className="btn-gold text-sm py-4 px-8 uppercase tracking-wider font-semibold">
            Poser une Question Spécifique
          </Link>
        </div>
      </div>
    </Section>
  );
}
