import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, BookOpen, Search, X } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import guidesHeroImg from "@/assets/guides-hero.jpg";
import ZoneRunBanner from "@/components/ZoneRunBanner";

const guides = [
  { slug: "choosing-running-shoes", title: "How to Choose Running Shoes", excerpt: "Complete guide to choosing the right running shoes: cushioning, drop, foot strike and terrain.", readTime: "6 min read", category: "Gear" },
  { slug: "supplements-for-runners", title: "Essential Supplements for Runners", excerpt: "Which supplements actually work? From vitamin D to magnesium, here's what the science says.", readTime: "8 min read", category: "Nutrition" },
  { slug: "muscle-recovery", title: "Muscle Recovery After Running", excerpt: "Stretching, foam rolling, nutrition and sleep: strategies to recover faster.", readTime: "7 min read", category: "Recovery" },
  { slug: "running-nutrition", title: "Running Nutrition: What to Eat Before, During & After", excerpt: "A complete guide to fueling your runs properly for optimal performance and recovery.", readTime: "9 min read", category: "Nutrition" },
  { slug: "injury-prevention", title: "Runner's Guide to Injury Prevention", excerpt: "Stay injury-free with the 10% rule, strength training and proper recovery techniques.", readTime: "7 min read", category: "Health" },
  { slug: "marathon-training", title: "Marathon Training Guide for Beginners", excerpt: "Everything you need to know for your first 42K: training plans, pacing and race day tips.", readTime: "10 min read", category: "Training" },
  { slug: "trail-running-beginners", title: "Getting Started with Trail Running", excerpt: "From gear to technique: a beginner's guide to hitting the trails safely and confidently.", readTime: "8 min read", category: "Trail" },
  { slug: "running-heart-rate-zones", title: "Heart Rate Zone Training for Runners", excerpt: "Use heart rate zones to train smarter: the 80/20 rule, max HR testing and more.", readTime: "7 min read", category: "Training" },
  { slug: "stretching-for-runners", title: "The Runner's Stretching Guide", excerpt: "Dynamic vs static stretching, when to stretch, and the best routines for injury prevention.", readTime: "7 min read", category: "Recovery" },
  { slug: "running-form", title: "How to Improve Your Running Form", excerpt: "Fix your posture, arm swing and foot strike to run more efficiently and avoid injuries.", readTime: "8 min read", category: "Training" },
  { slug: "running-cadence", title: "Running Cadence: Why Steps Per Minute Matter", excerpt: "Learn why 180 spm is the magic number and how to increase your cadence safely.", readTime: "6 min read", category: "Training" },
  { slug: "hill-training", title: "Hill Training for Runners", excerpt: "Uphill repeats, downhill technique and strength gains: the complete guide to hill workouts.", readTime: "8 min read", category: "Training" },
];

const categories = [...new Set(guides.map((g) => g.category))];

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

  return (
    <Layout>
      <SEOHead
        title="Runner's Guides"
        description="Practical, science-backed guides on running shoes, supplements and muscle recovery to improve your performance."
        path="/guides"
      />

      {/* Editorial hero */}
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
              <img src={guidesHeroImg} alt="Running gear flat lay" className="h-48 w-full object-cover sm:h-64 lg:h-72" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters & search */}
      <section className="container mx-auto px-4 pt-6 sm:pt-8">
        {/* Search bar */}
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
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              !activeCategory ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="mt-3 text-xs text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "guide" : "guides"} found
        </p>
      </section>

      {/* Guide list */}
      <section className="container mx-auto px-4 py-4 sm:py-6">
        <div className="divide-y divide-border">
          {filtered.map((guide, i) => (
            <motion.div
              key={guide.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <Link
                to={`/guides/${guide.slug}`}
                className="group flex items-start gap-4 py-6 transition-colors sm:gap-6 sm:py-8"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-bold text-primary sm:h-12 sm:w-12 sm:text-xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-3">
                    <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                      {guide.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" /> {guide.readTime}
                    </span>
                  </div>
                  <h2 className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary sm:text-xl lg:text-2xl">
                    {guide.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground sm:text-base">{guide.excerpt}</p>
                </div>
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-sm text-muted-foreground">No guides match your search. Try different keywords.</p>
            </div>
          )}
        </div>

        {/* ZoneRun banner */}
        <div className="mt-8">
          <ZoneRunBanner variant="inline" />
        </div>

        {/* Cross-link to comparisons */}
        <div className="mt-6 flex items-center gap-4 rounded-2xl border border-border bg-secondary/50 p-5 sm:p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
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

export default GuidesHub;
