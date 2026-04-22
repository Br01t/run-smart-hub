import { CheckCircle2, AlertCircle } from "lucide-react";
import { translateCategory, translateSport, translateGoal } from "@/lib/translations";

interface ComparisonSummaryProps {
  category: string;
  sport: string;
  objective: string;
}

const ComparisonSummary = ({ category, sport, objective }: ComparisonSummaryProps) => {
  // Logic to generate a quick summary based on common runner questions
  const getSummaryData = () => {
    // Handle specific high-value combinations first
    const key = `${category}-${objective}`;
    
    if (key === 'supplements-performance') {
      return {
        winner: "Caffeine & Energy Gels",
        why: "Research consistently shows 3-6mg/kg of caffeine improves endurance by 2-4%.",
        proTip: "Practice fueling during training to avoid GI distress on race day."
      };
    }
    
    if (key === 'shoes-performance') {
      return {
        winner: "Carbon-Plated Racers",
        why: "Midsole foams like ZoomX or Lightstrike Pro combined with carbon plates improve running economy.",
        proTip: "Reserve super shoes for race day and tempo runs to maximize their lifespan."
      };
    }

    // Fallback to category-based logic
    switch (category) {
      case 'shoes':
        return {
          winner: "Technical Terrain-Specific Footwear",
          why: "Grip (Lugs) and lateral stability are critical for injury prevention on technical trails.",
          proTip: "Measure shoe life by foam sensation and joint soreness, not just mileage."
        };
      case 'supplements':
        return {
          winner: "High-Bioavailability Formulations",
          why: "Isolates and chelated minerals ensure faster absorption and reduced gastric distress.",
          proTip: "Timing is as important as dosage; strategize Pre, During, and Post windows."
        };
      case 'hydration':
      case 'accessories': // Backwards compatibility for some data
        return {
          winner: "Isotonic Solutions + Electrolytes",
          why: "Maintaining osmotic balance prevents cramping and maintains plasma volume.",
          proTip: "Don't just drink water; replace the specific minerals lost in sweat (Sodium/Potassium)."
        };
      case 'recovery':
        return {
          winner: "Active Myofascial & Compression Tools",
          why: "Increasing local blood flow and assisting venous return accelerates metabolic waste removal.",
          proTip: "Consistency beats intensity; 10 minutes of daily rolling is better than one long session."
        };
      case 'apparel':
        return {
          winner: "Thermoregulating Technical Fabrics",
          why: "Moisture-wicking synthetics prevent both overheating and hypothermia by managing sweat transit.",
          proTip: "Avoid cotton at all costs; it retains 27x its weight in water, causing chafing and chills."
        };
      case 'gear':
        return {
          winner: "Data-Driven Performance Ecosystems",
          why: "High-fidelity GPS and HR data allow for precise training load management and fatigue tracking.",
          proTip: "Focus on gear that 'disappears' during the run while providing critical infrastructure."
        };
      default:
        return {
          winner: `Optimized ${translateCategory(category)}`,
          why: `Technical ${category} help manage the specific demands of ${translateSport(sport)} ${translateGoal(objective)}.`,
          proTip: "Always test new gear and nutrition during training before a major race."
        };
    }
  };

  const summary = getSummaryData();

  return (
    <div className="mb-12 overflow-hidden rounded-3xl border border-primary/20 bg-primary/5 shadow-sm">
      <div className="bg-primary/10 px-6 py-3 border-b border-primary/20">
        <h2 className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
          <CheckCircle2 className="h-3.5 w-3.5" /> Technical Summary
        </h2>
      </div>
      <div className="p-6 sm:p-8 grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-lg font-display font-bold text-foreground">
            Quick Answer: <span className="text-primary">{summary.winner}</span>
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>The Science:</strong> {summary.why}
          </p>
        </div>
        <div className="rounded-2xl bg-background/50 p-5 border border-border/50">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Pro Strategy</p>
              <p className="text-sm text-muted-foreground italic">"{summary.proTip}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSummary;
