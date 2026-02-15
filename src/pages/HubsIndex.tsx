import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import hubsData from "@/data/hubs.json";

import hubSupplementsImg from "@/assets/hub-supplements.jpg";
import hubShoesImg from "@/assets/hub-shoes.jpg";
import hubHydrationImg from "@/assets/hub-hydration.jpg";
import hubRecoveryImg from "@/assets/hub-recovery.jpg";

interface Hub {
  category: string;
  sport: string;
  title: string;
  description: string;
}

const categoryImages: Record<string, string> = {
  supplements: hubSupplementsImg,
  shoes: hubShoesImg,
  hydration: hubHydrationImg,
  recovery: hubRecoveryImg,
};

const categoryGradients: Record<string, string> = {
  supplements: "from-emerald-900/80 to-teal-800/60",
  shoes: "from-amber-900/80 to-orange-800/60",
  hydration: "from-sky-900/80 to-blue-800/60",
  recovery: "from-violet-900/80 to-purple-800/60",
};

const HubsIndex = () => {
  const hubs = hubsData as Hub[];

  // Group by category
  const grouped = hubs.reduce<Record<string, Hub[]>>((acc, hub) => {
    if (!acc[hub.category]) acc[hub.category] = [];
    acc[hub.category].push(hub);
    return acc;
  }, {});

  return (
    <Layout>
      <SEOHead
        title="Product Hubs – Browse by Category & Sport"
        description="Explore curated product hubs for runners: supplements, shoes, hydration and recovery gear filtered by sport and distance."
        path="/hub"
      />

      {/* Minimal header */}
      <section className="container mx-auto px-4 pt-8 sm:pt-12">
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-primary">Curated Collections</p>
        <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">Product Hubs</h1>
        <p className="mt-2 max-w-lg text-base text-muted-foreground sm:text-lg">
          Dive into curated product collections for every category and sport.
        </p>
      </section>

      {/* Large image cards per category */}
      <section className="container mx-auto px-4 py-8 sm:py-12">
        <div className="space-y-6 sm:space-y-8">
          {Object.entries(grouped).map(([category, categoryHubs], ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.5 }}
              className="overflow-hidden rounded-2xl border border-border"
            >
              {/* Category hero banner */}
              <div className="relative h-44 sm:h-56">
                <img
                  src={categoryImages[category] || hubSupplementsImg}
                  alt={category}
                  className="h-full w-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${categoryGradients[category] || "from-foreground/70 to-foreground/30"}`} />
                <div className="absolute bottom-0 left-0 p-5 sm:p-6">
                  <h2 className="font-display text-2xl font-bold capitalize text-primary-foreground sm:text-3xl">
                    {category}
                  </h2>
                  <p className="mt-1 text-sm text-primary-foreground/70">
                    {categoryHubs.length} collection{categoryHubs.length > 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              {/* Sub-hubs */}
              <div className="grid divide-y divide-border bg-card sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
                {categoryHubs.map((hub) => (
                  <Link
                    key={`${hub.category}-${hub.sport}`}
                    to={`/hub/${hub.category}/${hub.sport}`}
                    className="group flex items-center gap-3 p-4 transition-colors hover:bg-secondary/50 sm:p-5"
                  >
                    <div className="flex-1">
                      <h3 className="font-display text-sm font-bold text-card-foreground group-hover:text-primary sm:text-base">
                        {hub.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">{hub.description}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default HubsIndex;
