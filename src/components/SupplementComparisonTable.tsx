import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Zap, Activity, ShieldCheck } from "lucide-react";

interface SupplementSpec {
  name: string;
  brand: string;
  feature: string;
  idealFor: string;
  focus: "Performance" | "Energy" | "Recovery";
}

const supplementSpecs: SupplementSpec[] = [
  { 
    name: "Impact Whey Protein", 
    brand: "Myprotein", 
    feature: "High VB whey protein", 
    idealFor: "Immediate muscle recovery",
    focus: "Recovery"
  },
  { 
    name: "Alpha BRAIN", 
    brand: "Onnit", 
    feature: "Caffeine-free nootropic", 
    idealFor: "Mental focus in endurance races",
    focus: "Performance"
  },
  { 
    name: "Creatina Monoidrato", 
    brand: "Myprotein", 
    feature: "Ultra-pure micronized powder", 
    idealFor: "Power and sprint performance",
    focus: "Performance"
  },
  { 
    name: "Shroom TECH Sport", 
    brand: "Onnit", 
    feature: "Mushroom & adaptogen mix", 
    idealFor: "Oxygen optimization",
    focus: "Energy"
  },
  { 
    name: "Beta-Alanina", 
    brand: "Myprotein", 
    feature: "Pre-workout amino acid", 
    idealFor: "Reducing fatigue perception",
    focus: "Performance"
  },
  { 
    name: "Total Human", 
    brand: "Onnit", 
    feature: "Day/night micronutrient packs", 
    idealFor: "Complete health support",
    focus: "Recovery"
  },
];

export const SupplementComparisonTable = () => {
  const getFocusIcon = (focus: string) => {
    switch (focus) {
      case 'Performance': return <Activity className="h-3 w-3" />;
      case 'Energy': return <Zap className="h-3 w-3" />;
      case 'Recovery': return <ShieldCheck className="h-3 w-3" />;
      default: return null;
    }
  };

  const getFocusColor = (focus: string) => {
    switch (focus) {
      case 'Performance': return 'text-primary bg-primary/10';
      case 'Energy': return 'text-amber-600 bg-amber-50';
      case 'Recovery': return 'text-purple-600 bg-purple-50';
      default: return '';
    }
  };

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="bg-muted/50 px-6 py-4 border-b border-border">
        <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
          <Activity className="h-5 w-5 text-primary" />
          Supplement Comparison: Performance & Health
        </h3>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30 hover:bg-muted/30">
              <TableHead className="w-[180px] font-bold text-foreground">Product</TableHead>
              <TableHead className="font-bold text-foreground">Brand</TableHead>
              <TableHead className="font-bold text-foreground">Focus</TableHead>
              <TableHead className="font-bold text-foreground">Main Feature</TableHead>
              <TableHead className="font-bold text-foreground">Ideal For</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {supplementSpecs.map((spec) => (
              <TableRow key={spec.name} className="transition-colors hover:bg-muted/20">
                <TableCell className="font-semibold text-foreground">{spec.name}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{spec.brand}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={`flex w-fit items-center gap-1 text-[10px] uppercase font-bold tracking-wider ${getFocusColor(spec.focus)}`}>
                    {getFocusIcon(spec.focus)}
                    {spec.focus}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{spec.feature}</TableCell>
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

export default SupplementComparisonTable;
