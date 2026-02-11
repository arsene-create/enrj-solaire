import type { Metadata } from "next";
import LegalPageLayout from "@/components/layout/LegalPageLayout";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | ENR-J Solaire",
  robots: "noindex",
};

export default function CGVPage() {
  return (
    <LegalPageLayout title="Conditions Générales de Vente">
      <p className="my-4">En vigueur au 1er janvier 2025</p>

      <h2 className="text-xl font-bold mt-8 mb-4">Article 1 - Objet</h2>
      <p>
        Les présentes conditions générales de vente régissent les relations
        contractuelles entre {COMPANY.fullName} et ses clients professionnels
        pour la fourniture et l&apos;installation de systèmes photovoltaïques.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4">Article 2 - Devis et commande</h2>
      <p>
        Tout projet fait l&apos;objet d&apos;une étude technique gratuite et d&apos;un devis
        détaillé. Le devis est valable 30 jours à compter de sa date
        d&apos;émission. La commande est confirmée par la signature du devis et le
        versement éventuel d&apos;un acompte.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4">Article 3 - Prix</h2>
      <p>
        Les prix sont indiqués en euros hors taxes (HT). La TVA applicable est
        celle en vigueur au jour de la facturation. Dans le cadre du
        tiers-investissement, aucun paiement n&apos;est demandé au client.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4">Article 4 - Délais</h2>
      <p>
        Les délais de réalisation sont communiqués à titre indicatif dans le
        devis. {COMPANY.name} s&apos;engage à mettre en œuvre les moyens nécessaires
        pour respecter les délais convenus.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4">Article 5 - Garanties</h2>
      <p>Les garanties comprennent :</p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Garantie décennale sur l&apos;installation</li>
        <li>Garantie fabricant des panneaux : 30 ans en performance (&gt;80% de rendement)</li>
        <li>Garantie onduleur : 10 à 20 ans selon le modèle</li>
        <li>Garantie de performance de production</li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4">Article 6 - Responsabilité</h2>
      <p>
        {COMPANY.name} est responsable de la conception, de l&apos;installation et de
        la mise en service du système photovoltaïque conformément aux normes en
        vigueur et aux règles de l&apos;art.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4">Article 7 - Litiges</h2>
      <p>
        En cas de litige, les parties s&apos;engagent à rechercher une solution
        amiable. À défaut, le litige sera soumis aux tribunaux compétents du
        ressort du siège social de {COMPANY.name}.
      </p>
    </LegalPageLayout>
  );
}
