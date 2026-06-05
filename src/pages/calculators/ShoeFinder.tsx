import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Footprints, ArrowRight, ArrowLeft, RotateCcw, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import shoeHero from "@/assets/shoes-finder-hero.webp";
import { Link } from "react-router-dom";

import { shoeFinderSteps as steps, getShoeRecommendations as getRecommendations } from "@/lib/calculators/shoeService";
import HubReferral from "@/components/HubReferral";
import GuidesReferral from "@/components/GuidesReferral";

const ShoeFinder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentStep]: value };
    setAnswers(newAnswers);

    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 200);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const results = getRecommendations(answers);
  const progress = showResults ? 100 : ((currentStep) / steps.length) * 100;

  return (
    <Layout>
      <SEO 
        title="Shoe Finder Gratis: Trova la Tua Scarpa da Corsa in 5 Domande" 
        description="Configuratore scarpe running personalizzato: incrocia peso, ritmo e appoggio per ricevere il modello giusto fra Nike, Adidas, Brooks, Asics, Hoka e Saucony."
        path="/tools/shoes"
        faq={[
          { q: "Qual è la scarpa migliore per una maratona?", a: "Per i runner che cercano il tempo, le 'Super Shoes' in carbonio (come Nike Alphafly 3 o Adidas Adizero Adios Pro Evo 1) sono le migliori perché migliorano l'economia di corsa. Per chi punta solo a finire, meglio modelli protettivi e stabili." },
          { q: "Quali sono le migliori scarpe per iniziare a correre?", a: "Per i principianti è cruciale prevenire infortuni. Consigliamo scarpe neutre o stabili (se si prona) con una solida ammortizzazione e drop classico (8-10mm) per proteggere il tendine d'Achille e le ginocchia." },
          { q: "Come capire che tipo di scarpa da corsa mi serve?", a: "Dipende da 3 fattori: il tuo peso, il ritmo a cui corri e l'appoggio del piede. Usa il nostro Shoe Finder per incrociare questi parametri biomeccanici con i database dei migliori brand." }
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Trova Scarpe da Corsa Esatto",
          "description": "Motore di raccomandazione esperto per abbinare i runner alla calzatura perfetta.",
          "applicationCategory": "HealthApplication",
          "operatingSystem": "All"
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={shoeHero} alt="Gamma di scarpe da corsa" width={1440} height={600} fetchPriority="high" loading="eager" decoding="async" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 to-foreground/50" />
        </div>
        <div className="relative container mx-auto px-4 py-10 sm:py-16">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/90">
              <Footprints className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-primary-foreground sm:text-3xl">
                Trova Scarpe Ideali
              </h1>
              <p className="text-sm text-primary-foreground/70">5 domande • Risultati personalizzati</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-2xl px-4 py-6 sm:py-10">
        {/* Progress */}
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>{showResults ? "Completato!" : `Domanda ${currentStep + 1} di ${steps.length}`}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <motion.div
              className="h-full rounded-full bg-gradient-accent"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="mb-6 font-display text-xl font-bold text-foreground sm:text-2xl">
                {steps[currentStep].question}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {steps[currentStep].options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(opt.value)}
                    className={`group flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all card-depth card-depth-hover ${
                      answers[currentStep] === opt.value
                        ? "border-primary bg-primary/5 ring-2 ring-primary/10"
                        : "border-border bg-card"
                    }`}
                  >
                    <span className="text-2xl">{opt.emoji}</span>
                    <span className="text-sm font-semibold text-card-foreground group-hover:text-foreground">
                      {opt.label}
                    </span>
                  </button>
                ))}
              </div>

              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="h-4 w-4" /> Precedente
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Result Header */}
              <div className="rounded-2xl border-2 border-primary bg-primary/5 p-8 text-center shadow-hero card-depth inner-glow-strong">
                <CheckCircle2 className="mx-auto h-12 w-12 text-primary mb-4" />
                <h2 className="mb-2 font-display text-2xl font-black text-foreground sm:text-3xl">
                  {results.categoryName}
                </h2>
                <p className="mx-auto max-w-lg text-sm text-muted-foreground sm:text-base">
                  {results.description}
                </p>
                
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {results.features.map(f => (
                    <span key={f} className="rounded-full bg-background px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-foreground border border-border shadow-sm">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Science & Practice Sections */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm card-depth card-depth-hover">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86 1.43l-1.008.806a1 1 0 01-1.217.108l-5.115-3.41a1 1 0 01-.108-1.217l.806-1.008a6 6 0 001.43-3.86l-.477-2.387a2 2 0 00-.547-1.022L7.572 2.572a2 2 0 00-2.828 0L2.572 4.744a2 2 0 000 2.828l1.172 1.172a2 2 0 001.022.547l2.387.477a6 6 0 003.86-1.43l1.008-.806a1 1 0 011.217-.108l5.115-3.41a1 1 0 01.108 1.217l-.806 1.008a6 6 0 00-1.43 3.86l.477-2.387a2 2 0 00.547-1.022l1.172 1.172a2 2 0 002.828 0l2.172-2.172a2 2 0 000-2.828l-1.172-1.172z" /></svg>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">La Scienza</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {results.science}
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm card-depth card-depth-hover">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">In Pratica</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {results.practice}
                  </p>
                </div>
              </div>

              {/* Specific Shoe Recommendations */}
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-border" />
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">Raccomandazioni Esperti</h3>
                  <div className="h-px flex-1 bg-border" />
                </div>
                
                <div className="grid gap-6 sm:grid-cols-2">
                  {results.recommendedShoes.map((shoe) => (
                    <div key={shoe.model} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-float card-depth">
                      <div className="aspect-[16/10] overflow-hidden bg-muted">
                        <img src={shoe.image} alt={shoe.model} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <div className="p-6">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-primary">{shoe.brand}</p>
                        <h4 className="font-display text-lg font-bold text-foreground">{shoe.model}</h4>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{shoe.why}</p>
                        
                        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4 text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">
                          <div className="flex flex-col items-center">
                            <span>Peso</span>
                            <span className="text-foreground">{shoe.specs.weight}</span>
                          </div>
                          <div className="flex flex-col items-center border-x border-border">
                            <span>Drop</span>
                            <span className="text-foreground">{shoe.specs.drop}</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <span>Ammort.</span>
                            <span className="text-foreground">{shoe.specs.cushion}</span>
                          </div>
                        </div>

                        <Link to="/hub/shoes" className="mt-6 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-accent hover:underline">
                          Dettagli Completi <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Gear Recommendation Hub Referral - Immediately after results */}
                <div className="pt-4">
                  <HubReferral 
                    category="shoes"
                    href="/hub/shoes"
                    title="Esplora l'Hub Completo Scarpe"
                    description="Non hai trovato il modello perfetto? Visualizza il nostro confronto tecnico completo di tutti i migliori modelli con disponibilità in tempo reale."
                  />
                </div>
              </div>

              <div className="flex justify-center pt-8">
                <button
                  onClick={reset}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-8 py-4 text-sm font-bold text-foreground transition-all btn-depth btn-depth-hover"
                >
                  <RotateCcw className="h-4 w-4" /> Inizia Nuova Ricerca
                </button>
              </div>

              {/* Expert Guides consolidated at bottom of results */}
              <div className="mt-20 space-y-12 border-t border-border pt-16">
                <GuidesReferral guides={[
                  { title: "Trovare la Calzata Perfetta", path: "/guides/choosing-running-shoes", desc: "Come il peso corporeo e la biomeccanica dettano i requisiti ideali delle calzature." },
                  { title: "Guida alla Tecnica di Corsa", path: "/guides/running-form", desc: "Ottimizza la tua efficienza e riduci l'impatto." }
                ]} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default ShoeFinder;
