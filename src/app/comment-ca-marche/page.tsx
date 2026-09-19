import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Comment ça Marche — Rachat Joaillerie & Diamants | Strasbourg",
  description: "Découvrez notre processus transparent de rachat de bijoux, diamants et montres à Strasbourg : estimation sous vos yeux, offre ferme au cours mondial et virement instantané.",
  alternates: { canonical: `${site.url}/comment-ca-marche` },
};

export default function CommentCaMarchePage() {
  const steps = [
    {
      num: "01",
      title: "Prise de Contact & Premier Diagnostic",
      desc: "Contactez notre cabinet par téléphone, WhatsApp ou via notre formulaire sécurisé. Vous nous transmettez le descriptif de vos pièces (certificats GIA/HRD, factures, photos ou boîtes d'origine si disponibles) afin de fixer un rendez-vous confidentiel Place Kléber ou à votre domicile.",
    },
    {
      num: "02",
      title: "Expertise Gemmologique Sous Vos Yeux",
      desc: "Dans nos salons privés au centre de Strasbourg ou dans l'intimité de votre résidence, nos gemmologues diplômés analysent chaque pièce avec un matériel scientifique de pointe : réfractomètre, polariscope, microscope gemmologique et spectromètre.",
    },
    {
      num: "03",
      title: "Offre d'Achat Ferme au Cours Officiel",
      desc: "Nous calculons une offre nette au cours mondial : grille Rapaport pour les diamants certifiés, fixing de Londres (LBMA) pour l'or et prime historique pour les signatures prestigieuses (Cartier, Van Cleef & Arpels, Rolex, Patek Philippe). Aucune commission cachée.",
    },
    {
      num: "04",
      title: "Règlement Immédiat par Virement Bancaire",
      desc: "Après signature de l'acte de vente et présentation d'une pièce d'identité conforme à la législation française, le paiement est immédiatement déclenché par virement bancaire instantané SEPA sur votre compte bancaire.",
    },
  ];

  return (
    <Section className="py-16 md:py-24">
      <div className="container-x max-w-4xl space-y-16">
        <div className="text-center space-y-4">
          <span className="label text-[#d4af37]">Processus Transparent & Sécurisé</span>
          <h1 className="h1 text-ink-900">Comment Vendre Vos Bijoux à Strasbourg</h1>
          <p className="lead text-ink-600 max-w-2xl mx-auto">
            Une démarche claire, rapide et strictement confidentielle en quatre étapes simples.
          </p>
        </div>

        <div className="grid gap-8">
          {steps.map((s) => (
            <div key={s.num} className="bg-white p-8 md:p-10 rounded-2xl border border-ink-900/10 shadow-sm flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <span className="font-display text-4xl font-bold text-[#d4af37] shrink-0">{s.num}</span>
              <div className="space-y-2">
                <h2 className="font-display text-2xl font-semibold text-ink-900">{s.title}</h2>
                <p className="text-ink-700 leading-relaxed text-base">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <Link href="/estimation-gratuite" className="btn-gold text-sm py-4 px-8 uppercase tracking-wider font-semibold">
            Demander une Estimation Immédiate
          </Link>
        </div>
      </div>
    </Section>
  );
}
