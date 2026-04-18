import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { translateCategory, translateSport } from "@/lib/translations";

interface ComparisonCTAProps {
  category: string;
  sport: string;
  goal: string;
  hubCategory?: string;
}

const ComparisonCTA = ({ category, sport, goal, hubCategory }: ComparisonCTAProps) => {
  const slug = `${category}-per-${sport}-${goal}`;
  const targetUrl = hubCategory ? `/hub#${hubCategory}` : `/comparison/${slug}`;

  return (
    <div className="my-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8">
      <h4 className="font-display text-lg font-bold text-foreground sm:text-xl">
        Want to see the tech specs?
      </h4>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">
        Check out our detailed 2026 comparison hub for {translateCategory(category)} specifically for {translateSport(sport)}.
      </p>
      <Link 
        to={targetUrl}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:bg-primary/90"
      >
        View Comparison Table <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
};

export default ComparisonCTA;
