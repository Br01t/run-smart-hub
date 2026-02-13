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
      <CalculatorShell
        title="Calcolatore Fabbisogno Proteico"
        description="Scopri quante proteine assumere al giorno in base ai tuoi obiettivi."
        icon={Dumbbell}
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
              <label className="mb-1.5 block text-sm font-medium text-foreground">Livello attività</label>
              <select
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="sedentary">Sedentario</option>
                <option value="moderate">Attivo (3-5x/sett)</option>
                <option value="intense">Molto attivo (6-7x/sett)</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Obiettivo</label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="lose">Perdere peso</option>
                <option value="maintain">Mantenere</option>
                <option value="gain">Aumentare massa</option>
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
            <div className="flex flex-col items-center gap-2 rounded-lg bg-card p-6 shadow-card">
              <p className="text-xs font-medium uppercase text-muted-foreground">Fabbisogno giornaliero</p>
              <p className="font-display text-4xl font-bold text-primary">
                {result.min}–{result.max} g
              </p>
              <p className="text-sm text-muted-foreground">di proteine al giorno</p>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Range basato su linee guida ISSN per atleti e persone attive. Valori indicativi, consulta un nutrizionista per un piano personalizzato.
            </p>
          </div>
        )}

        {result && <RecommendedProducts tags={["proteine", "recupero"]} />}
      </CalculatorShell>
    </Layout>
  );
};

export default ProteinCalculator;
