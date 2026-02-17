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
        <div className="rounded-xl border border-border bg-card p-4 shadow-card sm:p-6">
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Weight (kg)</label>
              <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="70"
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Height (cm)</label>
              <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="175"
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
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
              <p className="text-xs font-medium uppercase text-muted-foreground">Your BMI</p>
              <p className={`font-display text-4xl font-bold sm:text-5xl ${result.color}`}>{result.bmi}</p>
              <p className={`text-base font-semibold sm:text-lg ${result.color}`}>{result.category}</p>
            </div>
            <div className="mt-5">
              <div className="flex h-3 overflow-hidden rounded-full">
                <div className="flex-1 bg-accent/60" />
                <div className="flex-[1.5] bg-primary/60" />
                <div className="flex-1 bg-accent/60" />
                <div className="flex-1 bg-destructive/60" />
              </div>
              <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                <span>16</span><span>18.5</span><span>25</span><span>30</span><span>40</span>
              </div>
            </div>

            {/* Personalized insights */}
            <div className="mt-5 space-y-3 rounded-lg border border-border bg-card p-4">
              <h4 className="text-sm font-semibold text-foreground">💡 What this means for runners</h4>
              {result.bmi < 18.5 && (
                <p className="text-sm text-muted-foreground">Being underweight can affect energy levels and injury risk. Consider increasing calorie intake with nutrient-dense foods and monitor bone health. Runners with low BMI may benefit from strength training to build lean mass.</p>
              )}
              {result.bmi >= 18.5 && result.bmi < 25 && (
                <p className="text-sm text-muted-foreground">Your BMI is in the healthy range — great for running performance. Most elite distance runners have a BMI between 18.5 and 22. Focus on maintaining your weight with balanced nutrition and consistent training.</p>
              )}
              {result.bmi >= 25 && result.bmi < 30 && (
                <p className="text-sm text-muted-foreground">A slightly elevated BMI is common among runners who also do strength training. If you feel fit and perform well, don't worry too much. Consider focusing on body composition rather than weight alone. Gradual weight loss of 0.5 kg/week through a moderate calorie deficit is safe for runners.</p>
              )}
              {result.bmi >= 30 && (
                <p className="text-sm text-muted-foreground">Starting to run at a higher BMI is absolutely possible — just build up gradually. Use walk-run intervals, invest in well-cushioned shoes, and prioritize joint-friendly surfaces. Consult a healthcare professional to create a safe plan.</p>
              )}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary-foreground">Tip</span>
                <span className="text-xs text-muted-foreground">BMI doesn't distinguish between muscle and fat mass. Athletes often have a higher BMI due to muscle.</span>
              </div>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              BMI is a general indicator and does not account for muscle mass, body composition and other factors.
            </p>
          </div>
        )}

        {result && <RecommendedProducts tags={["proteine", "integratori", "recupero"]} />}
      </CalculatorShell>
    </Layout>
  );
};

export default BMICalculator;
