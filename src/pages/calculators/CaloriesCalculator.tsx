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
        title="Quante Calorie si Bruciano Correndo? Calcolatore Corsa 10km" 
        description="Scopri quante calorie si bruciano correndo 5km, 10km o una maratona. Calcolatore esatto basato sul tuo peso, ritmo e pendenza."
        path="/tools/calories"
        faq={[
          { q: "Quante calorie si bruciano correndo 10 km?", a: "La stima scientifica è di circa 60-80 calorie per chilometro. Quindi correndo 10 km brucerai mediamente tra le 600 e le 800 calorie, a seconda del tuo peso corporeo e del ritmo." },
          { q: "Si dimagrisce di più correndo o camminando?", a: "A parità di distanza percorsa, la corsa brucia circa il 30% di calorie in più rispetto alla camminata a causa della fase di 'volo' e del maggior lavoro biomeccanico. Inoltre la corsa innalza il metabolismo basale post-allenamento (effetto EPOC)." },
          { q: "Correre in salita brucia più calorie?", a: "Sì, ogni 1% di pendenza aggiuntiva aumenta il dispendio energetico di circa il 4-5%. L'allenamento in collina (Hill Training) è uno dei metodi migliori per bruciare grassi rapidamente." }
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Calcolatore Calorie Bruciate Corsa",
          "description": "Strumento per calcolare il dispendio energetico esatto della corsa in base a peso, pendenza e ritmo.",
          "applicationCategory": "HealthApplication",
          "operatingSystem": "All"
        }}
      />
      <CalculatorShell title="Calcolatore Calorie Bruciate" description="Stima le calorie bruciate durante la tua corsa." icon={Flame}>
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
                  <label className="mb-2 block text-sm font-semibold text-foreground">Distanza Percorsa (km)</label>
                  <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="10"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
              </div>
              <button onClick={calculate}
                className="mt-8 w-full rounded-xl bg-gradient-hero px-6 py-4 text-sm font-extrabold text-primary-foreground shadow-hero transition-all hover:opacity-90 active:scale-[0.98] sm:w-auto">
                Stima Calorie Bruciate
              </button>
            </div>

            {/* Science Section */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm card-depth card-depth-hover">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.014 9 16.014 9s1.014-4 2.014-4c0 0-1 4-1 6 0 2 1.5 5 2.643 7.657z" /></svg>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">La Scienza</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Il consumo calorico della corsa è determinato principalmente dalla massa e dalla distanza (Lavoro = Forza x Distanza). Il MET (Metabolic Equivalent of Task) per la corsa (~11-14) è uno dei più alti nel movimento umano, richiedendo un significativo consumo di ossigeno e turnover di glicogeno.
              </p>
            </div>
          </div>

          {/* Right Column: Results & Practice */}
          <div className="space-y-8">
            {result ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="rounded-2xl border-2 border-primary bg-primary/5 p-6 shadow-hero sm:p-8 card-depth">
                  <h3 className="mb-6 font-display text-xl font-bold text-foreground">Dispendio Energetico</h3>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between rounded-xl bg-card p-4 border border-border shadow-sm card-depth card-depth-hover">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Totale Bruciato</span>
                      <p className="font-display text-3xl font-bold text-primary">{result.calories} <span className="text-xs font-bold uppercase text-muted-foreground/60">kcal</span></p>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-card p-4 border border-border shadow-sm card-depth card-depth-hover">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Equiv. Massa Grassa</span>
                      <p className="font-display text-3xl font-bold text-accent">{result.fatGrams} <span className="text-xs font-bold uppercase text-muted-foreground/60">g</span></p>
                    </div>
                  </div>

                  {/* Note Section moved inside results */}
                  <div className="mt-8 rounded-xl border border-primary/20 bg-background/50 p-4 inner-glow">
                    <p className="text-xs leading-relaxed text-muted-foreground italic">
                      <strong>Nota:</strong> Le stime utilizzano il coefficiente MET (~1.036 kcal/kg/km). Il consumo reale dipende dal ritmo, dall'efficienza e dal terreno.
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
                      <span>Finestra post-corsa: consuma un rapporto Carboidrati-Proteine di 3:1 entro 45 minuti per una risintesi ottimale del glicogeno.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Non sovralimentarti: molti runner sovrastimano il consumo e mangiano troppo, portando a disturbi gastrointestinali e aumento di peso indesiderato.</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card p-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/50">
                  <Flame className="h-8 w-8 text-muted-foreground/40" />
                </div>
                <h3 className="font-display text-base font-bold text-muted-foreground">Nessun Calcolo Ancora</h3>
                <p className="mt-2 text-sm text-muted-foreground/60 max-w-[240px]">Scopri quante calorie brucerai nella tua prossima corsa.</p>
              </div>
            )}
          </div>
        </div>

        {/* Referrals Section consolidated at bottom */}
        <div className="mt-16 space-y-12 border-t border-border pt-16">
          <GuidesReferral guides={[
            { title: "Nutrizione per la Corsa 101", path: "/guides/running-nutrition", desc: "Una guida completa su cosa mangiare prima, durante e dopo i tuoi sforzi." },
            { title: "Padroneggiare il Rifornimento", path: "/guides/supplements-for-runners", desc: "Approfondimento scientifico sull'ottimizzazione delle riserve di glicogeno per la lunga distanza." }
          ]} />

          <HubReferral 
            category="supplements"
            href="/hub/supplements"
            title="Miglior Hub per l'Integrazione"
            description="Visualizza le specifiche tecniche di gel energetici e mix di carboidrati per trovare il carburante perfetto per il tuo prossimo sforzo lungo."
          />
        </div>
      </CalculatorShell>
    </Layout>
  );
};

export default CaloriesCalculator;
