import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  ArrowRight, 
  ChevronRight, 
  BarChart3, 
  BookOpen, 
  Wrench,
} from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import ZoneRunBanner from "@/components/ZoneRunBanner";

// Refactored Components
import CategorySection from "@/components/hub/CategorySection";
import { comparisonsList as comparisonsData } from "@/data/comparisons/list";
import { categoryGuides } from "@/data/categoryGuides";

const categories = ["shoes", "supplements", "hydration", "recovery", "apparel"];

const MasterHub = () => {
  const [activeCategory, setActiveCategory] = useState("shoes");
  const { hash } = useLocation();
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Scroll Spy Logic
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    }, {
      rootMargin: "-20% 0px -70% 0px", // Trigger when section is near the top
      threshold: 0
    });

    // Observe all category sections
    categories.forEach((cat) => {
      const el = document.getElementById(cat);
      if (el) observer.current?.observe(el);
    });

    return () => observer.current?.disconnect();
  }, []);

  // Update active category if hash changes externally
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      if (categories.includes(id)) {
        setActiveCategory(id);
      }
    }
  }, [hash]);

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
      const normalizedCat = category === "hydration" ? "accessories" : category;
      const isRedundant = (c.objective === "hydration" || c.objective === "performance") && normalizedCat === "accessories";
      return c.category === normalizedCat && !isRedundant;
    });
    
    const uniqueObjectives = new Map();
    matched.forEach(item => {
      if (!uniqueObjectives.has(item.objective)) {
        uniqueObjectives.set(item.objective, item);
      }
    });
    
    return Array.from(uniqueObjectives.values());
  };

  const categoryProductTags: Record<string, string[]> = {
    shoes: ["shoes", "running"],
    supplements: ["supplements", "protein"],
    hydration: ["hydration", "accessories"],
    recovery: ["recovery", "massage"],
    apparel: ["apparel", "running"]
  };

  const SidebarContent = () => (
    <>
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground">
          <Wrench className="h-3.5 w-3.5 text-primary" /> Analysis Tools
        </h4>
        <div className="space-y-3">
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
          Take our 2-minute quiz to get personalized recommendations.
        </p>
        <Link to="/quiz" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-background px-4 py-2.5 text-xs font-bold text-foreground transition-opacity hover:opacity-90">
          Start Quiz <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </>
  );

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
                className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-primary ${
                  activeCategory === cat ? "text-primary scale-110" : "text-muted-foreground"
                }`}
              >
                <span className="relative">
                  {cat}
                  {activeCategory === cat && (
                    <span 
                      className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full transition-all duration-500"
                      style={{ backgroundColor: getCategoryColor(cat) }}
                    />
                  )}
                </span>
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
          {categories.map((catKey, index) => {
            const guide = categoryGuides[catKey === "hydration" ? "hydration" : catKey === "shoes" ? "shoes" : catKey === "supplements" ? "supplements" : catKey === "recovery" ? "recovery" : "apparel"];
            const matchedComparisons = getComparisonsForCategory(catKey);
            const accentColor = getCategoryColor(catKey);
            
            return (
              <CategorySection 
                key={catKey}
                catKey={catKey}
                index={index}
                guide={guide}
                accentColor={accentColor}
                matchedComparisons={matchedComparisons}
                categoryProductTags={categoryProductTags}
                sidebar={<SidebarContent />}
              />
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
