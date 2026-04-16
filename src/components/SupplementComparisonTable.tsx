import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  SelectItem,
  Select, 
  SelectContent, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Activity, Clock, Search } from "lucide-react";
import { useProductTable } from "@/hooks/useProductTable";
import { TableFilterBar } from "./TableFilterBar";
import { ComparisonTray } from "./ComparisonTray";
import { Button } from "@/components/ui/button";

const SelectFilter = ({ value, onValueChange, options }: { value: string, onValueChange: (v: string) => void, options: {label: string, value: string}[] }) => (
  <Select value={value} onValueChange={onValueChange}>
    <SelectTrigger className="bg-background">
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      {options.map(opt => (
        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
      ))}
    </SelectContent>
  </Select>
);

interface SupplementSpec {
  name: string;
  absorption: "Fast" | "Medium" | "Slow";
  timing: "Pre-workout" | "During" | "Post-workout" | "Anytime";
  ingredients: string;
  effect: string;
  bestFor: string;
  recommendedFor: string;
  link?: string;
}

const supplementSpecs: SupplementSpec[] = [
  { 
    name: "Impact Whey Protein", 
    absorption: "Fast", 
    timing: "Post-workout", 
    ingredients: "80% Whey Protein + BCAA", 
    bestFor: "Immediate muscle recovery post-effort",
    effect: "Anabolic / Reparative",
    recommendedFor: "Recovery",
    link: "https://www.myprotein.com/p/sports-nutrition/impact-whey-protein-powder/10530943/"
  },
  { 
    name: "Impact Whey Isolate", 
    absorption: "Fast", 
    timing: "Post-workout", 
    ingredients: "90% Whey Protein Isolate", 
    bestFor: "Maximum protein purity and fast muscle recovery",
    effect: "Lean muscle growth",
    recommendedFor: "Recovery",
    link: "https://www.myprotein.com/p/sports-nutrition/impact-whey-isolate-powder/10530911/"
  },
  { 
    name: "Impact EAA", 
    absorption: "Fast", 
    timing: "Post-workout", 
    ingredients: "All 9 Essential Amino Acids", 
    bestFor: "Superior muscle repair and prevention of catabolism",
    effect: "Protein Synthesis Support",
    recommendedFor: "Recovery",
    link: "https://www.myprotein.com/p/sports-nutrition/impact-eaa/11985042/"
  },
  { 
    name: "100% Maltodextrin Carbs", 
    absorption: "Fast", 
    timing: "During", 
    ingredients: "Pure Maltodextrin", 
    bestFor: "Glycogen replenishment during long runs",
    effect: "Energy source",
    recommendedFor: "Endurance",
    link: "https://www.myprotein.com/p/sports-nutrition/100-maltodextrin-carbs/10530114/"
  },
  { 
    name: "Oat Protein Flapjack", 
    absorption: "Medium", 
    timing: "Post-workout", 
    ingredients: "Rolled Oats + Whey Protein", 
    bestFor: "Convenient recovery snack with balanced macros",
    effect: "Sustained Repair",
    recommendedFor: "Recovery",
    link: "https://www.myprotein.com/p/sports-nutrition/oat-protein-flapjack/11147245/"
  },
  { 
    name: "Impact Creatine", 
    absorption: "Medium", 
    timing: "Anytime", 
    ingredients: "Pure micronized creatine", 
    bestFor: "Increasing power in sprints and strength",
    effect: "Phosphocreatine saturation",
    recommendedFor: "Power / Strength",
    link: "https://www.myprotein.com/p/sports-nutrition/creatine-monohydrate-powder/10530050/"
  },
  { 
    name: "Beta Alanine", 
    absorption: "Slow", 
    timing: "Pre-workout", 
    ingredients: "Pure amino acid", 
    bestFor: "Reduction of fatigue feeling in high intensities",
    effect: "Lactic acid buffer",
    recommendedFor: "Intensity",
    link: "https://www.myprotein.com/p/sports-nutrition/beta-alanine/10529809/"
  },
  { 
    name: "Alpha BRAIN (90ct)", 
    absorption: "Fast", 
    timing: "Pre-workout", 
    ingredients: "L-Theanine, Bacopa, Cat's Claw", 
    bestFor: "Mental clarity and sharp focus during races",
    effect: "Cognitive support",
    recommendedFor: "Focus",
    link: "https://www.onnit.com/products/alpha-brain-90-ct"
  },
  { 
    name: "Alpha BRAIN (60ct)", 
    absorption: "Fast", 
    timing: "Pre-workout", 
    ingredients: "L-Theanine, Bacopa, Cat's Claw", 
    bestFor: "Daily cognitive support and focus",
    effect: "Mental processing speed",
    recommendedFor: "Daily Focus",
    link: "https://www.onnit.com/products/alpha-brain-60-ct"
  },
  { 
    name: "Alpha BRAIN Black Label", 
    absorption: "Fast", 
    timing: "Pre-workout", 
    ingredients: "Lion's Mane, L-Tyrosine", 
    bestFor: "Elite performers needing maximum cognitive drive",
    effect: "Potent mental focus",
    recommendedFor: "Elite Focus",
    link: "https://www.onnit.com/products/alpha-brain-black-label-80-ct"
  },
  { 
    name: "Shroom TECH Sport", 
    absorption: "Medium", 
    timing: "Pre-workout", 
    ingredients: "Cordyceps + Mushrooms", 
    bestFor: "Oxygen optimization in endurance sports",
    effect: "Respiratory support",
    recommendedFor: "Endurance",
    link: "https://www.onnit.com/products/shroom-tech-sport-84-ct"
  },
  { 
    name: "Total Human", 
    absorption: "Medium", 
    timing: "Anytime", 
    ingredients: "Detailed Day/Night Packs", 
    bestFor: "General health and full-body recovery",
    effect: "Systemic recovery",
    recommendedFor: "All Sports",
    link: "https://www.onnit.com/products/total-human-30-day-supply"
  },
];

