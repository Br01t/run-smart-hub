import React from "react";
import { Lightbulb, AlertTriangle, CheckCircle2 } from "lucide-react";
import { GuideSection, SectionVariant } from "@/types/guide";

interface SectionBlockProps {
  section: GuideSection;
  index: number;
}

const SectionBlock = ({ section, index }: SectionBlockProps) => {
  const isEven = index % 2 === 0;

  const variantIcon = {
    tip: <Lightbulb className="h-5 w-5 text-primary" />,
    warning: <AlertTriangle className="h-5 w-5 text-accent" />,
    highlight: null,
    checklist: <CheckCircle2 className="h-5 w-5 text-primary" />,
    default: null,
  };

  const variantStyles: Record<SectionVariant, string> = {
    default: "",
    highlight: "bg-primary/5 border-l-4 border-primary rounded-r-xl p-5 sm:p-6",
    tip: "bg-primary/5 border border-primary/20 rounded-xl p-5 sm:p-6",
    warning: "bg-accent/5 border border-accent/20 rounded-xl p-5 sm:p-6",
    checklist: "bg-secondary/50 border border-border rounded-xl p-5 sm:p-6",
  };

  const variant = section.variant || "default";
  const icon = variantIcon[variant];

  return (
    <section
      id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}
      className={`scroll-mt-24 ${variantStyles[variant]} ${variant === "default" ? (isEven ? "" : "") : ""}`}
    >
      <div className="flex items-start gap-3">
        {icon && <div className="mt-0.5 shrink-0">{icon}</div>}
        <div className="flex-1 min-w-0">
          <h2 className="font-display text-lg font-bold text-foreground sm:text-xl lg:text-2xl">
            <span className="mr-2 text-primary/40 font-mono text-sm sm:text-base">0{index + 1}.</span>
            {section.heading}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-[17px] lg:leading-relaxed">
            {section.body}
          </p>
          {section.listItems && (
            <ul className={`mt-3 space-y-2 ${variant === "checklist" ? "" : "list-disc pl-5"}`}>
              {section.listItems.map((item, i) => (
                <li key={i} className={`text-sm text-muted-foreground sm:text-base ${variant === "checklist" ? "flex items-start gap-2" : ""}`}>
                  {variant === "checklist" && <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionBlock;
