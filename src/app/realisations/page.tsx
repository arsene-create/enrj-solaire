import type { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import RealisationsGrid from "@/components/sections/RealisationsGrid";
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

      <CTABannerSection />
    </>
  );
}
