import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Droplets, Flame, Scale, Dumbbell, Zap, Footprints, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import toolsHeroImg from "@/assets/tools-hero.webp";
import ZoneRunBanner from "@/components/ZoneRunBanner";

const allTools = [
  {
    title: "Idratazione",
    description: "Calcola quanta acqua bere prima, durante e dopo la corsa in base a durata, peso e temperatura.",
    icon: Droplets,
    to: "/tools/hydration",
    gradient: "from-sky-400 to-cyan-600",
  },
  {
    title: "Calorie",
    description: "Stima le calorie bruciate durante la corsa in base a distanza, peso e ritmo medio.",
    icon: Flame,
    to: "/tools/calories",
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "BMI",
    description: "Calcola il tuo indice di massa corporea con classificazione dettagliata e raccomandazioni.",
    icon: Scale,
    to: "/tools/bmi",
    gradient: "from-violet-400 to-purple-600",
  },
  {
    title: "Proteine",
    description: "Scopri quante proteine consumare giornalmente in base al tuo livello di attività e ai tuoi obiettivi.",
    icon: Dumbbell,
    to: "/tools/protein",
    gradient: "from-rose-400 to-pink-500",
  },
  {
    title: "Elettroliti",
    description: "Calcola la quantità di elettroliti da reintegrare in base al tasso di sudorazione e alla durata.",
    icon: Zap,
    to: "/tools/electrolytes",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    title: "Trova Scarpe",
    description: "Rispondi a 5 domande e ricevi raccomandazioni personalizzate per le tue scarpe da corsa.",
    icon: Footprints,
    to: "/tools/shoes",
    gradient: "from-emerald-400 to-teal-600",
  },
];

const ToolCard = ({ tool, index }: { tool: typeof allTools[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
  >
    <Link
      to={tool.to}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all sm:flex-row card-depth card-depth-hover"
    >
      <div className={`flex w-full shrink-0 items-center justify-center bg-gradient-to-br ${tool.gradient} p-6 sm:w-32`}>
        <tool.icon className="h-8 w-8 text-white transition-transform duration-500 group-hover:scale-110" />
      </div>
      
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-primary">
            {tool.title}
          </h3>
          <ArrowRight className="h-4 w-4 text-primary opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
        </div>
        
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {tool.description}
        </p>
        
        <div className="mt-6 flex items-center gap-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary group-hover:underline decoration-2 underline-offset-4">Apri Calcolatore</span>
        </div>
      </div>
    </Link>
  </motion.div>
);

const ToolsHub = () => {
  return (
    <Layout>
      <SEO 
        title="Suite di Calcolatori Tecnici per Runner | Performance Tools" 
        description="Accedi alla nostra suite di calcolatori scientifici per la corsa. Ottimizza idratazione, nutrizione e scelta dell'attrezzatura." 
        path="/tools" 
        faq={[
          { q: "Quali sono i migliori calcolatori scientifici per runner?", a: "Runners Hub offre 6 strumenti gratuiti: calcolatori per Idratazione, Calorie, BMI, Proteine, Elettroliti e uno Shoe Finder. Tutti gli strumenti sono basati su parametri fisiologici reali e dati peer-reviewed." },
          { q: "Come calcolare la nutrizione e l'idratazione per una maratona?", a: "Nella nostra suite di Performance Tools puoi calcolare l'esatto fabbisogno di acqua (Calcolatore Idratazione), le calorie da reintegrare, il fabbisogno proteico giornaliero e la perdita di sodio per evitare i crampi." },
          { q: "Quale strumento usare per scegliere le scarpe da corsa?", a: "Il nostro Trova Scarpe intelligente ti permette di incrociare il tuo peso, il tuo ritmo e il tipo di appoggio (neutro o pronatore) con un database di scarpe d'élite per trovare il modello perfetto." },
          { q: "Devo registrarmi per usare i calcolatori di corsa?", a: "No, la nostra intera suite di strumenti per l'analisi fisiologica è accessibile gratuitamente e non richiede alcuna registrazione o inserimento di dati personali." }
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Suite di Calcolatori Tecnici per Runner",
          "description": "Raccolta di strumenti software gratuiti per ottimizzare allenamento e performance."
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={toolsHeroImg} alt="Corridore su pista" width={1440} height={600} {...{ fetchpriority: "high" }} loading="eager" decoding="async" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/80" />
        </div>
        <div className="relative container mx-auto px-4 py-16 sm:py-24">
          <motion.div 
            initial={{ opacity: 0, y: 24 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="max-w-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary-foreground/80">Suite di Analisi</span>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-bold text-white leading-none tracking-tight">
              Calcolatori <br/> <span className="text-blue-200 italic">Tecnici</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed">
              Potenzia il tuo allenamento con i dati. La nostra suite di calcolatori tecnici utilizza le ultime ricerche sulla fisiologia dell'esercizio per ottimizzare la tua performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="container mx-auto px-4 py-20 sm:py-32">
        <div className="grid gap-6 lg:grid-cols-2">
          {allTools.map((tool, i) => (
            <ToolCard key={tool.to} tool={tool} index={i} />
          ))}
        </div>

        {/* Dynamic CTA */}
        <div className="mt-32 relative overflow-hidden rounded-[40px] bg-foreground p-10 sm:p-20 text-center shadow-hero transition-all hover:shadow-float hover:-translate-y-1 inner-glow-strong">
          <div className="absolute inset-0 opacity-10">
             <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary blur-[100px]" />
             <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-blue-500 blur-[100px]" />
          </div>
          
          <div className="relative max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">Non sai da dove iniziare?</h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Fai la nostra valutazione fisiologica di 2 minuti per ricevere un'analisi personalizzata delle tue esigenze di allenamento e degli strumenti raccomandati.
            </p>
            <Link
              to="/quiz"
              className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-primary px-10 py-5 text-sm font-black uppercase tracking-widest text-primary-foreground transition-all hover:scale-105 active:scale-95"
            >
              Inizia Valutazione <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <ZoneRunBanner variant="inline" />
        </div>
      </section>
    </Layout>
  );
};

export default ToolsHub;
