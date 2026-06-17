import { useState, useEffect, useMemo } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { 
  ArrowRight, 
  ChevronRight, 
  BarChart3, 
  BookOpen, 
  Wrench,
  HeartPulse,
  Activity,
  Shirt,
  Footprints,
  Zap,
  Droplets,
  Watch
} from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ZoneRunBanner from "@/components/ZoneRunBanner";

// Refactored Components
import CategorySection from "@/components/hub/CategorySection";
import { comparisonsList as comparisonsData } from "@/data/comparisons/list";
import { categoryGuides } from "@/data/categoryGuides";
import { translateCategory } from "@/lib/translations";
import hubsData from "@/data/hubs.json";
import { shoeSpecs } from "@/data/specs/shoes";
import { supplementSpecs } from "@/data/specs/supplements";
import { hydrationSpecs } from "@/data/specs/hydration";
import { recoverySpecs } from "@/data/specs/recovery";
import { apparelSpecs } from "@/data/specs/apparel";
import { gearSpecs } from "@/data/specs/gear";

const SITE_URL = "https://www.runners-hub.org";

const specsByCategory: Record<string, any[]> = {
  shoes: shoeSpecs,
  supplements: supplementSpecs,
  hydration: hydrationSpecs,
  recovery: recoverySpecs,
  apparel: apparelSpecs,
  gear: gearSpecs,
};


const buildProductListSchema = (category: string, listName: string, listUrl: string) => {
  const items = (specsByCategory[category] || []).slice(0, 12);
  if (!items.length) return null;
  return {
    "@type": "ItemList",
    "name": listName,
    "url": listUrl,
    "numberOfItems": items.length,
    "itemListElement": items.map((p, i) => {
      const product: any = {
        "@type": "Product",
        "name": p.name,
        "brand": p.brand ? { "@type": "Brand", "name": p.brand } : undefined,
        "image": p.image ? (p.image.startsWith("http") ? p.image : `${SITE_URL}${p.image}`) : undefined,
        "description": p.bestFor || p.descrizione || `${p.name} — selezione Runners Hub`,
        "url": p.link || listUrl,
      };

      return {
        "@type": "ListItem",
        "position": i + 1,
        "item": product,
      };
    }),
  };
};



const categories = ["shoes", "gear", "supplements", "hydration", "recovery", "apparel"];

const categoriesInfo = [
  { id: "shoes", name: "Scarpe", icon: Footprints, desc: "Trova la calzatura ideale. Dal carbonio per gare veloci al grip per i sentieri tecnici.", color: "from-orange-500/20 to-orange-500/5", border: "hover:border-orange-500/30", text: "text-orange-500" },
  { id: "supplements", name: "Integratori", icon: Zap, desc: "Ottimizza la nutrizione sportiva. Carboidrati, elettroliti, proteine e caffeina basati sulla scienza.", color: "from-purple-500/20 to-purple-500/5", border: "hover:border-purple-500/30", text: "text-purple-500" },
  { id: "hydration", name: "Idratazione", icon: Droplets, desc: "Mantieni l'equilibrio elettrolitico. Borracce, zaini idrici, sali minerali e formule ad alto sodio.", color: "from-cyan-500/20 to-cyan-500/5", border: "hover:border-cyan-500/30", text: "text-cyan-500" },
  { id: "recovery", name: "Recupero", icon: HeartPulse, desc: "Riduci i DOMS e previeni gli infortuni. Foam roller GRID, terapia percussiva e calze a compressione.", color: "from-emerald-500/20 to-emerald-500/5", border: "hover:border-emerald-500/30", text: "text-emerald-500" },
  { id: "apparel", name: "Abbigliamento", icon: Shirt, desc: "Corri in totale comfort. Tessuti termoregolatori, vestibilità a compressione e cuciture anti-sfregamento.", color: "from-pink-500/20 to-pink-500/5", border: "hover:border-pink-500/30", text: "text-pink-500" },
  { id: "gear", name: "Accessori", icon: Watch, desc: "Monitora i tuoi dati. Orologi cardio GPS, fasce toraciche e sistemi di illuminazione per corse notturne.", color: "from-blue-500/20 to-blue-500/5", border: "hover:border-blue-500/30", text: "text-blue-500" }
];

// Helper to normalize sport parameter for lookup
const normalizeSportForHub = (s?: string) => {
  if (!s) return s;
  if (s === "trail" || s === "trail-running") return "trail-running";
  return s;
};

