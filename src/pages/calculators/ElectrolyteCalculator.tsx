import { useState } from "react";
import { Zap } from "lucide-react";
import Layout from "@/components/Layout";
import CalculatorShell from "@/components/CalculatorShell";
import RecommendedProducts from "@/components/RecommendedProducts";

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
      <CalculatorShell title="Electrolyte Calculator" description="Calculate sodium, potassium and magnesium to replenish during your run." icon={Zap}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          {/* Inputs Column */}
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

            {/* Scientific disclaimer */}
            <div className="rounded-xl border border-border bg-secondary/20 p-4">
              <p className="text-xs leading-relaxed text-muted-foreground">
                <strong>Note:</strong> Electrolyte loss varies significantly based on sweat rate and individual physiology. Use these as start points.
              </p>
            </div>
          </div>

          {/* Results/Recommendations Column */}
          <div className="lg:w-[450px] space-y-8">
            {result ? (
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-card sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="mb-6 font-display text-lg font-bold text-foreground">Ammount to Replenish</h3>
                <div className="grid gap-3">
                  <div className="flex items-center justify-between rounded-xl bg-card p-4 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Sodium (Na+)</span>
                    <p className="font-display text-2xl font-bold text-primary">{result.sodium} <span className="text-xs font-bold text-muted-foreground/60">mg</span></p>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-card p-4 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Potassium (K+)</span>
                    <p className="font-display text-2xl font-bold text-primary">{result.potassium} <span className="text-xs font-bold text-muted-foreground/60">mg</span></p>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-card p-4 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Magnesium (Mg++)</span>
                    <p className="font-display text-2xl font-bold text-primary">{result.magnesium} <span className="text-xs font-bold text-muted-foreground/60">mg</span></p>
                  </div>
                </div>

                {/* Insight */}
                <div className="mt-8 space-y-4 rounded-xl border border-border bg-card p-5">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] text-primary">⚡</span>
                    Replenishment Guide
                  </h4>
                  <div className="text-sm leading-relaxed text-muted-foreground">
                    {intensity === "high"
                      ? "Sodium is your priority (~90%-95% of electrolyte loss). High intensity requires at least 500-1000mg per liter of fluid."
                      : parseFloat(duration) > 90
                      ? "Longer efforts deplete potassium and magnesium, leading to muscle fatigue and cramps. Supplement early (at 45 min)."
                      : "For shorter, moderate sessions, water with a pinch of salt or a standard effervescent tablet is usually sufficient."}
                  </div>
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

            {result && <RecommendedProducts tags={["elettroliti", "magnesio"]} title="Top Rated Supplement" maxProducts={6} />}
          </div>
        </div>
      </CalculatorShell>
    </Layout>
  );
};

export default ElectrolyteCalculator;
