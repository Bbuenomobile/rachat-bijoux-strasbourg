import Link from 'next/link';
import { Section } from '@/components/section';

export default function NotFound() {
  return (
    <Section className="text-center pt-28">
      <p className="label">404</p>
      <h1 className="h1 mt-4">Page introuvable</h1>
      <p className="lead mt-4 max-w-xl mx-auto">Cette page n’existe pas (ou plus). Reprenez votre navigation depuis l’accueil ou directement sur l’une de nos rubriques.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-gold">Retour à l’accueil</Link>
        <Link href="/estimation-gratuite" className="btn-outline">Demander une estimation</Link>
        <Link href="/contact" className="btn-outline">Nous contacter</Link>
      </div>
    </Section>
  );
}
