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
    body: "RunLab is sustained through affiliate links (Amazon, Decathlon, Top4Running, WeightWorld). When you buy through our links, we receive a small commission at no extra cost to you.",
    accent: "bg-accent/10 text-accent",
  },
  {
    icon: Heart,
    title: "Utility-First",
    body: "We're not a blog. Every page is a practical tool that solves a real problem. Our goal is to give you answers, not keep you reading for minutes.",
    accent: "bg-rose-500/10 text-rose-600",
  },
];

const Metodo = () => {
  return (
    <Layout>
      <SEOHead title="Our Method" description="Full transparency on how RunLab works and why you can trust our tools." path="/method" />

      {/* Header */}
      <section className="border-b border-border bg-secondary/30">
        <div className="container mx-auto max-w-3xl px-4 py-10 text-center sm:py-14">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Transparency</p>
            <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">Our Method</h1>
            <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground sm:text-lg">
              How RunLab works and why you can trust our recommendations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline-style steps */}
      <section className="container mx-auto max-w-2xl px-4 py-8 sm:py-12">
        <div className="relative space-y-0">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border sm:left-6" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.4 }}
              className="relative flex gap-4 pb-8 last:pb-0 sm:gap-5"
            >
              <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${step.accent} sm:h-12 sm:w-12`}>
                <step.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="pt-1">
                <h2 className="font-display text-base font-bold text-foreground sm:text-lg">{step.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Metodo;
