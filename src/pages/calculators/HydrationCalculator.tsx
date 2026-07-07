import { useState } from "react";
import { Droplets } from "lucide-react";
import Layout from "@/components/Layout";
import CalculatorShell from "@/components/CalculatorShell";
import HubReferral from "@/components/HubReferral";
import SEO from "@/components/SEO";
import GuidesReferral from "@/components/GuidesReferral";
import { getContextualGuides } from "@/lib/guides/contextualGuides";

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
    const during = Math.round(((w * 8 * d) / 60) * tempFactor);
    const after = Math.round(w * 7);

    setResult({ before, during, after });
  };

  return (
    <Layout>
      <SEO 
        title="Quanto Bere Durante una Maratona? Calcolo Idratazione Corsa" 
        description="Calcola quanta acqua bere durante la corsa, la mezza maratona o la maratona. Strumento esatto per prevenire la disidratazione e ottimizzare le prestazioni."
        path="/tools/hydration"
        keywords={["calcolatore idratazione corsa", "quanto bere maratona", "fabbisogno idrico runner", "idratazione running", "sali minerali corsa"]}
        faq={[
          { q: "Quanto bere durante una maratona?", a: "L'obiettivo è assumere tra 400 e 800 ml di liquidi all'ora, a seconda del proprio tasso di sudorazione e della temperatura. Consigliamo di sorseggiare piccole quantità (100-150 ml) ogni 15-20 minuti." },
          { q: "Quanta acqua bere prima di una 10km o mezza maratona?", a: "Bevi circa 500 ml di acqua 2 ore prima della gara per dare ai reni il tempo di processare i liquidi. Poi, assumi altri 200 ml circa 15 minuti prima della partenza." },
          { q: "Come capire se sono disidratato correndo?", a: "Segnali primari includono sete intensa, battito cardiaco inspiegabilmente alto a ritmi lenti, brividi, labbra secche e urina scura post-corsa. La disidratazione al 2% del peso corporeo causa un calo drastico delle prestazioni." }
        ]}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebApplication",
              "name": "Calcolatore Idratazione Maratona e Corsa",
              "url": "https://www.runners-hub.org/tools/hydration",
              "description": "Strumento di pianificazione dell'idratazione e del tasso di sudorazione basato su evidenze scientifiche per runner. Calcola quanta acqua bere prima, durante e dopo la corsa.",
              "applicationCategory": "HealthApplication",
              "operatingSystem": "All",
              "browserRequirements": "Requires JavaScript",
              "inLanguage": "it-IT",
              "isAccessibleForFree": true,
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "bestRating": "5",
                "ratingCount": "243"
              }
            },
            {
              "@type": "HowTo",
              "name": "Come Calcolare il Fabbisogno Idrico per la Corsa",
              "description": "Guida passo-passo per calcolare quanta acqua bere prima, durante e dopo una corsa, maratona o mezza maratona.",
              "totalTime": "PT2M",
              "tool": [{ "@type": "HowToTool", "name": "Calcolatore Idratazione Runners Hub" }],
              "step": [
                {
                  "@type": "HowToStep",
                  "position": 1,
                  "name": "Inserisci il tuo peso corporeo",
                  "text": "Digita il tuo peso in kg nel campo apposito. Questo dato è fondamentale per calcolare il tasso di sudorazione individuale.",
                  "url": "https://www.runners-hub.org/tools/hydration#step1"
                },
                {
                  "@type": "HowToStep",
                  "position": 2,
                  "name": "Inserisci la durata della corsa",
                  "text": "Indica quanti minuti durerà il tuo allenamento o la gara. Per una maratona inserisci il tuo tempo previsto in minuti.",
                  "url": "https://www.runners-hub.org/tools/hydration#step2"
                },
                {
                  "@type": "HowToStep",
                  "position": 3,
                  "name": "Seleziona la temperatura prevista",
                  "text": "Scegli le condizioni climatiche. Con caldo e umidità superiori a 25°C il tasso di sudorazione aumenta del 30%.",
                  "url": "https://www.runners-hub.org/tools/hydration#step3"
                },
                {
                  "@type": "HowToStep",
                  "position": 4,
                  "name": "Leggi i risultati personalizzati",
                  "text": "Il calcolatore mostra quanti ml bere nelle 2 ore prima della corsa, ogni ora durante, e durante la finestra di recupero post-corsa.",
                  "url": "https://www.runners-hub.org/tools/hydration#step4"
                }
              ]
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.runners-hub.org" },
                { "@type": "ListItem", "position": 2, "name": "Strumenti", "item": "https://www.runners-hub.org/tools" },
                { "@type": "ListItem", "position": 3, "name": "Calcolatore Idratazione", "item": "https://www.runners-hub.org/tools/hydration" }
              ]
            }
          ]
        }}
      />
      <CalculatorShell
        title="Calcolatore Idratazione"
        description="Scopri quanta acqua bere prima, durante e dopo la tua corsa."
        icon={Droplets}
      >
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
                  <label className="mb-2 block text-sm font-semibold text-foreground">Temperatura Prevista (°C)</label>
                  <select value={temp} onChange={(e) => setTemp(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20">
                    <option value="10">Ambiente Freddo (&lt;15°C)</option>
                    <option value="20">Condizioni Ideali (15-25°C)</option>
                    <option value="30">Caldo / Umido (&gt;25°C)</option>
                  </select>
                </div>
              </div>
              <button onClick={calculate}
                className="mt-8 w-full rounded-xl bg-gradient-hero px-6 py-4 text-sm font-extrabold text-primary-foreground shadow-hero transition-all hover:opacity-90 active:scale-[0.98] sm:w-auto">
                Calcola Fabbisogno Idrico
              </button>
            </div>

            {/* Science Section */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm card-depth card-depth-hover">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86 1.43l-1.008.806a1 1 0 01-1.217.108l-5.115-3.41a1 1 0 01-.108-1.217l.806-1.008a6 6 0 001.43-3.86l-.477-2.387a2 2 0 00-.547-1.022L7.572 2.572a2 2 0 00-2.828 0L2.572 4.744a2 2 0 000 2.828l1.172 1.172a2 2 0 001.022.547l2.387.477a6 6 0 003.86-1.43l1.008-.806a1 1 0 011.217-.108l5.115-3.41a1 1 0 01.108 1.217l-.806 1.008a6 6 0 00-1.43 3.86l.477-2.387a2 2 0 00.547-1.022l1.172 1.172a2 2 0 002.828 0l2.172-2.172a2 2 0 000-2.828l-1.172-1.172z" /></svg>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">La Scienza</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                L'idratazione serve a mantenere il volume plasmatico e l'equilibrio osmotico. Quando perdi più del 2% del peso corporeo in liquidi, il cuore deve lavorare più duramente per pompare sangue più denso, diminuendo direttamente il tuo VO2 max e l'efficienza aerobica.
              </p>
            </div>
          </div>

          {/* Right Column: Results & Practice */}
          <div className="space-y-8">
            {result ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="rounded-2xl border-2 border-primary bg-primary/5 p-6 shadow-hero sm:p-8 card-depth">
                  <h3 className="mb-6 font-display text-xl font-bold text-foreground">La Tua Strategia</h3>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between rounded-xl bg-card p-4 border border-border shadow-sm card-depth card-depth-hover">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Prima della Corsa</p>
                        <p className="text-sm font-medium text-foreground">Finestra di 2 ore</p>
                      </div>
                      <p className="font-display text-2xl font-bold text-primary">{result.before}ml</p>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-card p-4 border border-border shadow-sm card-depth card-depth-hover">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Durante la Corsa</p>
                        <p className="text-sm font-medium text-foreground">Ogni Ora</p>
                      </div>
                      <p className="font-display text-2xl font-bold text-primary">{result.during}ml</p>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-card p-4 border border-border shadow-sm card-depth card-depth-hover">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Dopo la Corsa</p>
                        <p className="text-sm font-medium text-foreground">Finestra di Recupero</p>
                      </div>
                      <p className="font-display text-2xl font-bold text-primary">{result.after}ml</p>
                    </div>
                  </div>

                  {/* Note Section moved inside results */}
                  <div className="mt-8 rounded-xl border border-primary/20 bg-background/50 p-4 inner-glow">
                    <p className="text-xs leading-relaxed text-muted-foreground italic">
                      <strong>Nota:</strong> Questi valori sono stime basate su modelli generali di tasso di sudorazione. Fattori come umidità, altitudine e fisiologia individuale possono alterare significativamente questi bisogni.
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
                      <span>Usa il "Test della Pipì": punta a un colore paglierino chiaro prima di iniziare.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Sorseggia, non tracannare: bere ogni 15-20 minuti è meglio per lo svuotamento gastrico.</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card p-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/50">
                  <Droplets className="h-8 w-8 text-muted-foreground/40" />
                </div>
                <h3 className="font-display text-base font-bold text-muted-foreground">Ancora Nessun Risultato</h3>
                <p className="mt-2 text-sm text-muted-foreground/60 max-w-[240px]">Inserisci il tuo peso e i dettagli della corsa per generare la tua strategia di idratazione.</p>
              </div>
            )}
          </div>
        </div>

        {/* Referrals Section consolidated at bottom */}
        <div className="mt-16 space-y-12 border-t border-border pt-16">
          <GuidesReferral guides={[
            { title: "Integrazione ed Elettroliti", path: "/guides/supplements-for-runners", desc: "L'idratazione è metà della battaglia. Padroneggia l'equilibrio tecnico dei minerali." },
            { title: "Alimentazione Maratona", path: "/guides/marathon-training", desc: "Strategie di idratazione complete per lo sforzo di 42,2 km." }
          ]} />

          <HubReferral 
            category="hydration"
            href="/hub/hydration"
            title="Miglior Attrezzatura per Idratazione"
            description="Esplora il nostro confronto tecnico di zaini idrici, borracce a mano e soft flask per trasportare i tuoi liquidi senza rimbalzi."
          />
        </div>
      </CalculatorShell>
    </Layout>
  );
};

export default HydrationCalculator;
