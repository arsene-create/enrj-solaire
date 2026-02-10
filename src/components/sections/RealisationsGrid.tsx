"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Zap, Calendar } from "lucide-react";
import Card from "@/components/ui/Card";
import { realisations } from "@/data/realisations";
import { cn } from "@/lib/utils";

const filters = ["Tous", "Hangar agricole", "Toiture industrielle", "Ombrière de parking"];

export default function RealisationsGrid() {
  const [activeFilter, setActiveFilter] = useState("Tous");

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((real) => (
          <Card key={real.id}>
            <div className="relative w-full h-48 rounded-xl mb-4 overflow-hidden">
              <Image
                src={real.image}
                alt={real.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
              {real.type}
            </span>
            <h3 className="font-bold text-foreground mb-2">{real.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{real.description}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {real.location}
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" />
                {real.power}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(real.date).toLocaleDateString("fr-FR", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
