import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Watch, Droplets, Footprints, Info } from "lucide-react";

interface GearSpec {
  name: string;
  brand: string;
  category: "Watch" | "Hydration" | "Socks" | "Belt";
  mainFeature: string;
  idealFor: string;
  priceLevel: "$" | "$$" | "$$$";
}

const gearSpecs: GearSpec[] = [
  { 
    name: "Forerunner 55", 
    brand: "Garmin", 
    category: "Watch", 
    mainFeature: "Best Value GPS & HR", 
    idealFor: "Beginners/Intermediates",
    priceLevel: "$"
  },
  { 
    name: "Fenix Series", 
    brand: "Garmin", 
    category: "Watch", 
    mainFeature: "Maps & Infinite Battery", 
    idealFor: "Trail & Ultra Runners",
    priceLevel: "$$$"
  },
  { 
    name: "Azarxis 10L", 
    brand: "Azarxis", 
    category: "Hydration", 
    mainFeature: "Affordable & Functional", 
    idealFor: "Budget-conscious Long Runs",
    priceLevel: "$"
  },
  { 
    name: "Salomon Adv Skin", 
    brand: "Salomon", 
    category: "Hydration", 
    mainFeature: "Ultimate Bounce-free fit", 
    idealFor: "High-level Trail & Ultra",
    priceLevel: "$$$"
  },
  { 
    name: "Fitgriff Belt", 
    brand: "Fitgriff", 
    category: "Belt", 
    mainFeature: "No-bounce phone & keys", 
    idealFor: "Impulse buy / Daily Use",
    priceLevel: "$"
  },
  { 
    name: "Danish Endurance", 
    brand: "Danish Endurance", 
    category: "Socks", 
    mainFeature: "Merino Blister Prevention", 
    idealFor: "Long Distances",
    priceLevel: "$"
  },
  { 
    name: "Rockay Ignite", 
    brand: "Rockay", 
    category: "Socks", 
    mainFeature: "Eco-sustainable & Tough", 
    idealFor: "Performance & Planet",
    priceLevel: "$$"
  },
];

export const GearComparisonTable = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Watch': return <Watch className="h-3 w-3" />;
      case 'Hydration': return <Droplets className="h-3 w-3" />;
      case 'Socks': return <Footprints className="h-3 w-3" />;
      default: return <Info className="h-3 w-3" />;
    }
  };

  const getPriceColor = (level: string) => {
    switch (level) {
      case '$': return 'bg-emerald-100 text-emerald-700';
      case '$$': return 'bg-blue-100 text-blue-700';
      case '$$$': return 'bg-purple-100 text-purple-700';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="bg-muted/50 px-6 py-4 border-b border-border">
        <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
          <Info className="h-5 w-5 text-primary" />
          Gear Comparison: Accessories & Tools
        </h3>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30 hover:bg-muted/30">
              <TableHead className="w-[180px] font-bold text-foreground">Product</TableHead>
              <TableHead className="font-bold text-foreground">Brand</TableHead>
              <TableHead className="font-bold text-foreground">Category</TableHead>
              <TableHead className="font-bold text-foreground">Price Level</TableHead>
              <TableHead className="font-bold text-foreground">Best Feature</TableHead>
              <TableHead className="font-bold text-foreground">Ideal For</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {gearSpecs.map((spec) => (
              <TableRow key={spec.name} className="transition-colors hover:bg-muted/20">
                <TableCell className="font-semibold text-foreground">{spec.name}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{spec.brand}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="flex w-fit items-center gap-1 text-[10px] uppercase font-bold tracking-wider">
                    {getCategoryIcon(spec.category)}
                    {spec.category}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className={`rounded px-1.5 py-0.5 text-xs font-bold ${getPriceColor(spec.priceLevel)}`}>
                    {spec.priceLevel}
                  </span>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{spec.mainFeature}</TableCell>
                <TableCell className="text-sm text-muted-foreground font-medium italic">
                  {spec.idealFor}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default GearComparisonTable;
