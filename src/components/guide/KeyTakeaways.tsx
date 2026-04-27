import React from "react";
import { Lightbulb, CheckCircle2 } from "lucide-react";

interface KeyTakeawaysProps {
  items: string[];
}

const KeyTakeaways = ({ items }: KeyTakeawaysProps) => (
  <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/15 p-5 sm:p-6">
    <h3 className="flex items-center gap-2 font-display text-base font-bold text-foreground sm:text-lg">
      <Lightbulb className="h-5 w-5 text-primary" />
      Punti Chiave
    </h3>
    <ul className="mt-3 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-foreground sm:text-base">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default KeyTakeaways;
