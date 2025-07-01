const CookiePolicy = () => {
  return (
    <div className="cookie-policy">
      <a href="/" className="cookie-policy__back">
        Go Back
      </a>
      <h1>Cookie Policy Cedra.network</h1>
      <p>
        <em>Last updated: 1 July 2025</em>
      </p>

      <h2>1. Introduction</h2>
      <p>
        At cedra.network ("we", "our", "Cedra"), we use cookies and similar
        technologies to enhance your experience, ensure security, and
        personalize your interaction with our landing page and blockchain
        services. This document explains what cookies are, why we use them, and
        how you can manage your preferences.
      </p>

      <h2>2. What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a
        website. They allow the site to remember your settings, preferences, and
        other actions between visits.
      </p>

      <h2>3. Why do we use cookies?</h2>
      <p>We use cookies for the following purposes:</p>
      <ul>
        <li>
          <strong>Strictly necessary</strong> – These are essential for the
          basic functionality of the site, such as banner handling, navigation,
          form submissions, and login. The website may not function properly
          without them.
        </li>
        <li>
          <strong>Analytics</strong> – These collect aggregated data (via Google
          Analytics or similar) on visits, session time, and most viewed pages.
          They help us improve the website and service quality.
        </li>
        <li>
          <strong>Functional</strong> – These remember your preferences
          (language, region, display settings) to provide a more convenient
          experience.
        </li>
        <li>
          <strong>Marketing</strong> – These are used only with your consent
          (e.g., for retargeting or personalized advertising, if such
          functionality is introduced in the future).
        </li>
      </ul>

      <h2>4. Third-party cookies</h2>
      <p>
        We may allow third-party services (e.g., Google Analytics, advertising
        and analytics platforms) to place cookies on your device. These services
        act as independent data controllers.
      </p>

      <h2>5. How to give or withdraw consent</h2>
      <p>
        When you visit our site, a banner is displayed giving you the option to
        accept or decline cookies. You can always change your preferences:
      </p>
      <ul>
        <li>
          <strong>Accept all</strong> – Enables all cookie categories.
        </li>
        <li>
          <strong>Customize</strong> – Choose which types of cookies (analytics,
          functional, marketing) to enable or disable.
        </li>
        <li>
          <strong>Decline</strong> – Only strictly necessary cookies will be
          enabled.
        </li>
      </ul>
      <p>
        Your preferences take effect immediately and are stored via cookie
        management.
      </p>

      <h2>6. Managing cookies in your browser</h2>
      <p>
        You can change or delete cookies through your browser settings. Useful
        links:
      </p>
      <ul>
        <li>
          Chrome:{" "}
          <a
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
            rel="noopener noreferrer"
          >
            support.google.com/chrome/answer/95647
          </a>
        </li>
        <li>
          Firefox:{" "}
          <a
            href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
            target="_blank"
            rel="noopener noreferrer"
          >
            support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
          </a>
        </li>
        <li>
          Safari:{" "}
          <a
            href="https://support.apple.com/kb/PH17191"
            target="_blank"
            rel="noopener noreferrer"
          >
            support.apple.com/kb/PH17191
          </a>
        </li>
        <li>
          Edge/IE:{" "}
          <a
            href="https://support.microsoft.com/help/17442/windows-internet-explorer-delete-manage-cookies"
            target="_blank"
            rel="noopener noreferrer"
          >
            support.microsoft.com/help/17442/windows-internet-explorer-delete-manage-cookies
          </a>
        </li>
      </ul>

      <h2>7. Cookie security policy</h2>
      <p>To protect user data, we apply the following measures:</p>
      <ul>
        <li>
          We set Secure (HTTPS only) and HttpOnly flags to prevent access to
          cookies via scripts.
        </li>
        <li>We apply the SameSite=Lax attribute to mitigate CSRF attacks.</li>
        <li>We regularly audit and remove outdated cookies.</li>
      </ul>

      <h2>8. Policy updates</h2>
      <p>
        This Cookie Policy may be updated in accordance with legal changes or
        the introduction of new cookies. All updates will be dated and reflected
        in the cookie banner.
      </p>

      <h2>Note</h2>
      <p>
        Access to our website is not conditioned on accepting marketing cookies
        – declining them will not limit the core functionality of the service.
      </p>
    </div>
  );
};

export default CookiePolicy;
