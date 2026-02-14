import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Flame, Scale, Zap, FlaskConical, ShieldCheck, BarChart3, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";
import ToolCard from "@/components/ToolCard";
import SEOHead from "@/components/SEOHead";
import heroImage from "@/assets/hero-running.jpg";

const tools = [
  { title: "Hydration Needs", description: "Calculate how much water to drink before, during and after your run.", icon: Droplets, to: "/tools/hydration" },
  { title: "Calories Burned", description: "Estimate calories burned based on distance, weight and pace.", icon: Flame, to: "/tools/calories" },
  { title: "Advanced BMI", description: "Calculate your body mass index with detailed analysis.", icon: Scale, to: "/tools/bmi" },
];

const trustItems = [
  { icon: FlaskConical, text: "Formulas based on scientific research" },
  { icon: ShieldCheck, text: "No direct sponsorships" },
  { icon: BarChart3, text: "Personalized & free results" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Free Tools for Runners"
        description="Free science-based calculators for running, hydration, nutrition and recovery. Improve your performance with real data."
        path="/"
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Runner at sunrise" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container mx-auto px-4 py-16 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
              <Zap className="h-3.5 w-3.5" /> Free tools for runners
            </div>
            <h1 className="font-display text-3xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Run better with real data
            </h1>
            <p className="mt-4 text-base text-primary-foreground/80 sm:text-xl">
              Science-based calculators for hydration, nutrition and recovery. All free, no sign-up required.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                to="/tools"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Explore Tools <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/quiz"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition-all hover:bg-primary-foreground/20"
              >
                Profile Quiz
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Preview */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Featured Tools</h2>
          <p className="mt-2 text-muted-foreground">Calculate, analyze and improve your performance</p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, i) => (
            <motion.div key={tool.to} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <ToolCard {...tool} />
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/tools" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
            View all tools <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Guides CTA */}
      <section className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-10 sm:py-12">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">Runner's Guides</h2>
            <p className="mt-2 mb-5 text-muted-foreground">
              Practical guides on shoes, supplements and muscle recovery.
            </p>
            <Link
              to="/guides"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-hero px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Read the Guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container mx-auto px-4 py-10 sm:py-12">
          <div className="mx-auto grid max-w-3xl gap-6 sm:gap-8 sm:grid-cols-3">
            {trustItems.map((item, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col items-center text-center">
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
