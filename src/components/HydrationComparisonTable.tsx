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
import { Droplets, Info, Search, Zap, Star, Clock, Activity, Box, Apple, Target } from "lucide-react";
import { useProductTable } from "@/hooks/useProductTable";
import { TableFilterBar } from "@/components/TableFilterBar";
import { ComparisonTray } from "@/components/ComparisonTray";
import { Button } from "@/components/ui/button";
import { hydrationSpecs } from "@/data/specs/hydration";
import { GearSpec } from "@/types/specs";

export const HydrationComparisonTable = ({ 
  accentColor = "hsl(190, 90%, 45%)",
  sport,
  objective
}: { 
  accentColor?: string;
  sport?: string;
  objective?: string;
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const { 
    searchTerm, setSearchTerm, 
    activeFilters, setActiveFilters,
    selectedNames, toggleSelection, setSelectedNames,
    filteredData, clearFilters 
  } = useProductTable(hydrationSpecs, ["name", "brand", "bestFor", "effect"]);

  const selectedProducts = hydrationSpecs.filter(p => selectedNames.includes(p.name));

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
          title="Confronto Idratazione"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground text-left block">Formato</label>
              <select 
                value={activeFilters.format || "all"} 
                onChange={(e) => setActiveFilters({...activeFilters, format: e.target.value})}
                className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <option value="all">Tutti i Formati</option>
                <option value="Polvere">Polvere</option>
                <option value="Bustine">Bustine</option>
                <option value="Compresse">Compresse</option>
              </select>
            </div>
          </div>
        </TableFilterBar>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30 hover:bg-muted/30">
                <TableHead className="sticky left-0 z-30 w-[50px] px-4 bg-muted/50 backdrop-blur-sm shadow-[1px_0_0_0_rgba(255,255,255,0.05)]"></TableHead>
                <TableHead className="sm:sticky sm:left-[50px] z-30 w-[140px] px-2 font-bold text-foreground text-xs sm:bg-muted/50 sm:backdrop-blur-sm sm:border-r sm:shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                    Prodotto
                </TableHead>
                <TableHead className="w-[100px] px-2 font-bold text-foreground text-xs text-center whitespace-nowrap">
                    <div className="flex flex-col items-center gap-1">
                        <Box className="h-3 w-3 opacity-50" />
                        Formato
                    </div>
                </TableHead>
                <TableHead className="w-[90px] px-2 font-bold text-foreground text-xs text-center whitespace-nowrap">
                    <div className="flex flex-col items-center gap-1">
                        <Zap className="h-3 w-3 opacity-50 text-blue-500" />
                        Sodio
                    </div>
                </TableHead>
                <TableHead className="w-[90px] px-2 font-bold text-foreground text-xs text-center whitespace-nowrap">
                    <div className="flex flex-col items-center gap-1">
                        <Apple className="h-3 w-3 opacity-50 text-emerald-500" />
                        Zucchero
                    </div>
                </TableHead>
                <TableHead className="w-[120px] px-2 font-bold text-foreground text-[10px] uppercase tracking-tight text-center whitespace-nowrap">
                    <div className="flex flex-col items-center gap-1">
                        <Activity className="h-3 w-3 opacity-50" />
                        Focus Principale
                    </div>
                </TableHead>
                <TableHead className="w-[110px] px-2 font-bold text-foreground text-[10px] uppercase tracking-tight text-center whitespace-nowrap">
                    <div className="flex flex-col items-center gap-1">
                        <Clock className="h-3 w-3 opacity-50" />
                        Timing
                    </div>
                </TableHead>
                <TableHead className="px-4 font-bold text-foreground text-[10px] uppercase tracking-tight whitespace-nowrap">
                    <div className="flex flex-col items-center gap-1">
                        <Target className="h-3 w-3 opacity-50 text-left w-full" />
                        Ideale per
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
                    <TableCell className="px-2 text-center text-[10px]">
                      <Badge variant="outline" className="bg-blue-500/5 text-blue-700 border-blue-200/50 text-[9px] font-bold uppercase tracking-widest whitespace-nowrap">
                        {spec.format}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-2 text-center">
                      <div className="text-[10px] font-bold text-primary font-mono bg-primary/5 px-2 py-0.5 rounded border border-primary/10 inline-block">
                        {spec.sodium}
                      </div>
                    </TableCell>
                    <TableCell className="px-2 text-center text-[10px]">
                      <div className={`text-[10px] font-bold px-2 py-0.5 rounded border inline-block ${spec.sugar === '0g' || spec.sugar === 'Zero' ? 'text-emerald-700 bg-emerald-50 border-emerald-100' : 'text-amber-700 bg-amber-50 border-amber-100'}`}>
                        {spec.sugar}
                      </div>
                    </TableCell>
                    <TableCell className="px-2 text-center text-[10px] font-bold text-foreground leading-tight">{spec.effect}</TableCell>
                    <TableCell className="px-2 text-center text-[11px] text-muted-foreground font-medium leading-tight">{spec.timing}</TableCell>
                    <TableCell className="px-4 text-[11px] text-muted-foreground font-medium italic leading-tight">
                      {spec.bestFor}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="h-40 text-center">
                    <div className="flex flex-col items-center justify-center text-muted-foreground">
                      <Search className="h-8 w-8 mb-2 opacity-20" />
                      <p className="font-medium">Nessun prodotto per l'idratazione trovato.</p>
                      <Button variant="link" size="sm" onClick={clearFilters} className="mt-1">Cancella tutti i filtri</Button>
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
                  <th className="p-4 bg-muted/50 font-bold text-sm uppercase tracking-wider text-muted-foreground text-left">Caratteristica</th>
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
                  <td className="p-4 font-bold text-[10px] uppercase tracking-widest text-muted-foreground bg-muted/5 w-32 align-middle">Prezzo</td>
                  {selectedProducts.map(p => (
                    <td key={p.name} className="p-4 text-center border-l border-border font-display text-base font-bold text-foreground">
                      {p.price || "€---"}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-muted/5 transition-colors border-t border-border">
                  <td className="p-4 font-bold text-[10px] uppercase tracking-widest text-muted-foreground bg-muted/5 w-32 align-middle">Immagine</td>
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
                  { label: "Utilizzo", key: "usage" },
                  { label: "Formato", key: "format" },
                  { label: "Sodio", key: "sodium" },
                  { label: "Zucchero", key: "sugar" },
                  { label: "Timing", key: "timing" },
                  { label: "Focus", key: "effect" },
                  { label: "Ideale per", key: "bestFor", isItalic: true },
                ].map((row) => (
                  <tr key={row.label} className="hover:bg-muted/5 transition-colors">
                    <td className="p-4 font-bold text-[10px] uppercase tracking-widest text-muted-foreground bg-muted/5 w-32">{row.label}</td>
                    {selectedProducts.map(p => (
                      <td key={p.name} className={`p-4 text-center text-sm border-l border-border ${row.isItalic ? 'italic leading-relaxed' : ''}`}>
                        {p[row.key as keyof GearSpec] || "---"}
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

export default HydrationComparisonTable;
