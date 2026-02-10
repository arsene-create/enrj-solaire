import Link from "next/link";
import Image from "next/image";
import { Warehouse, Factory, Car, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const offers = [
  {
    icon: Warehouse,
    title: "Hangars Agricoles",
    image: "/images/hangar-agricole.jpg",
    description:
      "Valorisez votre toiture agricole avec le photovoltaïque. Loyer de toiture ou autoconsommation, conforme au cadre agrivoltaïsme.",
    features: [
      "À partir de 500 m²",
      "Production estimée : 100-200 MWh/an",
      "Loyer de toiture : 2 à 4 €/m²/an",
    ],
    href: "/hangars-agricoles",
    gradient: "from-green-500 to-emerald-600",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-600",
  },
  {
    icon: Factory,
    title: "Toitures Industrielles",
    image: "/images/toiture-industrielle.jpg",
    description:
      "Réduisez vos charges de 30 à 50% et anticipez le Décret Tertiaire (-40% d'ici 2030). Autoconsommation ou revente.",
    features: [
      "À partir de 1 000 m²",
      "Conformité Décret Tertiaire",
      "Tarif EDF OA garanti 20 ans",
    ],
    href: "/toitures-industrielles",
    gradient: "from-blue-500 to-cyan-600",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Car,
    title: "Ombrières de Parking",
    image: "/images/ombriere-parking.jpg",
    description:
      "Obligation Loi APER dès 1 500 m² de surface. Échéance juillet 2026 pour les ≥10 000 m². Amende évitée : 40 000 €/an.",
    features: [
      "Seuil : 1 500 m² de surface au sol",
      "Couverture 50% obligatoire",
      "Bornes de recharge IRVE en option",
    ],
    href: "/ombrieres-parking",
    gradient: "from-amber-500 to-orange-600",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
  },
];

export default function OffersSection() {
  return (
    <SectionWrapper background="muted" id="solutions">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
          Nos solutions
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Une solution pour chaque bâtiment
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Hangars, toitures industrielles ou parkings : le tiers-investissement
          s&apos;adapte à votre projet
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <Link
            key={offer.title}
            href={offer.href}
            className="group bg-white rounded-3xl overflow-hidden border border-border/50 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500"
          >
            {/* Image header */}
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              {/* Icon badge */}
              <div className="absolute bottom-4 left-4">
                <div className="w-11 h-11 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <offer.icon className={`w-5 h-5 ${offer.iconColor}`} />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {offer.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {offer.description}
              </p>

              <ul className="space-y-2.5 mb-6">
                {offer.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-sm text-foreground"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${offer.gradient} shrink-0`} />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                En savoir plus
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
