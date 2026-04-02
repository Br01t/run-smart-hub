import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";

const PrivacyPolicy = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy – RunLab",
    description: "How RunLab collects, uses, and protects your personal data.",
    url: "https://www.runners-hub.org/privacy",
  };

  return (
    <Layout>
      <SEOHead
        title="Privacy Policy"
        description="How RunLab collects, uses, and protects your personal data under GDPR and international privacy regulations."
        path="/privacy"
      />
      <JsonLd data={schema} />

      <div className="container mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <h1 className="mb-6 font-display text-xl font-bold text-foreground sm:text-2xl">
          Privacy Policy
        </h1>
        <p className="mb-6 text-xs text-muted-foreground">Last updated: April 2, 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">1. Who We Are</h2>
            <p>
              RunLab ("we", "us", "our") operates the website www.runners-hub.org. We are committed to protecting
              your privacy and handling your personal data transparently. For any privacy-related inquiries,
              contact us at <span className="text-primary">privacy@www.runners-hub.org</span>.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">2. Data We Collect</h2>
            <p className="mb-2">We may collect the following categories of data:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li><strong>Usage data:</strong> Pages visited, time on site, referral source, browser type, and device information collected via analytics cookies.</li>
              <li><strong>Calculator inputs:</strong> Data you enter into our tools (weight, height, age, etc.) is processed locally in your browser and never transmitted to our servers.</li>
              <li><strong>Contact data:</strong> If you email us, we store your email address and message content to respond to your inquiry.</li>
              <li><strong>Cookie preferences:</strong> Your consent choices are stored locally on your device.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">3. How We Use Your Data</h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>To improve our website content and user experience through aggregated analytics.</li>
              <li>To respond to your inquiries and provide support.</li>
              <li>To display relevant affiliate product recommendations.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">4. Cookies & Tracking</h2>
            <p className="mb-2">We use the following types of cookies:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li><strong>Essential cookies:</strong> Required for the website to function properly (e.g., cookie consent preferences). These cannot be disabled.</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our site (e.g., Google Analytics). These are only activated with your consent.</li>
              <li><strong>Marketing cookies:</strong> Used by our affiliate partners to track referrals. These are only activated with your consent.</li>
            </ul>
            <p className="mt-2">You can manage your cookie preferences at any time using the cookie settings button in the footer.</p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">5. Legal Basis for Processing (GDPR)</h2>
            <ul className="ml-4 list-disc space-y-1">
              <li><strong>Consent:</strong> For analytics and marketing cookies, collected via our cookie banner.</li>
              <li><strong>Legitimate interest:</strong> For website security and basic functionality.</li>
              <li><strong>Contractual necessity:</strong> To respond to your inquiries when you contact us.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">6. Your Rights</h2>
            <p className="mb-2">Under GDPR and applicable privacy laws, you have the right to:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Withdraw consent at any time.</li>
              <li>Object to data processing based on legitimate interest.</li>
              <li>Request data portability.</li>
              <li>Lodge a complaint with your local data protection authority.</li>
            </ul>
            <p className="mt-2">To exercise any of these rights, email us at <span className="text-primary">privacy@www.runners-hub.org</span>.</p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">7. Third-Party Services</h2>
            <p>We may share data with the following third-party services, only with your consent where required:</p>
            <ul className="ml-4 list-disc space-y-1 mt-2">
              <li><strong>Google Analytics:</strong> Website analytics (anonymized IP).</li>
              <li><strong>Affiliate networks:</strong> Product referral tracking (e.g., Amazon Associates).</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">8. Data Retention</h2>
            <p>We retain personal data only as long as necessary for the purposes described above. Analytics data is retained for up to 26 months. Contact data is retained for up to 2 years after your last interaction.</p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">9. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your data, including encryption in transit (HTTPS) and secure hosting infrastructure.</p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date. We encourage you to review this page regularly.</p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
