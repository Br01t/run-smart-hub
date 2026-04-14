import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Activity, HeartPulse } from "lucide-react";

interface RecoverySpec {
  name: string;
  brand: string;
  intensity: string; // Density for rollers, mmHg for compression, Stall Force for guns
  techDetails: string; // Surface, Noise, Use case
  useType: "Running" | "Rest" | "Race";
  bestFor: string;
}

const recoverySpecs: RecoverySpec[] = [
  { 
    name: "GRID Foam Roller", 
    brand: "TriggerPoint", 
    intensity: "High (Rigid/Grid)", 
    techDetails: "Sculpted surface for drainage", 
    useType: "Rest",
    bestFor: "Experienced runners seeking deep myofascial release"
  },
  { 
    name: "Mini Massage Gun", 
    brand: "Generic", 
    intensity: "12kg Stall Force", 
    techDetails: "Quiet (<45dB) / Portable", 
    useType: "Race",
    bestFor: "Immediate trigger point treatment post-long run"
  },
  { 
    name: "Compression Socks", 
    brand: "Physix Gear", 
    intensity: "20-30 mmHg (Graduated)", 
    techDetails: "Increased blood flow / Drainage", 
    useType: "Rest",
    bestFor: "Post-race recovery or for long travel days"
  },
  { 
    name: "Lacrosse Ball", 
    brand: "Generic", 
    intensity: "Maximum (Focused pressure)", 
    techDetails: "Smooth surface / Dense rubber", 
    useType: "Rest",
    bestFor: "Specific foot sole massage (plantar fasciitis)"
  },
];

export const RecoveryComparisonTable = ({ sport = "road" }: { sport?: "road" | "trail" }) => {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="bg-muted/50 px-6 py-4 border-b border-border">
        <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
          <HeartPulse className="h-5 w-5 text-primary" />
          Treatment Intensity: Recovery & Prevention
        </h3>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30 hover:bg-muted/30">
              <TableHead className="w-[180px] font-bold text-foreground">Product</TableHead>
              <TableHead className="font-bold text-foreground">Intensity / Density</TableHead>
              <TableHead className="font-bold text-foreground">Technical Details</TableHead>
              <TableHead className="font-bold text-foreground">Specific Use</TableHead>
              <TableHead className="font-bold text-foreground">Best For</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recoverySpecs.map((spec) => (
              <TableRow key={spec.name} className="transition-colors hover:bg-muted/20">
                <TableCell className="font-semibold text-foreground">
                  <div className="flex flex-col">
                    <span>{spec.name}</span>
                    <span className="text-[10px] text-muted-foreground uppercase">{spec.brand}</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-foreground">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Activity className="h-3 w-3 text-primary" />
                    {spec.intensity}
                  </div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {spec.techDetails}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={`text-[10px] uppercase font-bold tracking-wider ${
                    spec.useType === 'Race' ? 'bg-amber-50 text-amber-700' : 'bg-slate-50 text-slate-700'
                  }`}>
                    {spec.useType}
                  </Badge>
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

export default RecoveryComparisonTable;
