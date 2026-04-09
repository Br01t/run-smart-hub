import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import { Activity, Mail, Target, Users, TrendingUp, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo1.webp";

const About = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Runners Hub",
      description: "Independent running platform providing evidence-based tools, guides, and product reviews for runners of all levels.",
      url: "https://www.runners-hub.org/about",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Runners Hub",
      url: "https://www.runners-hub.org",
      logo: "https://www.runners-hub.org/og-image.png",
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@runners-hub.org",
        contactType: "customer support",
      },
      sameAs: [],
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="About Us — Our Mission & Story"
        description="Runners Hub is built by a passionate runner. Learn why this project exists, who's behind it, and how we help runners make smarter decisions."
        path="/about"
      />
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="bg-gradient-hero py-14 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto flex h-32 w-32 items-center justify-center overflow-hidden mb-6">
            <img src={logo} alt="Runners Hub logo" width={96} height={96} loading="eager" decoding="async" className="h-24 w-24 object-contain" aria-hidden="true" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About Runners Hub
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-primary-foreground/80">
            Built by a runner, for runners — because honest advice shouldn't be hard to find.
          </p>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-10 sm:py-14">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">Who I Am</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hi, I'm the person behind Runners Hub. I'm an everyday runner — not an elite athlete, not a certified coach, just someone who fell in love with running and couldn't stop learning about it.
            </p>
            <p>
              I started running a few years ago to clear my head and get in shape. What began as a casual habit quickly turned into a genuine passion. I went from struggling through my first 5K to training for half marathons, chasing pace goals, and nerding out over nutrition, shoes, and training science.
            </p>
            <p>
              Along the way, I realized something frustrating: finding reliable, unbiased running advice online is surprisingly hard. Most sites are either full of sponsored content disguised as reviews, or they're so technical that beginners get lost. I wanted something different — a place where real runners could find practical, honest information without the noise.
            </p>
          </div>
        </div>
      </section>

      {/* Why Running */}
      <section className="py-10 sm:py-14 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">Why Running?</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Running changed my life. It gave me discipline, mental clarity, and a community I never expected. It taught me that consistency matters more than talent, and that the right gear and nutrition can make a real difference — not just in performance, but in how much you enjoy the process.
            </p>
            <p>
              I built Runners Hub because I believe every runner deserves access to the same quality information, whether you're lacing up for the first time or preparing for your tenth marathon. Running is one of the most democratic sports in the world — all you need is a pair of shoes and the will to start.
            </p>
          </div>
        </div>
      </section>

      {/* What This Site Is */}
      <section className="py-10 sm:py-14">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">What Runners Hub Is</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Runners Hub combines three things I wish I had when I started:
            </p>
            <ul className="space-y-2 ml-1">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span><strong>Interactive tools</strong> — calculators for hydration, calories, protein, BMI, and more, all based on validated sports science formulas.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span><strong>Honest reviews & comparisons</strong> — real product analysis with pros, cons, and practical recommendations. No pay-to-play rankings.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span><strong>Practical guides</strong> — from choosing your first running shoes to advanced marathon nutrition, written in plain language.</span>
              </li>
            </ul>
            <p>
              Every piece of content is researched, written, and reviewed with care. I use peer-reviewed studies when available, cross-reference multiple sources, and always prioritize what actually works over what sounds impressive.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 sm:py-14 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-8 text-center">What Drives This Project</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Target, title: "Evidence-Based", desc: "Every recommendation is grounded in sports science research and real-world experience." },
              { icon: Users, title: "For All Levels", desc: "Whether you're running your first 5K or chasing a marathon PR, you'll find value here." },
              { icon: TrendingUp, title: "Honest Reviews", desc: "I maintain full editorial independence. If a product doesn't deliver, I say so." },
              { icon: Heart, title: "Runner-First", desc: "I build the tools and write the guides I actually use in my own training." },
              { icon: Activity, title: "Data-Driven", desc: "Calculators use validated formulas from sports nutrition and exercise physiology." },
              { icon: Mail, title: "Open to Feedback", desc: "I listen to readers and continuously improve based on what you actually need." },
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

      {/* Transparency */}
      <section className="py-10 sm:py-14">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">Transparency & Monetization</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Runners Hub is a free resource. To sustain it, I participate in affiliate programs with <strong>Amazon Associates</strong>, <strong>Myprotein</strong>, and <strong>Onnit</strong>. When you purchase a product through one of my links, I may earn a small commission — at no extra cost to you.
            </p>
            <p>
              These partnerships <strong>never influence my content</strong>. I select products based on quality, relevance, and value — not commission rates. For full details, read my{" "}
              <Link to="/affiliate-disclosure" className="text-primary hover:underline font-medium">Affiliate Disclosure</Link> and{" "}
              <Link to="/method" className="text-primary hover:underline font-medium">methodology</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-10 sm:py-14 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">
            Have a question, suggestion, or partnership inquiry? I'd love to hear from you.
          </p>
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">General Inquiries</p>
                <a href="mailto:info@runners-hub.org" className="text-sm text-primary hover:underline">info@runners-hub.org</a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Partnerships & Affiliates</p>
                <a href="mailto:info@runners-hub.org" className="text-sm text-primary hover:underline">info@runners-hub.org</a>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">I typically respond within 24–48 hours.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-primary-foreground mb-3">Start Exploring</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            Discover the tools, read the latest guides, or find the perfect gear for your next run.
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
