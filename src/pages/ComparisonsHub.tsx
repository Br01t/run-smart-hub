import { Link } from "react-router-dom";
import { ArrowRight, BarChart3 } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import comparisonsData from "@/data/comparisons.json";

interface Comparison {
  sport: string;
  obiettivo: string;
  categoria: string;
  intro: string;
}

const ComparisonsHub = () => {
  const comparisons = comparisonsData as Comparison[];

  return (
    <Layout>
      <SEOHead
        title="Product Comparisons for Runners"
        description="Compare the best products for running and trail: supplements, shoes, accessories and recovery tools filtered by goal."
        path="/comparisons"
      />
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="mb-8 sm:mb-10">
          <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">Product Comparisons</h1>
          <p className="mt-2 text-base text-muted-foreground sm:text-lg">
            Products filtered by sport, goal and category.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => {
            const slug = `${c.categoria}-per-${c.sport}-${c.obiettivo}`;
            return (
              <Link
                key={slug}
                to={`/comparison/${slug}`}
                className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 sm:p-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 sm:mb-4 sm:h-11 sm:w-11">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1 font-display text-sm font-semibold capitalize text-card-foreground sm:text-base">
                  {c.categoria} for {c.sport}
                </h3>
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-accent sm:mb-3">
                  {c.obiettivo}
                </p>
                <p className="mb-3 flex-1 text-sm text-muted-foreground line-clamp-2 sm:mb-4">{c.intro}</p>
                <div className="flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                  View comparison <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ComparisonsHub;
