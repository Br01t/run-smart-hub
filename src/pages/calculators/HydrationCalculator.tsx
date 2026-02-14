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
        <div className="rounded-xl border border-border bg-card p-4 shadow-card sm:p-6">
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-3">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Weight (kg)</label>
              <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="70"
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Duration (min)</label>
              <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="60"
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Temperature (°C)</label>
              <select value={temp} onChange={(e) => setTemp(e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="10">Cold (&lt;15°C)</option>
                <option value="20">Mild (15-25°C)</option>
                <option value="30">Hot (&gt;25°C)</option>
              </select>
            </div>
          </div>
          <button onClick={calculate}
            className="mt-5 w-full rounded-lg bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-hero transition-opacity hover:opacity-90 sm:w-auto">
            Calculate
          </button>
        </div>

        {result && (
          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-6">
            <h3 className="mb-4 font-display text-lg font-semibold text-foreground">Your Results</h3>
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-card p-3 text-center shadow-card sm:p-4">
                <p className="text-xs font-medium uppercase text-muted-foreground">Before</p>
                <p className="mt-1 font-display text-xl font-bold text-primary sm:text-2xl">{result.before} ml</p>
                <p className="text-xs text-muted-foreground">2h before your run</p>
              </div>
              <div className="rounded-lg bg-card p-3 text-center shadow-card sm:p-4">
                <p className="text-xs font-medium uppercase text-muted-foreground">During</p>
                <p className="mt-1 font-display text-xl font-bold text-primary sm:text-2xl">{result.during} ml</p>
                <p className="text-xs text-muted-foreground">per hour of running</p>
              </div>
              <div className="rounded-lg bg-card p-3 text-center shadow-card sm:p-4">
                <p className="text-xs font-medium uppercase text-muted-foreground">After</p>
                <p className="mt-1 font-display text-xl font-bold text-primary sm:text-2xl">{result.after} ml</p>
                <p className="text-xs text-muted-foreground">within 2h post run</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              These values are estimates based on general scientific formulas. Consult a doctor for specific conditions.
            </p>
          </div>
        )}

        {result && <RecommendedProducts tags={["idratazione", "elettroliti"]} />}
      </CalculatorShell>
    </Layout>
  );
};

export default HydrationCalculator;
