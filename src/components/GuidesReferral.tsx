import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Guide {
  title: string;
  path: string;
  desc: string;
}

interface GuidesReferralProps {
  guides: Guide[];
}

const GuidesReferral = ({ guides }: GuidesReferralProps) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-bold text-foreground">
        <BookOpen className="h-5 w-5 text-accent" /> Expert Guides
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {guides.map((guide) => (
          <Link
            key={guide.path}
            to={guide.path}
            className="group block rounded-xl border border-transparent bg-secondary/30 p-4 transition-all hover:border-accent/20 hover:bg-card hover:shadow-md"
          >
            <h4 className="font-display text-sm font-bold text-foreground group-hover:text-accent">
              {guide.title}
            </h4>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
              {guide.desc}
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-accent opacity-0 transition-opacity group-hover:opacity-100">
              Read Deep Dive <ArrowRight className="h-3 w-3" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GuidesReferral;
