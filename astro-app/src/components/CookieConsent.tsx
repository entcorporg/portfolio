import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
      setTimeout(() => setIsVisible(true), 100);
    } else if (consent === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  const loadGoogleAnalytics = () => {
    const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID;
    if (!GA_MEASUREMENT_ID) return;

    // Charger le script GA4
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialiser GA4
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer?.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      anonymize_ip: true,
      cookie_flags: "SameSite=None;Secure",
    });
  };

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    loadGoogleAnalytics();
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  if (!showBanner) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-lg border border-border bg-background/95 p-4 shadow-lg backdrop-blur supports-backdrop-filter:bg-background/80 md:p-6">
          <button
            onClick={handleDecline}
            className="absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Fermer"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex-1 space-y-2 pr-8 md:pr-0">
              <h3 className="text-sm font-semibold">Gestion des cookies</h3>
              <p className="text-xs text-muted-foreground md:text-sm">
                Nous utilisons des cookies pour analyser le trafic et améliorer
                votre expérience. Les données sont anonymisées et conformes au
                RGPD. Vous pouvez accepter ou refuser.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <button
                onClick={handleDecline}
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Refuser
              </button>
              <button
                onClick={handleAccept}
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
