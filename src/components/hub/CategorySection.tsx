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
  sidebar?: React.ReactNode;
}

const CategorySection = ({ 
  catKey, 
  index, 
  guide, 
  accentColor, 
  matchedComparisons, 
  categoryProductTags,
  sidebar
}: CategorySectionProps) => {
  return (
    <section id={catKey} className="scroll-mt-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-10">
        {/* Left Column: Main Content */}
        <div className="min-w-0">
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

        {/* Right Column: Sidebar Resources */}
        <div className="hidden lg:block relative">
           <div className="sticky top-32 space-y-10">
            {sidebar}
           </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
