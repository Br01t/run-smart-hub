import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, User, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import RecommendedProducts from "@/components/RecommendedProducts";

const questions = [
  { id: "age", label: "What is your age range?", options: ["18-25", "26-35", "36-45", "46-55", "55+"] },
  { id: "activity", label: "How often do you train?", options: ["1-2 times/week", "3-4 times/week", "5-6 times/week", "Every day"] },
  { id: "goal", label: "What is your main goal?", options: ["Lose weight", "Improve performance", "Muscle recovery", "General wellness"] },
  { id: "issue", label: "Do you have recurring issues?", options: ["Cramps", "Dehydration", "Fatigue", "Joint pain", "None"] },
];

type Answers = Record<string, string>;

const getProfile = (answers: Answers) => {
  const tags: string[] = [];
  const tools: { label: string; to: string }[] = [];

  if (answers.issue === "Cramps" || answers.issue === "Dehydration") {
    tags.push("idratazione", "elettroliti", "magnesio");
    tools.push({ label: "Hydration Needs", to: "/tools/hydration" });
    tools.push({ label: "Electrolyte Needs", to: "/tools/electrolytes" });
  }
  if (answers.goal === "Lose weight") {
    tags.push("energia", "carboidrati");
    tools.push({ label: "Calories Burned", to: "/tools/calories" });
    tools.push({ label: "Advanced BMI", to: "/tools/bmi" });
  }
  if (answers.goal === "Improve performance") {
    tags.push("energia", "integratori", "carboidrati");
    tools.push({ label: "Calories Burned", to: "/tools/calories" });
  }
  if (answers.goal === "Muscle recovery") {
    tags.push("proteine", "recupero", "magnesio");
    tools.push({ label: "Protein Needs", to: "/tools/protein" });
  }
  if (answers.goal === "General wellness") {
    tags.push("idratazione", "integratori");
    tools.push({ label: "Advanced BMI", to: "/tools/bmi" });
  }

  if (tags.length === 0) tags.push("integratori", "corsa");
  if (tools.length === 0) tools.push({ label: "All tools", to: "/tools" });

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
      <div className="container mx-auto max-w-2xl px-4 py-8 sm:py-12">
        <div className="mb-6 flex items-start gap-3 sm:mb-8 sm:gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 sm:h-12 sm:w-12">
            <User className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
              Runner Profile Quiz
            </h1>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">
              Answer a few questions to get personalized recommendations.
            </p>
          </div>
        </div>

        {!done && (
          <>
            <div className="mb-5 flex gap-1.5 sm:mb-6">
              {questions.map((_, i) => (
                <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-primary" : "bg-muted"}`} />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="rounded-xl border border-border bg-card p-4 shadow-card sm:p-6"
              >
                <p className="mb-1 text-xs font-medium text-muted-foreground">
                  Question {step + 1} of {questions.length}
                </p>
                <h2 className="mb-4 font-display text-lg font-semibold text-card-foreground sm:mb-5 sm:text-xl">
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
              <button onClick={() => setStep((s) => s - 1)}
                className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
            )}
          </>
        )}

        {done && profile && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-6">
              <div className="mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="font-display text-lg font-semibold text-foreground">Your Profile</h3>
              </div>
              <div className="mb-4 grid grid-cols-2 gap-2 text-sm sm:gap-3">
                {Object.entries(answers).map(([key, val]) => (
                  <div key={key} className="rounded-lg bg-card p-3 shadow-card">
                    <p className="text-xs text-muted-foreground capitalize">{key}</p>
                    <p className="font-medium text-foreground">{val}</p>
                  </div>
                ))}
              </div>

              <h4 className="mb-2 text-sm font-semibold text-foreground">Recommended tools:</h4>
              <div className="flex flex-wrap gap-2">
                {profile.tools.map((t) => (
                  <Link key={t.to} to={t.to}
                    className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/20">
                    {t.label} <ArrowRight className="h-3 w-3" />
                  </Link>
                ))}
              </div>
            </div>

            <RecommendedProducts tags={profile.tags} title="Products for you" maxProducts={4} />

            <button onClick={() => { setStep(0); setAnswers({}); }}
              className="text-sm text-muted-foreground hover:text-foreground underline">
              Retake the quiz
            </button>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default ProfileQuiz;
