import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Wrench, BookOpen, BarChart3, Clock, Tag, Lightbulb, CheckCircle2, AlertTriangle } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import RecommendedProducts from "@/components/RecommendedProducts";
import ZoneRunBanner from "@/components/ZoneRunBanner";
import { translateCategory, translateSport, translateGoal } from "@/lib/translations";
import productsData from "@/data/products.json";
import comparisonsData from "@/data/comparisons.json";

// Hero images
import guideShoes from "@/assets/guide-shoes.jpg";
import guideSupplements from "@/assets/guide-supplements.jpg";
import guideRecovery from "@/assets/guide-recovery.jpg";
import guideNutrition from "@/assets/guide-nutrition.jpg";
import guideInjury from "@/assets/guide-injury.jpg";
import guideMarathon from "@/assets/guide-marathon.jpg";
import guideTrail from "@/assets/guide-trail.jpg";
import guideHeartrate from "@/assets/guide-heartrate.jpg";

type SectionVariant = "default" | "highlight" | "tip" | "warning" | "checklist";

interface GuideSection {
  heading: string;
  body: string;
  variant?: SectionVariant;
  listItems?: string[];
}

interface GuideContent {
  title: string;
  description: string;
  tags: string[];
  heroImage: string;
  readTime: string;
  keyTakeaways: string[];
  sections: GuideSection[];
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
    heroImage: guideShoes,
    readTime: "8 min read",
    keyTakeaways: [
      "Your foot strike type determines the support you need",
      "Drop and cushioning should match your running style",
      "Replace shoes every 600-1000 km",
    ],
    relatedTools: [
      { to: "/tools/bmi", label: "BMI Calculator" },
      { to: "/tools/calories", label: "Calories Calculator" },
    ],
    relatedGuides: [
      { slug: "muscle-recovery", label: "Muscle Recovery After Running" },
      { slug: "injury-prevention", label: "Runner's Guide to Injury Prevention" },
    ],
    sections: [
      { heading: "Why the right shoes matter", body: "Running shoes are the most important investment for a runner. Ill-fitting shoes can cause injuries, joint pain and reduce performance. Your choice depends on foot strike (neutral, overpronator, supinator), terrain (road, trail, mixed), distance and training frequency.", variant: "highlight" },
      { heading: "Foot strike type", body: "Foot strike is the primary factor. A neutral strike needs balanced cushioning. Overpronators need medial support. Supinators require extra cushioning on the outer side.", variant: "default", listItems: ["Neutral: balanced cushioning, most versatile", "Overpronation: medial post support, stability shoes", "Supination: extra lateral cushioning, neutral-cushioned shoes", "Use a wet test or gait analysis to determine your type"] },
      { heading: "Drop and cushioning", body: "Drop is the height difference between heel and toe. High drop (8-12mm) suits heel strikers. Low drop (0-6mm) is for midfoot or forefoot runners. Cushioning should match your weight and distance: the more km you run, the more cushioning you need.", variant: "tip" },
      { heading: "When to replace your shoes", body: "On average, running shoes last 600-1000 km. Track the km on each pair to know when to replace them.", variant: "warning", listItems: ["Outsole rubber is smooth or worn through", "Midsole feels flat and unresponsive", "You're experiencing new aches or pains", "The upper is stretched or torn"] },
    ],
  },
  "supplements-for-runners": {
    title: "Essential Supplements for Runners",
    description: "Which supplements actually work for running? An evidence-based guide.",
    tags: ["integratori", "elettroliti", "proteine"],
    heroImage: guideSupplements,
    readTime: "10 min read",
    keyTakeaways: [
      "A balanced diet covers most needs for recreational runners",
      "Magnesium, Vitamin D and protein have strong evidence",
      "Electrolytes are critical for runs over 60 minutes",
    ],
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
      { heading: "Do you really need supplements?", body: "For most recreational runners, a balanced diet is sufficient. However, some supplements have solid evidence for improving performance and recovery: magnesium, vitamin D, whey protein, electrolytes and caffeine.", variant: "highlight" },
      { heading: "Magnesium", body: "Magnesium is involved in over 300 enzymatic reactions. For runners it's crucial: it reduces cramps, supports muscle function and improves sleep quality. Citrate form has the highest bioavailability. Recommended dose: 300-400mg/day.", variant: "default" },
      { heading: "Protein", body: "Protein is essential for muscle recovery. For runners training 4+ times per week, 1.4-1.8g/kg body weight per day is optimal. Whey isolate within 30 minutes post-workout accelerates recovery.", variant: "tip" },
      { heading: "Electrolytes", body: "For runs over 60 minutes or in hot conditions, electrolytes are essential. Sodium, potassium and magnesium are lost through sweat. Effervescent tablets are the most practical format during activity.", variant: "default", listItems: ["Sodium: 300-600mg per hour of running", "Potassium: supports nerve and muscle function", "Magnesium: prevents cramps, aids recovery", "Look for sugar-free electrolyte tablets"] },
    ],
  },
  "muscle-recovery": {
    title: "Muscle Recovery After Running",
    description: "Scientific strategies to recover faster: stretching, foam rolling, nutrition and sleep.",
    tags: ["recupero", "massaggio", "proteine"],
    heroImage: guideRecovery,
    readTime: "7 min read",
    keyTakeaways: [
      "Recovery is when your body adapts and grows stronger",
      "Foam rolling can reduce DOMS by up to 50%",
      "7-9 hours of sleep is non-negotiable for runners",
    ],
    relatedTools: [
      { to: "/tools/protein", label: "Protein Calculator" },
      { to: "/tools/hydration", label: "Hydration Calculator" },
    ],
    relatedGuides: [
      { slug: "supplements-for-runners", label: "Essential Supplements for Runners" },
      { slug: "injury-prevention", label: "Runner's Guide to Injury Prevention" },
    ],
    sections: [
      { heading: "Why recovery is essential", body: "Training creates micro-damage in muscles. It's during recovery that your body adapts and grows stronger. Skipping recovery leads to overtraining, injuries and performance decline.", variant: "highlight" },
      { heading: "Foam rolling", body: "Foam rolling (or SMR – Self-Myofascial Release) reduces DOMS (delayed onset muscle soreness) by up to 50% according to some studies. 10-15 minutes post-workout on major muscle groups is sufficient.", variant: "default", listItems: ["Quads: 60 seconds per leg, slow rolls", "Calves: focus on tight spots, pause on tender areas", "IT band: roll from hip to just above knee", "Glutes: sit on roller, cross one ankle over opposite knee"] },
      { heading: "Post-run nutrition", body: "The anabolic window within 30-60 minutes after training is the optimal time to consume protein (20-30g) and carbs (1g/kg). A shake with whey protein and a banana is a practical and effective solution.", variant: "tip" },
      { heading: "Sleep", body: "Sleep is the most underrated recovery factor. During deep sleep, growth hormone (GH) is released, essential for muscle repair. Target: 7-9 hours per night, with consistent schedules.", variant: "warning" },
    ],
  },
  "running-nutrition": {
    title: "Running Nutrition: What to Eat Before, During & After",
    description: "A complete guide to fueling your runs properly. Learn what, when and how much to eat for optimal performance.",
    tags: ["energia", "carboidrati", "integratori", "proteine"],
    heroImage: guideNutrition,
    readTime: "9 min read",
    keyTakeaways: [
      "Eat carb-rich meals 2-3 hours before running",
      "Fuel with 30-60g carbs/hour for runs over 60 minutes",
      "Recover with a 3:1 carb-to-protein ratio within 60 minutes",
    ],
    relatedTools: [
      { to: "/tools/calories", label: "Calories Calculator" },
      { to: "/tools/protein", label: "Protein Calculator" },
    ],
    relatedGuides: [
      { slug: "supplements-for-runners", label: "Essential Supplements for Runners" },
      { slug: "marathon-training", label: "Marathon Training Guide for Beginners" },
    ],
    sections: [
      { heading: "Pre-run nutrition", body: "Eat a carb-rich meal 2-3 hours before running (oatmeal, toast with banana, rice). Avoid high-fiber and high-fat foods that may cause GI distress. A small snack 30-60 min before is fine for early morning runs.", variant: "default", listItems: ["2-3 hours before: oatmeal, toast, rice with lean protein", "30-60 min before: banana, energy bar, small smoothie", "Avoid: high-fiber, high-fat, spicy or new foods"] },
      { heading: "Fueling during runs", body: "For runs under 60 minutes, water is usually sufficient. Beyond that, aim for 30-60g of carbs per hour through gels, chews or sports drinks. Practice your fueling strategy in training, never on race day.", variant: "warning" },
      { heading: "Post-run recovery meals", body: "Within 30-60 minutes after running, consume 20-30g protein and 1-1.2g/kg carbs. Chocolate milk is a surprisingly effective recovery drink with the ideal 3:1 carb-to-protein ratio.", variant: "tip" },
      { heading: "Hydration strategies", body: "Start runs well-hydrated (pale yellow urine). During runs, drink 400-800ml per hour based on sweat rate. Weigh yourself before and after to calculate individual fluid needs.", variant: "checklist", listItems: ["Check urine color before runs (pale yellow = good)", "Drink 400-800ml per hour during activity", "Weigh pre/post run to measure fluid loss", "Replace 150% of lost fluid in 4-6 hours post-run"] },
    ],
  },
  "injury-prevention": {
    title: "Runner's Guide to Injury Prevention",
    description: "How to stay injury-free with smart training, strength work and proper recovery techniques.",
    tags: ["recupero", "massaggio", "muscoli", "scarpe"],
    heroImage: guideInjury,
    readTime: "8 min read",
    keyTakeaways: [
      "Never increase weekly mileage by more than 10%",
      "2-3 strength sessions per week dramatically reduce injuries",
      "Early intervention prevents chronic problems",
    ],
    relatedTools: [
      { to: "/tools/bmi", label: "BMI Calculator" },
      { to: "/tools/protein", label: "Protein Calculator" },
    ],
    relatedGuides: [
      { slug: "muscle-recovery", label: "Muscle Recovery After Running" },
      { slug: "choosing-running-shoes", label: "How to Choose Running Shoes" },
    ],
    sections: [
      { heading: "The 10% rule", body: "Never increase weekly mileage by more than 10%. Sudden volume spikes are the leading cause of running injuries. Build gradually and include cutback weeks every 3-4 weeks.", variant: "warning" },
      { heading: "Strength training for runners", body: "2-3 strength sessions per week targeting glutes, core and calves dramatically reduce injury risk.", variant: "default", listItems: ["Single-leg squats: 3x12 each leg", "Calf raises: 3x15, both straight and bent knee", "Hip bridges: 3x15, progress to single-leg", "Planks: 3x45 seconds, include side planks"] },
      { heading: "Common running injuries", body: "Runner's knee, shin splints, IT band syndrome, plantar fasciitis and Achilles tendinopathy are the most common. Most are overuse injuries that respond to load management.", variant: "highlight" },
      { heading: "When to see a professional", body: "If pain persists beyond 2 weeks, worsens during runs, causes limping, or involves swelling, see a sports physiotherapist. Early intervention prevents chronic issues.", variant: "tip" },
    ],
  },
  "marathon-training": {
    title: "Marathon Training Guide for Beginners",
    description: "Everything you need to know to train for your first marathon: plans, pacing, nutrition and gear.",
    tags: ["energia", "carboidrati", "scarpe", "corsa"],
    heroImage: guideMarathon,
    readTime: "12 min read",
    keyTakeaways: [
      "Build a base of 30-40 km/week for 3 months first",
      "Long runs are the cornerstone of marathon prep",
      "Nothing new on race day — test everything in training",
    ],
    relatedTools: [
      { to: "/tools/calories", label: "Calories Calculator" },
      { to: "/tools/hydration", label: "Hydration Calculator" },
    ],
    relatedGuides: [
      { slug: "running-nutrition", label: "Running Nutrition: What to Eat Before, During & After" },
      { slug: "choosing-running-shoes", label: "How to Choose Running Shoes" },
    ],
    sections: [
      { heading: "Base requirements", body: "Before starting marathon training, you should be comfortable running 30-40 km per week for at least 3 months. A solid aerobic base prevents injuries during the 16-20 week marathon build.", variant: "highlight" },
      { heading: "Training structure", body: "A typical marathon plan includes 4-5 runs per week:", variant: "default", listItems: ["1 long run (cornerstone): 20km → 32-35km peak", "1 tempo run: sustained effort at threshold pace", "1 interval session: shorter, faster repeats for speed", "1-2 easy runs: active recovery, aerobic base"] },
      { heading: "Pacing strategy", body: "Most beginners start too fast and crash after 30km ('hitting the wall'). Use negative splits: run the first half 10-15 sec/km slower than goal pace. Practice marathon pace in long runs.", variant: "tip" },
      { heading: "Race week and taper", body: "Reduce volume by 40-60% in the final 2-3 weeks (taper). Maintain intensity but cut distance.", variant: "checklist", listItems: ["2-3 weeks before: begin taper, reduce volume 40-60%", "3 days before: carb-load (7-10g/kg bodyweight)", "Night before: lay out ALL gear — nothing new on race day", "Race morning: eat proven pre-race meal 3 hours before start"] },
    ],
  },
  "trail-running-beginners": {
    title: "Getting Started with Trail Running",
    description: "A beginner's guide to trail running: gear, technique, safety and finding the right trails.",
    tags: ["scarpe", "corsa", "accessori", "idratazione"],
    heroImage: guideTrail,
    readTime: "9 min read",
    keyTakeaways: [
      "Expect to be 20-40% slower on trails — that's normal",
      "Trail shoes with aggressive lugs are essential",
      "Always tell someone your route and expected return",
    ],
    relatedTools: [
      { to: "/tools/hydration", label: "Hydration Calculator" },
      { to: "/tools/calories", label: "Calories Calculator" },
    ],
    relatedGuides: [
      { slug: "choosing-running-shoes", label: "How to Choose Running Shoes" },
      { slug: "injury-prevention", label: "Runner's Guide to Injury Prevention" },
    ],
    sections: [
      { heading: "Road to trail transition", body: "Trail running is slower than road running — and that's perfectly normal. Expect to be 20-40% slower on technical terrain. Focus on effort (heart rate or perceived exertion) rather than pace.", variant: "highlight" },
      { heading: "Essential trail gear", body: "Having the right gear makes trail running safer and more enjoyable.", variant: "checklist", listItems: ["Trail shoes with aggressive lugs for traction", "Hydration vest for runs over 1 hour", "Lightweight rain jacket (weather changes fast)", "Phone with offline maps downloaded", "Trekking poles (optional, helpful on steep terrain)"] },
      { heading: "Uphill and downhill technique", body: "Uphill: shorten your stride, lean slightly forward, use your arms. Walking steep uphills is not cheating — even elites walk. Downhill: lean forward, quick light steps, eyes on the trail 3-5 meters ahead.", variant: "tip" },
      { heading: "Safety on the trails", body: "Trail running requires more planning than road running.", variant: "warning", listItems: ["Always tell someone your route and expected return", "Carry enough water and food for emergencies", "Check weather conditions before heading out", "Start with well-marked, popular trails first"] },
    ],
  },
  "running-heart-rate-zones": {
    title: "Heart Rate Zone Training for Runners",
    description: "How to use heart rate zones to train smarter, avoid overtraining and improve performance.",
    tags: ["accessori", "corsa"],
    heroImage: guideHeartrate,
    readTime: "8 min read",
    keyTakeaways: [
      "Spend 80% of training in Zones 1-2 (easy effort)",
      "The '220 minus age' formula is inaccurate for many people",
      "Chest straps are more accurate than wrist-based HR monitors",
    ],
    relatedTools: [
      { to: "/tools/calories", label: "Calories Calculator" },
      { to: "/tools/bmi", label: "BMI Calculator" },
    ],
    relatedGuides: [
      { slug: "marathon-training", label: "Marathon Training Guide for Beginners" },
      { slug: "running-nutrition", label: "Running Nutrition: What to Eat Before, During & After" },
    ],
    sections: [
      { heading: "Understanding the 5 zones", body: "Heart rate zones help you train at the right intensity for different training goals.", variant: "default", listItems: ["Zone 1 (50-60%): active recovery, very easy", "Zone 2 (60-70%): aerobic base, conversational pace", "Zone 3 (70-80%): tempo, comfortably hard", "Zone 4 (80-90%): VO2max intervals, hard effort", "Zone 5 (90-100%): sprints, max effort"] },
      { heading: "The 80/20 rule", body: "Elite runners spend 80% of training time in Zones 1-2 and only 20% in Zones 3-5. Most recreational runners do the opposite — running too hard on easy days and too easy on hard days.", variant: "highlight" },
      { heading: "Finding your max heart rate", body: "The '220 minus age' formula is inaccurate for many people. A field test (e.g., 3x 3-minute uphill repeats at max effort) gives a better estimate. Lab testing (VO2max test) is the gold standard.", variant: "tip" },
      { heading: "Chest strap vs optical HR", body: "Chest straps (Polar, Garmin HRM) are more accurate during high-intensity efforts. Wrist-based optical sensors can lag and misread during intervals. For zone training, a chest strap is recommended.", variant: "default" },
    ],
  },
};

