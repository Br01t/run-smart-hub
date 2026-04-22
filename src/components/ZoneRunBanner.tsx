import { ArrowRight } from "lucide-react";
import logo from "@/assets/zonerun-logo.webp";

const ZONERUN_URL = "https://zonerun.xyz/";

// A high-fidelity SVG fallback that coordinates with the cyber-aesthetic
const LogoFallback = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path 
      d="M13 10V3L4 14H11V21L20 10H13Z" 
      fill="currentColor" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M17 3L21 7" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <path 
      d="M19 5L20 5" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
  </svg>
);

interface ZoneRunBannerProps {
  variant?: "inline" | "fullwidth" | "compact";
}

const ZoneRunBanner = ({ variant = "inline" }: ZoneRunBannerProps) => {
  const zonerunColors = {
    dark: "#061a19",
    mint: "#2dd4bf",
    emerald: "#10b981",
    glow: "rgba(45, 212, 191, 0.3)"
  };

  if (variant === "compact") {
    return (
      <a
        href={ZONERUN_URL}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="group flex items-center gap-3 rounded-xl border border-teal-500/20 bg-teal-950/20 p-3 transition-all hover:border-teal-400/40 hover:bg-teal-950/30 sm:p-4"
        style={{ borderColor: `${zonerunColors.mint}33` }}
      >
        <div className="flex h-14 w-14 shrink-0 items-center justify-center">
          <img 
            src={logo} 
            alt="ZoneRun" 
            className="h-10 w-10 object-contain" 
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <LogoFallback className="hidden h-9 w-9 text-teal-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-foreground">ZoneRun</p>
          <p className="text-[11px] text-muted-foreground truncate">Turn every run into rewards</p>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400">Try free</span>
      </a>
    );
  }

  if (variant === "fullwidth") {
    return (
      <section className="relative overflow-hidden bg-[#061a19]">
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `radial-gradient(circle at 20% 50%, ${zonerunColors.mint}20, transparent 50%), radial-gradient(circle at 80% 50%, ${zonerunColors.emerald}15, transparent 50%)` 
          }} />
          <div className="absolute inset-0 texture-noise opacity-20" />
        </div>
        
        <div className="relative container mx-auto px-4 py-8 sm:py-12">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="relative group/logo">
              <div className="absolute -inset-2 bg-teal-500/20 rounded-full blur-xl opacity-0 group-hover/logo:opacity-100 transition-opacity" />
              <div className="relative flex h-32 w-32 shrink-0 items-center justify-center sm:h-48 sm:w-48">
                <img 
                  src={logo} 
                  alt="ZoneRun Logo" 
                  className="h-24 w-24 sm:h-40 sm:w-40 object-contain" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <LogoFallback className="hidden h-20 w-20 sm:h-32 sm:w-32 text-teal-400" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="mb-2 flex items-center justify-center gap-2 sm:justify-start">
                <span className="rounded-full bg-teal-500/10 border border-teal-500/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-teal-400">Official Partner</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl tracking-tight">
                ZoneRun — <span className="text-teal-400">The Future of Running</span>
              </h3>
              <p className="mt-2 text-sm text-teal-100/60 sm:text-base max-w-xl">
                The leading move-to-earn experience. Turn your daily runs into real rewards, unlock cyber-challenges, and dominate the digital leaderboard.
              </p>
            </div>
            
            <a
              href={ZONERUN_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-teal-500 px-8 py-4 text-sm font-bold text-teal-950 transition-all hover:bg-teal-400 hover:scale-105 shadow-[0_0_25px_rgba(45,212,191,0.4)]"
            >
              Join for free <ArrowRight className="h-4 w-4" />
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
      className="group relative block overflow-hidden rounded-2xl border border-teal-500/20 bg-gradient-to-br from-[#061a19] via-[#0d2a27] to-[#061a19] transition-all hover:border-teal-400/40 shadow-hero hover:shadow-float hover:-translate-y-1 inner-glow-strong"
    >
      <div className="absolute inset-0 texture-noise opacity-10" />
      <div className="relative p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative">
            <div className="absolute -inset-1 bg-teal-500/10 rounded-xl blur-lg group-hover:bg-teal-500/20 transition-all" />
            <div className="relative flex h-32 w-32 shrink-0 items-center justify-center transition-colors">
              <img 
                src={logo} 
                alt="ZoneRun" 
                className="h-24 w-24 object-contain" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <LogoFallback className="hidden h-20 w-20 text-teal-400" />
            </div>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <div className="mb-2 flex items-center justify-center sm:justify-start gap-3">
              <span className="font-display text-xl font-bold text-white tracking-tight">ZoneRun</span>
              <span className="rounded-full bg-teal-500/10 border border-teal-500/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-teal-400">Sponsored</span>
            </div>
            <p className="font-display text-sm font-bold text-teal-100/90 leading-snug">Turn every mile into digital rewards</p>
            <p className="mt-2 text-sm leading-relaxed text-teal-100/50">
              The gamified movement app where every run earns you more. Complete challenges, join the global community, and upgrade your performance.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-teal-400 transition-all group-hover:gap-3">
              Join for free <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ZoneRunBanner;
