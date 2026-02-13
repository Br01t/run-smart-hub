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
      <CalculatorShell
        title="Calcolatore Fabbisogno Elettroliti"
        description="Calcola sodio, potassio e magnesio da reintegrare durante la corsa."
        icon={Zap}
      >
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <div className="grid gap-5 sm:grid-cols-3">
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
              <label className="mb-1.5 block text-sm font-medium text-foreground">Durata (minuti)</label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="60"
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Intensità</label>
              <select
                value={intensity}
                onChange={(e) => setIntensity(e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="low">Bassa</option>
                <option value="moderate">Moderata</option>
                <option value="high">Alta</option>
              </select>
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
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-card p-4 text-center shadow-card">
                <p className="text-xs font-medium uppercase text-muted-foreground">Sodio</p>
                <p className="mt-1 font-display text-2xl font-bold text-primary">{result.sodium} mg</p>
              </div>
              <div className="rounded-lg bg-card p-4 text-center shadow-card">
                <p className="text-xs font-medium uppercase text-muted-foreground">Potassio</p>
                <p className="mt-1 font-display text-2xl font-bold text-primary">{result.potassium} mg</p>
              </div>
              <div className="rounded-lg bg-card p-4 text-center shadow-card">
                <p className="text-xs font-medium uppercase text-muted-foreground">Magnesio</p>
                <p className="mt-1 font-display text-2xl font-bold text-primary">{result.magnesium} mg</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Valori stimati basati su tasso di sudorazione medio. La perdita reale varia in base a genetica, temperatura e acclimatazione.
            </p>
          </div>
        )}

        {result && <RecommendedProducts tags={["elettroliti", "magnesio", "idratazione"]} />}
      </CalculatorShell>
    </Layout>
  );
};

export default ElectrolyteCalculator;
