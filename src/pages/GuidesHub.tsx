import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, BookOpen, Search, X, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import guidesHeroImg from "@/assets/guides-hero.jpg";
import ZoneRunBanner from "@/components/ZoneRunBanner";

const guides = [
  { slug: "choosing-running-shoes", title: "How to Choose Running Shoes", excerpt: "Complete guide to choosing the right running shoes: cushioning, drop, foot strike and terrain.", readTime: "8 min read", category: "Gear" },
  { slug: "supplements-for-runners", title: "Essential Supplements for Runners", excerpt: "Which supplements actually work? From vitamin D to magnesium, here's what the science says.", readTime: "10 min read", category: "Nutrition" },
  { slug: "muscle-recovery", title: "Muscle Recovery After Running", excerpt: "Stretching, foam rolling, nutrition and sleep: strategies to recover faster.", readTime: "7 min read", category: "Recovery" },
  { slug: "running-nutrition", title: "Running Nutrition: What to Eat Before, During & After", excerpt: "A complete guide to fueling your runs properly for optimal performance and recovery.", readTime: "9 min read", category: "Nutrition" },
  { slug: "injury-prevention", title: "Runner's Guide to Injury Prevention", excerpt: "Stay injury-free with the 10% rule, strength training and proper recovery techniques.", readTime: "8 min read", category: "Health" },
  { slug: "marathon-training", title: "Marathon Training Guide for Beginners", excerpt: "Everything you need to know for your first 42K: training plans, pacing and race day tips.", readTime: "12 min read", category: "Training" },
  { slug: "trail-running-beginners", title: "Getting Started with Trail Running", excerpt: "From gear to technique: a beginner's guide to hitting the trails safely and confidently.", readTime: "9 min read", category: "Trail" },
  { slug: "running-heart-rate-zones", title: "Heart Rate Zone Training for Runners", excerpt: "Use heart rate zones to train smarter: the 80/20 rule, max HR testing and more.", readTime: "8 min read", category: "Training" },
  { slug: "stretching-for-runners", title: "The Runner's Stretching Guide", excerpt: "Dynamic vs static stretching, when to stretch, and the best routines for injury prevention.", readTime: "7 min read", category: "Recovery" },
  { slug: "running-form", title: "How to Improve Your Running Form", excerpt: "Fix your posture, arm swing and foot strike to run more efficiently and avoid injuries.", readTime: "8 min read", category: "Training" },
  { slug: "running-cadence", title: "Running Cadence: Why Steps Per Minute Matter", excerpt: "Learn why 180 spm is the magic number and how to increase your cadence safely.", readTime: "6 min read", category: "Training" },
  { slug: "hill-training", title: "Hill Training for Runners", excerpt: "Uphill repeats, downhill technique and strength gains: the complete guide to hill workouts.", readTime: "8 min read", category: "Training" },
  { slug: "best-running-watches", title: "Best GPS Running Watches: Buyer's Guide", excerpt: "From budget to premium: how to choose the right GPS watch for your training needs and goals.", readTime: "10 min read", category: "Gear" },
  { slug: "winter-running", title: "How to Run Safely in Cold Weather", excerpt: "Layering strategies, gear essentials and safety tips for running through winter.", readTime: "8 min read", category: "Gear" },
  { slug: "interval-training", title: "Interval Training for Runners: The Complete Guide", excerpt: "Fartlek, tempo, VO2max repeats — how to structure speed sessions for maximum gains.", readTime: "9 min read", category: "Training" },
  { slug: "sleep-and-running", title: "Sleep & Running Performance: The Science", excerpt: "How sleep quality directly impacts your running performance, recovery and injury risk.", readTime: "7 min read", category: "Recovery" },
];

const categories = [...new Set(guides.map((g) => g.category))];

const categoryStyle: Record<string, { bg: string; text: string; dot: string; badge: string; border: string }> = {
  Gear:      { bg: "bg-primary/10", text: "text-primary", dot: "bg-primary", badge: "bg-primary text-primary-foreground", border: "border-primary/20" },
  Nutrition: { bg: "bg-accent/10", text: "text-accent", dot: "bg-accent", badge: "bg-accent text-accent-foreground", border: "border-accent/20" },
  Recovery:  { bg: "bg-violet-500/10", text: "text-violet-600 dark:text-violet-400", dot: "bg-violet-600 dark:bg-violet-400", badge: "bg-violet-600 text-white", border: "border-violet-500/20" },
  Health:    { bg: "bg-rose-500/10", text: "text-rose-600 dark:text-rose-400", dot: "bg-rose-600 dark:bg-rose-400", badge: "bg-rose-600 text-white", border: "border-rose-500/20" },
  Training:  { bg: "bg-sky-500/10", text: "text-sky-600 dark:text-sky-400", dot: "bg-sky-600 dark:bg-sky-400", badge: "bg-sky-600 text-white", border: "border-sky-500/20" },
  Trail:     { bg: "bg-emerald-500/10", text: "text-emerald-700 dark:text-emerald-400", dot: "bg-emerald-700 dark:bg-emerald-400", badge: "bg-emerald-700 text-white", border: "border-emerald-500/20" },
};

