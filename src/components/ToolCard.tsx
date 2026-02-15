import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  accent?: string;
}

const ToolCard = ({ title, description, icon: Icon, to, accent }: ToolCardProps) => {
  return (
    <Link
      to={to}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
    >
      {/* Gradient accent bar */}
      <div className={`h-1.5 w-full ${accent || "bg-gradient-hero"}`} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mb-2 font-display text-base font-bold text-card-foreground sm:text-lg">
          {title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <div className="flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
          Calculate now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
};

export default ToolCard;
