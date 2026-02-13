import { useState } from "react";
import { Droplets } from "lucide-react";
import Layout from "@/components/Layout";
import CalculatorShell from "@/components/CalculatorShell";
import RecommendedProducts from "@/components/RecommendedProducts";

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
    const before = Math.round(w * 5); // 5ml per kg
    const during = Math.round(((w * 0.5 * d) / 60) * tempFactor * 100) / 100; // liters
    const after = Math.round(w * 7); // 7ml per kg

    setResult({ before, during: Math.round(during * 1000), after });
  };

  return (
    <Layout>
      <CalculatorShell
        title="Calcolatore Fabbisogno Idrico"
        description="Scopri quanta acqua bere prima, durante e dopo la corsa."
        icon={Droplets}
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
              <label className="mb-1.5 block text-sm font-medium text-foreground">Temperatura (°C)</label>
              <select
                value={temp}
                onChange={(e) => setTemp(e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="10">Freddo (&lt;15°C)</option>
                <option value="20">Mite (15-25°C)</option>
                <option value="30">Caldo (&gt;25°C)</option>
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
            <h3 className="mb-4 font-display text-lg font-semibold text-foreground">
              I tuoi risultati
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-card p-4 text-center shadow-card">
                <p className="text-xs font-medium uppercase text-muted-foreground">Prima</p>
                <p className="mt-1 font-display text-2xl font-bold text-primary">{result.before} ml</p>
                <p className="text-xs text-muted-foreground">2h prima della corsa</p>
              </div>
              <div className="rounded-lg bg-card p-4 text-center shadow-card">
                <p className="text-xs font-medium uppercase text-muted-foreground">Durante</p>
                <p className="mt-1 font-display text-2xl font-bold text-primary">{result.during} ml</p>
                <p className="text-xs text-muted-foreground">ogni ora di corsa</p>
              </div>
              <div className="rounded-lg bg-card p-4 text-center shadow-card">
                <p className="text-xs font-medium uppercase text-muted-foreground">Dopo</p>
                <p className="mt-1 font-display text-2xl font-bold text-primary">{result.after} ml</p>
                <p className="text-xs text-muted-foreground">entro 2h post corsa</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Questi valori sono indicativi e basati su formule scientifiche generali. In caso di condizioni particolari consulta un medico.
            </p>
          </div>
        )}

        {result && <RecommendedProducts tags={["idratazione", "elettroliti"]} />}
      </CalculatorShell>
    </Layout>
  );
};

export default HydrationCalculator;
