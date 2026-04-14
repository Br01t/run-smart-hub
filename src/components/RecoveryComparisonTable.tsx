import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Activity, Zap, ShieldCheck, HeartPulse, Info } from "lucide-react";

interface RecoverySpec {
  name: string;
  brand: string;
  benefit: string;
  targetArea: string;
  mobility: "Static" | "Portable";
  priceLevel: "$" | "$$" | "$$$";
}

const recoverySpecs: RecoverySpec[] = [
  { 
    name: "GRID Foam Roller", 
    brand: "TriggerPoint", 
    benefit: "Myofascial Release", 
    targetArea: "Large Muscle Groups",
    mobility: "Static",
    priceLevel: "$$"
  },
  { 
    name: "Mini Massage Gun", 
    brand: "Generic/TopRated", 
    benefit: "Percussion Therapy", 
    targetArea: "Full Body / Deep Tissue",
    mobility: "Portable",
    priceLevel: "$$$"
  },
  { 
    name: "Compression Socks", 
    brand: "Physix Gear", 
    benefit: "Blood Flow & Drainage", 
    targetArea: "Calves / Lower Legs",
    mobility: "Portable",
    priceLevel: "$"
  },
  { 
    name: "Lacrosse Ball", 
    brand: "Generic", 
    benefit: "Trigger Point Focus", 
    targetArea: "Feet (Plantar) / Knots",
    mobility: "Portable",
    priceLevel: "$"
  },
];

export const RecoveryComparisonTable = () => {
  const getBenefitIcon = (benefit: string) => {
    switch (benefit) {
      case 'Myofascial Release': return <Activity className="h-3 w-3" />;
      case 'Percussion Therapy': return <Zap className="h-3 w-3" />;
      case 'Blood Flow & Drainage': return <HeartPulse className="h-3 w-3" />;
      case 'Trigger Point Focus': return <ShieldCheck className="h-3 w-3" />;
      default: return <Info className="h-3 w-3" />;
    }
  };

  const getMobilityColor = (mobility: string) => {
    switch (mobility) {
      case 'Static': return 'text-slate-600 bg-slate-50 border-slate-200';
      case 'Portable': return 'text-indigo-600 bg-indigo-50 border-indigo-200';
      default: return '';
    }
  };

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="bg-muted/50 px-6 py-4 border-b border-border">
        <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
          <HeartPulse className="h-5 w-5 text-primary" />
          Recovery Tools: Evidence-Based Selection
        </h3>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30 hover:bg-muted/30">
              <TableHead className="w-[180px] font-bold text-foreground">Product</TableHead>
              <TableHead className="font-bold text-foreground">Primary Benefit</TableHead>
              <TableHead className="font-bold text-foreground">Target Area</TableHead>
              <TableHead className="font-bold text-foreground">Mobility</TableHead>
              <TableHead className="font-bold text-foreground text-right">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recoverySpecs.map((spec) => (
              <TableRow key={spec.name} className="transition-colors hover:bg-muted/20">
                <TableCell className="font-semibold text-foreground">
                  <div>{spec.name}</div>
                  <div className="text-[10px] text-muted-foreground uppercase">{spec.brand}</div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                    <span className="p-1 rounded-full bg-primary/10 text-primary">
                      {getBenefitIcon(spec.benefit)}
                    </span>
                    {spec.benefit}
                  </div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{spec.targetArea}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={`text-[10px] uppercase font-bold tracking-wider ${getMobilityColor(spec.mobility)}`}>
                    {spec.mobility}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-mono font-bold text-primary">
                  {spec.priceLevel}
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