const GuidesHub = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return guides.filter((g) => {
      const matchesCategory = !activeCategory || g.category === activeCategory;
      const matchesSearch = !search || g.title.toLowerCase().includes(search.toLowerCase()) || g.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const isFiltered = !!search || !!activeCategory;

  // Split into featured (first), secondary (next 2), and rest
  const featured = filtered[0];
  const secondary = filtered.slice(1, 3);
  const rest = filtered.slice(3);

  return (
    <Layout>
      <SEOHead
        title="Runner's Guides"
        description="Practical, science-backed guides on running shoes, supplements and muscle recovery to improve your performance."
        path="/guides"
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Evidence-Based</p>
              <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Runner's Guides
              </h1>
              <p className="mt-3 max-w-md text-base text-muted-foreground sm:text-lg">
                In-depth, science-backed articles to help you run better, recover faster and choose the right gear.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="overflow-hidden rounded-2xl"
            >
              <img src={guidesHeroImg} alt="Running gear flat lay" className="h-48 w-full object-cover sm:h-64 lg:h-72" loading="eager" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters & search */}
      <section className="container mx-auto px-4 pt-6 sm:pt-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search guides…"
            className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 sm:max-w-md"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Category chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all ${
              !activeCategory ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
            }`}
          >
            All
          </button>
          {categories.map((cat) => {
            const s = categoryStyle[cat] || categoryStyle.Gear;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(isActive ? null : cat)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  isActive ? `${s.badge} border-transparent` : `${s.border} ${s.text} hover:${s.bg}`
                }`}
              >
                <span className={`inline-block h-2 w-2 rounded-full ${isActive ? "bg-current opacity-60" : s.dot}`} />
                {cat}
              </button>
            );
          })}
        </div>

        <p className="mt-3 text-xs text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "guide" : "guides"} found
        </p>
      </section>

      {/* Guide list — varied layout */}
      <section className="container mx-auto px-4 py-8 sm:py-12">
        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-sm text-muted-foreground">No guides match your search. Try different keywords.</p>
          </div>
        )}

        {filtered.length > 0 && (
          <div className="space-y-8">
            {/* Featured article — large horizontal card */}
            {featured && (
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                <FeaturedCard guide={featured} />
              </motion.div>
            )}

            {/* Secondary articles — 2-col with accent left border */}
            {secondary.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2">
                {secondary.map((guide, i) => (
                  <motion.div
                    key={guide.slug}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <SecondaryCard guide={guide} />
                  </motion.div>
                ))}
              </div>
            )}

            {/* ZoneRun banner between sections */}
            {!isFiltered && (
              <ZoneRunBanner variant="inline" />
            )}

            {/* Remaining — compact list style */}
            {rest.length > 0 && (
              <div className="space-y-3">
                <h2 className="font-display text-lg font-bold text-foreground sm:text-xl">More Guides</h2>
                <div className="divide-y divide-border rounded-2xl border border-border bg-card overflow-hidden">
                  {rest.map((guide, i) => (
                    <motion.div
                      key={guide.slug}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03, duration: 0.3 }}
                    >
                      <CompactRow guide={guide} />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Cross-link to comparisons */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-border bg-secondary/50 p-5 sm:p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-sm font-bold text-foreground sm:text-base">Looking for product comparisons?</h3>
            <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">Side-by-side comparisons filtered by sport and goal.</p>
          </div>
          <Link to="/comparisons" className="shrink-0 text-sm font-bold text-primary hover:underline">
            View →
          </Link>
        </div>
      </section>
    </Layout>
  );
};

/* ── Featured Card (large, horizontal on desktop) ── */
function FeaturedCard({ guide }: { guide: typeof guides[0] }) {
  const s = categoryStyle[guide.category] || categoryStyle.Gear;
  return (
    <Link
      to={`/guides/${guide.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover sm:flex-row"
    >
      {/* Color accent strip */}
      <div className={`hidden sm:block w-1.5 shrink-0 ${s.badge}`} />

      {/* Gradient background on mobile */}
      <div className={`sm:hidden h-2 w-full ${s.badge}`} />

      <div className="flex flex-1 flex-col justify-center p-5 sm:p-8">
        <div className="flex items-center gap-3 mb-3">
          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${s.badge}`}>
            {guide.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" /> {guide.readTime}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
            <TrendingUp className="h-3 w-3" /> Featured
          </span>
        </div>
        <h2 className="font-display text-xl font-bold text-card-foreground transition-colors group-hover:text-primary sm:text-2xl lg:text-3xl">
          {guide.title}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base max-w-xl">{guide.excerpt}</p>
        <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
          Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}

/* ── Secondary Card (medium, with colored top border) ── */
function SecondaryCard({ guide }: { guide: typeof guides[0] }) {
  const s = categoryStyle[guide.category] || categoryStyle.Gear;
  return (
    <Link
      to={`/guides/${guide.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
    >
      <div className={`h-1.5 w-full ${s.badge}`} />
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${s.badge}`}>
            {guide.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" /> {guide.readTime}
          </span>
        </div>
        <h2 className="mb-2 font-display text-base font-bold text-card-foreground transition-colors group-hover:text-primary sm:text-lg">
          {guide.title}
        </h2>
        <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-2">{guide.excerpt}</p>
        <div className="flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
          Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}

/* ── Compact Row (minimal, list-style) ── */
function CompactRow({ guide }: { guide: typeof guides[0] }) {
  const s = categoryStyle[guide.category] || categoryStyle.Gear;
  return (
    <Link
      to={`/guides/${guide.slug}`}
      className="group flex items-center gap-4 px-4 py-3.5 sm:px-5 sm:py-4 transition-colors hover:bg-muted/50"
    >
      <span className={`hidden sm:inline-block h-3 w-3 shrink-0 rounded-full ${s.dot}`} />
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-card-foreground group-hover:text-primary transition-colors truncate sm:text-base">
          {guide.title}
        </h3>
        <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1 hidden sm:block">{guide.excerpt}</p>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <span className={`hidden sm:inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${s.bg} ${s.text}`}>
          {guide.category}
        </span>
        <span className={`sm:hidden inline-block h-2 w-2 rounded-full ${s.dot}`} />
        <span className="text-xs text-muted-foreground whitespace-nowrap hidden sm:inline">{guide.readTime}</span>
        <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>
    </Link>
  );
}

export default GuidesHub;
