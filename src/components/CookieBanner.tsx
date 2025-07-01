import { useState, useEffect } from "react";

declare global {
  interface Window {
    gtag: (
      command: "consent",
      action: "default" | "update",
      params: {
        ad_storage?: "granted" | "denied";
        analytics_storage?: "granted" | "denied";
      }
    ) => void;
  }
}

const updateConsent = (consent: {
  analytics?: boolean;
  marketing?: boolean;
}) => {
  window.gtag("consent", "update", {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.marketing ? "granted" : "denied",
  });
};

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [consent, setConsent] = useState({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consentState = localStorage.getItem("cookie_consent");
    if (!consentState) {
      setShowBanner(true);
    } else {
      const parsedConsent = JSON.parse(consentState);
      setConsent(parsedConsent);
    }
  }, []);

  const handleAcceptAll = () => {
    const newConsent = { analytics: true, marketing: true };
    setConsent(newConsent);
    localStorage.setItem("cookie_consent", JSON.stringify(newConsent));
    updateConsent(newConsent);
    setShowBanner(false);
  };

  const handleDeclineAll = () => {
    const newConsent = { analytics: false, marketing: false };
    setConsent(newConsent);
    localStorage.setItem("cookie_consent", JSON.stringify(newConsent));
    updateConsent(newConsent);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie_consent", JSON.stringify(consent));
    updateConsent(consent);
    setShowBanner(false);
  };

  const togglePreferences = () => {
    setShowPreferences(!showPreferences);
  };

  const handleCheckboxChange = (type: "analytics" | "marketing") => {
    setConsent((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-content">
        <p>
          We use cookies to improve your experience. Please select your
          preferences.{" "}
          <a href="/cookie-policy" target="_blank" rel="noopener noreferrer">
            Cookie Policy
          </a>
        </p>
        {showPreferences && (
          <div className="cookie-preferences">
            <label>
              <input
                type="checkbox"
                checked={consent.analytics}
                onChange={() => handleCheckboxChange("analytics")}
              />
              Analytics
            </label>
            <label>
              <input
                type="checkbox"
                checked={consent.marketing}
                onChange={() => handleCheckboxChange("marketing")}
              />
              Marketing
            </label>
          </div>
        )}
      </div>
      <div className="cookie-banner-actions">
        <button onClick={handleAcceptAll}>Accept All</button>
        <button onClick={handleDeclineAll}>Decline All</button>
        <button onClick={togglePreferences}>
          {showPreferences ? "Hide" : "Manage"} Preferences
        </button>
        {showPreferences && (
          <button onClick={handleSavePreferences}>Save Preferences</button>
        )}
      </div>
    </div>
  );
};
