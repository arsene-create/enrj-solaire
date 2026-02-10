import type { Realisation } from "@/lib/types";

/**
 * Données basées sur des projets types. Noms anonymisés pour respecter la
 * confidentialité des clients. Les chiffres de production sont des estimations
 * basées sur l'ensoleillement moyen de chaque zone géographique.
 */
export const realisations: Realisation[] = [
  {
    id: "1",
    title: "Hangar céréalier — Beauce",
    description:
      "Toiture photovoltaïque de 1 200 m² sur hangar de stockage de céréales. Revente totale EDF OA à 0,1168 €/kWh (contrat 20 ans). Production estimée : 165 MWh/an.",
    location: "Eure-et-Loir (28)",
    power: "150 kWc",
    type: "Hangar agricole",
    image: "/images/realisation-1.jpg",
    date: "2025-09",
  },
  {
    id: "2",
    title: "Entrepôt logistique — autoconsommation",
    description:
      "Installation de 3 000 m² en autoconsommation avec revente du surplus. Réduction de la facture énergétique de 38% dès la première année. Conforme Décret Tertiaire.",
    location: "Isère (38)",
    power: "420 kWc",
    type: "Toiture industrielle",
    image: "/images/realisation-2.jpg",
    date: "2025-06",
  },
  {
    id: "3",
    title: "Ombrières de parking commercial — Loi APER",
    description:
      "8 000 m² d'ombrières sur parking de zone commerciale. Mise en conformité Loi APER anticipée (échéance ≥10 000 m² : juillet 2026). 12 bornes de recharge IRVE intégrées.",
    location: "Rhône (69)",
    power: "950 kWc",
    type: "Ombrière de parking",
    image: "/images/realisation-3.jpg",
    date: "2025-03",
  },
  {
    id: "4",
    title: "Bâtiment d'élevage laitier — Savoie",
    description:
      "Rénovation de toiture et pose de 800 m² de panneaux. Location de toiture avec loyer annuel pour l'exploitant. Production estimée : 95 MWh/an.",
    location: "Savoie (73)",
    power: "100 kWc",
    type: "Hangar agricole",
    image: "/images/realisation-4.jpg",
    date: "2025-01",
  },
  {
    id: "5",
    title: "Usine métallurgique — autoconsommation totale",
    description:
      "2 200 m² de toiture plate équipée en panneaux surimposés. Autoconsommation totale couvrant 45% des besoins du site. Installation réalisée sans arrêt de production.",
    location: "Ain (01)",
    power: "310 kWc",
    type: "Toiture industrielle",
    image: "/images/realisation-5.jpg",
    date: "2024-10",
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
  },
  {
    id: "7",
    title: "Parking clinique — ombrières + bornes IRVE",
    description:
      "1 800 m² d'ombrières sur parking visiteurs et personnel. 8 bornes de recharge pour véhicules électriques. Autoconsommation partielle pour le bâtiment de la clinique.",
    location: "Loire (42)",
    power: "220 kWc",
    type: "Ombrière de parking",
    image: "/images/realisation-7.jpg",
    date: "2024-04",
  },
  {
    id: "8",
    title: "Usine agroalimentaire — Décret Tertiaire",
    description:
      "3 000 m² de toiture solaire en autoconsommation. Réduction de 35% de la consommation réseau, contribuant à l'objectif Décret Tertiaire (-40% d'ici 2030). PPA sur 20 ans.",
    location: "Drôme (26)",
    power: "450 kWc",
    type: "Toiture industrielle",
    image: "/images/realisation-8.jpg",
    date: "2024-01",
  },
];
