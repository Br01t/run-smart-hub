import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface HubReferralProps {
  href: string;
  title: string;
  description: string;
  category: "shoes" | "supplements" | "hydration" | "recovery" | "apparel" | "gear";
  className?: string;
}

const themeConfig = {
  shoes: {
    gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
    border: "border-blue-200/50 dark:border-blue-800/50",
    button: "bg-blue-600 hover:bg-blue-700",
    iconColor: "text-blue-500"
  },
  supplements: {
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    border: "border-emerald-200/50 dark:border-emerald-800/50",
    button: "bg-emerald-600 hover:bg-emerald-700",
    iconColor: "text-emerald-500"
  },
  hydration: {
    gradient: "from-sky-500/10 via-cyan-500/5 to-transparent",
    border: "border-sky-200/50 dark:border-sky-800/50",
    button: "bg-sky-600 hover:bg-sky-700",
    iconColor: "text-sky-500"
  },
  recovery: {
    gradient: "from-purple-500/10 via-violet-500/5 to-transparent",
    border: "border-purple-200/50 dark:border-purple-800/50",
    button: "bg-purple-600 hover:bg-purple-700",
    iconColor: "text-purple-500"
  },
  apparel: {
    gradient: "from-orange-500/10 via-amber-500/5 to-transparent",
    border: "border-orange-200/50 dark:border-orange-800/50",
    button: "bg-orange-600 hover:bg-orange-700",
    iconColor: "text-orange-500"
  },
  gear: {
    gradient: "from-slate-500/10 via-gray-500/5 to-transparent",
    border: "border-slate-300/50 dark:border-slate-700/50",
    button: "bg-slate-700 hover:bg-slate-800",
    iconColor: "text-slate-500"
  }
};

const HubReferral = ({ href, title, description, category, className }: HubReferralProps) => {
  const theme = themeConfig[category];

  return (
    <Link 
      to={href}
      className={cn(
        "group relative block overflow-hidden rounded-2xl border p-1 transition-all shadow-hero hover:shadow-float hover:-translate-y-1 inner-glow-strong",
        theme.border,
        className
      )}
    >
      {/* Background Gradient */}
      <div className={cn("absolute inset-0 bg-gradient-to-br transition-opacity group-hover:opacity-80", theme.gradient)} />
      
      <div className="relative flex flex-col gap-6 rounded-[14px] bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className={cn("flex h-8 w-8 items-center justify-center rounded-lg bg-current/10", theme.iconColor)}>
              <Sparkles className="h-4 w-4" />
            </div>
            <span className={cn("text-xs font-bold uppercase tracking-widest", theme.iconColor)}>
              Raccomandazioni Esperti
            </span>
          </div>
          
          <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
            {title}
          </h3>
          
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        <div 
          className={cn(
            "inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-extrabold text-white shadow-lg transition-all group-hover:scale-105 active:scale-95 sm:w-auto",
            theme.button
          )}
        >
          Esplora l'Hub
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      {/* Decorative Glow */}
      <div className={cn(
        "absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[80px] transition-opacity opacity-0 group-hover:opacity-20",
        theme.gradient.split(' ')[1]
      )} />
    </Link>
  );
};

export default HubReferral;
