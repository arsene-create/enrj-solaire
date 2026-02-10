declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
}

export function trackSimulatorStart() {
  trackEvent("simulator_start", "engagement", "Simulator Form");
}

export function trackSimulatorStep(step: number) {
  trackEvent("simulator_step", "engagement", `Step ${step}`);
}

export function trackSimulatorComplete() {
  trackEvent("simulator_complete", "conversion", "Simulator Form");
}

export function trackContactFormSubmit() {
  trackEvent("contact_submit", "conversion", "Contact Form");
}

export function trackPhoneClick() {
  trackEvent("phone_click", "engagement", "Phone CTA");
}

export function trackCTAClick(ctaName: string) {
  trackEvent("cta_click", "engagement", ctaName);
}
