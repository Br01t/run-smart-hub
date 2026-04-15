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
  link?: string;
}

const supplementSpecs: SupplementSpec[] = [
  { 
    name: "Impact Whey Protein", 
    absorption: "Fast", 
    timing: "Post-workout", 
    ingredients: "80% Whey Protein + BCAA", 
    bestFor: "Immediate muscle recovery post-effort",
    effect: "Anabolic / Reparative",
    link: "https://www.myprotein.com/p/sports-nutrition/impact-whey-protein-powder/10530943/"
  },
  { 
    name: "Impact Whey Isolate", 
    absorption: "Fast", 
    timing: "Post-workout", 
    ingredients: "90% Whey Protein Isolate", 
    bestFor: "Maximum protein purity and fast muscle recovery",
    effect: "Lean muscle growth",
    link: "https://www.myprotein.com/p/sports-nutrition/impact-whey-isolate-powder/10530911/"
  },
  { 
    name: "Impact EAA", 
    absorption: "Fast", 
    timing: "Post-workout", 
    ingredients: "All 9 Essential Amino Acids", 
    bestFor: "Superior muscle repair and prevention of catabolism",
    effect: "Protein Synthesis Support",
    link: "https://www.myprotein.com/p/sports-nutrition/impact-eaa/11985042/"
  },
  { 
    name: "100% Maltodextrin Carbs", 
    absorption: "Fast", 
    timing: "During", 
    ingredients: "Pure Maltodextrin", 
    bestFor: "Glycogen replenishment during long runs",
    effect: "Energy source",
    link: "https://www.myprotein.com/p/sports-nutrition/100-maltodextrin-carbs/10530114/"
  },
  { 
    name: "Oat Protein Flapjack", 
    absorption: "Medium", 
    timing: "Post-workout", 
    ingredients: "Rolled Oats + Whey Protein", 
    bestFor: "Convenient recovery snack with balanced macros",
    effect: "Sustained Repair",
    link: "https://www.myprotein.com/p/sports-nutrition/oat-protein-flapjack/11147245/"
  },
  { 
    name: "Impact Creatine", 
    absorption: "Medium", 
    timing: "Anytime", 
    ingredients: "Pure micronized creatine", 
    bestFor: "Increasing power in sprints and strength",
    effect: "Phosphocreatine saturation",
    link: "https://www.myprotein.com/p/sports-nutrition/creatine-monohydrate-powder/10530050/"
  },
  { 
    name: "Beta Alanine", 
    absorption: "Slow", 
    timing: "Pre-workout", 
    ingredients: "Pure amino acid", 
    bestFor: "Reduction of fatigue feeling in high intensities",
    effect: "Lactic acid buffer",
    link: "https://www.myprotein.com/p/sports-nutrition/beta-alanine/10529809/"
  },
  { 
    name: "Alpha BRAIN (90ct)", 
    absorption: "Fast", 
    timing: "Pre-workout", 
    ingredients: "L-Theanine, Bacopa, Cat's Claw", 
    bestFor: "Mental clarity and sharp focus during races",
    effect: "Cognitive support",
    link: "https://www.onnit.com/products/alpha-brain-90-ct"
  },
  { 
    name: "Alpha BRAIN (60ct)", 
    absorption: "Fast", 
    timing: "Pre-workout", 
    ingredients: "L-Theanine, Bacopa, Cat's Claw", 
    bestFor: "Daily cognitive support and focus",
    effect: "Mental processing speed",
    link: "https://www.onnit.com/products/alpha-brain-60-ct"
  },
  { 
    name: "Alpha BRAIN Black Label", 
    absorption: "Fast", 
    timing: "Pre-workout", 
    ingredients: "Lion's Mane, L-Tyrosine", 
    bestFor: "Elite performers needing maximum cognitive drive",
    effect: "Potent mental focus",
    link: "https://www.onnit.com/products/alpha-brain-black-label-80-ct"
  },
  { 
    name: "Shroom TECH Sport", 
    absorption: "Medium", 
    timing: "Pre-workout", 
    ingredients: "Cordyceps + Mushrooms", 
    bestFor: "Oxygen optimization in endurance sports",
    effect: "Respiratory support",
    link: "https://www.onnit.com/products/shroom-tech-sport-84-ct"
  },
  { 
    name: "Total Human", 
    absorption: "Medium", 
    timing: "Anytime", 
    ingredients: "Detailed Day/Night Packs", 
    bestFor: "General health and full-body recovery",
    effect: "Systemic recovery",
    link: "https://www.onnit.com/products/total-human-30-day-supply"
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
                <TableCell className="font-semibold text-foreground">
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
                    spec.name
                  )}
                </TableCell>
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
