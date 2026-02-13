import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Flame, Scale, Zap, FlaskConical, ShieldCheck, BarChart3 } from "lucide-react";
import Layout from "@/components/Layout";
import ToolCard from "@/components/ToolCard";

const tools = [
  {
    title: "Fabbisogno Idrico",
    description: "Calcola quanta acqua bere prima, durante e dopo la corsa.",
    icon: Droplets,
    to: "/strumenti/idratazione",
  },
  {
    title: "Calorie Bruciate",
    description: "Stima le calorie consumate in base a distanza, peso e ritmo.",
    icon: Flame,
    to: "/strumenti/calorie",
  },
  {
    title: "BMI Avanzato",
    description: "Calcola il tuo indice di massa corporea con analisi dettagliata.",
    icon: Scale,
    to: "/strumenti/bmi",
  },
];

const trustItems = [
  { icon: FlaskConical, text: "Formule basate su studi scientifici" },
  { icon: ShieldCheck, text: "Nessuna sponsorizzazione diretta" },
  { icon: BarChart3, text: "Risultati personalizzati e gratuiti" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-subtle">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Zap className="h-3.5 w-3.5" /> Strumenti gratuiti per runner
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Corri meglio con{" "}
              <span className="text-gradient-primary">dati reali</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
              Calcolatori scientifici per idratazione, nutrizione e recupero.
              Tutto gratis, senza registrazione.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                to="/strumenti"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-hero transition-opacity hover:opacity-90"
              >
                Esplora gli Strumenti <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/quiz"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground shadow-card transition-all hover:shadow-card-hover"
              >
                Quiz Profilo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Strumenti in evidenza
          </h2>
          <p className="mt-2 text-muted-foreground">
            Calcola, analizza e migliora le tue performance
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.to}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <ToolCard {...tool} />
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/strumenti"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Vedi tutti gli strumenti <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Trust */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-3">
            {trustItems.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
