import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Footprints, ArrowRight, ArrowLeft, RotateCcw, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import shoeHero from "@/assets/shoes-finder-hero.webp";

import { shoeFinderSteps as steps, getShoeRecommendations as getRecommendations } from "@/lib/calculators/shoeService";
import HubReferral from "@/components/HubReferral";

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
        title="Best Running Shoes Finder 2026" 
        description="Answer 5 quick questions and get personalized running shoe recommendations based on your terrain, goals and biomechanics."
        path="/tools/shoes"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Personalized Running Shoe Finder",
          "description": "Expert recommendation engine for matching runners with the perfect footwear.",
          "applicationCategory": "HealthApplication",
          "operatingSystem": "All"
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={shoeHero} alt="Running shoes lineup" width={1440} height={600} fetchPriority="high" loading="eager" decoding="async" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 to-foreground/50" />
        </div>
        <div className="relative container mx-auto px-4 py-10 sm:py-16">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/90">
              <Footprints className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-primary-foreground sm:text-3xl">
                Best Shoes Finder
              </h1>
              <p className="text-sm text-primary-foreground/70">5 questions • Personalized results</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-2xl px-4 py-6 sm:py-10">
        {/* Progress */}
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>{showResults ? "Complete!" : `Question ${currentStep + 1} of ${steps.length}`}</span>
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
                    className={`group flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all hover:border-primary hover:shadow-card-hover ${
                      answers[currentStep] === opt.value
                        ? "border-primary bg-primary/5"
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
                  <ArrowLeft className="h-4 w-4" /> Previous
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
              <div className="rounded-2xl border-2 border-primary bg-primary/5 p-8 text-center shadow-hero">
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
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86 1.43l-1.008.806a1 1 0 01-1.217.108l-5.115-3.41a1 1 0 01-.108-1.217l.806-1.008a6 6 0 001.43-3.86l-.477-2.387a2 2 0 00-.547-1.022L7.572 2.572a2 2 0 00-2.828 0L2.572 4.744a2 2 0 000 2.828l1.172 1.172a2 2 0 001.022.547l2.387.477a6 6 0 003.86-1.43l1.008-.806a1 1 0 011.217-.108l5.115 3.41a1 1 0 01.108 1.217l-.806 1.008a6 6 0 00-1.43 3.86l.477 2.387a2 2 0 00.547 1.022l1.172 1.172a2 2 0 002.828 0l2.172-2.172a2 2 0 000-2.828l-1.172-1.172z" /></svg>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">The Science</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {results.science}
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">The Practice</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {results.practice}
                  </p>
                </div>
              </div>

              {/* Hub Referral */}
              <HubReferral 
                category="shoes"
                href="/hub#shoes"
                title="Explore the Best Shoes Hub"
                description={`View our complete technical comparison of all top-rated ${results.categoryName} models to find your perfect pair with live availability and pricing.`}
              />

              <div className="flex justify-center pt-4">
                <button
                  onClick={reset}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-8 py-4 text-sm font-bold text-foreground shadow-sm transition-all hover:bg-secondary hover:shadow-md"
                >
                  <RotateCcw className="h-4 w-4" /> Start New Search
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default ShoeFinder;
