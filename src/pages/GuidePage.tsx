import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Tag, BarChart3, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

import { translateCategory } from "@/lib/translations";
import ZoneRunBanner from "@/components/ZoneRunBanner";
import { comparisonsList as comparisonsData } from "@/data/comparisons/list";

import { guidesContent } from "@/data/guides/index";
import { GuideContent } from "@/types/guide";
import GuideHeader from "@/components/guide/GuideHeader";
import GuideSidebar from "@/components/guide/GuideSidebar";
import SectionBlock from "@/components/guide/SectionBlock";
import KeyTakeaways from "@/components/guide/KeyTakeaways";

const GuidePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? guidesContent[slug as keyof typeof guidesContent] : null;

  if (!guide) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold">Guide not found</h1>
          <p className="mt-4 text-muted-foreground">The guide you are looking for does not exist or has been moved.</p>
        </div>
      </Layout>
    );
  }

  // Get related comparisons based on guide category or sport
  const relatedComparisons = (comparisonsData as any[]).filter(c => 
    c.category === guide.hubCategory || 
    guide.tags.some(tag => c.tags.includes(tag))
  ).slice(0, 3);

  return (
    <Layout>
      <SEO 
        title={`${guide.title}`} 
        description={guide.description}
        path={`/guides/${slug}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": guide.title,
          "description": guide.description,
          "image": guide.heroImage,
          "author": {
            "@type": "Organization",
            "name": "Runners Hub"
          }
        }}
      />

      <div className="container mx-auto max-w-7xl px-4 py-8 sm:py-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Main Article Content */}
          <article className="min-w-0 flex-1">
            <GuideHeader guide={guide} />

            <KeyTakeaways items={guide.keyTakeaways} />

            <div className="mt-12 space-y-16">
              <p className="text-base text-muted-foreground leading-relaxed sm:text-lg lg:text-xl lg:leading-relaxed border-l-4 border-primary/20 pl-6 italic">
                {guide.description}
              </p>

              <div className="space-y-12">
                {guide.sections.map((section, i) => (
                  <div key={i}>
                    <SectionBlock section={section} index={i} />
                  </div>
                ))}
              </div>
            </div>

            {/* Hub Recommendation CTA */}
            {guide.hubCategory && (
              <div className="mt-20 overflow-hidden rounded-3xl border border-primary/20 bg-primary/5 p-8 sm:p-12">
                <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:text-left">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <BarChart3 className="h-10 w-10" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Ready to choose?</h2>
                    <p className="mt-2 text-muted-foreground max-w-xl">
                      Dive into our <strong>Technical Gear Hub</strong> to compare current market offerings based on the scientific principles discussed in this guide.
                    </p>
                    <Link 
                      to={`/hub#${guide.hubCategory}`}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
                    >
                      View the {translateCategory(guide.hubCategory)} Hub <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* ZoneRun Banner */}
            <div className="mt-20 pt-10 border-t border-border">
              <ZoneRunBanner variant="inline" />
            </div>
          </article>

          {/* Sidebar */}
          <GuideSidebar guide={guide} relatedComparisons={relatedComparisons} />
        </div>
      </div>
    </Layout>
  );
};

export default GuidePage;
