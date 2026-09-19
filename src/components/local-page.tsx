import Image from 'next/image';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { Section, SectionHeading } from '@/components/section';
import { TrustBar } from '@/components/trust-bar';
import { site } from '@/lib/site';

export type LocalPageProps = {
  slug: string;
  cityName: string;
  context: string;
  introParagraphs: string[];
  neighborhoods?: string[];
  image: string;
};

export function LocalPage(p: LocalPageProps) {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: site.url + '/' },
      { '@type': 'ListItem', position: 2, name: `Rachat Bijoux ${p.cityName}`, item: site.url + '/' + p.slug },
    ],
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#081a30]">
        <div className="absolute inset-0 -z-10">
          <Image src={p.image} alt={`Estimation et rachat de bijoux et diamants à Strasbourg ${p.cityName}`} fill priority sizes="100vw" className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#081a30]/90 via-[#081a30]/75 to-[#081a30]" />
        </div>
        <div className="container-x pt-24 pb-16 md:pt-32">
          <nav aria-label="Fil d'Ariane" className="text-sm text-ink-300 mb-5">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="hover:text-white">Accueil</Link></li>
              <li className="text-ink-500">/</li>
              <li className="text-ink-100">Rachat Bijoux {p.cityName}</li>
            </ol>
          </nav>
          <div className="grid lg:grid-cols-12 gap-10 items-start text-ink-50">
            <div className="lg:col-span-7">
              <p className="label text-[#d4af37]">{p.context}</p>
              <h1 className="h1 mt-4 text-white">Rachat de Bijoux & Estimation à Strasbourg — {p.cityName}</h1>
              <p className="lead mt-5 text-ink-200">
                Vous résidez à {p.cityName}, dans l'Eurométropole de Strasbourg ou en Alsace et envisagez la vente de diamants certifiés, bijoux d'époque, haute joaillerie signée ou montres de collection ? Nos gemmologues experts vous accueillent en toute discrétion dans nos salons privés Place Kléber ou effectuent un déplacement sécurisé directement à votre domicile.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/estimation-gratuite" className="btn-gold">Demander une Estimation</Link>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="btn-outline text-white border-white/30 hover:bg-white/10">{site.phoneDisplay}</a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white p-6 md:p-8 shadow-2xl">
                <ContactForm
                  variant="estimation"
                  category={`Strasbourg — ${p.cityName}`}
                  defaultSubject={`Demande d'estimation depuis ${p.cityName}`}
                  source={`local:${p.slug}`}
                  headline="Estimation Confidentielle"
                  intro="Transmettez-nous les détails de vos bijoux pour une première valorisation sous 24 heures."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <Section>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6 text-ink-700 leading-relaxed">
            <SectionHeading
              eyebrow="Expertise Strasbourg & Alsace"
              title={`Conseil Gemmologique & Rachat Direct à ${p.cityName}`}
            />
            {p.introParagraphs.map((para, i) => (
              <p key={i} className="text-base md:text-lg">{para}</p>
            ))}
          </div>
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-ink-900/10 bg-ink-50/50 p-6 md:p-8">
              <h3 className="font-display text-xl text-ink-900 mb-4">Paiement Immédiat & Discrétion Rhénane</h3>
              <p className="text-sm text-ink-600 mb-4">
                Chaque transaction à {p.cityName} est effectuée directement sur place par virement bancaire instantané en Euros (EUR), accompagnée d'un acte d'achat conforme aux exigences légales françaises.
              </p>
              {p.neighborhoods && p.neighborhoods.length > 0 && (
                <div className="pt-4 border-t border-ink-900/10">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-ink-500 mb-3">Secteurs & Quartiers Clés</h4>
                  <div className="flex flex-wrap gap-2">
                    {p.neighborhoods.map((nh) => (
                      <span key={nh} className="inline-block px-2.5 py-1 text-xs rounded-md bg-white border border-ink-900/5 text-ink-700 font-medium">
                        {nh}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-ink-50">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="font-display text-2xl md:text-3xl text-ink-900 font-semibold">
            Prendre Rendez-vous à Strasbourg ({p.cityName})
          </h2>
          <p className="text-ink-600 max-w-2xl mx-auto text-sm md:text-base">
            Nos gemmologues diplômés sont à votre écoute pour une estimation objective et sans engagement de vos joyaux, diamants et montres de collection.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link href="/estimation-gratuite" className="btn-gold">Demander une Estimation</Link>
            <Link href="/contact" className="btn-outline">Nos Salons Privés Kléber</Link>
          </div>
        </div>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
