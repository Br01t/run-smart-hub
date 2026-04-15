import { useState } from "react";
import { Droplets } from "lucide-react";
import Layout from "@/components/Layout";
import CalculatorShell from "@/components/CalculatorShell";
import RecommendedProducts from "@/components/RecommendedProducts";

const HydrationCalculator = () => {
  const [weight, setWeight] = useState("");
  const [duration, setDuration] = useState("");
  const [temp, setTemp] = useState("20");
  const [result, setResult] = useState<null | { before: number; during: number; after: number }>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const d = parseFloat(duration);
    const t = parseFloat(temp);
    if (isNaN(w) || isNaN(d) || w <= 0 || d <= 0) return;

    const tempFactor = t > 25 ? 1.3 : t > 20 ? 1.1 : 1;
    const before = Math.round(w * 5);
    const during = Math.round(((w * 0.5 * d) / 60) * tempFactor * 100) / 100;
    const after = Math.round(w * 7);

    setResult({ before, during: Math.round(during * 1000), after });
  };

  return (
    <Layout>
      <CalculatorShell
        title="Hydration Calculator"
        description="Find out how much water to drink before, during and after your run."
        icon={Droplets}
      >
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
                  <label className="mb-2 block text-sm font-semibold text-foreground">Expected Temperature (°C)</label>
                  <select value={temp} onChange={(e) => setTemp(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20">
                    <option value="10">Cold Environment (&lt;15°C)</option>
                    <option value="20">Mild / Perfect Conditions (15-25°C)</option>
                    <option value="30">Hot / Humid (&gt;25°C)</option>
                  </select>
                </div>
              </div>
              <button onClick={calculate}
                className="mt-8 w-full rounded-xl bg-gradient-hero px-6 py-4 text-sm font-extrabold text-primary-foreground shadow-hero transition-all hover:opacity-90 active:scale-[0.98] sm:w-auto">
                Calculate Hydration Needs
              </button>
            </div>

            {/* Scientific disclaimer */}
            <div className="rounded-xl border border-border bg-secondary/20 p-4">
              <p className="text-xs leading-relaxed text-muted-foreground">
                <strong>Note:</strong> These values are estimates based on general sweat rate models. Factors like humidity, altitude, and individual physiology can significantly alter these needs.
              </p>
            </div>
          </div>

          {/* Results/Recommendations Column */}
          <div className="lg:w-[450px] space-y-8">
            {result ? (
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-card sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="mb-6 font-display text-lg font-bold text-foreground">Your Personal Strategy</h3>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between rounded-xl bg-card p-4 shadow-sm">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Before Run</p>
                      <p className="text-sm font-medium text-foreground">2h Window</p>
                    </div>
                    <p className="font-display text-2xl font-bold text-primary">{result.before}ml</p>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-card p-4 shadow-sm">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">During Run</p>
                      <p className="text-sm font-medium text-foreground">Every Hour</p>
                    </div>
                    <p className="font-display text-2xl font-bold text-primary">{result.during}ml</p>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-card p-4 shadow-sm">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">After Run</p>
                      <p className="text-sm font-medium text-foreground">Recovery Window</p>
                    </div>
                    <p className="font-display text-2xl font-bold text-primary">{result.after}ml</p>
                  </div>
                </div>

                {/* Insight */}
                <div className="mt-8 space-y-4">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] text-primary">💡</span>
                    Expert Insight
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {parseFloat(temp) >= 25
                      ? "In high heat, you're losing significant sodium (~900mg/L). Water alone can cause hyponatremia; always mix with electrolytes."
                      : parseFloat(duration) > 90
                      ? "For endurance efforts over 90 min, sip small amounts every 15 min rather than drinking large volumes at once."
                      : "Sip according to thirst. If your urine is straw-colored before starting, you're in the optimal hydration zone."}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card p-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/50">
                  <Droplets className="h-8 w-8 text-muted-foreground/40" />
                </div>
                <h3 className="font-display text-base font-bold text-muted-foreground">No Results Yet</h3>
                <p className="mt-2 text-sm text-muted-foreground/60 max-w-[240px]">Fill in your weight and run details to generate your hydration strategy.</p>
              </div>
            )}

            {result && <RecommendedProducts tags={["idratazione", "elettroliti"]} title="Hydration Essentials" maxProducts={6} />}
          </div>
        </div>
      </CalculatorShell>
    </Layout>
  );
};

export default HydrationCalculator;
