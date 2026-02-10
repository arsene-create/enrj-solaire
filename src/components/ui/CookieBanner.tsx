"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function refuse() {
    localStorage.setItem("cookie-consent", "refused");
    setVisible(false);
    // Disable GA if it was loaded
    if (typeof window !== "undefined") {
      (window as unknown as Record<string, unknown>)[`ga-disable-${process.env.NEXT_PUBLIC_GA_ID}`] = true;
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto bg-dark text-white rounded-2xl p-6 shadow-2xl border border-white/10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm font-medium mb-1">
              Ce site utilise des cookies
            </p>
            <p className="text-xs text-white/60">
              Nous utilisons des cookies analytiques (Google Analytics) pour mesurer
              la fréquentation de notre site. Ces cookies sont soumis à votre
              consentement. Les cookies nécessaires au fonctionnement du site sont
              toujours actifs.{" "}
              <a
                href="/politique-confidentialite"
                className="underline hover:text-white/80"
              >
                En savoir plus
              </a>
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={refuse}
              className="px-4 py-2 text-sm font-medium border border-white/20 rounded-full hover:bg-white/10 transition-colors"
            >
              Refuser
            </button>
            <button
              onClick={accept}
              className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-full hover:bg-primary-hover transition-colors"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
