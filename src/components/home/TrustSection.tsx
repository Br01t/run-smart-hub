import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, ShieldCheck, BarChart3 } from "lucide-react";

const trustItems = [
  { icon: FlaskConical, title: "Basato sulle Evidenze", text: "Ogni formula è fondata su ricerche peer-reviewed e validata dalla scienza dello sport." },
  { icon: ShieldCheck, title: "Nessuna Sponsorizzazione", text: "Non accettiamo posizionamenti a pagamento. Le nostre raccomandazioni sono indipendenti e oneste." },
  { icon: BarChart3, title: "Personalizzato", text: "Risultati su misura per le tue metriche corporee, volume di allenamento e obiettivi specifici." },
];

const TrustSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-20">
      <div className="editorial-line-center text-center">
        <h2 className="font-display text-display-md font-bold text-foreground">Perché i runner si fidano di noi</h2>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
        {trustItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="text-center"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display text-base font-bold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;
