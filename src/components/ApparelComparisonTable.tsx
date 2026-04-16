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
import { Shirt, Zap, ShieldCheck, Search } from "lucide-react";
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

interface ApparelSpec {
  name: string;
  brand: string;
  category: "Shirt" | "Shorts" | "Jacket";
  breathability: string; // Tech details (Dri-FIT, UA Tech, Mesh)
  fit: "Compression" | "Fitted" | "Loose";
  details: string; // Seams, pockets, reflective
  bestFor: string;
  usage: string;
  link?: string;
}

const apparelSpecs: ApparelSpec[] = [
  { 
    name: "UA Tech 2.0", 
    brand: "Under Armour", 
    category: "Shirt", 
    breathability: "UA Tech™ - Ultra-fast drying", 
    fit: "Loose",
    details: "Flatlock anti-chafing seams",
    bestFor: "Daily training and gym sessions",
    usage: "Daily / Gym",
    link: "https://www.amazon.it/Under-Armour-Tech-T-Shirt-Uomo/dp/B0D17ZTY7M"
  },
  { 
    name: "Dri-FIT Academy", 
    brand: "Nike", 
    category: "Shirt", 
    breathability: "Nike Dri-FIT - Breathable mesh", 
    fit: "Fitted",
    details: "Lightweight technical fabric",
    bestFor: "Runners seeking a versatile and fresh classic",
    usage: "Road / Hot Weather",
    link: "https://www.amazon.it/Nike-Maglietta-Dri-Fit-Horizon-HF6142-370/dp/B0DN1PM19Z"
  },
  { 
    name: "AEROREADY Shorts", 
    brand: "Adidas", 
    category: "Shorts", 
    breathability: "AEROREADY - Moisture management", 
    fit: "Loose",
    details: "Anti-chafing internal brief",
    bestFor: "Avoiding irritation during long runs",
    usage: "All Terrain / Long Runs",
    link: "https://www.amazon.it/adidas-Camo-SHO-Pantaloncini-Uomo/dp/B096KLC2SH"
  },
  { 
    name: "R3 Tex Jacket", 
    brand: "Gore Wear", 
    category: "Jacket", 
    breathability: "GORE-TEX® - Waterproof/Breathable", 
    fit: "Fitted",
    details: "360° Reflective inserts / Smartphone pocket",
    bestFor: "Running in extreme rain and strong wind",
    usage: "Trail / Bad Weather",
    link: "https://www.amazon.it/GORE-WEAR-Giacca-Running-Cappuccio/dp/B07G4M6VYF"
  },
];

export const ApparelComparisonTable = ({ accentColor = "hsl(var(--primary))" }: { accentColor?: string }) => {
  const [showFilters, setShowFilters] = useState(false);
  const { 
    searchTerm, setSearchTerm, 
    activeFilters, setActiveFilters,
    selectedNames, toggleSelection, setSelectedNames,
    filteredData, clearFilters 
  } = useProductTable(apparelSpecs, ["name", "brand", "details", "breathability"]);

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
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Category</label>
            <SelectFilter 
              value={activeFilters.category || "all"} 
              onValueChange={(v) => setActiveFilters({...activeFilters, category: v})}
              options={[
                { label: "All Categories", value: "all" },
                { label: "Shirt", value: "Shirt" },
                { label: "Shorts", value: "Shorts" },
                { label: "Jacket", value: "Jacket" },
              ]}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Fit</label>
            <SelectFilter 
              value={activeFilters.fit || "all"} 
              onValueChange={(v) => setActiveFilters({...activeFilters, fit: v})}
              options={[
                { label: "All Fits", value: "all" },
                { label: "Compression", value: "Compression" },
                { label: "Fitted", value: "Fitted" },
                { label: "Loose", value: "Loose" },
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
                <TableHead className="font-bold text-foreground">Usage</TableHead>
                <TableHead className="font-bold text-foreground">Breathability</TableHead>
                <TableHead className="font-bold text-foreground">Fit</TableHead>
                <TableHead className="font-bold text-foreground">Technical Details</TableHead>
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
                        {spec.usage}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-foreground">
                      <div className="flex items-center gap-1.5">
                        <Zap className="h-3 w-3 text-primary" />
                        {spec.breathability}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-wider">
                        {spec.fit}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="h-3 w-3 text-indigo-500" />
                        {spec.details}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground font-medium italic leading-snug">
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
                {[
                  { label: "Usage", key: "usage" },
                  { label: "Breathability", key: "breathability" },
                  { label: "Fit", key: "fit", isBadge: true },
                  { label: "Technical Details", key: "details" },
                  { label: "Best For", key: "bestFor", isItalic: true },
                ].map((row) => (
                  <tr key={row.label} className="hover:bg-muted/5 transition-colors">
                    <td className="p-4 font-bold text-[10px] uppercase tracking-widest text-muted-foreground bg-muted/5 w-32">{row.label}</td>
                    {selectedProducts.map(p => (
                      <td key={p.name} className={`p-4 text-center text-sm border-l border-border ${row.isItalic ? 'italic leading-relaxed' : ''}`}>
                        {row.isBadge ? (
                          <Badge variant="outline" className="text-[10px] uppercase font-bold">{p[row.key as keyof ApparelSpec]}</Badge>
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
