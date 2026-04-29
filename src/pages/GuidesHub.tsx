import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, BookOpen, Search, X, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import guidesHeroImg from "@/assets/guides-hero.webp";
import ZoneRunBanner from "@/components/ZoneRunBanner";

import { guidesList as guides } from "@/data/guides/summaries";
import { FeaturedGuideCard, SecondaryGuideCard, CompactGuideRow, categoryStyle } from "@/components/guides/GuideCards";

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

  const isFiltered = !!search || !!activeCategory;
  const featured = filtered[0];
  const secondary = filtered.slice(1, 3);
  const rest = filtered.slice(3);

  return (
    <Layout>
      <SEO
        title="Le Migliori Guide per Runner 2026"
        description="Guide pratiche basate sulla scienza su scarpe da corsa, integratori e recupero muscolare per migliorare le tue prestazioni."
        path="/guides"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Guide Esperti per Runner",
          "description": "Base di conoscenza completa per runner che copre nutrizione, attrezzatura, recupero e biomeccanica.",
          "url": "https://www.runners-hub.org/guides",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": guides.map((guide, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "url": `https://www.runners-hub.org/guides/${guide.slug}`,
              "name": guide.title
            }))
          }
        }}
        faq={[
          { q: "Quali sono le migliori guide per l'allenamento della corsa?", a: "Runners Hub offre oltre 15 guide scientifiche gratuite redatte da esperti. Le più lette includono la Guida all'Allenamento per Maratona, le Strategie di Idratazione e la Prevenzione degli Infortuni." },
          { q: "Dove posso trovare consigli affidabili sulla nutrizione per runner?", a: "Nella nostra sezione Guide puoi filtrare per 'Nutrizione' e leggere analisi dettagliate su proteine, carboidrati, integrazione in gara e strategie per ottimizzare la tua dieta da corridore." },
          { q: "Come prepararsi e allenarsi per una maratona?", a: "La nostra 'Guida all'Allenamento per la Maratona' fornisce una progressione settimanale, consigli sul taper e strategie di carico dei carboidrati basate sugli ultimi protocolli di endurance." },
          { q: "Come allenarsi con le zone cardio e frequenza cardiaca?", a: "Abbiamo una guida dedicata che spiega esattamente come calcolare la tua Zona 2 (corsa facile), Zona 3 (tempo run) e Zona 4 (soglia), per ottimizzare il metabolismo dei grassi e la resistenza." },
          { q: "Come prevenire gli infortuni nella corsa?", a: "La nostra guida sulla 'Prevenzione Infortuni' tratta l'importanza della cadenza, dell'allenamento della forza per i glutei, e di come ruotare le scarpe per ridurre il carico ripetitivo sulle ginocchia." }
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={guidesHeroImg} alt="Attrezzatura da corsa" width={1440} height={600} fetchPriority="high" loading="eager" decoding="async" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/40 to-foreground/80" />
        </div>
        <div className="relative container mx-auto px-4 py-16 sm:py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-xl">
            <span className="inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground/80 backdrop-blur-sm">
              Basato sulla Scienza
            </span>
            <h1 className="mt-4 font-display text-display-lg font-bold text-primary-foreground">
              Guide per Runner
            </h1>
            <p className="mt-3 text-primary-foreground/70 sm:text-lg">
              Articoli approfonditi e scientifici per aiutarti a correre meglio, recuperare più velocemente e scegliere l'attrezzatura giusta.
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
                placeholder="Cerca guide…"
                className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 inner-glow transition-all"
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
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all shadow-sm ${
                  !activeCategory ? "bg-foreground text-background" : "border border-border text-muted-foreground hover:bg-muted/50"
                }`}
              >
                Tutte
              </button>
              {categories.map((cat) => {
                const s = categoryStyle[cat] || categoryStyle.Attrezzatura;
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(isActive ? null : cat)}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all shadow-sm ${
                      isActive ? `${s.badge}` : "border border-border text-muted-foreground hover:bg-muted/50"
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
            {filtered.length} {filtered.length === 1 ? "guida trovata" : "guide trovate"}
          </p>
        </div>
      </section>

      {/* Guide list */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-muted-foreground">Nessuna guida corrisponde alla tua ricerca. Prova parole chiave diverse.</p>
          </div>
        )}

        {filtered.length > 0 && (
          <div className="space-y-10">
            {/* Featured */}
            {featured && <FeaturedGuideCard guide={featured} />}

            {/* Secondary — 2 col */}
            {secondary.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2">
                {secondary.map((guide, i) => (
                  <SecondaryGuideCard key={guide.slug} guide={guide} index={i} />
                ))}
              </div>
            )}

            {/* Rest — compact rows */}
            {rest.length > 0 && (
              <div>
                <h2 className="editorial-line font-display text-display-md font-bold text-foreground">Altre Guide</h2>
                <div className="mt-4 divide-y divide-border rounded-lg border border-border bg-card overflow-hidden">
                  {rest.map((guide, i) => (
                    <CompactGuideRow key={guide.slug} guide={guide} index={i} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Cross-link */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-border bg-muted/30 p-5 shadow-sm inner-glow">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-sm font-bold text-foreground">Cerchi confronti tra prodotti?</h3>
            <p className="mt-0.5 text-xs text-muted-foreground">Confronti tecnici filtrati per sport e obiettivo.</p>
          </div>
          <Link to="/hub" className="shrink-0 text-sm font-bold text-primary hover:underline">Vedi →</Link>
        </div>

        {!isFiltered && (
          <div className="mt-10">
            <ZoneRunBanner variant="inline" />
          </div>
        )}
      </section>
    </Layout>
  );
};

export default GuidesHub;
