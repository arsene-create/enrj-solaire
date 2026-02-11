export interface VideoReference {
  id: string;
  title: string;
  description: string;
  type: string;
  src: string;
  thumbnail: string;
}

export const videos: VideoReference[] = [
  {
    id: "corderie-lancelin",
    title: "Corderie Lancelin",
    description:
      "Installation photovoltaïque sur toiture industrielle. Pose des panneaux et raccordement complet.",
    type: "Toiture industrielle",
    src: "/videos/corderie-lancelin.mp4",
    thumbnail: "/videos/thumbs/corderie-lancelin.jpg",
  },
  {
    id: "lenormand-agri",
    title: "Lenormand Fabien",
    description:
      "Hangar agricole équipé en panneaux solaires. Projet en tiers-investissement pour un exploitant agricole.",
    type: "Hangar agricole",
    src: "/videos/lenormand-agri.mp4",
    thumbnail: "/videos/thumbs/lenormand-agri.jpg",
  },
  {
    id: "naga",
    title: "NAGA",
    description:
      "Pose de panneaux photovoltaïques sur site industriel. Chantier complet de l'installation au raccordement.",
    type: "Toiture industrielle",
    src: "/videos/naga.mp4",
    thumbnail: "/videos/thumbs/naga.jpg",
  },
  {
    id: "pose-1blow",
    title: "1blow",
    description:
      "Vidéo complète de la pose des panneaux solaires. Suivi du chantier étape par étape.",
    type: "Toiture industrielle",
    src: "/videos/pose-1blow.mp4",
    thumbnail: "/videos/thumbs/pose-1blow.jpg",
  },
  {
    id: "pose-aft",
    title: "AFT",
    description:
      "Installation photovoltaïque en tiers-investissement. Pose rapide et efficace sur toiture existante.",
    type: "Toiture industrielle",
    src: "/videos/pose-aft.mp4",
    thumbnail: "/videos/thumbs/pose-aft.jpg",
  },
  {
    id: "pose-haas-etiquettes",
    title: "Haas Etiquettes",
    description:
      "Équipement solaire d'un site de production industriel. Intégration en toiture sans interruption d'activité.",
    type: "Toiture industrielle",
    src: "/videos/pose-haas-etiquettes.mp4",
    thumbnail: "/videos/thumbs/pose-haas-etiquettes.jpg",
  },
  {
    id: "pose-repoussage-industrie",
    title: "Repoussage Industrie",
    description:
      "Installation de panneaux sur un bâtiment industriel. Chantier réalisé en tiers-investissement.",
    type: "Toiture industrielle",
    src: "/videos/pose-repoussage-industrie.mp4",
    thumbnail: "/videos/thumbs/pose-repoussage-industrie.jpg",
  },
];
