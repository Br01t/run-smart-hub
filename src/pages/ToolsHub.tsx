import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ToolCard from "@/components/ToolCard";
import SEOHead from "@/components/SEOHead";
import { Droplets, Flame, Scale, Dumbbell, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import toolsHeroImg from "@/assets/tools-hero.jpg";

const allTools = [
  {
    title: "Hydration Needs",
    description: "Calculate how much water to drink before, during and after your run based on duration, weight and temperature.",
    icon: Droplets,
    to: "/tools/hydration",
    accent: "bg-gradient-to-r from-sky-400 to-teal-500",
  },
  {
    title: "Calories Burned",
    description: "Estimate calories burned during your run based on distance, weight and average pace.",
    icon: Flame,
    to: "/tools/calories",
    accent: "bg-gradient-accent",
  },
  {
    title: "Advanced BMI",
    description: "Calculate your body mass index with detailed classification and recommendations.",
    icon: Scale,
    to: "/tools/bmi",
    accent: "bg-gradient-to-r from-violet-500 to-purple-600",
  },
  {
    title: "Protein Needs",
    description: "Find out how much protein to consume daily based on your activity level and goals.",
    icon: Dumbbell,
    to: "/tools/protein",
    accent: "bg-gradient-to-r from-rose-400 to-red-500",
  },
  {
    title: "Electrolyte Needs",
    description: "Calculate the amount of electrolytes to replenish based on sweat rate and duration.",
    icon: Zap,
    to: "/tools/electrolytes",
    accent: "bg-gradient-to-r from-amber-400 to-orange-500",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const ToolsHub = () => {
  return (
    <Layout>
      <SEOHead title="Calculators for Runners" description="Free calculators for hydration, calories, BMI, protein and electrolytes. Science-based tools to improve your performance." path="/tools" />

      {/* Hero banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={toolsHeroImg} alt="Runner on track" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
        </div>
        <div className="relative container mx-auto px-4 py-12 sm:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary-foreground/70">Science-based</p>
            <h1 className="max-w-lg font-display text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              Runner's Calculator Suite
            </h1>
            <p className="mt-3 max-w-md text-base text-primary-foreground/80 sm:text-lg">
              5 free tools to optimize every aspect of your training — from hydration to recovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tool grid */}
      <section className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {allTools.map((tool, i) => (
            <motion.div key={tool.to} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <ToolCard {...tool} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-2xl bg-gradient-hero p-6 text-center sm:p-8">
          <h2 className="font-display text-xl font-bold text-primary-foreground sm:text-2xl">Not sure where to start?</h2>
          <p className="mt-2 text-sm text-primary-foreground/80 sm:text-base">Take our quiz to get personalized tool recommendations.</p>
          <Link
            to="/quiz"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 text-sm font-bold text-foreground transition-transform hover:scale-105"
          >
            Take the Quiz <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ToolsHub;
