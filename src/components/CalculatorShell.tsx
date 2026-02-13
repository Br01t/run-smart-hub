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
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <Link
        to="/strumenti"
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Tutti gli strumenti
      </Link>

      <div className="mb-8 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            {title}
          </h1>
          <p className="mt-1 text-muted-foreground">{description}</p>
        </div>
      </div>

      {children}
    </div>
  );
};

export default CalculatorShell;
