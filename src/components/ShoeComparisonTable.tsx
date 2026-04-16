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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Info, Search } from "lucide-react";
import { useProductTable } from "@/hooks/useProductTable";
import { TableFilterBar } from "./TableFilterBar";
import { ComparisonTray } from "./ComparisonTray";

// Internal helper for Select
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

interface ShoeSpec {
  name: string;
  weight: string;
  drop: string;
  cushion: "Minimal" | "Balanced" | "Maximum";
  support: "Neutral" | "Stable";
  bestFor: string;
  terrain: "Road" | "Trail";
  link?: string;
}

const shoeSpecs: ShoeSpec[] = [
  { 
    name: "Nike Revolution 6", 
    weight: "280g", 
    drop: "10mm", 
    cushion: "Balanced", 
    support: "Neutral", 
    bestFor: "Beginners running < 15km/week",
    terrain: "Road",
    link: "https://www.amazon.it/Nike-Revolution-Scarpe-Corsa-Uomo/dp/B09WMQBLHC"
  },
  { 
    name: "Adidas Duramo Speed", 
    weight: "265g", 
    drop: "6mm", 
    cushion: "Minimal", 
    support: "Neutral", 
    bestFor: "Those seeking reactivity and speed at a great price",
    terrain: "Road",
    link: "https://www.amazon.it/adidas-Duramo-Speed-M-Scarpe-Running/dp/B0BYDLN6R7"
  },
  { 
    name: "ASICS Gel-Contend 8", 
    weight: "300g", 
    drop: "10mm", 
    cushion: "Maximum", 
    support: "Stable", 
    bestFor: "Runners looking for extra stability and protection",
    terrain: "Road",
    link: "https://www.amazon.it/ASICS-Gel-Contend-Scarpe-Running-Uomo/dp/B0B6H2K1RT"
  },
  { 
    name: "NB Fresh Foam Arishi v4", 
    weight: "250g", 
    drop: "8mm", 
    cushion: "Maximum", 
    support: "Neutral", 
    bestFor: "Versatile runners (running + gym)",
    terrain: "Road",
    link: "https://www.amazon.it/New-Balance-Fresh-Arishi-Running/dp/B0BN5TQHVC"
  },
  { 
    name: "Puma Electrify Nitro", 
    weight: "240g", 
    drop: "8mm", 
    cushion: "Minimal", 
    support: "Neutral", 
    bestFor: "Tempo runs and speed sessions",
    terrain: "Road",
    link: "https://www.amazon.it/PUMA-Electrify-Nitro-Scarpe-Running/dp/B0BSLRRLNQ"
  },
  { 
    name: "Brooks Cascadia", 
    weight: "310g", 
    drop: "8mm", 
    cushion: "Balanced", 
    support: "Stable", 
    bestFor: "Technical trails and uneven terrain",
    terrain: "Trail",
    link: "https://www.amazon.it/Brooks-Cascadia-17-Scarpa-Running/dp/B0B6H2K1RT"
  },
  { 
    name: "Salomon Speedcross", 
    weight: "298g", 
    drop: "10mm", 
    cushion: "Minimal", 
    support: "Neutral", 
    bestFor: "Maximum grip on mud and soft terrain",
    terrain: "Trail",
    link: "https://www.amazon.it/Salomon-Speedcross-6-Trail-Running-Shoes/dp/B09WMQBLHC"
  },
];

