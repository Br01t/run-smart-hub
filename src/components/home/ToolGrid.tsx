import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Flame, Scale, Dumbbell, Zap, Footprints } from "lucide-react";

const tools = [
  { title: "Idratazione", desc: "Quanto bere per ogni corsa", icon: Droplets, to: "/tools/hydration", gradient: "from-sky-400 to-cyan-600" },
  { title: "Calorie", desc: "Bruciate per sessione", icon: Flame, to: "/tools/calories", gradient: "from-orange-400 to-red-500" },
  { title: "BMI", desc: "Analisi della composizione corporea", icon: Scale, to: "/tools/bmi", gradient: "from-violet-400 to-purple-600" },
  { title: "Proteine", desc: "Target di assunzione giornaliera", icon: Dumbbell, to: "/tools/protein", gradient: "from-rose-400 to-pink-500" },
  { title: "Elettroliti", desc: "Stima della perdita di minerali", icon: Zap, to: "/tools/electrolytes", gradient: "from-amber-400 to-orange-500" },
  { title: "Trova Scarpe", desc: "Abbinate al tuo profilo", icon: Footprints, to: "/tools/shoes", gradient: "from-emerald-400 to-teal-600" },
];

const ToolGrid = () => {
  return (
    <section className="container mx-auto px-4 pt-8 pb-16 sm:pt-12 sm:pb-20">
      <div className="editorial-line">
        <h2 className="font-display text-display-md font-bold text-foreground">Gli Strumenti</h2>
        <p className="mt-2 max-w-md text-muted-foreground">
          Sei calcolatori basati su formule validate. Niente fronzoli, nessuna registrazione.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.to}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
          >
            <Link
              to={tool.to}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all card-depth card-depth-hover"
            >
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${tool.gradient}`}>
                <tool.icon className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-sm font-bold text-card-foreground">{tool.title}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{tool.desc}</p>
              </div>
              <ArrowRight className="ml-auto mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ToolGrid;
