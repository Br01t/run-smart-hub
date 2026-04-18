import React from "react";
import { Link } from "react-router-dom";
import { BarChart3, Activity, Wrench, Tag } from "lucide-react";

interface HubCTAProps {
  category: string;
}

const HubCTA = ({ category }: HubCTAProps) => {
  const icon = {
    shoes: <BarChart3 className="h-5 w-5" />,
    supplements: <Activity className="h-5 w-5" />,
    hydration: <Activity className="h-5 w-5" />,
    recovery: <Wrench className="h-5 w-5" />,
    apparel: <Tag className="h-5 w-5" />,
  }[category] || <BarChart3 className="h-5 w-5" />;

  return (
    <Link 
      to={`/hub?cat=${category}`}
      className="group my-10 flex flex-col items-center justify-between gap-4 rounded-3xl border-2 border-dashed border-primary/20 bg-primary/5 p-8 text-center transition-all hover:border-primary/40 hover:bg-primary/10 sm:flex-row sm:text-left"
    >
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg transition-transform group-hover:scale-110">
          {icon}
        </div>
        <div>
          <h4 className="font-display text-lg font-bold text-foreground">
            Analyze the Technical Data
          </h4>
          <p className="text-sm text-muted-foreground">
            See our evidence-based comparison matrix for this category in the Product Hub.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HubCTA;
