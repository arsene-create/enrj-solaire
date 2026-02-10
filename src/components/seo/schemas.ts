import { COMPANY } from "@/lib/constants";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    url: COMPANY.website,
    logo: `${COMPANY.website}/logo.png`,
    description: COMPANY.description,
    image: `${COMPANY.website}${COMPANY.logo}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.split(",")[0],
      addressLocality: COMPANY.city,
      postalCode: COMPANY.postalCode,
      addressRegion: COMPANY.region,
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.phone,
      contactType: "customer service",
      areaServed: "FR",
      availableLanguage: "fr",
    },
    knowsAbout: [
      "Tiers-investissement solaire",
      "Panneaux photovoltaïques professionnels",
      "Hangars agricoles solaires",
      "Ombrières de parking",
      "Loi APER",
      "Décret Tertiaire",
    ],
    sameAs: [],
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    description: COMPANY.description,
    url: COMPANY.website,
    image: `${COMPANY.website}${COMPANY.logo}`,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.split(",")[0],
      addressLocality: COMPANY.city,
      postalCode: COMPANY.postalCode,
      addressRegion: COMPANY.region,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.764,
      longitude: 4.8357,
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
    },
    url: service.url,
    areaServed: {
      "@type": "Country",
      name: "France",
    },
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
    },
  };
}
