import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { FlaskConical, ShieldCheck, BarChart3, Heart } from "lucide-react";

const Metodo = () => {
  return (
    <Layout>
      <SEOHead title="Our Method" description="Full transparency on how RunLab works and why you can trust our tools." path="/method" />
      <div className="container mx-auto max-w-3xl px-4 py-8 sm:py-12">
        <h1 className="mb-2 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
          Our Method
        </h1>
        <p className="mb-8 text-base text-muted-foreground sm:mb-10 sm:text-lg">
          Full transparency on how RunLab works and why you can trust our tools.
        </p>

        <div className="space-y-6 sm:space-y-8">
          <div className="flex gap-3 sm:gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <FlaskConical className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-base font-semibold text-foreground sm:text-lg">Scientific Sources</h2>
              <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                All calculators are based on formulas validated by scientific literature: MET coefficients for calories,
                ISSN guidelines for protein, average sweat rates for electrolytes.
              </p>
            </div>
          </div>

          <div className="flex gap-3 sm:gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-base font-semibold text-foreground sm:text-lg">No Sponsorships</h2>
              <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                We don't receive payments from brands to promote specific products. Recommended products are automatically
                filtered based on calculator results, not commercial agreements.
              </p>
            </div>
          </div>

          <div className="flex gap-3 sm:gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-base font-semibold text-foreground sm:text-lg">Transparent Monetization</h2>
              <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                RunLab is sustained through affiliate links (Amazon, Decathlon, Top4Running, WeightWorld).
                When you buy through our links, we receive a small commission at no extra cost to you.
              </p>
            </div>
          </div>

          <div className="flex gap-3 sm:gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Heart className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-base font-semibold text-foreground sm:text-lg">Utility-First</h2>
              <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                We're not a blog. Every page is a practical tool that solves a real problem.
                Our goal is to give you answers, not keep you reading for minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Metodo;