/* ─── Section renderer with visual variants ─── */
const SectionBlock = ({ section, index }: { section: GuideSection; index: number }) => {
  const isEven = index % 2 === 0;

  const variantIcon = {
    tip: <Lightbulb className="h-5 w-5 text-primary" />,
    warning: <AlertTriangle className="h-5 w-5 text-accent" />,
    highlight: null,
    checklist: <CheckCircle2 className="h-5 w-5 text-primary" />,
    default: null,
  };

  const variantStyles: Record<SectionVariant, string> = {
    default: "",
    highlight: "bg-primary/5 border-l-4 border-primary rounded-r-xl p-5 sm:p-6",
    tip: "bg-primary/5 border border-primary/20 rounded-xl p-5 sm:p-6",
    warning: "bg-accent/5 border border-accent/20 rounded-xl p-5 sm:p-6",
    checklist: "bg-secondary/50 border border-border rounded-xl p-5 sm:p-6",
  };

  const variant = section.variant || "default";
  const icon = variantIcon[variant];

  return (
    <section
      id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}
      className={`scroll-mt-24 ${variantStyles[variant]} ${variant === "default" ? (isEven ? "" : "") : ""}`}
    >
      <div className="flex items-start gap-3">
        {icon && <div className="mt-0.5 shrink-0">{icon}</div>}
        <div className="flex-1 min-w-0">
          <h2 className="font-display text-lg font-bold text-foreground sm:text-xl lg:text-2xl">
            {section.heading}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-[17px] lg:leading-relaxed">
            {section.body}
          </p>
          {section.listItems && (
            <ul className={`mt-3 space-y-2 ${variant === "checklist" ? "" : "list-disc pl-5"}`}>
              {section.listItems.map((item, i) => (
                <li key={i} className={`text-sm text-muted-foreground sm:text-base ${variant === "checklist" ? "flex items-start gap-2" : ""}`}>
                  {variant === "checklist" && <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

/* ─── Key Takeaways box ─── */
const KeyTakeaways = ({ items }: { items: string[] }) => (
  <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/15 p-5 sm:p-6">
    <h3 className="flex items-center gap-2 font-display text-base font-bold text-foreground sm:text-lg">
      <Lightbulb className="h-5 w-5 text-primary" />
      Key Takeaways
    </h3>
    <ul className="mt-3 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-foreground sm:text-base">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

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

      {/* Hero section */}
      <div className="relative w-full overflow-hidden bg-foreground">
        <img
          src={guide.heroImage}
          alt={guide.title}
          className="h-48 w-full object-cover opacity-60 sm:h-64 md:h-80 lg:h-96"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto max-w-3xl px-4 pb-6 sm:pb-8 lg:pb-10">
            <Link to="/guides" className="mb-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground sm:text-sm">
              <ArrowLeft className="h-3.5 w-3.5" /> All guides
            </Link>
            <h1 className="font-display text-2xl font-extrabold text-primary-foreground sm:text-3xl lg:text-4xl xl:text-5xl leading-tight">
              {guide.title}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-3 sm:mt-3">
              <span className="inline-flex items-center gap-1.5 text-xs text-primary-foreground/70 sm:text-sm">
                <Clock className="h-3.5 w-3.5" /> {guide.readTime}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-primary-foreground/70 sm:text-sm">
                <Tag className="h-3.5 w-3.5" /> {guide.tags.length} topics
              </span>
            </div>
          </div>
        </div>
      </div>

      <article className="container mx-auto max-w-3xl px-4 py-6 sm:py-8 lg:py-10">
        {/* Description */}
        <p className="text-base text-muted-foreground leading-relaxed sm:text-lg lg:text-xl lg:leading-relaxed">
          {guide.description}
        </p>

        {/* Table of Contents */}
        <nav className="mt-6 rounded-xl border border-border bg-secondary/30 p-4 sm:mt-8 sm:p-5" aria-label="Table of contents">
          <h2 className="flex items-center gap-2 font-display text-sm font-bold text-foreground sm:text-base">
            <BookOpen className="h-4 w-4 text-primary" /> Table of Contents
          </h2>
          <ol className="mt-3 space-y-1.5">
            {guide.sections.map((section, i) => {
              const sectionId = section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
              return (
                <li key={i}>
                  <a
                    href={`#${sectionId}`}
                    className="group flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary"
                  >
                    <span className="font-mono text-xs text-muted-foreground/60">{String(i + 1).padStart(2, "0")}</span>
                    {section.heading}
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Key takeaways */}
        <div className="mt-6 sm:mt-8">
          <KeyTakeaways items={guide.keyTakeaways} />
        </div>

        {/* Sections */}
        <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
          {guide.sections.map((section, i) => (
            <SectionBlock key={i} section={section} index={i} />
          ))}
        </div>

        {/* Products */}
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
