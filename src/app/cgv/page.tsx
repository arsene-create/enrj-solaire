import type { Metadata } from "next";
import LegalPageLayout from "@/components/layout/LegalPageLayout";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  robots: "noindex",
};

export default function CGVPage() {
  return (
    <LegalPageLayout title="Conditions Générales de Vente - Professionnels">
      <p className="my-4 text-sm italic">En vigueur au 1er janvier 2025</p>

      {/* Article 1 */}
      <h2 className="text-xl font-bold mt-8 mb-4">Article 1 - Objet</h2>
      <p>
        Les présentes conditions générales de vente (les &laquo;&nbsp;CGV&nbsp;&raquo;) fixent les modalités et conditions des relations commerciales entre la société ENR&apos;J (&laquo;&nbsp;ENR&apos;J&nbsp;&raquo;) et ses clients professionnels (le &laquo;&nbsp;Client&nbsp;&raquo;), à savoir notamment, les personnes physiques ou morales exerçant une activité commerciale, artisanale, agricole, industrielle, libérale ou une mission d&apos;intérêt public, collectif ou privé, dont le nombre de salariés est supérieur à cinq (5), concernant la fourniture et l&apos;installation de produits et prestations par ENR&apos;J.
      </p>
      <p className="mt-3">
        ENR&apos;J et le Client constituent les &laquo;&nbsp;Parties&nbsp;&raquo; au sens des présentes.
      </p>

      {/* Article 2 */}
      <h2 className="text-xl font-bold mt-8 mb-4">Article 2 - Adhésion et engagement</h2>
      <p>
        Le Client adhère sans exception ni réserve aux CGV par la contre-signature du devis ou du bon de commande établi par ENR&apos;J.
      </p>
      <p className="mt-3">
        La signature du devis engage le Client de manière définitive et irrévocable. À l&apos;égard d&apos;ENR&apos;J, le contrat ne devient définitif et irrévocable qu&apos;à défaut de Cas de Rejet tel que ce terme est défini à l&apos;article 7 des présentes CGV. ENR&apos;J notifie le Client de l&apos;absence d&apos;un Cas de Rejet dans le délai de 6 mois à compter de la date de signature du devis.
      </p>

      {/* Article 3 */}
      <h2 className="text-xl font-bold mt-8 mb-4">Article 3 - Étude préalable</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">3.1 Étude préalable - Éléments de définition</h3>
      <p>
        L&apos;étude préalablement établie par la société ENR&apos;J dans le cadre de l&apos;élaboration d&apos;une proposition commerciale relative à une installation photovoltaïque est réalisée au moyen des logiciels AutoCalSol, développés par l&apos;Institut National de l&apos;Énergie Solaire (INES), ou Likewatt. Cette étude repose exclusivement sur les informations, documents et données communiqués par le Client, ainsi que sur les connaissances dont dispose ENR&apos;J à la date de réalisation de ladite étude.
      </p>
      <p className="mt-3">
        Cette étude a une valeur purement indicative et ne revêt aucun caractère contractuel. Elle ne saurait en aucun cas constituer un élément déterminant du consentement des Parties ni engager contractuellement la société ENR&apos;J.
      </p>
      <p className="mt-3">
        Le choix des équipements, matériels et/ou prestations commandés auprès de la société ENR&apos;J, ainsi que leur conformité aux besoins ou objectifs poursuivis par le Client, relèvent de la seule responsabilité de ce dernier.
      </p>
      <p className="mt-3">
        La proposition émise par ENR&apos;J est exclusivement fondée sur les déclarations, éléments et documents transmis par le Client, sans vérification systématique par ENR&apos;J.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-3">3.2 Étude préalable - Frais d&apos;annulation</h3>
      <p>
        En cas d&apos;annulation de l&apos;étude de faisabilité par le Client, lorsque cette annulation ne résulte pas d&apos;une impossibilité technique, administrative ou financière dûment constatée, mais d&apos;une décision interne à l&apos;entreprise, les frais engagés par la société ENR&apos;J pour la réalisation de ladite étude demeurent intégralement à la charge du Client.
      </p>

      <div className="overflow-x-auto mt-6">
        <table className="w-full border-collapse border border-border text-sm">
          <thead>
            <tr className="bg-muted/30">
              <th className="border border-border p-3 text-left">Prestations</th>
              <th className="border border-border p-3 text-right">0 à 18 kWc</th>
              <th className="border border-border p-3 text-right">18 à 36 kWc</th>
              <th className="border border-border p-3 text-right">36 à 100 kWc</th>
              <th className="border border-border p-3 text-right">100 à 250 kWc</th>
              <th className="border border-border p-3 text-right">250 à 500 kWc</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border p-3">Démarches administratives (déclaration préalable de travaux)</td>
              <td className="border border-border p-3 text-right font-medium">924 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">1 386 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">2 112 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">2 772 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">3 432 &euro;</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Élaboration de la demande de financement - Accompagnement courtier spécialisé</td>
              <td className="border border-border p-3 text-right font-medium">616 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">924 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">1 408 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">1 848 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">2 288 &euro;</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Étude de la structure du bâtiment par bureau d&apos;étude agréé</td>
              <td className="border border-border p-3 text-right font-medium">1 540 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">2 310 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">3 520 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">4 620 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">5 720 &euro;</td>
            </tr>
            <tr className="font-bold bg-muted/20">
              <td className="border border-border p-3">Total HT</td>
              <td className="border border-border p-3 text-right">3 080 &euro;</td>
              <td className="border border-border p-3 text-right">4 620 &euro;</td>
              <td className="border border-border p-3 text-right">7 040 &euro;</td>
              <td className="border border-border p-3 text-right">9 240 &euro;</td>
              <td className="border border-border p-3 text-right">11 440 &euro;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold mt-6 mb-3">3.3 Projets d&apos;autoconsommation collective - Frais d&apos;annulation spécifiques</h3>
      <p>
        Dans le cadre des projets d&apos;autoconsommation collective, compte tenu des diligences spécifiques requises, l&apos;annulation de l&apos;étude de faisabilité par le Client, postérieurement à la signature du devis, lorsque cette annulation ne résulte pas d&apos;une impossibilité technique, administrative ou financière dûment constatée, ni d&apos;un Cas de Rejet au sens de l&apos;article 7, ouvre droit, au profit d&apos;ENR&apos;J, à des frais d&apos;annulation forfaitaires comme suit :
      </p>

      <div className="overflow-x-auto mt-6">
        <table className="w-full border-collapse border border-border text-sm">
          <thead>
            <tr className="bg-muted/30">
              <th className="border border-border p-3 text-left">Prestations</th>
              <th className="border border-border p-3 text-right">0 à 18 kWc</th>
              <th className="border border-border p-3 text-right">18 à 36 kWc</th>
              <th className="border border-border p-3 text-right">36 à 100 kWc</th>
              <th className="border border-border p-3 text-right">100 à 250 kWc</th>
              <th className="border border-border p-3 text-right">250 à 500 kWc</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border p-3">Démarches administratives (déclaration préalable de travaux)</td>
              <td className="border border-border p-3 text-right font-medium">840 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">1 260 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">1 920 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">2 520 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">3 120 &euro;</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Élaboration de la demande de financement - Courtier spécialisé</td>
              <td className="border border-border p-3 text-right font-medium">560 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">840 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">1 280 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">1 680 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">2 080 &euro;</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Étude de la structure du bâtiment par bureau d&apos;étude agréé</td>
              <td className="border border-border p-3 text-right font-medium">1 400 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">2 100 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">3 200 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">4 200 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">5 200 &euro;</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Demande de raccordement ENEDIS, travaux préliminaires et relevés</td>
              <td className="border border-border p-3 text-right font-medium">840 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">1 260 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">1 920 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">2 520 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">3 120 &euro;</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Bureau d&apos;étude autoconsommation collective (analyse, modèle économique, clé de répartition)</td>
              <td className="border border-border p-3 text-right font-medium">1 800 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">2 400 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">3 600 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">4 800 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">5 800 &euro;</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Rédaction juridique des contrats (constitution PMO, intégration des membres)</td>
              <td className="border border-border p-3 text-right font-medium">1 800 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">2 400 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">3 600 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">4 800 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">5 800 &euro;</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Étude de sol (implémentation ombrière solaire)</td>
              <td className="border border-border p-3 text-right font-medium">1 400 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">2 100 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">3 200 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">4 200 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">5 200 &euro;</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Étude d&apos;étanchéité (projet solaire complexe)</td>
              <td className="border border-border p-3 text-right font-medium">1 400 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">2 100 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">3 200 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">4 200 &euro;</td>
              <td className="border border-border p-3 text-right font-medium">5 200 &euro;</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Déplacement d&apos;une équipe pour installation</td>
              <td className="border border-border p-3 text-right font-medium">600 &euro;/j</td>
              <td className="border border-border p-3 text-right font-medium">600 &euro;/j</td>
              <td className="border border-border p-3 text-right font-medium">600 &euro;/j</td>
              <td className="border border-border p-3 text-right font-medium">600 &euro;/j</td>
              <td className="border border-border p-3 text-right font-medium">600 &euro;/j</td>
            </tr>
            <tr className="font-bold bg-muted/20">
              <td className="border border-border p-3">Total HT</td>
              <td className="border border-border p-3 text-right">10 640 &euro;</td>
              <td className="border border-border p-3 text-right">15 060 &euro;</td>
              <td className="border border-border p-3 text-right">22 520 &euro;</td>
              <td className="border border-border p-3 text-right">29 520 &euro;</td>
              <td className="border border-border p-3 text-right">36 120 &euro;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 rounded-lg bg-amber-50 border border-amber-200 dark:bg-amber-950/30 dark:border-amber-800">
        <p className="text-sm font-semibold">
          Tout acompte correspondant à 25&nbsp;% du montant total de la commande, exigible et versé à la signature du devis ou du bon de commande, est ferme et définitif. Il ne pourra en aucun cas faire l&apos;objet d&apos;un remboursement et restera acquis au vendeur à titre d&apos;indemnisation des diligences, études, frais administratifs et travaux déjà engagés.
        </p>
      </div>

      <h3 className="text-lg font-semibold mt-6 mb-3">3.4 Pénalité pour annulation de mauvaise foi</h3>
      <p>
        Dans l&apos;hypothèse où le Client annule l&apos;étude de faisabilité et que cette annulation révèle une intention manifestement abusive ou dilatoire (notamment en cas de fourniture d&apos;informations sciemment inexactes, de sollicitation de l&apos;étude de faisabilité sans intention sérieuse de contracter ou d&apos;annulation sans motif légitime après obtention des accords administratifs, techniques ou financiers), ENR&apos;J pourra facturer au Client une indemnité forfaitaire complémentaire égale à vingt pour cent (20&nbsp;%) du montant HT du devis, à titre de clause pénale au sens de l&apos;article 1231-5 du Code civil, non cumulable avec toute autre indemnisation au titre des mêmes préjudices.
      </p>

      {/* Article 4 */}
      <h2 className="text-xl font-bold mt-8 mb-4">Article 4 - Communication des éléments</h2>
      <p>
        Par la signature du devis, du bon de commande ou de la proposition commerciale d&apos;ENR&apos;J, le Client s&apos;oblige à lui fournir, à première demande, tous les informations, renseignements, documents, justificatifs et accès, y compris physiques, nécessaires à la fourniture, la pose et/ou au raccordement de l&apos;installation et, en particulier, les liasses fiscales, les factures d&apos;énergie, les plans techniques des bâtiments, et toute information manquante nécessaire à la poursuite des opérations.
      </p>
      <p className="mt-3">
        Le refus, le retard ou la négligence du Client dans la communication des éléments nécessaires à l&apos;accomplissement des prestations d&apos;ENR&apos;J entraînera automatiquement et de plein droit la suspension des prestations ENR&apos;J. Le contrat pourra être résolu par simple notification d&apos;ENR&apos;J si le Client n&apos;a pas communiqué lesdits éléments dans le mois d&apos;une mise en demeure par lettre recommandée avec demande d&apos;avis de réception. Le cas échéant, le Client devra indemniser ENR&apos;J à hauteur de l&apos;ensemble des coûts engagés pour la réalisation de la prestation, sans préjudice de tous dommages et intérêts.
      </p>

      {/* Article 5 */}
      <h2 className="text-xl font-bold mt-8 mb-4">Article 5 - Prix</h2>
      <p>
        Les tarifs d&apos;ENR&apos;J sont communiqués sur devis personnalisés, en fonction, notamment, des caractéristiques du bâtiment du Client et sa consommation d&apos;énergie. Les devis ont une durée de validité de trois (3) mois à compter de leur établissement, sauf mention contraire dudit devis.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-3">Paiement comptant</h3>
      <p>Le prix du contrat est payable comptant, par virement bancaire, de la manière suivante :</p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>40&nbsp;% à la commande ;</li>
        <li>Le solde, à la réception des prestations constatée par un procès-verbal de réception, peu important l&apos;existence de réserves.</li>
      </ul>
      <p>
        Aucun escompte ne sera consenti en cas de paiement anticipé.
      </p>
      <p className="mt-3">
        À titre de pénalités, toute somme non payée à l&apos;échéance sera immédiatement génératrice d&apos;un intérêt de retard à un taux annuel égal à trois (3) fois le taux d&apos;intérêt légal, calculé sur une base de trois cent soixante-cinq (365) jours, sans qu&apos;il soit besoin d&apos;une mise en demeure préalable. Les intérêts échus, dus au moins pour une année entière, produisent intérêt.
      </p>
      <p className="mt-3">
        En sus, une indemnité forfaitaire pour frais de recouvrement, dont le montant est légalement fixé à 40 euros, sera due de plein droit et sans notification par le Client en situation de retard de paiement. Lorsque les frais de recouvrement exposés sont supérieurs au montant de cette indemnité forfaitaire, ENR&apos;J pourra exiger du Client une indemnisation complémentaire sur présentation de justificatifs.
      </p>
      <p className="mt-3">
        En cas de financement du prix par un établissement de crédit, ou un tiers, le prix est intégralement payable à la date de livraison des prestations constatée par un procès-verbal de réception, peu important l&apos;existence de réserves.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-3">Paiement échelonné par un tiers investisseur</h3>
      <p>
        En cas de financement du prix par un spécialiste du financement locatif, le prix est intégralement payable par ledit spécialiste à la date de livraison des prestations constatée par un procès-verbal de réception, peu important l&apos;existence de réserves, à charge pour lui de recevoir mensuellement du Client les loyers convenus entre eux. Le cas échéant, à l&apos;échéance du contrat de location longue durée et dans la limite de 2&nbsp;000 euros, ENR&apos;J supportera intégralement le paiement de l&apos;indemnité forfaitaire de non-restitution stipulée au contrat de location pour professionnel figurant en annexe du devis, permettant au Client de conserver les &laquo;&nbsp;produits&nbsp;&raquo;.
      </p>

      {/* Article 6 */}
      <h2 className="text-xl font-bold mt-8 mb-4">Article 6 - Modalités de livraison, transfert des risques et de propriété</h2>
      <p>
        Sauf stipulation contraire du devis, le délai de livraison indiqué sur le devis n&apos;est qu&apos;indicatif et ne peut servir de garantie pour motiver l&apos;octroi de pénalités, indemnités ou l&apos;annulation de la commande. ENR&apos;J s&apos;engage à informer le Client de tout dépassement significatif et à convenir d&apos;une nouvelle échéance le cas échéant.
      </p>
      <p className="mt-3">
        À défaut de toute mention sur le devis, le délai de livraison maximum est de soixante (60) jours à compter de la date du contrat.
      </p>
      <p className="mt-3">
        ENR&apos;J demeure propriétaire des produits et équipements vendus et installés chez le Client jusqu&apos;à complet règlement de leur prix en principal, intérêts et accessoires. Si le Client fait l&apos;objet d&apos;une procédure collective, ENR&apos;J se réserve le droit de revendiquer les marchandises vendues et restées impayées.
      </p>
      <p className="mt-3">
        Néanmoins, à compter de la livraison et jusqu&apos;au complet paiement du prix, le Client est considéré dépositaire et gardien des produits et équipements et doit donc les assurer contre tous risques auprès d&apos;une compagnie d&apos;assurances notoirement solvable.
      </p>

      {/* Article 7 */}
      <h2 className="text-xl font-bold mt-8 mb-4">Article 7 - Cas de rejet</h2>
      <p>
        Les commandes passées par le Client auprès de ENR&apos;J sont définitives et irrévocables sauf les cas limitatifs suivants (les &laquo;&nbsp;Cas de Rejet&nbsp;&raquo;) dans lesquels le contrat devient automatiquement et de plein droit caduc, sauf meilleur accord entre les Parties :
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Refus d&apos;autorisation d&apos;urbanisme sur les travaux envisagés ;</li>
        <li>Refus de l&apos;accord de financement du contrat, le cas échéant ;</li>
        <li>Rejet de la demande de raccordement électrique de l&apos;installation solaire par le gestionnaire du Réseau Public de Distribution d&apos;électricité compétent ;</li>
        <li>Impossibilité d&apos;accomplir les travaux à des conditions techniques et économiques raisonnables ;</li>
        <li>Travaux incompatibles avec l&apos;existant chez le Client ;</li>
        <li>Indisponibilité des produits dans le stock d&apos;ENR&apos;J.</li>
      </ul>
      <p>
        ENR&apos;J notifie le cas échéant au Client la caducité du contrat par tout moyen écrit.
      </p>

      {/* Article 8 */}
      <h2 className="text-xl font-bold mt-8 mb-4">Article 8 - Dispositifs</h2>
      <p>
        Certains matériaux, équipements ou produits peuvent être éligibles à certaines subventions, primes, crédits d&apos;impôts et aides publiques ou proposées par divers organismes spécialisés, à condition de satisfaire les conditions techniques, financières et de mise en oeuvre applicables et de procéder aux démarches pour en bénéficier (les &laquo;&nbsp;Dispositifs&nbsp;&raquo;).
      </p>
      <p className="mt-3">
        ENR&apos;J ne garantit pas l&apos;éligibilité du Client aux Dispositifs, ni leur montant, le Client s&apos;engageant à se renseigner personnellement sur les critères, les conditions et les modalités des Dispositifs et à faire son affaire personnelle de toutes démarches afférentes.
      </p>

      {/* Article 9 */}
      <h2 className="text-xl font-bold mt-8 mb-4">Article 9 - Garanties légales</h2>
      <p>
        Sans préjudice des dispositions à prendre par le Client vis-à-vis du ou des transporteurs, en cas de défauts apparents ou de manquants, toutes réserves formulées par le Client ou réclamation, quelle qu&apos;en soit la nature, portant sur les produits livrés, ne seront acceptées par ENR&apos;J que par lettre recommandée avec demande d&apos;avis de réception.
      </p>
      <p className="mt-3">
        Il appartient au Client de faire état et de justifier auprès d&apos;ENR&apos;J de la réalité du vice ou manquant qu&apos;il aurait constaté. À défaut, le Client est réputé avoir accepté les produits sans réserve.
      </p>
      <p className="mt-3">
        ENR&apos;J, en qualité de vendeur, est tenu de garantir les vices cachés tel que prévu par les articles 1641 à 1648 du Code Civil, dans les cas où ces vices cachés rendraient les produits impropres à l&apos;usage auxquels ils sont destinés. En aucun cas, le Client ne saurait prétendre à l&apos;obtention de dommages et intérêts, et ce, à quelque titre que ce soit.
      </p>
      <p className="mt-3">
        ENR&apos;J garantit au Client le bon fonctionnement des pièces mécaniques composant les équipements vendus pendant une durée d&apos;un (1) an à compter de leur réception.
      </p>
      <p className="mt-3">
        Il appartient au Client de faire état et de justifier auprès d&apos;ENR&apos;J de la réalité du dysfonctionnement allégué par lettre recommandée avec demande d&apos;avis de réception. Après acceptation par ENR&apos;J, le Client devra renvoyer, à ses frais et sous sa responsabilité, les pièces à l&apos;adresse qui lui aura été indiquée par ENR&apos;J. Aucun retour ne sera accepté et pris en compte à défaut d&apos;acceptation préalable expresse par ENR&apos;J.
      </p>
      <p className="mt-3">
        Les Parties reconnaissent expressément que les pièces et/ou équipements ayant été modifiés par un tiers ou par le Client, ou qui ne sont pas utilisés conformément à leur destination et en méconnaissance des recommandations d&apos;utilisation de ENR&apos;J et/ou des préconisations des fiches techniques jointes à l&apos;installation ou communiquées à la commande, perdent le bénéfice de toute garantie.
      </p>
      <p className="mt-3">
        À cet égard, le Client s&apos;engage à entretenir et veiller à la maintenance des produits aussi souvent que nécessaire et selon les préconisations des manuels d&apos;utilisation des matériels concernés et de la réglementation en vigueur, et à utiliser les produits de manière exclusivement conforme à leur destination. Tout manquement du Client à l&apos;une de ces obligations emportera exclusion de plein droit et sans formalité des garanties légales de ENR&apos;J.
      </p>
      <p className="mt-3">
        En tout état de cause, la garantie d&apos;ENR&apos;J ne pourra être mise en jeu que par notification par courrier recommandé avec demande d&apos;accusé de réception dans le délai de huit (8) jours ouvrés de la découverte du désordre allégué, précisant les références de la commande, l&apos;identité et les coordonnées du Client ainsi qu&apos;une description précise du désordre allégué. À défaut, la responsabilité d&apos;ENR&apos;J ne pourra pas être engagée.
      </p>
      <p className="mt-3">
        ENR&apos;J se réserve la possibilité de faire réaliser, dans les meilleurs délais à compter de la réception de la réclamation, une inspection contradictoire des produits avant de décider de la réparation, du remplacement ou du remboursement des produits au Client.
      </p>
      <p className="mt-3">
        La mise en jeu des garanties de ENR&apos;J et/ou l&apos;intervention de ENR&apos;J dans le cadre de ses garanties ne crée aucune garantie nouvelle ni prolongation de garantie sur le matériel réparé ou installé en remplacement, lequel est donc réputé avoir été livré à la date initiale de livraison et/ou de réception.
      </p>

      {/* Article 10 */}
      <h2 className="text-xl font-bold mt-8 mb-4">Article 10 - Limites de responsabilité</h2>
      <p>
        Le Client déclare et reconnaît que ENR&apos;J est expressément exonérée de toute responsabilité et garantie dans les cas suivants :
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Intervention du Client ou d&apos;un tiers sur les produits et/ou adjonction de pièces ou dispositifs non fournis par ENR&apos;J ;</li>
        <li>Mauvaise utilisation ou utilisation anormale des produits ;</li>
        <li>Défaut de maintenance conforme à la réglementation en vigueur ;</li>
        <li>Dysfonctionnement des produits dont ENR&apos;J n&apos;est pas responsable (détérioration par des causes étrangères, vol, vandalisme, modifications dommageables de l&apos;environnement du produit, défaut de surveillance, non-respect des prescriptions d&apos;entretien et d&apos;utilisation, absence des contrôles périodiques préconisés, utilisation anormale ou inadaptée, etc.) ;</li>
        <li>Usure normale des produits ;</li>
        <li>Sous-puissance du produit choisi par le Client ;</li>
        <li>Vice apparent à la livraison ;</li>
        <li>Intempéries, sinistre, choc ou force majeure causant un dommage au produit ;</li>
        <li>Frais de raccordement supérieur à 1&nbsp;500 euros (à la charge du Client) ;</li>
        <li>Impossibilité de raccordement venant du fournisseur réseau ;</li>
        <li>Délai de raccordement trop long - ENR&apos;J s&apos;engage à déposer la demande dans les plus brefs délais et à répondre à toutes les demandes d&apos;information complémentaire du fournisseur réseau en moins de 48 heures mais ne peut être tenu responsable des délais de raccordement au réseau.</li>
      </ul>
      <p>
        Les parties reconnaissent par ailleurs expressément que, quel que soit le fait générateur, ENR&apos;J ne pourra être tenue pour responsable des préjudices non directement liés aux matériels ou prestations commandées auprès d&apos;elle et en tout état de cause, ne sera responsable d&apos;aucun préjudice de jouissance que ce soit.
      </p>
      <p className="mt-3">
        En tout état de cause, sa responsabilité, toutes causes confondues, sera limitée au prix du contrat.
      </p>

      {/* Article 11 */}
      <h2 className="text-xl font-bold mt-8 mb-4">Article 11 - Consommateur Assimilé</h2>
      <p>
        En vertu de l&apos;article L.221-3 du Code de la consommation, le Client professionnel dont l&apos;objet du contrat conclu hors établissement avec ENR&apos;J n&apos;entre pas dans son champ d&apos;activité principale et dont le nombre de salariés employés est inférieur ou égal à cinq, est soumis aux dispositions des sections 2, 3 et 6 du Livre II, Titre II, Chapitre I du Code de la consommation (ci-après le &laquo;&nbsp;Consommateur Assimilé&nbsp;&raquo;).
      </p>
      <p className="mt-3">
        Comme les Clients, les Consommateurs Assimilés sont assujettis aux présentes CGV mais à l&apos;exception des stipulations qui seraient contraires aux dispositions légales d&apos;ordre public citées ci-dessus. Les Clients ne peuvent en revanche se prévaloir des stipulations du présent article, qui ne leur sont pas opposables.
      </p>
      <p className="mt-3">
        Les caractéristiques essentielles des produits et services vendus par ENR&apos;J et leurs prix figurent sur la proposition commerciale valant devis, dont la contre-signature par le Consommateur Assimilé vaut contrat synallagmatique. L&apos;adresse de livraison est, par défaut et sauf stipulation contraire du devis, le siège social du Consommateur Assimilé. La livraison intervient, par défaut et sauf stipulation contraire du devis, dans le délai de soixante (60) jours de la commande.
      </p>
      <p className="mt-3">
        Le contrat est conclu à la date de signature du devis.
      </p>
      <p className="mt-3">
        Le Consommateur Assimilé reconnaît que, sauf stipulations contraires du devis, les produits et prestations de ENR&apos;J sont vendus comme un tout indissociable, pour un prix total, global et forfaitaire, payable dans les termes et conditions stipulées au contrat. ENR&apos;J ne peut recevoir aucun paiement ou contrepartie de la part du Consommateur Assimilé avant l&apos;expiration d&apos;un délai de sept jours à compter de la conclusion du Contrat.
      </p>
      <p className="mt-3">
        À compter de la conclusion du contrat conclu hors établissement avec ENR&apos;J s&apos;il s&apos;agit d&apos;un contrat de prestations de services, ou de la date de réception du bien s&apos;il s&apos;agit d&apos;un contrat de vente de biens, le Consommateur Assimilé dispose d&apos;un délai de quatorze jours pour exercer son droit de rétractation, sans avoir à fournir de motif.
      </p>
      <p className="mt-3">
        Dans le cas d&apos;une commande portant sur plusieurs biens livrés séparément ou dans le cas d&apos;une commande d&apos;un bien composé de lots ou de pièces multiples dont la livraison est échelonnée sur une période définie, le délai court à compter de la réception du dernier bien ou lot ou de la dernière pièce. Pour les contrats prévoyant la livraison régulière de biens pendant une période définie, le délai court à compter de la réception du premier bien.
      </p>
      <p className="mt-3">
        ENR&apos;J et le Consommateur Assimilé qualifient expressément et d&apos;un commun accord de contrat de prestation de services les contrats mixtes conclus entre eux, prévoyant à la fois la vente d&apos;un bien et l&apos;accomplissement de prestations de services en lien avec ce bien et leur réservent, dans ce contexte, les conséquences légales d&apos;un contrat de prestation de services.
      </p>
      <p className="mt-3">
        Pour exercer le droit de rétractation, le Consommateur Assimilé doit notifier à ENR&apos;J sa décision non ambiguë de se rétracter, soit au moyen du formulaire en annexe, soit par une déclaration, notamment sur papier libre à 18 Avenue Mac Mahon ou par e-mail à contact@enr-j.com.
      </p>
      <p className="mt-3">
        Le droit de rétractation ne peut être exercé pour les contrats de fourniture de services pleinement exécutés avant la fin du délai de rétractation et dont l&apos;exécution a commencé après accord préalable exprès du Consommateur Assimilé et renonciation expresse audit droit de rétractation.
      </p>
      <p className="mt-3">
        Les éventuels frais de transport pour la restitution des produits vendus par ENR&apos;J sont à la charge exclusive du Consommateur Assimilé.
      </p>
      <p className="mt-3">
        Le Consommateur Assimilé qui a demandé à bénéficier d&apos;un financement du prix du contrat par l&apos;intermédiaire de ENR&apos;J déclare et reconnaît expressément par la signature du devis avoir été préalablement informé de sa possibilité de choisir un autre établissement financier ou bancaire que celui proposé par ENR&apos;J pour payer le prix de la prestation et avoir reçu et lu, préalablement à la commande avec demande de financement, l&apos;ensemble des informations pré-contractuelles en matière de crédit et avoir fourni à ENR&apos;J des informations exactes et complètes pour l&apos;évaluation de sa solvabilité par le prêteur et un exemplaire de l&apos;offre de contrat de crédit.
      </p>
      <p className="mt-3">
        La période pendant laquelle les pièces détachées indispensables à l&apos;utilisation des Produits sont disponibles sur le marché correspond à la durée de la garantie du fabricant de chaque produit concerné.
      </p>

      {/* Article 12 */}
      <h2 className="text-xl font-bold mt-8 mb-4">Article 12 - Assurance</h2>
      <p>
        Sauf stipulation contraire, ENR&apos;J est titulaire d&apos;une police d&apos;assurance professionnelle de responsabilité décennale et de responsabilité civile professionnelle souscrite auprès de la compagnie d&apos;assurance CUBE Entreprises de Construction, sous le n&deg;037.0012525.
      </p>

      {/* Article 13 */}
      <h2 className="text-xl font-bold mt-8 mb-4">Article 13 - Protection des données personnelles</h2>
      <p>
        Les données relatives au Client à caractère personnel recueillies par ENR&apos;J dans le cadre de leurs relations commerciales sont enregistrées dans un fichier informatisé destiné à permettre l&apos;exécution des prestations commandées par le Client et plus généralement, la gestion et le suivi des dossiers, la facturation et les relations avec le Client.
      </p>
      <p className="mt-3">
        Le responsable du traitement des données à caractère personnel est Monsieur Louis Hunsinger élisant domicile au siège de ENR&apos;J à cet égard.
      </p>
      <p className="mt-3">
        Les données collectées relatives au Client sont conservées pendant un délai de deux (2) ans au-delà du terme des garanties légales applicables aux produits. Ces données peuvent être transmises à des acteurs commerciaux ou publicitaires, sauf opposition du Client.
      </p>
      <p className="mt-3">
        Conformément aux dispositions du Règlement général européen n&deg;2016/679 du 27 avril 2016 sur la protection des données personnelles (RGPD) et de la loi Informatique fichiers et libertés du 6 janvier 1978 modifiée, le Client dispose d&apos;un droit d&apos;accès, de limitation, de rectification, de suppression et d&apos;effacement sur les données à caractère personnel le concernant, qu&apos;il peut exercer en donnant ses instructions au responsable du traitement des données collectées à caractère personnel au sein de ENR&apos;J, par courrier à 18 Avenue Mac Mahon, 75017 Paris.
      </p>
      <p className="mt-3">
        Le Client dispose également, le cas échéant, en vertu de ces textes, du droit à la portabilité de ses données et du droit de donner des instructions pour la communication ou non de ses données personnelles après son décès.
      </p>
      <p className="mt-3">
        Le Client est toutefois informé que le fait de ne pas fournir certaines données personnelles utiles peut empêcher ENR&apos;J de traiter sa commande ou en retarder le traitement. En cas de litige, la Commission Nationale de l&apos;Informatique et des Libertés, autorité de contrôle compétente, peut être saisie.
      </p>

      {/* Article 14 */}
      <h2 className="text-xl font-bold mt-8 mb-4">Article 14 - Validité des CGV</h2>
      <p>
        Les présentes CGV annulent et remplacent toutes versions antérieures.
      </p>
      <p className="mt-3">
        Les titres des articles sont donnés par simple commodité pour faciliter la lecture des CGV. Ils n&apos;ont pas vocation à définir, limiter ou décrire la portée ou le sens des articles qu&apos;ils précèdent.
      </p>
      <p className="mt-3">
        La nullité, la réputation non écrite ou la caducité d&apos;une stipulation ou d&apos;un article des CGV n&apos;emportera pas nullité des autres clauses et conditions des CGV qui continueront de s&apos;appliquer entre les parties tant qu&apos;elles conserveront un sens.
      </p>

      {/* Article 15 */}
      <h2 className="text-xl font-bold mt-8 mb-4">Article 15 - Droit applicable, juridiction compétente</h2>
      <p>
        Les CGV sont régies par la loi française.
      </p>
      <p className="mt-3">
        En cas de litige afférent à la commande ou ses suites, les Parties doivent d&apos;abord tenter de résoudre amiablement leur différend entre elles.
      </p>
      <p className="mt-3">
        À défaut d&apos;accord amiable dans un délai de six (6) semaines, les Consommateurs Assimilés pourront soumettre leur litige au service de médiation &laquo;&nbsp;Médiation de la Consommation &amp; Patrimoine&nbsp;&raquo;, dont ENR&apos;J relève, soit en ligne sur mcpmediation.org soit par voie postale à &laquo;&nbsp;Médiation de la Consommation &amp; Patrimoine, 12 square Des nouettes, 75015 Paris&nbsp;&raquo;.
      </p>
      <p className="mt-3">
        À défaut d&apos;accord amiable ou en cas d&apos;échec de la médiation, les Parties attribuent compétence exclusive au Tribunal de commerce de Paris pour connaître de tout différend les opposant.
      </p>

      {/* Annexe */}
      <hr className="my-10 border-border" />
      <h2 className="text-xl font-bold mt-8 mb-4">Annexe à l&apos;article 11 - Modèle de formulaire de rétractation</h2>
      <p className="text-sm italic mb-6">
        (Veuillez compléter et renvoyer le présent formulaire uniquement si vous souhaitez vous rétracter du contrat.)
      </p>
      <div className="p-6 rounded-lg border border-border bg-muted/10 space-y-4">
        <p>
          À l&apos;attention de ENR&apos;J, 18 Avenue Mac Mahon, 75017 Paris - contact@enr-j.com :
        </p>
        <p>
          Je/nous (*) vous notifie/notifions (*) par la présente ma/notre (*) rétractation du contrat portant sur la vente du bien (*)/pour la prestation de services (*) ci-dessous :
        </p>
        <div className="space-y-3 pt-2">
          <p>Commandé le (*)/reçu le (*) : _______________</p>
          <p>Nom du (des) consommateur(s) : _______________</p>
          <p>Adresse du (des) consommateur(s) : _______________</p>
          <p>Signature du (des) consommateur(s) : _______________</p>
          <p>Date : _______________</p>
        </div>
        <p className="text-xs italic">(*) Rayez la mention inutile.</p>
      </div>
    </LegalPageLayout>
  );
}
