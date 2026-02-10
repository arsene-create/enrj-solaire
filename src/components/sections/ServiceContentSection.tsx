import { CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import type { Service } from "@/lib/types";

interface ServiceContentSectionProps {
  service: Service;
}

export default function ServiceContentSection({
  service,
}: ServiceContentSectionProps) {
  return (
    <>
      {/* Long description */}
      <SectionWrapper background="white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {service.longDescription}
          </p>
        </div>
      </SectionWrapper>

      {/* Features + Benefits grid */}
      <SectionWrapper background="muted">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Features */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Ce que nous proposons
            </h2>
            <ul className="space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Vos avantages
            </h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
