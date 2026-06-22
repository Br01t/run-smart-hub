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
          <h1 className="text-2xl font-bold">Guida non trovata</h1>
          <p className="mt-4 text-muted-foreground">La guida che stai cercando non esiste o è stata spostata.</p>
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
        title={guide.seoTitle || guide.title} 
        description={guide.seoDescription || guide.description}
        path={`/guides/${slug}`}
        keywords={guide.keywords}
        faq={guide.faq}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "@id": `https://www.runners-hub.org/guides/${slug}#article`,
              "headline": guide.seoTitle || guide.title,
              "description": guide.seoDescription || guide.description,
              "image": guide.heroImage
                ? (guide.heroImage.startsWith("http") ? guide.heroImage : `https://www.runners-hub.org${guide.heroImage}`)
                : "https://www.runners-hub.org/og-image.png",
              "datePublished": guide.datePublished || "2026-05-18",
              "dateModified": guide.dateModified || "2026-06-12",
              "inLanguage": "it-IT",
              "author": {
                "@type": "Organization",
                "@id": "https://www.runners-hub.org/#organization",
                "name": "Runners Hub",
                "url": "https://www.runners-hub.org",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.runners-hub.org/og-image.png",
                  "width": 1200,
                  "height": 630
                },
                "sameAs": [
                  "https://www.runners-hub.org"
                ]
              },
              "publisher": {
                "@type": "Organization",
                "@id": "https://www.runners-hub.org/#organization",
                "name": "Runners Hub",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.runners-hub.org/og-image.png"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://www.runners-hub.org/guides/${slug}`
              },
              "wordCount": guide.sections
                ? guide.sections.reduce((acc: number, s: any) => acc + (s.content ? Math.ceil(s.content.length / 5) : 0), 0) + 500
                : 1200,
              "articleSection": guide.tags?.[0] || "Running",
              "keywords": guide.keywords?.join(", ") || guide.tags?.join(", "),
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", ".guide-intro"]
              },
              "isPartOf": {
                "@type": "WebSite",
                "@id": "https://www.runners-hub.org/#website",
                "name": "Runners Hub",
                "url": "https://www.runners-hub.org"
              }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.runners-hub.org" },
                { "@type": "ListItem", "position": 2, "name": "Guide", "item": "https://www.runners-hub.org/guides" },
                { "@type": "ListItem", "position": 3, "name": guide.title, "item": `https://www.runners-hub.org/guides/${slug}` }
              ]
            }
          ]
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
                    <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Pronto a scegliere?</h2>
                    <p className="mt-2 text-muted-foreground max-w-xl">
                      Esplora il nostro <strong>Hub Tecnico</strong> per confrontare i prodotti sul mercato basandoti sui principi scientifici discussi in questa guida.
                    </p>
                    <Link 
                      to={`/hub/${guide.hubCategory}`}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
                    >
                      Vai all'Hub {translateCategory(guide.hubCategory)} <ArrowRight className="h-4 w-4" />
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
