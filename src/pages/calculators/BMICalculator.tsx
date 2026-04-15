import { useState } from "react";
import { Scale } from "lucide-react";
import Layout from "@/components/Layout";
import CalculatorShell from "@/components/CalculatorShell";
import RecommendedProducts from "@/components/RecommendedProducts";

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
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-card sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="mb-6 font-display text-lg font-bold text-foreground">Your Results</h3>
                <div className="flex flex-col items-center gap-1 rounded-2xl bg-card p-6 shadow-sm border border-border/50">
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

                {/* Insight */}
                <div className="mt-8 space-y-4 rounded-xl border border-border bg-card p-5">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] text-primary">🏃</span>
                    Running Insight
                  </h4>
                  <div className="text-sm leading-relaxed text-muted-foreground">
                    {result.bmi < 18.5 && (
                      <p>Increased risk of bone stress injuries and low energy availability. Focus on caloric density and strength training.</p>
                    )}
                    {result.bmi >= 18.5 && result.bmi < 25 && (
                      <p>Healthy range for endurance performance. Maintain consistency and focus on recovery-specific nutrition.</p>
                    )}
                    {result.bmi >= 25 && result.bmi < 30 && (
                      <p>Likely a mix of muscle and fat. For performance gains, focus on body composition (muscle retention) rather than just weight.</p>
                    )}
                    {result.bmi >= 30 && (
                      <p>Prioritize low-impact training initially. Use well-cushioned shoes and soft surfaces to protect your joints.</p>
                    )}
                  </div>
                </div>
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

            {result && <RecommendedProducts tags={["proteine", "integratori", "recupero"]} title="Performance Fuel" maxProducts={6} />}
          </div>
        </div>
      </CalculatorShell>
    </Layout>
  );
};

export default BMICalculator;
