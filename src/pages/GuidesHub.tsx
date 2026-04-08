import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, BookOpen, Search, X, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import guidesHeroImg from "@/assets/guides-hero.webp";
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

const categoryStyle: Record<string, { dot: string; badge: string; border: string }> = {
  Gear:      { dot: "bg-primary", badge: "bg-primary text-primary-foreground", border: "border-l-primary" },
  Nutrition: { dot: "bg-accent", badge: "bg-accent text-accent-foreground", border: "border-l-accent" },
  Recovery:  { dot: "bg-violet-500", badge: "bg-violet-600 text-white", border: "border-l-violet-500" },
  Health:    { dot: "bg-rose-500", badge: "bg-rose-600 text-white", border: "border-l-rose-500" },
  Training:  { dot: "bg-sky-500", badge: "bg-sky-600 text-white", border: "border-l-sky-500" },
  Trail:     { dot: "bg-emerald-600", badge: "bg-emerald-700 text-white", border: "border-l-emerald-600" },
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
  const featured = filtered[0];
  const secondary = filtered.slice(1, 3);
  const rest = filtered.slice(3);

  return (
    <Layout>
      <SEOHead
        title="Best Runner's Guides 2026"
        description="Practical, science-backed guides on running shoes, supplements and muscle recovery to improve your performance."
        path="/guides"
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={guidesHeroImg} alt="Running gear flat lay" width={1440} height={600} fetchPriority="high" loading="eager" decoding="async" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/40 to-foreground/80" />
        </div>
        <div className="relative container mx-auto px-4 py-16 sm:py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-xl">
            <span className="inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground/80 backdrop-blur-sm">
              Evidence-Based
            </span>
            <h1 className="mt-4 font-display text-display-lg font-bold text-primary-foreground">
              Runner's Guides
            </h1>
            <p className="mt-3 text-primary-foreground/70 sm:text-lg">
              In-depth, science-backed articles to help you run better, recover faster and choose the right gear.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & search */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <div className="relative flex-1 sm:max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search guides…"
                className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setActiveCategory(null)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                  !activeCategory ? "bg-foreground text-background" : "border border-border text-muted-foreground hover:text-foreground"
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
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                      isActive ? `${s.badge}` : "border border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className={`h-2 w-2 rounded-full ${isActive ? "bg-current opacity-60" : s.dot}`} />
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "guide" : "guides"} found
          </p>
        </div>
      </section>

      {/* Guide list */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-muted-foreground">No guides match your search. Try different keywords.</p>
          </div>
        )}

        {filtered.length > 0 && (
          <div className="space-y-10">
            {/* Featured */}
            {featured && (
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Link
                  to={`/guides/${featured.slug}`}
                  className="group relative block overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-card-hover"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className={`h-1.5 sm:h-auto sm:w-1.5 shrink-0 ${(categoryStyle[featured.category] || categoryStyle.Gear).badge}`} />
                    <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${(categoryStyle[featured.category] || categoryStyle.Gear).badge}`}>
                          {featured.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" />{featured.readTime}</span>
                        <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                          <TrendingUp className="h-3 w-3" /> Featured
                        </span>
                      </div>
                      <h2 className="font-display text-xl font-bold text-card-foreground group-hover:text-primary sm:text-2xl lg:text-3xl">
                        {featured.title}
                      </h2>
                      <p className="mt-2 max-w-xl text-muted-foreground">{featured.excerpt}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5">
                        Read guide <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Secondary — 2 col */}
            {secondary.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2">
                {secondary.map((guide, i) => {
                  const s = categoryStyle[guide.category] || categoryStyle.Gear;
                  return (
                    <motion.div key={guide.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                      <Link
                        to={`/guides/${guide.slug}`}
                        className={`group flex h-full flex-col rounded-xl border border-border border-l-4 ${s.border} bg-card p-5 transition-all hover:shadow-card-hover`}
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${s.badge}`}>{guide.category}</span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" />{guide.readTime}</span>
                        </div>
                        <h2 className="mb-2 font-display text-base font-bold text-card-foreground group-hover:text-primary sm:text-lg">{guide.title}</h2>
                        <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-2">{guide.excerpt}</p>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5">
                          Read guide <ArrowRight className="h-4 w-4" />
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {!isFiltered && <ZoneRunBanner variant="inline" />}

            {/* Rest — compact rows */}
            {rest.length > 0 && (
              <div>
                <h2 className="editorial-line font-display text-display-md font-bold text-foreground">More Guides</h2>
                <div className="mt-4 divide-y divide-border rounded-lg border border-border bg-card overflow-hidden">
                  {rest.map((guide, i) => {
                    const s = categoryStyle[guide.category] || categoryStyle.Gear;
                    return (
                      <motion.div key={guide.slug} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>
                        <Link
                          to={`/guides/${guide.slug}`}
                          className="group flex items-center gap-4 px-4 py-3.5 sm:px-5 transition-colors hover:bg-muted/50"
                        >
                          <span className={`hidden sm:block h-2.5 w-2.5 shrink-0 rounded-full ${s.dot}`} />
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-card-foreground group-hover:text-primary truncate sm:text-base">{guide.title}</h3>
                            <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1 hidden sm:block">{guide.excerpt}</p>
                          </div>
                          <span className="hidden sm:inline text-xs text-muted-foreground whitespace-nowrap">{guide.readTime}</span>
                          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/40 group-hover:text-primary" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Cross-link */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-lg border border-border bg-muted/30 p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-sm font-bold text-foreground">Looking for product comparisons?</h3>
            <p className="mt-0.5 text-xs text-muted-foreground">Side-by-side comparisons filtered by sport and goal.</p>
          </div>
          <Link to="/comparisons" className="shrink-0 text-sm font-bold text-primary hover:underline">View →</Link>
        </div>
      </section>
    </Layout>
  );
};

export default GuidesHub;
