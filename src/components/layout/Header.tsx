"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronDown } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-white py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src={COMPANY.logo}
              alt={COMPANY.name}
              width={140}
              height={61}
              className="h-10 w-auto group-hover:opacity-80 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              "children" in link && link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted cursor-pointer">
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        dropdownOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-border/50 overflow-hidden transition-all duration-200",
                      dropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    )}
                  >
                    <div className="p-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-foreground hover:text-primary hover:bg-muted rounded-xl transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/simulateur"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-hover transition-all hover:scale-[1.02] shadow-lg shadow-primary/25"
            >
              Simuler mon projet
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 border-2 border-primary text-primary text-sm font-semibold rounded-full hover:bg-primary hover:text-white transition-all"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{COMPANY.phone}</span>
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
              aria-label="Ouvrir le menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className="block w-full h-0.5 bg-foreground rounded-full" />
                <span className="block w-4 h-0.5 bg-foreground rounded-full" />
                <span className="block w-full h-0.5 bg-foreground rounded-full" />
              </div>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Spacer */}
      <div className="h-[72px]" />
    </>
  );
}
