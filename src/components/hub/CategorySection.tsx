import React from "react";
import { BarChart3 } from "lucide-react";
import ScientificGuideCard from "./ScientificGuideCard";
import RecommendedProducts from "@/components/RecommendedProducts";
import ShoeComparisonTable from "@/components/ShoeComparisonTable";
import SupplementComparisonTable from "@/components/SupplementComparisonTable";
import GearComparisonTable from "@/components/GearComparisonTable";
import ApparelComparisonTable from "@/components/ApparelComparisonTable";
import RecoveryComparisonTable from "@/components/RecoveryComparisonTable";

interface CategorySectionProps {
  catKey: string;
  index: number;
  guide: any;
  accentColor: string;
  matchedComparisons: any[];
  categoryProductTags: Record<string, string[]>;
}

const CategorySection = ({ 
  catKey, 
  index, 
  guide, 
  accentColor, 
  matchedComparisons, 
  categoryProductTags 
}: CategorySectionProps) => {
  return (
    <section id={catKey} className="scroll-mt-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-20">
        {/* Left Column: Main Content */}
        <div>
          <div className="mb-8 items-end justify-between sm:flex border-b border-border pb-6">
            <div className="editorial-line">
              <span 
                className="text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500"
                style={{ color: accentColor }}
              >
                0{index + 1} / {catKey}
              </span>
              <h2 className="mt-2 font-display text-display-md font-bold text-foreground capitalize">
                {guide?.title || catKey}
              </h2>
            </div>
          </div>

          {/* Scientific Guide Card */}
          {guide && <ScientificGuideCard guide={guide} accentColor={accentColor} />}

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

            {/* Goal-specific Intros */}
            <div className="grid gap-4 sm:grid-cols-2">
              {matchedComparisons.map((c) => (
                <div key={c.objective} className="rounded-2xl border border-border bg-muted/30 p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Focus: {c.objective}</span>
                    <BarChart3 className="h-3.5 w-3.5 text-muted-foreground/40" />
                  </div>
                  <p className="text-xs text-muted-foreground italic leading-relaxed">
                    "{c.intro}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Products Grid */}
          <div className="mt-16 mb-8">
            <RecommendedProducts 
              tags={categoryProductTags[catKey] || [catKey]} 
              title={`Top ${guide?.title || catKey} Selection`} 
              maxProducts={20} 
            />
          </div>
        </div>

        {/* Right Column: Sidebar Resources (Rendered separately in MasterHub to maintain sticky behavior if needed, or passed as children) */}
        <div className="hidden lg:block">
           {/* This is a placeholder for the sidebar which remains in MasterHub for now to maintain shared sticky context */}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
