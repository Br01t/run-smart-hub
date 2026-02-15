import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Wrench, BookOpen, BarChart3 } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import RecommendedProducts from "@/components/RecommendedProducts";
import productsData from "@/data/products.json";
import comparisonsData from "@/data/comparisons.json";

interface GuideContent {
  title: string;
  description: string;
  tags: string[];
  sections: { heading: string; body: string }[];
  relatedTools: { to: string; label: string }[];
  relatedGuides: { slug: string; label: string }[];
}

interface Comparison {
  sport: string;
  obiettivo: string;
  categoria: string;
  intro: string;
  tags: string[];
  faq: { q: string; a: string }[];
}

const guidesContent: Record<string, GuideContent> = {
  "choosing-running-shoes": {
    title: "How to Choose Running Shoes",
    description: "Complete guide to choosing the right running shoes for your foot type, terrain and goals.",
    tags: ["scarpe", "corsa", "ammortizzazione"],
    relatedTools: [
      { to: "/tools/bmi", label: "BMI Calculator" },
      { to: "/tools/calories", label: "Calories Calculator" },
    ],
    relatedGuides: [
      { slug: "muscle-recovery", label: "Muscle Recovery After Running" },
    ],
    sections: [
      { heading: "Why the right shoes matter", body: "Running shoes are the most important investment for a runner. Ill-fitting shoes can cause injuries, joint pain and reduce performance. Your choice depends on foot strike (neutral, overpronator, supinator), terrain (road, trail, mixed), distance and training frequency." },
      { heading: "Foot strike type", body: "Foot strike is the primary factor. A neutral strike needs balanced cushioning. Overpronators need medial support. Supinators require extra cushioning on the outer side. A wet test or gait analysis can help determine your type." },
      { heading: "Drop and cushioning", body: "Drop is the height difference between heel and toe. High drop (8-12mm) suits heel strikers. Low drop (0-6mm) is for midfoot or forefoot runners. Cushioning should match your weight and distance: the more km you run, the more cushioning you need." },
      { heading: "When to replace your shoes", body: "On average, running shoes last 600-1000 km. Signs of wear: smooth outsole, flattened midsole, new aches. Track the km on each pair to know when to replace them." },
    ],
  },
  "supplements-for-runners": {
    title: "Essential Supplements for Runners",
    description: "Which supplements actually work for running? An evidence-based guide.",
    tags: ["integratori", "elettroliti", "proteine"],
    relatedTools: [
      { to: "/tools/protein", label: "Protein Calculator" },
      { to: "/tools/electrolytes", label: "Electrolyte Calculator" },
      { to: "/tools/calories", label: "Calories Calculator" },
    ],
    relatedGuides: [
      { slug: "muscle-recovery", label: "Muscle Recovery After Running" },
      { slug: "choosing-running-shoes", label: "How to Choose Running Shoes" },
    ],
    sections: [
      { heading: "Do you really need supplements?", body: "For most recreational runners, a balanced diet is sufficient. However, some supplements have solid evidence for improving performance and recovery: magnesium, vitamin D, whey protein, electrolytes and caffeine." },
      { heading: "Magnesium", body: "Magnesium is involved in over 300 enzymatic reactions. For runners it's crucial: it reduces cramps, supports muscle function and improves sleep quality. Citrate form has the highest bioavailability. Recommended dose: 300-400mg/day." },
      { heading: "Protein", body: "Protein is essential for muscle recovery. For runners training 4+ times per week, 1.4-1.8g/kg body weight per day is optimal. Whey isolate within 30 minutes post-workout accelerates recovery." },
      { heading: "Electrolytes", body: "For runs over 60 minutes or in hot conditions, electrolytes are essential. Sodium, potassium and magnesium are lost through sweat. Effervescent tablets are the most practical format during activity." },
    ],
  },
  "muscle-recovery": {
    title: "Muscle Recovery After Running",
    description: "Scientific strategies to recover faster: stretching, foam rolling, nutrition and sleep.",
    tags: ["recupero", "massaggio", "proteine"],
    relatedTools: [
      { to: "/tools/protein", label: "Protein Calculator" },
      { to: "/tools/hydration", label: "Hydration Calculator" },
    ],
    relatedGuides: [
      { slug: "supplements-for-runners", label: "Essential Supplements for Runners" },
    ],
    sections: [
      { heading: "Why recovery is essential", body: "Training creates micro-damage in muscles. It's during recovery that your body adapts and grows stronger. Skipping recovery leads to overtraining, injuries and performance decline." },
      { heading: "Foam rolling", body: "Foam rolling (or SMR – Self-Myofascial Release) reduces DOMS (delayed onset muscle soreness) by up to 50% according to some studies. 10-15 minutes post-workout on major muscle groups (quads, calves, IT band) is sufficient." },
      { heading: "Post-run nutrition", body: "The anabolic window within 30-60 minutes after training is the optimal time to consume protein (20-30g) and carbs (1g/kg). A shake with whey protein and a banana is a practical and effective solution." },
      { heading: "Sleep", body: "Sleep is the most underrated recovery factor. During deep sleep, growth hormone (GH) is released, essential for muscle repair. Target: 7-9 hours per night, with consistent schedules." },
    ],
  },
};

const GuidePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? guidesContent[slug] : null;

  if (!guide) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="font-display text-2xl font-bold text-foreground">Guide not found</h1>
          <Link to="/guides" className="mt-4 inline-block text-sm text-primary hover:underline">Back to guides</Link>
        </div>
      </Layout>
    );
  }

  const guideProducts = (productsData as { id: string; nome: string; descrizione: string; linkAffiliato: string; immagine: string; tag: string[] }[])
    .filter((p) => p.tag.some((t) => guide.tags.includes(t)));

  // Find related comparisons by matching tags
  const relatedComparisons = (comparisonsData as Comparison[])
    .filter((c) => c.tags.some((t) => guide.tags.includes(t)))
    .slice(0, 3);

  return (
    <Layout>
      <SEOHead title={guide.title} description={guide.description} path={`/guides/${slug}`} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        publisher: { "@type": "Organization", name: "RunLab" },
      }} />
      {guideProducts.length > 0 && (
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `Related products – ${guide.title}`,
          itemListElement: guideProducts.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: { "@type": "Product", name: p.nome, description: p.descrizione, image: p.immagine, url: p.linkAffiliato },
          })),
        }} />
      )}

      <article className="container mx-auto max-w-3xl px-4 py-6 sm:py-8">
        <Link to="/guides" className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:mb-6">
          <ArrowLeft className="h-4 w-4" /> All guides
        </Link>

        <header className="mb-8 sm:mb-10">
          <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">{guide.title}</h1>
          <p className="mt-2 text-base text-muted-foreground sm:text-lg">{guide.description}</p>
        </header>

        <div className="space-y-6 sm:space-y-8">
          {guide.sections.map((section, i) => (
            <section key={i}>
              <h2 className="mb-2 font-display text-lg font-semibold text-foreground sm:mb-3 sm:text-xl">{section.heading}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed sm:text-base">{section.body}</p>
            </section>
          ))}
        </div>

        <RecommendedProducts tags={guide.tags} title="Related products" />

        {/* Related Tools */}
        {guide.relatedTools.length > 0 && (
          <section className="mt-8 sm:mt-10">
            <h2 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-foreground sm:text-xl">
              <Wrench className="h-5 w-5 text-primary" /> Try These Tools
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {guide.relatedTools.map((tool) => (
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

        {/* Related Comparisons */}
        {relatedComparisons.length > 0 && (
          <section className="mt-8 sm:mt-10">
            <h2 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-foreground sm:text-xl">
              <BarChart3 className="h-5 w-5 text-primary" /> Related Comparisons
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedComparisons.map((c) => {
                const cSlug = `${c.categoria}-per-${c.sport}-${c.obiettivo}`;
                return (
                  <Link
                    key={cSlug}
                    to={`/comparison/${cSlug}`}
                    className="group rounded-xl border border-border bg-card p-4 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
                  >
                    <h3 className="text-sm font-semibold capitalize text-card-foreground">{c.categoria} for {c.sport}</h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent">{c.obiettivo}</p>
                    <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{c.intro}</p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Related Guides */}
        {guide.relatedGuides.length > 0 && (
          <section className="mt-8 sm:mt-10">
            <h2 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-foreground sm:text-xl">
              <BookOpen className="h-5 w-5 text-primary" /> Keep Reading
            </h2>
            <div className="grid gap-3">
              {guide.relatedGuides.map((g) => (
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
      </article>
    </Layout>
  );
};

export default GuidePage;
