import { Link, useLocation } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import ZoneRunBanner from "@/components/ZoneRunBanner";
import SEO from "@/components/SEO";

interface CalculatorShellProps {
  title: string;
  description: string;
  icon: LucideIcon;
  children: React.ReactNode;
  keywords?: string;
}

const CalculatorShell = ({ title, description, icon: Icon, children, keywords }: CalculatorShellProps) => {
  const location = useLocation();
  const canonicalUrl = `https://www.runners-hub.org${location.pathname}`;

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8 sm:py-12">
      <SEO
        title={title}
        description={description}
        canonical={canonicalUrl}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebApplication",
              "name": title,
              "description": description,
              "url": canonicalUrl,
              "applicationCategory": "HealthApplication",
              "operatingSystem": "All",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
              "author": { "@type": "Organization", "name": "Runners Hub", "url": "https://www.runners-hub.org" }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.runners-hub.org" },
                { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://www.runners-hub.org/tools" },
                { "@type": "ListItem", "position": 3, "name": title, "item": canonicalUrl }
              ]
            }
          ]
        }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <span aria-hidden="true">/</span>
        <Link to="/tools" className="hover:text-foreground transition-colors">Tools</Link>
        <span aria-hidden="true">/</span>
        <span className="text-foreground font-medium" aria-current="page">{title}</span>
      </nav>

      <div className="mb-8 editorial-line">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10" aria-hidden="true">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="font-display text-display-md font-bold text-foreground">
              {title}
            </h1>
            <p className="mt-1 text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>

      {children}

      <div className="mt-10">
        <ZoneRunBanner variant="compact" />
      </div>
    </div>
  );
};

export default CalculatorShell;
