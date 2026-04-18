import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export interface GuideSummary {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  featured?: boolean;
}

export const categoryStyle: Record<string, { dot: string; badge: string; border: string }> = {
  Gear:      { dot: "bg-primary", badge: "bg-primary text-primary-foreground", border: "border-l-primary" },
  Nutrition: { dot: "bg-accent", badge: "bg-accent text-accent-foreground", border: "border-l-accent" },
  Recovery:  { dot: "bg-violet-500", badge: "bg-violet-600 text-white", border: "border-l-violet-500" },
  Health:    { dot: "bg-rose-500", badge: "bg-rose-600 text-white", border: "border-l-rose-500" },
  Training:  { dot: "bg-sky-500", badge: "bg-sky-600 text-white", border: "border-l-sky-500" },
  Trail:     { dot: "bg-emerald-600", badge: "bg-emerald-700 text-white", border: "border-l-emerald-600" },
};

export const FeaturedGuideCard = ({ guide }: { guide: GuideSummary }) => {
  const s = categoryStyle[guide.category] || categoryStyle.Gear;
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <Link
        to={`/guides/${guide.slug}`}
        className="group relative block overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-card-hover"
      >
        <div className="flex flex-col sm:flex-row">
          <div className={`h-1.5 sm:h-auto sm:w-1.5 shrink-0 ${s.badge}`} />
          <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${s.badge}`}>
                {guide.category}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" />{guide.readTime}</span>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                <TrendingUp className="h-3 w-3" /> Featured
              </span>
            </div>
            <h2 className="font-display text-xl font-bold text-card-foreground group-hover:text-primary sm:text-2xl lg:text-3xl">
              {guide.title}
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">{guide.excerpt}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5">
              Read guide <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export const SecondaryGuideCard = ({ guide, index }: { guide: GuideSummary, index: number }) => {
  const s = categoryStyle[guide.category] || categoryStyle.Gear;
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
      <Link
        to={`/guides/${guide.slug}`}
        className={`group flex h-full flex-col rounded-xl border border-border border-l-4 ${s.border} bg-card p-5 transition-all hover:shadow-card-hover`}
      >
        <div className="mb-3 flex items-center justify-between">
          <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${s.badge}`}>{guide.category}</span>
          <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" />{guide.readTime}</span>
        </div>
        <h2 className="mb-2 font-display text-base font-bold text-card-foreground group-hover:text-primary sm:text-lg">{guide.title}</h2>
        <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-2">{guide.excerpt}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5">
          Read guide <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </motion.div>
  );
};

export const CompactGuideRow = ({ guide, index }: { guide: GuideSummary, index: number }) => {
  const s = categoryStyle[guide.category] || categoryStyle.Gear;
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }}>
      <Link
        to={`/guides/${guide.slug}`}
        className="group flex items-center gap-4 px-4 py-3.5 sm:px-5 transition-colors hover:bg-muted/50"
      >
        <span className={`hidden sm:block h-2.5 w-2.5 shrink-0 rounded-full ${s.dot}`} />
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-card-foreground group-hover:text-primary truncate sm:text-base">{guide.title}</h3>
          <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1 hidden sm:block">{guide.excerpt}</p>
        </div>
        <span className="hidden sm:inline text-xs text-muted-foreground whitespace-nowrap">{guide.readTime}</span>
        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/40 group-hover:text-primary" />
      </Link>
    </motion.div>
  );
};
