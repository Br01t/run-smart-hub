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
import { Watch, Droplets, Lightbulb, Info, Search } from "lucide-react";
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

import { GearSpec } from "@/types/specs";
import { gearSpecs } from "@/data/specs/gear";

export const GearComparisonTable = ({ accentColor = "hsl(var(--primary))" }: { accentColor?: string }) => {
  const [showFilters, setShowFilters] = useState(false);
  const { 
    searchTerm, setSearchTerm, 
    activeFilters, setActiveFilters,
    selectedNames, toggleSelection, setSelectedNames,
    filteredData, clearFilters 
  } = useProductTable(gearSpecs, ["name", "brand", "metric1", "metric2"]);

  const selectedProducts = gearSpecs.filter(p => selectedNames.includes(p.name));

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Watch': return <Watch className="h-4 w-4" />;
      case 'Hydration': return <Droplets className="h-4 w-4" />;
      case 'Lighting': return <Lightbulb className="h-4 w-4" />;
      default: return <Info className="h-4 w-4" />;
    }
  };

  const getMetricLabels = (category: string) => {
    switch (category) {
      case 'Watch': return { m1: "GPS Battery", m2: "Maps / Sensors" };
      case 'Hydration': return { m1: "Capacity / Fit", m2: "Pocket Access" };
      case 'Lighting': return { m1: "Power (Lumens)", m2: "Charging" };
      default: return { m1: "Material / Fit", m2: "Technical Details" };
    }
  };

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
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Category</label>
            <SelectFilter 
              value={activeFilters.category || "all"} 
              onValueChange={(v) => setActiveFilters({...activeFilters, category: v})}
              options={[
                { label: "All Categories", value: "all" },
                { label: "Watch", value: "Watch" },
                { label: "Hydration", value: "Hydration" },
                { label: "Lighting", value: "Lighting" },
                { label: "Belt", value: "Belt" },
                { label: "Socks", value: "Socks" },
              ]}
            />
          </div>
        </TableFilterBar>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30 hover:bg-muted/30">
                <TableHead className="w-[50px] px-4"></TableHead>
                <TableHead className="w-[180px] font-bold text-foreground">Gear</TableHead>
                <TableHead className="w-[100px] font-bold text-foreground">Visual</TableHead>
                <TableHead className="font-bold text-foreground">Category</TableHead>
                <TableHead className="font-bold text-foreground">Usage</TableHead>
                <TableHead className="font-bold text-foreground">Technical Specs</TableHead>
                <TableHead className="font-bold text-foreground">Best For</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((spec) => {
                  const labels = getMetricLabels(spec.category);
                  return (
                    <TableRow 
                      key={spec.name} 
                      className={`group transition-all hover:bg-muted/30 ${selectedNames.includes(spec.name) ? 'font-medium' : ''} ${spec.emphasized ? 'bg-primary/5 border-l-2 border-primary' : ''}`}
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
                          <div className="flex items-center gap-1.5">
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
                              <Badge variant="default" className="bg-primary hover:bg-primary text-[9px] h-4 px-1 rounded font-bold uppercase tracking-tighter shadow-sm text-white border-0">
                                Expert Pick
                              </Badge>
                            )}
                          </div>
                          <span className="text-[10px] text-muted-foreground uppercase">{spec.brand}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="h-12 w-16 overflow-hidden rounded-md border border-border bg-white p-1">
                          <img 
                            src={spec.image} 
                            alt={spec.name} 
                            className="h-full w-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="flex w-fit items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider">
                          {getCategoryIcon(spec.category)}
                          {spec.category}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-secondary/50 text-[10px] font-bold uppercase tracking-wider">
                          {spec.usage}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-foreground">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-bold text-muted-foreground uppercase w-20">{labels.m1}:</span>
                            <span className="text-xs">{spec.metric1}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-bold text-muted-foreground uppercase w-20">{labels.m2}:</span>
                            <span className="text-xs">{spec.metric2}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground font-medium italic leading-snug">
                        {spec.bestFor}
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="h-40 text-center">
                    <div className="flex flex-col items-center justify-center text-muted-foreground">
                      <Search className="h-8 w-8 mb-2 opacity-20" />
                      <p className="font-medium">No gear found matching these criteria.</p>
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
                  { label: "Usage", key: "usage" },
                  { label: "Category", key: "category", isBadge: true },
                  { label: "Metric 1", key: "metric1" },
                  { label: "Metric 2", key: "metric2" },
                  { label: "Best For", key: "bestFor", isItalic: true },
                ].map((row) => (
                  <tr key={row.label} className="hover:bg-muted/5 transition-colors">
                    <td className="p-4 font-bold text-[10px] uppercase tracking-widest text-muted-foreground bg-muted/5 w-32">{row.label}</td>
                    {selectedProducts.map(p => (
                      <td key={p.name} className={`p-4 text-center text-sm border-l border-border ${row.isItalic ? 'italic leading-relaxed' : ''}`}>
                        {row.isBadge ? (
                          <Badge variant="outline" className="text-[10px] uppercase font-bold">{p[row.key as keyof GearSpec]}</Badge>
                        ) : (
                          p[row.key as keyof GearSpec]
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

export default GearComparisonTable;
