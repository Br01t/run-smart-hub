import React from "react";
import { BarChart3, ShoppingBag, Info } from "lucide-react";
import ScientificGuideCard from "./ScientificGuideCard";
import { CategoryProductBanner } from "./CategoryProductBanner";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";

// Comparison Tables
import ShoeComparisonTable from "@/components/ShoeComparisonTable";
import SupplementComparisonTable from "@/components/SupplementComparisonTable";
import GearComparisonTable from "@/components/GearComparisonTable";
import HydrationComparisonTable from "@/components/HydrationComparisonTable";
import ApparelComparisonTable from "@/components/ApparelComparisonTable";
import RecoveryComparisonTable from "@/components/RecoveryComparisonTable";

// Data Specs for the Banner
import { shoeSpecs } from "@/data/specs/shoes";
import { supplementSpecs } from "@/data/specs/supplements";
import { hydrationSpecs } from "@/data/specs/hydration";
import { recoverySpecs } from "@/data/specs/recovery";
import { apparelSpecs } from "@/data/specs/apparel";
import { gearSpecs } from "@/data/specs/gear";

const selectionRationale: Record<string, string> = {
  shoes: "La nostra selezione si basa sulla geometria dell'intersuola 3D, sul ritorno di energia misurato e sulla stabilità biomeccanica. Analizziamo le schiume proprietarie e la rigidità delle piastre in carbonio per adattarle a specifici cicli di andatura e requisiti del terreno.",
  supplements: "Selezionati in base alla trasparenza del dosaggio clinico e alla biodisponibilità degli ingredienti. Prioritizziamo prodotti con test di terze parti (Informed Sport) e rapporti basati sull'evidenza di minerali essenziali e aiuti ergogenici.",
  hydration: "Valutati per la distribuzione ergonomica del peso, la facilità di accesso durante l'alta intensità e la durata dei materiali. Ci concentriamo su soluzioni prive di BPA che riducono al minimo lo sballottamento e ottimizzano l'efficienza di erogazione dei liquidi.",
  gear: "Valutati per la distribuzione ergonomica del peso, la facilità di accesso durante l'alta intensità e la durata dei materiali. Ci concentriamo su soluzioni che riducono al minimo lo sballottamento e ottimizzano l'efficienza di erogazione.",
  accessories: "Valutati per la distribuzione ergonomica del peso, la facilità di accesso durante l'alta intensità e la durata dei materiali. Ci concentriamo su soluzioni che riducono al minimo lo sballottamento e ottimizzano l'efficienza di erogazione.",
  recovery: "Scelti per il loro impatto sulla sintesi proteica muscolare e sulla modulazione della risposta infiammatoria. Analizziamo la compressione meccanica, la consistenza termica e la portabilità per una supercompensazione ottimale.",
  apparel: "Selezionati per l'evacuazione dell'umidità ad alte prestazioni, le zone di compressione anatomica e la costruzione delle cuciture senza sfregamento. Prioritizziamo tessuti che regolano la temperatura corporea in diverse condizioni climatiche.",
};

interface CategorySectionProps {
  catKey: string;
  index: number;
  guide: any;
  accentColor: string;
  accentHsl?: { h: number; s: number; l: number };
  matchedComparisons: any[];
  categoryProductTags: Record<string, string[]>;
  sidebar?: React.ReactNode;
  sport?: string;
  objective?: string;
}

const CategorySection = ({ 
  catKey, 
  index, 
  guide, 
  accentColor, 
  accentHsl,
  matchedComparisons, 
  categoryProductTags,
  sidebar,
  sport,
  objective
}: CategorySectionProps) => {

  const getProductSelection = () => {
    switch (catKey) {
      case "shoes": return shoeSpecs;
      case "supplements": return supplementSpecs;
      case "hydration": return hydrationSpecs;
      case "recovery": return recoverySpecs;
      case "apparel": return apparelSpecs;
      case "gear": return gearSpecs;
      default: return [];
    }
  };

  return (
    <section id={catKey} className="scroll-mt-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-10">
        {/* Left Column: Main Content */}
        <div className="min-w-0">
          <div className="mb-8 items-end justify-between sm:flex border-b border-border pb-6 font-display overflow-hidden">
            <div className="editorial-line">
              <span 
                className="text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500"
                style={{ color: accentColor }}
              >
                0{index + 1} / {catKey}
              </span>
              <h2 className="mt-2 font-display text-display-md font-bold text-foreground">
                {guide?.title || catKey}
              </h2>
            </div>
          </div>

          {/* Scientific Guide Card */}
          {guide && <ScientificGuideCard guide={guide} accentColor={accentColor} />}

          {/* Comparison Tables Section */}
          <div id={`${catKey}-comparison`} className="space-y-12 mb-20 scroll-mt-40">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-2">
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
                    <BarChart3 className="h-5 w-5 opacity-40" /> Confronto Tecnico
                </h3>
                
                <Popover>
                    <PopoverTrigger asChild>
                        <button className="rounded-full p-1 text-muted-foreground/40 hover:text-primary transition-colors focus:outline-none">
                            <Info className="h-4 w-4" />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="max-w-[240px] text-xs leading-relaxed p-4 bg-popover/95 backdrop-blur-md shadow-xl border-border">
                        Seleziona i prodotti per un confronto fianco a fianco specifico e usa i filtri per personalizzare la vista dei dati tecnici.
                    </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="mb-6 rounded-xl border-l-4 border-primary bg-secondary/30 p-6 shadow-sm inner-glow">
              <h3 className="mb-2 font-display text-sm font-bold text-foreground uppercase tracking-wider">Criteri di Selezione Scientifica</h3>
              <p className="text-sm leading-relaxed text-muted-foreground italic">
                {selectionRationale[catKey] || "Il nostro processo di selezione integra i dati della fisiologia dell'esercizio e i test di durata del prodotto. Prioritizziamo soluzioni che offrono un impatto misurabile su performance, sicurezza e costanza dell'allenamento."}
              </p>
            </div>

            {/* Render appropriate table based on category */}
            {catKey === "shoes" && <ShoeComparisonTable accentColor={accentColor} sport={sport} objective={objective} />}
            {catKey === "supplements" && <SupplementComparisonTable accentColor={accentColor} sport={sport} objective={objective} />}
            {catKey === "hydration" && <HydrationComparisonTable accentColor={accentColor} sport={sport} objective={objective} />}
            {catKey === "gear" && <GearComparisonTable accentColor={accentColor} sport={sport} objective={objective} />}
            {catKey === "recovery" && <RecoveryComparisonTable accentColor={accentColor} sport={sport} objective={objective} />}
            {catKey === "apparel" && <ApparelComparisonTable accentColor={accentColor} sport={sport} objective={objective} />}
          </div>

          {/* Product Banner Section */}
          <div className="mt-12">
            <CategoryProductBanner 
                products={getProductSelection()} 
                accentColor={accentColor}
                accentHsl={accentHsl}
                title={`Selezione Runners Hub: ${guide?.title || catKey}`}
            />
          </div>
        </div>

        {/* Right Column: Sidebar Resources (Stacks on Mobile) */}
        <div className="relative">
           <div className="sticky top-32 space-y-10 lg:pl-4">
            {sidebar}
           </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
