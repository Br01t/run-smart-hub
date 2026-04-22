import { useState } from "react";
import { Flame } from "lucide-react";
import Layout from "@/components/Layout";
import CalculatorShell from "@/components/CalculatorShell";
import HubReferral from "@/components/HubReferral";
import SEO from "@/components/SEO";
import GuidesReferral from "@/components/GuidesReferral";

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
      <SEO 
        title="Running Calories Burned Calculator" 
        description="Estimate the total calories burned during your run based on distance, weight, and average pace using scientific MET coefficients."
        path="/tools/calories"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Running Calories Burned Calculator",
          "description": "Scientific calorie expenditure estimator for endurance athletes.",
          "applicationCategory": "HealthApplication",
          "operatingSystem": "All"
        }}
      />
      <CalculatorShell title="Calories Burned Calculator" description="Estimate calories burned during your run." icon={Flame}>
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
          {/* Left Column: Inputs & Science */}
          <div className="flex-1 space-y-8">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8 card-depth">
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

            {/* Science Section */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm card-depth card-depth-hover">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.014 9 16.014 9s1.014-4 2.014-4c0 0-1 4-1 6 0 2 1.5 5 2.643 7.657z" /></svg>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">The Science</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Running caloric burn is primarily determined by mass and distance (Work = Force x Distance). The MET (Metabolic Equivalent of Task) for running (~11-14) is one of the highest in human movement, requiring significant oxygen consumption and glycogen turnover.
              </p>
            </div>
          </div>

          {/* Right Column: Results & Practice */}
          <div className="space-y-8">
            {result ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="rounded-2xl border-2 border-primary bg-primary/5 p-6 shadow-hero sm:p-8 card-depth">
                  <h3 className="mb-6 font-display text-xl font-bold text-foreground">Energy Expenditure</h3>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between rounded-xl bg-card p-4 border border-border shadow-sm card-depth card-depth-hover">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Total Burn</span>
                      <p className="font-display text-3xl font-bold text-primary">{result.calories} <span className="text-xs font-bold uppercase text-muted-foreground/60">kcal</span></p>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-card p-4 border border-border shadow-sm card-depth card-depth-hover">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Fat Mass Equiv.</span>
                      <p className="font-display text-3xl font-bold text-accent">{result.fatGrams} <span className="text-xs font-bold uppercase text-muted-foreground/60">g</span></p>
                    </div>
                  </div>

                  {/* Note Section moved inside results */}
                  <div className="mt-8 rounded-xl border border-primary/20 bg-background/50 p-4 inner-glow">
                    <p className="text-xs leading-relaxed text-muted-foreground italic">
                      <strong>Note:</strong> Estimates use the MET coefficient (~1.036 kcal/kg/km). Real burn depends on pace, efficiency, and terrain.
                    </p>
                  </div>
                </div>

                {/* Practice Section moved after results */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm card-depth card-depth-hover">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">The Practice</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Post-run window: Consume a 3:1 Carb-to-Protein ratio within 45 min for optimal glycogen resynthesis.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Don't over-fuel: Many runners overestimate burn and over-eat, leading to GI distress and unwanted weight gain.</span>
                    </li>
                  </ul>
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
          </div>
        </div>

        {/* Referrals Section consolidated at bottom */}
        <div className="mt-16 space-y-12 border-t border-border pt-16">
          <GuidesReferral guides={[
            { title: "Running Nutrition 101", path: "/guides/running-nutrition", desc: "A comprehensive guide on what to eat before, during, and after your efforts." },
            { title: "Mastering Fueling", path: "/guides/supplements-for-runners", desc: "Scientific deep dive on optimizing glycogen stores for long distance." }
          ]} />

          <HubReferral 
            category="supplements"
            href="/hub#supplements"
            title="Best Performance Fuel Hub"
            description="View technical specs of energy gels, chews, and carb mixes to find the perfect fuel for your next long effort."
          />
        </div>
      </CalculatorShell>
    </Layout>
  );
};

export default CaloriesCalculator;
