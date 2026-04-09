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
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">Affiliate Partnerships</h2>
            <p>
              Some of the links on Runners Hub point to products sold by third-party retailers and brands. We partner with selected companies in the running, fitness, and sports nutrition space through their affiliate programs. When you click on these links and make a purchase, we may receive a small referral commission.
            </p>
            <p className="mt-3">
              These partnerships help us cover the costs of running this website — including hosting, research, and content creation — while keeping everything free for you.
            </p>
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
