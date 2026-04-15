import { useState } from "react";
import { Flame } from "lucide-react";
import Layout from "@/components/Layout";
import CalculatorShell from "@/components/CalculatorShell";
import RecommendedProducts from "@/components/RecommendedProducts";

const CaloriesCalculator = () => {
  const [weight, setWeight] = useState("");
  const [distance, setDistance] = useState("");
  const [result, setResult] = useState<null | { calories: number; fatGrams: number }>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const d = parseFloat(distance);
    if (isNaN(w) || isNaN(d) || w <= 0 || d <= 0) return;
    const calories = Math.round(w * d * 1.036);
    const fatGrams = Math.round((calories * 0.5) / 9);
    setResult({ calories, fatGrams });
  };

  return (
    <Layout>
      <CalculatorShell title="Calories Burned Calculator" description="Estimate calories burned during your run." icon={Flame}>
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
                  <label className="mb-2 block text-sm font-semibold text-foreground">Run Distance (km)</label>
                  <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="10"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
              </div>
              <button onClick={calculate}
                className="mt-8 w-full rounded-xl bg-gradient-hero px-6 py-4 text-sm font-extrabold text-primary-foreground shadow-hero transition-all hover:opacity-90 active:scale-[0.98] sm:w-auto">
                Estimate Calories Burned
              </button>
            </div>

            {/* Scientific disclaimer */}
            <div className="rounded-xl border border-border bg-secondary/20 p-4">
              <p className="text-xs leading-relaxed text-muted-foreground">
                <strong>Note:</strong> Estimates use the MET coefficient (~1.036 kcal/kg/km). Real burn depends on pace, efficiency, and terrain.
              </p>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:w-[450px] space-y-8">
            {result ? (
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-card sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="mb-6 font-display text-lg font-bold text-foreground">Your Energy Stats</h3>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between rounded-xl bg-card p-4 shadow-sm">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Total Burn</p>
                      <p className="text-sm font-medium text-foreground">Active Energy</p>
                    </div>
                    <p className="font-display text-3xl font-bold text-primary">{result.calories} <span className="text-xs font-bold uppercase text-muted-foreground/60">kcal</span></p>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-card p-4 shadow-sm">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Fat Mass</p>
                      <p className="text-sm font-medium text-foreground">Est. Consumption</p>
                    </div>
                    <p className="font-display text-3xl font-bold text-accent">{result.fatGrams} <span className="text-xs font-bold uppercase text-muted-foreground/60">g</span></p>
                  </div>
                </div>

                {/* Insight */}
                <div className="mt-8 space-y-4 rounded-xl border border-border bg-card p-5">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] text-primary">⚡</span>
                    Fueling Insight
                  </h4>
                  <div className="text-sm leading-relaxed text-muted-foreground">
                    {result.calories < 300
                      ? "A light session! Perfect for recovery. Stick to hydration and a small post-run snack."
                      : result.calories < 600
                      ? "Solid burn. You've emptied about 25% of your glycogen. Refuel within 60 min to kickstart recovery."
                      : result.calories < 1000
                      ? "Significant effort. Proper carb refueling is critical to prevent fatigue tomorrow."
                      : "Epic burn! Glycogen depletion is high. Focus on high-carb intake over the next 24 hours."}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card p-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/50">
                  <Flame className="h-8 w-8 text-muted-foreground/40" />
                </div>
                <h3 className="font-display text-base font-bold text-muted-foreground">No Calculation Yet</h3>
                <p className="mt-2 text-sm text-muted-foreground/60 max-w-[240px]">See how many calories you'll burn on your next run.</p>
              </div>
            )}

            {result && <RecommendedProducts tags={["energia", "carboidrati", "integratori"]} title="Refueling Support" maxProducts={6} />}
          </div>
        </div>
      </CalculatorShell>
    </Layout>
  );
};

export default CaloriesCalculator;
