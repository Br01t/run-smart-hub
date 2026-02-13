import { useState } from "react";
import { Flame } from "lucide-react";
import Layout from "@/components/Layout";
import CalculatorShell from "@/components/CalculatorShell";
import RecommendedProducts from "@/components/RecommendedProducts";

const CaloriesCalculator = () => {
  const [weight, setWeight] = useState("");
  const [distance, setDistance] = useState("");
  const [result, setResult] = useState<null | { calories: number; fatGrams: number }>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const d = parseFloat(distance);
    if (isNaN(w) || isNaN(d) || w <= 0 || d <= 0) return;

    // Approximate MET-based: ~1 kcal/kg/km for running
    const calories = Math.round(w * d * 1.036);
    const fatGrams = Math.round((calories * 0.5) / 9); // ~50% from fat

    setResult({ calories, fatGrams });
  };

  return (
    <Layout>
      <CalculatorShell
        title="Calcolatore Calorie Bruciate"
        description="Stima le calorie consumate durante la corsa."
        icon={Flame}
      >
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Peso (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="70"
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Distanza (km)</label>
              <input
                type="number"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                placeholder="10"
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
          <button
            onClick={calculate}
            className="mt-5 w-full rounded-lg bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-hero transition-opacity hover:opacity-90 sm:w-auto"
          >
            Calcola
          </button>
        </div>

        {result && (
          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-6">
            <h3 className="mb-4 font-display text-lg font-semibold text-foreground">I tuoi risultati</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-card p-4 text-center shadow-card">
                <p className="text-xs font-medium uppercase text-muted-foreground">Calorie totali</p>
                <p className="mt-1 font-display text-3xl font-bold text-primary">{result.calories}</p>
                <p className="text-xs text-muted-foreground">kcal bruciate</p>
              </div>
              <div className="rounded-lg bg-card p-4 text-center shadow-card">
                <p className="text-xs font-medium uppercase text-muted-foreground">Grassi bruciati</p>
                <p className="mt-1 font-display text-3xl font-bold text-accent">{result.fatGrams} g</p>
                <p className="text-xs text-muted-foreground">stima approssimativa</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Formula basata su coefficiente MET (~1.036 kcal/kg/km). Il valore reale varia in base a ritmo, terreno e condizioni.
            </p>
          </div>
        )}

        {result && <RecommendedProducts tags={["energia", "carboidrati", "integratori"]} />}
      </CalculatorShell>
    </Layout>
  );
};

export default CaloriesCalculator;
