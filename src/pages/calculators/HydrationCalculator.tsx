import { useState } from "react";
import { Droplets } from "lucide-react";
import Layout from "@/components/Layout";
import CalculatorShell from "@/components/CalculatorShell";
import HubReferral from "@/components/HubReferral";
import SEO from "@/components/SEO";
import GuidesReferral from "@/components/GuidesReferral";

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
      <SEO 
        title="Running Hydration Calculator" 
        description="Calculate your personalized hydration needs before, during, and after your run based on body weight, duration, and temperature."
        path="/tools/hydration"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Running Hydration Calculator",
          "description": "Evidence-based hydration planning tool for runners.",
          "applicationCategory": "HealthApplication",
          "operatingSystem": "All"
        }}
      />
      <CalculatorShell
        title="Hydration Calculator"
        description="Find out how much water to drink before, during and after your run."
        icon={Droplets}
      >
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
          {/* Left Column: Inputs & Science */}
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

            {/* Science Section */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86 1.43l-1.008.806a1 1 0 01-1.217.108l-5.115-3.41a1 1 0 01-.108-1.217l.806-1.008a6 6 0 001.43-3.86l-.477-2.387a2 2 0 00-.547-1.022L7.572 2.572a2 2 0 00-2.828 0L2.572 4.744a2 2 0 000 2.828l1.172 1.172a2 2 0 001.022.547l2.387.477a6 6 0 003.86-1.43l1.008-.806a1 1 0 011.217-.108l5.115-3.41a1 1 0 01.108 1.217l-.806 1.008a6 6 0 00-1.43 3.86l.477 2.387a2 2 0 00.547-1.022l1.172 1.172a2 2 0 002.828 0l2.172-2.172a2 2 0 000-2.828l-1.172-1.172z" /></svg>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">The Science</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Hydration is about maintaining plasma volume and osmotic balance. When you lose more than 2% of body weight in fluids, your heart must work harder to pump thicker blood, directly decreasing your VO2 max and aerobic efficiency.
              </p>
            </div>
          </div>

          {/* Right Column: Results & Practice */}
          <div className="space-y-8">
            {result ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="rounded-2xl border-2 border-primary bg-primary/5 p-6 shadow-hero sm:p-8">
                  <h3 className="mb-6 font-display text-xl font-bold text-foreground">Your Strategy</h3>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between rounded-xl bg-card p-4 shadow-sm border border-border">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Before Run</p>
                        <p className="text-sm font-medium text-foreground">2h Window</p>
                      </div>
                      <p className="font-display text-2xl font-bold text-primary">{result.before}ml</p>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-card p-4 shadow-sm border border-border">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">During Run</p>
                        <p className="text-sm font-medium text-foreground">Every Hour</p>
                      </div>
                      <p className="font-display text-2xl font-bold text-primary">{result.during}ml</p>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-card p-4 shadow-sm border border-border">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">After Run</p>
                        <p className="text-sm font-medium text-foreground">Recovery Window</p>
                      </div>
                      <p className="font-display text-2xl font-bold text-primary">{result.after}ml</p>
                    </div>
                  </div>

                  {/* Note Section moved inside results */}
                  <div className="mt-8 rounded-xl border border-primary/20 bg-background/50 p-4">
                    <p className="text-xs leading-relaxed text-muted-foreground italic">
                      <strong>Note:</strong> These values are estimates based on general sweat rate models. Factors like humidity, altitude, and individual physiology can significantly alter these needs.
                    </p>
                  </div>
                </div>

                {/* Practice Section moved after results */}
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
                      <span>Use the "Pee Test": Aim for pale straw color before starting.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Sip, don't chug: Every 15-20 min is better for gastric emptying.</span>
                    </li>
                  </ul>
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
          </div>
        </div>

        {/* Referrals Section consolidated at bottom */}
        <div className="mt-16 space-y-12 border-t border-border pt-16">
          <GuidesReferral guides={[
            { title: "Fueling & Electrolytes", path: "/guides/supplements-for-runners", desc: "Hydration is half the battle. Master the technical balance of minerals." },
            { title: "Marathon Nutrition", path: "/guides/marathon-training", desc: "Complete hydration strategies for the 42.2km effort." }
          ]} />

          <HubReferral 
            category="hydration"
            href="/hub#hydration"
            title="Best Hydration Gear"
            description="Explore our technical comparison of hydration vests, handhelds, and soft flasks to carry your strategy with zero bounce."
          />
        </div>
      </CalculatorShell>
    </Layout>
  );
};

export default HydrationCalculator;
