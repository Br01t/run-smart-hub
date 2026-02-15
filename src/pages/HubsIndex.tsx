import { Link } from "react-router-dom";
import { ArrowRight, Package } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import hubsData from "@/data/hubs.json";

interface Hub {
  category: string;
  sport: string;
  title: string;
  description: string;
}

const categoryIcons: Record<string, string> = {
  supplements: "💊",
  shoes: "👟",
  hydration: "💧",
  recovery: "🔄",
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
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="mb-8 sm:mb-10">
          <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">Product Hubs</h1>
          <p className="mt-2 text-base text-muted-foreground sm:text-lg">
            Curated product collections by category and sport. Find exactly what you need.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {Object.entries(grouped).map(([category, categoryHubs]) => (
            <section key={category}>
              <h2 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold capitalize text-foreground sm:text-xl">
                <span className="text-xl">{categoryIcons[category] || "📦"}</span> {category}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categoryHubs.map((hub) => (
                  <Link
                    key={`${hub.category}-${hub.sport}`}
                    to={`/hub/${hub.category}/${hub.sport}`}
                    className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Package className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mb-1 font-display text-sm font-semibold text-card-foreground sm:text-base">
                      {hub.title}
                    </h3>
                    <p className="mb-3 flex-1 text-sm text-muted-foreground line-clamp-2">{hub.description}</p>
                    <div className="flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                      Explore <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HubsIndex;