const normalizeSportForComparison = (s?: string) => {
  if (!s) return s;
  if (s === "trail" || s === "trail-running") return "trail";
  return s;
};

// Helper for SEO dynamic targeting
const getDynamicSEO = (category?: string, sport?: string, objective?: string) => {
  // 1. Comparison Page Case (/comparison/:category/:sport/:objective)
  if (category && sport && objective) {
    const key = `${category}/${sport}/${objective}`;
    const seoMap: Record<string, { title: string; description: string; faq: { q: string; a: string }[] }> = {
      "shoes/running/performance": {
        title: "Migliori Scarpe da Corsa per Performance 2026: Confronto Tecnico",
        description: "Confronta le migliori scarpe da corsa su strada ad alte prestazioni. Analisi di peso, drop, piastre in carbonio e ammortizzazione per correre più veloce.",
        faq: [
          { q: "Quali sono le migliori scarpe da corsa per la performance nel 2026?", a: "Le scarpe con piastra in carbonio e schiuma in PEBA (come le Nike Alphafly 3 o Adidas Adizero Adios Pro 3) sono le migliori per massimizzare il ritorno di energia e migliorare l'economia di corsa." },
          { q: "Quanto influisce il peso di una scarpa da corsa?", a: "Ridurre il peso della scarpa riduce il costo energetico della corsa. Le scarpe da gara superleggere pesano meno di 220g per massimizzare la velocità." }
        ]
      },
      "shoes/trail/performance": {
        title: "Migliori Scarpe da Trail Running 2026: Confronto Performance",
        description: "Confronto tecnico delle migliori scarpe da trail running per prestazioni fuoristrada. Analisi di grip, tassellatura, stabilità e protezione su sentieri tecnici.",
        faq: [
          { q: "Qual è la migliore scarpa da trail running per la performance?", a: "Per sentieri tecnici e fango, la Salomon Speedcross offre la massima trazione. Per ultra distanze e comfort ammortizzato, la Brooks Cascadia è la scelta ideale." }
        ]
      },
      "supplements/running/performance": {
        title: "Migliori Integratori per Correre Più Veloce: Guida Performance",
        description: "Scopri gli integratori scientificamente provati per migliorare le prestazioni nella corsa veloce: beta-alanina, caffeina e carboidrati.",
        faq: [
          { q: "Quali integratori aumentano la velocità di corsa?", a: "La caffeina assunta 45-60 minuti prima migliora la concentrazione e la potenza, mentre la beta-alanina aiuta a tamponare l'acido lattico negli sforzi intensi." }
        ]
      },
      "supplements/running/recovery": {
        title: "Migliori Integratori Post-Corsa per il Recupero Muscolare",
        description: "Guida e confronto dei migliori integratori per recuperare velocemente dopo la corsa: proteine whey, aminoacidi essenziali (EAA) e ZMA.",
        faq: [
          { q: "Cosa assumere dopo la corsa per accelerare il recupero?", a: "Un mix di proteine veloci (come Impact Whey) per riparare le fibre muscolari ed elettroliti per reidratarsi entro 30-60 minuti dallo sforzo." }
        ]
      },
      "supplements/running/weight-loss": {
        title: "Integratori per Dimagrire Correndo: Guida al Deficit Calorico",
        description: "Migliora la tua composizione corporea con la corsa e gli integratori giusti. Come le proteine e i micronutrienti aiutano a perdere peso preservando i muscoli.",
        faq: [
          { q: "Quali integratori aiutano a perdere peso correndo?", a: "Le proteine in polvere aiutano ad aumentare il senso di sazietà e preservare la massa magra durante il deficit calorico stimolato dagli allenamenti di corsa." }
        ]
      },
      "supplements/running/endurance": {
        title: "Migliori Integratori per la Corsa di Resistenza e Maratona",
        description: "Ottimizza le tue riserve energetiche per le lunghe distanze. Confronto di maltodestrine, sali minerali e nitrati per correre più a lungo.",
        faq: [
          { q: "Qual è il miglior integratore per correre una maratona?", a: "Le maltodestrine pure e le polveri elettrolitiche con sodio sono essenziali per mantenere costanti i livelli di glucosio nel sangue e prevenire la disidratazione." }
        ]
      },
      "supplements/trail/recovery": {
        title: "Migliori Integratori per il Recupero nel Trail Running",
        description: "Il trail running danneggia i muscoli in discesa. Scopri le migliori soluzioni di integrazione con proteine isolate, ZMA e Omega 3 per ridurre i DOMS.",
        faq: [
          { q: "Perché il recupero dopo il trail running richiede integratori specifici?", a: "La corsa in discesa genera un alto stress eccentrico sulle fibre muscolari. Proteine ad alto valore biologico e zinco/magnesio (ZMA) accelerano la riparazione muscolare notturna." }
        ]
      },
      "hydration/running/hydration": {
        title: "Migliori Elettroliti per Corsa su Strada: Guida Idratazione",
        description: "Confronto delle migliori polveri e compresse elettrolitiche per runner su strada. Previeni crampi e cali di performance dovuti alla disidratazione.",
        faq: [
          { q: "Qual è il miglior modo per idratarsi durante la corsa su strada?", a: "Per corse superiori a 60 minuti, usa acqua addizionata con compresse di elettroliti (come Nuun Sport o Liquid I.V.) per rimpiazzare il sodio perso." }
        ]
      },
      "hydration/trail/hydration": {
        title: "Migliori Sistemi di Idratazione e Sali per Trail Running",
        description: "Resta idratato sui sentieri di montagna. Confronto di elettroliti ad alto dosaggio di sodio come LMNT e compresse effervescenti per zaini e soft flask.",
        faq: [
          { q: "Quanti sali minerali servono nel trail running?", a: "Nel trail running di lunga durata o con caldo torrido, servono fino a 500-1000mg di sodio all'ora, ideali da assumere tramite bustine LMNT o Nuun." }
        ]
      },
      "recovery/running/injury-prevention": {
        title: "Migliori Strumenti Recupero Corsa per Prevenire Infortuni",
        description: "Previeni fascite plantare, ginocchio del corridore e shin splints. Confronto di foam roller, pistole massaggianti e calze compressive per il pre-hab.",
        faq: [
          { q: "Come prevenire gli infortuni tipici della corsa?", a: "L'uso regolare del Foam Roller GRID per allentare la bandelletta ileotibiale e le bande elastiche per rafforzare i glutei riduce significativamente i rischi di infortunio." }
        ]
      },
      "recovery/trail/injury-prevention": {
        title: "Prevenzione Infortuni nel Trail Running: Strumenti di Recupero",
        description: "Proteggi caviglie e ginocchia dallo stress dei sentieri sconnessi. Confronta i migliori strumenti di auto-massaggio e bande elastiche per la stabilità.",
        faq: [
          { q: "Come evitare distorsioni alla caviglia nel trail?", a: "L'allenamento propriocettivo con bande elastiche e il massaggio focale della pianta del piede con palla da lacrosse migliorano la stabilità articolare." }
        ]
      },
      "gear/running/performance": {
        title: "Migliori Accessori Corsa Performance 2026: GPS e Fasce Cardio",
        description: "Migliora i tuoi ritmi e monitora la frequenza cardiaca. Confronto dei migliori orologi da corsa GPS e fasce cardio per l'allenamento a zone.",
        faq: [
          { q: "Quali accessori aiutano a migliorare le prestazioni di corsa?", a: "Un orologio GPS affidabile consente di gestire il ritmo in tempo reale, mentre un cardiofrequenzimetro a fascia toracica offre la massima precisione per la Zona 2." }
        ]
      },
      "apparel/running/performance": {
        title: "Migliore Abbigliamento Tecnico da Corsa per Performance",
        description: "Confronta maglie e pantaloncini da running ad alte prestazioni. Tessuti traspiranti, compressione e cuciture piatte per correre senza sfregamenti.",
        faq: [
          { q: "Come scegliere l'abbigliamento per correre veloci?", a: "Scegli indumenti in microfibra tecnica leggera ed evita il cotone, che trattiene il sudore appesantendosi e provocando fastidiosi sfregamenti cutanei." }
        ]
      }
    };
    if (seoMap[key]) return seoMap[key];
  }

  // 2. Category + Sport Hub Page Case (/hub/:category/:sport)
  if (category && sport) {
    const hubSport = normalizeSportForHub(sport);
    const hubData = (hubsData as any[]).find(h => h.category === category && h.sport === hubSport);
    if (hubData) {
      return {
        title: `${hubData.title} | Confronto e Guida`,
        description: hubData.description,
        faq: [
          { q: `Come scegliere il meglio per ${hubData.title}?`, a: hubData.intro }
        ]
      };
    }
  }

  // 3. Category Hub Case (/hub/:category)
  if (category) {
    switch (category) {
      case "shoes":
        return {
          title: "Migliori Scarpe da Corsa 2026: Recensioni e Confronto Tecnico",
          description: "Tutte le migliori scarpe da corsa su strada e da trail running a confronto. Trova la scarpa giusta con i dati tecnici di peso, drop, piastra e prezzo.",
          faq: [
            { q: "Come scegliere la migliore scarpa da corsa?", a: "Valuta il terreno (strada o trail), il livello di ammortizzazione desiderato, il tuo appoggio (neutro o pronatore) e il budget. Usa il nostro Shoe Finder per una raccomandazione personalizzata." }
          ]
        };
      case "supplements":
        return {
          title: "Migliori Integratori per Runner 2026: Performance e Recupero",
          description: "Migliora la tua nutrizione sportiva. Confronta proteine, beta-alanina, caffeina ed elettroliti con dosaggi clinici supportati dalla scienza.",
          faq: [
            { q: "Quali sono gli integratori essenziali per un runner?", a: "Maltodestrine e sali minerali per corse lunghe, proteine del siero di latte per il recupero post-allenamento, e caffeina o beta-alanina per aumentare l'intensità." }
          ]
        };
      case "hydration":
        return {
          title: "Migliori Prodotti per l'Idratazione nella Corsa e nel Trail",
          description: "Mantieni l'equilibrio elettrolitico durante la corsa. Confronto di compresse effervescenti, polveri saline ad alto sodio e borracce morbide.",
          faq: [
            { q: "Perché gli elettroliti sono importanti per i runner?", a: "La sudorazione fa perdere grandi quantità di sodio e potassio. Gli elettroliti ripristinano il bilancio idrico, prevenendo crampi e colpi di calore." }
          ]
        };
      case "recovery":
        return {
          title: "Strumenti e Metodi di Recupero Muscolare per Runner",
          description: "Accelera la rigenerazione cellulare e riduci i DOMS. Analisi scientifica di pistole massaggianti, foam roller GRID e calze compressive.",
          faq: [
            { q: "Qual è il miglior strumento per il recupero dei muscoli?", a: "La pistola massaggiante è ideale per il rilascio miofasciale profondo, mentre il foam roller è perfetto per allentare la bandelletta ileotibiale e i polpacci in autonomia." }
          ]
        };
      case "gear":
        return {
          title: "Migliori Accessori Running e Orologi GPS da Corsa 2026",
          description: "Confronto tecnico degli accessori indispensabili per correre: orologi cardio GPS, zaini idrici per trail e gilet da running.",
          faq: [
            { q: "Qual è il miglior GPS da corsa qualità/prezzo?", a: "Il Coros Pace 3 è ampiamente considerato il re del rapporto qualità/prezzo, mentre i Garmin Forerunner 265/965 offrono le metriche fisiologiche più avanzate." }
          ]
        };
      case "apparel":
        return {
          title: "Migliore Abbigliamento Running Tecnico: Traspirabilità e Comfort",
          description: "Scopri i migliori capi di abbigliamento da corsa per ogni stagione. Capi termoregolatori, calze compressive e cuciture senza sfregamento.",
          faq: [
            { q: "Perché l'abbigliamento tecnico da corsa fa la differenza?", a: "I tessuti tecnici allontanano il sudore dalla pelle tenendoti asciutto, regolano la temperatura corporea ed evitano gli sfregamenti dolorosi rispetto al cotone." }
          ]
        };
    }
  }

  // 4. Default Hub Case (/hub)
  return {
    title: "Migliore Attrezzatura Running 2026: Confronti Tecnici e Scelte Esperti",
    description: "Confronta le migliori scarpe, integratori e accessori per la corsa. Selezioni basate sulla scienza per aiutarti a scegliere l'attrezzatura giusta.",
    faq: [
      { q: "Come scegliere la migliore attrezzatura da corsa?", a: "Scegli l'attrezzatura in base alla biomeccanica e agli obiettivi. Scarpe PEBA per le gare, EVA per i lenti. Usa i nostri Hub per confrontare i dati tecnici." }
    ]
  };
};

