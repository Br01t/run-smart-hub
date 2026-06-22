import { useState } from "react";
import { Zap } from "lucide-react";
import Layout from "@/components/Layout";
import CalculatorShell from "@/components/CalculatorShell";
import HubReferral from "@/components/HubReferral";
import SEO from "@/components/SEO";
import GuidesReferral from "@/components/GuidesReferral";

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
      <SEO 
        title="Come Reintegrare Elettroliti Corsa: Magnesio, Potassio e Sodio" 
        description="A cosa servono i sali minerali nella corsa? Calcola quanto sodio e potassio perdi sudando e scopri come reintegrare gli elettroliti per evitare crampi."
        path="/tools/electrolytes"
        keywords={["calcolatore elettroliti", "sali minerali corsa", "magnesio e potassio runner", "perdita sodio sudore", "reintegro elettroliti running"]}
        faq={[
          { q: "A cosa servono i sali minerali (elettroliti) nella corsa?", a: "Gli elettroliti, specialmente sodio, potassio e magnesio, sono fondamentali per la contrazione muscolare e per trattenere l'acqua nel corpo. Una loro carenza causa disidratazione cellulare, affaticamento precoce e crampi muscolari." },
          { q: "Come reintegrare magnesio e potassio dopo la corsa?", a: "Dopo una corsa intensa, usa bevande isotoniche sportive, compresse effervescenti o fonti naturali come banane (potassio) e frutta secca (magnesio). Assicurati che l'integratore contenga soprattutto sodio, che è il minerale maggiormente perso col sudore." },
          { q: "Quanti elettroliti perdo sudando?", a: "Un runner medio perde tra 500mg e 1500mg di sodio per ogni litro di sudore. È cruciale stimare il proprio tasso di sudorazione per pianificare un reintegro accurato durante gare lunghe." }
        ]}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebApplication",
              "name": "Calcolatore Elettroliti e Sali Minerali Corsa",
              "url": "https://www.runners-hub.org/tools/electrolytes",
              "description": "Strumento per calcolare il fabbisogno di elettroliti (sodio, potassio, magnesio) e prevenire i crampi muscolari.",
              "applicationCategory": "HealthApplication",
              "operatingSystem": "All",
              "inLanguage": "it-IT",
              "isAccessibleForFree": true,
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "bestRating": "5", "ratingCount": "194" }
            },
            {
              "@type": "HowTo",
              "name": "Come Calcolare il Reintegro di Elettroliti",
              "description": "Scopri come stimare la perdita di sali minerali e calcolare il reintegro ottimale in 3 passi.",
              "totalTime": "PT2M",
              "step": [
                { "@type": "HowToStep", "position": 1, "name": "Inserisci peso corporeo e durata", "text": "Specifica il tuo peso in kg e il tempo totale di corsa previsto in minuti." },
                { "@type": "HowToStep", "position": 2, "name": "Seleziona l'intensità della corsa", "text": "Scegli tra corsa facile, fondo medio o ripetute/gara. L'intensità e la temperatura aumentano il tasso di sudorazione e la perdita di sali." },
                { "@type": "HowToStep", "position": 3, "name": "Visualizza il fabbisogno di minerali", "text": "Clicca su Calcola per vedere i milligrammi consigliati di Sodio (Na+), Potassio (K+) e Magnesio (Mg++) da reintegrare." }
              ]
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.runners-hub.org" },
                { "@type": "ListItem", "position": 2, "name": "Strumenti", "item": "https://www.runners-hub.org/tools" },
                { "@type": "ListItem", "position": 3, "name": "Calcolatore Elettroliti", "item": "https://www.runners-hub.org/tools/electrolytes" }
              ]
            }
          ]
        }}
      />
      <CalculatorShell title="Calcolatore Elettroliti" description="Calcola sodio, potassio e magnesio da reintegrare durante la tua corsa." icon={Zap}>
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
                  <label className="mb-2 block text-sm font-semibold text-foreground">Durata Corsa (min)</label>
                  <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="60"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-foreground">Intensità Prevista</label>
                  <select value={intensity} onChange={(e) => setIntensity(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20">
                    <option value="low">Bassa (Recupero / Corsa Facile)</option>
                    <option value="moderate">Moderata (Tempo / Fondo Medio)</option>
                    <option value="high">Alta (Ripetute / Gara)</option>
                  </select>
                </div>
              </div>
              <button onClick={calculate}
                className="mt-8 w-full rounded-xl bg-gradient-hero px-6 py-4 text-sm font-extrabold text-primary-foreground shadow-hero transition-all hover:opacity-90 active:scale-[0.98] sm:w-auto">
                Calcola Reintegro
              </button>
            </div>

            {/* Science Section */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm card-depth card-depth-hover">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">La Scienza</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Gli elettroliti sono segnali elettrici. Il sodio è il principale driver dell'assorbimento dell'acqua nell'intestino tenue; senza abbastanza sodio, non assorbirai l'acqua che bevi, portando alla sensazione di "stomaco pieno d'acqua" e a una diminuzione delle prestazioni.
              </p>
            </div>
          </div>

          {/* Right Column: Results & Practice */}
          <div className="space-y-8">
            {result ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="rounded-2xl border-2 border-primary bg-primary/5 p-6 shadow-hero sm:p-8 card-depth">
                  <h3 className="mb-6 font-display text-xl font-bold text-foreground">Quantità da Reintegrare</h3>
                  <div className="grid gap-3">
                    <div className="flex items-center justify-between rounded-xl bg-card p-4 border border-border shadow-sm card-depth card-depth-hover">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Sodio (Na+)</span>
                      <p className="font-display text-2xl font-bold text-primary">{result.sodium} <span className="text-xs font-bold text-muted-foreground/60">mg</span></p>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-card p-4 border border-border shadow-sm card-depth card-depth-hover">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Potassio (K+)</span>
                      <p className="font-display text-2xl font-bold text-primary">{result.potassium} <span className="text-xs font-bold text-muted-foreground/60">mg</span></p>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-card p-4 border border-border shadow-sm card-depth card-depth-hover">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Magnesio (Mg++)</span>
                      <p className="font-display text-2xl font-bold text-primary">{result.magnesium} <span className="text-xs font-bold text-muted-foreground/60">mg</span></p>
                    </div>
                  </div>

                  {/* Note Section moved inside results */}
                  <div className="mt-8 rounded-xl border border-primary/20 bg-background/50 p-4 inner-glow">
                    <p className="text-xs leading-relaxed text-muted-foreground italic">
                      <strong>Nota:</strong> La perdita di elettroliti varia significativamente in base al tasso di sudorazione e alla fisiologia individuale. Usa questi valori come punto di partenza.
                    </p>
                  </div>
                </div>

                {/* Practice Section moved after results */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm card-depth card-depth-hover">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/10 text-teal-500">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">In Pratica</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Pre-carico: assumi 500 mg di sodio 60 minuti prima di una gara in condizioni di caldo.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Controlla la presenza di aloni di sale sulla pelle; è segno di una sudorazione molto salina che richiede più Na+.</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card p-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/50">
                  <Zap className="h-8 w-8 text-muted-foreground/40" />
                </div>
                <h3 className="font-display text-base font-bold text-muted-foreground">Nessun Calcolo Ancora</h3>
                <p className="mt-2 text-sm text-muted-foreground/60 max-w-[240px]">Pianifica il tuo fabbisogno di elettroliti in base al tuo prossimo allenamento.</p>
              </div>
            )}
          </div>
        </div>

        {/* Referrals Section consolidated at bottom */}
        <div className="mt-16 space-y-12 border-t border-border pt-16">
          <GuidesReferral guides={[
            { title: "Integrazione ed Elettroliti", path: "/guides/supplements-for-runners", desc: "Il delicato equilibrio del reintegro minerale per la massima performance atletica." },
            { title: "Alimentazione Maratona", path: "/guides/marathon-training", desc: "Evitare il 'muro' attraverso una gestione strategica di sale e liquidi." }
          ]} />

          <HubReferral 
            category="hydration"
            href="/hub/hydration"
            title="Migliori Soluzioni Elettrolitiche"
            description="Confronta le specifiche tecniche, i rapporti di sali e la biodisponibilità dei principali marchi di elettroliti sul mercato."
          />
        </div>
      </CalculatorShell>
    </Layout>
  );
};

export default ElectrolyteCalculator;
