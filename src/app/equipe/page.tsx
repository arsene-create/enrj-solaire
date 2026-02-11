import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Phone } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTABannerSection from "@/components/sections/CTABannerSection";
import { equipe } from "@/data/equipe";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Notre Équipe | Les visages derrière vos projets solaires",
  description:
    "Découvrez l'équipe ENR'J : des chargés de projet énergétique et experts dédiés qui vous accompagnent de l'étude de faisabilité au raccordement de votre installation solaire.",
  alternates: {
    canonical: "https://www.enr-j.com/equipe",
  },
  openGraph: {
    title: "L'équipe ENR'J Solaire",
    description:
      "Des professionnels passionnés par la transition énergétique. Chaque projet est suivi par un interlocuteur dédié.",
  },
};

export default function EquipePage() {
  const ceo = equipe[0];
  const team = equipe.slice(1);

  return (
    <>
      <Breadcrumbs items={[{ label: "Notre équipe" }]} />

      {/* Hero */}
      <SectionWrapper background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            {equipe.length} collaborateurs dédiés
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Les visages derrière{" "}
            <span className="text-primary">vos projets solaires</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Chez {COMPANY.name}, chaque projet est suivi par un interlocuteur dédié.
            Notre équipe vous accompagne de A à Z : étude de faisabilité, démarches
            administratives, installation et suivi de production.
          </p>
        </div>
      </SectionWrapper>

      {/* CEO */}
      <SectionWrapper background="white">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-8 bg-muted/50 rounded-3xl p-8">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shrink-0 shadow-xl bg-muted">
              <Image
                src={ceo.image}
                alt={ceo.name}
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
            <div className="text-center sm:text-left">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                {ceo.role}
              </span>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {ceo.name}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {ceo.anecdote}
              </p>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
              >
                <Phone className="w-4 h-4" />
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Team grid */}
      <SectionWrapper background="muted">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              L&apos;équipe au complet
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-border/50 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-muted">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <h3 className="font-bold text-foreground text-sm md:text-base">
                    {member.name}
                  </h3>
                  <p className="text-xs text-primary font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {member.anecdote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why us section */}
      <SectionWrapper background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Un interlocuteur unique pour votre projet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Un seul contact",
                description:
                  "Un chef de projet dédié qui connaît votre dossier. Un seul numéro à appeler, une seule personne qui vous suit du début à la fin.",
              },
              {
                title: "Expertise technique",
                description:
                  "Nos équipes sont formées au dimensionnement solaire, aux démarches Enedis, aux dossiers EDF OA et à la réglementation en vigueur.",
              },
              {
                title: "Réactivité",
                description:
                  "Réponse sous 48h pour toute demande. Suivi en temps réel de votre projet via notre plateforme de monitoring et un rapport mensuel.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-muted/50 rounded-2xl p-6 border border-border/50"
              >
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/simulateur"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full hover:bg-primary-hover transition-all shadow-lg shadow-primary/25"
            >
              Parler à l&apos;équipe
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <CTABannerSection />
    </>
  );
}
