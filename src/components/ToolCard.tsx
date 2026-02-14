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
      className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 sm:p-6"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 sm:mb-4 sm:h-11 sm:w-11">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="mb-1.5 font-display text-base font-semibold text-card-foreground sm:mb-2 sm:text-lg">
        {title}
      </h3>
      <p className="mb-3 flex-1 text-sm text-muted-foreground sm:mb-4">{description}</p>
      <div className="flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
        Calculate now <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
};

export default ToolCard;
