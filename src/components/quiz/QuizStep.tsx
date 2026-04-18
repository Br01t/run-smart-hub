import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { QuizQuestion } from "@/types/quiz";
import { IconRenderer } from "@/components/ui/IconRenderer";

export type Answers = Record<string, string>;

interface QuizStepProps {
  question: QuizQuestion;
  answers: Answers;
  onSelect: (value: string) => void;
}

const QuizStep = ({ question, answers, onSelect }: QuizStepProps) => {
  return (
    <div>
      <div className="mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary mb-4">
          <IconRenderer name={question.icon} className="h-4 w-4" />
          <span className="uppercase tracking-wider">{question.id}</span>
        </div>
        <h2 className="font-display text-display-md font-extrabold text-foreground leading-tight">
          {question.label}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base max-w-md">
          {question.subtitle}
        </p>
      </div>

      <div className="space-y-3">
        {question.options.map((opt, i) => {
          const isSelected = answers[question.id] === opt.value;
          return (
            <motion.button
              key={opt.value}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              onClick={() => onSelect(opt.value)}
              className={`group relative w-full rounded-2xl border-2 p-4 text-left transition-all duration-200 sm:p-5 ${
                isSelected
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-border bg-card hover:border-primary/30 hover:bg-card/80 hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-4">
                  <IconRenderer name={opt.icon} className="h-4 w-4" />
                <div className="flex-1 min-w-0">
                  <p className={`font-display text-sm font-bold sm:text-base ${isSelected ? "text-primary" : "text-card-foreground"}`}>
                    {opt.label}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed sm:text-sm">
                    {opt.description}
                  </p>
                </div>
                <ChevronRight className={`h-5 w-5 shrink-0 transition-all ${
                  isSelected ? "text-primary translate-x-0.5" : "text-muted-foreground/30 group-hover:text-muted-foreground"
                }`} />
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizStep;
