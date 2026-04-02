import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import { Activity, Mail, Target, Users, TrendingUp, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About RunLab",
      description: "Independent running science platform providing evidence-based tools, guides, and product reviews for runners of all levels.",
      url: "https://www.runners-hub.org/about",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "RunLab",
      url: "https://www.runners-hub.org",
      logo: "https://www.runners-hub.org/og-image.png",
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@www.runners-hub.org",
        contactType: "customer support",
      },
      sameAs: [],
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="About Us — Our Mission & Team"
        description="RunLab is an independent running science platform. Learn about our mission, editorial standards, and how we help runners make smarter decisions."
        path="/about"
      />
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="bg-gradient-hero py-14 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 mb-6">
            <Activity className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            About RunLab
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground">
            Independent, evidence-based running science — built by runners, for runners.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-10 sm:py-14">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              RunLab was born from a simple frustration: finding reliable, unbiased running advice shouldn't be this hard. Too many websites push products without proper research, and too few offer actionable tools backed by sports science.
            </p>
            <p>
              We started as a small project in 2024, building calculators and writing guides that we wished existed when we were starting out. What began as a personal resource quickly grew into a platform used by thousands of runners looking for honest, data-driven recommendations.
            </p>
            <p>
              Today, RunLab combines interactive tools, in-depth product reviews, and practical training guides — all grounded in peer-reviewed research and real-world running experience. We don't just list products; we analyze them, compare them, and help you find what actually works for your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 sm:py-14 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-8 text-center">What Drives Us</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Target, title: "Evidence-Based", desc: "Every recommendation is backed by sports science research and real-world testing." },
              { icon: Users, title: "For All Levels", desc: "Whether you're running your first 5K or chasing a marathon PR, we've got you covered." },
              { icon: TrendingUp, title: "Independent Reviews", desc: "We maintain editorial independence. Our reviews are honest, even when products disappoint." },
              { icon: Heart, title: "Runner-First", desc: "We're runners too. We build the tools and write the guides we actually use." },
              { icon: Activity, title: "Data-Driven Tools", desc: "Our calculators use validated formulas from sports nutrition and exercise physiology." },
              { icon: Mail, title: "Community Focused", desc: "We listen to our readers and continuously improve based on your feedback." },
            ].map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-card p-6">
                <v.icon className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-10 sm:py-14">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">Who We Help</h2>
          <ul className="space-y-3 text-muted-foreground">
            {[
              "Beginner runners looking for trustworthy gear recommendations and training basics",
              "Intermediate athletes optimizing nutrition, hydration, and recovery strategies",
              "Marathon and ultra-marathon runners seeking advanced performance insights",
              "Trail runners exploring specialized footwear and safety equipment",
              "Anyone who wants to make smarter, science-backed decisions about their running",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Editorial Policy */}
      <section className="py-10 sm:py-14 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">Editorial Standards</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Transparency is central to everything we do. When we recommend a product, we explain exactly why. When we link to a product, we clearly disclose that we may earn a commission through affiliate partnerships — at no extra cost to you.
            </p>
            <p>
              Our editorial team independently selects and reviews every product featured on RunLab. Affiliate relationships never influence our ratings, rankings, or recommendations. If a product doesn't meet our standards, we say so — or we simply don't feature it.
            </p>
            <p>
              For more details on how we evaluate products and maintain objectivity, visit our{" "}
              <Link to="/method" className="text-primary hover:underline font-medium">methodology page</Link> and{" "}
              <Link to="/disclaimer" className="text-primary hover:underline font-medium">disclaimer</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-10 sm:py-14">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">
            Have a question, suggestion, or partnership inquiry? We'd love to hear from you.
          </p>
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">General Inquiries</p>
                <a href="mailto:hello@www.runners-hub.org" className="text-sm text-primary hover:underline">hello@www.runners-hub.org</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Partnerships & Affiliates</p>
                <a href="mailto:partners@www.runners-hub.org" className="text-sm text-primary hover:underline">partners@www.runners-hub.org</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Press & Media</p>
                <a href="mailto:press@www.runners-hub.org" className="text-sm text-primary hover:underline">press@www.runners-hub.org</a>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">We typically respond within 24–48 hours.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">Start Exploring</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Discover our tools, read our latest guides, or find the perfect gear for your next run.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild><Link to="/tools">Explore Tools</Link></Button>
            <Button asChild variant="outline"><Link to="/guides">Read Guides</Link></Button>
            <Button asChild variant="outline"><Link to="/hub">Product Hubs</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