export const ShoeComparisonTable = ({ accentColor = "hsl(var(--primary))" }: { accentColor?: string }) => {
  const [showFilters, setShowFilters] = useState(false);
  const { 
    searchTerm, setSearchTerm, 
    activeFilters, setActiveFilters,
    selectedNames, toggleSelection, setSelectedNames,
    filteredData, clearFilters 
  } = useProductTable(shoeSpecs, ["name", "bestFor"]);

  const selectedProducts = shoeSpecs.filter(p => selectedNames.includes(p.name));

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
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Terrain</label>
            <SelectFilter 
              value={activeFilters.terrain || "all"} 
              onValueChange={(v) => setActiveFilters({...activeFilters, terrain: v})}
              options={[
                { label: "All Terrains", value: "all" },
                { label: "Road", value: "Road" },
                { label: "Trail", value: "Trail" },
              ]}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Cushioning</label>
            <SelectFilter 
              value={activeFilters.cushion || "all"} 
              onValueChange={(v) => setActiveFilters({...activeFilters, cushion: v})}
              options={[
                { label: "All Levels", value: "all" },
                { label: "Minimal", value: "Minimal" },
                { label: "Balanced", value: "Balanced" },
                { label: "Maximum", value: "Maximum" },
              ]}
            />
          </div>
        </TableFilterBar>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30 hover:bg-muted/30">
                <TableHead className="w-[50px] px-4"></TableHead>
                <TableHead className="w-[180px] font-bold text-foreground">Model</TableHead>
                <TableHead className="font-bold text-foreground text-center">Terrain</TableHead>
                <TableHead className="font-bold text-foreground text-center">Weight</TableHead>
                <TableHead className="font-bold text-foreground text-center">Drop</TableHead>
                <TableHead className="font-bold text-foreground">Cushioning</TableHead>
                <TableHead className="font-bold text-foreground">Support</TableHead>
                <TableHead className="font-bold text-foreground">Best For</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((shoe) => (
                  <TableRow 
                    key={shoe.name} 
                    className={`group transition-all hover:bg-muted/30 ${selectedNames.includes(shoe.name) ? 'font-medium' : ''}`}
                    style={{ backgroundColor: selectedNames.includes(shoe.name) ? `${accentColor}10` : 'transparent' }}
                  >
                    <TableCell className="px-4">
                      <Checkbox 
                        checked={selectedNames.includes(shoe.name)} 
                        onCheckedChange={() => toggleSelection(shoe.name)}
                      />
                    </TableCell>
                    <TableCell className="font-semibold text-foreground">
                      <div className="flex flex-col">
                        {shoe.link ? (
                          <a 
                            href={shoe.link} 
                            target="_blank" 
                            rel="noopener noreferrer sponsored"
                            className="hover:text-primary transition-colors hover:underline decoration-primary/30 underline-offset-4"
                          >
                            {shoe.name}
                          </a>
                        ) : (
                          <span>{shoe.name}</span>
                        )}
                        <span className="text-[10px] text-muted-foreground uppercase opacity-0 transition-opacity group-hover:opacity-100">Technical Model</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant="secondary" className="bg-secondary/50 text-[10px] font-bold uppercase tracking-wider">
                        {shoe.terrain}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-center text-muted-foreground font-medium">{shoe.weight}</TableCell>
                    <TableCell className="text-sm text-center text-muted-foreground font-mono font-bold italic">{shoe.drop}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`text-[10px] uppercase font-bold tracking-wider ${
                        shoe.cushion === 'Maximum' ? 'bg-sky-50 text-sky-700 border-sky-100' : 
                        shoe.cushion === 'Minimal' ? 'bg-amber-50 text-amber-700 border-amber-100' : 
                        'bg-slate-50 text-slate-700'
                      }`}>
                        {shoe.cushion}
                      </Badge>
                    </TableCell>
                    <TableCell>
                       <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                         <div className={`h-2 w-2 rounded-full ${shoe.support === 'Stable' ? 'bg-indigo-500' : 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]'}`} />
                         {shoe.support}
                       </span>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground font-medium italic leading-snug">
                      {shoe.bestFor}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="h-40 text-center">
                    <div className="flex flex-col items-center justify-center text-muted-foreground">
                      <Search className="h-8 w-8 mb-2 opacity-20" />
                      <p className="font-medium">No shoes found matching these criteria.</p>
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
                  { label: "Terrain", key: "terrain" },
                  { label: "Weight", key: "weight" },
                  { label: "Drop", key: "drop" },
                  { label: "Cushioning", key: "cushion", isBadge: true },
                  { label: "Support", key: "support" },
                  { label: "Best For", key: "bestFor", isItalic: true },
                ].map((row) => (
                  <tr key={row.label} className="hover:bg-muted/5 transition-colors">
                    <td className="p-4 font-bold text-[10px] uppercase tracking-widest text-muted-foreground bg-muted/5 w-32">{row.label}</td>
                    {selectedProducts.map(p => (
                      <td key={p.name} className={`p-4 text-center text-sm border-l border-border ${row.isItalic ? 'italic leading-relaxed' : ''}`}>
                        {row.isBadge ? (
                          <Badge variant="outline" className="text-[10px] uppercase font-bold">{p[row.key as keyof ShoeSpec]}</Badge>
                        ) : (
                          p[row.key as keyof ShoeSpec]
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

export default ShoeComparisonTable;
