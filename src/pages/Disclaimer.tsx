import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const Disclaimer = () => {
  return (
    <Layout>
      <SEOHead title="Disclaimer" description="Important information about Runners Hub's tools, data and affiliate links." path="/disclaimer" />
      <div className="container mx-auto max-w-3xl px-4 py-8 sm:py-12">
        <h1 className="mb-4 font-display text-2xl font-bold text-foreground sm:text-3xl">Disclaimer</h1>
        <div className="space-y-4 text-sm text-muted-foreground sm:text-base">
          <p>
            The information provided by Runners Hub is for informational purposes only and does not replace
            the advice of a doctor, nutritionist or qualified health professional.
          </p>
          <p>
            The calculators use general scientific formulas that provide indicative estimates.
            Results may vary based on individual factors not considered by the tools.
          </p>
          <p>
            Links on this site may be affiliate links. This means Runners Hub may receive a commission
            if you make a purchase through these links, at no additional cost to you.
          </p>
          <p>
            Runners Hub is not responsible for any decisions made based on the information provided
            by the site's tools. Always consult a professional before changing your diet or training program.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Disclaimer;
