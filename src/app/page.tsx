import Image from 'next/image';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { Section, SectionHeading } from '@/components/section';
import { TrustBar } from '@/components/trust-bar';
import { site } from '@/lib/site';

export default function HomePage() {
  const services = [
    {
      title: "Rachat de Diamants Certifiés",
      desc: "Diamants solitaires, brillants et tailles fantaisie à partir de 0.50 ct. Expertise selon les 4C (GIA, HRD, IGI, SSEF) et cotation immédiate selon le cours Rapaport.",
      href: "/rachat-diamant-strasbourg",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Bijoux Anciens & Époque",
      desc: "Bagues Napoléon III, colliers Art Nouveau, bracelets Art Déco, parures 1940-1970 en or 18k et platine. Valorisation de la facture historique et des gemmes.",
      href: "/rachat-bijoux-anciens-strasbourg",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Haute Joaillerie Signée",
      desc: "Cartier, Van Cleef & Arpels, Chaumet, Boucheron, Chopard, Bulgari, Graff, Buccellati. Prime importante pour créations signées avec certificat et écrin d'origine.",
      href: "/rachat-haute-joaillerie-signee-strasbourg",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Montres de Collection",
      desc: "Rolex, Patek Philippe, Audemars Piguet, Jaeger-LeCoultre, Cartier, Omega, Vacheron Constantin. Estimation instantanée sur pièces d'horlogerie de prestige.",
      href: "/rachat-montres-luxe-strasbourg",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Or d'Investissement & Lingots",
      desc: "Lingots d'or 999.9 certifiés LBMA, pièces boursables (Napoléon, Souverain, Vreneli, Krugerrand) et or 18 carats au cours officiel international en continu.",
      href: "/rachat-lingots-pieces-or-strasbourg",
      image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Pierres Précieuses de Couleur",
      desc: "Saphirs de Ceylan et Birmanie, émeraudes de Colombie, rubis birmans non chauffés, perles fines et spinelles. Analyse spectrométrique et laboratoire.",
      href: "/rachat-pierres-precieuses-strasbourg",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const districts = [
    { name: "Grande Île & Place Kléber", href: "/rachat-bijoux-strasbourg-centre-grande-ile", desc: "Cœur historique, commerces de luxe et salons privés" },
    { name: "Petite France & Ponts Couverts", href: "/rachat-bijoux-strasbourg-petite-france", desc: "Quartier pittoresque et patrimoine classé UNESCO" },
    { name: "Neustadt & Contades", href: "/rachat-bijoux-strasbourg-neustadt-contades", desc: "Quartier impérial, grandes avenues et résidences bourgeoises" },
    { name: "Orangerie & Robertsau", href: "/rachat-bijoux-strasbourg-orangerie-robertsau", desc: "Secteur diplomatique, institutions européennes et parcs" },
    { name: "Neudorf & Esplanade", href: "/rachat-bijoux-strasbourg-neudorf-esplanade", desc: "Dynamisme urbain, Rivetoile et place de l'Étoile" },
    { name: "Schiltigheim & Bischheim", href: "/rachat-bijoux-schiltigheim-bischheim", desc: "Agglomération nord et Eurométropole strasbourgeoise" },
    { name: "Haguenau & Nord Alsace", href: "/rachat-bijoux-haguenau-nord-alsace", desc: "Bassin de Haguenau, Wissembourg et plaine d'Alsace" },
    { name: "Colmar & Mulhouse", href: "/rachat-bijoux-colmar-mulhouse-alsace", desc: "Haut-Rhin, route des vins et métropoles alsaciennes" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#081a30] text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1920&q=80"
            alt="Maison Obagem Rachat Bijoux Strasbourg Place Kléber"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081a30] via-[#081a30]/90 to-[#081a30]/60" />
        </div>

        <div className="container-x py-20 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold uppercase tracking-wider">
              <span>💎</span> Cabinet Gemmologique d'Excellence · Strasbourg
            </div>

            <h1 className="h1 text-white">
              Expertise & Rachat de Haute Joaillerie à Strasbourg
            </h1>

            <p className="lead text-ink-200 max-w-2xl">
              Spécialiste indépendant depuis 40 ans : évaluation rigoureuse de diamants certifiés GIA / HRD au cours mondial du Rapaport, parures signées, montres suisses et or d'investissement. Salons privés confidentiels Place Kléber ou déplacement sécurisé en Alsace.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/estimation-gratuite" className="btn-gold py-3.5 px-8 text-sm uppercase tracking-wider font-semibold">
                Estimation Gratuite & Immédiate
              </Link>
              <a
                href={`tel:${site.phone.replace(/\s/g, '')}`}
                className="btn-outline border-white/30 text-white hover:bg-white/10 py-3.5 px-8 text-sm uppercase tracking-wider font-semibold"
              >
                📞 {site.phoneDisplay}
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs text-ink-300">
              <div>
                <strong className="block text-white text-base font-semibold">40+ Ans</strong>
                Expérience Reconnue
              </div>
              <div>
                <strong className="block text-white text-base font-semibold">GIA & HRD</strong>
                Gemmologues Diplômés
              </div>
              <div>
                <strong className="block text-white text-base font-semibold">Rapaport</strong>
                Cotations Officielles
              </div>
              <div>
                <strong className="block text-white text-base font-semibold">100% Instantané</strong>
                Virement Bancaire EUR
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 md:p-8 text-ink-900 shadow-2xl border border-white/20">
              <ContactForm
                variant="estimation"
                title="Demander une Estimation en Ligne"
                subtitle="Transmettez les détails de vos bijoux, diamants ou montres pour recevoir une estimation préliminaire confidentielle."
                source="home-hero"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Services Grid */}
      <Section className="bg-white">
        <div className="space-y-12">
          <SectionHeading
            align="center"
            eyebrow="Nos Domaines d'Intervention"
            title="Expertise & Rachat de Pièces Précieuses à Strasbourg"
            description="Chaque pièce est analysée selon des protocoles scientifiques rigoureux afin de vous garantir la meilleure valorisation marchande nette."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div key={svc.title} className="group rounded-2xl border border-ink-900/10 bg-[#faf8f5] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink-900 group-hover:text-[#997b24] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#997b24] uppercase tracking-wider hover:gap-2 transition-all pt-2"
                  >
                    En savoir plus <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pourquoi Nous Choisir */}
      <Section className="bg-[#081a30] text-white">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="label text-[#d4af37]">Rigueur & Transparence</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              L'Alternative Sécurisée aux Enchères Publiques
            </h2>
            <p className="text-ink-200 leading-relaxed">
              Vendre par l'intermédiaire des maisons de vente aux enchères expose à des commissions substantielles (20 à 30%), à des délais de catalogage de plusieurs mois et à l'incertitude du résultat d'adjudication.
            </p>
            <p className="text-ink-200 leading-relaxed">
              Maison Obagem offre aux particuliers strasbourgeois et alsaciens une contrepartie directe, sans intermédiaire : une valorisation nette fondée sur le cours mondial Rapaport pour le diamant et le fixing LBMA pour l'or, avec un virement bancaire instantané immédiat.
            </p>

            <ul className="space-y-3 pt-2 text-sm text-ink-200">
              <li className="flex items-center gap-3">
                <span className="text-[#d4af37] font-bold">✓</span> Salons privés Place Kléber ou déplacement discret à domicile
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#d4af37] font-bold">✓</span> Analyse gemmologique sous vos yeux avec matériel de laboratoire
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#d4af37] font-bold">✓</span> Rachat immédiat sans commission déduite
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#d4af37] font-bold">✓</span> Paiement immédiat par virement bancaire instantané
              </li>
            </ul>

            <div className="pt-4">
              <Link href="/comment-ca-marche" className="btn-gold text-xs uppercase tracking-wider font-semibold py-3.5 px-6">
                Découvrir Notre Processus
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1200&q=80"
                alt="Expertise gemmologique en salon privé à Strasbourg"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Secteurs Strasbourg & Alsace */}
      <Section className="bg-white">
        <div className="space-y-12">
          <SectionHeading
            align="center"
            eyebrow="Proximité & Confidentialité"
            title="Nos Secteurs d'Intervention à Strasbourg & en Alsace"
            description="Nous accueillons notre clientèle en salon privé au centre de Strasbourg et nous déplaçons dans l'Eurométropole et les grandes villes d'Alsace."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {districts.map((d) => (
              <Link
                key={d.name}
                href={d.href}
                className="group p-6 rounded-xl border border-ink-900/10 bg-[#faf8f5] hover:bg-white hover:border-[#d4af37] hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-display font-semibold text-ink-900 group-hover:text-[#997b24] transition-colors">
                  {d.name}
                </h3>
                <p className="mt-2 text-xs text-ink-600 leading-relaxed">
                  {d.desc}
                </p>
                <span className="mt-4 inline-block text-xs font-semibold text-[#997b24]">
                  Consulter →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Final */}
      <Section className="bg-[#faf8f5] border-t border-ink-900/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="label text-[#997b24]">Prenez Rendez-vous</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink-900">
            Une Évaluation Confidentielle de Vos Trésors Précieux
          </h2>
          <p className="text-ink-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Rencontrez nos experts diplômés à Strasbourg Place Kléber pour une estimation précise et sans engagement de vos bijoux, diamants ou montres d'exception.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link href="/estimation-gratuite" className="btn-gold py-4 px-8 text-xs uppercase tracking-wider font-semibold">
              Demander une Estimation
            </Link>
            <Link href="/contact" className="btn-outline border-ink-900/20 text-ink-900 hover:bg-ink-900 hover:text-white py-4 px-8 text-xs uppercase tracking-wider font-semibold">
              Contacter Nos Salons
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
