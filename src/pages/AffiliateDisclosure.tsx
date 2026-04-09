import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const AffiliateDisclosure = () => {
  return (
    <Layout>
      <SEOHead
        title="Affiliate Disclosure"
        description="Full transparency on how Runners Hub earns revenue through affiliate partnerships with Amazon, Myprotein, and Onnit."
        path="/affiliate-disclosure"
      />

      <section className="bg-gradient-hero py-14 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Affiliate Disclosure
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-primary-foreground/80">
            Full transparency on how we fund this project
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <div className="space-y-8 text-muted-foreground leading-relaxed">

          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">How We Earn Revenue</h2>
            <p>
              Runners Hub is a free resource. To keep it that way, we participate in affiliate marketing programs. This means that when you click on certain product links on our site and make a purchase, we may earn a small commission — <strong>at no additional cost to you</strong>.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">Our Affiliate Partners</h2>
            <p className="mb-4">We currently participate in the following affiliate programs:</p>
            <ul className="space-y-4">
              <li className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-display text-base font-semibold text-foreground mb-1">Amazon Associates (Amazon.it)</h3>
                <p className="text-sm">
                  Runners Hub is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.it. As an Amazon Associate, we earn from qualifying purchases.
                </p>
              </li>
              <li className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-display text-base font-semibold text-foreground mb-1">Myprotein</h3>
                <p className="text-sm">
                  We are an affiliate partner of Myprotein, the world's leading sports nutrition brand. Links to Myprotein products may generate a commission for Runners Hub when a purchase is made.
                </p>
              </li>
              <li className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-display text-base font-semibold text-foreground mb-1">Onnit</h3>
                <p className="text-sm">
                  We participate in the Onnit affiliate program. Links to Onnit supplements and performance products may earn us a referral fee when you make a purchase.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">Editorial Independence</h2>
            <p>
              Our affiliate partnerships <strong>never influence our editorial content</strong>. Every product review, comparison, and recommendation is based on independent research, real-world testing, and sports science evidence. We only recommend products we genuinely believe will benefit runners.
            </p>
            <p className="mt-3">
              If a product doesn't meet our quality standards, we won't feature it — regardless of the potential commission. Our reputation depends on your trust.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">How to Identify Affiliate Links</h2>
            <p>
              All affiliate links on Runners Hub are marked with the <code className="rounded bg-secondary px-1.5 py-0.5 text-xs font-mono">rel="sponsored"</code> attribute in the HTML. Product cards with a "Shop Now" button link to affiliate partner websites. We also include a note at the bottom of product recommendation sections.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">Your Support Matters</h2>
            <p>
              By purchasing through our links, you directly support the time and effort that goes into creating free tools, writing in-depth guides, and maintaining this platform. Thank you for helping us keep Runners Hub free and independent.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-secondary/30 p-6">
            <p className="text-sm">
              For questions about our affiliate relationships, please contact us at{" "}
              <a href="mailto:info@runners-hub.org" className="text-primary hover:underline font-medium">info@runners-hub.org</a>.
              You can also read our{" "}
              <Link to="/disclaimer" className="text-primary hover:underline font-medium">Disclaimer</Link>,{" "}
              <Link to="/privacy" className="text-primary hover:underline font-medium">Privacy Policy</Link>, and{" "}
              <Link to="/method" className="text-primary hover:underline font-medium">Our Method</Link>{" "}
              for more information about how we operate.
            </p>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default AffiliateDisclosure;
