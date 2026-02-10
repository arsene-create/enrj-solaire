"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Building2,
  MapPin,
  Zap,
  User,
  Loader2,
} from "lucide-react";
import { step1Schema, step2Schema, step3Schema } from "@/lib/schemas";
import type { Step1Data, Step2Data, Step3Data } from "@/lib/schemas";
import { cn } from "@/lib/utils";

const buildingTypes = [
  { value: "hangar-agricole", label: "Hangar agricole" },
  { value: "toiture-industrielle", label: "Toiture industrielle" },
  { value: "ombriere-parking", label: "Ombrière de parking" },
  { value: "toiture-commerciale", label: "Toiture commerciale" },
  { value: "autre", label: "Autre" },
];

const roofAreas = [
  { value: "300-500", label: "300 à 500 m²" },
  { value: "500-1000", label: "500 à 1 000 m²" },
  { value: "1000-2500", label: "1 000 à 2 500 m²" },
  { value: "2500-5000", label: "2 500 à 5 000 m²" },
  { value: "5000+", label: "Plus de 5 000 m²" },
];

const orientations = [
  { value: "sud", label: "Sud" },
  { value: "sud-est", label: "Sud-Est" },
  { value: "sud-ouest", label: "Sud-Ouest" },
  { value: "est-ouest", label: "Est-Ouest" },
  { value: "inconnu", label: "Je ne sais pas" },
];

const electricityBills = [
  { value: "500-1000", label: "500 à 1 000 €/mois" },
  { value: "1000-2500", label: "1 000 à 2 500 €/mois" },
  { value: "2500-5000", label: "2 500 à 5 000 €/mois" },
  { value: "5000+", label: "Plus de 5 000 €/mois" },
  { value: "inconnu", label: "Je ne sais pas" },
];

const roofConditions = [
  { value: "bon", label: "Bon état" },
  { value: "moyen", label: "État moyen" },
  { value: "renovation", label: "À rénover" },
  { value: "neuf", label: "Construction neuve" },
];

