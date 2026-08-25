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
import { mergeRelatedGuides } from "@/lib/guides/relatedGuides";
import { BookOpen } from "lucide-react";

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
  const guideUrl = `https://www.runners-hub.org/guides/${slug}/`;

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
              "@id": `${guideUrl}#article`,
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
                "@id": guideUrl
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
              "@type": "WebPage",
              "@id": guideUrl,
              "url": guideUrl,
              "name": guide.seoTitle || guide.title,
              "description": guide.seoDescription || guide.description,
              "inLanguage": "it-IT",
              "isPartOf": { "@id": "https://www.runners-hub.org/#website" },
              "primaryImageOfPage": guide.heroImage
                ? (guide.heroImage.startsWith("http") ? guide.heroImage : `https://www.runners-hub.org${guide.heroImage}`)
                : undefined,
              "breadcrumb": { "@id": `${guideUrl}#breadcrumb` },
              "mainEntity": { "@id": `${guideUrl}#article` },
              "datePublished": guide.datePublished || "2026-05-18",
              "dateModified": guide.dateModified || "2026-06-12"
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${guideUrl}#breadcrumb`,
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.runners-hub.org" },
                { "@type": "ListItem", "position": 2, "name": "Guide", "item": "https://www.runners-hub.org/guides/" },
                { "@type": "ListItem", "position": 3, "name": guide.title, "item": guideUrl }
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

            {/* Auto-generated internal linking block: boosts crawl paths + indexing */}
            {slug && (() => {
              const deepRelated = mergeRelatedGuides(slug, guide.relatedGuides, 8);
              if (deepRelated.length === 0) return null;
              return (
                <section className="mt-20 pt-10 border-t border-border" aria-labelledby="approfondimenti-correlati">
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <h2 id="approfondimenti-correlati" className="font-display text-2xl font-bold text-foreground">
                      Approfondimenti correlati
                    </h2>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
                    Continua ad approfondire con altre guide selezionate automaticamente in base agli argomenti trattati.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
                    {deepRelated.map((g) => (
                      <Link
                        key={g.slug}
                        to={`/guides/${g.slug}`}
                        className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <BookOpen className="h-4 w-4 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-sm font-bold text-card-foreground group-hover:text-primary leading-snug">
                            {g.label}
                          </h3>
                          <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-primary/80">
                            Leggi la guida <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })()}

            {/* ZoneRun Banner */}
            <div className="mt-20 pt-10 border-t border-border">
              <ZoneRunBanner variant="inline" />
            </div>
          </article>

          {/* Sidebar */}
          <GuideSidebar guide={guide} relatedComparisons={relatedComparisons} slug={slug} />
        </div>
      </div>
    </Layout>
  );
};

export default GuidePage;
