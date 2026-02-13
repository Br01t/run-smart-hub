import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
}

const ToolCard = ({ title, description, icon: Icon, to }: ToolCardProps) => {
  return (
    <Link
      to={to}
      className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground">
        {title}
      </h3>
      <p className="mb-4 flex-1 text-sm text-muted-foreground">{description}</p>
      <div className="flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
        Calcola ora <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
};

export default ToolCard;
