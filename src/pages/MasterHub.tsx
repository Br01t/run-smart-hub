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
import SEO from "@/components/SEO";
import ZoneRunBanner from "@/components/ZoneRunBanner";

// Refactored Components
import CategorySection from "@/components/hub/CategorySection";
import { comparisonsList as comparisonsData } from "@/data/comparisons/list";
import { categoryGuides } from "@/data/categoryGuides";

const categories = ["shoes", "gear", "supplements", "hydration", "recovery", "apparel"];

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
        
        // Wait for next tick to ensure sections are rendered
        const scrollTask = () => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        };

        // Retry once if el not found immediately
        const el = document.getElementById(id);
        if (el) {
          setTimeout(scrollTask, 100);
        } else {
          setTimeout(scrollTask, 500);
        }
      }
    }
  }, [hash]);

  // Category theme colors for vibrant UI
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "shoes": return { h: 22, s: 95, l: 50 };       // Vibrant Orange/Red
      case "supplements": return { h: 270, s: 80, l: 65 }; // Electric Purple
      case "hydration": return { h: 185, s: 95, l: 45 };   // Cyan/Teal
      case "recovery": return { h: 145, s: 80, l: 42 };    // Deep Emerald
      case "apparel": return { h: 330, s: 90, l: 60 };     // Hot Pink
      case "gear": return { h: 215, s: 95, l: 55 };        // Royal Blue
      default: return { h: 230, s: 80, l: 60 };
    }
  };

  // Filter hubs and comparisons based on category only and deduplicate by objective
  const getComparisonsForCategory = (category: string) => {
    const matched = (comparisonsData as any[]).filter(c => c.category === category);
    
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
    apparel: ["apparel", "running"],
    gear: ["gear", "watch", "accessories"]
  };

  const SidebarContent = ({ category }: { category: string }) => {
    const categoryResources = {
      shoes: {
        tools: [
          { name: "Best Shoes Finder", path: "/tools/shoes" },
          { name: "BMI Calculator", path: "/tools/bmi" }
        ],
        guides: [
          { name: "Finding Your Perfect Fit", path: "/guides/choosing-running-shoes", desc: "The biomechanics of running footwear." },
          { name: "Running Form Guide", path: "/guides/running-form", desc: "Optimize your efficiency and reduce impact." }
        ]
      },
      supplements: {
        tools: [
          { name: "Protein Calculator", path: "/tools/protein" },
          { name: "Electrolyte Needs", path: "/tools/electrolytes" }
        ],
        guides: [
          { name: "Mastering Fueling", path: "/guides/supplements-for-runners", desc: "Long-form deep dive on endurance nutrition." },
          { name: "Running Nutrition 101", path: "/guides/running-nutrition", desc: "What to eat before, during & after." }
        ]
      },
      hydration: {
        tools: [
          { name: "Hydration Needs", path: "/tools/hydration" },
          { name: "Electrolyte Needs", path: "/tools/electrolytes" }
        ],
        guides: [
          { name: "Fueling & Electrolytes", path: "/guides/supplements-for-runners", desc: "Hydration is half the battle." },
          { name: "Marathon Nutrition", path: "/guides/marathon-training", desc: "Complete hydration strategies for 42K." }
        ]
      },
      recovery: {
        tools: [
          { name: "Protein Needs", path: "/tools/protein" },
          { name: "Hydration Needs", path: "/tools/hydration" }
        ],
        guides: [
          { name: "Muscle Recovery Guide", path: "/guides/muscle-recovery", desc: "Accelerate repair and reduce soreness." },
          { name: "Injury Prevention", path: "/guides/injury-prevention", desc: "Science-backed techniques for longevity." }
        ]
      },
      apparel: {
        tools: [
          { name: "Hydration Needs", path: "/tools/hydration" },
          { name: "Calories Burned", path: "/tools/calories" }
        ],
        guides: [
          { name: "Winter Running Guide", path: "/guides/winter-running", desc: "Mastering the technical layering system." },
          { name: "Running Form Essentials", path: "/guides/running-form", desc: "How fabric weight affects your cadence." }
        ]
      },
      gear: {
        tools: [
          { name: "Calories Burned", path: "/tools/calories" },
          { name: "BMI Calculator", path: "/tools/bmi" }
        ],
        guides: [
          { name: "Best Running Watches", path: "/guides/best-running-watches", desc: "2026 technical analysis of GPS gear." },
          { name: "Heart Rate Zones", path: "/guides/running-heart-rate-zones", desc: "Train smarter with technical data." }
        ]
      }
    };

    const res = categoryResources[category as keyof typeof categoryResources] || categoryResources.shoes;

    return (
      <>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground">
            <Wrench className="h-3.5 w-3.5 text-primary" /> Analysis Tools
          </h4>
          <div className="space-y-3">
            {res.tools.map(tool => (
              <Link key={tool.path} to={tool.path} className="group flex items-center justify-between text-sm text-muted-foreground hover:text-primary">
                <span>{tool.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
            <Link to="/tools" className="mt-4 flex items-center gap-1.5 pt-3 border-t border-border text-[10px] font-bold uppercase tracking-wider text-primary hover:underline">
              View all tools <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground">
            <BookOpen className="h-3.5 w-3.5 text-accent" /> Expert Guides
          </h4>
          <div className="space-y-4">
            {res.guides.map(guide => (
              <Link key={guide.path} to={guide.path} className="block group">
                <p className="text-xs font-bold text-card-foreground group-hover:text-primary leading-tight">{guide.name}</p>
                <p className="mt-1 text-[10px] text-muted-foreground">{guide.desc}</p>
              </Link>
            ))}
            <Link to="/guides" className="mt-2 flex items-center gap-1.5 pt-3 border-t border-border text-[10px] font-bold uppercase tracking-wider text-accent hover:underline">
              View all guides <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
        
        <div className="rounded-2xl bg-primary px-6 py-8 text-primary-foreground shadow-hero transition-all hover:shadow-float hover:-translate-y-1 inner-glow-strong">
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
  };

  return (
    <Layout>
      <SEO 
        title="Best Running Gear Comparisons & Product Hub 2026" 
        description="Side-by-side technical comparisons of running shoes, supplements, and gear based on scientific principles and biomechanical data."
        path="/hub"
      />

      {/* Floating Category Nav (Responsive & Multi-level) */}
      <nav className="sticky top-[64px] z-30 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 sm:gap-8 py-3 sm:py-4">
            {categories.map((cat) => (
              <a 
                key={cat} 
                href={`#${cat}`}
                className={`text-[10px] sm:text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-primary ${
                  activeCategory === cat ? "text-primary scale-110" : "text-muted-foreground"
                }`}
              >
                <span className="relative whitespace-nowrap">
                  {cat}
                  {activeCategory === cat && (
                    <span 
                      className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full transition-all duration-500"
                      style={{ 
                        backgroundColor: `hsl(${getCategoryColor(cat).h}, ${getCategoryColor(cat).s}%, ${getCategoryColor(cat).l}%)` 
                      }}
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
          <h1 className="font-display text-4xl sm:text-display-xl font-bold text-foreground transition-all">
            Master Gear & <br/>Supplement Guide
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            A comprehensive dashboard combining scientific analysis, technical comparisons, and curated product selections to optimize every aspect of your running performance.
          </p>
        </header>

        <div className="space-y-32">
          {categories.map((catKey, index) => {
            const guide = categoryGuides[catKey === "hydration" ? "hydration" : catKey === "shoes" ? "shoes" : catKey === "supplements" ? "supplements" : catKey === "recovery" ? "recovery" : catKey === "gear" ? "gear" : "apparel"];
            const matchedComparisons = getComparisonsForCategory(catKey);
            const accentData = getCategoryColor(catKey);
            const accentColor = `hsl(${accentData.h}, ${accentData.s}%, ${accentData.l}%)`;
            
            return (
              <CategorySection 
                key={catKey}
                catKey={catKey}
                index={index}
                guide={guide}
                accentColor={accentColor}
                accentHsl={accentData}
                matchedComparisons={matchedComparisons}
                categoryProductTags={categoryProductTags}
                sidebar={<SidebarContent category={catKey} />}
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
