import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { GuideContent } from "@/types/guide";

interface GuideHeaderProps {
  guide: GuideContent;
}

const GuideHeader = ({ guide }: GuideHeaderProps) => {
  return (
    <div className="mb-12">
      {/* Breadcrumbs */}
      <nav className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground/60 transition-colors hover:text-primary">
        <Link to="/guides" className="flex items-center gap-1.5">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Guides
        </Link>
      </nav>

      {/* Hero Image */}
      <div className="relative mb-8 h-[300px] w-full overflow-hidden rounded-3xl shadow-2xl sm:h-[450px]">
        <img
          src={guide.heroImage}
          alt={guide.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {guide.tags.map(tag => (
              <span key={tag} className="flex items-center gap-1.5 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                <Tag className="h-3 w-3" /> {tag}
              </span>
            ))}
          </div>
          <h1 className="font-display text-3xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
            {guide.title}
          </h1>
          <div className="mt-4 flex items-center gap-6 text-sm font-medium text-white/80">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" /> {guide.readTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideHeader;
