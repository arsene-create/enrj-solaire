import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import JsonLd from "@/components/seo/JsonLd";
import { getOrganizationSchema } from "@/components/seo/schemas";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.enrj-solaire.fr"),
  title: {
    default: "ENR-J Solaire | Panneaux Solaires Professionnels : 0€ d'Investissement",
    template: "%s | ENR-J Solaire",
  },
  description:
    "Panneaux solaires pour professionnels en tiers-investissement. Installation financée à 100%, maintenance incluse. Loi APER, Décret Tertiaire.",
  keywords:
    "panneau solaire professionnel, photovoltaïque entreprise, hangar agricole solaire, ombrière parking, tiers investissement solaire, Loi APER, Décret Tertiaire",
  openGraph: {
    title: "ENR-J Solaire | Votre toiture produit de l'énergie. Sans investir un euro.",
    description:
      "Nous finançons et installons vos panneaux solaires. Loyer de toiture ou autoconsommation. Maintenance incluse 30 ans.",
    type: "website",
    locale: "fr_FR",
    siteName: "ENR-J Solaire",
    url: "https://www.enrj-solaire.fr",
  },
  twitter: {
    card: "summary_large_image",
    title: "ENR-J Solaire | Panneaux Solaires Professionnels",
    description:
      "Tiers-investissement solaire pour professionnels. 0€ d'investissement, maintenance incluse.",
  },
  other: {
    "theme-color": "#93C191",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://www.enrj-solaire.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        <GoogleAnalytics />
        <JsonLd data={getOrganizationSchema()} />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
