import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
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
          <span className="text-[10px] font-black uppercase tracking-widest text-primary group-hover:underline decoration-2 underline-offset-4">Open Calculator</span>
        </div>
      </div>
    </Link>
  </motion.div>
);

const ToolsHub = () => {
  return (
    <Layout>
      <SEO 
        title="Runner's Technical Calculator Suite | Performance Tools" 
        description="Access our suite of science-based running calculators. Optimize your hydration, nutrition, and gear selection with precision data." 
        path="/tools" 
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={toolsHeroImg} alt="Runner on track" width={1440} height={600} fetchPriority="high" loading="eager" decoding="async" className="h-full w-full object-cover" />
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
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary-foreground/80">Analysis Suite</span>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-bold text-white leading-none tracking-tight">
              Technical <br/> <span className="text-blue-200 italic">Calculators</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed">
              Empower your training with data. Our suite of technical calculators uses the latest exercise physiology research to optimize your performance.
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
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">Can't decide where to start?</h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Take our 2-minute physiological assessment to receive a personalized analysis of your training needs and recommended tools.
            </p>
            <Link
              to="/quiz"
              className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-primary px-10 py-5 text-sm font-black uppercase tracking-widest text-primary-foreground transition-all hover:scale-105 active:scale-95"
            >
              Initialize Assessment <ArrowRight className="h-5 w-5" />
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
