import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import hubsData from "@/data/hubs.json";

import hubSupplementsImg from "@/assets/hub-supplements.webp";
import hubShoesImg from "@/assets/hub-shoes.webp";
import hubHydrationImg from "@/assets/hub-hydration.webp";
import hubRecoveryImg from "@/assets/hub-recovery.webp";
import ZoneRunBanner from "@/components/ZoneRunBanner";

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

const HubsIndex = () => {
  const hubs = hubsData as Hub[];
  const grouped = hubs.reduce<Record<string, Hub[]>>((acc, hub) => {
    if (!acc[hub.category]) acc[hub.category] = [];
    acc[hub.category].push(hub);
    return acc;
  }, {});

  return (
    <Layout>
      <SEOHead
        title="Best Gear Hubs 2026"
        description="Explore curated product hubs for runners: supplements, shoes, hydration and recovery gear filtered by sport and distance."
        path="/hub"
      />

      {/* Header */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="max-w-xl editorial-line">
            <h1 className="font-display text-display-lg font-bold text-foreground">Product Hubs</h1>
            <p className="mt-2 text-muted-foreground sm:text-lg">
              Curated product collections for every category and sport.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 sm:py-16">
        <div className="space-y-8">
          {Object.entries(grouped).map(([category, categoryHubs], ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.08, duration: 0.4 }}
              className="overflow-hidden rounded-xl border border-border"
            >
              {/* Category banner */}
              <div className="relative h-40 sm:h-52">
                <img
                  src={categoryImages[category] || hubSupplementsImg}
                  alt={category}
                  width={800}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-foreground/20" />
                <div className="absolute bottom-0 left-0 p-5 sm:p-6">
                  <h2 className="font-display text-xl font-bold capitalize text-primary-foreground sm:text-2xl">
                    {category}
                  </h2>
                  <p className="mt-0.5 text-sm text-primary-foreground/60">
                    {categoryHubs.length} collection{categoryHubs.length > 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              {/* Sub-hubs */}
              <div className="divide-y divide-border bg-card">
                {categoryHubs.map((hub) => (
                  <Link
                    key={`${hub.category}-${hub.sport}`}
                    to={`/hub/${hub.category}/${hub.sport}`}
                    className="group flex items-center gap-3 p-4 transition-colors hover:bg-muted/50 sm:p-5"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-sm font-bold text-card-foreground group-hover:text-primary sm:text-base">
                        {hub.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">{hub.description}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/40 group-hover:translate-x-0.5 group-hover:text-primary transition-transform" />
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <ZoneRunBanner variant="inline" />
        </div>
      </section>
    </Layout>
  );
};

export default HubsIndex;
