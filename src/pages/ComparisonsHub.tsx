import { Link } from "react-router-dom";
import { ArrowRight, Filter } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
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
};

const ComparisonsHub = () => {
  const comparisons = comparisonsData as Comparison[];

  // Group by sport
  const grouped = comparisons.reduce<Record<string, Comparison[]>>((acc, c) => {
    if (!acc[c.sport]) acc[c.sport] = [];
    acc[c.sport].push(c);
    return acc;
  }, {});

  return (
    <Layout>
      <SEOHead
        title="Product Comparisons for Runners"
        description="Compare the best products for running and trail: supplements, shoes, accessories and recovery tools filtered by goal."
        path="/comparisons"
      />

      {/* Compact header with filter badge look */}
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

      <section className="container mx-auto px-4 py-8 sm:py-12">
        {Object.entries(grouped).map(([sport, items]) => (
          <div key={sport} className="mb-10 last:mb-0">
            <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold capitalize text-foreground sm:mb-6 sm:text-2xl">
              <span className="text-2xl">{sportEmoji[sport] || "🏅"}</span> {sport}
            </h2>

            {/* Horizontal scrollable on mobile, grid on desktop */}
            <div className="flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
              {items.map((c, i) => {
                const slug = `${c.categoria}-per-${c.sport}-${c.obiettivo}`;
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
                      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
                    >
                      <div className="mb-3 flex items-center gap-2">
                        <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${goalColors[c.obiettivo] || "bg-muted text-muted-foreground"}`}>
                          {c.obiettivo}
                        </span>
                        <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary-foreground">
                          {c.categoria}
                        </span>
                      </div>
                      <h3 className="mb-2 font-display text-base font-bold capitalize text-card-foreground">
                        {c.categoria} for {c.sport}
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
        ))}
      </section>
    </Layout>
  );
};

export default ComparisonsHub;
