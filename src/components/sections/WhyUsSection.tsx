import {
  BadgeEuro,
  ShieldCheck,
  Wrench,
  FileCheck,
  Scale,
  Award,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const advantages = [
  {
    icon: BadgeEuro,
    title: "0€ d'investissement",
    description:
      "Le tiers-investisseur finance 100% de l'installation. Aucun apport, aucun emprunt, aucun impact sur votre trésorerie.",
  },
  {
    icon: FileCheck,
    title: "Clé en main",
    description:
      "Du permis de construire au raccordement Enedis et au dossier EDF OA : nous gérons l'intégralité des démarches.",
  },
  {
    icon: Award,
    title: "Certifié RGE QualiPV",
    description:
      "Certification obligatoire pour accéder aux aides publiques et au tarif de rachat EDF OA. Gage de qualité et de conformité.",
  },
  {
    icon: Wrench,
    title: "Maintenance incluse",
    description:
      "Monitoring en temps réel, nettoyage des panneaux, remplacement onduleurs — pendant toute la durée du contrat (15-25 ans).",
  },
  {
    icon: Scale,
    title: "Conformité réglementaire",
    description:
      "Loi APER (ombrières parking), Décret Tertiaire (-40% en 2030), normes agrivoltaïsme : nous vous mettons en conformité.",
  },
  {
    icon: ShieldCheck,
    title: "Garantie 25 ans",
    description:
      "Panneaux garantis 25 ans en performance (>80% de rendement à 25 ans). Onduleurs garantis 10 à 20 ans selon le modèle.",
  },
];

export default function WhyUsSection() {
  return (
    <SectionWrapper background="white" id="pourquoi-nous">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
          Nos engagements
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Pourquoi choisir ENR-J Solaire ?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Un partenaire solaire qui prend en charge le financement, l&apos;installation
          et la maintenance de votre centrale photovoltaïque
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {advantages.map((adv, i) => (
          <div
            key={adv.title}
            className="group relative p-7 rounded-2xl bg-white border border-border/50 hover:border-transparent hover:shadow-2xl hover:shadow-primary/[0.06] hover:-translate-y-1 transition-all duration-500 gradient-border overflow-hidden"
          >
            {/* Number indicator */}
            <div className="absolute top-5 right-5 text-5xl font-extrabold text-muted/80 select-none leading-none">
              {String(i + 1).padStart(2, "0")}
            </div>

            {/* Icon */}
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-5 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
              <adv.icon className="w-6 h-6 text-primary" />
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {adv.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {adv.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
