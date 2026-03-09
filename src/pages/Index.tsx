import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Droplets, Flame, Scale, Footprints, Zap, Dumbbell,
  FlaskConical, ShieldCheck, BarChart3, BookOpen, Compass, Users, HelpCircle
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import heroImage from "@/assets/hero-running.jpg";
import guidesHero from "@/assets/guides-hero.jpg";
import hubShoes from "@/assets/hub-shoes.jpg";
import ZoneRunBanner from "@/components/ZoneRunBanner";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const popularTools = [
  { title: "Hydration Calc", icon: Droplets, to: "/tools/hydration", color: "from-sky-500 to-teal-500" },
  { title: "Calories Burned", icon: Flame, to: "/tools/calories", color: "from-orange-500 to-red-500" },
  { title: "BMI Analysis", icon: Scale, to: "/tools/bmi", color: "from-violet-500 to-purple-600" },
  { title: "Protein Needs", icon: Dumbbell, to: "/tools/protein", color: "from-rose-400 to-pink-600" },
  { title: "Electrolytes", icon: Zap, to: "/tools/electrolytes", color: "from-amber-400 to-orange-500" },
  { title: "Shoe Finder", icon: Footprints, to: "/tools/shoes", color: "from-emerald-500 to-teal-600" },
];

const stats = [
  { value: "6", label: "Free Tools" },
  { value: "100%", label: "Science-Based" },
  { value: "0", label: "Sign-ups Needed" },
];

