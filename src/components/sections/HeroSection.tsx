import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Shield, Zap, TrendingUp, Sun, Trophy, Handshake } from "lucide-react";

const badges = [
  { icon: Zap, text: "0€ d'investissement" },
  { icon: Shield, text: "Garantie 30 ans" },
  { icon: TrendingUp, text: "+150 projets installés" },
  { icon: Trophy, text: "Prix Innover et Entreprendre" },
  { icon: Handshake, text: "Partenaire ESCP Aviron" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-dark min-h-[90vh] flex items-center">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid" />

      {/* Gradient orbs */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-primary/20 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-[15%] w-2 h-2 bg-primary/40 rounded-full animate-float" />
      <div className="absolute top-40 left-[10%] w-1.5 h-1.5 bg-secondary/40 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 right-[25%] w-1 h-1 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/3 right-[8%] w-3 h-3 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />

      {/* Hero image overlay (subtle) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hangar-agricole.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.07]"
          sizes="100vw"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-28 lg:py-36 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 glass rounded-full text-sm font-medium mb-8">
            <Sun className="w-4 h-4 text-primary" />
            <span className="text-white/80">Tiers-investissement solaire pour professionnels</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] mb-8 tracking-tight">
            Votre toiture produit{" "}
            <span className="gradient-text">
              de l&apos;énergie.
            </span>
            <br />
            <span className="text-white">Sans investir un euro.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-body">
            Nous finançons et installons vos panneaux solaires. Vous bénéficiez
            d&apos;un loyer de toiture ou d&apos;une électricité à prix réduit.
            Maintenance incluse pendant toute la durée du contrat.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/simulateur"
              className="group inline-flex items-center gap-2.5 px-9 py-4.5 bg-primary text-white text-lg font-semibold rounded-full hover:bg-primary-hover transition-all hover:scale-[1.03] shadow-2xl shadow-primary/25 relative overflow-hidden"
            >
              <span className="relative z-10">Vérifier l&apos;éligibilité de mon bâtiment</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-hover opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/tiers-investissement"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white/80 text-lg font-medium rounded-full hover:border-primary/40 hover:text-white hover:bg-white/5 transition-all"
            >
              Comprendre le tiers-investissement
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
            {badges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2.5 px-5 py-3 glass rounded-2xl group hover:border-primary/20 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                  <badge.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>

          {/* Phone */}
          <div className="mt-10">
            <a
              href="tel:+33184602021"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              01 84 60 20 21 · Étude gratuite et sans engagement
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
