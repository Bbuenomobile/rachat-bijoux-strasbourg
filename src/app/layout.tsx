import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyCta } from '@/components/sticky-cta';
import { site } from '@/lib/site';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Cabinet d'Expertise Gemmologique & Rachat Haute Joaillerie Strasbourg`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'rachat bijoux strasbourg',
    'rachat diamant strasbourg place kleber',
    'vendre montre luxe strasbourg',
    'expertise bijoux rolex strasbourg',
    'rachat patek philippe strasbourg',
    'vendre bijoux cartier van cleef strasbourg',
    'achat or lingots strasbourg alsace',
    'expertise gemmologique strasbourg',
    'rachat bijoux orangerie robertsau',
    'rachat haute joaillerie colmar mulhouse',
  ],
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Rachat Diamants, Haute Joaillerie & Montres à Strasbourg`,
    description: site.description,
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: `${site.name} — Salons Privés Place Kléber Strasbourg`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Rachat de Haute Joaillerie à Strasbourg`,
    description: site.description,
    images: ['/og.jpg'],
  },
  alternates: {
    canonical: site.url,
  },
};

export const viewport: Viewport = {
  themeColor: '#081a30',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JewelryStore',
    name: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.address.geo.lat,
      longitude: site.address.geo.lng,
    },
    priceRange: '€€€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Virement bancaire instantané',
    areaServed: site.areasServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:30',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '18:00',
      },
    ],
  };

  return (
    <html lang="fr" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#faf8f5] text-ink-900 antialiased flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
