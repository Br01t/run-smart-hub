import { useState } from "react";
import { Scale } from "lucide-react";
import Layout from "@/components/Layout";
import CalculatorShell from "@/components/CalculatorShell";
import HubReferral from "@/components/HubReferral";
import SEO from "@/components/SEO";
import GuidesReferral from "@/components/GuidesReferral";
import { getContextualGuides } from "@/lib/guides/contextualGuides";

const getBMICategory = (bmi: number) => {
  if (bmi < 18.5) return { label: "Sottopeso", color: "text-accent" };
  if (bmi < 25) return { label: "Normopeso", color: "text-primary" };
  if (bmi < 30) return { label: "Sovrappeso", color: "text-accent" };
  return { label: "Obeso", color: "text-destructive" };
};

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<null | { bmi: number; category: string; color: string }>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) return;
    const bmi = Math.round((w / (h * h)) * 10) / 10;
    const { label, color } = getBMICategory(bmi);
    setResult({ bmi, category: label, color });
  };

  return (
    <Layout>
      <SEO 
        title="Qual è il peso ideale per correre? Calcolo BMI Runner" 
        description="Scopri il tuo peso ideale per correre forte. Calcola il BMI ottimizzato per atleti, riduci il rischio di infortuni e massimizza le prestazioni in maratona."
        path="/tools/bmi"
        keywords={["bmi runner", "calcolo bmi corsa", "peso ideale runner", "rapporto peso potenza corsa", "peso ottimale maratona"]}
        faq={[
          { q: "Qual è il peso ideale per correre una maratona?", a: "Non esiste un peso universale, ma i runner competitivi solitamente mantengono un BMI tra 18,5 e 24,9. Un rapporto peso-potenza ottimizzato migliora l'economia di corsa e abbassa i tempi in gara." },
          { q: "Un BMI alto impedisce di correre?", a: "No, ma un BMI più elevato aumenta il carico meccanico sulle articolazioni (ginocchia e caviglie). È consigliabile iniziare con scarpe a massima ammortizzazione e incrementare il chilometraggio gradualmente." },
          { q: "Perché il BMI dei runner è diverso?", a: "Il BMI standard non distingue tra massa grassa e massa muscolare. I runner professionisti spesso tendono ai limiti inferiori del normopeso per ridurre il dispendio energetico su lunghe distanze." }
        ]}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebApplication",
              "name": "Calcolatore BMI Runner",
              "url": "https://www.runners-hub.org/tools/bmi",
              "description": "Calcola il tuo indice di massa corporea con classificazione specifica per runner e atleti di endurance.",
              "applicationCategory": "HealthApplication",
              "operatingSystem": "All",
              "inLanguage": "it-IT",
              "isAccessibleForFree": true,
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.6", "bestRating": "5", "ratingCount": "142" }
            },
            {
              "@type": "HowTo",
              "name": "Come Calcolare il BMI per il Running",
              "description": "Scopri in 3 passi come calcolare il tuo BMI e valutare l'impatto del peso sulla corsa.",
              "totalTime": "PT1M",
              "step": [
                { "@type": "HowToStep", "position": 1, "name": "Inserisci il tuo peso", "text": "Inserisci il tuo peso corporeo in kg nell'apposito campo del calcolatore." },
                { "@type": "HowToStep", "position": 2, "name": "Inserisci la tua altezza", "text": "Inserisci la tua altezza espressa in centimetri (cm)." },
                { "@type": "HowToStep", "position": 3, "name": "Leggi i risultati e ricevi consigli", "text": "Premi il pulsante per calcolare e visualizzare la tua fascia BMI, con consigli specifici su ammortizzazione e tipo di scarpa." }
              ]
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.runners-hub.org" },
                { "@type": "ListItem", "position": 2, "name": "Strumenti", "item": "https://www.runners-hub.org/tools" },
                { "@type": "ListItem", "position": 3, "name": "Calcolatore BMI", "item": "https://www.runners-hub.org/tools/bmi" }
              ]
            }
          ]
        }}
      />
      <CalculatorShell title="Calcolatore BMI Avanzato" description="Calcola il tuo indice di massa corporea con classificazione dettagliata." icon={Scale}>
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
                  <label className="mb-2 block text-sm font-semibold text-foreground">Altezza (cm)</label>
                  <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="175"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
              </div>
              <button onClick={calculate}
                className="mt-8 w-full rounded-xl bg-gradient-hero px-6 py-4 text-sm font-extrabold text-primary-foreground shadow-hero transition-all hover:opacity-90 active:scale-[0.98] sm:w-auto">
                Calcola BMI
              </button>
            </div>

            {/* Science Section */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm card-depth card-depth-hover">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86 1.43l-1.008.806a1 1 0 01-1.217.108l-5.115-3.41a1 1 0 01-.108-1.217l.806-1.008a6 6 0 001.43-3.86l-.477-2.387a2 2 0 00-.547-1.022L7.572 2.572a2 2 0 00-2.828 0L2.572 4.744a2 2 0 000 2.828l1.172 1.172a2 2 0 001.022.547l2.387.477a6 6 0 003.86-1.43l1.008-.806a1 1 0 011.217-.108l5.115-3.41a1 1 0 01.108 1.217l-.806 1.008a6 6 0 00-1.43 3.86l.477-2.387a2 2 0 00-.547-1.022l1.172 1.172a2 2 0 002.828 0l2.172-2.172a2 2 0 000-2.828l-1.172-1.172z" /></svg>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">La Scienza</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Per i runner, la massa corporea detta il rapporto "Carico-Forza". Ogni 1 kg di peso corporeo in eccesso aggiunge circa 3-4 kg di forza d'impatto per ogni falcata. Su una corsa di 10 km (circa 10.000 passi), questo si traduce in 40.000 kg di impatto cumulativo aggiuntivo su articolazioni e tendini.
              </p>
            </div>
          </div>

          {/* Right Column: Results & Practice */}
          <div className="space-y-8">
            {result ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="rounded-2xl border-2 border-primary bg-primary/5 p-6 shadow-hero sm:p-8 card-depth">
                  <h3 className="mb-6 font-display text-lg font-bold text-foreground">I tuoi Risultati</h3>
                  <div className="flex flex-col items-center gap-1 rounded-2xl bg-card p-6 border border-border shadow-sm card-depth card-depth-hover">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Indice di Massa Corporea</p>
                    <p className={`font-display text-5xl font-black ${result.color}`}>{result.bmi}</p>
                    <p className={`mt-1 text-base font-bold uppercase tracking-tight ${result.color}`}>{result.category}</p>
                  </div>
                  
                  <div className="mt-8">
                    <div className="flex h-2 overflow-hidden rounded-full bg-secondary">
                      <div className="flex-1 bg-accent/60" />
                      <div className="flex-[1.5] bg-primary/60" />
                      <div className="flex-1 bg-accent/60" />
                      <div className="flex-1 bg-destructive/60" />
                    </div>
                    <div className="mt-2 flex justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">
                      <span>16</span><span>18.5</span><span>25</span><span>30</span><span>+</span>
                    </div>
                  </div>

                  {/* Note Section moved inside results */}
                  <div className="mt-8 rounded-xl border border-primary/20 bg-background/50 p-4 inner-glow">
                    <p className="text-xs leading-relaxed text-muted-foreground italic">
                      <strong>Nota:</strong> Il BMI è uno strumento di screening di base e non tiene conto della massa muscolare, della densità ossea o della composizione corporea complessiva.
                    </p>
                  </div>
                </div>

                {/* Practice Section moved after results */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm card-depth card-depth-hover">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">In Pratica</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Calibra l'ammortizzazione: se il tuo BMI è &gt;25, dai priorità a scarpe "Max Cushion" o "Stability" per proteggerti dallo stress osseo.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Composizione oltre il Peso: usa questo BMI solo come punto di partenza. La densità muscolare è più pesante del grasso ma fornisce la potenza necessaria per la propulsione.</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card p-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/50">
                  <Scale className="h-8 w-8 text-muted-foreground/40" />
                </div>
                <h3 className="font-display text-base font-bold text-muted-foreground">Ancora Nessun Risultato</h3>
                <p className="mt-2 text-sm text-muted-foreground/60 max-w-[240px]">Inserisci i tuoi dati per vedere la tua posizione nello spettro BMI.</p>
              </div>
            )}
          </div>
        </div>

        {/* Referrals Section consolidated at bottom */}
        <div className="mt-16 space-y-12 border-t border-border pt-16">
          <GuidesReferral guides={[
            { title: "Trovare la Calzata Perfetta", path: "/guides/choosing-running-shoes", desc: "Come il peso corporeo e la biomeccanica dettano i requisiti ideali delle calzature." },
            { title: "Prevenzione Infortuni", path: "/guides/injury-prevention", desc: "Tecniche scientifiche per gestire efficacemente l'aumento del carico articolare." }
          ]} />

          <HubReferral 
            category="shoes"
            href="/hub/shoes"
            title="Migliori Scarpe per il tuo Profilo"
            description="Trova il paio di scarpe giusto con il livello di ammortizzazione appropriato in base alla tua massa corporea e ai tuoi obiettivi di corsa."
          />
        </div>
      </CalculatorShell>
    </Layout>
  );
};

export default BMICalculator;
