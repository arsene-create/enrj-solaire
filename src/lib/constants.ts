export const COMPANY = {
  name: "ENR'J",
  fullName: "ENR'J",
  legalForm: "SASU, société par actions simplifiée unipersonnelle",
  phone: "01 84 60 20 21",
  phoneHref: "tel:+33184602021",
  email: "contact@enr-j.com",
  address: "18 Avenue Mac-Mahon, 75017 Paris",
  city: "Paris",
  postalCode: "75017",
  region: "Île-de-France",
  country: "France",
  siren: "878 525 195",
  siret: "878 525 195 00029",
  tva: "FR43878525195",
  rcs: "878 525 195 R.C.S. Paris",
  capitalSocial: "20 000 €",
  president: "Hunsinger Louis",
  dateCreation: "15/10/2019",
  effectif: "6 à 9 salariés",
  naf: "43.99C",
  website: "https://www.enr-j.com",
  logo: "/images/logo-enrj.png",
  tagline: "Votre toiture produit de l'énergie. Sans investir un euro.",
  description:
    "Tiers-investissement solaire pour agriculteurs, industriels et gestionnaires fonciers. Installation et financement de panneaux photovoltaïques sans investissement initial.",
} as const;

export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  {
    label: "Nos Solutions",
    href: "#",
    children: [
      { label: "Hangars Agricoles", href: "/hangars-agricoles" },
      { label: "Toitures Industrielles", href: "/toitures-industrielles" },
      { label: "Ombrières de Parking", href: "/ombrieres-parking" },
      { label: "Tiers-Investissement", href: "/tiers-investissement" },
    ],
  },
  { label: "Réalisations", href: "/realisations" },
  { label: "Blog", href: "/blog" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
] as const;

export const CTA_PHONE = {
  label: "Appeler",
  href: COMPANY.phoneHref,
  text: COMPANY.phone,
} as const;

export const STATS = [
  { value: 25.3, suffix: " GW", label: "Capacité solaire installée en France" },
  { value: 48, prefix: "+", suffix: "%", label: "Croissance du marché solaire en 2024" },
  { value: 60, prefix: "+", suffix: "%", label: "Hausse du prix de l'électricité depuis 2021" },
  { value: 1112, suffix: " kWh/kWc", label: "Production annuelle en Auvergne-Rhône-Alpes" },
] as const;

export const MARKET_DATA = {
  // Capacité installée France (source : RTE/Enedis 2024)
  capaciteInstallee: "25,3 GW",
  croissanceMarche: "+48% en 2024",
  haussePrixElec: "+60% depuis 2021",
  productionARA: "1 112 kWh/kWc/an",

  // Tarifs EDF OA T1 2026
  tarifsEdfOa: {
    "≤9 kWc": "0,1430 €/kWh",
    "9-36 kWc": "0,1215 €/kWh",
    "36-100 kWc": "0,1355 €/kWh",
    "100-500 kWc": "0,1168 €/kWh",
  },

  // Prime autoconsommation T1 2026
  primeAutoconso: {
    "≤9 kWc": "80 €/kWc",
    "9-36 kWc": "140 €/kWc",
    "36-100 kWc": "70 €/kWc",
  },

  // Loi APER — seuils en surface (PAS en nombre de places)
  loiAper: {
    seuilBas: "1 500 m²",
    seuilHaut: "10 000 m²",
    echeanceGrandParking: "1er juillet 2026",
    echeancePetitParking: "1er juillet 2028",
    couvertureMinimum: "50%",
    amendeGrand: "40 000 €/an",
    amendePetit: "20 000 €/an",
  },

  // Décret Tertiaire
  decretTertiaire: {
    seuil: "1 000 m²",
    objectif2030: "-40%",
    objectif2040: "-50%",
    objectif2050: "-60%",
  },

  // Agrivoltaïsme
  agrivoltaisme: {
    couvertureMax: "40%",
    rendementMinimum: "90%",
  },

  // Tiers-investissement
  tiersInvestissement: {
    dureeTypique: "15 à 25 ans",
    garantiePanneaux: "25 ans",
    dureeContratEdfOa: "20 ans",
  },
} as const;
