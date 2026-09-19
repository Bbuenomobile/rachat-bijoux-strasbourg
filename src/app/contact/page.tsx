import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { Section } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Contact & Salons Privés Place Kléber | Rachat Bijoux Strasbourg",
  description: "Prenez rendez-vous en salons privés Place Kléber à Strasbourg ou convenez d'un déplacement sécurisé à votre domicile dans le Bas-Rhin et en Alsace.",
  alternates: { canonical: `${site.url}/contact` },
};

export default function ContactPage() {
  return (
    <Section className="py-16 md:py-24">
      <div className="container-x max-w-5xl">
        <div className="text-center space-y-4 mb-16">
          <span className="label text-[#d4af37]">Rendez-vous & Coordonnées</span>
          <h1 className="h1 text-ink-900">Contacter Nos Gemmologues à Strasbourg</h1>
          <p className="lead text-ink-600 max-w-2xl mx-auto">
            Nous vous recevons en toute discrétion dans nos salons privés Place Kléber ou organisons une visite à votre domicile dans tout le Bas-Rhin et en Alsace.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#081a30] text-white p-8 rounded-2xl shadow-xl space-y-6">
              <h2 className="font-display text-2xl font-semibold">Salons Privés Strasbourg</h2>
              <div className="space-y-4 text-sm text-ink-200">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">Adresse</p>
                  <p className="text-white font-medium text-base mt-1">{site.address.street}</p>
                  <p>{site.address.postalCode} {site.address.city} ({site.department})</p>
                  <p>France</p>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <p className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">Téléphone</p>
                  <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="text-white font-medium text-base hover:text-[#d4af37] transition-colors mt-1 block">
                    {site.phoneDisplay}
                  </a>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <p className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">Courriel</p>
                  <a href={`mailto:${site.email}`} className="text-white hover:text-[#d4af37] transition-colors mt-1 block">
                    {site.email}
                  </a>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <p className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">Horaires</p>
                  <p className="mt-1">Lundi au Vendredi : 09h30 – 19h00</p>
                  <p>Samedi : 10h00 – 18h00 (sur rendez-vous)</p>
                  <p>Dimanche : Sur rendez-vous VIP</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-2xl border border-ink-900/10 shadow-sm">
              <ContactForm
                variant="full"
                headline="Demande d'Expertise & Rendez-vous Privé"
                intro="Remplissez ce formulaire confidentiel pour une estimation préliminaire ou pour fixer une rencontre en salon privé Place Kléber ou à domicile."
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
