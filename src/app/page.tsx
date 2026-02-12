import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import OffersSection from "@/components/sections/OffersSection";
import StatsSection from "@/components/sections/StatsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTABannerSection from "@/components/sections/CTABannerSection";
import JsonLd from "@/components/seo/JsonLd";
import { getFAQSchema, getLocalBusinessSchema } from "@/components/seo/schemas";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "ENR-J Solaire | Panneaux Solaires Professionnels : 0€ d'Investissement",
  description:
    "Tiers-investissement solaire pour professionnels. Installation photovoltaïque financée à 100%, maintenance incluse. Loi APER, Décret Tertiaire.",
  alternates: {
    canonical: "https://www.enr-j.com",
  },
  openGraph: {
    title: "ENR-J Solaire | Votre toiture produit de l'énergie. Sans investir un euro.",
    description:
      "Nous finançons et installons vos panneaux solaires. 0€ d'investissement, maintenance incluse 30 ans.",
    url: "https://www.enr-j.com",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={getFAQSchema(faqItems)} />
      <JsonLd data={getLocalBusinessSchema()} />
      <HeroSection />
      <HowItWorksSection />
      <OffersSection />
      <StatsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABannerSection />
    </>
  );
}
