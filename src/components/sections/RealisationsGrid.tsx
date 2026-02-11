"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Zap,
  Calendar,
  Ruler,
  TrendingUp,
  Clock,
  Leaf,
  ChevronDown,
  Quote,
  Wrench,
  CheckCircle2,
  Euro,
} from "lucide-react";
import Card from "@/components/ui/Card";
import { realisations } from "@/data/realisations";
import { cn } from "@/lib/utils";

const filters = [
  "Tous",
  "Hangar agricole",
  "Toiture industrielle",
  "Ombrière de parking",
];

export default function RealisationsGrid() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered =
    activeFilter === "Tous"
      ? realisations
      : realisations.filter((r) => r.type === activeFilter);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer",
              activeFilter === filter
                ? "bg-primary text-white"
                : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filtered.map((real) => {
          const isExpanded = expandedId === real.id;
          return (
            <Card key={real.id} hover={false} className="overflow-hidden">
              {/* Image */}
              <div className="relative w-full h-56 rounded-xl mb-5 overflow-hidden">
                <Image
                  src={real.image}
                  alt={real.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold rounded-full">
                    {real.type}
                  </span>
                </div>
              </div>

              {/* Header */}
              <h3 className="text-lg font-bold text-foreground mb-2">
                {real.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {real.description}
              </p>

              {/* Key metrics grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{real.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Zap className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{real.power}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Ruler className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{real.surface}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <TrendingUp className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{real.productionAnnuelle}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Leaf className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{real.co2Evite}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>
                    {new Date(real.date).toLocaleDateString("fr-FR", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>

              {/* Financial model + savings highlight */}
              <div className="flex flex-col sm:flex-row gap-2 mb-4">
                <div className="flex items-center gap-2 px-3 py-2 bg-primary/5 rounded-lg text-xs">
                  <Euro className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="font-medium text-foreground">
                    {real.modele}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-secondary/5 rounded-lg text-xs">
                  <Clock className="w-3.5 h-3.5 text-secondary shrink-0" />
                  <span className="font-medium text-foreground">
                    Chantier : {real.dureeChantier}
                  </span>
                </div>
              </div>

              {/* Savings line */}
              <div className="px-3 py-2 bg-green-50 border border-green-100 rounded-lg text-xs text-green-800 font-medium mb-4">
                {real.economie}
              </div>

              {/* Expand/collapse button */}
              <button
                onClick={() =>
                  setExpandedId(isExpanded ? null : real.id)
                }
                className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-hover transition-colors cursor-pointer"
              >
                {isExpanded ? "Voir moins" : "Voir le détail complet"}
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    isExpanded && "rotate-180"
                  )}
                />
              </button>

              {/* Expanded content */}
              {isExpanded && (
                <div className="mt-5 pt-5 border-t border-border/50 space-y-5">
                  {/* Details list */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Détails de l&apos;installation
                    </h4>
                    <ul className="space-y-2">
                      {real.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenge */}
                  {real.challenge && (
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Wrench className="w-4 h-4 text-secondary" />
                        Challenge technique
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {real.challenge}
                      </p>
                    </div>
                  )}

                  {/* Testimonial */}
                  {real.testimonial && (
                    <div className="bg-muted/50 rounded-xl p-4">
                      <Quote className="w-5 h-5 text-primary/40 mb-2" />
                      <p className="text-sm text-foreground italic mb-3">
                        &ldquo;{real.testimonial.quote}&rdquo;
                      </p>
                      <div className="text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          {real.testimonial.author}
                        </span>{" "}
                        · {real.testimonial.role}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
