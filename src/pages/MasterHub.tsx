import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
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
import { translateCategory } from "@/lib/translations";

const categories = ["shoes", "gear", "supplements", "hydration", "recovery", "apparel"];

const MasterHub = () => {
  const { category: urlCategory, sport, objective } = useParams();
  const [activeCategory, setActiveCategory] = useState("shoes");
  const { hash } = useLocation();
  const observer = useRef<IntersectionObserver | null>(null);

  // Initialize activeCategory and scroll from URL params if present
  useEffect(() => {
    if (urlCategory && categories.includes(urlCategory)) {
      setActiveCategory(urlCategory);
      
      const scrollTask = () => {
        // If objective is present, scroll to the comparison section
        const targetId = objective ? `${urlCategory}-comparison` : urlCategory;
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      };
      
      setTimeout(scrollTask, 100);
    }
  }, [urlCategory, objective]);

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
          { name: "Shoe Finder", path: "/tools/shoes" },
          { name: "Calcolatore BMI", path: "/tools/bmi" }
        ],
        guides: [
          { name: "Scegliere la Scarpa Giusta", path: "/guides/choosing-running-shoes", desc: "La biomeccanica delle calzature da corsa." },
          { name: "Guida alla Tecnica di Corsa", path: "/guides/running-form", desc: "Ottimizza l'efficienza e riduci l'impatto." }
        ]
      },
      supplements: {
        tools: [
          { name: "Calcolatore Proteine", path: "/tools/protein" },
          { name: "Fabbisogno Elettroliti", path: "/tools/electrolytes" }
        ],
        guides: [
          { name: "Integrazione per Runner", path: "/guides/supplements-for-runners", desc: "Approfondimento sulla nutrizione di resistenza." },
          { name: "Nutrizione 101", path: "/guides/running-nutrition", desc: "Cosa mangiare prima, durante e dopo." }
        ]
      },
      hydration: {
        tools: [
          { name: "Fabbisogno Idrico", path: "/tools/hydration" },
          { name: "Fabbisogno Elettroliti", path: "/tools/electrolytes" }
        ],
        guides: [
          { name: "Energia ed Elettroliti", path: "/guides/supplements-for-runners", desc: "L'idratazione è metà della battaglia." },
          { name: "Nutrizione Maratona", path: "/guides/marathon-training", desc: "Strategie complete per i 42K." }
        ]
      },
      recovery: {
        tools: [
          { name: "Fabbisogno Proteico", path: "/tools/protein" },
          { name: "Fabbisogno Idrico", path: "/tools/hydration" }
        ],
        guides: [
          { name: "Guida al Recupero Muscolare", path: "/guides/muscle-recovery", desc: "Accelera la riparazione e riduci il dolore." },
          { name: "Prevenzione Infortuni", path: "/guides/injury-prevention", desc: "Tecniche basate sulla scienza per la longevità." }
        ]
      },
      apparel: {
        tools: [
          { name: "Fabbisogno Idrico", path: "/tools/hydration" },
          { name: "Calorie Bruciate", path: "/tools/calories" }
        ],
        guides: [
          { name: "Correre in Inverno", path: "/guides/winter-running", desc: "Padroneggia il sistema di stratificazione tecnica." },
          { name: "Essenziali Tecnica di Corsa", path: "/guides/running-form", desc: "Come il peso del tessuto influisce sulla cadenza." }
        ]
      },
      gear: {
        tools: [
          { name: "Calorie Bruciate", path: "/tools/calories" },
          { name: "Calcolatore BMI", path: "/tools/bmi" }
        ],
        guides: [
          { name: "Migliori Orologi da Corsa", path: "/guides/best-running-watches", desc: "Analisi tecnica 2026 dei dispositivi GPS." },
          { name: "Zone Cardio", path: "/guides/running-heart-rate-zones", desc: "Allenati meglio con i dati tecnici." }
        ]
      }
    };

    const res = categoryResources[category as keyof typeof categoryResources] || categoryResources.shoes;

    return (
      <>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground">
            <Wrench className="h-3.5 w-3.5 text-primary" /> Strumenti di Analisi
          </h4>
          <div className="space-y-3">
            {res.tools.map(tool => (
              <Link key={tool.path} to={tool.path} className="group flex items-center justify-between text-sm text-muted-foreground hover:text-primary">
                <span>{tool.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
            <Link to="/tools" className="mt-4 flex items-center gap-1.5 pt-3 border-t border-border text-[10px] font-bold uppercase tracking-wider text-primary hover:underline">
              Vedi tutti gli strumenti <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground">
            <BookOpen className="h-3.5 w-3.5 text-accent" /> Guide Esperti
          </h4>
          <div className="space-y-4">
            {res.guides.map(guide => (
              <Link key={guide.path} to={guide.path} className="block group">
                <p className="text-xs font-bold text-card-foreground group-hover:text-primary leading-tight">{guide.name}</p>
                <p className="mt-1 text-[10px] text-muted-foreground">{guide.desc}</p>
              </Link>
            ))}
            <Link to="/guides" className="mt-2 flex items-center gap-1.5 pt-3 border-t border-border text-[10px] font-bold uppercase tracking-wider text-accent hover:underline">
              Vedi tutte le guide <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
        
        <div className="rounded-2xl bg-primary px-6 py-8 text-primary-foreground shadow-hero transition-all hover:shadow-float hover:-translate-y-1 inner-glow-strong">
          <h4 className="font-display text-lg font-bold leading-tight">Vuoi un piano su misura?</h4>
          <p className="mt-2 text-xs text-primary-foreground/80 leading-relaxed">
            Fai il nostro quiz di 2 minuti per ricevere raccomandazioni personalizzate.
          </p>
          <Link to="/quiz" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-background px-4 py-2.5 text-xs font-bold text-foreground transition-opacity hover:opacity-90">
            Inizia il Quiz <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </>
    );
  };

  return (
    <Layout>
      <SEO 
        title={urlCategory ? `Migliori ${translateCategory(urlCategory)} 2026: Confronti e Guida Acquisto` : "Migliore Attrezzatura Running 2026: Confronti Tecnici e Scelte Esperti"} 
        description={urlCategory ? `Classifica e confronto delle migliori ${translateCategory(urlCategory)} per runner. Analisi tecnica dei prodotti top per performance e durata.` : "Confronta le migliori scarpe, integratori e accessori per la corsa. Selezioni basate sulla scienza per aiutarti a scegliere l'attrezzatura giusta."}
        path={urlCategory ? `/hub/${urlCategory}${sport ? `/${sport}` : ""}` : "/hub"}
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
                  {translateCategory(cat)}
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
            Guida Maestra ad Attrezzatura <br/>e Integrazione
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Una dashboard completa che combina analisi scientifica, confronti tecnici e selezioni curate di prodotti per ottimizzare ogni aspetto della tua performance di corsa.
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
