import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Footprints, ArrowRight, ArrowLeft, RotateCcw, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import shoeHero from "@/assets/shoes-finder-hero.webp";

interface QuizStep {
  question: string;
  options: { label: string; value: string; emoji: string }[];
}

const steps: QuizStep[] = [
  {
    question: "What type of running do you do most?",
    options: [
      { label: "Road Running", value: "road", emoji: "🛣️" },
      { label: "Trail Running", value: "trail", emoji: "⛰️" },
      { label: "Track / Speed", value: "track", emoji: "🏟️" },
      { label: "Mixed Terrain", value: "mixed", emoji: "🌍" },
    ],
  },
  {
    question: "What's your weekly mileage?",
    options: [
      { label: "Under 20 km", value: "low", emoji: "🚶" },
      { label: "20–50 km", value: "medium", emoji: "🏃" },
      { label: "50–80 km", value: "high", emoji: "🏃‍♂️" },
      { label: "80+ km", value: "ultra", emoji: "🦸" },
    ],
  },
  {
    question: "How would you describe your foot arch?",
    options: [
      { label: "Flat / Low Arch", value: "flat", emoji: "🦶" },
      { label: "Normal / Medium", value: "normal", emoji: "👟" },
      { label: "High Arch", value: "high", emoji: "📐" },
      { label: "Not Sure", value: "unsure", emoji: "❓" },
    ],
  },
  {
    question: "What's your main priority in a shoe?",
    options: [
      { label: "Cushioning", value: "cushion", emoji: "☁️" },
      { label: "Speed / Lightweight", value: "speed", emoji: "⚡" },
      { label: "Stability / Support", value: "stability", emoji: "🛡️" },
      { label: "Durability", value: "durability", emoji: "🔩" },
    ],
  },
  {
    question: "What's your budget range?",
    options: [
      { label: "Under €80", value: "budget", emoji: "💰" },
      { label: "€80 – €130", value: "mid", emoji: "💳" },
      { label: "€130 – €180", value: "premium", emoji: "💎" },
      { label: "No limit", value: "unlimited", emoji: "🏆" },
    ],
  },
];

interface ShoeResult {
  name: string;
  brand: string;
  category: string;
  price: string;
  why: string;
  features: string[];
}

const getRecommendations = (answers: Record<number, string>): ShoeResult[] => {
  const terrain = answers[0];
  const priority = answers[3];
  const budget = answers[4];

  if (terrain === "trail") {
    return [
      { name: "Speedcross 6", brand: "Salomon", category: "Trail", price: "€130–€150", why: "The reference for grip on mud and soft terrain. Aggressive lugs and secure fit.", features: ["Quicklace™ system", "Contagrip® sole", "Anti-debris mesh"] },
      { name: "Cascadia 17", brand: "Brooks", category: "Trail", price: "€120–€140", why: "A 'tank' for technical trails. Durable, stable, and protective for any terrain.", features: ["DNA LOFT v2", "Rock plate", "TrailTack rubber"] },
      { name: "Speedgoat 5", brand: "HOKA", category: "Trail", price: "€145–€165", why: "Maximum cushioning for ultra-distance trail runs.", features: ["Vibram Megagrip", "Late-stage Meta-Rocker", "32mm stack height"] },
    ];
  }

  if (priority === "speed") {
    return [
      { name: "Electrify Nitro", brand: "Puma", category: "Performance", price: "€70–€90", why: "Responsive NITRO™ foam technology for faster paces. Great value for speed work.", features: ["NITRO™ foam", "PUMAGRIP", "Engineered mesh"] },
      { name: "Vaporfly 3", brand: "Nike", category: "Racing", price: "€250–€280", why: "Carbon-plated racer for PR-chasing performance.", features: ["ZoomX foam", "Carbon fiber plate", "Ultra-light upper"] },
      { name: "Duramo Speed", brand: "Adidas", category: "Daily Trainer", price: "€60–€80", why: "Lightweight and reactive with an excellent quality-to-price ratio.", features: ["Lightstrike cushioning", "Breathable mesh", "Durable outsole"] },
    ];
  }

  if (budget === "budget") {
     return [
      { name: "Revolution 6", brand: "Nike", category: "Daily Trainer", price: "€50–€65", why: "The perfect entry-level running shoe for those starting their journey.", features: ["Soft foam", "Eco-friendly materials", "Versatile design"] },
      { name: "Duramo Speed", brand: "Adidas", category: "Daily Trainer", price: "€60–€80", why: "Excellent quality-to-price ratio for a responsive daily ride.", features: ["Lightstrike", "Speed-oriented design", "Great value"] },
      { name: "Gel-Contend 8", brand: "ASICS", category: "Daily Trainer", price: "€55–€70", why: "Trusted stability with premium GEL™ technology for a great price.", features: ["GEL™ tech", "AmpliFoam", "Durable"] },
    ];
  }

  // Default: Daily Trainers / Comfort
  return [
    { name: "Gel-Contend 8", brand: "ASICS", category: "Daily Trainer", price: "€60–€75", why: "A classic, stable daily trainer with GEL™ technology for reliable comfort.", features: ["Rearfoot GEL™", "OrthoLite™ sockliner", "Stable ride"] },
    { name: "Fresh Foam Arishi v4", brand: "New Balance", category: "Daily Trainer", price: "€65–€80", why: "Fresh Foam cushioning that works as well in the gym as it does on the road.", features: ["Fresh Foam", "Seamless upper", "Versatile"] },
    { name: "Ghost 16", brand: "Brooks", category: "Daily Trainer", price: "€120–€140", why: "Balanced cushioning ideal for everyday training.", features: ["DNA LOFT v2", "Segmented Crash Pad", "3D Fit Print upper"] },
  ];
};

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
      <SEOHead
        title="Best Running Shoes Finder 2026"
        description="Answer 5 quick questions and get personalized running shoe recommendations based on your terrain, goals and budget."
        path="/tools/shoes"
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
            >
              <div className="mb-6 flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                  Your Top Picks
                </h2>
              </div>

              <div className="space-y-4">
                {results.map((shoe, i) => (
                  <motion.div
                    key={shoe.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="overflow-hidden rounded-2xl border border-border bg-card"
                  >
                    <div className="flex items-start gap-4 p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-accent text-sm font-bold text-accent-foreground">
                        #{i + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-baseline gap-2">
                          <h3 className="font-display text-lg font-bold text-card-foreground">{shoe.name}</h3>
                          <span className="text-sm text-muted-foreground">by {shoe.brand}</span>
                        </div>
                        <div className="mt-1 flex flex-wrap gap-2">
                          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{shoe.category}</span>
                          <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">{shoe.price}</span>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{shoe.why}</p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {shoe.features.map((f) => (
                            <span key={f} className="rounded-md border border-border bg-background px-2 py-0.5 text-xs text-muted-foreground">{f}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={reset}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  <RotateCcw className="h-4 w-4" /> Try Again
                </button>
                <a
                  href="/hub/shoes/marathon"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-hero px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Browse All Shoes <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default ShoeFinder;
