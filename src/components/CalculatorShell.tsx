import { ArrowLeft } from "lucide-react";
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
    <div className="container mx-auto max-w-3xl px-4 py-6 sm:py-8">
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

      {/* Breadcrumb – visible, semantic, AI-friendly */}
      <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground sm:mb-6">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <span aria-hidden="true">/</span>
        <Link to="/tools" className="hover:text-foreground transition-colors">Tools</Link>
        <span aria-hidden="true">/</span>
        <span className="text-foreground font-medium" aria-current="page">{title}</span>
      </nav>

      <div className="mb-6 flex items-start gap-3 sm:mb-8 sm:gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 sm:h-12 sm:w-12" aria-hidden="true">
          <Icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
        </div>
        <div>
          <h1 className="font-display text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
            {title}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">{description}</p>
        </div>
      </div>

      {children}

      <div className="mt-8">
        <ZoneRunBanner variant="compact" />
      </div>
    </div>
  );
};

export default CalculatorShell;
