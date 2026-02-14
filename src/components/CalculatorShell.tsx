import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface CalculatorShellProps {
  title: string;
  description: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

const CalculatorShell = ({ title, description, icon: Icon, children }: CalculatorShellProps) => {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-6 sm:py-8">
      <Link
        to="/tools"
        className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> All tools
      </Link>

      <div className="mb-6 flex items-start gap-3 sm:mb-8 sm:gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 sm:h-12 sm:w-12">
          <Icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
        </div>
        <div>
          <h1 className="font-display text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
            {title}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">{description}</p>
        </div>
      </div>

      {children}
    </div>
  );
};

export default CalculatorShell;
