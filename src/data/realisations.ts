import type { Realisation } from "@/lib/types";

/**
 * Données basées sur des projets types. Noms anonymisés pour respecter la
 * confidentialité des clients. Les chiffres de production sont des estimations
 * basées sur l'ensoleillement moyen de chaque zone géographique.
 */
export const realisations: Realisation[] = [
  {
    id: "1",
    title: "Hangar céréalier, Beauce",
    description:
      "Toiture photovoltaïque de 1 200 m² sur hangar de stockage de céréales. Revente totale EDF OA à 0,1168 €/kWh (contrat 20 ans). Production estimée : 165 MWh/an.",
    location: "Eure-et-Loir (28)",
    power: "150 kWc",
    type: "Hangar agricole",
    image: "/images/realisation-1.jpg",
    date: "2025-09",
    surface: "1 200 m²",
    productionAnnuelle: "165 MWh/an",
    modele: "Revente totale EDF OA",
    economie: "Loyer de toiture : 3,20 €/m²/an soit 3 840 €/an",
    dureeChantier: "4 semaines",
    co2Evite: "42 tonnes CO2/an",
    details: [
      "Charpente métallique existante renforcée avant pose",
      "Panneaux monocristallins 500 Wc, garantie 30 ans",
      "Raccordement Enedis en injection totale, dossier complet géré par ENR'J",
      "Contrat EDF OA à 0,1168 €/kWh garanti 20 ans",
      "Monitoring de production en temps réel accessible depuis l'application",
      "Maintenance préventive et corrective incluse pendant 30 ans",
      "Aucune interruption de l'activité agricole pendant les travaux",
    ],
    challenge:
      "Charpente ancienne nécessitant un renforcement structurel avant pose. Bureau d'études mandaté pour valider la charge admissible. Renforcement réalisé en 5 jours sans impact sur le stockage.",
    testimonial: {
      quote:
        "Je touche un loyer de toiture chaque année sans avoir investi un centime. L'équipe a géré toutes les démarches administratives, du permis de construire au raccordement Enedis. En 4 semaines, tout était installé et opérationnel.",
      author: "Laurent M.",
      role: "Exploitant céréalier, Eure-et-Loir",
    },
  },
  {
    id: "2",
    title: "Entrepôt logistique, autoconsommation",
    description:
      "Installation de 3 000 m² en autoconsommation avec revente du surplus. Réduction de la facture énergétique de 38% dès la première année. Conforme Décret Tertiaire.",
    location: "Isère (38)",
    power: "420 kWc",
    type: "Toiture industrielle",
    image: "/images/realisation-2.jpg",
    date: "2025-06",
    surface: "3 000 m²",
    productionAnnuelle: "480 MWh/an",
    modele: "Abonnement solaire (autoconsommation + revente surplus)",
    economie: "Réduction de 38% de la facture, soit environ 55 000 €/an d'économies",
    dureeChantier: "6 semaines",
    co2Evite: "120 tonnes CO2/an",
    details: [
      "Toiture plate bac acier, pose en surimposition sans percement",
      "420 kWc en autoconsommation avec revente du surplus à EDF OA",
      "Taux d'autoconsommation de 78% grâce au profil de consommation diurne",
      "Conformité Décret Tertiaire : contribution de -15 points sur l'objectif -40%",
      "Système de monitoring avec alertes en temps réel et rapport mensuel",
      "Onduleurs string SMA avec garantie 10 ans (extension à 20 ans en option)",
      "Travaux réalisés en horaires décalés pour ne pas perturber l'activité logistique",
    ],
    challenge:
      "Toiture plate avec membrane d'étanchéité récente. Système de lestage sélectionné pour éviter tout percement et préserver la garantie d'étanchéité. Étude de vent spécifique réalisée pour dimensionner le lestage.",
    testimonial: {
      quote:
        "Notre facture d'électricité a baissé de 38% dès la première année. Avec la hausse des prix de l'énergie, notre installation nous protège et nous met en conformité avec le Décret Tertiaire. ENR'J a tout pris en charge, on n'a pas investi un euro.",
      author: "Sophie D.",
      role: "Directrice de site, entreprise de logistique, Isère",
    },
  },
  {
    id: "3",
    title: "Ombrières de parking commercial, Loi APER",
    description:
      "8 000 m² d'ombrières sur parking de zone commerciale. Mise en conformité Loi APER anticipée (échéance ≥10 000 m² : juillet 2026). 12 bornes de recharge IRVE intégrées.",
    location: "Rhône (69)",
    power: "950 kWc",
    type: "Ombrière de parking",
    image: "/images/realisation-3.jpg",
    date: "2025-03",
    surface: "8 000 m²",
    productionAnnuelle: "1 100 MWh/an",
    modele: "Revente totale EDF OA + bornes IRVE en autoconsommation",
    economie: "Amende Loi APER évitée : 40 000 €/an + revenus bornes IRVE",
    dureeChantier: "10 semaines",
    co2Evite: "280 tonnes CO2/an",
    details: [
      "8 000 m² d'ombrières en structure aluminium, couverture 55% du parking",
      "950 kWc de panneaux monocristallins bifaciaux (gain de 5 à 10%)",
      "12 bornes de recharge IRVE (24 points de charge) intégrées aux ombrières",
      "Éclairage LED intégré dans les structures, détection de présence",
      "Drainage des eaux pluviales intégré avec récupération vers noues paysagères",
      "Mise en conformité anticipée Loi APER (échéance juillet 2026 pour ≥10 000 m²)",
      "Revente totale à 0,1168 €/kWh sur 20 ans + revenus recharge véhicules électriques",
      "Contrat de maintenance 30 ans incluant les bornes IRVE",
    ],
    challenge:
      "Maintien de l'accès au parking pendant toute la durée du chantier (zone commerciale active). Travaux séquencés par zones avec signalétique temporaire. Aucune fermeture du parking nécessaire.",
    testimonial: {
      quote:
        "On était face à l'obligation Loi APER avec une amende de 40 000 € par an en cas de non-conformité. ENR'J nous a proposé le tiers-investissement : 0 € d'investissement, parking couvert pour nos clients, et des bornes de recharge. Tout le monde y gagne.",
      author: "Marc P.",
      role: "Directeur de centre commercial, Rhône",
    },
  },
  {
    id: "4",
    title: "Bâtiment d'élevage laitier, Savoie",
    description:
      "Rénovation de toiture et pose de 800 m² de panneaux. Location de toiture avec loyer annuel pour l'exploitant. Production estimée : 95 MWh/an.",
    location: "Savoie (73)",
    power: "100 kWc",
    type: "Hangar agricole",
    image: "/images/realisation-4.jpg",
    date: "2025-01",
    surface: "800 m²",
    productionAnnuelle: "95 MWh/an",
    modele: "Location de toiture",
    economie: "Loyer de toiture : 2,80 €/m²/an soit 2 240 €/an + toiture rénovée gratuitement",
    dureeChantier: "5 semaines",
    co2Evite: "24 tonnes CO2/an",
    details: [
      "Remplacement complet de la couverture (fibro-ciment amianté) par bac acier neuf",
      "Désamiantage réalisé par entreprise certifiée, inclus dans le contrat",
      "Pose de 100 kWc en intégration au bâti sur charpente bois renforcée",
      "Loyer de toiture annuel versé à l'exploitant pendant 30 ans",
      "Toiture neuve garantie 20 ans, panneaux garantis 30 ans",
      "Exploitation agricole maintenue pendant toute la durée des travaux",
      "Respect du cadre agrivoltaïsme : couverture inférieure à 40% de la parcelle",
    ],
    challenge:
      "Toiture en fibro-ciment amianté nécessitant un désamiantage complet avant rénovation. ENR'J a coordonné le désamiantage, la pose de la nouvelle couverture et l'installation solaire. L'exploitant a obtenu une toiture neuve sans débourser un euro.",
    testimonial: {
      quote:
        "Ma toiture était en fibro-ciment et il fallait la refaire. ENR'J a tout pris en charge : désamiantage, nouvelle toiture et panneaux solaires. Je n'ai rien payé et je touche un loyer chaque année. En plus ma stabulation est beaucoup mieux isolée maintenant.",
      author: "Jean-Pierre R.",
      role: "Éleveur laitier, Savoie",
    },
  },
  {
    id: "5",
    title: "Usine métallurgique, autoconsommation totale",
    description:
      "2 200 m² de toiture plate équipée en panneaux surimposés. Autoconsommation totale couvrant 45% des besoins du site. Installation réalisée sans arrêt de production.",
    location: "Ain (01)",
    power: "310 kWc",
    type: "Toiture industrielle",
    image: "/images/realisation-5.jpg",
    date: "2024-10",
    surface: "2 200 m²",
    productionAnnuelle: "355 MWh/an",
    modele: "Abonnement solaire (autoconsommation totale)",
    economie: "Réduction de 45% de la consommation réseau, soit environ 42 000 €/an d'économies",
    dureeChantier: "5 semaines",
    co2Evite: "90 tonnes CO2/an",
    details: [
      "Toiture plate bac acier, pose en surimposition avec système de lestage",
      "310 kWc en autoconsommation totale, zéro injection réseau",
      "Profil de consommation industriel adapté : machines tournant en journée",
      "Taux d'autoconsommation de 100% grâce à la consommation de base élevée",
      "Prix du kWh solaire inférieur de 20% au tarif réseau",
      "Monitoring industriel avec intégration au système de gestion énergétique du site",
      "Installation réalisée le week-end et en horaires décalés, zéro arrêt de production",
    ],
    challenge:
      "Site industriel en activité 24h/24 avec contraintes de sécurité strictes (zone ATEX partielle). Plan de prévention spécifique élaboré avec le client. Travaux réalisés exclusivement le week-end et en coordination avec le responsable sécurité.",
    testimonial: {
      quote:
        "Avec la hausse du prix de l'électricité, notre facture avait explosé. L'abonnement solaire nous permet d'acheter notre électricité 20% moins cher qu'au réseau. Et comme notre usine tourne en journée, on consomme tout ce qu'on produit. Aucun investissement de notre part.",
      author: "Frédéric L.",
      role: "Directeur industriel, métallurgie, Ain",
    },
  },
  {
    id: "6",
    title: "Double hangar coopérative agricole",
    description:
      "Deux hangars de 600 m² chacun (1 200 m² total) équipés en revente totale. Revenu complémentaire pour la coopérative. Charpente bois renforcée avant pose.",
    location: "Rhône (69)",
    power: "150 kWc",
    type: "Hangar agricole",
    image: "/images/realisation-6.jpg",
    date: "2024-07",
    surface: "1 200 m² (2 x 600 m²)",
    productionAnnuelle: "172 MWh/an",
    modele: "Revente totale EDF OA",
    economie: "Loyer de toiture : 3 €/m²/an soit 3 600 €/an pour la coopérative",
    dureeChantier: "6 semaines",
    co2Evite: "44 tonnes CO2/an",
    details: [
      "Deux hangars de stockage adjacents, charpente bois traditionnelle",
      "Renforcement de la charpente bois sur les deux bâtiments avant pose",
      "150 kWc en revente totale EDF OA, tarif garanti 20 ans",
      "Installation séquencée : un hangar après l'autre pour maintenir le stockage",
      "Raccordement unique au réseau Enedis pour les deux bâtiments",
      "Loyer de toiture versé à la coopérative, réparti entre les adhérents",
      "Système anti-pigeons installé sous les panneaux (zone rurale)",
    ],
    challenge:
      "Coordination entre deux bâtiments distincts avec un seul point de raccordement. La coopérative avait besoin de conserver l'accès à au moins un hangar pendant les travaux. Installation séquencée en deux phases de 3 semaines.",
    testimonial: {
      quote:
        "Notre coopérative cherchait un revenu complémentaire stable. Le loyer de toiture nous rapporte 3 600 € par an, répartis entre les adhérents. ENR'J a renforcé nos charpentes et installé les panneaux sans perturber nos activités de stockage.",
      author: "Pierre V.",
      role: "Président de coopérative agricole, Rhône",
    },
  },
  {
    id: "7",
    title: "Parking clinique, ombrières + bornes IRVE",
    description:
      "1 800 m² d'ombrières sur parking visiteurs et personnel. 8 bornes de recharge pour véhicules électriques. Autoconsommation partielle pour le bâtiment de la clinique.",
    location: "Loire (42)",
    power: "220 kWc",
    type: "Ombrière de parking",
    image: "/images/realisation-7.jpg",
    date: "2024-04",
    surface: "1 800 m²",
    productionAnnuelle: "250 MWh/an",
    modele: "Abonnement solaire (autoconsommation + bornes IRVE)",
    economie: "Réduction de 25% de la facture électrique + revenus bornes de recharge",
    dureeChantier: "7 semaines",
    co2Evite: "64 tonnes CO2/an",
    details: [
      "1 800 m² d'ombrières en structure acier galvanisé, design adapté au contexte médical",
      "8 bornes de recharge IRVE (16 points de charge) pour visiteurs et personnel",
      "Autoconsommation partielle : 60% pour le bâtiment, 40% pour les bornes",
      "Éclairage LED intégré avec variation automatique jour/nuit",
      "Protection des véhicules patients et personnel contre intempéries et chaleur",
      "Cheminements piétons couverts entre le parking et l'entrée de la clinique",
      "Conformité accessibilité PMR maintenue sur l'ensemble du parking",
      "Contrat incluant la gestion des bornes IRVE et la facturation aux utilisateurs",
    ],
    challenge:
      "Parking de clinique avec flux permanent de visiteurs et ambulances. Travaux réalisés par zones avec maintien de 80% des places disponibles en permanence. Coordination quotidienne avec la direction de la clinique.",
    testimonial: {
      quote:
        "Nos patients et notre personnel apprécient le parking couvert, surtout en été. Les bornes de recharge sont un vrai plus pour notre image. On a réduit notre facture d'électricité de 25% et on n'a pas investi un euro. Le chantier s'est déroulé sans aucune perturbation pour nos patients.",
      author: "Dr. Catherine B.",
      role: "Directrice de clinique, Loire",
    },
  },
  {
    id: "8",
    title: "Usine agroalimentaire, Décret Tertiaire",
    description:
      "3 000 m² de toiture solaire en autoconsommation. Réduction de 35% de la consommation réseau, contribuant à l'objectif Décret Tertiaire (-40% d'ici 2030). Abonnement solaire sur 30 ans.",
    location: "Drôme (26)",
    power: "450 kWc",
    type: "Toiture industrielle",
    image: "/images/realisation-8.jpg",
    date: "2024-01",
    surface: "3 000 m²",
    productionAnnuelle: "540 MWh/an",
    modele: "Abonnement solaire (autoconsommation + revente surplus)",
    economie: "Réduction de 35% de la consommation réseau, soit environ 60 000 €/an d'économies",
    dureeChantier: "8 semaines",
    co2Evite: "138 tonnes CO2/an",
    details: [
      "Toiture industrielle mixte : partie plate et partie inclinée (orientation sud)",
      "450 kWc en autoconsommation avec revente du surplus EDF OA",
      "Taux d'autoconsommation de 82% grâce aux chambres froides et process continu",
      "Contribution Décret Tertiaire : -15 points sur l'objectif de -40% d'ici 2030",
      "Prix du kWh solaire inférieur de 15% au tarif réseau (abonnement solaire)",
      "Intégration au système de gestion technique du bâtiment (GTB)",
      "Mise aux normes électriques incluse dans le contrat",
      "Nettoyage annuel des panneaux inclus (zone agroalimentaire, poussières)",
    ],
    challenge:
      "Usine agroalimentaire soumise au Décret Tertiaire avec objectif de -40% d'ici 2030. Le solaire couvre 15 points de réduction, complété par l'isolation et le relamping LED. Travaux réalisés sans arrêt de la chaîne de production ni des chambres froides.",
    testimonial: {
      quote:
        "Le Décret Tertiaire nous imposait de réduire notre consommation de 40% d'ici 2030. Le solaire nous a permis de couvrir une bonne partie de cet objectif tout en réduisant notre facture de 35%. L'abonnement solaire est simple : on achète notre électricité moins cher qu'au réseau.",
      author: "Thomas G.",
      role: "DAF, usine agroalimentaire, Drôme",
    },
  },
];
