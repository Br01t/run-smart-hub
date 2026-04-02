import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";

const TermsOfService = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service – RunLab",
    description: "Terms and conditions for using RunLab's website and tools.",
    url: "https://www.runners-hub.org/terms",
  };

  return (
    <Layout>
      <SEOHead
        title="Terms of Service"
        description="Terms and conditions governing the use of RunLab's website, tools, and content."
        path="/terms"
      />
      <JsonLd data={schema} />

      <div className="container mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <h1 className="mb-6 font-display text-xl font-bold text-foreground sm:text-2xl">
          Terms of Service
        </h1>
        <p className="mb-6 text-xs text-muted-foreground">Last updated: April 2, 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing and using RunLab (www.runners-hub.org), you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">2. Description of Service</h2>
            <p>
              RunLab provides free, science-based running tools, calculators, gear reviews, and educational
              content. Our services are designed for informational purposes only and do not constitute
              medical, nutritional, or professional training advice.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">3. Use of Tools & Calculators</h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>All calculator results are estimates based on general scientific formulas.</li>
              <li>Results may vary based on individual factors not accounted for by our tools.</li>
              <li>You should consult a qualified healthcare professional before making changes to your diet, training, or health regimen based on our tools.</li>
              <li>All data entered into our calculators is processed locally in your browser and is not stored on our servers.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">4. Affiliate Links & Product Reviews</h2>
            <p className="mb-2">
              RunLab participates in affiliate marketing programs. This means:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Some links on our site are affiliate links that may earn us a commission if you make a purchase.</li>
              <li>Affiliate relationships do not influence our editorial content or product ratings.</li>
              <li>We clearly disclose affiliate relationships in accordance with FTC guidelines.</li>
              <li>Product availability and prices are subject to change and are determined by the retailer.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">5. Intellectual Property</h2>
            <p>
              All content on RunLab — including text, graphics, logos, images, and software — is the
              property of RunLab and is protected by international copyright laws. You may not reproduce,
              distribute, or create derivative works without our explicit written permission.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">6. User Conduct</h2>
            <p>When using RunLab, you agree not to:</p>
            <ul className="ml-4 list-disc space-y-1 mt-2">
              <li>Use automated systems (bots, scrapers) to access the site without permission.</li>
              <li>Attempt to interfere with the website's functionality or security.</li>
              <li>Reproduce or redistribute our content without authorization.</li>
              <li>Use the site for any unlawful purpose.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">7. Disclaimer of Warranties</h2>
            <p>
              RunLab is provided "as is" and "as available" without warranties of any kind, either express
              or implied. We do not guarantee that the site will be uninterrupted, error-free, or free of
              harmful components. We make no warranties regarding the accuracy or completeness of any
              content or calculator results.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, RunLab shall not be liable for any indirect,
              incidental, special, or consequential damages arising from your use of, or inability to use,
              our website, tools, or content. This includes damages for loss of profits, data, or other
              intangible losses.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">9. Third-Party Links</h2>
            <p>
              Our website contains links to third-party websites and services. We are not responsible for
              the content, privacy practices, or terms of any third-party sites. Visiting these links is
              at your own risk.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">10. Modifications</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective
              immediately upon posting. Your continued use of RunLab after changes constitutes acceptance
              of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the European
              Union and the applicable national laws. Any disputes shall be resolved in the competent
              courts of our registered jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-semibold text-foreground">12. Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us at{" "}
              <span className="text-primary">legal@www.runners-hub.org</span>.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