const trustItems = [
  { icon: FlaskConical, title: "Evidence-Based", text: "Every formula grounded in peer-reviewed research." },
  { icon: ShieldCheck, title: "No Sponsorships", text: "Independent recommendations you can trust." },
  { icon: BarChart3, title: "Personalized", text: "Results tailored to your body and goals." },
];

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Free Tools for Runners"
        description="Free science-based calculators for running, hydration, nutrition and recovery. Improve your performance with real data."
        path="/"
      />
      <JsonLd data={[
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "RunLab",
          "url": "https://runlab.app",
          "description": "Free science-based calculators for running, hydration, nutrition and recovery.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://runlab.app/tools?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "RunLab",
          "url": "https://runlab.app",
          "logo": "https://runlab.app/favicon.ico",
          "sameAs": [],
          "description": "Free science-based tools and guides for runners. Calculators for hydration, calories, BMI, protein, electrolytes and shoe selection."
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            ...faqItems.map(faq => ({
              "@type": "Question" as const,
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer" as const, "text": faq.a }
            }))
          ]
        }
      ]} />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Runner at sunrise" className="h-full w-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
        </div>
        <div className="relative container mx-auto px-4 py-20 sm:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-foreground backdrop-blur-sm">
              <Zap className="h-3.5 w-3.5" /> RunLab — Science Meets Performance
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] text-primary-foreground sm:text-6xl lg:text-7xl">
              Optimize every
              <span className="block text-gradient-primary"> mile you run</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
              Free calculators and interactive tools for hydration, nutrition, recovery and gear. All science-backed, no account needed.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                to="/tools"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-hero transition-transform hover:scale-105"
              >
                Explore All Tools <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/tools/shoes"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/30 bg-primary-foreground/10 px-7 py-3.5 text-sm font-bold text-primary-foreground backdrop-blur transition-all hover:bg-primary-foreground/20"
              >
                <Footprints className="h-4 w-4" /> Find Your Shoe
              </Link>
            </div>
          </motion.div>

          {/* Stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mt-12 flex max-w-md justify-center gap-4 sm:gap-8"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-2xl font-extrabold text-primary-foreground sm:text-3xl">{s.value}</p>
                <p className="text-xs text-primary-foreground/60 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TOOLS GRID (icon tiles, not cards) ── */}
      <section className="container mx-auto px-4 py-10 sm:py-14">
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Toolkit</p>
          <h2 className="mt-1 font-display text-xl font-bold text-foreground sm:text-2xl">Quick access to every tool</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 sm:gap-4">
          {popularTools.map((tool, i) => (
            <motion.div key={tool.to} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Link
                to={tool.to}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center transition-all hover:-translate-y-1 hover:shadow-card-hover sm:p-6"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${tool.color} transition-transform group-hover:scale-110`}>
                  <tool.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-card-foreground">{tool.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SHOE FINDER HIGHLIGHT (full-width banner) ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hubShoes} alt="Running shoes" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 py-12 sm:py-20">
          <div className="max-w-lg">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent backdrop-blur-sm">
              <Footprints className="h-3.5 w-3.5" /> New Tool
            </div>
             <h2 className="font-display text-xl font-bold text-primary-foreground sm:text-3xl">
              Best Shoes Finder
            </h2>
            <p className="mt-3 text-primary-foreground/80 sm:text-lg">
              Answer 5 quick questions and get a curated shortlist of running shoes matched to your terrain, goals and budget.
            </p>
            <Link
              to="/tools/shoes"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-accent px-6 py-3 text-sm font-bold text-accent-foreground transition-transform hover:scale-105"
            >
              Try the Finder <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── GUIDES + QUIZ SPLIT ── */}
      <section className="container mx-auto px-4 py-10 sm:py-14">
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
          {/* Guides */}
          <Link to="/guides" className="group relative overflow-hidden rounded-2xl">
            <img src={guidesHero} alt="Runner reading" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/80">
                <BookOpen className="h-4 w-4 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-foreground sm:text-2xl">Runner's Guides</h3>
              <p className="mt-1 text-sm text-primary-foreground/70">Shoes, supplements, recovery — deep dives backed by science.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-all group-hover:gap-2">
                Read now <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          {/* Quiz */}
          <Link to="/quiz" className="group flex flex-col justify-between rounded-2xl border border-border bg-gradient-to-br from-card to-secondary/50 p-6 transition-all hover:shadow-card-hover sm:p-8">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">Profile Quiz</h3>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                Not sure where to start? Take a 2-minute quiz and we'll recommend the right tools, supplements and training focus for your level.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
              Start the Quiz <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* ── EXPLORE HUBS ── */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container mx-auto px-4 py-10 sm:py-14">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Discover</p>
              <h2 className="mt-1 font-display text-xl font-bold text-foreground sm:text-2xl">Product Hubs</h2>
            </div>
            <Link to="/hub" className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline sm:inline-flex">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Supplements", emoji: "💊", desc: "Magnesium, electrolytes, gels", to: "/hub/supplements/marathon" },
              { label: "Shoes", emoji: "👟", desc: "Road, trail, racing flats", to: "/hub/shoes/marathon" },
              { label: "Hydration", emoji: "💧", desc: "Bottles, belts, electrolytes", to: "/hub/hydration/marathon" },
              { label: "Recovery", emoji: "🧊", desc: "Foam rollers, massage guns", to: "/hub/recovery/marathon" },
            ].map((hub, i) => (
              <motion.div key={hub.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link
                  to={hub.to}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-card-hover sm:p-5"
                >
                  <span className="text-3xl">{hub.emoji}</span>
                  <div>
                    <h3 className="font-display text-sm font-bold text-card-foreground sm:text-base">{hub.label}</h3>
                    <p className="text-xs text-muted-foreground">{hub.desc}</p>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            ))}
          </div>
          <Link to="/hub" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline sm:hidden">
            View all hubs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── TRUST ── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-10 sm:py-14">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Why RunLab</p>
            <h2 className="mt-1 font-display text-xl font-bold text-foreground sm:text-2xl">Built different</h2>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3 sm:gap-8">
            {trustItems.map((item, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 text-center sm:p-8">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-sm font-bold text-card-foreground sm:text-base">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZONERUN BANNER ── */}
      <ZoneRunBanner variant="fullwidth" />

      {/* ── FINAL CTA ── */}
      <section className="bg-gradient-hero">
        <div className="container mx-auto px-4 py-10 text-center sm:py-14">
          <Compass className="mx-auto mb-4 h-8 w-8 text-primary-foreground/70" />
          <h2 className="font-display text-xl font-bold text-primary-foreground sm:text-2xl">Ready to level up?</h2>
          <p className="mx-auto mt-2 max-w-md text-primary-foreground/80">
            Start with any tool, take the quiz, or browse our product hubs — everything is free.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/tools"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-background px-6 py-3 text-sm font-bold text-foreground transition-transform hover:scale-105"
            >
              All Tools <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/quiz"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/30 px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Take the Quiz
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
