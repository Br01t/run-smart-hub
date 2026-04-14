import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Shirt, Zap, ShieldCheck } from "lucide-react";

interface ApparelSpec {
  name: string;
  brand: string;
  category: "Shirt" | "Shorts" | "Jacket";
  breathability: string; // Tech details (Dri-FIT, UA Tech, Mesh)
  fit: "Compression" | "Fitted" | "Loose";
  details: string; // Seams, pockets, reflective
  bestFor: string;
}

const apparelSpecs: ApparelSpec[] = [
  { 
    name: "UA Tech 2.0", 
    brand: "Under Armour", 
    category: "Shirt", 
    breathability: "UA Tech™ - Ultra-fast drying", 
    fit: "Loose",
    details: "Flatlock anti-chafing seams",
    bestFor: "Daily training and gym sessions"
  },
  { 
    name: "Dri-FIT Academy", 
    brand: "Nike", 
    category: "Shirt", 
    breathability: "Nike Dri-FIT - Breathable mesh", 
    fit: "Fitted",
    details: "Lightweight technical fabric",
    bestFor: "Runners seeking a versatile and fresh classic"
  },
  { 
    name: "AEROREADY Shorts", 
    brand: "Adidas", 
    category: "Shorts", 
    breathability: "AEROREADY - Moisture management", 
    fit: "Loose",
    details: "Anti-chafing internal brief",
    bestFor: "Avoiding irritation during long runs"
  },
  { 
    name: "R3 Tex Jacket", 
    brand: "Gore Wear", 
    category: "Jacket", 
    breathability: "GORE-TEX® - Waterproof/Breathable", 
    fit: "Fitted",
    details: "360° Reflective inserts / Smartphone pocket",
    bestFor: "Running in extreme rain and strong wind"
  },
];

export const ApparelComparisonTable = ({ sport = "road" }: { sport?: "road" | "trail" }) => {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="bg-muted/50 px-6 py-4 border-b border-border">
        <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
          <Shirt className="h-5 w-5 text-primary" />
          Technical Apparel: Heat & Chafing Management
        </h3>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30 hover:bg-muted/30">
              <TableHead className="w-[180px] font-bold text-foreground">Product</TableHead>
              <TableHead className="font-bold text-foreground">Breathability (Tech)</TableHead>
              <TableHead className="font-bold text-foreground">Fit</TableHead>
              <TableHead className="font-bold text-foreground">Technical Details</TableHead>
              <TableHead className="font-bold text-foreground">Best For</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {apparelSpecs.map((spec) => (
              <TableRow key={spec.name} className="transition-colors hover:bg-muted/20">
                <TableCell className="font-semibold text-foreground">
                  <div className="flex flex-col">
                    <span>{spec.name}</span>
                    <span className="text-[10px] text-muted-foreground uppercase">{spec.brand}</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-foreground">
                  <div className="flex items-center gap-1.5">
                    <Zap className="h-3 w-3 text-primary" />
                    {spec.breathability}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-[10px] uppercase font-bold tracking-wider">
                    {spec.fit}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-3 w-3 text-indigo-500" />
                    {spec.details}
                  </div>
                </TableCell>
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

export default ApparelComparisonTable;
