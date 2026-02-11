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
      "Le dirigeant de la Corderie Lancelin témoigne depuis son entrepôt sur son expérience avec ENR'J.",
    type: "Témoignage client",
    src: "/videos/corderie-lancelin.mp4",
    thumbnail: "/videos/thumbs/corderie-lancelin.jpg",
  },
  {
    id: "lenormand-agri",
    title: "Lenormand Fabien - Éleveur",
    description:
      "Fabien Lenormand, éleveur de 80 vaches, témoigne sur le solaire au service de l'agriculture.",
    type: "Témoignage agriculteur",
    src: "/videos/lenormand-agri.mp4",
    thumbnail: "/videos/thumbs/lenormand-agri.jpg",
  },
  {
    id: "naga",
    title: "NAGA - Estelle Matton",
    description:
      "Visite des locaux de NAGA avec Estelle Matton, dirigeante. Réception des matières premières et projet solaire.",
    type: "Témoignage client",
    src: "/videos/naga.mp4",
    thumbnail: "/videos/thumbs/naga.jpg",
  },
  {
    id: "pose-1blow",
    title: "1blow",
    description:
      "Le dirigeant de 1blow explique ce qui l'a poussé à poser des panneaux photovoltaïques sur son site industriel.",
    type: "Témoignage client",
    src: "/videos/pose-1blow.mp4",
    thumbnail: "/videos/thumbs/pose-1blow.jpg",
  },
  {
    id: "pose-aft",
    title: "AFT Industry",
    description:
      "AFT Industry, spécialiste en tuyauterie, témoigne sur son installation solaire à Aspach-Michelbach.",
    type: "Témoignage client",
    src: "/videos/pose-aft.mp4",
    thumbnail: "/videos/thumbs/pose-aft.jpg",
  },
  {
    id: "pose-haas-etiquettes",
    title: "Les Étiquettes Haas",
    description:
      "Le directeur des Étiquettes Haas témoigne devant son usine sur les avantages du solaire avec ENR'J.",
    type: "Témoignage client",
    src: "/videos/pose-haas-etiquettes.mp4",
    thumbnail: "/videos/thumbs/pose-haas-etiquettes.jpg",
  },
  {
    id: "pose-repoussage-industrie",
    title: "Repoussage et Industrie",
    description:
      "Le dirigeant de Repoussage et Industrie parle de l'avantage de produire sa propre énergie.",
    type: "Témoignage client",
    src: "/videos/pose-repoussage-industrie.mp4",
    thumbnail: "/videos/thumbs/pose-repoussage-industrie.jpg",
  },
];
