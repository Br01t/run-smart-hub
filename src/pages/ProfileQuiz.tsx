import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, User, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import RecommendedProducts from "@/components/RecommendedProducts";

const questions = [
  {
    id: "age",
    label: "Qual è la tua fascia d'età?",
    options: ["18-25", "26-35", "36-45", "46-55", "55+"],
  },
  {
    id: "activity",
    label: "Quanto spesso ti alleni?",
    options: ["1-2 volte/settimana", "3-4 volte/settimana", "5-6 volte/settimana", "Ogni giorno"],
  },
  {
    id: "goal",
    label: "Qual è il tuo obiettivo principale?",
    options: ["Perdere peso", "Migliorare performance", "Recupero muscolare", "Benessere generale"],
  },
  {
    id: "issue",
    label: "Hai problemi ricorrenti?",
    options: ["Crampi", "Disidratazione", "Stanchezza", "Dolori articolari", "Nessuno"],
  },
];

type Answers = Record<string, string>;

const getProfile = (answers: Answers) => {
  const tags: string[] = [];
  const tools: { label: string; to: string }[] = [];

  if (answers.issue === "Crampi" || answers.issue === "Disidratazione") {
    tags.push("idratazione", "elettroliti", "magnesio");
    tools.push({ label: "Fabbisogno Idrico", to: "/strumenti/idratazione" });
    tools.push({ label: "Fabbisogno Elettroliti", to: "/strumenti/elettroliti" });
  }
  if (answers.goal === "Perdere peso") {
    tags.push("energia", "carboidrati");
    tools.push({ label: "Calorie Bruciate", to: "/strumenti/calorie" });
    tools.push({ label: "BMI Avanzato", to: "/strumenti/bmi" });
  }
  if (answers.goal === "Migliorare performance") {
    tags.push("energia", "integratori", "carboidrati");
    tools.push({ label: "Calorie Bruciate", to: "/strumenti/calorie" });
  }
  if (answers.goal === "Recupero muscolare") {
    tags.push("proteine", "recupero", "magnesio");
    tools.push({ label: "Fabbisogno Proteico", to: "/strumenti/proteine" });
  }
  if (answers.goal === "Benessere generale") {
    tags.push("idratazione", "integratori");
    tools.push({ label: "BMI Avanzato", to: "/strumenti/bmi" });
  }

  if (tags.length === 0) tags.push("integratori", "corsa");
  if (tools.length === 0) tools.push({ label: "Tutti gli strumenti", to: "/strumenti" });

  return { tags: [...new Set(tags)], tools };
};

const ProfileQuiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const done = step >= questions.length;

  const selectAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [questions[step].id]: value }));
    setTimeout(() => setStep((s) => s + 1), 200);
  };

  const profile = done ? getProfile(answers) : null;

  return (
    <Layout>
      <div className="container mx-auto max-w-2xl px-4 py-12">
        <div className="mb-8 flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <User className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Quiz Profilo Runner
            </h1>
            <p className="mt-1 text-muted-foreground">
              Rispondi a poche domande per ricevere suggerimenti personalizzati.
            </p>
          </div>
        </div>

        {!done && (
          <>
            {/* Progress */}
            <div className="mb-6 flex gap-1.5">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    i <= step ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="rounded-xl border border-border bg-card p-6 shadow-card"
              >
                <p className="mb-1 text-xs font-medium text-muted-foreground">
                  Domanda {step + 1} di {questions.length}
                </p>
                <h2 className="mb-5 font-display text-xl font-semibold text-card-foreground">
                  {questions[step].label}
                </h2>
                <div className="grid gap-2.5">
                  {questions[step].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => selectAnswer(opt)}
                      className={`rounded-lg border px-4 py-3 text-left text-sm font-medium transition-all ${
                        answers[questions[step].id] === opt
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border bg-background text-foreground hover:border-primary/30"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {step > 0 && (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" /> Indietro
              </button>
            )}
          </>
        )}

        {done && profile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
              <div className="mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Il tuo profilo
                </h3>
              </div>
              <div className="mb-4 grid grid-cols-2 gap-3 text-sm">
                {Object.entries(answers).map(([key, val]) => (
                  <div key={key} className="rounded-lg bg-card p-3 shadow-card">
                    <p className="text-xs text-muted-foreground capitalize">{key}</p>
                    <p className="font-medium text-foreground">{val}</p>
                  </div>
                ))}
              </div>

              <h4 className="mb-2 text-sm font-semibold text-foreground">Strumenti consigliati:</h4>
              <div className="flex flex-wrap gap-2">
                {profile.tools.map((t) => (
                  <Link
                    key={t.to}
                    to={t.to}
                    className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/20"
                  >
                    {t.label} <ArrowRight className="h-3 w-3" />
                  </Link>
                ))}
              </div>
            </div>

            <RecommendedProducts tags={profile.tags} title="Prodotti per te" maxProducts={4} />

            <button
              onClick={() => { setStep(0); setAnswers({}); }}
              className="text-sm text-muted-foreground hover:text-foreground underline"
            >
              Rifai il quiz
            </button>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default ProfileQuiz;
