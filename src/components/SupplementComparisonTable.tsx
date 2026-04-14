import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Activity, Clock } from "lucide-react";

interface SupplementSpec {
  name: string;
  absorption: "Fast" | "Medium" | "Slow";
  timing: "Pre-workout" | "During" | "Post-workout" | "Anytime";
  ingredients: string;
  effect: string;
  bestFor: string;
}

const supplementSpecs: SupplementSpec[] = [
  { 
    name: "Impact Whey Protein", 
    absorption: "Fast", 
    timing: "Post-workout", 
    ingredients: "80% Whey Protein + BCAA", 
    bestFor: "Immediate muscle recovery post-effort",
    effect: "Anabolic / Reparative"
  },
  { 
    name: "Alpha BRAIN", 
    absorption: "Fast", 
    timing: "Pre-workout", 
    ingredients: "Nootropics (L-Theanine, Bacopa)", 
    bestFor: "Runners with concentration drops after 2 hours",
    effect: "Mental focus without caffeine"
  },
  { 
    name: "Creatine Monohydrate", 
    absorption: "Medium", 
    timing: "Anytime", 
    ingredients: "Pure micronized creatine", 
    bestFor: "Increasing power in sprints and strength",
    effect: "Phosphocreatine saturation"
  },
  { 
    name: "Shroom TECH Sport", 
    absorption: "Medium", 
    timing: "Pre-workout", 
    ingredients: "Cordyceps + Adaptogenic Mushrooms", 
    bestFor: "Oxygen optimization in endurance sports",
    effect: "Respiratory support"
  },
  { 
    name: "Beta-Alanine", 
    absorption: "Slow", 
    timing: "Pre-workout", 
    ingredients: "Pure amino acid", 
    bestFor: "Reduction of fatigue feeling in high intensities",
    effect: "Lactic acid buffer"
  },
  { 
    name: "Total Human", 
    absorption: "Medium", 
    timing: "Anytime", 
    ingredients: "Multi-nutrients (Day/Night)", 
    bestFor: "General health and sleep support",
    effect: "Systemic recovery"
  },
];

export const SupplementComparisonTable = ({ sport = "road" }: { sport?: "road" | "trail" }) => {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="bg-muted/50 px-6 py-4 border-b border-border">
        <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
          <Activity className="h-5 w-5 text-primary" />
          Nutritional Profile: Bioavailability & Timing
        </h3>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30 hover:bg-muted/30">
              <TableHead className="w-[180px] font-bold text-foreground">Product</TableHead>
              <TableHead className="font-bold text-foreground">Absorption</TableHead>
              <TableHead className="font-bold text-foreground">Timing</TableHead>
              <TableHead className="font-bold text-foreground">Key Ingredients</TableHead>
              <TableHead className="font-bold text-foreground">Primary Effect</TableHead>
              <TableHead className="font-bold text-foreground">Best For</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {supplementSpecs.map((spec) => (
              <TableRow key={spec.name} className="transition-colors hover:bg-muted/20">
                <TableCell className="font-semibold text-foreground">{spec.name}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={`text-[10px] uppercase font-bold tracking-wider ${
                    spec.absorption === 'Fast' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-50 text-slate-700'
                  }`}>
                    {spec.absorption}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3 w-3 text-primary" />
                    {spec.timing}
                  </div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{spec.ingredients}</TableCell>
                <TableCell className="text-sm font-medium text-foreground">{spec.effect}</TableCell>
                <TableCell className="text-sm text-muted-foreground font-medium italic">
                  {spec.bestFor}
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
