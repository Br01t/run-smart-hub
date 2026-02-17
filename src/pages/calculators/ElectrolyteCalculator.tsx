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
              <label className="mb-1.5 block text-sm font-medium text-foreground">Intensity</label>
              <select value={intensity} onChange={(e) => setIntensity(e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
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
                <p className="text-xs font-medium uppercase text-muted-foreground">Sodium</p>
                <p className="mt-1 font-display text-xl font-bold text-primary sm:text-2xl">{result.sodium} mg</p>
              </div>
              <div className="rounded-lg bg-card p-3 text-center shadow-card sm:p-4">
                <p className="text-xs font-medium uppercase text-muted-foreground">Potassium</p>
                <p className="mt-1 font-display text-xl font-bold text-primary sm:text-2xl">{result.potassium} mg</p>
              </div>
              <div className="rounded-lg bg-card p-3 text-center shadow-card sm:p-4">
                <p className="text-xs font-medium uppercase text-muted-foreground">Magnesium</p>
                <p className="mt-1 font-display text-xl font-bold text-primary sm:text-2xl">{result.magnesium} mg</p>
              </div>
            </div>

            {/* Personalized insights */}
            <div className="mt-5 space-y-3 rounded-lg border border-border bg-card p-4">
              <h4 className="text-sm font-semibold text-foreground">💡 Electrolyte guide</h4>
              <p className="text-sm text-muted-foreground">
                {intensity === "high"
                  ? "High-intensity sessions cause heavy sweating. Sodium is the electrolyte you lose most — up to 1400mg per liter of sweat. Consider salt capsules or high-sodium electrolyte mixes for sessions over 90 minutes. Cramping? Magnesium and potassium deficiency are common culprits."
                  : parseFloat(duration) > 90
                  ? "For longer sessions, start supplementing electrolytes from the 45-minute mark. Effervescent tablets in your water bottle are the most practical approach. Don't wait until you feel symptoms — by then, you're already depleted."
                  : "For moderate sessions under 90 minutes, a balanced diet usually covers your electrolyte needs. However, if you're a heavy sweater (white salt marks on your clothes), you may benefit from electrolyte supplementation even for shorter runs."}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary-foreground">Signs of depletion</span>
                <span className="text-xs text-muted-foreground">Muscle cramps, dizziness, nausea and fatigue can all indicate electrolyte imbalance.</span>
              </div>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Estimated values based on average sweat rate. Actual loss varies by genetics, temperature and acclimatization.
            </p>
          </div>
        )}

        {result && <RecommendedProducts tags={["elettroliti", "magnesio", "idratazione"]} />}
      </CalculatorShell>
    </Layout>
  );
};

export default ElectrolyteCalculator;
