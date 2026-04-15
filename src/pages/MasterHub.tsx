import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Settings, 
  Map, 
  ChevronRight, 
  BarChart3, 
  Package, 
  BookOpen, 
  Wrench,
  Info
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

import hubsData from "@/data/hubs.json";
import comparisonsData from "@/data/comparisons.json";
import { categoryGuides } from "@/data/categoryGuides";
import { translateCategory, translateSport } from "@/lib/translations";

const categories = ["shoes", "supplements", "hydration", "recovery", "apparel"];

const MasterHub = () => {
  const [activeSport, setActiveSport] = useState<"marathon" | "trail-running">("marathon");

  // Filter hubs and comparisons based on sport
  // Note: We treat marathon as the representative for 'road' sports for the table display
  const getComparisonsForCategory = (category: string) => {
    return (comparisonsData as any[]).filter(c => {
      const normalizedCat = category === "hydration" ? "accessori" : category;
      const normalizedSport = activeSport === "marathon" ? "corsa" : "trail";
      return c.categoria === normalizedCat && c.sport === normalizedSport;
    });
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
            
            return (
              <section key={catKey} id={catKey} className="scroll-mt-32">
                <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-20">
                  {/* Left Column: Main Content */}
                  <div>
                    <div className="mb-8 items-end justify-between sm:flex border-b border-border pb-6">
                      <div className="editorial-line">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">0{categories.indexOf(catKey) + 1} / {catKey}</span>
                        <h2 className="mt-2 font-display text-display-md font-bold text-foreground capitalize">
                          {guide?.title || catKey}
                        </h2>
                      </div>
                    </div>

                    {/* Scientific Guide Card */}
                    {guide && (
                      <div className="mb-12 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                        <div className="grid md:grid-cols-[1fr_1.5fr]">
                          <div className="bg-primary/5 p-8 sm:p-10">
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
                                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">{pillar.title}</h4>
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
                          <BarChart3 className="h-5 w-5 text-primary" /> Technical Comparison
                        </h3>
                        
                        {/* Context Toggle - Moved here near the elements that change */}
                        <div className="flex rounded-lg bg-muted p-1">
                          <button 
                            onClick={() => setActiveSport("marathon")}
                            className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all ${
                              activeSport === "marathon" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            <Settings className="h-3 w-3" /> Road
                          </button>
                          <button 
                            onClick={() => setActiveSport("trail-running")}
                            className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all ${
                              activeSport === "trail-running" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            <Map className="h-3 w-3" /> Trail
                          </button>
                        </div>
                      </div>

                      {/* Render appropriate table based on category */}
                      {catKey === "shoes" && <ShoeComparisonTable sport={activeSport === "marathon" ? "road" : "trail"} />}
                      {catKey === "supplements" && <SupplementComparisonTable sport={activeSport === "marathon" ? "road" : "trail"} />}
                      {catKey === "hydration" && <GearComparisonTable sport={activeSport === "marathon" ? "road" : "trail"} />}
                      {catKey === "recovery" && <RecoveryComparisonTable sport={activeSport === "marathon" ? "road" : "trail"} />}
                      {catKey === "apparel" && <ApparelComparisonTable sport={activeSport === "marathon" ? "road" : "trail"} />}

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
                        tags={[catKey, activeSport === "marathon" ? "corsa" : "trail"]} 
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
