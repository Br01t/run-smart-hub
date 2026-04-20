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

interface CategorySectionProps {
  catKey: string;
  index: number;
  guide: any;
  accentColor: string;
  accentHsl?: { h: number; s: number; l: number };
  matchedComparisons: any[];
  categoryProductTags: Record<string, string[]>;
  sidebar?: React.ReactNode;
}

const CategorySection = ({ 
  catKey, 
  index, 
  guide, 
  accentColor, 
  accentHsl,
  matchedComparisons, 
  categoryProductTags,
  sidebar
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
          <div className="space-y-12 mb-20">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-2">
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
                    <BarChart3 className="h-5 w-5 opacity-40" /> Technical Comparison
                </h3>
                
                <Popover>
                    <PopoverTrigger asChild>
                        <button className="rounded-full p-1 text-muted-foreground/40 hover:text-primary transition-colors focus:outline-none">
                            <Info className="h-4 w-4" />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="max-w-[240px] text-xs leading-relaxed p-4 bg-popover/95 backdrop-blur-md shadow-xl border-border">
                        Select products for specific side-by-side comparison and use filters to customize the technical data view.
                    </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Render appropriate table based on category */}
            {catKey === "shoes" && <ShoeComparisonTable accentColor={accentColor} />}
            {catKey === "supplements" && <SupplementComparisonTable accentColor={accentColor} />}
            {catKey === "hydration" && <HydrationComparisonTable accentColor={accentColor} />}
            {catKey === "gear" && <GearComparisonTable accentColor={accentColor} />}
            {catKey === "recovery" && <RecoveryComparisonTable accentColor={accentColor} />}
            {catKey === "apparel" && <ApparelComparisonTable accentColor={accentColor} />}
          </div>

          {/* Product Banner Section */}
          <CategoryProductBanner 
            products={getProductSelection()} 
            accentColor={accentColor}
            accentHsl={accentHsl}
            title={`The Runners Hub ${guide?.title || catKey} Selection`}
          />
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
