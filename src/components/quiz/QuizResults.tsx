import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  User, Sparkles, Wrench, BookOpen, ArrowRight, RotateCcw 
} from "lucide-react";
import { ProfileResult, QuizQuestion } from "@/types/quiz";
import { Answers } from "./QuizStep";
import { IconRenderer } from "@/components/ui/IconRenderer";
import RecommendedProducts from "@/components/RecommendedProducts";
import ZoneRunBanner from "@/components/ZoneRunBanner";

interface QuizResultsProps {
  profile: ProfileResult;
  questions: QuizQuestion[];
  answers: Answers;
  onRetake: () => void;
}

const QuizResults = ({ profile, questions, answers, onRetake }: QuizResultsProps) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/10" />
        <div className="absolute inset-0 texture-noise" />
        <div className="relative container mx-auto max-w-3xl px-4 py-12 sm:py-16 text-center">
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 180 }}
            className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-3xl bg-card shadow-xl border border-border text-5xl sm:h-28 sm:w-28 sm:text-6xl"
          >
            {profile.archetype}
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Your Runner Profile</p>
            <h1 className="font-display text-display-lg font-extrabold text-foreground">
              {profile.title}
            </h1>
            <div className="editorial-line mx-auto mt-4" />
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground sm:text-base leading-relaxed">
              {profile.description}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto max-w-3xl px-4 py-8 sm:py-12 space-y-8">
        {/* Summary Cards */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
          <h2 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <User className="h-5 w-5 text-primary" /> Your Answers
          </h2>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
            {questions.map((q, i) => {
              const answer = answers[q.id];
              const opt = q.options.find((o) => o.value === answer);
              const colors = ["border-l-primary", "border-l-accent", "border-l-warm", "border-l-cool", "border-l-success"];
              return (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className={`rounded-xl border border-border bg-card p-3 border-l-4 ${colors[i % colors.length]}`}
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{q.id}</p>
                  <p className="mt-0.5 text-sm font-bold text-foreground">{opt?.label || answer}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Tips */}
        {profile.tips.length > 0 && (
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.55 }}>
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-accent/5 p-5 sm:p-7">
              <h2 className="mb-5 flex items-center gap-2 font-display text-lg font-bold text-foreground">
                <Sparkles className="h-5 w-5 text-primary" /> Your Personalized Plan
              </h2>
              <div className="space-y-4">
                {profile.tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </div>
                    <p className="text-sm text-foreground leading-relaxed sm:text-base pt-0.5">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Tools + Guides */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Tools */}
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.65 }}
            className="rounded-2xl border border-border bg-card p-5 sm:p-6"
          >
            <h2 className="mb-4 flex items-center gap-2 font-display text-base font-bold text-card-foreground sm:text-lg">
              <Wrench className="h-5 w-5 text-primary" /> Recommended Tools
            </h2>
            <div className="space-y-2">
              {profile.tools.map((tool) => (
                <Link
                  key={tool.to}
                  to={tool.to}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-background p-3.5 transition-all hover:border-primary/30 hover:shadow-sm hover:-translate-y-0.5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <IconRenderer name={tool.icon} className="h-4 w-4" />
                  </div>
                  <span className="flex-1 text-sm font-medium text-foreground">{tool.label}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Guides */}
          {profile.guides.length > 0 && (
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.75 }}
              className="rounded-2xl border border-border bg-card p-5 sm:p-6"
            >
              <h2 className="mb-4 flex items-center gap-2 font-display text-base font-bold text-card-foreground sm:text-lg">
                <BookOpen className="h-5 w-5 text-primary" /> Recommended Reading
              </h2>
              <div className="space-y-2">
                {profile.guides.map((guide) => (
                  <Link
                    key={guide.slug}
                    to={`/guides/${guide.slug}`}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-background p-3.5 transition-all hover:border-primary/30 hover:shadow-sm hover:-translate-y-0.5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <span className="flex-1 text-sm font-medium text-foreground">{guide.label}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Products */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.85 }}>
          <RecommendedProducts tags={profile.tags} title="Products Picked For You" maxProducts={6} />
        </motion.div>

        {/* ZoneRun */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.95 }}>
          <ZoneRunBanner variant="inline" />
        </motion.div>

        {/* Retake */}
        <div className="flex items-center justify-center pb-6">
          <button
            onClick={onRetake}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-muted-foreground transition-all hover:text-foreground hover:shadow-md hover:-translate-y-0.5"
          >
            <RotateCcw className="h-4 w-4" /> Retake Quiz
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default QuizResults;
