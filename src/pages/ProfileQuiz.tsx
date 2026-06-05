import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

// Refactored Data & Components
import { profileQuestions as questions } from "@/data/questions/profile";
import { getRunnerProfile as getProfile } from "@/lib/quiz/quizService";
import { Answers } from "@/components/quiz/QuizStep";
import StepIndicator from "@/components/quiz/StepIndicator";
import QuizStep from "@/components/quiz/QuizStep";
import QuizResults from "@/components/quiz/QuizResults";

const ProfileQuiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const done = step >= questions.length;

  const selectAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [questions[step].id]: value }));
    setTimeout(() => setStep((s) => s + 1), 250);
  };

  const profile = done ? getProfile(answers) : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "name": "Quiz del Runner",
    "description": "Fai il Quiz del Runner per ricevere raccomandazioni personalizzate su allenamento, nutrizione e attrezzatura in base ai tuoi obiettivi e alla tua esperienza.",
    "url": "https://www.runners-hub.org/quiz",
    "provider": { "@type": "Organization", "name": "Runners Hub", "url": "https://www.runners-hub.org" },
    "about": { "@type": "Thing", "name": "Allenamento Corsa" },
    "educationalLevel": "beginner",
    "numberOfQuestions": questions.length,
  };

  return (
    <Layout>
      <SEO
        title="Quiz Runner Gratis: Scopri il Tuo Profilo in 2 Minuti"
        description="Rispondi a 5 domande e ricevi un piano personalizzato: scarpe, integratori, allenamento e recupero su misura per i tuoi obiettivi di corsa. Test gratuito."
        path="/quiz"
        schema={jsonLd}
        faq={[
          { q: "Come avere una tabella di allenamento per la maratona personalizzata?", a: "Fai il nostro Quiz del Runner gratuito. In 2 minuti analizzeremo la tua biomeccanica e i tuoi obiettivi per creare un piano su misura per scarpe, nutrizione e recupero." },
          { q: "Quale tipologia di runner sono?", a: "Esistono 4 archetipi principali: Velocista, Atleta di Endurance (Maratoneta), Trail Runner e Fitness Runner. Usa la nostra Valutazione Gratuita per scoprire il tuo profilo fisiologico e l'attrezzatura ideale." }
        ]}
      />

      {!done && (
        <div className="min-h-[85vh] flex flex-col bg-gradient-to-b from-background via-background to-secondary/20">
          {/* Sticky top bar */}
          <div className="sticky top-0 z-20 border-b border-border/50 bg-background/80 backdrop-blur-xl">
            <div className="container mx-auto max-w-2xl px-4 py-3 sm:py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Quiz del Runner</span>
                </div>
                <span className="text-xs font-medium text-muted-foreground">
                  {step + 1} / {questions.length}
                </span>
              </div>
              <div className="mt-2.5">
                <StepIndicator current={step} total={questions.length} />
              </div>
            </div>
          </div>

          {/* Question View */}
          <div className="flex-1 flex items-center">
            <div className="container mx-auto max-w-2xl px-4 py-8 sm:py-14">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.35 }}
                >
                  <QuizStep 
                    question={questions[step]} 
                    answers={answers} 
                    onSelect={selectAnswer} 
                  />

                  {step > 0 && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onClick={() => setStep((s) => s - 1)}
                      className="mt-6 inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      <ArrowLeft className="h-4 w-4" /> Indietro
                    </motion.button>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}


      {/* Results View */}
      {done && profile && (
        <QuizResults 
          profile={profile} 
          questions={questions} 
          answers={answers} 
          onRetake={() => { setStep(0); setAnswers({}); }} 
        />
      )}
    </Layout>
  );
};

export default ProfileQuiz;
