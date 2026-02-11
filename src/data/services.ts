import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "hangars-agricoles",
    title: "Hangars Agricoles Photovoltaïques",
    shortTitle: "Hangars Agricoles",
    description:
      "Valorisez votre toiture agricole avec le photovoltaïque. À partir de 500 m², production estimée de 100 à 200 MWh/an. Loyer de toiture ou autoconsommation, sans investissement.",
    longDescription:
      "Votre hangar agricole dispose d'une toiture à fort potentiel solaire. En tiers-investissement, nous finançons et installons une centrale photovoltaïque sur votre bâtiment existant ou à construire. Vous percevez un loyer de toiture ou bénéficiez d'une électricité à prix réduit. La production est estimée entre 100 et 200 MWh/an pour 500 à 1 200 m² de toiture en Auvergne-Rhône-Alpes (1 112 kWh/kWc/an). Le cadre agrivoltaïque (décret 2024) autorise la couverture de 40% maximum de la parcelle avec un rendement agricole maintenu à 90%.",
    icon: "Warehouse",
    features: [
      "Toiture existante ou construction neuve",
      "Surface à partir de 500 m²",
      "Charpente métallique ou bois",
      "Raccordement Enedis et dossier EDF OA inclus",
      "Conforme au cadre agrivoltaïsme (décret 2024)",
      "Démarches administratives gérées intégralement",
    ],
    benefits: [
      "Loyer de toiture : 2 à 4 €/m²/an",
      "Ou autoconsommation : -30 à -50% sur la facture",
      "Revente EDF OA : tarif garanti 20 ans",
      "Maintenance et monitoring inclus (30 ans)",
      "Valorisation du patrimoine agricole",
      "Aucun impact sur l'activité d'exploitation",
    ],
    image: "/images/hangar-agricole.jpg",
    ctaText: "Vérifier l'éligibilité de mon hangar",
  },
  {
    slug: "toitures-industrielles",
    title: "Toitures Industrielles Solaires",
    shortTitle: "Toitures Industrielles",
    description:
      "Réduisez vos charges énergétiques de 30 à 50% et anticipez le Décret Tertiaire. Autoconsommation ou revente, à partir de 1 000 m² de toiture.",
    longDescription:
      "Votre toiture industrielle ou commerciale représente un potentiel énergétique considérable. Une surface de 3 000 m² peut accueillir environ 450 kWc et produire ~500 MWh/an, soit une économie d'environ 60 000 €/an en autoconsommation. Le Décret Tertiaire impose une réduction de -40% de la consommation d'énergie d'ici 2030 pour les bâtiments de plus de 1 000 m² : le solaire est le levier le plus direct pour y parvenir. En tiers-investissement, zéro impact sur votre trésorerie.",
    icon: "Factory",
    features: [
      "Toiture plate ou inclinée, à partir de 1 000 m²",
      "Étude structurelle et thermique incluse",
      "Autoconsommation avec revente du surplus",
      "Revente totale EDF OA (tarif garanti 20 ans)",
      "Monitoring de production en temps réel",
      "Conformité Décret Tertiaire (-40% en 2030)",
    ],
    benefits: [
      "Réduction de 30 à 50% de la facture d'électricité",
      "Protection contre la hausse des prix de l'énergie",
      "Conformité Décret Tertiaire sans investissement",
      "Amélioration du bilan RSE et reporting extra-financier",
      "Aucune interruption de la production pendant les travaux",
      "Valorisation du patrimoine immobilier",
    ],
    image: "/images/toiture-industrielle.jpg",
    ctaText: "Étude gratuite de ma toiture",
  },
  {
    slug: "ombrieres-parking",
    title: "Ombrières de Parking Photovoltaïques",
    shortTitle: "Ombrières de Parking",
    description:
      "Obligation Loi APER : les parkings de 1 500 m² et plus doivent s'équiper. Échéance juillet 2026 (≥10 000 m²) ou 2028. Amende : jusqu'à 40 000 €/an.",
    longDescription:
      "La Loi APER impose aux parkings extérieurs existants de plus de 1 500 m² de surface au sol de couvrir au moins 50% de leur surface en ombrières photovoltaïques ou en végétalisation. Les parkings de 10 000 m² et plus doivent être conformes avant le 1er juillet 2026. Ceux de 1 500 à 10 000 m² ont jusqu'au 1er juillet 2028. En cas de non-conformité, l'amende atteint 40 000 €/an (20 000 €/an pour les surfaces <10 000 m²). Le tiers-investissement vous permet de vous mettre en conformité sans investir un euro.",
    icon: "Car",
    features: [
      "Structures aluminium ou acier galvanisé",
      "Éclairage LED intégré",
      "Bornes de recharge électrique en option (IRVE)",
      "Conformité Loi APER : seuils de 1 500 et 10 000 m²",
      "Couverture 50% minimum de la surface",
      "Drainage des eaux pluviales intégré",
    ],
    benefits: [
      "Conformité Loi APER sans investissement",
      "Amende évitée : 20 000 à 40 000 €/an",
      "Protection véhicules clients et employés",
      "Service de recharge véhicules électriques",
      "Revenus complémentaires (revente électricité)",
      "Image d'entreprise responsable et moderne",
    ],
    image: "/images/ombriere-parking.jpg",
    ctaText: "Vérifier mes obligations Loi APER",
  },
  {
    slug: "tiers-investissement",
    title: "Le Tiers-Investissement Solaire",
    shortTitle: "Tiers-Investissement",
    description:
      "Un investisseur finance votre installation solaire. Vous bénéficiez de l'électricité ou d'un loyer de toiture. Contrat de 30 ans, maintenance incluse.",
    longDescription:
      "Le tiers-investissement est un modèle de financement dans lequel un investisseur externe prend en charge 100% du coût de l'installation photovoltaïque sur votre bâtiment. Trois formules existent : la location de toiture (vous percevez un loyer annuel), l'abonnement solaire (vous achetez l'électricité produite à un prix inférieur au marché), ou le crédit-bail (avec option d'achat en fin de contrat). La durée typique est de 30 ans. La maintenance, le monitoring et l'assurance sont inclus pendant toute la durée. À l'issue du contrat, vous pouvez récupérer l'installation ou la faire démonter gratuitement.",
    icon: "TrendingUp",
    features: [
      "Aucun investissement initial (0 € à votre charge)",
      "Aucun emprunt nécessaire",
      "3 modèles : location de toiture, abonnement solaire, crédit-bail",
      "Contrat de 30 ans (durée selon le projet)",
      "Maintenance et assurance incluses",
      "Récupération de l'installation en fin de contrat",
    ],
    benefits: [
      "Zéro risque financier, zéro impact sur la trésorerie",
      "Revenus immédiats (loyer) ou économies (autoconso)",
      "Électricité verte à prix fixe (abonnement solaire)",
      "Conformité réglementaire (Loi APER, Décret Tertiaire)",
      "Accompagnement administratif complet",
      "Garantie de performance contractuelle (30 ans panneaux)",
    ],
    image: "/images/tiers-investissement.jpg",
    ctaText: "Comprendre le tiers-investissement",
  },
];
