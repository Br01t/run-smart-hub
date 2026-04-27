import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { FlaskConical, ShieldCheck, BarChart3, Heart } from "lucide-react";

const steps = [
  {
    icon: FlaskConical,
    title: "Fonti Scientifiche",
    body: "Tutti i calcolatori si basano su formule validate dalla letteratura scientifica: coefficienti MET per le calorie, linee guida ISSN per le proteine, tassi medi di sudorazione per gli elettroliti.",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: ShieldCheck,
    title: "Nessuna Sponsorizzazione",
    body: "Non riceviamo pagamenti dai marchi per promuovere prodotti specifici. I prodotti raccomandati vengono filtrati automaticamente in base ai risultati dei calcolatori, non ad accordi commerciali.",
    accent: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: BarChart3,
    title: "Monetizzazione Trasparente",
    body: "Runners Hub si sostiene attraverso link di affiliazione. Quando acquisti tramite i nostri link, riceviamo una piccola commissione senza costi aggiuntivi per te.",
    accent: "bg-accent/10 text-accent",
  },
  {
    icon: Heart,
    title: "Utilità al Primo Posto",
    body: "Non siamo un blog. Ogni pagina è uno strumento pratico che risolve un problema reale. Il nostro obiettivo è darti risposte, non farti leggere per minuti.",
    accent: "bg-rose-500/10 text-rose-600",
  },
];

const Method = () => {
  return (
    <Layout>
      <SEO title="Il nostro Metodo" description="Trasparenza totale su come funziona Runners Hub e perché puoi fidarti dei nostri strumenti." path="/method" />

      {/* Header */}
      <section className="border-b border-border bg-secondary/30">
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Trasparenza Operativa</p>
            <h1 className="font-display text-3xl font-black text-foreground sm:text-4xl lg:text-5xl">Il nostro Metodo</h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg lg:text-xl">
              Scopri i rigorosi standard scientifici ed etici dietro i nostri strumenti e le nostre raccomandazioni.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Denser Grid steps */}
      <section className="container mx-auto max-w-7xl px-4 py-12 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative flex flex-col rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${step.accent} shadow-sm transition-transform group-hover:scale-110`}>
                <step.icon className="h-7 w-7" />
              </div>
              <div>
                <h2 className="font-display text-lg font-bold text-foreground mb-3">{step.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Method;
