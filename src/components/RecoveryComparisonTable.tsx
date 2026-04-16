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
import { Activity, HeartPulse, Search } from "lucide-react";
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

interface RecoverySpec {
  name: string;
  brand: string;
  intensity: string; // Density for rollers, mmHg for compression, Stall Force for guns
  techDetails: string; // Surface, Noise, Use case
  useType: "Running" | "Rest" | "Race";
  bestFor: string;
  recommendedFor: string;
  link?: string;
}

const recoverySpecs: RecoverySpec[] = [
  { 
    name: "GRID Foam Roller", 
    brand: "TriggerPoint", 
    intensity: "High (Rigid/Grid)", 
    techDetails: "Sculpted surface for drainage", 
    useType: "Rest",
    bestFor: "Experienced runners seeking deep myofascial release",
    recommendedFor: "All Runners",
    link: "https://www.amazon.it/Trigger-Point-Performance-Rullo-Massaggio/dp/B0040EGNIU"
  },
  { 
    name: "Mini Massage Gun", 
    brand: "Generic", 
    intensity: "12kg Stall Force", 
    techDetails: "Quiet (<45dB) / Portable", 
    useType: "Race",
    bestFor: "Immediate trigger point treatment post-long run",
    recommendedFor: "Recovery / Travel",
    link: "https://www.amazon.it/Mini-Pistola-Massaggio-Muscolare-Portatile/dp/B08L5VYQFZ"
  },
  { 
    name: "Compression Socks", 
    brand: "Physix Gear", 
    intensity: "20-30 mmHg (Graduated)", 
    techDetails: "Increased blood flow / Drainage", 
    useType: "Rest",
    bestFor: "Post-race recovery or for long travel days",
    recommendedFor: "Post-Race / Travel",
    link: "https://www.amazon.it/Physix-Gear-Sport-Compressione-Graduata/dp/B01J4ME6L4"
  },
  { 
    name: "Lacrosse Ball", 
    brand: "Generic", 
    intensity: "Maximum (Focused pressure)", 
    techDetails: "Smooth surface / Dense rubber", 
    useType: "Rest",
    bestFor: "Specific foot sole massage (plantar fasciitis)",
    recommendedFor: "Injury Prevention",
    link: "https://www.amazon.it/Palla-Massaggio-Lacrosse-Trigger-Point/dp/B07V6Q8ZMN"
  },
];

export const RecoveryComparisonTable = ({ accentColor = "hsl(var(--primary))" }: { accentColor?: string }) => {
  const [showFilters, setShowFilters] = useState(false);
  const { 
    searchTerm, setSearchTerm, 
    activeFilters, setActiveFilters,
    selectedNames, toggleSelection, setSelectedNames,
    filteredData, clearFilters 
  } = useProductTable(recoverySpecs, ["name", "brand", "techDetails"]);

  const selectedProducts = recoverySpecs.filter(p => selectedNames.includes(p.name));

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
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Recommended For</label>
            <SelectFilter 
              value={activeFilters.recommendedFor || "all"} 
              onValueChange={(v) => setActiveFilters({...activeFilters, recommendedFor: v})}
              options={[
                { label: "All Contexts", value: "all" },
                { label: "All Runners", value: "All Runners" },
                { label: "Recovery / Travel", value: "Recovery / Travel" },
                { label: "Post-Race / Travel", value: "Post-Race / Travel" },
                { label: "Injury Prevention", value: "Injury Prevention" },
              ]}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Use Type</label>
            <SelectFilter 
              value={activeFilters.useType || "all"} 
              onValueChange={(v) => setActiveFilters({...activeFilters, useType: v})}
              options={[
                { label: "All Types", value: "all" },
                { label: "Rest", value: "Rest" },
                { label: "Race", value: "Race" },
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
                <TableHead className="font-bold text-foreground">Intensity / Density</TableHead>
                <TableHead className="font-bold text-foreground">Specific Use</TableHead>
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
                      <div className="flex flex-col">
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
                          <span>{spec.name}</span>
                        )}
                        <span className="text-[10px] text-muted-foreground uppercase">{spec.brand}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-secondary/50 text-[10px] font-bold uppercase tracking-wider">
                        {spec.recommendedFor}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-foreground">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Activity className="h-3 w-3 text-primary" />
                        {spec.intensity}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`text-[10px] uppercase font-bold tracking-wider ${
                        spec.useType === 'Race' ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-slate-50 text-slate-700'
                      }`}>
                        {spec.useType}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground font-medium italic leading-snug">
                      {spec.bestFor}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-40 text-center">
                    <div className="flex flex-col items-center justify-center text-muted-foreground">
                      <Search className="h-8 w-8 mb-2 opacity-20" />
                      <p className="font-medium">No recovery tools found matching these criteria.</p>
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
                  { label: "Intensity", key: "intensity" },
                  { label: "Specific Use", key: "useType", isBadge: true },
                  { label: "Tech Details", key: "techDetails" },
                  { label: "Best For", key: "bestFor", isItalic: true },
                ].map((row) => (
                  <tr key={row.label} className="hover:bg-muted/5 transition-colors">
                    <td className="p-4 font-bold text-[10px] uppercase tracking-widest text-muted-foreground bg-muted/5 w-32">{row.label}</td>
                    {selectedProducts.map(p => (
                      <td key={p.name} className={`p-4 text-center text-sm border-l border-border ${row.isItalic ? 'italic leading-relaxed' : ''}`}>
                        {row.isBadge ? (
                          <Badge variant="outline" className="text-[10px] uppercase font-bold">{p[row.key as keyof RecoverySpec]}</Badge>
                        ) : (
                          p[row.key as keyof RecoverySpec]
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

export default RecoveryComparisonTable;
