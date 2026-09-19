import Image from 'next/image';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { Section, SectionHeading } from '@/components/section';
import { TrustBar } from '@/components/trust-bar';
import { site } from '@/lib/site';

export type ServiceFAQ = { q: string; a: string };
export type ServicePageProps = {
  slug: string;
  hero: {
    eyebrow: string;
    title: string;
    titleHighlight?: string;
    intro: string;
    image: string;
    imageAlt: string;
  };
  category: string;
  defaultItemType?: string;
  defaultSubject?: string;
  introBlock: {
    eyebrow?: string;
    title: string;
    paragraphs: string[];
  };
  criteria: { title: string; items: { label: string; text: string }[] };
  process: { title: string; steps: { title: string; body: string }[] };
  gallery: string[];
  faqs: ServiceFAQ[];
  related: { label: string; href: string }[];
  longContent?: { heading: string; html: string }[];
};

export function ServicePage(p: ServicePageProps) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: p.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: site.url + '/' },
      { '@type': 'ListItem', position: 2, name: p.hero.title, item: site.url + '/' + p.slug },
    ],
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#081a30]">
        <div className="absolute inset-0 -z-10">
          <Image src={p.hero.image} alt={p.hero.imageAlt} fill priority sizes="100vw" className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#081a30]/90 via-[#081a30]/75 to-[#081a30]" />
        </div>
        <div className="container-x pt-24 pb-20 md:pt-32 md:pb-24">
          <nav aria-label="Fil d’Ariane" className="text-sm text-ink-300 mb-6">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="hover:text-white">Accueil</Link></li>
              <li className="text-ink-500">/</li>
              <li className="text-ink-100">{p.hero.title}</li>
            </ol>
          </nav>
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 text-ink-50">
              <p className="label text-[#d4af37]">{p.hero.eyebrow}</p>
              <h1 className="h1 mt-4 text-white">
                {p.hero.title}
                {p.hero.titleHighlight && (
                  <>
                    <br className="hidden md:block" />
                    <span className="text-[#d4af37]"> {p.hero.titleHighlight}</span>
                  </>
                )}
              </h1>
              <p className="lead mt-5 text-ink-200 max-w-2xl">{p.hero.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/estimation-gratuite" className="btn-gold">Estimation Gratuite</Link>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="btn-outline text-white border-white/30 hover:bg-white/10">
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white p-6 md:p-8 shadow-2xl border border-ink-900/5">
                <ContactForm
                  variant="estimation"
                  category={p.category}
                  defaultSubject={p.defaultSubject}
                  defaultItemType={p.defaultItemType}
                  source={`service:${p.slug}`}
                  headline="Estimation Confidentielle"
                  intro="Décrivez votre bijou pour une première évaluation sous 24h par nos gemmologues."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <Section>
        <div className="max-w-4xl space-y-6">
          <SectionHeading eyebrow={p.introBlock.eyebrow ?? 'Expertise Joaillière'} title={p.introBlock.title} />
          {p.introBlock.paragraphs.map((para, i) => (
            <p key={i} className="text-ink-700 text-base md:text-lg leading-relaxed">{para}</p>
          ))}
        </div>
      </Section>

      <Section className="bg-sand-50">
        <div className="space-y-10">
          <SectionHeading eyebrow="Critères d'Évaluation" title={p.criteria.title} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.criteria.items.map((it, i) => (
              <div key={i} className="rounded-xl border border-ink-900/10 bg-white p-6 shadow-sm">
                <h3 className="font-display font-semibold text-lg text-ink-900 mb-2">{it.label}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-10">
          <SectionHeading eyebrow="Processus Sécurisé" title={p.process.title} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {p.process.steps.map((st, i) => (
              <div key={i} className="rounded-xl border border-ink-900/10 bg-white p-6 shadow-sm relative">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#081a30] text-white font-serif font-bold text-sm mb-4">
                  {i + 1}
                </div>
                <h3 className="font-display font-semibold text-base text-ink-900 mb-2">{st.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{st.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="space-y-8">
          <SectionHeading eyebrow="Questions Fréquentes" title="Tout Savoir sur l'Estimation et le Rachat" />
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {p.faqs.map((f, i) => (
              <div key={i} className="rounded-xl border border-ink-900/10 p-6 bg-ink-50/50">
                <h3 className="font-display font-semibold text-ink-900 mb-2">{f.q}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[#081a30] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="label text-[#d4af37]">Salons Privés & Déplacements</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold">Faites Estimer Vos Pièces en Toute Discrétion</h2>
          <p className="text-ink-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Nos gemmologues vous accueillent à Strasbourg Place Kléber sur rendez-vous ou organisent un déplacement sécurisé dans toute l'Eurométropole et en Alsace.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="/estimation-gratuite" className="btn-gold py-3 px-8 text-xs uppercase tracking-wider font-semibold">
              Demander une Estimation
            </Link>
            <Link href="/contact" className="btn-outline border-white/30 text-white hover:bg-white/10 py-3 px-8 text-xs uppercase tracking-wider font-semibold">
              Contacter le Cabinet
            </Link>
          </div>
        </div>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
