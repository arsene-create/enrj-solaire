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
      "Témoignage client : la Corderie Lancelin raconte son expérience avec ENR'J et son projet solaire.",
    type: "Témoignage client",
    src: "/videos/corderie-lancelin.mp4",
    thumbnail: "/videos/thumbs/corderie-lancelin.jpg",
  },
  {
    id: "lenormand-agri",
    title: "Lenormand Fabien - Agriculteur",
    description:
      "Témoignage de Fabien Lenormand, agriculteur. L'agriculture face aux défis de demain et le rôle du solaire.",
    type: "Témoignage agriculteur",
    src: "/videos/lenormand-agri.mp4",
    thumbnail: "/videos/thumbs/lenormand-agri.jpg",
  },
  {
    id: "naga",
    title: "NAGA - Estelle Matton",
    description:
      "Estelle Matton, dirigeante de la société NAGA, témoigne de son projet solaire avec ENR'J.",
    type: "Témoignage client",
    src: "/videos/naga.mp4",
    thumbnail: "/videos/thumbs/naga.jpg",
  },
  {
    id: "pose-1blow",
    title: "1blow - Autoconsommation",
    description:
      "Focus sur l'autoconsommation : comment 1blow a réduit sa facture énergétique grâce au solaire.",
    type: "Autoconsommation",
    src: "/videos/pose-1blow.mp4",
    thumbnail: "/videos/thumbs/pose-1blow.jpg",
  },
  {
    id: "pose-aft",
    title: "AFT - Aspach-Michelbach",
    description:
      "Projet solaire ENR'J à Aspach-Michelbach en Alsace. Retour d'expérience du client AFT.",
    type: "Témoignage client",
    src: "/videos/pose-aft.mp4",
    thumbnail: "/videos/thumbs/pose-aft.jpg",
  },
  {
    id: "pose-haas-etiquettes",
    title: "Les Étiquettes Haas",
    description:
      "Témoignage des Étiquettes Haas : installation de panneaux solaires sur leur site de production.",
    type: "Témoignage client",
    src: "/videos/pose-haas-etiquettes.mp4",
    thumbnail: "/videos/thumbs/pose-haas-etiquettes.jpg",
  },
  {
    id: "pose-repoussage-industrie",
    title: "Repoussage et Industrie",
    description:
      "Ep.1 : Nos clients. Témoignage d'un ingénieur de Repoussage et Industrie sur son projet ENR'J.",
    type: "Témoignage client",
    src: "/videos/pose-repoussage-industrie.mp4",
    thumbnail: "/videos/thumbs/pose-repoussage-industrie.jpg",
  },
];
