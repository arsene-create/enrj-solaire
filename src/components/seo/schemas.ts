import { COMPANY } from "@/lib/constants";
import type { FAQItem } from "@/lib/types";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    legalName: "ENR'J",
    url: COMPANY.website,
    logo: `${COMPANY.website}/images/logo-enrj.png`,
    description: COMPANY.description,
    image: `${COMPANY.website}/images/logo-enrj.png`,
    foundingDate: "2019-10-15",
    founder: {
      "@type": "Person",
      name: "Louis Hunsinger",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 20,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "18 Avenue Mac-Mahon",
      addressLocality: COMPANY.city,
      postalCode: COMPANY.postalCode,
      addressRegion: COMPANY.region,
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33184602021",
      contactType: "customer service",
      areaServed: "FR",
      availableLanguage: "French",
    },
    knowsAbout: [
      "Tiers-investissement solaire",
      "Panneaux photovoltaïques professionnels",
      "Hangars agricoles solaires",
      "Ombrières de parking photovoltaïques",
      "Toitures industrielles solaires",
      "Loi APER",
      "Décret Tertiaire",
      "Autoconsommation solaire",
      "Abonnement solaire",
    ],
    sameAs: [],
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${COMPANY.website}/#localbusiness`,
    name: COMPANY.name,
    description: COMPANY.description,
    url: COMPANY.website,
    image: `${COMPANY.website}/images/logo-enrj.png`,
    telephone: "+33184602021",
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "18 Avenue Mac-Mahon",
      addressLocality: COMPANY.city,
      postalCode: COMPANY.postalCode,
      addressRegion: COMPANY.region,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8776,
      longitude: 2.2983,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "€€",
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Solutions solaires professionnelles",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hangar agricole photovoltaïque",
            description:
              "Installation de panneaux solaires sur hangar agricole en tiers-investissement. 0 € d'investissement.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Toiture industrielle solaire",
            description:
              "Panneaux photovoltaïques sur toiture industrielle. Autoconsommation ou revente totale.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ombrière de parking solaire",
            description:
              "Ombrières photovoltaïques pour parkings. Conformité Loi APER, financement inclus.",
          },
        },
      ],
    },
  };
}

export function getServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.website,
    },
    url: service.url,
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    serviceType: "Installation photovoltaïque",
  };
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.website,
      logo: {
        "@type": "ImageObject",
        url: `${COMPANY.website}/images/logo-enrj.png`,
      },
    },
  };
}

export function getFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: COMPANY.website,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${COMPANY.website}${item.url}`,
      })),
    ],
  };
}

export function getVideoSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  contentUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.name,
    description: video.description,
    thumbnailUrl: `${COMPANY.website}${video.thumbnailUrl}`,
    contentUrl: `${COMPANY.website}${video.contentUrl}`,
    uploadDate: "2025-01-01",
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      logo: {
        "@type": "ImageObject",
        url: `${COMPANY.website}/images/logo-enrj.png`,
      },
    },
  };
}
