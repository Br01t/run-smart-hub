import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ChevronRight, 
  BarChart3, 
  BookOpen, 
  Wrench,
} from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import RecommendedProducts from "@/components/RecommendedProducts";
import ZoneRunBanner from "@/components/ZoneRunBanner";
import ShoeComparisonTable from "@/components/ShoeComparisonTable";
import SupplementComparisonTable from "@/components/SupplementComparisonTable";
import GearComparisonTable from "@/components/GearComparisonTable";
import ApparelComparisonTable from "@/components/ApparelComparisonTable";
import RecoveryComparisonTable from "@/components/RecoveryComparisonTable";

import comparisonsData from "@/data/comparisons.json";
import { categoryGuides } from "@/data/categoryGuides";

const categories = ["shoes", "supplements", "hydration", "recovery", "apparel"];

const MasterHub = () => {
  // Category theme colors for vibrant UI
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "shoes": return "hsl(25, 95%, 50%)"; // Amber/Orange
      case "supplements": return "hsl(270, 70%, 60%)"; // Purple
      case "hydration": return "hsl(190, 90%, 45%)"; // Cyan/Sky
      case "recovery": return "hsl(150, 80%, 35%)"; // Emerald
      case "apparel": return "hsl(230, 80%, 60%)"; // Indigo
      default: return "hsl(var(--primary))";
    }
  };

  // Filter hubs and comparisons based on category only and deduplicate by objective
  const getComparisonsForCategory = (category: string) => {
    const matched = (comparisonsData as any[]).filter(c => {
      const normalizedCat = category === "hydration" ? "accessori" : category;
      
      // Filter out the redundant focus cards requested by user
      const isRedundant = (c.obiettivo === "idratazione" || c.obiettivo === "performance") && normalizedCat === "accessori";
      
      return c.categoria === normalizedCat && !isRedundant;
    });
    
    // Deduplicate by objective (pick the first one found)
    const uniqueObjectives = new Map();
    matched.forEach(item => {
      if (!uniqueObjectives.has(item.obiettivo)) {
        uniqueObjectives.set(item.obiettivo, item);
      }
    });
    
    return Array.from(uniqueObjectives.values());
  };

  // Mapping English category keys to the tags used in products.json (which are mostly Italian)
  const categoryProductTags: Record<string, string[]> = {
    shoes: ["scarpe", "shoes"],
    supplements: ["integratori", "supplements"],
    hydration: ["idratazione", "accessori", "hydration"],
    recovery: ["recupero", "recovery"],
    apparel: ["abbigliamento", "apparel"]
  };

  return (
    <Layout>
      <SEOHead 
        title="Best Running Gear Comparisons & Product Hub 2026" 
        description="The ultimate dashboard for runners. Science-backed technical guides, side-by-side product comparisons, and expert recommendations for shoes, supplements, and recovery."
        path="/hub"
      />

      {/* Floating Category Nav (Desktop) */}
      <nav className="sticky top-[72px] z-30 hidden border-b border-border bg-background/80 backdrop-blur-md lg:block">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-8 py-4">
            {categories.map((cat) => (
              <a 
                key={cat} 
                href={`#${cat}`}
                className="text-xs font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="container mx-auto max-w-7xl px-4 py-8 sm:py-16">
        <header className="mb-16 editorial-line">
          <h1 className="font-display text-display-xl font-bold text-foreground">
            Master Gear & <br/>Supplement Guide
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            A comprehensive dashboard combining scientific analysis, technical comparisons, and curated product selections to optimize every aspect of your running performance.
          </p>
        </header>

        <div className="space-y-32">
          {categories.map((catKey) => {
            const guide = categoryGuides[catKey === "hydration" ? "hydration" : catKey === "shoes" ? "shoes" : catKey === "supplements" ? "supplements" : catKey === "recovery" ? "recovery" : "apparel"];
            const matchedComparisons = getComparisonsForCategory(catKey);
            
            const accentColor = getCategoryColor(catKey);
            
            return (
              <section key={catKey} id={catKey} className="scroll-mt-32">
                <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-20">
                  {/* Left Column: Main Content */}
                  <div>
                    <div className="mb-8 items-end justify-between sm:flex border-b border-border pb-6">
                      <div className="editorial-line">
                        <span 
                          className="text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500"
                          style={{ color: accentColor }}
                        >
                          0{categories.indexOf(catKey) + 1} / {catKey}
                        </span>
                        <h2 className="mt-2 font-display text-display-md font-bold text-foreground capitalize">
                          {guide?.title || catKey}
                        </h2>
                      </div>
                    </div>

                    {/* Scientific Guide Card */}
                    {guide && (
                      <div className="mb-12 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                        <div className="grid md:grid-cols-[1fr_1.5fr]">
                          <div 
                            className="p-8 sm:p-10 transition-colors duration-500"
                            style={{ backgroundColor: `${accentColor}10` }}
                          >
                            <h3 className="font-display text-xl font-bold text-foreground">
                              {guide.scientificTitle}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                              {guide.scientificDescription}
                            </p>
                          </div>
                          <div className="p-8 sm:p-10">
                            <div className="grid gap-6 sm:grid-cols-2">
                              {guide.pillars.map((pillar) => (
                                <div key={pillar.title}>
                                  <h4 
                                    className="text-xs font-bold uppercase tracking-wider transition-colors duration-500"
                                    style={{ color: accentColor }}
                                  >
                                    {pillar.title}
                                  </h4>
                                  <p className="mt-1 text-[11px] leading-normal text-muted-foreground">{pillar.description}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Comparison Tables Section */}
                    <div className="space-y-12">
                      <div className="flex items-center justify-between border-b border-border pb-4">
                        <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
                          <BarChart3 className="h-5 w-5 opacity-40" /> Technical Comparison
                        </h3>
                      </div>

                      {/* Render appropriate table based on category */}
                      {catKey === "shoes" && <ShoeComparisonTable accentColor={accentColor} />}
                      {catKey === "supplements" && <SupplementComparisonTable accentColor={accentColor} />}
                      {catKey === "hydration" && <GearComparisonTable accentColor={accentColor} />}
                      {catKey === "recovery" && <RecoveryComparisonTable accentColor={accentColor} />}
                      {catKey === "apparel" && <ApparelComparisonTable accentColor={accentColor} />}

                      {/* Goal-specific Intros (from comparisons.json) */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        {matchedComparisons.map((c) => (
                          <div key={c.obiettivo} className="rounded-2xl border border-border bg-muted/30 p-5">
                            <div className="mb-3 flex items-center justify-between">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Focus: {c.obiettivo}</span>
                              <BarChart3 className="h-3.5 w-3.5 text-muted-foreground/40" />
                            </div>
                            <p className="text-xs text-muted-foreground italic leading-relaxed">
                              "{c.intro}"
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recommended Products Grid moved after tables */}
                    <div className="mt-16 mb-8">
                      <RecommendedProducts 
                        tags={categoryProductTags[catKey] || [catKey]} 
                        title={`Top ${guide?.title || catKey} Selection`} 
                        maxProducts={6} 
                      />
                    </div>
                  </div>

                  {/* Right Column: Sidebar Resources */}
                  <aside className="space-y-10">
                    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                      <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground">
                        <Wrench className="h-3.5 w-3.5 text-primary" /> Analysis Tools
                      </h4>
                      <div className="space-y-3">
                        {/* Static tool links for demonstration, can be dynamic based on category */}
                        <Link to="/tools/calories" className="group flex items-center justify-between text-sm text-muted-foreground hover:text-primary">
                          <span>Calories Calculator</span>
                          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                        <Link to="/tools/hydration" className="group flex items-center justify-between text-sm text-muted-foreground hover:text-primary">
                          <span>Hydration Needs</span>
                          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                      <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground">
                        <BookOpen className="h-3.5 w-3.5 text-accent" /> Expert Guides
                      </h4>
                      <div className="space-y-4">
                        <Link to="/guides/supplements-for-runners" className="block group">
                          <p className="text-xs font-bold text-card-foreground group-hover:text-primary leading-tight">Mastering Fueling & Electrolytes</p>
                          <p className="mt-1 text-[10px] text-muted-foreground">Long-form deep dive on endurance nutrition.</p>
                        </Link>
                        <Link to="/guides/choosing-running-shoes" className="block group">
                          <p className="text-xs font-bold text-card-foreground group-hover:text-primary leading-tight">Finding Your Perfect Fit</p>
                          <p className="mt-1 text-[10px] text-muted-foreground">The biomechanics of running footwear.</p>
                        </Link>
                      </div>
                    </div>
                    
                    <div className="rounded-2xl bg-primary px-6 py-8 text-primary-foreground shadow-lg">
                      <h4 className="font-display text-lg font-bold leading-tight">Need a custom plan?</h4>
                      <p className="mt-2 text-xs text-primary-foreground/80 leading-relaxed">
                        Take our 2-minute quiz to get a personalized gear and supplement schedule based on your biometrics.
                      </p>
                      <Link to="/quiz" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-background px-4 py-2.5 text-xs font-bold text-foreground transition-opacity hover:opacity-90">
                        Start Quiz <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </aside>
                </div>
              </section>
            );
          })}
        </div>
        
        <div className="mt-32">
          <ZoneRunBanner variant="inline" />
        </div>
      </div>
    </Layout>
  );
};

export default MasterHub;
