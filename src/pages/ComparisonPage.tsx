import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, HelpCircle, Wrench, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import RecommendedProducts from "@/components/RecommendedProducts";
import ZoneRunBanner from "@/components/ZoneRunBanner";
import { translateCategory, translateSport, translateGoal } from "@/lib/translations";
import comparisonsData from "@/data/comparisons.json";
import productsData from "@/data/products.json";
import hubsData from "@/data/hubs.json";

interface Comparison {
  sport: string;
  obiettivo: string;
  categoria: string;
  intro: string;
  tags: string[];
  faq: { q: string; a: string }[];
}

const toolSuggestions: Record<string, { to: string; label: string }[]> = {
  performance: [
    { to: "/tools/calories", label: "Calories Calculator" },
    { to: "/tools/electrolytes", label: "Electrolyte Calculator" },
  ],
  recupero: [
    { to: "/tools/protein", label: "Protein Calculator" },
    { to: "/tools/hydration", label: "Hydration Calculator" },
  ],
  idratazione: [
    { to: "/tools/hydration", label: "Hydration Calculator" },
    { to: "/tools/electrolytes", label: "Electrolyte Calculator" },
  ],
  dimagrimento: [
    { to: "/tools/calories", label: "Calories Calculator" },
    { to: "/tools/bmi", label: "BMI Calculator" },
  ],
  "prevenzione-infortuni": [
    { to: "/tools/bmi", label: "BMI Calculator" },
    { to: "/tools/protein", label: "Protein Calculator" },
  ],
  resistenza: [
    { to: "/tools/calories", label: "Calories Calculator" },
    { to: "/tools/hydration", label: "Hydration Calculator" },
  ],
};

const guideSuggestions: Record<string, { slug: string; label: string }[]> = {
  integratori: [
    { slug: "supplements-for-runners", label: "Essential Supplements for Runners" },
    { slug: "running-nutrition", label: "Running Nutrition: What to Eat Before, During & After" },
  ],
  scarpe: [
    { slug: "choosing-running-shoes", label: "How to Choose Running Shoes" },
    { slug: "trail-running-beginners", label: "Getting Started with Trail Running" },
  ],
  recupero: [
    { slug: "muscle-recovery", label: "Muscle Recovery After Running" },
    { slug: "injury-prevention", label: "Runner's Guide to Injury Prevention" },
  ],
  accessori: [
    { slug: "running-heart-rate-zones", label: "Heart Rate Zone Training for Runners" },
    { slug: "trail-running-beginners", label: "Getting Started with Trail Running" },
  ],
};

const ComparisonPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const comparison = (comparisonsData as Comparison[]).find((c) => {
    const expectedSlug = `${c.categoria}-per-${c.sport}-${c.obiettivo}`;
    return expectedSlug === slug;
  });

  if (!comparison) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="font-display text-2xl font-bold text-foreground">Comparison not found</h1>
          <Link to="/comparisons" className="mt-4 inline-block text-sm text-primary hover:underline">View all comparisons</Link>
        </div>
      </Layout>
    );
  }

  const title = `Best ${translateCategory(comparison.categoria)} for ${translateSport(comparison.sport)} – ${translateGoal(comparison.obiettivo)}`;
  const description = comparison.intro.slice(0, 155);

  const matchedProducts = (productsData as { id: string; nome: string; descrizione: string; prezzoRange: string; linkAffiliato: string; immagine: string; tag: string[] }[])
    .filter((p) => p.tag.some((t) => comparison.tags.includes(t)));

  const relatedTools = toolSuggestions[comparison.obiettivo] || [
    { to: "/tools/calories", label: "Calories Calculator" },
  ];
  const relatedGuides = guideSuggestions[comparison.categoria] || [];

  // Find related hub
  const relatedHub = (hubsData as { category: string; sport: string }[]).find(
    (h) => h.category === comparison.categoria || h.sport === comparison.sport
  );

  // Other comparisons (excluding current)
  const otherComparisons = (comparisonsData as Comparison[])
    .filter((c) => c !== comparison && (c.categoria === comparison.categoria || c.sport === comparison.sport))
    .slice(0, 3);

  const faqJsonLd = comparison.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: comparison.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  } : null;

  const productJsonLd = matchedProducts.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    itemListElement: matchedProducts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "Product", name: p.nome, description: p.descrizione, image: p.immagine, url: p.linkAffiliato },
    })),
  } : null;

  return (
    <Layout>
      <SEOHead title={title} description={description} path={`/comparison/${slug}`} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}
      {productJsonLd && <JsonLd data={productJsonLd} />}

      <div className="container mx-auto max-w-3xl px-4 py-8 sm:py-12">
        <Link to="/comparisons" className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> All comparisons
        </Link>

        <div className="editorial-line">
          <h1 className="font-display text-display-lg font-bold text-foreground capitalize">{title}</h1>
        </div>
        <p className="mt-3 text-muted-foreground leading-relaxed sm:text-lg">{comparison.intro}</p>

        {/* Hub breadcrumb */}
        {relatedHub && (
          <div className="mb-6 rounded-lg border border-border bg-secondary/50 px-4 py-3">
            <p className="text-xs text-muted-foreground">
              Part of{" "}
                <Link to={`/hub/${relatedHub.category}/${relatedHub.sport}`} className="font-medium text-primary hover:underline">
                  {translateCategory(relatedHub.category)} for {translateSport(relatedHub.sport)} hub
              </Link>
            </p>
          </div>
        )}

        <RecommendedProducts tags={comparison.tags} title={`Recommended ${translateCategory(comparison.categoria)}`} maxProducts={4} />

        {/* ZoneRun Banner */}
        <div className="mt-6">
          <ZoneRunBanner variant="inline" />
        </div>

        {/* FAQ */}
        {comparison.faq.length > 0 && (
          <div className="mt-8 sm:mt-10">
            <h2 className="mb-4 flex items-center gap-2 font-display text-display-md font-bold text-foreground">
              <HelpCircle className="h-5 w-5 text-primary" /> Frequently Asked Questions
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {comparison.faq.map((item, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-4 shadow-card sm:p-5">
                  <h3 className="mb-1.5 font-display text-sm font-semibold text-card-foreground sm:mb-2 sm:text-base">{item.q}</h3>
                  <p className="text-sm text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <section className="mt-8 sm:mt-10">
            <h2 className="mb-4 flex items-center gap-2 font-display text-display-md font-bold text-foreground">
              <Wrench className="h-5 w-5 text-primary" /> Related Tools
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.to}
                  to={tool.to}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Wrench className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-card-foreground">{tool.label}</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related Guides */}
        {relatedGuides.length > 0 && (
          <section className="mt-8 sm:mt-10">
            <h2 className="mb-4 flex items-center gap-2 font-display text-display-md font-bold text-foreground">
              <BookOpen className="h-5 w-5 text-primary" /> Read More
            </h2>
            <div className="grid gap-3">
              {relatedGuides.map((g) => (
                <Link
                  key={g.slug}
                  to={`/guides/${g.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <BookOpen className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-card-foreground">{g.label}</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Other Comparisons */}
        {otherComparisons.length > 0 && (
          <section className="mt-8 sm:mt-10">
            <h2 className="mb-4 font-display text-display-md font-bold text-foreground">More Comparisons</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {otherComparisons.map((c) => {
                const cSlug = `${c.categoria}-per-${c.sport}-${c.obiettivo}`;
                return (
                  <Link
                    key={cSlug}
                    to={`/comparison/${cSlug}`}
                    className="group rounded-xl border border-border bg-card p-4 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
                  >
                    <h3 className="text-sm font-semibold capitalize text-card-foreground">{translateCategory(c.categoria)} for {translateSport(c.sport)}</h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent">{translateGoal(c.obiettivo)}</p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default ComparisonPage;
