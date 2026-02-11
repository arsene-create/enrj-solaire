import type { Metadata } from "next";
import LegalPageLayout from "@/components/layout/LegalPageLayout";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | ENR-J Solaire",
  robots: "noindex",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPageLayout title="Politique de Confidentialité">
      <p className="my-4">Dernière mise à jour : février 2026</p>

      <h2 className="text-xl font-bold mt-8 mb-4">1. Responsable du traitement</h2>
      <p>
        Le responsable du traitement des données personnelles est {COMPANY.fullName},
        dont le siège social se situe au {COMPANY.address}.
      </p>
      <p className="mt-2">
        Délégué à la protection des données (DPO) : [À COMPLÉTER]
        <br />
        Email : {COMPANY.email}
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4">2. Données collectées</h2>
      <p>Nous collectons les données suivantes lors de vos interactions avec notre site :</p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>
          <strong>Formulaire de contact et simulateur :</strong> nom, prénom, email
          professionnel, téléphone, nom de l&apos;entreprise, informations sur votre
          projet (type de bâtiment, surface de toiture, localisation, consommation
          énergétique)
        </li>
        <li>
          <strong>Navigation :</strong> adresse IP, type de navigateur, pages
          visitées, durée de visite, source de trafic (via Google Analytics)
        </li>
        <li>
          <strong>Cookies :</strong> cookies fonctionnels et cookies analytiques
          (détails en section 8)
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4">3. Finalités du traitement</h2>
      <p>Vos données sont traitées pour les finalités suivantes :</p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Répondre à vos demandes de contact et de devis</li>
        <li>Réaliser l&apos;étude de faisabilité de votre projet solaire</li>
        <li>Vous adresser des informations commerciales relatives à nos services (avec votre consentement préalable)</li>
        <li>Améliorer notre site, nos services et l&apos;expérience utilisateur</li>
        <li>Établir des statistiques de fréquentation anonymisées</li>
        <li>Respecter nos obligations légales et réglementaires</li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4">4. Base légale du traitement</h2>
      <p>Le traitement de vos données repose sur les bases légales suivantes (article 6 du RGPD) :</p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>
          <strong>Votre consentement</strong> (article 6.1.a) : pour les cookies
          analytiques et les communications commerciales
        </li>
        <li>
          <strong>L&apos;exécution d&apos;un contrat ou de mesures pré-contractuelles</strong> (article 6.1.b) :
          pour le traitement de vos demandes de devis et d&apos;étude de faisabilité
        </li>
        <li>
          <strong>Notre intérêt légitime</strong> (article 6.1.f) : pour
          l&apos;amélioration de nos services et la gestion de notre relation commerciale
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4">5. Durée de conservation</h2>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>
          <strong>Données de contact et de projet :</strong> 3 ans à compter de
          votre dernier contact, ou pendant toute la durée de notre relation
          commerciale puis 3 ans après sa fin
        </li>
        <li>
          <strong>Données de navigation :</strong> 13 mois maximum (cookies analytiques)
        </li>
        <li>
          <strong>Données contractuelles :</strong> 5 ans à compter de la fin du
          contrat (obligation légale)
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4">6. Destinataires des données</h2>
      <p>Vos données peuvent être communiquées aux destinataires suivants :</p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Notre équipe commerciale et technique interne</li>
        <li>Nos sous-traitants techniques (hébergeur Vercel, outil d&apos;emailing)</li>
        <li>Google LLC (Google Analytics, données anonymisées)</li>
      </ul>
      <p className="mt-2">
        Aucune donnée n&apos;est vendue à des tiers. Les transferts vers des pays
        hors UE (États-Unis pour Vercel et Google) sont encadrés par des clauses
        contractuelles types approuvées par la Commission européenne.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4">7. Vos droits</h2>
      <p>
        Conformément au Règlement Général sur la Protection des Données (RGPD)
        et à la loi Informatique et Libertés, vous disposez des droits suivants :
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li><strong>Droit d&apos;accès</strong> : obtenir une copie de vos données personnelles</li>
        <li><strong>Droit de rectification</strong> : corriger des données inexactes ou incomplètes</li>
        <li><strong>Droit de suppression</strong> : demander l&apos;effacement de vos données</li>
        <li><strong>Droit de limitation</strong> : restreindre le traitement de vos données</li>
        <li><strong>Droit de portabilité</strong> : recevoir vos données dans un format structuré</li>
        <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement de vos données</li>
        <li><strong>Droit de retrait du consentement</strong> : retirer votre consentement à tout moment</li>
      </ul>
      <p className="mt-2">
        Pour exercer ces droits, adressez votre demande par email à {COMPANY.email} ou
        par courrier à {COMPANY.address}. Nous vous répondrons dans un délai d&apos;un
        mois. En cas de différend, vous pouvez adresser une réclamation à la CNIL
        (Commission Nationale de l&apos;Informatique et des Libertés) : www.cnil.fr.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4">8. Cookies</h2>
      <p>Ce site utilise les cookies suivants :</p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>
          <strong>Cookies strictement nécessaires :</strong> fonctionnement du site,
          préférences de consentement. Durée : session.
        </li>
        <li>
          <strong>Cookies analytiques (Google Analytics) :</strong> mesure
          d&apos;audience anonymisée (pages visitées, temps de visite, source de
          trafic). Durée : 13 mois. Soumis à votre consentement.
        </li>
      </ul>
      <p className="mt-2">
        Vous pouvez gérer vos préférences de cookies à tout moment via le bandeau
        de consentement affiché lors de votre première visite, ou en supprimant
        les cookies dans les paramètres de votre navigateur.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4">9. Sécurité</h2>
      <p>
        Nous mettons en œuvre des mesures techniques et organisationnelles
        appropriées pour protéger vos données personnelles contre la perte,
        l&apos;accès non autorisé, la divulgation ou la modification. Le site
        utilise le protocole HTTPS pour sécuriser les échanges de données.
      </p>
    </LegalPageLayout>
  );
}
