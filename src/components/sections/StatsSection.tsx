"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 7.5, decimals: 1, suffix: " mWc", label: "Puissance installée par ENR'J" },
  { value: 150, decimals: 0, prefix: "+", suffix: "", label: "Projets installés depuis le début" },
  { value: 10, decimals: 0, prefix: "+", suffix: "M€", label: "De centrales solaires financées" },
  { value: 20, decimals: 0, prefix: "+", suffix: "", label: "Collaborateurs dédiés" },
];

function AnimatedCounter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Number((eased * value).toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, decimals]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
      {prefix}
      {decimals > 0 ? count.toFixed(decimals).replace(".", ",") : count.toLocaleString("fr-FR")}
      <span className="gradient-text">{suffix}</span>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark" />
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(147,193,145,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(87,178,249,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 glass rounded-full text-sm font-medium text-white/60 mb-4">
            Le marché solaire français
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Des chiffres qui parlent
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="relative text-center p-6 md:p-8"
            >
              {/* Vertical divider */}
              {i > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              )}
              <AnimatedCounter
                value={stat.value}
                decimals={stat.decimals}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
              <p className="mt-3 text-white/50 text-sm md:text-base font-medium leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-xs text-white/25">
            Données ENR'J Solaire, 2025
          </p>
        </div>
      </div>
    </section>
  );
}
