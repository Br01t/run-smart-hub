import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  User, Sparkles, Wrench, BookOpen, ArrowRight, RotateCcw 
} from "lucide-react";
import { ProfileResult, QuizQuestion } from "@/types/quiz";
import { Answers } from "./QuizStep";
import { IconRenderer } from "@/components/ui/IconRenderer";
import productsData from "@/data/products.json";
import { Product } from "@/components/ProductCard";
import RecommendedProducts from "@/components/RecommendedProducts";
import ZoneRunBanner from "@/components/ZoneRunBanner";
import { shoeSpecs } from "@/data/specs/shoes";
import { supplementSpecs } from "@/data/specs/supplements";

interface QuizResultsProps {
  profile: ProfileResult;
  questions: QuizQuestion[];
  answers: Answers;
  onRetake: () => void;
}

const QuizResults = ({ profile, questions, answers, onRetake }: QuizResultsProps) => {
  // Logic to find specific top-tier products based on archetype/tags
  const getTopPicks = () => {
    const all = productsData as Product[];
    
    // Helper to extract a number from price range string for sorting
    const getPriceValue = (priceStr: string) => {
      const numbers = priceStr.match(/\d+/g);
      if (!numbers) return 0;
      return Math.max(...numbers.map(Number));
    };

    // Prioritize products that match tags AND are higher value/important categories
    const scored = all
      .map(p => {
        const matchCount = p.tag.filter(t => profile.tags.includes(t)).length;
        const priceValue = getPriceValue(p.prezzoRange);
        const category = p.category || (p as any).categoria;
        
        // Boost factor for high-impact categories (shoes, watches/electronics)
        let importanceBoost = 1;
        if (category === "shoes") importanceBoost = 1.8; // Reduced boost to allow variety
        if (category === "accessories" && p.tag.includes("orologi")) importanceBoost = 2; 
        if (category === "accessories" && p.tag.includes("hydration")) importanceBoost = 1.3;

        // Try to find official specs
        const shoeSpec = shoeSpecs.find(s => s.name.toLowerCase().includes(p.nome.toLowerCase()) || p.nome.toLowerCase().includes(s.name.toLowerCase()));
        const suppSpec = supplementSpecs.find(s => s.name.toLowerCase().includes(p.nome.toLowerCase()) || p.nome.toLowerCase().includes(s.name.toLowerCase()));

        return {
          ...p,
          matchCount,
          priceValue,
          specs: shoeSpec || suppSpec,
          // Final score uses exponential relevance + linear importance/price
          // Relevance (matchCount) is now the absolute king
          finalScore: (Math.pow(matchCount, 3)) * importanceBoost * (1 + priceValue / 2000)
        };
      })
      .filter(p => p.matchCount > 0)
      .sort((a, b) => b.finalScore - a.finalScore);

    // Try to pick products from different categories for variety
    const picks: any[] = [];
    const usedCategories = new Set<string>();

    for (const p of scored) {
      const category = p.category || (p as any).categoria;
      if (!usedCategories.has(category)) {
        picks.push(p);
        usedCategories.add(category);
      }
      if (picks.length >= 2) break;
    }

    // Fallback if we couldn't find different categories
    if (picks.length < 2 && scored.length > picks.length) {
      for (const p of scored) {
        if (!picks.find(x => x.id === p.id)) {
          picks.push(p);
        }
        if (picks.length >= 2) break;
      }
    }

    return picks;
  };

  const topPicks = getTopPicks();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/10" />
        <div className="absolute inset-0 texture-noise" />
        <div className="relative container mx-auto max-w-3xl px-4 py-12 sm:py-16 text-center">
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 180 }}
            className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-3xl bg-card shadow-xl border border-border text-5xl sm:h-28 sm:w-28 sm:text-6xl"
          >
            {profile.archetype}
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Il Tuo Profilo Runner</p>
            <h1 className="font-display text-display-lg font-extrabold text-foreground">
              {profile.title}
            </h1>
            <div className="editorial-line mx-auto mt-4" />
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground sm:text-base leading-relaxed">
              {profile.description}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto max-w-3xl px-4 py-8 sm:py-12 space-y-12">
        {/* Summary Cards */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
          <h2 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <User className="h-5 w-5 text-primary" /> Le Tue Risposte
          </h2>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
            {questions.map((q, i) => {
              const answer = answers[q.id];
              const opt = q.options.find((o) => o.value === answer);
              const colors = ["border-l-primary", "border-l-accent", "border-l-warm", "border-l-cool", "border-l-success", "border-l-primary", "border-l-accent"];
              return (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className={`rounded-xl border border-border bg-card p-3 border-l-4 ${colors[i % colors.length]}`}
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{q.label}</p>
                  <p className="mt-0.5 text-sm font-bold text-foreground">{opt?.label || "Sconosciuto"}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Tips */}
        {profile.tips.length > 0 && (
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.55 }}>
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-accent/5 p-5 sm:p-7 shadow-sm">
              <h2 className="mb-5 flex items-center gap-2 font-display text-lg font-bold text-foreground">
                <Sparkles className="h-5 w-5 text-primary" /> Il Tuo Piano Personalizzato
              </h2>
              <div className="space-y-4">
                {profile.tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </div>
                    <p className="text-sm text-foreground leading-relaxed sm:text-base pt-0.5">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Top Picks Hero Section */}
        {topPicks.length > 0 && (
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-border" />
              <h2 className="font-display text-xs font-bold uppercase tracking-widest text-muted-foreground">Selezione Esperti</h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {topPicks.map((product) => (
                <div key={product.id} className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-primary/10 bg-card transition-all hover:border-primary/30 hover:shadow-float card-depth">
                  <div className="absolute top-4 right-4 z-10 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary uppercase tracking-tighter">Scelta Top</div>
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img src={product.immagine} alt={product.nome} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary">{product.brand}</p>
                    <h4 className="mt-1 font-display text-base font-bold text-foreground">{product.nome}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">{product.descrizione}</p>
                    
                    {/* Technical Specs */}
                    {product.specs && (
                      <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border pt-4">
                        {product.specs.weight && (
                          <div className="flex flex-col">
                            <span className="text-[9px] uppercase tracking-wider text-muted-foreground">Peso</span>
                            <span className="text-xs font-bold text-foreground">{product.specs.weight}</span>
                          </div>
                        )}
                        {product.specs.drop && (
                          <div className="flex flex-col">
                            <span className="text-[9px] uppercase tracking-wider text-muted-foreground">Drop</span>
                            <span className="text-xs font-bold text-foreground">{product.specs.drop}</span>
                          </div>
                        )}
                        {product.specs.absorption && (
                          <div className="flex flex-col">
                            <span className="text-[9px] uppercase tracking-wider text-muted-foreground">Assorbimento</span>
                            <span className="text-xs font-bold text-foreground">{product.specs.absorption}</span>
                          </div>
                        )}
                        {product.specs.timing && (
                          <div className="flex flex-col">
                            <span className="text-[9px] uppercase tracking-wider text-muted-foreground">Tempismo</span>
                            <span className="text-xs font-bold text-foreground">{product.specs.timing}</span>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="mt-auto pt-5 flex items-center justify-between border-t border-border">
                      <span className="text-sm font-bold text-foreground">{product.prezzoRange}</span>
                      <a href={product.linkAffiliato} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90">
                        Store Ufficiale <ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tools + Guides */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Tools */}
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.65 }}
            className="rounded-2xl border border-border bg-card p-5 sm:p-6"
          >
            <h2 className="mb-4 flex items-center gap-2 font-display text-base font-bold text-card-foreground sm:text-lg">
              <Wrench className="h-5 w-5 text-primary" /> Strumenti Raccomandati
            </h2>
            <div className="space-y-2">
              {profile.tools.map((tool) => (
                <Link
                  key={tool.to}
                  to={tool.to}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-background p-3.5 transition-all hover:border-primary/30 hover:shadow-sm hover:-translate-y-0.5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <IconRenderer name={tool.icon} className="h-4 w-4" />
                  </div>
                  <span className="flex-1 text-sm font-medium text-foreground">{tool.label}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Guides */}
          {profile.guides.length > 0 && (
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.75 }}
              className="rounded-2xl border border-border bg-card p-5 sm:p-6"
            >
              <h2 className="mb-4 flex items-center gap-2 font-display text-base font-bold text-card-foreground sm:text-lg">
                <BookOpen className="h-5 w-5 text-primary" /> Letture Consigliate
              </h2>
              <div className="space-y-2">
                {profile.guides.map((guide) => (
                  <Link
                    key={guide.slug}
                    to={`/guides/${guide.slug}`}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-background p-3.5 transition-all hover:border-primary/30 hover:shadow-sm hover:-translate-y-0.5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <span className="flex-1 text-sm font-medium text-foreground">{guide.label}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Full Recommended Products Section */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.85 }}>
          <RecommendedProducts tags={profile.tags} title="Hub Attrezzatura Personalizzato" maxProducts={6} />
        </motion.div>

        {/* Retake */}
        <div className="flex items-center justify-center">
          <button
            onClick={onRetake}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-muted-foreground transition-all hover:text-foreground hover:shadow-md hover:-translate-y-0.5"
          >
            <RotateCcw className="h-4 w-4" /> Rifai il Quiz
          </button>
        </div>

        {/* ZoneRun */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.95 }} className="pt-8">
          <ZoneRunBanner variant="inline" />
        </motion.div>
      </div>

    </motion.div>
  );
};

export default QuizResults;
