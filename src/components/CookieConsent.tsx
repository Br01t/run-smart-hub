import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie, Settings, X } from "lucide-react";

type CookiePreferences = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "runners_hub_cookie_consent";

const getStoredPreferences = (): CookiePreferences | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const storePreferences = (prefs: CookiePreferences) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = getStoredPreferences();
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = (preferences: CookiePreferences) => {
    storePreferences(preferences);
    setVisible(false);
  };

  const acceptAll = () => accept({ essential: true, analytics: true, marketing: true });
  const rejectAll = () => accept({ essential: true, analytics: false, marketing: false });
  const saveCustom = () => accept(prefs);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] p-4" role="dialog" aria-label="Cookie consent">
      <div className="mx-auto max-w-2xl rounded-xl border border-border bg-background/95 shadow-xl backdrop-blur-md">
        <div className="p-4 sm:p-5">
          {/* Header */}
          <div className="mb-3 flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <Cookie className="h-5 w-5 text-primary" aria-hidden="true" />
              <h2 className="font-display text-sm font-semibold text-foreground sm:text-base">
                We value your privacy
              </h2>
            </div>
            <button onClick={rejectAll} className="rounded-md p-1 text-muted-foreground hover:text-foreground" aria-label="Close">
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="mb-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            We use cookies to enhance your experience, analyze site traffic, and support our affiliate partners.
            You can customize your preferences or accept/reject all.{" "}
            <Link to="/privacy" className="text-primary underline underline-offset-2 hover:text-primary/80">
              Privacy Policy
            </Link>
          </p>

          {/* Details panel */}
          {showDetails && (
            <div className="mb-4 space-y-3 rounded-lg border border-border bg-secondary/30 p-3">
              <label className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium text-foreground sm:text-sm">Essential</span>
                  <p className="text-[11px] text-muted-foreground">Required for basic site functionality</p>
                </div>
                <span className="text-xs text-muted-foreground">Always on</span>
              </label>

              <label className="flex cursor-pointer items-center justify-between">
                <div>
                  <span className="text-xs font-medium text-foreground sm:text-sm">Analytics</span>
                  <p className="text-[11px] text-muted-foreground">Help us understand how visitors use the site</p>
                </div>
                <input
                  type="checkbox"
                  checked={prefs.analytics}
                  onChange={(e) => setPrefs((p) => ({ ...p, analytics: e.target.checked }))}
                  className="h-4 w-4 rounded border-border accent-primary"
                />
              </label>

              <label className="flex cursor-pointer items-center justify-between">
                <div>
                  <span className="text-xs font-medium text-foreground sm:text-sm">Marketing</span>
                  <p className="text-[11px] text-muted-foreground">Used by affiliate partners for referral tracking</p>
                </div>
                <input
                  type="checkbox"
                  checked={prefs.marketing}
                  onChange={(e) => setPrefs((p) => ({ ...p, marketing: e.target.checked }))}
                  className="h-4 w-4 rounded border-border accent-primary"
                />
              </label>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-2">
            <Button onClick={acceptAll} size="sm" className="flex-1 sm:flex-none">
              Accept All
            </Button>
            <Button onClick={rejectAll} variant="outline" size="sm" className="flex-1 sm:flex-none">
              Reject All
            </Button>
            {showDetails ? (
              <Button onClick={saveCustom} variant="secondary" size="sm" className="flex-1 sm:flex-none">
                Save Preferences
              </Button>
            ) : (
              <Button
                onClick={() => setShowDetails(true)}
                variant="ghost"
                size="sm"
                className="flex-1 gap-1 sm:flex-none"
              >
                <Settings className="h-3.5 w-3.5" />
                Customize
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/** Re-open cookie settings (for footer link) */
export const resetCookieConsent = () => {
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
};

export default CookieConsent;
