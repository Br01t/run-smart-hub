import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Watch, Droplets, Lightbulb, Info } from "lucide-react";

interface GearSpec {
  name: string;
  brand: string;
  category: "Watch" | "Hydration" | "Lighting" | "Socks" | "Belt";
  metric1: string; // Battery / Capacity / Lumens / Fit
  metric2: string; // Maps / Pockets / Charging / Material
  bestFor: string;
  sport: "road" | "trail" | "both";
}

const gearSpecs: GearSpec[] = [
  { 
    name: "Forerunner 55", 
    brand: "Garmin", 
    category: "Watch", 
    metric1: "20h Active GPS", 
    metric2: "No Maps / Wrist HR",
    bestFor: "Entry-level heart rate and GPS tracking",
    sport: "road"
  },
  { 
    name: "Fenix Series", 
    brand: "Garmin", 
    category: "Watch", 
    metric1: "Infinite (Solar) / 60h+ GPS", 
    metric2: "Topo Maps / Pro Cardio",
    bestFor: "Trail and ultra runners seeking offline maps",
    sport: "trail"
  },
  { 
    name: "Azarxis 10L", 
    brand: "Azarxis", 
    category: "Hydration", 
    metric1: "10L Load / 2L Bladder", 
    metric2: "6 Accessible pockets",
    bestFor: "Budget-friendly runners for marathon distances",
    sport: "both"
  },
  { 
    name: "Salomon Adv Skin", 
    brand: "Salomon", 
    category: "Hydration", 
    metric1: "12L Load / SensiFit", 
    metric2: "No-Stop Accessibility",
    bestFor: "Top-tier for those wanting zero bounce",
    sport: "trail"
  },
  { 
    name: "Fitgriff Belt", 
    brand: "Fitgriff", 
    category: "Belt", 
    metric1: "Ultra-slim / Adjustable", 
    metric2: "Smartphone / Key pocket",
    bestFor: "Carrying smartphone without bounce during training",
    sport: "road"
  },
  { 
    name: "LED Chest Light", 
    brand: "Generic", 
    category: "Lighting", 
    metric1: "500-800 Lumens", 
    metric2: "USB Charging",
    bestFor: "Safety and 360° visibility for night runs",
    sport: "both"
  },
  { 
    name: "Danish Endurance", 
    brand: "Danish Endurance", 
    category: "Socks", 
    metric1: "Merino Wool / Compression", 
    metric2: "Anti-blister / Breathable",
    bestFor: "Avoiding blisters and chafing on long runs",
    sport: "both"
  },
];

export const GearComparisonTable = ({ sport = "road" }: { sport?: "road" | "trail" }) => {
  const filteredSpecs = gearSpecs.filter(s => s.sport === sport || s.sport === "both");
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Watch': return <Watch className="h-4 w-4" />;
      case 'Hydration': return <Droplets className="h-4 w-4" />;
      case 'Lighting': return <Lightbulb className="h-4 w-4" />;
      default: return <Info className="h-4 w-4" />;
    }
  };

  const getMetricLabels = (category: string) => {
    switch (category) {
      case 'Watch': return { m1: "GPS Battery", m2: "Maps / Sensors" };
      case 'Hydration': return { m1: "Capacity / Fit", m2: "Pocket Access" };
      case 'Lighting': return { m1: "Power (Lumens)", m2: "Charging" };
      default: return { m1: "Material / Fit", m2: "Technical Details" };
    }
  };

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="bg-muted/50 px-6 py-4 border-b border-border">
        <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
          <Info className="h-5 w-5 text-primary" />
          Usability & Autonomy: Gear Comparison
        </h3>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30 hover:bg-muted/30">
              <TableHead className="w-[180px] font-bold text-foreground">Product</TableHead>
              <TableHead className="font-bold text-foreground">Category</TableHead>
              <TableHead className="font-bold text-foreground">Metric 1</TableHead>
              <TableHead className="font-bold text-foreground">Metric 2</TableHead>
              <TableHead className="font-bold text-foreground">Best For</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSpecs.map((spec) => {
              const labels = getMetricLabels(spec.category);
              return (
                <TableRow key={spec.name} className="transition-colors hover:bg-muted/20">
                  <TableCell className="font-semibold text-foreground">
                    <div className="flex flex-col">
                      <span>{spec.name}</span>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-tight">{spec.brand}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="flex w-fit items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider">
                      {getCategoryIcon(spec.category)}
                      {spec.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-foreground">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-muted-foreground uppercase">{labels.m1}</span>
                      <span>{spec.metric1}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-foreground">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-muted-foreground uppercase">{labels.m2}</span>
                      <span>{spec.metric2}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground font-medium italic">
                    {spec.bestFor}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default GearComparisonTable;
