import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Filter, X } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import ZoneRunBanner from "@/components/ZoneRunBanner";
import { translateCategory, translateSport, translateGoal } from "@/lib/translations";
import comparisonsData from "@/data/comparisons.json";

interface Comparison {
  sport: string;
  obiettivo: string;
  categoria: string;
  intro: string;
}

const sportEmoji: Record<string, string> = { corsa: "🏃", trail: "🏔️" };
const goalColors: Record<string, string> = {
  performance: "bg-primary/10 text-primary",
  recupero: "bg-violet-500/10 text-violet-600",
  idratazione: "bg-sky-500/10 text-sky-600",
  dimagrimento: "bg-rose-500/10 text-rose-600",
  "prevenzione-infortuni": "bg-amber-500/10 text-amber-700",
  resistenza: "bg-emerald-500/10 text-emerald-700",
};

const ComparisonsHub = () => {
  const comparisons = comparisonsData as Comparison[];

  // Extract unique filter values
  const allSports = useMemo(() => [...new Set(comparisons.map((c) => c.sport))], [comparisons]);
  const allGoals = useMemo(() => [...new Set(comparisons.map((c) => c.obiettivo))], [comparisons]);
  const allCategories = useMemo(() => [...new Set(comparisons.map((c) => c.categoria))], [comparisons]);

  const [filterSport, setFilterSport] = useState<string | null>(null);
  const [filterGoal, setFilterGoal] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string | null>(null);

  const hasFilters = filterSport || filterGoal || filterCategory;

  const filtered = useMemo(() => {
    return comparisons.filter((c) => {
      if (filterSport && c.sport !== filterSport) return false;
      if (filterGoal && c.obiettivo !== filterGoal) return false;
      if (filterCategory && c.categoria !== filterCategory) return false;
      return true;
    });
  }, [comparisons, filterSport, filterGoal, filterCategory]);

  // Group by sport
  const grouped = filtered.reduce<Record<string, Comparison[]>>((acc, c) => {
    if (!acc[c.sport]) acc[c.sport] = [];
    acc[c.sport].push(c);
    return acc;
  }, {});

  const clearFilters = () => {
    setFilterSport(null);
    setFilterGoal(null);
    setFilterCategory(null);
  };

  return (
    <Layout>
      <SEOHead
        title="Product Comparisons for Runners"
        description="Compare the best products for running and trail: supplements, shoes, accessories and recovery tools filtered by goal."
        path="/comparisons"
      />

      {/* Header */}
      <section className="border-b border-border bg-secondary/30">
        <div className="container mx-auto px-4 py-8 sm:py-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-hero">
              <Filter className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">Product Comparisons</h1>
              <p className="mt-1 text-base text-muted-foreground sm:text-lg">
                Products compared by sport, goal and category.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 sm:py-5">
          <div className="space-y-3 sm:space-y-0 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Filter by:</span>

            {/* Sport filter */}
            <div className="flex flex-wrap gap-1.5">
              {allSports.map((sport) => (
                <button
                  key={sport}
                  onClick={() => setFilterSport(filterSport === sport ? null : sport)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                    filterSport === sport
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {sportEmoji[sport] || "🏅"} {translateSport(sport)}
                </button>
              ))}
            </div>

            <div className="hidden sm:block h-5 w-px bg-border" />

            {/* Goal filter */}
            <div className="flex flex-wrap gap-1.5">
              {allGoals.map((goal) => (
                <button
                  key={goal}
                  onClick={() => setFilterGoal(filterGoal === goal ? null : goal)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                    filterGoal === goal
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : `${goalColors[goal] || "bg-muted text-muted-foreground"} hover:opacity-80`
                  }`}
                >
                  {translateGoal(goal)}
                </button>
              ))}
            </div>

            <div className="hidden sm:block h-5 w-px bg-border" />

            {/* Category filter */}
            <div className="flex flex-wrap gap-1.5">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(filterCategory === cat ? null : cat)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                    filterCategory === cat
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {translateCategory(cat)}
                </button>
              ))}
            </div>

            {hasFilters && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-1 rounded-full bg-destructive/10 px-3 py-1.5 text-xs font-semibold text-destructive transition-colors hover:bg-destructive/20"
              >
                <X className="h-3 w-3" /> Clear
              </button>
            )}
          </div>

          {hasFilters && (
            <p className="mt-3 text-xs text-muted-foreground">
              Showing {filtered.length} of {comparisons.length} comparisons
            </p>
          )}
        </div>
      </section>

      <section className="container mx-auto px-4 py-10 sm:py-14">
        {filtered.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-lg font-semibold text-muted-foreground">No comparisons match your filters.</p>
            <button onClick={clearFilters} className="mt-3 text-sm font-medium text-primary hover:underline">
              Clear all filters
            </button>
          </div>
        ) : (
          Object.entries(grouped).map(([sport, items]) => (
            <div key={sport} className="mb-10 last:mb-0">
              <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold capitalize text-foreground sm:mb-6 sm:text-2xl">
                <span className="text-2xl">{sportEmoji[sport] || "🏅"}</span> {translateSport(sport)}
              </h2>

              <div className="flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
                {items.map((c, i) => {
                  const slug = `${c.categoria}-per-${c.sport}-${c.obiettivo}`;
                  const goalBg: Record<string, string> = {
                    performance: "from-primary/5 to-primary/10 border-primary/20",
                    recupero: "from-violet-500/5 to-violet-500/10 border-violet-400/20",
                    idratazione: "from-sky-500/5 to-sky-500/10 border-sky-400/20",
                    dimagrimento: "from-rose-500/5 to-rose-500/10 border-rose-400/20",
                    "prevenzione-infortuni": "from-amber-500/5 to-amber-500/10 border-amber-400/20",
                    resistenza: "from-emerald-500/5 to-emerald-500/10 border-emerald-400/20",
                  };
                  return (
                    <motion.div
                      key={slug}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      className="min-w-[260px] flex-shrink-0 sm:min-w-0"
                    >
                      <Link
                        to={`/comparison/${slug}`}
                        className={`group flex h-full flex-col rounded-2xl border bg-gradient-to-br p-5 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 ${goalBg[c.obiettivo] || "from-muted/50 to-muted border-border"}`}
                      >
                        <div className="mb-3 flex items-center gap-2">
                          <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${goalColors[c.obiettivo] || "bg-muted text-muted-foreground"}`}>
                            {translateGoal(c.obiettivo)}
                          </span>
                          <span className="rounded-full bg-card/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-card-foreground">
                            {translateCategory(c.categoria)}
                          </span>
                        </div>
                        <h3 className="mb-2 font-display text-base font-bold capitalize text-foreground">
                          {translateCategory(c.categoria)} for {translateSport(c.sport)}
                        </h3>
                        <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-3">{c.intro}</p>
                        <div className="flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                          Compare <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))
        )}

        {/* ZoneRun Banner */}
        <div className="mt-8">
          <ZoneRunBanner variant="inline" />
        </div>
      </section>
    </Layout>
  );
};

export default ComparisonsHub;
