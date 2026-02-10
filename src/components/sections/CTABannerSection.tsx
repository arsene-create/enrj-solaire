import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABannerSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark" />
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(147,193,145,0.25),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(87,178,249,0.15),transparent_50%)]" />

      {/* Floating orbs */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-secondary/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-5xl mx-auto px-4 py-24 md:py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-white/60 mb-8">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Réponse en 48h
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Votre bâtiment est-il{" "}
          <span className="gradient-text">éligible</span> au solaire ?
        </h2>

        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
          Étude gratuite et sans engagement.
          Nous analysons votre toiture et vous présentons les options de financement.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/simulateur"
            className="group inline-flex items-center gap-2.5 px-10 py-5 bg-primary text-white text-lg font-bold rounded-full hover:bg-primary-hover transition-all hover:scale-[1.03] shadow-2xl shadow-primary/30"
          >
            Vérifier mon éligibilité
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="tel:+33184602021"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white/80 text-lg font-semibold rounded-full hover:bg-white/5 hover:border-white/25 transition-all"
          >
            <Phone className="w-5 h-5" />
            01 84 60 20 21
          </a>
        </div>
      </div>
    </section>
  );
}
