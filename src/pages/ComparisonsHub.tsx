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
        title="Confronti Prodotti per Runner"
        description="Confronta i migliori prodotti per corsa e trail: integratori, scarpe, accessori e strumenti di recupero filtrati per obiettivo."
        path="/confronti"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">Confronti Prodotti</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Prodotti filtrati per sport, obiettivo e categoria.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => {
            const slug = `${c.categoria}-per-${c.sport}-${c.obiettivo}`;
            return (
              <Link
                key={slug}
                to={`/confronto/${slug}`}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1 font-display text-base font-semibold capitalize text-card-foreground">
                  {c.categoria} per {c.sport}
                </h3>
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-accent">
                  {c.obiettivo}
                </p>
                <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-2">{c.intro}</p>
                <div className="flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                  Vedi confronto <ArrowRight className="h-4 w-4" />
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
