import { useState, useMemo } from "react";
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
import { Info, Search, Star, Mountain, Scale, ArrowDownLeft, Cloud, Shield, Activity } from "lucide-react";
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

export const ShoeComparisonTable = ({ 
  accentColor = "hsl(var(--primary))",
  sport,
  objective
}: { 
  accentColor?: string;
  sport?: string;
  objective?: string;
}) => {
  const [showFilters, setShowFilters] = useState(false);

  const filteredSpecs = useMemo(() => {
    let list = shoeSpecs;
    if (sport) {
      if (sport === "trail" || sport === "trail-running") {
        list = list.filter(s => s.terrain === "Trail");
      } else if (["running", "marathon", "half-marathon", "5k", "10k"].includes(sport)) {
        list = list.filter(s => s.terrain === "Strada");
      }
    }
    if (objective) {
      if (objective === "performance") {
        list = list.filter(s => ["Alphafly 3", "Vaporfly 3", "Adizero Adios Pro 3", "Adizero Adios Pro Evo 1", "Puma Electrify Nitro", "Adidas Duramo Speed"].includes(s.name));
      }
    }
    return list;
  }, [sport, objective]);

  const { 
    searchTerm, setSearchTerm, 
    activeFilters, setActiveFilters,
    selectedNames, toggleSelection, setSelectedNames,
    filteredData, clearFilters 
  } = useProductTable(filteredSpecs, ["name", "bestFor"]);

  const selectedProducts = filteredSpecs.filter(p => selectedNames.includes(p.name));

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
          title="Confronto Scarpe"
        >
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Terreno</label>
            <SelectFilter 
              value={activeFilters.terrain || "all"} 
              onValueChange={(v) => setActiveFilters({...activeFilters, terrain: v})}
              options={[
                { label: "Tutti i Terreni", value: "all" },
                { label: "Strada", value: "Road" },
                { label: "Trail", value: "Trail" },
              ]}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Ammortizzazione</label>
            <SelectFilter 
              value={activeFilters.cushion || "all"} 
              onValueChange={(v) => setActiveFilters({...activeFilters, cushion: v})}
              options={[
                { label: "Tutti i Livelli", value: "all" },
                { label: "Minimale", value: "Minimal" },
                { label: "Bilanciata", value: "Balanced" },
                { label: "Massima", value: "Maximum" },
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
                    Modello
                </TableHead>
                <TableHead className="w-[100px] px-2 font-bold text-foreground text-xs text-center whitespace-nowrap">
                    <div className="flex flex-col items-center gap-1">
                        <Mountain className="h-3 w-3 opacity-50" />
                        Terreno
                    </div>
                </TableHead>
                <TableHead className="w-[90px] px-2 font-bold text-foreground text-xs text-center whitespace-nowrap">
                    <div className="flex flex-col items-center gap-1">
                        <Scale className="h-3 w-3 opacity-50" />
                        Peso
                    </div>
                </TableHead>
                <TableHead className="w-[90px] px-2 font-bold text-foreground text-xs text-center whitespace-nowrap">
                    <div className="flex flex-col items-center gap-1">
                        <ArrowDownLeft className="h-3 w-3 opacity-50" />
                        Drop
                    </div>
                </TableHead>
                <TableHead className="w-[120px] px-2 font-bold text-foreground text-[10px] uppercase tracking-tight text-center whitespace-nowrap">
                    <div className="flex flex-col items-center gap-1">
                        <Cloud className="h-3 w-3 opacity-50 text-sky-400" />
                        Ammortizzazione
                    </div>
                </TableHead>
                <TableHead className="w-[110px] px-2 font-bold text-foreground text-[10px] uppercase tracking-tight text-center whitespace-nowrap">
                    <div className="flex flex-col items-center gap-1">
                        <Shield className="h-3 w-3 opacity-50" />
                        Stabilità
                    </div>
                </TableHead>
                <TableHead className="px-4 font-bold text-foreground text-[10px] uppercase tracking-tight whitespace-nowrap">
                    <div className="flex flex-col items-center gap-1">
                        <Activity className="h-3 w-3 opacity-50 text-left w-full" />
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
                    <TableCell className="px-2 text-center">
                      <Badge variant="secondary" className="bg-secondary/50 text-[9px] font-bold uppercase tracking-tighter">
                        {spec.terrain}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-2 text-[11px] text-center text-muted-foreground font-medium">{spec.weight}</TableCell>
                    <TableCell className="px-2 text-[11px] text-center text-muted-foreground font-mono font-bold italic">{spec.drop}</TableCell>
                    <TableCell className="px-2 text-center">
                      <Badge variant="outline" className={`text-[9px] uppercase font-bold tracking-tighter px-1 ${
                        (spec.cushion === 'Maximum' || spec.cushion === 'Massima') ? 'bg-sky-50 text-sky-700 border-sky-100' : 
                        (spec.cushion === 'Minimal' || spec.cushion === 'Minima') ? 'bg-amber-50 text-amber-700 border-amber-100' : 
                        'bg-slate-50 text-slate-700'
                      }`}>
                        {spec.cushion}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-2 text-center">
                       <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-foreground">
                        <div className={`h-2 w-2 rounded-full ${(spec.support === 'Stable' || spec.support === 'Stabile') ? 'bg-indigo-500' : 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]'}`} />
                         {spec.support}
                       </span>
                    </TableCell>
                    <TableCell className="px-4 text-[11px] text-muted-foreground font-medium italic leading-tight">
                      {spec.bestFor}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="h-40 text-center">
                    <div className="flex flex-col items-center justify-center text-muted-foreground">
                      <Search className="h-8 w-8 mb-2 opacity-20" />
                      <p className="font-medium">Nessuna scarpa trovata con questi criteri.</p>
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
                  <th className="p-4 bg-muted/50 font-bold text-sm uppercase tracking-wider text-muted-foreground">Caratteristica</th>
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
                  <td className="p-4 font-bold text-[10px] uppercase tracking-widest text-muted-foreground bg-muted/5 w-32 align-middle">Prezzo</td>
                  {selectedProducts.map(p => (
                    <td key={p.name} className="p-4 text-center border-l border-border font-display text-base font-bold text-foreground">
                      {p.price}
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
                  { label: "Terreno", key: "terrain", isBadge: true },
                  { label: "Peso", key: "weight" },
                  { label: "Drop", key: "drop" },
                  { label: "Ammortizzazione", key: "cushion", isBadge: true },
                  { label: "Stabilità", key: "support", isBadge: true },
                  { label: "Ideale per", key: "bestFor", isItalic: true },
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
