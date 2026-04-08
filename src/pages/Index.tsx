import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Droplets, Flame, Scale, Footprints, Zap, Dumbbell,
  FlaskConical, ShieldCheck, BarChart3, BookOpen, Compass, Users
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-running.webp";
import guidesHero from "@/assets/guides-hero.webp";
import hubShoes from "@/assets/hub-shoes.webp";
import ZoneRunBanner from "@/components/ZoneRunBanner";

const tools = [
  { title: "Hydration", desc: "How much to drink per run", icon: Droplets, to: "/tools/hydration", gradient: "from-sky-400 to-cyan-600" },
  { title: "Calories", desc: "Burned per session", icon: Flame, to: "/tools/calories", gradient: "from-orange-400 to-red-500" },
  { title: "BMI", desc: "Body composition analysis", icon: Scale, to: "/tools/bmi", gradient: "from-violet-400 to-purple-600" },
  { title: "Protein", desc: "Daily intake target", icon: Dumbbell, to: "/tools/protein", gradient: "from-rose-400 to-pink-500" },
  { title: "Electrolytes", desc: "Mineral loss estimate", icon: Zap, to: "/tools/electrolytes", gradient: "from-amber-400 to-orange-500" },
  { title: "Shoe Finder", desc: "Matched to your profile", icon: Footprints, to: "/tools/shoes", gradient: "from-emerald-400 to-teal-600" },
];

const trustItems = [
  { icon: FlaskConical, title: "Evidence-Based", text: "Every formula is grounded in peer-reviewed research and validated by sports science." },
  { icon: ShieldCheck, title: "No Sponsorships", text: "We don't accept paid placements. Our recommendations are independent and honest." },
  { icon: BarChart3, title: "Personalized", text: "Results tailored to your body metrics, training volume and specific goals." },
];

