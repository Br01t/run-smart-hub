import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Check, Info } from "lucide-react";

interface ShoeSpec {
  name: string;
  type: "Daily" | "Performance" | "Trail";
  weight: string;
  drop: string;
  cushion: "Soft" | "Balanced" | "Firm" | "Massive";
  bestFor: string;
}

const shoeSpecs: ShoeSpec[] = [
  { name: "Nike Revolution 6", type: "Daily", weight: "280g", drop: "10mm", cushion: "Soft", bestFor: "Beginners, light runs" },
  { name: "Adidas Duramo Speed", type: "Daily", weight: "265g", drop: "6mm", cushion: "Balanced", bestFor: "Daily training, value" },
  { name: "ASICS Gel-Contend 8", type: "Daily", weight: "300g", drop: "10mm", cushion: "Balanced", bestFor: "Stability, 2-3x weekly" },
  { name: "NB Fresh Foam Arishi v4", type: "Daily", weight: "250g", drop: "8mm", cushion: "Soft", bestFor: "Versatility, Gym" },
  { name: "Puma Electrify Nitro", type: "Performance", weight: "240g", drop: "8mm", cushion: "Balanced", bestFor: "Tempo, Speed" },
  { name: "Brooks Cascadia", type: "Trail", weight: "310g", drop: "8mm", cushion: "Firm", bestFor: "Technical trails" },
  { name: "Salomon Speedcross", type: "Trail", weight: "298g", drop: "10mm", cushion: "Firm", bestFor: "Mud, Soft terrain" },
];

export const ShoeComparisonTable = () => {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="bg-muted/50 px-6 py-4 border-b border-border">
        <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
          <Info className="h-5 w-5 text-primary" />
          Comparison: Top 2026 Picks
        </h3>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30 hover:bg-muted/30">
              <TableHead className="w-[180px] font-bold text-foreground">Model</TableHead>
              <TableHead className="font-bold text-foreground">Type</TableHead>
              <TableHead className="font-bold text-foreground">Weight</TableHead>
              <TableHead className="font-bold text-foreground">Drop</TableHead>
              <TableHead className="font-bold text-foreground">Cushioning</TableHead>
              <TableHead className="font-bold text-foreground">Best For</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shoeSpecs.map((shoe) => (
              <TableRow key={shoe.name} className="transition-colors hover:bg-muted/20">
                <TableCell className="font-semibold text-foreground">{shoe.name}</TableCell>
                <TableCell>
                  <Badge variant={shoe.type === "Trail" ? "outline" : "secondary"} className="text-[10px] uppercase font-bold tracking-wider">
                    {shoe.type}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{shoe.weight}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{shoe.drop}</TableCell>
                <TableCell className="text-sm">
                   <span className={`inline-flex items-center gap-1.5 ${
                     shoe.cushion === 'Soft' ? 'text-sky-600' : 
                     shoe.cushion === 'Firm' ? 'text-amber-700' : 'text-emerald-700'
                   }`}>
                     <Check className="h-3 w-3" /> {shoe.cushion}
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
