import { z } from "zod";

export const step1Schema = z.object({
  buildingType: z.string().min(1, "Veuillez sélectionner un type de bâtiment"),
  roofArea: z.string().min(1, "Veuillez indiquer la surface de toiture"),
  location: z.string().min(2, "Veuillez indiquer votre localisation"),
});

export const step2Schema = z.object({
  electricityBill: z.string().min(1, "Veuillez indiquer votre facture"),
  roofOrientation: z.string().min(1, "Veuillez sélectionner une orientation"),
  roofCondition: z.string().min(1, "Veuillez indiquer l'état de la toiture"),
});

export const step3Schema = z.object({
  companyName: z.string().min(2, "Le nom de l'entreprise est requis"),
  contactName: z.string().min(2, "Votre nom est requis"),
  email: z.string().email("Veuillez entrer un email valide"),
  phone: z
    .string()
    .min(10, "Veuillez entrer un numéro de téléphone valide")
    .regex(/^[0-9+\s()-]+$/, "Numéro de téléphone invalide"),
  message: z.string().optional(),
});

export const simulatorSchema = z.object({
  ...step1Schema.shape,
  ...step2Schema.shape,
  ...step3Schema.shape,
});

export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
export type Step3Data = z.infer<typeof step3Schema>;
export type SimulatorData = z.infer<typeof simulatorSchema>;
