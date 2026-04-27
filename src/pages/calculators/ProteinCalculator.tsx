import { useState } from "react";
import { Dumbbell } from "lucide-react";
import Layout from "@/components/Layout";
import CalculatorShell from "@/components/CalculatorShell";
import HubReferral from "@/components/HubReferral";
import SEO from "@/components/SEO";
import GuidesReferral from "@/components/GuidesReferral";

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
      <SEO 
        title="Calcolatore Fabbisogno Proteico per Runner" 
        description="Calcola il tuo fabbisogno proteico giornaliero in base al peso corporeo, all'intensità dell'allenamento e agli obiettivi di performance utilizzando le linee guida ISSN."
        path="/tools/protein"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Calcolatore Proteine per Runner",
          "description": "Stimatore dell'apporto proteico basato su evidenze scientifiche per runner e atleti di resistenza.",
          "applicationCategory": "HealthApplication",
          "operatingSystem": "All"
        }}
      />
      <CalculatorShell title="Calcolatore Fabbisogno Proteico" description="Scopri quante proteine consumare giornalmente in base ai tuoi obiettivi." icon={Dumbbell}>
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
          {/* Left Column: Inputs & Science */}
          <div className="flex-1 space-y-8">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8 card-depth">
              <h2 className="mb-6 font-display text-lg font-bold text-foreground">Dati del Calcolatore</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">Peso Corporeo (kg)</label>
                  <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="70"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">Attività Giornaliera</label>
                  <select value={activity} onChange={(e) => setActivity(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20">
                    <option value="sedentary">Sedentario (Nessun esercizio)</option>
                    <option value="moderate">Attivo (3-5 volte/settimana)</option>
                    <option value="intense">Intenso (6-7 volte/settimana)</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-foreground">Obiettivo di Allenamento</label>
                  <select value={goal} onChange={(e) => setGoal(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20">
                    <option value="lose">Perdita di Peso / Definizione</option>
                    <option value="maintain">Mantenimento / Performance</option>
                    <option value="gain">Guadagno Muscolare / Ipertrofia</option>
                  </select>
                </div>
              </div>
              <button onClick={calculate}
                className="mt-8 w-full rounded-xl bg-gradient-hero px-6 py-4 text-sm font-extrabold text-primary-foreground shadow-hero transition-all hover:opacity-90 active:scale-[0.98] sm:w-auto">
                Scopri il tuo Fabbisogno
              </button>
            </div>

            {/* Science Section */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm card-depth card-depth-hover">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500/10 text-rose-500">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86 1.43l-1.008.806a1 1 0 01-1.217.108l-5.115-3.41a1 1 0 01-.108-1.217l.806-1.008a6 6 0 001.43-3.86l-.477-2.387a2 2 0 00-.547-1.022L7.572 2.572a2 2 0 00-2.828 0L2.572 4.744a2 2 0 000 2.828l1.172 1.172a2 2 0 001.022.547l2.387.477a6 6 0 003.86-1.43l1.008-.806a1 1 0 011.217-.108l5.115-3.41a1 1 0 01.108 1.217l-.806 1.008a6 6 0 00-1.43 3.86l.477-2.387a2 2 0 00.547-1.022l1.172 1.172a2 2 0 002.828 0l2.172-2.172a2 2 0 000-2.828l-1.172-1.172z" /></svg>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">La Scienza</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Per gli atleti di resistenza, le proteine non servono solo alla crescita muscolare; sono fondamentali per riparare i micro-traumi nelle fibre muscolari causati dagli impatti ripetitivi e per la sintesi dei mitocondri. Durante le corse lunghe, le proteine possono fornire fino al 5-10% del dispendio energetico totale attraverso la gluconeogenesi.
              </p>
            </div>
          </div>

          {/* Right Column: Results & Practice */}
          <div className="space-y-8">
            {result ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="rounded-2xl border-2 border-primary bg-primary/5 p-6 shadow-hero sm:p-8 card-depth">
                  <h3 className="mb-6 font-display text-xl font-bold text-foreground">Apporto Raccomandato</h3>
                  <div className="flex flex-col items-center gap-1 rounded-2xl bg-card p-8 border border-border shadow-sm card-depth card-depth-hover">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Target Giornaliero Totale</p>
                    <p className="font-display text-5xl font-black text-primary">{result.min}–{result.max}<span className="text-xl ml-1 font-bold text-muted-foreground/40">g</span></p>
                    <p className="mt-2 text-xs font-medium text-muted-foreground">distribuito su 4-5 pasti</p>
                  </div>

                  {/* Note Section moved inside results */}
                  <div className="mt-8 rounded-xl border border-primary/20 bg-background/50 p-4 inner-glow">
                    <p className="text-xs leading-relaxed text-muted-foreground italic">
                      <strong>Nota:</strong> Il fabbisogno proteico scala con il volume e l'intensità dell'allenamento. Questi valori si basano sulle raccomandazioni ISSN per atleti di resistenza.
                    </p>
                  </div>
                </div>

                {/* Practice Section moved after results */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm card-depth card-depth-hover">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">In Pratica</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Punta a 20-30g per pasto. Questo massimizza la risposta MPS in modo più efficace rispetto a un unico pasto massiccio ad alto contenuto proteico.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>La "Finestra Anabolica" è più lunga di quanto si pensasse (fino a 24 ore), ma assumere proteine entro 2 ore da una corsa lunga aiuta a smorzare il cortisolo.</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card p-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/50">
                  <Dumbbell className="h-8 w-8 text-muted-foreground/40" />
                </div>
                <h3 className="font-display text-base font-bold text-muted-foreground">Ancora Nessun Risultato</h3>
                <p className="mt-2 text-sm text-muted-foreground/60 max-w-[240px]">Comunicaci il tuo livello di attività per ottimizzare il tuo profilo di macronutrienti.</p>
              </div>
            )}
          </div>
        </div>

        {/* Referrals Section consolidated at bottom */}
        <div className="mt-16 space-y-12 border-t border-border pt-16">
          <GuidesReferral guides={[
            { title: "Guida al Recupero Muscolare", path: "/guides/muscle-recovery", desc: "Tecniche scientifiche per accelerare la riparazione e ridurre l'indolenzimento post-corsa." },
            { title: "Nutrizione per la Corsa 101", path: "/guides/running-nutrition", desc: "I requisiti di macro e micronutrienti per il runner ad alto volume." }
          ]} />

          <HubReferral 
            category="supplements"
            href="/hub#supplements"
            title="Miglior Hub Proteine e Recupero"
            description="Confronta purezza, profili aminoacidici e tassi di assorbimento delle migliori proteine whey, vegane e per il recupero."
          />
        </div>
      </CalculatorShell>
    </Layout>
  );
};

export default ProteinCalculator;
