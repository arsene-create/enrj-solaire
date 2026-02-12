import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

const solutions = NAV_LINKS.find((l) => l.label === "Nos Solutions")?.children ?? [];

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  { label: "CGV", href: "/cgv" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div>
            <div className="mb-4">
              <Image
                src={COMPANY.logo}
                alt={COMPANY.name}
                width={140}
                height={61}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Tiers-investissement solaire pour agriculteurs, industriels et
              gestionnaires fonciers. 0 € d&apos;investissement initial.
            </p>
            <div className="space-y-2">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                {COMPANY.email}
              </a>
              <p className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                {COMPANY.address}
              </p>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Nos Solutions</h3>
            <ul className="space-y-2.5">
              {solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Ressources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Ressources</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/blog" className="text-sm text-white/70 hover:text-primary transition-colors">
                  Blog solaire professionnel
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-white/70 hover:text-primary transition-colors">
                  FAQ panneau solaire entreprise
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="text-sm text-white/70 hover:text-primary transition-colors">
                  Nos réalisations solaires
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-sm text-white/70 hover:text-primary transition-colors">
                  À propos d&apos;ENR&apos;J
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="text-sm text-white/70 hover:text-primary transition-colors">
                  Notre équipe
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/70 hover:text-primary transition-colors">
                  Contact &amp; devis gratuit
                </Link>
              </li>
              <li>
                <Link
                  href="/simulateur"
                  className="text-sm text-primary hover:text-primary-hover transition-colors font-medium"
                >
                  Simulateur d&apos;éligibilité solaire
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal + Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Informations</h3>
            <ul className="space-y-2.5 mb-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="bg-dark-light rounded-2xl p-4">
              <p className="text-sm font-medium mb-2">Besoin d&apos;un devis ?</p>
              <p className="text-xs text-white/60 mb-3">
                Simulez votre projet en 2 minutes
              </p>
              <Link
                href="/simulateur"
                className="block w-full text-center px-4 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-hover transition-colors"
              >
                Commencer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} {COMPANY.name}. Tous droits réservés.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-white/30">
            <span>SIRET : {COMPANY.siret}</span>
            <span>·</span>
            <span>TVA : {COMPANY.tva}</span>
            <span>·</span>
            <span>Prix Innover et Entreprendre</span>
            <span>·</span>
            <span>Partenaire ESCP Aviron</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