const faqItems = [
  { q: "What tools does Runners Hub offer for runners?", a: "Runners Hub offers 6 free science-based calculators: Hydration Calculator, Calories Burned Calculator, BMI Calculator, Protein Needs Calculator, Electrolyte Calculator, and a Shoe Finder tool." },
  { q: "Are Runners Hub's running calculators free?", a: "Yes, all Runners Hub tools are 100% free with no sign-up required. Every formula is based on peer-reviewed research." },
  { q: "How much water should I drink while running?", a: "On average 400–800 ml per hour, depending on temperature, intensity and individual sweat rate. Use Runners Hub's Hydration Calculator for a personalized recommendation based on your weight, duration and conditions." },
  { q: "How many calories do you burn running a mile?", a: "A general estimate is about 80–120 calories per mile depending on body weight, pace and terrain. Heavier runners and faster paces burn more. Use the Calories Burned Calculator for a personalized figure." },
  { q: "How much protein do runners need per day?", a: "Endurance runners typically need 1.2–1.7 g of protein per kg of body weight per day, depending on training volume and goals. The Protein Needs Calculator can give you a tailored recommendation." },
  { q: "What are the best running shoes for beginners?", a: "Beginners generally benefit from neutral, well-cushioned shoes with moderate drop (8–10 mm). The right shoe depends on foot type, surface and budget. Try Runners Hub's Shoe Finder to get matched in under a minute." },
  { q: "How do electrolytes affect running performance?", a: "Electrolytes — especially sodium, potassium and magnesium — help maintain fluid balance, prevent cramps and support muscle function. Losses increase with heat and duration. Use the Electrolyte Calculator to estimate your needs." },
  { q: "What is a healthy BMI for runners?", a: "Most competitive runners fall between 18.5 and 24.9 BMI, but BMI alone doesn't account for muscle mass or body composition. It's best used as one data point alongside other metrics. Try the BMI Calculator for context." },
];

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Best Running Tools & Shoe Finder 2026"
        description="Optimize your performance with science-based running calculators for hydration, nutrition, and recovery. Find the best running shoes and gear with our expert guides."
        path="/"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://www.runners-hub.org/#website",
              "url": "https://www.runners-hub.org",
              "name": "Runners Hub",
              "description": "Science-backed tools and gear recommendations for runners.",
              "publisher": { "@id": "https://www.runners-hub.org/#organization" }
            },
            {
              "@type": "Organization",
              "@id": "https://www.runners-hub.org/#organization",
              "name": "Runners Hub",
              "url": "https://www.runners-hub.org",
              "logo": { "@type": "ImageObject", "url": "https://www.runners-hub.org/favicon.ico" },
              "description": "Runners Hub provides evidence-based calculators and unbiased gear reviews for runners of all levels."
            },
            {
              "@type": "FAQPage",
              "mainEntity": faqItems.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": { "@type": "Answer", "text": faq.a }
              }))
            }
          ]
        }}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Runner at sunrise on a trail" width={1440} height={900} fetchPriority="high" loading="eager" decoding="async" className="h-full w-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/90" />
        </div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground/90 backdrop-blur-sm">
              Science Meets Performance
            </span>
            <h1 className="mt-6 font-display text-display-xl font-bold text-primary-foreground">
              Run smarter.
              <span className="block text-accent">Run farther.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-primary-foreground/75">
              Free calculators, expert gear reviews and personalized tools — everything a runner needs, backed by science.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-hero transition-all hover:brightness-110"
              >
                Explore Tools <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/tools/shoes"
                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/25 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/10"
              >
                <Footprints className="h-4 w-4" /> Find Your Shoe
              </Link>
            </div>

            {/* Inline stats */}
            <div className="mt-12 flex gap-8 border-t border-primary-foreground/15 pt-6">
              {[
                { val: "6", label: "Free Tools" },
                { val: "100%", label: "Evidence-Based" },
                { val: "0", label: "Sign-ups Needed" },
              ].map(s => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-bold text-primary-foreground">{s.val}</p>
                  <p className="text-xs text-primary-foreground/50">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="container mx-auto px-4 py-16 sm:py-20">
        <div className="editorial-line">
          <h2 className="font-display text-display-md font-bold text-foreground">The Toolkit</h2>
          <p className="mt-2 max-w-md text-muted-foreground">
            Six calculators built on peer-reviewed formulas. No fluff, no sign-up.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.to}
              initial={{ opacity: 0, y: 20 }}
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
                <div className="min-w-0">
                  <h3 className="font-display text-sm font-bold text-card-foreground">{tool.title}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{tool.desc}</p>
                </div>
                <ArrowRight className="ml-auto mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SHOE FINDER — editorial highlight ── */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="relative grid items-center gap-8 overflow-hidden rounded-2xl bg-gradient-editorial p-8 sm:p-12 lg:grid-cols-2 lg:gap-12">
            {/* Decorative blur blob */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative z-10">
              <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">
                Interactive Tool
              </span>
              <h2 className="mt-4 font-display text-display-md font-bold text-primary-foreground">
                Find your perfect running shoe
              </h2>
              <p className="mt-3 text-primary-foreground/70 sm:text-lg">
                Answer 5 questions about your terrain, pronation, cushioning preference and budget — we'll match you to the right pair.
              </p>
              <Link
                to="/tools/shoes"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition-all hover:brightness-110"
              >
                Launch Shoe Finder <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative z-10 overflow-hidden rounded-xl">
              <img src={hubShoes} alt="Running shoes collection" width={640} height={400} loading="lazy" decoding="async" className="h-64 w-full object-cover sm:h-80" />
            </div>
          </div>
        </div>
      </section>

      {/* ── GUIDES + QUIZ ── */}
      <section className="container mx-auto px-4 py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Guides — larger */}
          <Link to="/guides" className="group relative overflow-hidden rounded-xl lg:col-span-3">
            <img src={guidesHero} alt="Runner reading a training guide" width={720} height={400} loading="lazy" decoding="async" className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-96" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-md bg-accent">
                <BookOpen className="h-4 w-4 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-foreground sm:text-2xl">Expert Guides</h3>
              <p className="mt-1 text-sm text-primary-foreground/60">Shoes, nutrition, recovery — deep dives backed by science.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-all group-hover:gap-2">
                Browse all guides <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          {/* Quiz — right column */}
          <Link to="/quiz" className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-all hover:shadow-card-hover sm:p-8 lg:col-span-2">
            <div>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-hero">
                <Users className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-card-foreground">Profile Quiz</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Not sure where to start? Take a 2-minute quiz and get personalized tool, supplement and training recommendations.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
              Start the Quiz <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* ── HUBS — horizontal scroll on mobile ── */}
      <section className="border-y border-border bg-muted/50">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="mb-8 flex items-end justify-between">
            <div className="editorial-line">
              <h2 className="font-display text-display-md font-bold text-foreground">Gear Hubs</h2>
              <p className="mt-1 text-sm text-muted-foreground">Curated picks across every category.</p>
            </div>
            <Link to="/hub" className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline sm:inline-flex">
              All hubs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Supplements", emoji: "💊", desc: "Magnesium, electrolytes, gels", to: "/hub/supplements/marathon", border: "border-l-amber-500" },
              { label: "Shoes", emoji: "👟", desc: "Road, trail, racing flats", to: "/hub/shoes/marathon", border: "border-l-emerald-500" },
              { label: "Hydration", emoji: "💧", desc: "Bottles, belts, electrolytes", to: "/hub/hydration/marathon", border: "border-l-sky-500" },
              { label: "Recovery", emoji: "🧊", desc: "Foam rollers, massage guns", to: "/hub/recovery/marathon", border: "border-l-violet-500" },
            ].map((hub) => (
              <Link
                key={hub.label}
                to={hub.to}
                className={`group flex items-center gap-4 rounded-lg border border-border border-l-4 ${hub.border} bg-card p-4 transition-all hover:shadow-card-hover`}
              >
                <span className="text-2xl">{hub.emoji}</span>
                <div className="min-w-0">
                  <h3 className="font-display text-sm font-bold text-card-foreground">{hub.label}</h3>
                  <p className="text-xs text-muted-foreground">{hub.desc}</p>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>

          <Link to="/hub" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline sm:hidden">
            View all hubs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── WHY US — asymmetric layout ── */}
      <section className="container mx-auto px-4 py-16 sm:py-20">
        <div className="editorial-line-center text-center">
          <h2 className="font-display text-display-md font-bold text-foreground">Why runners trust us</h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── AFFILIATE DISCLOSURE ── */}
      <section className="border-t border-border bg-muted/30 px-4 py-6">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-xs leading-relaxed text-muted-foreground">
            <strong className="text-foreground/70">Affiliate Disclosure:</strong> Runners Hub is supported by its audience. When you purchase through links on our site, we may earn an affiliate commission. This helps us keep our tools free and independent. Our recommendations are always based on science and performance data, never on sponsorship.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="container mx-auto px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="editorial-line-center mb-8 text-center">
            <h2 className="font-display text-display-md font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Quick answers to common questions about running, hydration, nutrition and gear.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-2">
            {faqItems.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border border-border bg-card px-5 data-[state=open]:shadow-card">
                <AccordionTrigger className="text-left text-sm font-semibold text-card-foreground hover:no-underline sm:text-base [&[data-state=open]]:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── ZONERUN BANNER ── */}
      <ZoneRunBanner variant="fullwidth" />

      {/* ── FINAL CTA ── */}
      <section className="bg-gradient-hero relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 texture-noise" />
        <div className="relative container mx-auto px-4 py-16 text-center sm:py-20">
          <Compass className="mx-auto mb-4 h-7 w-7 text-primary-foreground/60" />
          <h2 className="font-display text-display-md font-bold text-primary-foreground">Ready to run smarter?</h2>
          <p className="mx-auto mt-3 max-w-md text-primary-foreground/70">
            Start with any tool, take the quiz, or browse our product hubs — everything is free, no account required.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 text-sm font-bold text-foreground transition-all hover:shadow-float"
            >
              All Tools <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/quiz"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/25 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
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
