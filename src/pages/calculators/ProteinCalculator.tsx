import { useState } from "react";
import { Dumbbell } from "lucide-react";
import Layout from "@/components/Layout";
import CalculatorShell from "@/components/CalculatorShell";
import RecommendedProducts from "@/components/RecommendedProducts";

const ProteinCalculator = () => {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("moderate");
  const [goal, setGoal] = useState("maintain");
  const [result, setResult] = useState<null | { min: number; max: number }>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    if (isNaN(w) || w <= 0) return;
    const factors: Record<string, Record<string, [number, number]>> = {
      sedentary: { lose: [1.2, 1.6], maintain: [0.8, 1.0], gain: [1.2, 1.4] },
      moderate: { lose: [1.4, 1.8], maintain: [1.2, 1.4], gain: [1.6, 2.0] },
      intense: { lose: [1.6, 2.2], maintain: [1.4, 1.8], gain: [1.8, 2.4] },
    };
    const [minF, maxF] = factors[activity][goal];
    setResult({ min: Math.round(w * minF), max: Math.round(w * maxF) });
  };

  return (
    <Layout>
      <CalculatorShell title="Protein Needs Calculator" description="Find out how much protein to consume daily based on your goals." icon={Dumbbell}>
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
                  <label className="mb-2 block text-sm font-semibold text-foreground">Daily Activity</label>
                  <select value={activity} onChange={(e) => setActivity(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20">
                    <option value="sedentary">Sedentary (No Exercise)</option>
                    <option value="moderate">Active (3-5x/week)</option>
                    <option value="intense">Intense (6-7x/week)</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-foreground">Training Goal</label>
                  <select value={goal} onChange={(e) => setGoal(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20">
                    <option value="lose">Weight Loss / Definition</option>
                    <option value="maintain">Maintenance / Performance</option>
                    <option value="gain">Muscle Gain / Hypertrophy</option>
                  </select>
                </div>
              </div>
              <button onClick={calculate}
                className="mt-8 w-full rounded-xl bg-gradient-hero px-6 py-4 text-sm font-extrabold text-primary-foreground shadow-hero transition-all hover:opacity-90 active:scale-[0.98] sm:w-auto">
                Discover Your Protein Needs
              </button>
            </div>

            {/* Scientific disclaimer */}
            <div className="rounded-xl border border-border bg-secondary/20 p-4">
              <p className="text-xs leading-relaxed text-muted-foreground">
                <strong>Note:</strong> These calculations follow ISSN guidelines. Individual needs may vary based on age, sex, and lean muscle mass percentage.
              </p>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:w-[450px] space-y-8">
            {result ? (
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-card sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="mb-6 font-display text-lg font-bold text-foreground">Recommended Intake</h3>
                <div className="flex flex-col items-center gap-1 rounded-2xl bg-card p-8 shadow-sm border border-border/50">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Total Daily Target</p>
                  <p className="font-display text-5xl font-black text-primary">{result.min}–{result.max}<span className="text-xl ml-1 font-bold text-muted-foreground/40">g</span></p>
                  <p className="mt-2 text-xs font-medium text-muted-foreground">distributed over 4-5 meals</p>
                </div>

                {/* Insight */}
                <div className="mt-8 space-y-4 rounded-xl border border-border bg-card p-5">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] text-primary">💪</span>
                    Nutrition Insight
                  </h4>
                  <div className="text-sm leading-relaxed text-muted-foreground">
                    {goal === "lose"
                      ? "High protein intake is vital during a deficit to avoid losing muscle. Aim for the higher end of the range."
                      : goal === "gain"
                      ? "Pair this intake with heavy resistance training. Distribute 30-40g of protein every 3-4 hours."
                      : "Performance-focused needs. Focus on timing: 20-30g of protein within 45 minutes of finishing your run."}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card p-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/50">
                  <Dumbbell className="h-8 w-8 text-muted-foreground/40" />
                </div>
                <h3 className="font-display text-base font-bold text-muted-foreground">No Results Yet</h3>
                <p className="mt-2 text-sm text-muted-foreground/60 max-w-[240px]">Tell us about your activity level to optimize your macronutrient profile.</p>
              </div>
            )}

            {result && <RecommendedProducts tags={["proteine", "recupero"]} title="Top Protein Sources" maxProducts={6} />}
          </div>
        </div>
      </CalculatorShell>
    </Layout>
  );
};

export default ProteinCalculator;
