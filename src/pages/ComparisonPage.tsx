import { useParams, Link } from "react-router-dom";
import { ArrowLeft, HelpCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import RecommendedProducts from "@/components/RecommendedProducts";
import comparisonsData from "@/data/comparisons.json";

interface Comparison {
  sport: string;
  obiettivo: string;
  categoria: string;
  intro: string;
  tags: string[];
  faq: { q: string; a: string }[];
}

const ComparisonPage = () => {
  const { slug } = useParams<{ slug: string }>();

  // Parse slug: "integratori-per-corsa-performance"
  const comparison = (comparisonsData as Comparison[]).find((c) => {
    const expectedSlug = `${c.categoria}-per-${c.sport}-${c.obiettivo}`;
    return expectedSlug === slug;
  });

  if (!comparison) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="font-display text-2xl font-bold text-foreground">Confronto non trovato</h1>
          <Link to="/confronti" className="mt-4 inline-block text-sm text-primary hover:underline">Vedi tutti i confronti</Link>
        </div>
      </Layout>
    );
  }

  const title = `Migliori ${comparison.categoria} per ${comparison.sport} – ${comparison.obiettivo}`;
  const description = comparison.intro.slice(0, 155);

  return (
    <Layout>
      <SEOHead title={title} description={description} path={`/confronto/${slug}`} />
      <div className="container mx-auto max-w-3xl px-4 py-8">
        <Link to="/confronti" className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Tutti i confronti
        </Link>

        <h1 className="mb-3 font-display text-2xl font-bold text-foreground capitalize sm:text-3xl">
          {title}
        </h1>
        <p className="mb-8 text-muted-foreground leading-relaxed">{comparison.intro}</p>

        <RecommendedProducts tags={comparison.tags} title={`${comparison.categoria} consigliati`} maxProducts={4} />

        {/* FAQ */}
        {comparison.faq.length > 0 && (
          <div className="mt-10">
            <h2 className="mb-5 flex items-center gap-2 font-display text-xl font-semibold text-foreground">
              <HelpCircle className="h-5 w-5 text-primary" /> Domande Frequenti
            </h2>
            <div className="space-y-4">
              {comparison.faq.map((item, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-5 shadow-card">
                  <h3 className="mb-2 font-display text-base font-semibold text-card-foreground">{item.q}</h3>
                  <p className="text-sm text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ComparisonPage;
