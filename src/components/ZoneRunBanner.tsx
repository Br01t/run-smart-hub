import { ArrowRight, Trophy } from "lucide-react";

const ZONERUN_URL = "https://zonerun.xyz/";

interface ZoneRunBannerProps {
  variant?: "inline" | "fullwidth" | "compact";
}

const ZoneRunBanner = ({ variant = "inline" }: ZoneRunBannerProps) => {
  if (variant === "compact") {
    return (
      <a
        href={ZONERUN_URL}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="group flex items-center gap-3 rounded-xl border border-accent/20 bg-accent/5 p-3 transition-all hover:border-accent/40 hover:bg-accent/10 sm:p-4"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-accent">
          <Trophy className="h-4 w-4 text-accent-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-foreground">ZoneRun</p>
          <p className="text-[11px] text-muted-foreground truncate">Turn every run into rewards</p>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-accent">Try free</span>
      </a>
    );
  }

  if (variant === "fullwidth") {
    return (
      <section className="relative overflow-hidden bg-gradient-to-r from-foreground via-foreground/95 to-foreground/90">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--accent) / 0.4), transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--primary) / 0.3), transparent 50%)" }} />
        </div>
        <div className="relative container mx-auto px-4 py-8 sm:py-12">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-accent shadow-hero sm:h-16 sm:w-16">
              <Trophy className="h-7 w-7 text-accent-foreground sm:h-8 sm:w-8" />
            </div>
            <div className="flex-1">
              <div className="mb-1 flex items-center justify-center gap-2 sm:justify-start">
                <span className="rounded-full bg-accent/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">Sponsored</span>
              </div>
              <h3 className="font-display text-xl font-bold text-primary-foreground sm:text-2xl">
                ZoneRun — Turn Every Run Into Rewards
              </h3>
              <p className="mt-1 text-sm text-primary-foreground/70 sm:text-base">
                The move-to-earn app that gamifies your runs. Earn tokens, unlock challenges and compete with runners worldwide.
              </p>
            </div>
            <a
              href={ZONERUN_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-accent px-6 py-3 text-sm font-bold text-accent-foreground transition-transform hover:scale-105"
            >
              Try ZoneRun Free <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    );
  }

  // Default: inline card
  return (
    <a
      href={ZONERUN_URL}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group block overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 via-card to-primary/5 transition-all hover:border-accent/40 hover:shadow-card-hover"
    >
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-accent">
            <Trophy className="h-6 w-6 text-accent-foreground" />
          </div>
          <div className="flex-1">
            <div className="mb-1.5 flex items-center gap-2">
              <span className="font-display text-base font-bold text-card-foreground sm:text-lg">ZoneRun</span>
              <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">Sponsored</span>
            </div>
            <p className="font-display text-sm font-semibold text-foreground">Turn Every Run Into Rewards</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              The gamified running app where every mile counts. Earn tokens, complete challenges and compete with a global community of runners.
            </p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-accent transition-all group-hover:gap-2.5">
              Try it free <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ZoneRunBanner;