const MasterHub = () => {
  const { category: urlCategory, sport, objective } = useParams();
  const [activeCategory, setActiveCategory] = useState("shoes");

  // Validate parameters and redirect if invalid
  if (urlCategory && !categories.includes(urlCategory)) {
    return <Navigate to="/hub" replace />;
  }

  if (sport) {
    if (objective) {
      // /comparison/:category/:sport/:objective
      const compSport = normalizeSportForComparison(sport);
      const exists = comparisonsData.some(
        c => c.category === urlCategory && c.sport === compSport && c.objective === objective
      );
      if (!exists) {
        return <Navigate to={urlCategory ? `/hub/${urlCategory}` : "/hub"} replace />;
      }
    } else {
      // /hub/:category/:sport
      const hubSport = normalizeSportForHub(sport);
      const exists = (hubsData as any[]).some(
        h => h.category === urlCategory && h.sport === hubSport
      );
      if (!exists) {
        return <Navigate to={urlCategory ? `/hub/${urlCategory}` : "/hub"} replace />;
      }
    }
  }

  // Set the active category based on URL
  useEffect(() => {
    if (urlCategory && categories.includes(urlCategory)) {
      setActiveCategory(urlCategory);
    }
  }, [urlCategory]);

  // Category theme colors
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

  // Filter comparisons by category
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
    // Check if we are on a sport-specific hub and have custom guides/tools
    const activeHub = sport 
      ? (hubsData as any[]).find(h => h.category === category && h.sport === normalizeSportForHub(sport)) 
      : null;

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

    let toolsList = categoryResources[category as keyof typeof categoryResources]?.tools || categoryResources.shoes.tools;
    let guidesList = categoryResources[category as keyof typeof categoryResources]?.guides || categoryResources.shoes.guides;

    if (activeHub) {
      if (activeHub.relatedTools) {
        const toolNames: Record<string, string> = {
          "/tools/shoes": "Shoe Finder",
          "/tools/bmi": "Calcolatore BMI",
          "/tools/protein": "Calcolatore Proteine",
          "/tools/electrolytes": "Fabbisogno Elettroliti",
          "/tools/hydration": "Fabbisogno Idrico",
          "/tools/calories": "Calorie Bruciate"
        };
        toolsList = activeHub.relatedTools.map((path: string) => ({
          name: toolNames[path] || "Strumento",
          path
        }));
      }
      if (activeHub.relatedGuides) {
        const guideNames: Record<string, { name: string, desc: string }> = {
          "choosing-running-shoes": { name: "Scegliere la Scarpa Giusta", desc: "La biomeccanica delle calzature da corsa." },
          "running-form": { name: "Guida alla Tecnica di Corsa", desc: "Ottimizza l'efficienza e riduci l'impatto." },
          "supplements-for-runners": { name: "Integrazione per Runner", desc: "Approfondimento sulla nutrizione di resistenza." },
          "running-nutrition": { name: "Nutrizione 101", desc: "Cosa mangiare prima, durante e dopo." },
          "marathon-training": { name: "Nutrizione Maratona", desc: "Strategie complete per i 42K." },
          "muscle-recovery": { name: "Guida al Recupero Muscolare", desc: "Accelera la riparazione e riduci il dolore." },
          "injury-prevention": { name: "Prevenzione Infortuni", desc: "Tecniche basate sulla scienza per la longevità." },
          "winter-running": { name: "Correre in Inverno", desc: "Padroneggia il sistema di stratificazione tecnica." },
          "best-running-watches": { name: "Migliori Orologi da Corsa", desc: "Analisi tecnica 2026 dei dispositivi GPS." },
          "running-heart-rate-zones": { name: "Zone Cardio", desc: "Allenati meglio con i dati tecnici." },
          "trail-running-beginners": { name: "Iniziare il Trail Running", desc: "Consigli ed essenziali per correre fuori strada." }
        };
        guidesList = activeHub.relatedGuides.map((slug: string) => {
          const info = guideNames[slug] || { name: "Guida Esperta", desc: "Leggi il parere dei nostri esperti." };
          return {
            name: info.name,
            path: `/guides/${slug}`,
            desc: info.desc
          };
        });
      }
    }

    return (
      <>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground">
            <Wrench className="h-3.5 w-3.5 text-primary" /> Strumenti di Analisi
          </h4>
          <div className="space-y-3">
            {toolsList.map(tool => (
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
            {guidesList.map(guide => (
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

  const seoAIO = getDynamicSEO(urlCategory, sport, objective);

  // Construct self-referencing canonical path
  let seoPath = "/hub";
  if (urlCategory) {
    if (sport) {
      if (objective) {
        seoPath = `/comparison/${urlCategory}/${sport}/${objective}`;
      } else {
        seoPath = `/hub/${urlCategory}/${sport}`;
      }
    } else {
      seoPath = `/hub/${urlCategory}`;
    }
  }

  // Find sport-specific guide overrides
  const activeHubData = urlCategory && sport 
    ? (hubsData as any[]).find(h => h.category === urlCategory && h.sport === normalizeSportForHub(sport)) 
    : null;

  // Build structured data graph: CollectionPage + BreadcrumbList + Product ItemList
  const canonicalUrl = `${SITE_URL}${seoPath}`;
  const breadcrumbItems: any[] = [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
    { "@type": "ListItem", "position": 2, "name": "Hub", "item": `${SITE_URL}/hub` },
  ];
  if (urlCategory) {
    breadcrumbItems.push({ "@type": "ListItem", "position": 3, "name": translateCategory(urlCategory), "item": `${SITE_URL}/hub/${urlCategory}` });
  }
  if (urlCategory && sport && objective) {
    breadcrumbItems.push({ "@type": "ListItem", "position": 4, "name": `${sport} · ${objective}`, "item": canonicalUrl });
  } else if (urlCategory && sport) {
    breadcrumbItems.push({ "@type": "ListItem", "position": 4, "name": sport, "item": canonicalUrl });
  }

  const graph: any[] = [];
  if (urlCategory) {
    graph.push({
      "@type": "CollectionPage",
      "name": seoAIO.title,
      "description": seoAIO.description,
      "url": canonicalUrl,
    });
    const productList = buildProductListSchema(urlCategory, seoAIO.title, canonicalUrl);
    if (productList) graph.push(productList);
  }
  graph.push({ "@type": "BreadcrumbList", "itemListElement": breadcrumbItems });

  return (
    <Layout>
      <SEO 
        title={seoAIO.title} 
        description={seoAIO.description}
        path={seoPath}
        faq={seoAIO.faq}
        schema={{ "@context": "https://schema.org", "@graph": graph }}
      />


      {/* Floating Category Nav (Responsive & Multi-level) */}
      <nav className="sticky top-[64px] z-30 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 sm:gap-8 py-3 sm:py-4">
            <Link 
              to="/hub"
              className={`text-[10px] sm:text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-primary ${
                !urlCategory ? "text-primary scale-110" : "text-muted-foreground"
              }`}
            >
              <span className="relative whitespace-nowrap">
                Tutti
                {!urlCategory && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary transition-all duration-500" />
                )}
              </span>
            </Link>
            {categories.map((cat) => (
              <Link 
                key={cat} 
                to={`/hub/${cat}`}
                className={`text-[10px] sm:text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-primary ${
                  activeCategory === cat && urlCategory ? "text-primary scale-110" : "text-muted-foreground"
                }`}
              >
                <span className="relative whitespace-nowrap">
                  {translateCategory(cat)}
                  {activeCategory === cat && urlCategory && (
                    <span 
                      className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full transition-all duration-500"
                      style={{ 
                        backgroundColor: `hsl(${getCategoryColor(cat).h}, ${getCategoryColor(cat).s}%, ${getCategoryColor(cat).l}%)` 
                      }}
                    />
                  )}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div className="container mx-auto max-w-7xl px-4 py-8 sm:py-16">
        {/* Render Directory Dashboard if no category is active */}
        {!urlCategory ? (
          <div>
            <header className="mb-16 editorial-line">
              <h1 className="font-display text-4xl sm:text-display-xl font-bold text-foreground transition-all">
                Guida Maestra ad Attrezzatura <br/>e Integrazione
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Una dashboard completa che combina analisi scientifica, confronti tecnici e selezioni curate di prodotti per ottimizzare ogni aspetto della tua performance di corsa.
              </p>
            </header>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categoriesInfo.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Link
                    key={cat.id}
                    to={`/hub/${cat.id}`}
                    className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-float ${cat.border}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-muted transition-colors duration-500 group-hover:bg-background shadow-sm">
                        <Icon className={`h-6 w-6 ${cat.text}`} />
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-2 flex items-center gap-1.5">
                        {cat.name}
                        <ArrowRight className="h-4 w-4 opacity-0 transition-all -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed flex-grow">
                        {cat.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          /* Render Single Category section if category is active */
          <div className="space-y-16">
            {activeHubData && (
              <div className="mb-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
                  {activeHubData.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {activeHubData.intro}
                </p>
              </div>
            )}

            {categories
              .filter(catKey => catKey === urlCategory)
              .map((catKey, index) => {
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
                    sport={sport}
                    objective={objective}
                  />
                );
              })}
          </div>
        )}
        
        <div className="mt-32">
          <ZoneRunBanner variant="inline" />
        </div>
      </div>
    </Layout>
  );
};

export default MasterHub;
