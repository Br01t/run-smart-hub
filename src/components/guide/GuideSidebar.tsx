import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Wrench, BarChart3 } from "lucide-react";
import { GuideContent } from "@/types/guide";
import { translateCategory } from "@/lib/translations";

interface GuideSidebarProps {
  guide: GuideContent;
  relatedComparisons: any[];
}

const GuideSidebar = ({ guide, relatedComparisons }: GuideSidebarProps) => {
  return (
    <aside className="shrink-0 lg:w-[320px]">
      <div className="sticky top-24 space-y-10">
        {/* Table of Contents */}
        <nav className="rounded-2xl border border-border bg-card p-5 shadow-card overflow-hidden" aria-label="Tabella dei contenuti">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-4 w-4 text-primary" />
            <h2 className="font-display text-sm font-bold text-foreground uppercase tracking-wider">In questa guida</h2>
          </div>
          <ol className="space-y-1">
            {guide.sections.map((section, i) => {
              const sectionId = section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
              return (
                <li key={i}>
                  <a
                    href={`#${sectionId}`}
                    className="flex items-center rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:bg-primary/5 hover:text-primary"
                  >
                    <span className="mr-2.5 text-[11px] font-mono font-bold text-primary">
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                    {section.heading}
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Related Tools */}
        {guide.relatedTools.length > 0 && (
          <section>
            <h3 className="mb-4 flex items-center gap-2 font-display text-sm font-bold text-foreground uppercase tracking-wider">
              <Wrench className="h-4 w-4 text-primary" /> Prova questi strumenti
            </h3>
            <div className="grid gap-2">
              {guide.relatedTools.map((tool) => (
                <Link
                  key={tool.to}
                  to={tool.to}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Wrench className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-card-foreground group-hover:text-primary">
                    {tool.label}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related Guides */}
        {guide.relatedGuides.length > 0 && (
          <section>
            <h3 className="mb-4 flex items-center gap-2 font-display text-sm font-bold text-foreground uppercase tracking-wider">
              <BookOpen className="h-4 w-4 text-primary" /> Continua a leggere
            </h3>
            <div className="grid gap-2">
              {guide.relatedGuides.map((g) => (
                <Link
                  key={g.slug}
                  to={`/guides/${g.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <BookOpen className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-xs font-semibold text-card-foreground group-hover:text-primary leading-tight">
                    {g.label}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Product Hub Referral */}
        {guide.hubCategory && (
          <section className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-hero transition-all hover:shadow-xl group">
            <div className="relative z-10">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Selezione Tecnica</span>
              <h3 className="mb-3 font-display text-xl font-bold text-foreground leading-tight">
                Confronta i migliori prodotti per <span className="text-primary">{translateCategory(guide.hubCategory)}</span>
              </h3>
              <p className="mb-6 text-xs leading-relaxed text-muted-foreground">
                Scopri i nostri confronti tecnici basati su dati per {translateCategory(guide.hubCategory)} con benchmark scientifici.
              </p>
              <Link 
                to={`/hub/${guide.hubCategory}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95"
              >
                Vai all'Hub {translateCategory(guide.hubCategory)} <BarChart3 className="h-3.5 w-3.5" />
              </Link>
            </div>
            {/* Background elements for premium look */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />
          </section>
        )}
      </div>
    </aside>
  );
};

export default GuideSidebar;
