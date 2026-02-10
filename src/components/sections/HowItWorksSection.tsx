import { Search, FileCheck, Wrench, Sun } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Étude de faisabilité gratuite",
    description:
      "Analyse de votre toiture : orientation, surface, structure portante, raccordement réseau, absence d'amiante et d'ombrage.",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "Conception & démarches",
    description:
      "Dimensionnement optimal de l'installation, permis de construire, raccordement Enedis, dossier EDF OA. Nous gérons tout.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Installation clé en main",
    description:
      "Pose par nos équipes certifiées RGE QualiPV en 2 à 6 semaines, sans interruption de votre activité.",
  },
  {
    icon: Sun,
    step: "04",
    title: "Vous produisez",
    description:
      "Autoconsommation ou revente du surplus. Monitoring en temps réel et maintenance incluse pendant toute la durée du contrat.",
  },
];

export default function HowItWorksSection() {
  return (
    <SectionWrapper background="white" id="comment-ca-marche">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
          Processus simple
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Comment ça marche ?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Du diagnostic à la mise en service, nous gérons l&apos;intégralité du
          projet. Sans aucun investissement de votre part.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connector line (desktop) */}
        <div className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20" />

        {steps.map((step) => (
          <div key={step.step} className="relative text-center group">
            {/* Step icon */}
            <div className="relative z-10 mb-6 inline-block">
              <div className="w-28 h-28 mx-auto rounded-3xl bg-white border border-border/50 shadow-lg shadow-primary/5 flex items-center justify-center group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:-translate-y-1 transition-all duration-500">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              {/* Step number */}
              <div className="absolute -top-3 -right-3 w-9 h-9 bg-gradient-to-br from-primary to-secondary text-white text-sm font-bold rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                {step.step}
              </div>
            </div>

            <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {step.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
