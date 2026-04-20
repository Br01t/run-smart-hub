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
import { Shirt, Zap, ShieldCheck, Search, Wind, Sun, Layers, Ruler, Target, Activity, LayoutGrid } from "lucide-react";
import { useProductTable } from "@/hooks/useProductTable";
import { TableFilterBar } from "./TableFilterBar";
import { ComparisonTray } from "./ComparisonTray";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

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

import { ApparelSpec } from "@/types/specs";
import { apparelSpecs } from "@/data/specs/apparel";

export const ApparelComparisonTable = ({ accentColor = "hsl(230, 80%, 60%)" }: { accentColor?: string }) => {
  const [showFilters, setShowFilters] = useState(false);
  const { 
    searchTerm, setSearchTerm, 
    activeFilters, setActiveFilters,
    selectedNames, toggleSelection, setSelectedNames,
    filteredData, clearFilters 
  } = useProductTable(apparelSpecs, ["name", "brand", "details", "breathability", "antiChafing"]);

  const selectedProducts = apparelSpecs.filter(p => selectedNames.includes(p.name));

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
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block text-left">Category</label>
            <SelectFilter 
              value={activeFilters.category || "all"} 
              onValueChange={(v) => setActiveFilters({...activeFilters, category: v})}
              options={[
                { label: "All Gear", value: "all" },
                { label: "Shirt", value: "Shirt" },
                { label: "Shorts", value: "Shorts" },
                { label: "Jacket", value: "Jacket" },
                { label: "Leggings", value: "Leggings" },
                { label: "Accessory", value: "Accessory" },
              ]}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block text-left">Fit</label>
            <SelectFilter 
              value={activeFilters.fit || "all"} 
              onValueChange={(v) => setActiveFilters({...activeFilters, fit: v})}
              options={[
                { label: "All Fits", value: "all" },
                { label: "Compression", value: "Compression" },
                { label: "Fitted", value: "Fitted" },
                { label: "Loose", value: "Loose" },
                { label: "Regular", value: "Regular" },
                { label: "One Size", value: "One Size" },
              ]}
            />
          </div>
        </TableFilterBar>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30 hover:bg-muted/30">
                <TableHead className="sticky left-0 z-30 w-[50px] px-4 bg-muted/50 backdrop-blur-sm shadow-[1px_0_0_0_rgba(255,255,255,0.05)]"></TableHead>
                <TableHead className="sm:sticky sm:left-[50px] z-30 w-[140px] px-2 font-bold text-foreground text-xs sm:bg-muted/50 sm:backdrop-blur-sm sm:border-r sm:shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                    Product
                </TableHead>
                <TableHead className="w-[100px] px-2 font-bold text-foreground text-[10px] uppercase tracking-tight text-center whitespace-nowrap">
                    <div className="flex flex-col items-center gap-1">
                        <LayoutGrid className="h-3 w-3 opacity-50" />
                        Usage
                    </div>
                </TableHead>
                <TableHead className="w-[140px] px-2 font-bold text-foreground text-[10px] uppercase tracking-tight text-center whitespace-nowrap">
                    <div className="flex flex-col items-center gap-1">
                        <Wind className="h-3 w-3 opacity-50" />
                        Breathability
                    </div>
                </TableHead>
                <TableHead className="w-[120px] px-2 font-bold text-foreground text-[10px] uppercase tracking-tight text-center whitespace-nowrap">
                    <div className="flex flex-col items-center gap-1">
                        <Layers className="h-3 w-3 opacity-50" />
                        Anti-Chafing
                    </div>
                </TableHead>
                <TableHead className="w-[90px] px-2 font-bold text-foreground text-[10px] uppercase tracking-tight text-center whitespace-nowrap">
                    <div className="flex flex-col items-center gap-1">
                        <Sun className="h-3 w-3 opacity-50" />
                        Visibility
                    </div>
                </TableHead>
                <TableHead className="w-[90px] px-2 font-bold text-foreground text-xs text-center whitespace-nowrap">
                    <div className="flex flex-col items-center gap-1">
                        <Ruler className="h-3 w-3 opacity-50" />
                        Fit
                    </div>
                </TableHead>
                <TableHead className="px-4 font-bold text-foreground text-[10px] uppercase tracking-tight whitespace-nowrap">
                    <div className="flex flex-col items-center gap-1">
                        <Target className="h-3 w-3 opacity-50 text-left w-full" />
                        Best For
                    </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((spec) => (
                  <TableRow 
                    key={spec.name} 
                    className={`group transition-all hover:bg-muted/30 ${selectedNames.includes(spec.name) ? 'font-medium' : ''} ${spec.emphasized ? 'bg-primary/5 border-l-2 border-primary' : ''}`}
                    style={{ backgroundColor: selectedNames.includes(spec.name) ? `${accentColor}10` : 'transparent' }}
                  >
                    <TableCell className="sticky left-0 z-20 px-2 w-[50px] text-center bg-card/95 backdrop-blur-sm group-hover:bg-muted/30 transition-colors shadow-[1px_0_0_0_rgba(255,255,255,0.05)]">
                      <Checkbox 
                        checked={selectedNames.includes(spec.name)} 
                        onCheckedChange={() => toggleSelection(spec.name)}
                      />
                    </TableCell>
                    <TableCell className="sm:sticky sm:left-[50px] z-20 px-2 py-3 font-semibold text-foreground text-xs leading-tight sm:bg-card/95 sm:backdrop-blur-sm sm:border-r sm:shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] group-hover:bg-muted/30 transition-colors">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
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
                          {spec.emphasized && (
                            <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-[8px] h-4 px-1 rounded-sm font-bold uppercase tracking-wider shadow-sm text-white border-0 flex items-center gap-1 shrink-0 w-fit">
                              Pick
                            </Badge>
                          )}
                        </div>
                        <span className="text-[9px] text-muted-foreground uppercase opacity-40">{spec.brand}</span>
                      </div>
                    </TableCell>
                    <TableCell className="px-2 text-center">
                      <Badge variant="secondary" className="bg-secondary/50 text-[9px] font-bold uppercase tracking-tighter">
                        {spec.usage}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-2 text-center">
                      <div className="flex flex-col items-center gap-0.5">
                        <Wind className="h-3 w-3 text-primary/60" />
                        <span className="text-[10px] font-bold text-foreground leading-tight text-center">{spec.breathability}</span>
                      </div>
                    </TableCell>
                    <TableCell className="px-2 text-center">
                      <div className="flex flex-col items-center gap-0.5">
                        <Layers className="h-3 w-3 text-indigo-500/60" />
                        <span className="text-[10px] font-medium text-muted-foreground leading-tight">{spec.antiChafing}</span>
                      </div>
                    </TableCell>
                    <TableCell className="px-2 text-center">
                       <div className="flex flex-col items-center gap-0.5">
                        <Sun className={`h-3 w-3 ${spec.visibility.includes('High') ? 'text-amber-500 animate-pulse' : 'text-muted-foreground/30'}`} />
                        <Badge variant="outline" className={`text-[9px] font-bold uppercase p-0 px-1 border-0 ${spec.visibility.includes('High') ? 'text-amber-600' : 'text-muted-foreground'}`}>
                          {spec.visibility}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="px-2 text-center">
                      <div className="flex flex-col items-center gap-0.5">
                        <Ruler className="h-3 w-3 text-muted-foreground/30" />
                        <Badge variant="outline" className="text-[9px] uppercase font-bold tracking-tighter px-1">
                          {spec.fit}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="px-2 text-[11px] text-muted-foreground font-medium italic leading-tight">
                      {spec.bestFor}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="h-40 text-center">
                    <div className="flex flex-col items-center justify-center text-muted-foreground">
                      <Search className="h-8 w-8 mb-2 opacity-20" />
                      <p className="font-medium">No apparel found matching these criteria.</p>
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
                <tr className="hover:bg-muted/5 transition-colors">
                  <td className="p-4 font-bold text-[10px] uppercase tracking-widest text-muted-foreground bg-muted/5 w-32 align-middle">Price</td>
                  {selectedProducts.map(p => (
                    <td key={p.name} className="p-4 text-center border-l border-border font-display text-base font-bold text-foreground">
                      {p.price || "€---"}
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
                  { label: "Category", key: "category", isBadge: true },
                  { label: "Breathability", key: "breathability" },
                  { label: "Anti-Chafing", key: "antiChafing" },
                  { label: "Visibility", key: "visibility", isBadge: true },
                  { label: "Seasonal", key: "seasonal" },
                  { label: "Fit", key: "fit", isBadge: true },
                  { label: "Details", key: "details" },
                  { label: "Best For", key: "bestFor", isItalic: true },
                ].map((row) => (
                  <tr key={row.label} className="hover:bg-muted/5 transition-colors">
                    <td className="p-4 font-bold text-[10px] uppercase tracking-widest text-muted-foreground bg-muted/5 w-32">{row.label}</td>
                    {selectedProducts.map(p => (
                      <td key={p.name} className={`p-4 text-center text-sm border-l border-border ${row.isItalic ? 'italic leading-relaxed' : ''}`}>
                        {row.isBadge ? (
                          <Badge variant="outline" className={`text-[10px] uppercase font-bold ${p.visibility.includes('High') && row.key === 'visibility' ? 'bg-amber-50 text-amber-600' : ''}`}>
                            {p[row.key as keyof ApparelSpec]}
                          </Badge>
                        ) : (
                          p[row.key as keyof ApparelSpec]
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

export default ApparelComparisonTable;
