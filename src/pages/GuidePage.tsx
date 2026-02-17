import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Wrench, BookOpen, BarChart3 } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import RecommendedProducts from "@/components/RecommendedProducts";
import ZoneRunBanner from "@/components/ZoneRunBanner";
import { translateCategory, translateSport, translateGoal } from "@/lib/translations";
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
      { slug: "injury-prevention", label: "Runner's Guide to Injury Prevention" },
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
      { slug: "running-nutrition", label: "Running Nutrition: What to Eat Before, During & After" },
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
      { slug: "injury-prevention", label: "Runner's Guide to Injury Prevention" },
    ],
    sections: [
      { heading: "Why recovery is essential", body: "Training creates micro-damage in muscles. It's during recovery that your body adapts and grows stronger. Skipping recovery leads to overtraining, injuries and performance decline." },
      { heading: "Foam rolling", body: "Foam rolling (or SMR – Self-Myofascial Release) reduces DOMS (delayed onset muscle soreness) by up to 50% according to some studies. 10-15 minutes post-workout on major muscle groups (quads, calves, IT band) is sufficient." },
      { heading: "Post-run nutrition", body: "The anabolic window within 30-60 minutes after training is the optimal time to consume protein (20-30g) and carbs (1g/kg). A shake with whey protein and a banana is a practical and effective solution." },
      { heading: "Sleep", body: "Sleep is the most underrated recovery factor. During deep sleep, growth hormone (GH) is released, essential for muscle repair. Target: 7-9 hours per night, with consistent schedules." },
    ],
  },
  "running-nutrition": {
    title: "Running Nutrition: What to Eat Before, During & After",
    description: "A complete guide to fueling your runs properly. Learn what, when and how much to eat for optimal performance.",
    tags: ["energia", "carboidrati", "integratori", "proteine"],
    relatedTools: [
      { to: "/tools/calories", label: "Calories Calculator" },
      { to: "/tools/protein", label: "Protein Calculator" },
    ],
    relatedGuides: [
      { slug: "supplements-for-runners", label: "Essential Supplements for Runners" },
      { slug: "marathon-training", label: "Marathon Training Guide for Beginners" },
    ],
    sections: [
      { heading: "Pre-run nutrition", body: "Eat a carb-rich meal 2-3 hours before running (oatmeal, toast with banana, rice). Avoid high-fiber and high-fat foods that may cause GI distress. A small snack 30-60 min before is fine for early morning runs." },
      { heading: "Fueling during runs", body: "For runs under 60 minutes, water is usually sufficient. Beyond that, aim for 30-60g of carbs per hour through gels, chews or sports drinks. Practice your fueling strategy in training, never on race day." },
      { heading: "Post-run recovery meals", body: "Within 30-60 minutes after running, consume 20-30g protein and 1-1.2g/kg carbs. Chocolate milk is a surprisingly effective recovery drink with the ideal 3:1 carb-to-protein ratio." },
      { heading: "Hydration strategies", body: "Start runs well-hydrated (pale yellow urine). During runs, drink 400-800ml per hour based on sweat rate. Weigh yourself before and after to calculate individual fluid needs." },
    ],
  },
  "injury-prevention": {
    title: "Runner's Guide to Injury Prevention",
    description: "How to stay injury-free with smart training, strength work and proper recovery techniques.",
    tags: ["recupero", "massaggio", "muscoli", "scarpe"],
    relatedTools: [
      { to: "/tools/bmi", label: "BMI Calculator" },
      { to: "/tools/protein", label: "Protein Calculator" },
    ],
    relatedGuides: [
      { slug: "muscle-recovery", label: "Muscle Recovery After Running" },
      { slug: "choosing-running-shoes", label: "How to Choose Running Shoes" },
    ],
    sections: [
      { heading: "The 10% rule", body: "Never increase weekly mileage by more than 10%. Sudden volume spikes are the leading cause of running injuries. Build gradually and include cutback weeks every 3-4 weeks." },
      { heading: "Strength training for runners", body: "2-3 strength sessions per week targeting glutes, core and calves dramatically reduce injury risk. Key exercises: single-leg squats, calf raises, hip bridges and planks." },
      { heading: "Common running injuries", body: "Runner's knee (patellofemoral pain), shin splints, IT band syndrome, plantar fasciitis and Achilles tendinopathy are the most common. Most are overuse injuries that respond to load management." },
      { heading: "When to see a professional", body: "If pain persists beyond 2 weeks, worsens during runs, causes limping, or involves swelling, see a sports physiotherapist. Early intervention prevents chronic issues." },
    ],
  },
  "marathon-training": {
    title: "Marathon Training Guide for Beginners",
    description: "Everything you need to know to train for your first marathon: plans, pacing, nutrition and gear.",
    tags: ["energia", "carboidrati", "scarpe", "corsa"],
    relatedTools: [
      { to: "/tools/calories", label: "Calories Calculator" },
      { to: "/tools/hydration", label: "Hydration Calculator" },
    ],
    relatedGuides: [
      { slug: "running-nutrition", label: "Running Nutrition: What to Eat Before, During & After" },
      { slug: "choosing-running-shoes", label: "How to Choose Running Shoes" },
    ],
    sections: [
      { heading: "Base requirements", body: "Before starting marathon training, you should be comfortable running 30-40 km per week for at least 3 months. A solid aerobic base prevents injuries during the 16-20 week marathon build." },
      { heading: "Training structure", body: "A typical marathon plan includes 4-5 runs per week: 1 long run, 1 tempo run, 1 interval session, and 1-2 easy runs. The long run is the cornerstone, building from 20km to 32-35km peak." },
      { heading: "Pacing strategy", body: "Most beginners start too fast and crash after 30km ('hitting the wall'). Use negative splits: run the first half 10-15 sec/km slower than goal pace. Practice marathon pace in long runs." },
      { heading: "Race week and taper", body: "Reduce volume by 40-60% in the final 2-3 weeks (taper). Maintain intensity but cut distance. Carb-load 2-3 days before the race. Lay out all gear the night before — nothing new on race day." },
    ],
  },
  "trail-running-beginners": {
    title: "Getting Started with Trail Running",
    description: "A beginner's guide to trail running: gear, technique, safety and finding the right trails.",
    tags: ["scarpe", "corsa", "accessori", "idratazione"],
    relatedTools: [
      { to: "/tools/hydration", label: "Hydration Calculator" },
      { to: "/tools/calories", label: "Calories Calculator" },
    ],
    relatedGuides: [
      { slug: "choosing-running-shoes", label: "How to Choose Running Shoes" },
      { slug: "injury-prevention", label: "Runner's Guide to Injury Prevention" },
    ],
    sections: [
      { heading: "Road to trail transition", body: "Trail running is slower than road running — and that's perfectly normal. Expect to be 20-40% slower on technical terrain. Focus on effort (heart rate or perceived exertion) rather than pace." },
      { heading: "Essential trail gear", body: "Trail shoes with aggressive lugs, a hydration vest for runs over 1 hour, a lightweight rain jacket, and a phone with offline maps are the minimum. Trekking poles are optional but helpful on steep terrain." },
      { heading: "Uphill and downhill technique", body: "Uphill: shorten your stride, lean slightly forward, use your arms. Walking steep uphills is not cheating — even elites walk. Downhill: lean forward, quick light steps, eyes on the trail 3-5 meters ahead." },
      { heading: "Safety on the trails", body: "Always tell someone your route and expected return time. Carry enough water and food. Check weather conditions before heading out. Start with well-marked, popular trails before venturing into remote areas." },
    ],
  },
  "running-heart-rate-zones": {
    title: "Heart Rate Zone Training for Runners",
    description: "How to use heart rate zones to train smarter, avoid overtraining and improve performance.",
    tags: ["accessori", "corsa"],
    relatedTools: [
      { to: "/tools/calories", label: "Calories Calculator" },
      { to: "/tools/bmi", label: "BMI Calculator" },
    ],
    relatedGuides: [
      { slug: "marathon-training", label: "Marathon Training Guide for Beginners" },
      { slug: "running-nutrition", label: "Running Nutrition: What to Eat Before, During & After" },
    ],
    sections: [
      { heading: "Understanding the 5 zones", body: "Zone 1 (50-60% max HR): active recovery. Zone 2 (60-70%): aerobic base building. Zone 3 (70-80%): tempo and threshold. Zone 4 (80-90%): VO2max intervals. Zone 5 (90-100%): sprints and max effort." },
      { heading: "The 80/20 rule", body: "Elite runners spend 80% of training time in Zones 1-2 and only 20% in Zones 3-5. Most recreational runners do the opposite — running too hard on easy days and too easy on hard days." },
      { heading: "Finding your max heart rate", body: "The '220 minus age' formula is inaccurate for many people. A field test (e.g., 3x 3-minute uphill repeats at max effort) gives a better estimate. Lab testing (VO2max test) is the gold standard." },
      { heading: "Chest strap vs optical HR", body: "Chest straps (Polar, Garmin HRM) are more accurate during high-intensity efforts. Wrist-based optical sensors can lag and misread during intervals. For zone training, a chest strap is recommended." },
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

        {/* ZoneRun Banner */}
        <div className="mt-8">
          <ZoneRunBanner variant="inline" />
        </div>

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
                    <h3 className="text-sm font-semibold capitalize text-card-foreground">{translateCategory(c.categoria)} for {translateSport(c.sport)}</h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent">{translateGoal(c.obiettivo)}</p>
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
