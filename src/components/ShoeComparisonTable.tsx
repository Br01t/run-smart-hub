import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";

interface ShoeSpec {
  name: string;
  weight: string;
  drop: string;
  cushion: "Minimal" | "Balanced" | "Maximum";
  support: "Neutral" | "Stable";
  bestFor: string;
  sport: "road" | "trail";
}

const shoeSpecs: ShoeSpec[] = [
  { 
    name: "Nike Revolution 6", 
    weight: "280g", 
    drop: "10mm", 
    cushion: "Balanced", 
    support: "Neutral", 
    bestFor: "Beginners running < 15km/week",
    sport: "road"
  },
  { 
    name: "Adidas Duramo Speed", 
    weight: "265g", 
    drop: "6mm", 
    cushion: "Minimal", 
    support: "Neutral", 
    bestFor: "Those seeking reactivity and speed at a great price",
    sport: "road"
  },
  { 
    name: "ASICS Gel-Contend 8", 
    weight: "300g", 
    drop: "10mm", 
    cushion: "Maximum", 
    support: "Stable", 
    bestFor: "Runners looking for extra stability and protection",
    sport: "road"
  },
  { 
    name: "NB Fresh Foam Arishi v4", 
    weight: "250g", 
    drop: "8mm", 
    cushion: "Maximum", 
    support: "Neutral", 
    bestFor: "Versatile runners (running + gym)",
    sport: "road"
  },
  { 
    name: "Puma Electrify Nitro", 
    weight: "240g", 
    drop: "8mm", 
    cushion: "Minimal", 
    support: "Neutral", 
    bestFor: "Tempo runs and speed sessions",
    sport: "road"
  },
  { 
    name: "Brooks Cascadia", 
    weight: "310g", 
    drop: "8mm", 
    cushion: "Balanced", 
    support: "Stable", 
    bestFor: "Technical trails and uneven terrain",
    sport: "trail"
  },
  { 
    name: "Salomon Speedcross", 
    weight: "298g", 
    drop: "10mm", 
    cushion: "Minimal", 
    support: "Neutral", 
    bestFor: "Maximum grip on mud and soft terrain",
    sport: "trail"
  },
];

export const ShoeComparisonTable = ({ sport = "road" }: { sport?: "road" | "trail" }) => {
  const filteredSpecs = shoeSpecs.filter(s => s.sport === sport);
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="bg-muted/50 px-6 py-4 border-b border-border">
        <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
          <Info className="h-5 w-5 text-primary" />
          Technical Specs: The 4 Pillars
        </h3>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30 hover:bg-muted/30">
              <TableHead className="w-[180px] font-bold text-foreground">Model</TableHead>
              <TableHead className="font-bold text-foreground text-center">Weight</TableHead>
              <TableHead className="font-bold text-foreground text-center">Drop</TableHead>
              <TableHead className="font-bold text-foreground">Cushioning</TableHead>
              <TableHead className="font-bold text-foreground">Support</TableHead>
              <TableHead className="font-bold text-foreground">Best For</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSpecs.map((shoe) => (
              <TableRow key={shoe.name} className="transition-colors hover:bg-muted/20">
                <TableCell className="font-semibold text-foreground">{shoe.name}</TableCell>
                <TableCell className="text-sm text-center text-muted-foreground">{shoe.weight}</TableCell>
                <TableCell className="text-sm text-center text-muted-foreground font-mono">{shoe.drop}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={`text-[10px] uppercase font-bold tracking-wider ${
                    shoe.cushion === 'Maximum' ? 'bg-sky-50 text-sky-700 border-sky-100' : 
                    shoe.cushion === 'Minimal' ? 'bg-amber-50 text-amber-700 border-amber-100' : 
                    'bg-slate-50 text-slate-700'
                  }`}>
                    {shoe.cushion}
                  </Badge>
                </TableCell>
                <TableCell>
                   <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                     <div className={`h-2 w-2 rounded-full ${shoe.support === 'Stable' ? 'bg-indigo-500' : 'bg-emerald-500'}`} />
                     {shoe.support}
                   </span>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground font-medium italic">
                  {shoe.bestFor}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ShoeComparisonTable;
