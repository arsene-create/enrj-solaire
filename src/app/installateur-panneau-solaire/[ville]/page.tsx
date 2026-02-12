import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, MapPin, CheckCircle, Sun } from "lucide-react";
import { cities } from "@/data/cities";
import { COMPANY } from "@/lib/constants";
import JsonLd from "@/components/seo/JsonLd";
import { getLocalBusinessSchema } from "@/components/seo/schemas";
import FAQSection from "@/components/sections/FAQSection";
import CTABannerSection from "@/components/sections/CTABannerSection";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

interface PageProps {
  params: Promise<{ ville: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({ ville: city.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { ville } = await params;
  const city = cities.find((c) => c.slug === ville);
  if (!city) return {};

  return {
    title: `Panneau Solaire ${city.name} (${city.department}) | Devis Gratuit 0€`,
    description: `Installateur panneau solaire à ${city.name} (${city.department}). Centrale solaire professionnelle en tiers-investissement : 0€ d'investissement. Hangars agricoles, toitures industrielles, ombrières parking. Devis gratuit.`,
    alternates: {
      canonical: `https://www.enr-j.com/installateur-panneau-solaire/${ville}`,
    },
    openGraph: {
      title: `Panneau Solaire ${city.name} | ENR-J Solaire`,
      description: `Installateur de panneaux solaires à ${city.name}. Solution clé en main sans investissement.`,
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { ville } = await params;
  const city = cities.find((c) => c.slug === ville);

  if (!city) {
    notFound();
  }

  // Production estimée par zone climatique (kWh/kWc/an)
  const productionByRegion: Record<string, { kwhPerKwc: number; zone: string }> = {
    "Provence-Alpes-Côte d'Azur": { kwhPerKwc: 1350, zone: "H3 : fort ensoleillement" },
    "Occitanie": { kwhPerKwc: 1300, zone: "H3 : fort ensoleillement" },
    "Corse": { kwhPerKwc: 1400, zone: "H3 : fort ensoleillement" },
    "Nouvelle-Aquitaine": { kwhPerKwc: 1200, zone: "H2 : ensoleillement modéré à fort" },
    "Auvergne-Rhône-Alpes": { kwhPerKwc: 1112, zone: "H1/H2 : ensoleillement variable" },
    "Pays de la Loire": { kwhPerKwc: 1150, zone: "H2 : ensoleillement modéré" },
    "Centre-Val de Loire": { kwhPerKwc: 1100, zone: "H2 : ensoleillement modéré" },
    "Bourgogne-Franche-Comté": { kwhPerKwc: 1050, zone: "H1 : ensoleillement modéré" },
    "Bretagne": { kwhPerKwc: 1050, zone: "H2 : ensoleillement modéré" },
    "Normandie": { kwhPerKwc: 1000, zone: "H1 : ensoleillement modéré" },
    "Île-de-France": { kwhPerKwc: 1050, zone: "H1 : ensoleillement modéré" },
    "Hauts-de-France": { kwhPerKwc: 950, zone: "H1 : ensoleillement modéré" },
    "Grand Est": { kwhPerKwc: 1000, zone: "H1 : ensoleillement modéré" },
  };

  const regionData = productionByRegion[city.region] ?? { kwhPerKwc: 1100, zone: "Ensoleillement moyen" };

  const services = [
    {
      title: "Hangars Agricoles",
      desc: `Construction ou rénovation de hangars photovoltaïques à ${city.name}`,
      href: "/hangars-agricoles",
    },
    {
      title: "Toitures Industrielles",
      desc: `Installation solaire sur toitures industrielles à ${city.name}`,
      href: "/toitures-industrielles",
    },
    {
      title: "Ombrières de Parking",
      desc: `Ombrières photovoltaïques pour parkings à ${city.name}`,
      href: "/ombrieres-parking",
    },
  ];

  return (
    <>
      <JsonLd data={getLocalBusinessSchema()} />

      <Breadcrumbs
        items={[
          { label: "Installateur panneau solaire" },
          { label: city.name },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            {city.department}, {city.region}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6">
            Installateur de panneaux solaires à{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {city.name}
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            ENR-J Solaire installe vos panneaux photovoltaïques à {city.name} et
            dans tout le département {city.department}. Tiers-investissement :
            0 € d&apos;investissement initial, maintenance incluse, garantie 30 ans.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/simulateur"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full hover:bg-primary-hover transition-all hover:scale-[1.02] shadow-xl shadow-primary/25"
            >
              Devis gratuit à {city.name}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-4 border-2 border-foreground/20 text-foreground font-semibold rounded-full hover:border-primary hover:text-primary transition-all"
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Nos solutions solaires à {city.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-2xl border border-border/50 hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Estimate */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sun className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
              Production solaire estimée à {city.name}
            </h2>
          </div>
          <p className="text-center text-muted-foreground mb-8">
            {city.region}, {regionData.zone}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <p className="text-3xl font-extrabold text-primary mb-1">{regionData.kwhPerKwc}</p>
              <p className="text-sm text-muted-foreground">kWh/kWc/an</p>
              <p className="text-xs text-muted-foreground mt-1">Production estimée</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <p className="text-3xl font-extrabold text-primary mb-1">{Math.round(regionData.kwhPerKwc * 100 / 1000)}</p>
              <p className="text-sm text-muted-foreground">MWh/an</p>
              <p className="text-xs text-muted-foreground mt-1">Pour 100 kWc installés</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <p className="text-3xl font-extrabold text-primary mb-1">{Math.round(regionData.kwhPerKwc * 100 * 0.1168)}</p>
              <p className="text-sm text-muted-foreground">€/an estimé</p>
              <p className="text-xs text-muted-foreground mt-1">Revente EDF OA (100 kWc)</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            Estimations basées sur les données d&apos;ensoleillement régional. Production réelle variable selon orientation, inclinaison et ombrage.
            Tarif EDF OA : 0,1168 €/kWh (100-500 kWc, T1 2026).
          </p>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Pourquoi choisir ENR-J à {city.name} ?
          </h2>
          <div className="space-y-4">
            {[
              `Intervention rapide à ${city.name} et dans le ${city.department}`,
              "0 € d'investissement initial : le tiers-investisseur finance l'installation",
              "Contrat de 30 ans, maintenance incluse",
              "Panneaux garantis 30 ans en performance (>80% de rendement)",
              "Installateurs certifiés RGE QualiPV",
              "Accompagnement administratif complet (Enedis, EDF OA, permis de construire)",
            ].map((adv) => (
              <div key={adv} className="flex items-start gap-3 bg-white rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <CTABannerSection />
    </>
  );
}
