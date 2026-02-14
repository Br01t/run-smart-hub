import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const guides = [
  {
    slug: "choosing-running-shoes",
    title: "How to Choose Running Shoes",
    excerpt: "Complete guide to choosing the right running shoes: cushioning, drop, foot strike and terrain.",
  },
  {
    slug: "supplements-for-runners",
    title: "Essential Supplements for Runners",
    excerpt: "Which supplements actually work? From vitamin D to magnesium, here's what the science says.",
  },
  {
    slug: "muscle-recovery",
    title: "Muscle Recovery After Running",
    excerpt: "Stretching, foam rolling, nutrition and sleep: strategies to recover faster.",
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
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="mb-8 sm:mb-10">
          <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">Runner's Guides</h1>
          <p className="mt-2 text-base text-muted-foreground sm:text-lg">
            Practical guides backed by scientific evidence.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              to={`/guides/${guide.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 sm:p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 sm:mb-4 sm:h-11 sm:w-11">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-1.5 font-display text-base font-semibold text-card-foreground sm:mb-2 sm:text-lg">{guide.title}</h3>
              <p className="mb-3 flex-1 text-sm text-muted-foreground sm:mb-4">{guide.excerpt}</p>
              <div className="flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                Read guide <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default GuidesHub;
