import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Package, BookOpen, Wrench, BarChart3 } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import RecommendedProducts from "@/components/RecommendedProducts";
import hubsData from "@/data/hubs.json";
import comparisonsData from "@/data/comparisons.json";

interface Hub {
  category: string;
  sport: string;
  title: string;
  description: string;
  intro: string;
  relatedTools: string[];
  relatedGuides: string[];
  tags: string[];
  comparisonSlugs: string[];
}

interface Comparison {
  sport: string;
  obiettivo: string;
  categoria: string;
  intro: string;
  tags: string[];
  faq: { q: string; a: string }[];
}

const toolLabels: Record<string, string> = {
  "/tools/hydration": "Hydration Calculator",
  "/tools/calories": "Calories Calculator",
  "/tools/bmi": "BMI Calculator",
  "/tools/protein": "Protein Calculator",
  "/tools/electrolytes": "Electrolyte Calculator",
};

const guideLabels: Record<string, string> = {
  "choosing-running-shoes": "How to Choose Running Shoes",
  "supplements-for-runners": "Essential Supplements for Runners",
  "muscle-recovery": "Muscle Recovery After Running",
  "running-nutrition": "Running Nutrition: What to Eat Before, During & After",
  "injury-prevention": "Runner's Guide to Injury Prevention",
  "marathon-training": "Marathon Training Guide for Beginners",
  "trail-running-beginners": "Getting Started with Trail Running",
  "running-heart-rate-zones": "Heart Rate Zone Training for Runners",
};

const HubPage = () => {
  const { category, sport } = useParams<{ category: string; sport: string }>();

  const hub = (hubsData as Hub[]).find(
    (h) => h.category === category && h.sport === sport
  );

  if (!hub) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="font-display text-2xl font-bold text-foreground">Hub not found</h1>
          <Link to="/hub" className="mt-4 inline-block text-sm text-primary hover:underline">Browse all hubs</Link>
        </div>
      </Layout>
    );
  }

  const matchedComparisons = (comparisonsData as Comparison[]).filter((c) => {
    const slug = `${c.categoria}-per-${c.sport}-${c.obiettivo}`;
    return hub.comparisonSlugs.includes(slug);
  });

  return (
    <Layout>
      <SEOHead title={hub.title} description={hub.description} path={`/hub/${category}/${sport}`} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: hub.title,
        description: hub.description,
      }} />

      <div className="container mx-auto max-w-4xl px-4 py-8 sm:py-10">
        <Link to="/hub" className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:mb-6">
          <ArrowLeft className="h-4 w-4" /> All Hubs
        </Link>

        <header className="mb-8 sm:mb-10">
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium capitalize text-primary">
            <Package className="h-3.5 w-3.5" /> {hub.category} · {hub.sport}
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">{hub.title}</h1>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed sm:text-base">{hub.intro}</p>
        </header>

        {/* Products */}
        <RecommendedProducts tags={hub.tags} title="Top Products" maxProducts={6} />

        {/* Comparison Links */}
        {matchedComparisons.length > 0 && (
          <section className="mt-8 sm:mt-10">
            <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-foreground sm:text-2xl">
              <BarChart3 className="h-5 w-5 text-primary" /> Detailed Comparisons
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {matchedComparisons.map((c) => {
                const slug = `${c.categoria}-per-${c.sport}-${c.obiettivo}`;
                return (
                  <Link
                    key={slug}
                    to={`/comparison/${slug}`}
                    className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
                  >
                    <div>
                      <h3 className="text-sm font-semibold capitalize text-card-foreground">
                        {c.categoria} for {c.sport} – {c.obiettivo}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-1">{c.intro}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5" />
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Related Tools */}
        {hub.relatedTools.length > 0 && (
          <section className="mt-8 sm:mt-10">
            <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-foreground sm:text-2xl">
              <Wrench className="h-5 w-5 text-primary" /> Related Tools
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {hub.relatedTools.map((tool) => (
                <Link
                  key={tool}
                  to={tool}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Wrench className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-card-foreground">{toolLabels[tool] || tool}</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related Guides */}
        {hub.relatedGuides.length > 0 && (
          <section className="mt-8 sm:mt-10">
            <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-foreground sm:text-2xl">
              <BookOpen className="h-5 w-5 text-primary" /> Related Guides
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {hub.relatedGuides.map((slug) => (
                <Link
                  key={slug}
                  to={`/guides/${slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <BookOpen className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-card-foreground">{guideLabels[slug] || slug}</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default HubPage;
