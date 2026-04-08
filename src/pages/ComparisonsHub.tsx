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

const goalAccent: Record<string, { pill: string; border: string }> = {
  performance: { pill: "bg-primary/10 text-primary", border: "border-l-primary" },
  recupero: { pill: "bg-violet-500/10 text-violet-600", border: "border-l-violet-500" },
  idratazione: { pill: "bg-sky-500/10 text-sky-600", border: "border-l-sky-500" },
  dimagrimento: { pill: "bg-rose-500/10 text-rose-600", border: "border-l-rose-500" },
  "prevenzione-infortuni": { pill: "bg-amber-500/10 text-amber-700", border: "border-l-amber-500" },
  resistenza: { pill: "bg-emerald-500/10 text-emerald-700", border: "border-l-emerald-600" },
};

const ComparisonsHub = () => {
  const comparisons = comparisonsData as Comparison[];
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
        title="Best Product Comparisons 2026"
        description="Compare the best products for running and trail: supplements, shoes, accessories and recovery tools filtered by goal."
        path="/comparisons"
      />

      {/* Header */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="max-w-xl editorial-line">
            <h1 className="font-display text-display-lg font-bold text-foreground">Product Comparisons</h1>
            <p className="mt-2 text-muted-foreground sm:text-lg">
              Products compared by sport, goal and category — find exactly what you need.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mr-1">Filter:</span>

            {allSports.map((sport) => (
              <button
                key={sport}
                onClick={() => setFilterSport(filterSport === sport ? null : sport)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                  filterSport === sport ? "bg-foreground text-background" : "border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {sportEmoji[sport] || "🏅"} {translateSport(sport)}
              </button>
            ))}

            <span className="hidden sm:block h-4 w-px bg-border" />

            {allGoals.map((goal) => (
              <button
                key={goal}
                onClick={() => setFilterGoal(filterGoal === goal ? null : goal)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                  filterGoal === goal ? "bg-foreground text-background" : `${(goalAccent[goal] || goalAccent.performance).pill} hover:opacity-80`
                }`}
              >
                {translateGoal(goal)}
              </button>
            ))}

            <span className="hidden sm:block h-4 w-px bg-border" />

            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(filterCategory === cat ? null : cat)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                  filterCategory === cat ? "bg-foreground text-background" : "border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {translateCategory(cat)}
              </button>
            ))}

            {hasFilters && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-1 rounded-full bg-destructive/10 px-3 py-1.5 text-xs font-semibold text-destructive hover:bg-destructive/20"
              >
                <X className="h-3 w-3" /> Clear
              </button>
            )}
          </div>

          {hasFilters && (
            <p className="mt-2 text-xs text-muted-foreground">
              Showing {filtered.length} of {comparisons.length} comparisons
            </p>
          )}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 sm:py-16">
        {filtered.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-lg font-semibold text-muted-foreground">No comparisons match your filters.</p>
            <button onClick={clearFilters} className="mt-3 text-sm font-medium text-primary hover:underline">
              Clear all filters
            </button>
          </div>
        ) : (
          Object.entries(grouped).map(([sport, items]) => (
            <div key={sport} className="mb-12 last:mb-0">
              <h2 className="mb-5 flex items-center gap-2 font-display text-display-md font-bold text-foreground">
                <span className="text-2xl">{sportEmoji[sport] || "🏅"}</span> {translateSport(sport)}
              </h2>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((c, i) => {
                  const slug = `${c.categoria}-per-${c.sport}-${c.obiettivo}`;
                  const accent = goalAccent[c.obiettivo] || goalAccent.performance;
                  return (
                    <motion.div
                      key={slug}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.35 }}
                    >
                      <Link
                        to={`/comparison/${slug}`}
                        className={`group flex h-full flex-col rounded-lg border border-border border-l-4 ${accent.border} bg-card p-5 transition-all hover:shadow-card-hover`}
                      >
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                          <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${accent.pill}`}>
                            {translateGoal(c.obiettivo)}
                          </span>
                          <span className="rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                            {translateCategory(c.categoria)}
                          </span>
                        </div>
                        <h3 className="mb-2 font-display text-base font-bold capitalize text-card-foreground group-hover:text-primary">
                          {translateCategory(c.categoria)} for {translateSport(c.sport)}
                        </h3>
                        <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-3">{c.intro}</p>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5">
                          Compare <ArrowRight className="h-4 w-4" />
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))
        )}

        <div className="mt-10">
          <ZoneRunBanner variant="inline" />
        </div>
      </section>
    </Layout>
  );
};

export default ComparisonsHub;
