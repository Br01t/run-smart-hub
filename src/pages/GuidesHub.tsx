import { Link } from "react-router-dom";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import guidesHeroImg from "@/assets/guides-hero.jpg";

const guides = [
  {
    slug: "choosing-running-shoes",
    title: "How to Choose Running Shoes",
    excerpt: "Complete guide to choosing the right running shoes: cushioning, drop, foot strike and terrain.",
    readTime: "6 min read",
    category: "Gear",
  },
  {
    slug: "supplements-for-runners",
    title: "Essential Supplements for Runners",
    excerpt: "Which supplements actually work? From vitamin D to magnesium, here's what the science says.",
    readTime: "8 min read",
    category: "Nutrition",
  },
  {
    slug: "muscle-recovery",
    title: "Muscle Recovery After Running",
    excerpt: "Stretching, foam rolling, nutrition and sleep: strategies to recover faster.",
    readTime: "7 min read",
    category: "Recovery",
  },
];

const GuidesHub = () => {
  return (
    <Layout>
      <SEOHead
        title="Runner's Guides"
        description="Practical, science-backed guides on running shoes, supplements and muscle recovery to improve your performance."
        path="/guides"
      />

      {/* Editorial hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Evidence-Based</p>
              <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Runner's Guides
              </h1>
              <p className="mt-3 max-w-md text-base text-muted-foreground sm:text-lg">
                In-depth, science-backed articles to help you run better, recover faster and choose the right gear.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="overflow-hidden rounded-2xl"
            >
              <img src={guidesHeroImg} alt="Running gear flat lay" className="h-48 w-full object-cover sm:h-64 lg:h-72" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guide list — editorial style */}
      <section className="container mx-auto px-4 py-8 sm:py-12">
        <div className="divide-y divide-border">
          {guides.map((guide, i) => (
            <motion.div
              key={guide.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Link
                to={`/guides/${guide.slug}`}
                className="group flex items-start gap-4 py-6 transition-colors sm:gap-6 sm:py-8"
              >
                {/* Number */}
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-bold text-primary sm:h-12 sm:w-12 sm:text-xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-3">
                    <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                      {guide.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" /> {guide.readTime}
                    </span>
                  </div>
                  <h2 className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary sm:text-xl lg:text-2xl">
                    {guide.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground sm:text-base">{guide.excerpt}</p>
                </div>
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Cross-link to comparisons */}
        <div className="mt-8 flex items-center gap-4 rounded-2xl border border-border bg-secondary/50 p-5 sm:p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-sm font-bold text-foreground sm:text-base">Looking for product comparisons?</h3>
            <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">Side-by-side comparisons filtered by sport and goal.</p>
          </div>
          <Link to="/comparisons" className="shrink-0 text-sm font-bold text-primary hover:underline">
            View →
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default GuidesHub;
