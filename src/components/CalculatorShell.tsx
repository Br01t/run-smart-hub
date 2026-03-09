import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import ZoneRunBanner from "@/components/ZoneRunBanner";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";

interface CalculatorShellProps {
  title: string;
  description: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

const CalculatorShell = ({ title, description, icon: Icon, children }: CalculatorShellProps) => {
  const location = useLocation();

  return (
    <div className="container mx-auto max-w-3xl px-4 py-6 sm:py-8">
      <SEOHead title={title} description={description} path={location.pathname} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": title,
        "description": description,
        "url": `https://runlab.app${location.pathname}`,
        "applicationCategory": "HealthApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "author": {
          "@type": "Organization",
          "name": "RunLab",
          "url": "https://runlab.app"
        }
      }} />

      <Link
        to="/tools"
        className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> All tools
      </Link>

      <div className="mb-6 flex items-start gap-3 sm:mb-8 sm:gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 sm:h-12 sm:w-12">
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
