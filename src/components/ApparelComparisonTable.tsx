import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Shirt, CloudRain, Wind, Info } from "lucide-react";

interface ApparelSpec {
  name: string;
  brand: string;
  category: "Shirt" | "Shorts" | "Jacket";
  feature: string;
  bestFor: string;
  weather: "Hot" | "Mild" | "Rain/Cold";
}

const apparelSpecs: ApparelSpec[] = [
  { 
    name: "UA Tech 2.0", 
    brand: "Under Armour", 
    category: "Shirt", 
    feature: "Ultra-fast drying", 
    bestFor: "Daily Training, Gym",
    weather: "Hot"
  },
  { 
    name: "Dri-FIT Academy", 
    brand: "Nike", 
    category: "Shirt", 
    feature: "Classic breathable mesh", 
    bestFor: "Everyday runs",
    weather: "Mild"
  },
  { 
    name: "AEROREADY Shorts", 
    brand: "Adidas", 
    category: "Shorts", 
    feature: "Built-in brief liner", 
    bestFor: "Preventing chafing",
    weather: "Hot"
  },
  { 
    name: "R3 Tex Jacket", 
    brand: "Gore Wear", 
    category: "Jacket", 
    feature: "GORE-TEX® Waterproof", 
    bestFor: "Rain & Extreme Cold",
    weather: "Rain/Cold"
  },
];

export const ApparelComparisonTable = () => {
  const getWeatherIcon = (weather: string) => {
    switch (weather) {
      case 'Hot': return <Shirt className="h-3 w-3" />;
      case 'Mild': return <Wind className="h-3 w-3" />;
      case 'Rain/Cold': return <CloudRain className="h-3 w-3" />;
      default: return <Info className="h-3 w-3" />;
    }
  };

  const getWeatherColor = (weather: string) => {
    switch (weather) {
      case 'Hot': return 'text-orange-600 bg-orange-50';
      case 'Mild': return 'text-sky-600 bg-sky-50';
      case 'Rain/Cold': return 'text-indigo-600 bg-indigo-50';
      default: return '';
    }
  };

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="bg-muted/50 px-6 py-4 border-b border-border">
        <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
          <Shirt className="h-5 w-5 text-primary" />
          Apparel Comparison: Fabrics & Protection
        </h3>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30 hover:bg-muted/30">
              <TableHead className="w-[180px] font-bold text-foreground">Product</TableHead>
              <TableHead className="font-bold text-foreground">Brand</TableHead>
              <TableHead className="font-bold text-foreground">Ideal Weather</TableHead>
              <TableHead className="font-bold text-foreground">Key Feature</TableHead>
              <TableHead className="font-bold text-foreground">Best For</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {apparelSpecs.map((spec) => (
              <TableRow key={spec.name} className="transition-colors hover:bg-muted/20">
                <TableCell className="font-semibold text-foreground">{spec.name}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{spec.brand}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={`flex w-fit items-center gap-1 text-[10px] uppercase font-bold tracking-wider ${getWeatherColor(spec.weather)}`}>
                    {getWeatherIcon(spec.weather)}
                    {spec.weather}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{spec.feature}</TableCell>
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
