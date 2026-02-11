export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  image: string;
  ctaText: string;
}

export interface Realisation {
  id: string;
  title: string;
  description: string;
  location: string;
  power: string;
  type: string;
  image: string;
  date: string;
  surface: string;
  productionAnnuelle: string;
  modele: string;
  economie: string;
  dureeChantier: string;
  co2Evite: string;
  details: string[];
  challenge?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
}

export interface City {
  name: string;
  slug: string;
  department: string;
  region: string;
  population?: number;
}

export interface SimulatorFormData {
  step1: {
    buildingType: string;
    roofArea: string;
    location: string;
  };
  step2: {
    electricityBill: string;
    roofOrientation: string;
    roofCondition: string;
  };
  step3: {
    companyName: string;
    contactName: string;
    email: string;
    phone: string;
    message?: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}
