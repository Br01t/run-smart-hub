import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import { Droplets, Flame, Scale, Dumbbell, Zap, Footprints, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import toolsHeroImg from "@/assets/tools-hero.webp";
import ZoneRunBanner from "@/components/ZoneRunBanner";

const allTools = [
  {
    title: "Hydration Needs",
    description: "Calculate how much water to drink before, during and after your run based on duration, weight and temperature.",
    icon: Droplets,
    to: "/tools/hydration",
    gradient: "from-sky-400 to-cyan-600",
  },
  {
    title: "Calories Burned",
    description: "Estimate calories burned during your run based on distance, weight and average pace.",
    icon: Flame,
    to: "/tools/calories",
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "Advanced BMI",
    description: "Calculate your body mass index with detailed classification and recommendations.",
    icon: Scale,
    to: "/tools/bmi",
    gradient: "from-violet-400 to-purple-600",
  },
  {
    title: "Protein Needs",
    description: "Find out how much protein to consume daily based on your activity level and goals.",
    icon: Dumbbell,
    to: "/tools/protein",
    gradient: "from-rose-400 to-pink-500",
  },
  {
    title: "Electrolyte Needs",
    description: "Calculate the amount of electrolytes to replenish based on sweat rate and duration.",
    icon: Zap,
    to: "/tools/electrolytes",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    title: "Best Shoes Finder",
    description: "Answer 5 questions and get personalized running shoe recommendations for your terrain and goals.",
    icon: Footprints,
    to: "/tools/shoes",
    gradient: "from-emerald-400 to-teal-600",
  },
];

const ToolsHub = () => {
  return (
    <Layout>
      <SEOHead title="Best Calculators for Runners 2026" description="Free calculators for hydration, calories, BMI, protein and electrolytes. Science-based tools to improve your performance." path="/tools" />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Runner's Calculator Suite",
        "description": "Free calculators for hydration, calories, BMI, protein and electrolytes.",
        "url": "https://www.runners-hub.org/tools",
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": allTools.map((tool, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "url": `https://www.runners-hub.org${tool.to}`,
            "name": tool.title
          }))
        }
      }} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={toolsHeroImg} alt="Runner on track" width={1440} height={600} fetchPriority="high" loading="eager" decoding="async" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/40 to-foreground/80" />
        </div>
        <div className="relative container mx-auto px-4 py-16 sm:py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-xl">
            <span className="inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground/80 backdrop-blur-sm">
              Science-based
            </span>
            <h1 className="mt-4 font-display text-display-lg font-bold text-primary-foreground">
              Runner's Calculator Suite
            </h1>
            <p className="mt-3 text-primary-foreground/70 sm:text-lg">
              6 free tools to optimize every aspect of your training — from hydration to recovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tool grid */}
      <section className="container mx-auto px-4 py-16 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allTools.map((tool, i) => (
            <motion.div
              key={tool.to}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <Link
                to={tool.to}
                className="group flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-all hover:shadow-card-hover hover:border-primary/20"
              >
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${tool.gradient}`}>
                  <tool.icon className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-sm font-bold text-card-foreground sm:text-base">{tool.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{tool.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all group-hover:gap-2">
                    Calculate now <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <ZoneRunBanner variant="inline" />
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 relative overflow-hidden rounded-xl bg-gradient-hero p-8 text-center sm:p-10">
          <div className="pointer-events-none absolute inset-0 texture-noise" />
          <div className="relative">
            <h2 className="font-display text-display-md font-bold text-primary-foreground">Not sure where to start?</h2>
            <p className="mt-2 text-primary-foreground/70 sm:text-lg">Take our quiz to get personalized tool recommendations.</p>
            <Link
              to="/quiz"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 text-sm font-bold text-foreground transition-all hover:shadow-float"
            >
              Take the Quiz <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ToolsHub;
