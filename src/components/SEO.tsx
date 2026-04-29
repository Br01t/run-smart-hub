import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  schema?: object;
  faq?: { q: string; a: string }[];
}

  const SEO = ({
  title,
  description,
  keywords,
  path = "",
  ogType = "website",
  ogImage = "https://www.runners-hub.org/og-image.png",
  twitterCard = "summary_large_image",
  schema,
  faq,
}: SEOProps) => {
  const SITE_NAME = "Run Smart Hub";
  const BASE_URL = "https://www.runners-hub.org";
  
  const fullTitle = `${title} | ${SITE_NAME}`;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${BASE_URL}${cleanPath === "/" ? "/" : cleanPath}`;
  const ogUrl = `${BASE_URL}${cleanPath === "/" ? "" : cleanPath}`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="it_IT" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* AI & Search Engine Crawling */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />

      {/* JSON-LD Structured Data */}
      {(schema || faq) && (
        <script type="application/ld+json">
          {JSON.stringify((() => {
            const faqSchema = faq ? {
              "@type": "FAQPage",
              "mainEntity": faq.map(item => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.a
                }
              }))
            } : null;

            if (!schema && faqSchema) {
              return {
                "@context": "https://schema.org",
                ...faqSchema
              };
            }

            if (schema && faqSchema) {
              // Verifica se lo schema fornito è già un @graph
              if ((schema as any)["@graph"]) {
                return {
                  ...schema,
                  "@graph": [
                    ...(schema as any)["@graph"],
                    faqSchema
                  ]
                };
              } else {
                return {
                  "@context": "https://schema.org",
                  "@graph": [schema, faqSchema]
                };
              }
            }

            return schema;
          })())}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;