export default function SimulatorForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<Step1Data & Step2Data & Step3Data>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const form1 = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: formData,
  });

  const form2 = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: formData,
  });

  const form3 = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues: formData,
  });

  const handleStep1 = (data: Step1Data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleStep2 = (data: Step2Data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(3);
  };

  const handleStep3 = async (data: Step3Data) => {
    const fullData = { ...formData, ...data };
    setLoading(true);
    try {
      await fetch("/api/simulator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fullData),
      });
      setSubmitted(true);
    } catch {
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-success" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">
          Demande envoyée !
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Notre équipe vous contactera sous 24h pour discuter de votre projet
          solaire. Merci pour votre confiance.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex-1 flex items-center gap-2">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors shrink-0",
                step >= s
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {step > s ? <CheckCircle className="w-4 h-4" /> : s}
            </div>
            {s < 3 && (
              <div
                className={cn(
                  "flex-1 h-1 rounded-full transition-colors",
                  step > s ? "bg-primary" : "bg-muted"
                )}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step labels */}
      <div className="flex justify-between mb-8 text-xs text-muted-foreground">
        <span className={cn(step >= 1 && "text-primary font-medium")}>
          <Building2 className="w-3.5 h-3.5 inline mr-1" />
          Votre bâtiment
        </span>
        <span className={cn(step >= 2 && "text-primary font-medium")}>
          <Zap className="w-3.5 h-3.5 inline mr-1" />
          Énergie
        </span>
        <span className={cn(step >= 3 && "text-primary font-medium")}>
          <User className="w-3.5 h-3.5 inline mr-1" />
          Vos coordonnées
        </span>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <form onSubmit={form1.handleSubmit(handleStep1)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Type de bâtiment
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {buildingTypes.map((type) => (
                <label
                  key={type.value}
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all",
                    form1.watch("buildingType") === type.value
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/30"
                  )}
                >
                  <input
                    type="radio"
                    value={type.value}
                    {...form1.register("buildingType")}
                    className="sr-only"
                  />
                  <div
                    className={cn(
                      "w-4 h-4 rounded-full border-2 shrink-0",
                      form1.watch("buildingType") === type.value
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    )}
                  />
                  <span className="text-sm font-medium">{type.label}</span>
                </label>
              ))}
            </div>
            {form1.formState.errors.buildingType && (
              <p className="text-danger text-sm mt-2">
                {form1.formState.errors.buildingType.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Surface de toiture estimée
            </label>
            <select
              {...form1.register("roofArea")}
              className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors bg-white"
            >
              <option value="">Sélectionnez une surface</option>
              {roofAreas.map((area) => (
                <option key={area.value} value={area.value}>
                  {area.label}
                </option>
              ))}
            </select>
            {form1.formState.errors.roofArea && (
              <p className="text-danger text-sm mt-2">
                {form1.formState.errors.roofArea.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              <MapPin className="w-4 h-4 inline mr-1" />
              Localisation (ville ou code postal)
            </label>
            <input
              type="text"
              {...form1.register("location")}
              placeholder="Ex : Lyon, 69001"
              className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors"
            />
            {form1.formState.errors.location && (
              <p className="text-danger text-sm mt-2">
                {form1.formState.errors.location.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-hover transition-all hover:scale-[1.01] cursor-pointer"
          >
            Continuer
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <form onSubmit={form2.handleSubmit(handleStep2)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Facture d&apos;électricité mensuelle
            </label>
            <select
              {...form2.register("electricityBill")}
              className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors bg-white"
            >
              <option value="">Sélectionnez un montant</option>
              {electricityBills.map((bill) => (
                <option key={bill.value} value={bill.value}>
                  {bill.label}
                </option>
              ))}
            </select>
            {form2.formState.errors.electricityBill && (
              <p className="text-danger text-sm mt-2">
                {form2.formState.errors.electricityBill.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Orientation de la toiture
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {orientations.map((ori) => (
                <label
                  key={ori.value}
                  className={cn(
                    "flex items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all text-center",
                    form2.watch("roofOrientation") === ori.value
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/30"
                  )}
                >
                  <input
                    type="radio"
                    value={ori.value}
                    {...form2.register("roofOrientation")}
                    className="sr-only"
                  />
                  <span className="text-sm font-medium">{ori.label}</span>
                </label>
              ))}
            </div>
            {form2.formState.errors.roofOrientation && (
              <p className="text-danger text-sm mt-2">
                {form2.formState.errors.roofOrientation.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              État de la toiture
            </label>
            <div className="grid grid-cols-2 gap-3">
              {roofConditions.map((cond) => (
                <label
                  key={cond.value}
                  className={cn(
                    "flex items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all text-center",
                    form2.watch("roofCondition") === cond.value
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/30"
                  )}
                >
                  <input
                    type="radio"
                    value={cond.value}
                    {...form2.register("roofCondition")}
                    className="sr-only"
                  />
                  <span className="text-sm font-medium">{cond.label}</span>
                </label>
              ))}
            </div>
            {form2.formState.errors.roofCondition && (
              <p className="text-danger text-sm mt-2">
                {form2.formState.errors.roofCondition.message}
              </p>
            )}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-border text-foreground font-semibold rounded-full hover:bg-muted transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour
            </button>
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-hover transition-all hover:scale-[1.01] cursor-pointer"
            >
              Continuer
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <form onSubmit={form3.handleSubmit(handleStep3)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Nom de l&apos;entreprise
              </label>
              <input
                type="text"
                {...form3.register("companyName")}
                placeholder="Mon Entreprise SAS"
                className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors"
              />
              {form3.formState.errors.companyName && (
                <p className="text-danger text-sm mt-2">
                  {form3.formState.errors.companyName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Votre nom
              </label>
              <input
                type="text"
                {...form3.register("contactName")}
                placeholder="Jean Dupont"
                className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors"
              />
              {form3.formState.errors.contactName && (
                <p className="text-danger text-sm mt-2">
                  {form3.formState.errors.contactName.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email professionnel
              </label>
              <input
                type="email"
                {...form3.register("email")}
                placeholder="jean@entreprise.fr"
                className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors"
              />
              {form3.formState.errors.email && (
                <p className="text-danger text-sm mt-2">
                  {form3.formState.errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                {...form3.register("phone")}
                placeholder="06 12 34 56 78"
                className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors"
              />
              {form3.formState.errors.phone && (
                <p className="text-danger text-sm mt-2">
                  {form3.formState.errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Message (optionnel)
            </label>
            <textarea
              {...form3.register("message")}
              rows={3}
              placeholder="Décrivez votre projet ou posez vos questions..."
              className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors resize-none"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-border text-foreground font-semibold rounded-full hover:bg-muted transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-hover transition-all hover:scale-[1.01] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer ma demande
                  <CheckCircle className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            En soumettant ce formulaire, vous acceptez notre{" "}
            <a href="/politique-confidentialite" className="text-primary hover:underline">
              politique de confidentialité
            </a>
            . Vos données ne seront jamais partagées.
          </p>
        </form>
      )}
    </div>
  );
}
