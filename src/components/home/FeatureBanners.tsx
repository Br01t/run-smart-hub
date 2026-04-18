import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users } from "lucide-react";
import hubShoes from "@/assets/hub-shoes.webp";
import guidesHero from "@/assets/guides-hero.webp";

const FeatureBanners = () => {
  return (
    <>
      {/* Shoe Finder */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="relative grid items-center gap-8 overflow-hidden rounded-2xl bg-gradient-editorial p-8 sm:p-12 lg:grid-cols-2 lg:gap-12">
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

      {/* Guides + Quiz */}
      <section className="container mx-auto px-4 py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-5">
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
    </>
  );
};

export default FeatureBanners;
