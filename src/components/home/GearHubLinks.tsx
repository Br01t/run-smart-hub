import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const GearHubLinks = () => {
  return (
    <section className="border-y border-border bg-muted/50">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="mb-8 flex items-end justify-between">
          <div className="editorial-line">
            <h2 className="font-display text-display-md font-bold text-foreground">Gear Hubs</h2>
            <p className="mt-1 text-sm text-muted-foreground">Curated picks across every category.</p>
          </div>
          <Link to="/hub" className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline sm:inline-flex">
            All hubs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Supplements", emoji: "💊", desc: "Magnesium, electrolytes, gels", to: "/hub?cat=supplements", border: "border-l-amber-500" },
            { label: "Shoes", emoji: "👟", desc: "Road, trail, racing flats", to: "/hub?cat=shoes", border: "border-l-emerald-500" },
            { label: "Hydration", emoji: "💧", desc: "Bottles, belts, electrolytes", to: "/hub?cat=hydration", border: "border-l-sky-500" },
            { label: "Recovery", emoji: "🧊", desc: "Foam rollers, massage guns", to: "/hub?cat=recovery", border: "border-l-violet-500" },
          ].map((hub) => (
            <Link
              key={hub.label}
              to={hub.to}
              className={`group flex items-center gap-4 rounded-lg border border-border border-l-4 ${hub.border} bg-card p-4 transition-all hover:shadow-card-hover`}
            >
              <span className="text-2xl">{hub.emoji}</span>
              <div className="min-w-0">
                <h3 className="font-display text-sm font-bold text-card-foreground">{hub.label}</h3>
                <p className="text-xs text-muted-foreground">{hub.desc}</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>

        <Link to="/hub" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline sm:hidden">
          View all hubs <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default GearHubLinks;
