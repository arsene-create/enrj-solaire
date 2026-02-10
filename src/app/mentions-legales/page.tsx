import type { Metadata } from "next";
import LegalPageLayout from "@/components/layout/LegalPageLayout";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions Légales | ENR'J",
  robots: "noindex",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPageLayout title="Mentions Légales">
      <h2 className="text-xl font-bold mt-8 mb-4">Éditeur du site</h2>
      <p>
        Le site enr-j.com est édité par {COMPANY.fullName}, {COMPANY.legalForm},
        au capital de {COMPANY.capitalSocial}.
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Siège social : {COMPANY.address}</li>
        <li>SIREN : {COMPANY.siren}</li>
        <li>SIRET (siège) : {COMPANY.siret}</li>
        <li>TVA intracommunautaire : {COMPANY.tva}</li>
        <li>RCS : {COMPANY.rcs}</li>
        <li>Code NAF : {COMPANY.naf} — Travaux de maçonnerie générale et gros œuvre de bâtiment</li>
        <li>Date de création : {COMPANY.dateCreation}</li>
        <li>Téléphone : {COMPANY.phone}</li>
        <li>Email : {COMPANY.email}</li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4">Directeur de la publication</h2>
      <p>
        Le directeur de la publication est M. {COMPANY.president},
        en qualité de Président de {COMPANY.fullName}.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4">Hébergement</h2>
      <p>
        Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723,
        États-Unis. Téléphone : +1 (559) 288-7060.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4">Activité</h2>
      <p>
        Travaux de gros œuvre, de second œuvre, de rénovation énergétique pour tout
        type d&apos;immeuble, pose et dépose de systèmes d&apos;énergie renouvelable,
        de système de chauffage et plus particulièrement de pompes à chaleur.
        Installation de panneaux photovoltaïques en tiers-investissement pour
        professionnels (agriculteurs, industriels, gestionnaires fonciers).
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4">Certifications</h2>
      <p>
        {COMPANY.fullName} est certifiée <strong>RGE QualiPV 500</strong> (Reconnu
        Garant de l&apos;Environnement), qualification obligatoire pour l&apos;accès
        aux aides publiques et au tarif de rachat EDF OA.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4">Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos,
        graphismes, icônes, logiciels) est la propriété exclusive de {COMPANY.name} ou
        de ses partenaires, et est protégé par les lois françaises et internationales
        relatives à la propriété intellectuelle. Toute reproduction, représentation,
        modification, publication ou adaptation, totale ou partielle, est interdite
        sans autorisation préalable écrite de {COMPANY.name}.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4">Responsabilité</h2>
      <p>
        {COMPANY.name} s&apos;efforce de fournir des informations exactes et à jour
        sur ce site. Les estimations de production solaire, de revenus et d&apos;économies
        présentées sont indicatives et ne constituent pas un engagement contractuel.
        Les données réglementaires (Loi APER, Décret Tertiaire, tarifs EDF OA) sont
        fournies à titre informatif et peuvent évoluer. Nous recommandons de vérifier
        les informations auprès des organismes officiels compétents.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4">Liens hypertextes</h2>
      <p>
        Le site peut contenir des liens vers des sites tiers. {COMPANY.name} ne peut
        être tenu responsable du contenu de ces sites externes.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4">Crédits photographiques</h2>
      <p>
        Les photographies et illustrations utilisées sur ce site sont la propriété
        de {COMPANY.name} ou sont utilisées sous licence libre (Pexels, Unsplash).
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4">Médiation</h2>
      <p>
        Conformément aux articles L.616-1 et R.616-1 du code de la consommation,
        en cas de litige non résolu, le consommateur peut recourir à un médiateur
        de la consommation. Le médiateur compétent est : [À COMPLÉTER PAR LE CLIENT].
      </p>
    </LegalPageLayout>
  );
}
