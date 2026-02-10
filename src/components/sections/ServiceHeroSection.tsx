import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

interface ServiceHeroSectionProps {
  title: string;
  description: string;
  breadcrumbLabel: string;
  image?: string;
}

export default function ServiceHeroSection({
  title,
  description,
  breadcrumbLabel,
  image,
}: ServiceHeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/75 to-white/90" />
        </div>
      )}
      {!image && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        </div>
      )}

      <div className="relative z-10">
        <Breadcrumbs
          items={[
            { label: "Nos Solutions", href: "/#solutions" },
            { label: breadcrumbLabel },
          ]}
        />

        <div className="max-w-4xl mx-auto px-4 pt-4 pb-16 md:pb-24 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/simulateur"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full hover:bg-primary-hover transition-all hover:scale-[1.02] shadow-xl shadow-primary/25"
            >
              Étude gratuite
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+33184602021"
              className="inline-flex items-center gap-2 px-6 py-4 border-2 border-foreground/20 text-foreground font-semibold rounded-full hover:border-primary hover:text-primary transition-all"
            >
              <Phone className="w-5 h-5" />
              01 84 60 20 21
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
