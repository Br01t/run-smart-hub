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
import { Info, Search, Star } from "lucide-react";
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

import { ShoeSpec } from "@/types/specs";
import { shoeSpecs } from "@/data/specs/shoes";

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
                <TableHead className="w-[140px] px-2 font-bold text-foreground text-xs">Model</TableHead>
                <TableHead className="w-[85px] px-2 font-bold text-foreground text-xs text-center">Terrain</TableHead>
                <TableHead className="w-[75px] px-2 font-bold text-foreground text-xs text-center">Weight</TableHead>
                <TableHead className="w-[65px] px-2 font-bold text-foreground text-xs text-center">Drop</TableHead>
                <TableHead className="w-[100px] px-2 font-bold text-foreground text-[10px] uppercase tracking-tight">Cushioning</TableHead>
                <TableHead className="w-[100px] px-2 font-bold text-foreground text-[10px] uppercase tracking-tight">Support</TableHead>
                <TableHead className="px-2 font-bold text-foreground text-[10px] uppercase tracking-tight">Best For</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((shoe) => (
                  <TableRow 
                    key={shoe.name} 
                    className={`group transition-all hover:bg-muted/30 ${selectedNames.includes(shoe.name) ? 'font-medium' : ''} ${shoe.emphasized ? 'bg-primary/5 border-l-2 border-primary' : ''}`}
                    style={{ backgroundColor: selectedNames.includes(shoe.name) ? `${accentColor}10` : (shoe.emphasized ? 'var(--primary-light)' : 'transparent') }}
                  >
                    <TableCell className="px-2 w-[40px] text-center">
                      <Checkbox 
                        checked={selectedNames.includes(shoe.name)} 
                        onCheckedChange={() => toggleSelection(shoe.name)}
                      />
                    </TableCell>
                    <TableCell className="px-2 py-3 font-semibold text-foreground text-xs leading-tight">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
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
                          {shoe.emphasized && (
                            <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-[8px] h-4 px-1 rounded-sm font-bold uppercase tracking-wider shadow-sm text-white border-0 flex items-center gap-1 shrink-0 w-fit">
                              Expert Pick
                            </Badge>
                          )}
                        </div>
                        <span className="text-[9px] text-muted-foreground uppercase opacity-0 transition-opacity group-hover:opacity-100">Technical Model</span>
                      </div>
                    </TableCell>
                    <TableCell className="px-2 text-center">
                      <Badge variant="secondary" className="bg-secondary/50 text-[9px] font-bold uppercase tracking-tighter">
                        {shoe.terrain}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-2 text-[11px] text-center text-muted-foreground font-medium">{shoe.weight}</TableCell>
                    <TableCell className="px-2 text-[11px] text-center text-muted-foreground font-mono font-bold italic">{shoe.drop}</TableCell>
                    <TableCell className="px-2">
                      <Badge variant="outline" className={`text-[9px] uppercase font-bold tracking-tighter px-1 ${
                        shoe.cushion === 'Maximum' ? 'bg-sky-50 text-sky-700 border-sky-100' : 
                        shoe.cushion === 'Minimal' ? 'bg-amber-50 text-amber-700 border-amber-100' : 
                        'bg-slate-50 text-slate-700'
                      }`}>
                        {shoe.cushion}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-2">
                       <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-foreground">
                         <div className={`h-2 w-2 rounded-full ${shoe.support === 'Stable' ? 'bg-indigo-500' : 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]'}`} />
                         {shoe.support}
                       </span>
                    </TableCell>
                    <TableCell className="px-2 text-[11px] text-muted-foreground font-medium italic leading-tight">
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
              <tbody className="divide-y divide-border text-foreground">
                <tr className="hover:bg-muted/5 transition-colors">
                  <td className="p-4 font-bold text-[10px] uppercase tracking-widest text-muted-foreground bg-muted/5 w-32 align-middle">Price</td>
                  {selectedProducts.map(p => (
                    <td key={p.name} className="p-4 text-center border-l border-border font-display text-base font-bold text-foreground">
                      {p.price}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-muted/5 transition-colors border-t border-border">
                  <td className="p-4 font-bold text-[10px] uppercase tracking-widest text-muted-foreground bg-muted/5 w-32 align-middle">Visual</td>
                  {selectedProducts.map(p => (
                    <td key={p.name} className="p-4 text-center border-l border-border bg-white/50">
                      <div className="flex justify-center">
                        <div className="relative group/img h-32 w-40 overflow-hidden rounded-lg border border-border bg-white p-2 shadow-sm transition-transform hover:scale-105">
                          <img 
                            src={p.image} 
                            alt={p.name} 
                            className="h-full w-full object-contain"
                          />
                        </div>
                      </div>
                    </td>
                  ))}
                </tr>
                {[
                  { label: "Terrain", key: "terrain", isBadge: true },
                  { label: "Weight", key: "weight" },
                  { label: "Drop", key: "drop" },
                  { label: "Cushion", key: "cushion", isBadge: true },
                  { label: "Support", key: "support", isBadge: true },
                  { label: "Best For", key: "bestFor", isItalic: true },
                ].map((row) => (
                  <tr key={row.label} className="hover:bg-muted/5 transition-colors">
                    <td className="p-4 font-bold text-[10px] uppercase tracking-widest text-muted-foreground bg-muted/5 w-32 align-middle">{row.label}</td>
                    {selectedProducts.map(p => (
                      <td key={p.name} className={`p-4 text-center text-sm border-l border-border ${row.isItalic ? 'italic leading-relaxed' : ''}`}>
                        {row.isBadge ? (
                          <Badge variant="outline" className={`text-[10px] uppercase font-bold ${
                            p[row.key as keyof ShoeSpec] === 'Trail' ? 'bg-amber-50 text-amber-700 border-amber-100' : 
                            p[row.key as keyof ShoeSpec] === 'Maximum' ? 'bg-sky-50 text-sky-700 border-sky-100' : ''
                          }`}>
                            {p[row.key as keyof ShoeSpec]}
                          </Badge>
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
