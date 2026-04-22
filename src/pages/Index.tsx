import { Link } from "react-router-dom";
import { ArrowRight, Compass } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ZoneRunBanner from "@/components/ZoneRunBanner";

// Refactored Sections
import HomeHero from "@/components/home/HomeHero";
import ToolGrid from "@/components/home/ToolGrid";
import FeatureBanners from "@/components/home/FeatureBanners";
import GearHubLinks from "@/components/home/GearHubLinks";
import TrustSection from "@/components/home/TrustSection";
import HomeFAQ, { faqItems } from "@/components/home/HomeFAQ";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Best Running Tools & Shoe Finder 2026"
        description="Optimize your performance with science-based running calculators for hydration, nutrition, and recovery. Find the best running shoes and gear with our expert guides."
        path="/"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://www.runners-hub.org/#website",
              "url": "https://www.runners-hub.org",
              "name": "Runners Hub",
              "description": "Science-backed tools and gear recommendations for runners.",
              "publisher": { "@id": "https://www.runners-hub.org/#organization" }
            },
            {
              "@type": "Organization",
              "@id": "https://www.runners-hub.org/#organization",
              "name": "Runners Hub",
              "url": "https://www.runners-hub.org",
              "logo": { "@type": "ImageObject", "url": "https://www.runners-hub.org/favicon.ico" },
              "description": "Runners Hub provides evidence-based calculators and unbiased gear reviews for runners of all levels."
            },
            {
              "@type": "FAQPage",
              "mainEntity": faqItems.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": { "@type": "Answer", "text": faq.a }
              }))
            }
          ]
        }}
      />

      <HomeHero />

      <ToolGrid />

      <FeatureBanners />

      <GearHubLinks />

      <TrustSection />

      {/* Affiliate Disclosure */}
      <section className="border-t border-border bg-muted/30 px-4 py-6">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-xs leading-relaxed text-muted-foreground">
            <strong className="text-foreground/70">Affiliate Disclosure:</strong> Runners Hub is supported by its audience. When you purchase through links on our site, we may earn an affiliate commission. This helps us keep our tools free and independent. Our recommendations are always based on science and performance data, never on sponsorship.
          </p>
        </div>
      </section>

      <HomeFAQ />

      {/* Final CTA */}
      <section className="bg-gradient-hero relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 texture-noise" />
        <div className="relative container mx-auto px-4 py-16 text-center sm:py-20">
          <Compass className="mx-auto mb-4 h-7 w-7 text-primary-foreground/60" />
          <h2 className="font-display text-display-md font-bold text-primary-foreground">Ready to run smarter?</h2>
          <p className="mx-auto mt-3 max-w-md text-primary-foreground/70">
            Start with any tool, take the quiz, or browse our product hubs — everything is free, no account required.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 text-sm font-bold text-foreground transition-all hover:shadow-float"
            >
              All Tools <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/quiz"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/25 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Take the Quiz
            </Link>
          </div>
        </div>
      </section>

      <ZoneRunBanner variant="fullwidth" />
    </Layout>
  );
};

export default Index;