export const SupplementComparisonTable = ({ accentColor = "hsl(var(--primary))" }: { accentColor?: string }) => {
  const [showFilters, setShowFilters] = useState(false);
  const { 
    searchTerm, setSearchTerm, 
    activeFilters, setActiveFilters,
    selectedNames, toggleSelection, setSelectedNames,
    filteredData, clearFilters 
  } = useProductTable(supplementSpecs, ["name", "ingredients", "effect"]);

  const selectedProducts = supplementSpecs.filter(p => selectedNames.includes(p.name));

  return (
    <div className="my-8 space-y-4">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md">
        <TableFilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          activeFiltersCount={Object.keys(activeFilters).length}
          onClearFilters={clearFilters}
          accentColor={accentColor}
        >
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Timing</label>
            <SelectFilter 
              value={activeFilters.timing || "all"} 
              onValueChange={(v) => setActiveFilters({...activeFilters, timing: v})}
              options={[
                { label: "All Timings", value: "all" },
                { label: "Pre-workout", value: "Pre-workout" },
                { label: "During", value: "During" },
                { label: "Post-workout", value: "Post-workout" },
                { label: "Anytime", value: "Anytime" },
              ]}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Absorption</label>
            <SelectFilter 
              value={activeFilters.absorption || "all"} 
              onValueChange={(v) => setActiveFilters({...activeFilters, absorption: v})}
              options={[
                { label: "All Speeds", value: "all" },
                { label: "Fast", value: "Fast" },
                { label: "Medium", value: "Medium" },
                { label: "Slow", value: "Slow" },
              ]}
            />
          </div>
        </TableFilterBar>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30 hover:bg-muted/30">
                <TableHead className="w-[50px] px-4"></TableHead>
                <TableHead className="w-[180px] font-bold text-foreground">Product</TableHead>
                <TableHead className="font-bold text-foreground">Recommended For</TableHead>
                <TableHead className="font-bold text-foreground">Absorption</TableHead>
                <TableHead className="font-bold text-foreground">Timing</TableHead>
                <TableHead className="font-bold text-foreground">Key Ingredients</TableHead>
                <TableHead className="font-bold text-foreground">Primary Effect</TableHead>
                <TableHead className="font-bold text-foreground">Best For</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((spec) => (
                  <TableRow 
                    key={spec.name} 
                    className={`group transition-all hover:bg-muted/30 ${selectedNames.includes(spec.name) ? 'font-medium' : ''}`}
                    style={{ backgroundColor: selectedNames.includes(spec.name) ? `${accentColor}10` : 'transparent' }}
                  >
                    <TableCell className="px-4">
                      <Checkbox 
                        checked={selectedNames.includes(spec.name)} 
                        onCheckedChange={() => toggleSelection(spec.name)}
                      />
                    </TableCell>
                    <TableCell className="font-semibold text-foreground">
                      {spec.link ? (
                        <a 
                          href={spec.link} 
                          target="_blank" 
                          rel="noopener noreferrer sponsored"
                          className="hover:text-primary transition-colors hover:underline decoration-primary/30 underline-offset-4"
                        >
                          {spec.name}
                        </a>
                      ) : (
                        spec.name
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-secondary/50 text-[10px] font-bold uppercase tracking-wider">
                        {spec.recommendedFor}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`text-[10px] uppercase font-bold tracking-wider ${
                        spec.absorption === 'Fast' ? 'bg-emerald-50 text-emerald-700 border-emerald-100 shadow-[0_0_8px_rgba(16,185,129,0.1)]' : 'bg-slate-50 text-slate-700'
                      }`}>
                        {spec.absorption}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3 w-3 text-primary" />
                        {spec.timing}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground font-medium">{spec.ingredients}</TableCell>
                    <TableCell className="text-sm font-bold text-foreground">{spec.effect}</TableCell>
                    <TableCell className="text-sm text-muted-foreground font-medium italic leading-snug">
                      {spec.bestFor}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="h-40 text-center">
                    <div className="flex flex-col items-center justify-center text-muted-foreground">
                      <Search className="h-8 w-8 mb-2 opacity-20" />
                      <p className="font-medium">No results found for these filters.</p>
                      <Button variant="link" size="sm" onClick={clearFilters} className="mt-1">Clear all filters</Button>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <ComparisonTray
        selectedNames={selectedNames}
        selectedProducts={selectedProducts}
        onClear={() => setSelectedNames([])}
        renderComparisonTable={() => (
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 bg-muted/50 font-bold text-sm uppercase tracking-wider text-muted-foreground">Feature</th>
                  {selectedProducts.map(p => (
                    <th 
                      key={p.name} 
                      className="p-4 text-center font-display text-lg font-bold border-l border-border transition-colors duration-500"
                      style={{ backgroundColor: `${accentColor}10`, color: accentColor }}
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { label: "Recommendation", key: "recommendedFor" },
                  { label: "Absorption", key: "absorption", isBadge: true },
                  { label: "Timing", key: "timing" },
                  { label: "Ingredients", key: "ingredients" },
                  { label: "Primary Effect", key: "effect" },
                  { label: "Best For", key: "bestFor", isItalic: true },
                ].map((row) => (
                  <tr key={row.label} className="hover:bg-muted/5 transition-colors">
                    <td className="p-4 font-bold text-[10px] uppercase tracking-widest text-muted-foreground bg-muted/5 w-32">{row.label}</td>
                    {selectedProducts.map(p => (
                      <td key={p.name} className={`p-4 text-center text-sm border-l border-border ${row.isItalic ? 'italic leading-relaxed' : ''}`}>
                        {row.isBadge ? (
                          <Badge variant="outline" className="text-[10px] uppercase font-bold">{p[row.key as keyof SupplementSpec]}</Badge>
                        ) : (
                          p[row.key as keyof SupplementSpec]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      />
    </div>
  );
};

export default SupplementComparisonTable;
