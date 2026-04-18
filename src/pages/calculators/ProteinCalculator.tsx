import { useState } from "react";
import { Dumbbell } from "lucide-react";
import Layout from "@/components/Layout";
import CalculatorShell from "@/components/CalculatorShell";
import HubReferral from "@/components/HubReferral";

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
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="rounded-2xl border-2 border-primary bg-primary/5 p-6 shadow-hero sm:p-8">
                  <h3 className="mb-6 font-display text-xl font-bold text-foreground">Recommended Intake</h3>
                  <div className="flex flex-col items-center gap-1 rounded-2xl bg-card p-8 shadow-sm border border-border">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Total Daily Target</p>
                    <p className="font-display text-5xl font-black text-primary">{result.min}–{result.max}<span className="text-xl ml-1 font-bold text-muted-foreground/40">g</span></p>
                    <p className="mt-2 text-xs font-medium text-muted-foreground">distributed over 4-5 meals</p>
                  </div>
                </div>

                {/* Science Section */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86 1.43l-1.008.806a1 1 0 01-1.217.108l-5.115-3.41a1 1 0 01-.108-1.217l.806-1.008a6 6 0 001.43-3.86l-.477-2.387a2 2 0 00-.547-1.022L7.572 2.572a2 2 0 00-2.828 0L2.572 4.744a2 2 0 000 2.828l1.172 1.172a2 2 0 001.022.547l2.387.477a6 6 0 003.86-1.43l1.008-.806a1 1 0 011.217-.108l5.115 3.41a1 1 0 01.108 1.217l-.806 1.008a6 6 0 00-1.43 3.86l.477 2.387a2 2 0 00.547 1.022l1.172 1.172a2 2 0 002.828 0l2.172-2.172a2 2 0 000-2.828l-1.172-1.172z" /></svg>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">The Science</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Muscle Protein Synthesis (MPS) is triggered by the "Leucine Threshold." For runners, protein isn't just for bulk; it's critical for repairing the micro-tears in connective tissue and maintaining the metabolic health of skeletal muscle during high-mileage blocks.
                  </p>
                </div>

                {/* Practice Section */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">The Practice</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Aim for 20-30g per meal. This maximizes the MPS response more effectively than eating one massive protein-heavy meal.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>The "Anabolic Window" is longer than previously thought (up to 24h), but getting protein within 2h of a long run helps blunt cortisol.</span>
                    </li>
                  </ul>
                </div>

                <HubReferral 
                  category="supplements"
                  href="/comparison/supplements-for-running-recovery"
                  title="Best Protein & Recovery Hub"
                  description="Compare the purity, amino acid profiles, and absorption rates of the highest-rated whey, vegan, and recovery protein powders."
                />
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
          </div>
        </div>
      </CalculatorShell>
    </Layout>
  );
};

export default ProteinCalculator;
