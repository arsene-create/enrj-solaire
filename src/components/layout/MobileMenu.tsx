"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, Phone, Mail } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [subOpen, setSubOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl transition-transform duration-300 lg:hidden flex flex-col",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Image
            src={COMPANY.logo}
            alt={COMPANY.name}
            width={120}
            height={52}
            className="h-8 w-auto"
          />
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
            aria-label="Fermer le menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {NAV_LINKS.map((link) =>
            "children" in link && link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setSubOpen(!subOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-foreground font-medium rounded-xl hover:bg-muted transition-colors cursor-pointer"
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      subOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-200 ml-4",
                    subOpen ? "max-h-96" : "max-h-0"
                  )}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onClose}
                      className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="block px-4 py-3 text-foreground font-medium rounded-xl hover:bg-muted transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Bottom CTA */}
        <div className="p-4 border-t border-border space-y-3">
          <Link
            href="/simulateur"
            onClick={onClose}
            className="block w-full text-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-hover transition-colors"
          >
            Simuler mon projet
          </Link>
          <div className="flex gap-2">
            <a
              href={COMPANY.phoneHref}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-border rounded-full text-sm text-foreground hover:bg-muted transition-colors"
            >
              <Phone className="w-4 h-4" />
              Appeler
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-border rounded-full text-sm text-foreground hover:bg-muted transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
