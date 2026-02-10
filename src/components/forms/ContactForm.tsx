"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Votre nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  company: z.string().min(2, "Nom d'entreprise requis"),
  subject: z.string().min(1, "Veuillez sélectionner un sujet"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactData = z.infer<typeof contactSchema>;

const subjects = [
  "Demande de devis",
  "Question technique",
  "Partenariat",
  "Presse / Média",
  "Autre",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactData) => {
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
          Message envoyé !
        </h3>
        <p className="text-muted-foreground">
          Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Nom complet
          </label>
          <input
            type="text"
            {...register("name")}
            placeholder="Jean Dupont"
            className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors"
          />
          {errors.name && (
            <p className="text-danger text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Entreprise
          </label>
          <input
            type="text"
            {...register("company")}
            placeholder="Mon Entreprise SAS"
            className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors"
          />
          {errors.company && (
            <p className="text-danger text-sm mt-1">{errors.company.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="jean@entreprise.fr"
            className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors"
          />
          {errors.email && (
            <p className="text-danger text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Téléphone
          </label>
          <input
            type="tel"
            {...register("phone")}
            placeholder="06 12 34 56 78"
            className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors"
          />
          {errors.phone && (
            <p className="text-danger text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Sujet
        </label>
        <select
          {...register("subject")}
          className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors bg-white"
        >
          <option value="">Sélectionnez un sujet</option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.subject && (
          <p className="text-danger text-sm mt-1">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Message
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Décrivez votre projet ou votre question..."
          className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors resize-none"
        />
        {errors.message && (
          <p className="text-danger text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-hover transition-all hover:scale-[1.01] cursor-pointer disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Envoyer le message
          </>
        )}
      </button>
    </form>
  );
}
