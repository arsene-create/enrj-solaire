import type { Metadata } from "next";
import { Film } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionWrapper from "@/components/ui/SectionWrapper";
import RealisationsGrid from "@/components/sections/RealisationsGrid";
import VideoReferencesSection from "@/components/sections/VideoReferencesSection";
import CTABannerSection from "@/components/sections/CTABannerSection";

export const metadata: Metadata = {
  title: "Nos Réalisations | Installations Solaires Professionnelles",
  description:
    "Nos installations solaires en tiers-investissement : hangars agricoles, toitures industrielles et ombrières de parking en France.",
  alternates: {
    canonical: "https://www.enrj-solaire.fr/realisations",
  },
  openGraph: {
    title: "Réalisations ENR-J Solaire",
    description:
      "Exemples d'installations photovoltaïques professionnelles réalisées en tiers-investissement partout en France.",
  },
};

export default function RealisationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Réalisations" }]} />

      <section className="py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Portfolio
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Nos réalisations
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exemples d&apos;installations solaires réalisées en tiers-investissement
            </p>
          </div>

          <RealisationsGrid />
        </div>
      </section>

      {/* Video References */}
      <SectionWrapper background="muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Film className="w-4 h-4" />
              Nos chantiers en images
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Références en vidéo
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Découvrez nos chantiers filmés : de la pose des panneaux au
              raccordement, suivez chaque étape de nos installations.
            </p>
          </div>
          <VideoReferencesSection />
        </div>
      </SectionWrapper>

      <CTABannerSection />
    </>
  );
}
