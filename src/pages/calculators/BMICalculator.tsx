import { useState } from "react";
import { Scale } from "lucide-react";
import Layout from "@/components/Layout";
import CalculatorShell from "@/components/CalculatorShell";
import HubReferral from "@/components/HubReferral";

const getBMICategory = (bmi: number) => {
  if (bmi < 18.5) return { label: "Underweight", color: "text-accent" };
  if (bmi < 25) return { label: "Normal weight", color: "text-primary" };
  if (bmi < 30) return { label: "Overweight", color: "text-accent" };
  return { label: "Obese", color: "text-destructive" };
};

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<null | { bmi: number; category: string; color: string }>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) return;
    const bmi = Math.round((w / (h * h)) * 10) / 10;
    const { label, color } = getBMICategory(bmi);
    setResult({ bmi, category: label, color });
  };

  return (
    <Layout>
      <CalculatorShell title="Advanced BMI Calculator" description="Calculate your body mass index with detailed classification." icon={Scale}>
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
                  <label className="mb-2 block text-sm font-semibold text-foreground">Height (cm)</label>
                  <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="175"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
              </div>
              <button onClick={calculate}
                className="mt-8 w-full rounded-xl bg-gradient-hero px-6 py-4 text-sm font-extrabold text-primary-foreground shadow-hero transition-all hover:opacity-90 active:scale-[0.98] sm:w-auto">
                Calculate BMI
              </button>
            </div>

            {/* Scientific disclaimer */}
            <div className="rounded-xl border border-border bg-secondary/20 p-4">
              <p className="text-xs leading-relaxed text-muted-foreground">
                <strong>Note:</strong> BMI is a basic screening tool and does not account for muscle mass, bone density, or overall body composition.
              </p>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:w-[450px] space-y-8">
            {result ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="rounded-2xl border-2 border-primary bg-primary/5 p-6 shadow-hero sm:p-8">
                  <h3 className="mb-6 font-display text-lg font-bold text-foreground">Your Results</h3>
                  <div className="flex flex-col items-center gap-1 rounded-2xl bg-card p-6 shadow-sm border border-border">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Body Mass Index</p>
                    <p className={`font-display text-5xl font-black ${result.color}`}>{result.bmi}</p>
                    <p className={`mt-1 text-base font-bold uppercase tracking-tight ${result.color}`}>{result.category}</p>
                  </div>
                  
                  <div className="mt-8">
                    <div className="flex h-2 overflow-hidden rounded-full bg-secondary">
                      <div className="flex-1 bg-accent/60" />
                      <div className="flex-[1.5] bg-primary/60" />
                      <div className="flex-1 bg-accent/60" />
                      <div className="flex-1 bg-destructive/60" />
                    </div>
                    <div className="mt-2 flex justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">
                      <span>16</span><span>18.5</span><span>25</span><span>30</span><span>+</span>
                    </div>
                  </div>
                </div>

                {/* Science Section */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86 1.43l-1.008.806a1 1 0 01-1.217.108l-5.115-3.41a1 1 0 01-.108-1.217l.806-1.008a6 6 0 001.43-3.86l-.477-2.387a2 2 0 00-.547-1.022L7.572 2.572a2 2 0 00-2.828 0L2.572 4.744a2 2 0 000 2.828l1.172 1.172a2 2 0 001.022.547l2.387.477a6 6 0 003.86-1.43l1.008-.806a1 1 0 011.217-.108l5.115 3.41a1 1 0 01.108 1.217l-.806 1.008a6 6 0 00-1.43 3.86l.477 2.387a2 2 0 00.547 1.022l1.172 1.172a2 2 0 002.828 0l2.172-2.172a2 2 0 000-2.828l-1.172-1.172z" /></svg>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">The Science</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    For runners, body mass dictates the "Load-to-Force" ratio. Every 1kg of excess body weight adds ~3-4kg of landing force per stride. Over a 10km run (~10,000 steps), this translates to 40,000kg of additional cumulative impact on joints and tendons.
                  </p>
                </div>

                {/* Practice Section */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">The Practice</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Scale your cushioning: If your BMI is &gt;25, prioritize "Max Cushion" or "Stability" shoes to protect against bone stress.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Body Comp over Weight: Use this BMI only as a starting point. Muscle density is heavier than fat but provides the power needed for propulsion.</span>
                    </li>
                  </ul>
                </div>

                <HubReferral 
                  category="shoes"
                  href="/hub/shoes/marathon"
                  title="Best Shoes for Your Profile"
                  description="Find the right pair of shoes with the appropriate cushioning level based on your body mass and running goals."
                />
              </div>
            ) : (
              <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card p-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/50">
                  <Scale className="h-8 w-8 text-muted-foreground/40" />
                </div>
                <h3 className="font-display text-base font-bold text-muted-foreground">No Results Yet</h3>
                <p className="mt-2 text-sm text-muted-foreground/60 max-w-[240px]">Enter your metrics to see where you stand on the BMI spectrum.</p>
              </div>
            )}
          </div>
        </div>
      </CalculatorShell>
    </Layout>
  );
};

export default BMICalculator;
