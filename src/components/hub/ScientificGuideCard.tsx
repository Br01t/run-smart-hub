import React from "react";

interface ScientificGuideCardProps {
  guide: {
    scientificTitle: string;
    scientificDescription: string;
    pillars: { title: string; description: string }[];
  };
  accentColor: string;
}

const ScientificGuideCard = ({ guide, accentColor }: ScientificGuideCardProps) => (
  <div className="mb-12 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
    <div className="grid md:grid-cols-[1fr_1.5fr]">
      <div 
        className="p-8 sm:p-10 transition-colors duration-500"
        style={{ backgroundColor: `${accentColor}10` }}
      >
        <h3 className="font-display text-xl font-bold text-foreground">
          {guide.scientificTitle}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {guide.scientificDescription}
        </p>
      </div>
      <div className="p-8 sm:p-10">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {guide.pillars.map((pillar) => (
            <div key={pillar.title}>
              <h4 
                className="text-xs font-bold uppercase tracking-wider transition-colors duration-500"
                style={{ color: accentColor }}
              >
                {pillar.title}
              </h4>
              <p className="mt-1 text-[11px] leading-normal text-muted-foreground">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ScientificGuideCard;
