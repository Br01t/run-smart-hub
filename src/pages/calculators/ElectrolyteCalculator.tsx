import { useState } from "react";
import { Zap } from "lucide-react";
import Layout from "@/components/Layout";
import CalculatorShell from "@/components/CalculatorShell";
import HubReferral from "@/components/HubReferral";
import SEO from "@/components/SEO";
import GuidesReferral from "@/components/GuidesReferral";

const ElectrolyteCalculator = () => {
  const [weight, setWeight] = useState("");
  const [duration, setDuration] = useState("");
  const [intensity, setIntensity] = useState("moderate");
  const [result, setResult] = useState<null | { sodium: number; potassium: number; magnesium: number }>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const d = parseFloat(duration);
    if (isNaN(w) || isNaN(d) || w <= 0 || d <= 0) return;
    const intensityFactor = intensity === "low" ? 0.8 : intensity === "high" ? 1.4 : 1;
    const hours = d / 60;
    setResult({
      sodium: Math.round(500 * hours * intensityFactor),
      potassium: Math.round(200 * hours * intensityFactor),
      magnesium: Math.round(50 * hours * intensityFactor),
    });
  };

  return (
    <Layout>
      <SEO 
        title="Runner's Electrolyte Replenishment Calculator" 
        description="Calculate the precise amount of sodium, potassium, and magnesium you need to replenish based on sweat rate, intensity, and duration."
        path="/tools/electrolytes"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Runner's Electrolyte Calculator",
          "description": "Evidence-based mineral replenishment estimator for endurance athletes.",
          "applicationCategory": "HealthApplication",
          "operatingSystem": "All"
        }}
      />
      <CalculatorShell title="Electrolyte Calculator" description="Calculate sodium, potassium and magnesium to replenish during your run." icon={Zap}>
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
          {/* Left Column: Inputs & Science */}
          <div className="flex-1 space-y-8">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
              <h2 className="mb-6 font-display text-lg font-bold text-foreground">Calculator Inputs</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">Body Weight (kg)</label>
                  <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="70"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">Run Duration (min)</label>
                  <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="60"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-foreground">Expected Intensity</label>
                  <select value={intensity} onChange={(e) => setIntensity(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20">
                    <option value="low">Low (Recovery / Easy Run)</option>
                    <option value="moderate">Moderate (Tempo / Steady)</option>
                    <option value="high">High (Intervals / Race)</option>
                  </select>
                </div>
              </div>
              <button onClick={calculate}
                className="mt-8 w-full rounded-xl bg-gradient-hero px-6 py-4 text-sm font-extrabold text-primary-foreground shadow-hero transition-all hover:opacity-90 active:scale-[0.98] sm:w-auto">
                Calculate Replenishment
              </button>
            </div>

            {/* Science Section */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">The Science</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Electrolytes are electric signals. Sodium is the primary driver of water absorption in the small intestine; without enough sodium, you won't absorb the water you drink, leading to "slosh stomach" and decreased performance.
              </p>
            </div>
          </div>

          {/* Right Column: Results & Practice */}
          <div className="space-y-8">
            {result ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="rounded-2xl border-2 border-primary bg-primary/5 p-6 shadow-hero sm:p-8">
                  <h3 className="mb-6 font-display text-xl font-bold text-foreground">Amount to Replenish</h3>
                  <div className="grid gap-3">
                    <div className="flex items-center justify-between rounded-xl bg-card p-4 shadow-sm border border-border">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Sodium (Na+)</span>
                      <p className="font-display text-2xl font-bold text-primary">{result.sodium} <span className="text-xs font-bold text-muted-foreground/60">mg</span></p>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-card p-4 shadow-sm border border-border">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Potassium (K+)</span>
                      <p className="font-display text-2xl font-bold text-primary">{result.potassium} <span className="text-xs font-bold text-muted-foreground/60">mg</span></p>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-card p-4 shadow-sm border border-border">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Magnesium (Mg++)</span>
                      <p className="font-display text-2xl font-bold text-primary">{result.magnesium} <span className="text-xs font-bold text-muted-foreground/60">mg</span></p>
                    </div>
                  </div>

                  {/* Note Section moved inside results */}
                  <div className="mt-8 rounded-xl border border-primary/20 bg-background/50 p-4">
                    <p className="text-xs leading-relaxed text-muted-foreground italic">
                      <strong>Note:</strong> Electrolyte loss varies significantly based on sweat rate and individual physiology. Use these as start points.
                    </p>
                  </div>
                </div>

                {/* Practice Section moved after results */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/10 text-teal-500">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">The Practice</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Pre-load: Take 500mg sodium 60 min before a hot race.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Check for salt crusting on skin; it's a sign of a "salty sweater" who needs more Na+.</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card p-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/50">
                  <Zap className="h-8 w-8 text-muted-foreground/40" />
                </div>
                <h3 className="font-display text-base font-bold text-muted-foreground">No Calculation Yet</h3>
                <p className="mt-2 text-sm text-muted-foreground/60 max-w-[240px]">Map out your electrolyte needs based on your next training effort.</p>
              </div>
            )}
          </div>
        </div>

        {/* Referrals Section consolidated at bottom */}
        <div className="mt-16 space-y-12 border-t border-border pt-16">
          <GuidesReferral guides={[
            { title: "Fueling & Electrolytes", path: "/guides/supplements-for-runners", desc: "The delicate balance of mineral replenishment for peak athletic output." },
            { title: "Marathon Nutrition", path: "/guides/marathon-training", desc: "Avoiding the wall through strategic salt and fluid management." }
          ]} />

          <HubReferral 
            category="hydration"
            href="/hub#hydration"
            title="Best Electrolyte Solutions"
            description="Compare the technical specifications, salt ratios, and bioavailability of the market's leading electrolyte brands."
          />
        </div>
      </CalculatorShell>
    </Layout>
  );
};

export default ElectrolyteCalculator;
