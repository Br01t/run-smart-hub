import { useParams, Link } from "react-router-dom";
import { ArrowLeft, HelpCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import RecommendedProducts from "@/components/RecommendedProducts";
import comparisonsData from "@/data/comparisons.json";
import productsData from "@/data/products.json";

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

  const comparison = (comparisonsData as Comparison[]).find((c) => {
    const expectedSlug = `${c.categoria}-per-${c.sport}-${c.obiettivo}`;
    return expectedSlug === slug;
  });

  if (!comparison) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="font-display text-2xl font-bold text-foreground">Comparison not found</h1>
          <Link to="/comparisons" className="mt-4 inline-block text-sm text-primary hover:underline">View all comparisons</Link>
        </div>
      </Layout>
    );
  }

  const title = `Best ${comparison.categoria} for ${comparison.sport} – ${comparison.obiettivo}`;
  const description = comparison.intro.slice(0, 155);

  const matchedProducts = (productsData as { id: string; nome: string; descrizione: string; prezzoRange: string; linkAffiliato: string; immagine: string; tag: string[] }[])
    .filter((p) => p.tag.some((t) => comparison.tags.includes(t)));

  const faqJsonLd = comparison.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: comparison.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  } : null;

  const productJsonLd = matchedProducts.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    itemListElement: matchedProducts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.nome,
        description: p.descrizione,
        image: p.immagine,
        url: p.linkAffiliato,
      },
    })),
  } : null;

  return (
    <Layout>
      <SEOHead title={title} description={description} path={`/comparison/${slug}`} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}
      {productJsonLd && <JsonLd data={productJsonLd} />}
      <div className="container mx-auto max-w-3xl px-4 py-6 sm:py-8">
        <Link to="/comparisons" className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:mb-6">
          <ArrowLeft className="h-4 w-4" /> All comparisons
        </Link>

        <h1 className="mb-3 font-display text-xl font-bold text-foreground capitalize sm:text-2xl lg:text-3xl">
          {title}
        </h1>
        <p className="mb-6 text-sm text-muted-foreground leading-relaxed sm:mb-8 sm:text-base">{comparison.intro}</p>

        <RecommendedProducts tags={comparison.tags} title={`Recommended ${comparison.categoria}`} maxProducts={4} />

        {comparison.faq.length > 0 && (
          <div className="mt-8 sm:mt-10">
            <h2 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-foreground sm:mb-5 sm:text-xl">
              <HelpCircle className="h-5 w-5 text-primary" /> Frequently Asked Questions
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {comparison.faq.map((item, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-4 shadow-card sm:p-5">
                  <h3 className="mb-1.5 font-display text-sm font-semibold text-card-foreground sm:mb-2 sm:text-base">{item.q}</h3>
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
