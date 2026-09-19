import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/section';
import { TrustBar } from '@/components/trust-bar';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Laboratoire Gemmologique à Strasbourg (Place Kléber) | Rachat Bijoux Strasbourg",
  description: "Instruments scientifiques de précision pour l'analyse et la certification de diamants, pierres précieuses et haute joaillerie à Strasbourg (Place Kléber).",
  alternates: { canonical: `${site.url}/laboratoire-gemmologique-strasbourg` },
};

export default function LaboratoirePage() {
  const instruments = [
    {
      name: "Microscope Gemmologique à Fond Noir",
      desc: "Inspection détaillée des inclusions naturelles, des micro-fissures et lecture laser du numéro de certificat GIA / HRD gravé sur le rondiste.",
    },
    {
      name: "Réfractomètre Optique de Précision",
      desc: "Mesure exacte de l'indice de réfraction (IR) et de la biréfringence pour distinguer les gemmes naturelles des synthèses et imitations.",
    },
    {
      name: "Spectroscope & Lampe UV Ondes Courtes/Longues",
      desc: "Contrôle de la fluorescence des diamants et détection des traitements thermiques ou résines dans les émeraudes et rubis.",
    },
    {
      name: "Balance Hydrostatique Homologuée",
      desc: "Détermination précise de la densité spécifique et pesée au centième de carat des pierres et métaux précieux.",
    },
  ];

  return (
    <>
      <Section className="py-16 md:py-24 bg-[#08162b] text-white">
        <div className="container-x max-w-4xl text-center space-y-6">
          <span className="label text-[#d4af37]">Technologie & Science des Matériaux</span>
          <h1 className="h1 text-white">Laboratoire Gemmologique & Expertise Scientifique à Strasbourg</h1>
          <p className="lead text-ink-200 max-w-2xl mx-auto">
            Nous disposons d'équipements analytiques de pointe à Strasbourg (Place Kléber) pour authentifier et certifier chaque gemme avec une rigueur irréprochable.
          </p>
        </div>
      </Section>

      <TrustBar />

      <Section>
        <div className="container-x max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-ink-700 leading-relaxed">
              <SectionHeading
                eyebrow="Rigueur Analytique"
                title="Des Analyses Non Destructives pour une Estimation Incontestable"
              />
              <p>
                Dans le marché contemporain des gemmes de luxe, l'émergence de diamants synthétiques de laboratoire (CVD et HPHT) et de pierres ayant subi des traitements thermiques avancés impose des instruments de pointe pour sécuriser chaque transaction.
              </p>
              <p>
                Dans notre cabinet de Strasbourg (Place Kléber), chaque analyse est conduite selon des méthodes strictement non destructives préservant la perfection de vos pièces de haute joaillerie.
              </p>
              <p>
                Les conclusions de nos gemmologues diplômés constituent le fondement d'offres de rachat fermes, transparentes et alignées sur les cours officiels du Rapaport et du fixing de Londres.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="relative h-[440px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80"
                  alt="Laboratoire gemmologique scientifique à Strasbourg (Place Kléber)"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-sand-50">
        <div className="container-x max-w-5xl">
          <SectionHeading
            eyebrow="Équipements de Haute Précision"
            title="Nos Instruments d'Expertise en Station"
            align="center"
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {instruments.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-ink-900/10 space-y-3 shadow-sm">
                <h3 className="font-display font-semibold text-lg text-ink-900">{item.name}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[#08162b] text-white">
        <div className="container-x max-w-3xl text-center space-y-6">
          <h2 className="font-display text-3xl font-semibold">Prendre Rendez-vous au Laboratoire à Strasbourg</h2>
          <p className="text-ink-200 text-sm md:text-base leading-relaxed">
            Consultez nos gemmologues diplômés dans nos salons privés de Strasbourg (Place Kléber) ou demandez un déplacement sécurisé avec équipement d'expertise dans votre chalet ou hôtel.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link href="/estimation-gratuite" className="btn-gold">Prendre Rendez-vous</Link>
            <Link href="/contact" className="btn-outline border-white/30 text-white hover:bg-white/10">Contact Direct</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
