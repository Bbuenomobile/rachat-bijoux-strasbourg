import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata = {
  title: "Rachat Haute Joaillerie Signée Strasbourg | Cartier, Van Cleef, Boucheron, Chaumet",
  description: "Cabinet gemmologique pour le rachat de haute joaillerie signée à Strasbourg : Cartier, Van Cleef & Arpels, Boucheron, Chaumet, Chopard, Bulgari. Salons Place Kléber.",
  alternates: {
    canonical: `${site.url}/rachat-haute-joaillerie-signee-strasbourg`,
  },
};

export default function Page() {
  return (
    <ServicePage
      slug="rachat-haute-joaillerie-signee-strasbourg"
      h1="Rachat de Haute Joaillerie Signée à Strasbourg"
      subtitle="Les plus grandes maisons de la Place Vendôme valorisées avec une surcote majeure pour signature, certificat et écrin d'origine."
      image="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80"
      benefits={[
        {"title": "Grandes Signatures Mondiales", "desc": "Cartier, Van Cleef & Arpels, Boucheron, Chaumet, Bulgari, Chopard, Graff, Harry Winston, Buccellati."}, {"title": "Prime d'Origine & Packaging", "desc": "Plus-value substantielle pour les pièces complètes : certificat d'authenticité, facture de maison et écrin d'origine."}, {"title": "Collections Emblématiques", "desc": "Demande permanente pour Love, Juste un Clou, Panthère, Alhambra, Serpenti, Quatre et liens Chaumet."}, {"title": "Salons Confidentiels Kléber", "desc": "Accueil sur rendez-vous individuel garantissant une intimité totale et une transaction hautement sécurisée."}
      ]}
      sections={[
        {"title": "La Cote Internationale de la Haute Joaillerie de Seconde Main", "body": "Les parures signées bénéficient d'un statut patrimonial d'exception. En tant qu'experts indépendants, nous évaluons la renommée du modèle, son millésime, son état de conservation et sa rareté sur le marché des enchères internationales de Genève, Londres et New York."}, {"title": "Authentification Réfractométrique et Poinçons de Maître", "body": "Nous vérifions minutieusement les numéros de série gravés, les poinçons de responsabilité et la conformité des sertissages originaux pour vous faire la meilleure offre d'achat immédiate."}
      ]}
      faqs={[
        {"q": "Le certificat de la maison joaillière est-il indispensable ?", "a": "Le certificat apporte une plus-value appréciable, mais notre expérience nous permet d'authentifier vos pièces même en l'absence des papiers d'origine."}, {"q": "Quel est le délai de règlement pour une parure signée ?", "a": "Le virement bancaire instantané est déclenché immédiatement dès la conclusion du contrat d'achat."}
      ]}
    />
  );
}
