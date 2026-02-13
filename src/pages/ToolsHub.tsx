import Layout from "@/components/Layout";
import ToolCard from "@/components/ToolCard";
import SEOHead from "@/components/SEOHead";
import { Droplets, Flame, Scale, Dumbbell, Zap } from "lucide-react";

const allTools = [
  {
    title: "Fabbisogno Idrico",
    description: "Calcola quanta acqua bere prima, durante e dopo la corsa in base a durata, peso e temperatura.",
    icon: Droplets,
    to: "/strumenti/idratazione",
  },
  {
    title: "Calorie Bruciate",
    description: "Stima le calorie consumate durante la corsa in base a distanza, peso e velocità media.",
    icon: Flame,
    to: "/strumenti/calorie",
  },
  {
    title: "BMI Avanzato",
    description: "Calcola il tuo indice di massa corporea con classificazione dettagliata e consigli.",
    icon: Scale,
    to: "/strumenti/bmi",
  },
  {
    title: "Fabbisogno Proteico",
    description: "Scopri quante proteine assumere al giorno in base al tuo livello di attività e obiettivi.",
    icon: Dumbbell,
    to: "/strumenti/proteine",
  },
  {
    title: "Fabbisogno Elettroliti",
    description: "Calcola la quantità di elettroliti da reintegrare in base alla sudorazione e durata.",
    icon: Zap,
    to: "/strumenti/elettroliti",
  },
];

const ToolsHub = () => {
  return (
    <Layout>
      <SEOHead title="Calcolatori per Runner" description="Calcolatori gratuiti per idratazione, calorie, BMI, proteine ed elettroliti. Strumenti scientifici per migliorare le tue performance." path="/strumenti" />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Tutti gli Strumenti
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Calcolatori gratuiti basati su dati scientifici per migliorare le tue performance.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {allTools.map((tool) => (
            <ToolCard key={tool.to} {...tool} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ToolsHub;
