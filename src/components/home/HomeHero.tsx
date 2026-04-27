import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Footprints } from "lucide-react";
import heroImage from "@/assets/hero-running.webp";

const HomeHero = () => {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Runner all'alba su un sentiero" 
          width={1440} height={900} 
          fetchPriority="high" 
          loading="eager" 
          decoding="async" 
          className="h-full w-full object-cover object-top" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/90" />
      </div>
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground/90 backdrop-blur-sm">
            La Scienza Incontra la Performance
          </span>
          <h1 className="mt-6 font-display text-display-xl font-bold text-primary-foreground">
            Corri meglio.
            <span className="block text-accent">Corri più lontano.</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-primary-foreground/75">
            Calcolatori gratuiti, recensioni esperte di attrezzatura e strumenti personalizzati — tutto ciò di cui un runner ha bisogno, basato sulla scienza.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-bold text-accent-foreground btn-depth btn-depth-hover"
            >
              Esplora Strumenti <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/tools/shoes"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 btn-depth-hover"
            >
              <Footprints className="h-4 w-4" /> Trova la tua Scarpa
            </Link>
          </div>

          <div className="mt-12 flex gap-8 border-t border-primary-foreground/15 pt-6">
            {[
              { val: "6", label: "Strumenti Gratuiti" },
              { val: "100%", label: "Basato sulle Evidenze" },
              { val: "0", label: "Account Necessari" },
            ].map(s => (
              <div key={s.label}>
                <p className="font-display text-2xl font-bold text-primary-foreground">{s.val}</p>
                <p className="text-xs text-primary-foreground/50">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
