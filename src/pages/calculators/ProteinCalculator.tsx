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
        <div className="rounded-xl border border-border bg-card p-4 shadow-card sm:p-6">
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-3">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Weight (kg)</label>
              <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="70"
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Activity Level</label>
              <select value={activity} onChange={(e) => setActivity(e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="sedentary">Sedentary</option>
                <option value="moderate">Active (3-5x/week)</option>
                <option value="intense">Very active (6-7x/week)</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Goal</label>
              <select value={goal} onChange={(e) => setGoal(e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="lose">Lose weight</option>
                <option value="maintain">Maintain</option>
                <option value="gain">Build muscle</option>
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
            <div className="flex flex-col items-center gap-2 rounded-lg bg-card p-4 shadow-card sm:p-6">
              <p className="text-xs font-medium uppercase text-muted-foreground">Daily Intake</p>
              <p className="font-display text-3xl font-bold text-primary sm:text-4xl">
                {result.min}–{result.max} g
              </p>
              <p className="text-sm text-muted-foreground">of protein per day</p>
            </div>

            {/* Personalized insights */}
            <div className="mt-5 space-y-3 rounded-lg border border-border bg-card p-4">
              <h4 className="text-sm font-semibold text-foreground">💡 How to hit your target</h4>
              <p className="text-sm text-muted-foreground">
                {goal === "lose"
                  ? "When losing weight, protein is your best ally. It preserves muscle mass, boosts satiety and has the highest thermic effect of any macronutrient (burning ~25% of protein calories during digestion). Spread intake across 4-5 meals."
                  : goal === "gain"
                  ? "For muscle building, aim for the upper range and distribute protein evenly across 4-5 meals (30-40g each). The post-workout window is important but total daily intake matters more. Combine with progressive strength training."
                  : "For maintenance, focus on consistent daily intake rather than timing. Good sources: chicken breast (31g/100g), eggs (13g/100g), Greek yogurt (10g/100g), lentils (9g/100g). A protein shake post-run is convenient but not mandatory."}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary-foreground">Quick math</span>
                <span className="text-xs text-muted-foreground">That's roughly {Math.round(result.min / 4)}–{Math.round(result.max / 4)}g per meal across 4 meals/day.</span>
              </div>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Range based on ISSN guidelines for athletes and active individuals. Consult a nutritionist for a personalized plan.
            </p>
          </div>
        )}

        {result && <RecommendedProducts tags={["proteine", "recupero"]} />}
      </CalculatorShell>
    </Layout>
  );
};

export default ProteinCalculator;
