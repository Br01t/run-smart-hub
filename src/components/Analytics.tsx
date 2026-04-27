import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const STORAGE_KEY = "runners_hub_cookie_consent";

type CookiePreferences = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

const getConsent = (): CookiePreferences | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const Analytics = () => {
  const location = useLocation();
  const [consent, setConsent] = useState<CookiePreferences | null>(getConsent());

  useEffect(() => {
    const handleConsentChange = () => {
      setConsent(getConsent());
    };

    window.addEventListener("cookieConsentChanged", handleConsentChange);
    return () => window.removeEventListener("cookieConsentChanged", handleConsentChange);
  }, []);

  useEffect(() => {
    if (!consent) return;

    // 1. Handle Analytics (GA4)
    if (consent.analytics) {
      if (!window.gtag) {
        const script = document.createElement("script");
        script.src = `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`; // Placeholder
        script.async = true;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        window.gtag = function() {
          window.dataLayer.push(arguments);
        };
        window.gtag("js", new Date());
        window.gtag("config", "G-XXXXXXXXXX", {
          page_path: location.pathname,
          anonymize_ip: true // GDPR compliance
        });
      } else {
        window.gtag("config", "G-XXXXXXXXXX", {
          page_path: location.pathname,
        });
      }
    }

    // 2. Handle Marketing (Affiliate Pixels)
    if (consent.marketing) {
      // Logic for Amazon, MyProtein, etc. pixels would go here
      // These are necessary to satisfy affiliate program requirements for conversion tracking
      console.log("Marketing cookies enabled: Affiliate tracking active");
    }
  }, [location, consent]);

  return null;
};

export default Analytics;

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
