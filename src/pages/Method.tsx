import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { FlaskConical, ShieldCheck, BarChart3, Heart } from "lucide-react";

const steps = [
  {
    icon: FlaskConical,
    title: "Scientific Sources",
    body: "All calculators are based on formulas validated by scientific literature: MET coefficients for calories, ISSN guidelines for protein, average sweat rates for electrolytes.",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: ShieldCheck,
    title: "No Sponsorships",
    body: "We don't receive payments from brands to promote specific products. Recommended products are automatically filtered based on calculator results, not commercial agreements.",
    accent: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: BarChart3,
    title: "Transparent Monetization",
    body: "Runners Hub is sustained through affiliate links (Amazon, Decathlon, Top4Running, WeightWorld). When you buy through our links, we receive a small commission at no extra cost to you.",
    accent: "bg-accent/10 text-accent",
  },
  {
    icon: Heart,
    title: "Utility-First",
    body: "We're not a blog. Every page is a practical tool that solves a real problem. Our goal is to give you answers, not keep you reading for minutes.",
    accent: "bg-rose-500/10 text-rose-600",
  },
];

const Method = () => {
  return (
    <Layout>
      <SEOHead title="Our Method" description="Full transparency on how Runners Hub works and why you can trust our tools." path="/method" />

      {/* Header */}
      <section className="border-b border-border bg-secondary/30">
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Operational Transparency</p>
            <h1 className="font-display text-3xl font-black text-foreground sm:text-4xl lg:text-5xl">Our Method</h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg lg:text-xl">
              Discover the rigorous scientific and ethical standards behind our tools and recommendations.
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
