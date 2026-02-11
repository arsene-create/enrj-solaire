"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const testimonial = testimonials[current];

  return (
    <SectionWrapper background="muted" id="temoignages">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
          Témoignages
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ils nous font confiance
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Découvrez les retours de nos clients professionnels
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-border/50 relative">
          <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/10" />

          <div className="flex items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < testimonial.rating
                    ? "text-amber-400 fill-amber-400"
                    : "text-gray-200"
                }`}
              />
            ))}
          </div>

          <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
            &ldquo;{testimonial.content}&rdquo;
          </blockquote>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-foreground">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">
                {testimonial.role}, {testimonial.company}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {testimonial.location}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors cursor-pointer"
                aria-label="Précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors cursor-pointer"
                aria-label="Suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                i === current
                  ? "bg-primary w-8"
                  : "bg-foreground/20 hover:bg-foreground/40"
              }`}
              aria-label={`Témoignage ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
