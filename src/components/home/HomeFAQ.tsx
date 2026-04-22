import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  q: string;
  a: React.ReactNode;
}

export const faqItems: FAQItem[] = [
  { 
    q: "What tools does Runners Hub offer for runners?", 
    a: (
      <>
        Runners Hub offers 6 free science-based calculators: <Link to="/tools/hydration" className="text-primary font-medium hover:underline">Hydration</Link>, <Link to="/tools/calories" className="text-primary font-medium hover:underline">Calories Burned</Link>, <Link to="/tools/bmi" className="text-primary font-medium hover:underline">BMI</Link>, <Link to="/tools/protein" className="text-primary font-medium hover:underline">Protein Needs</Link>, <Link to="/tools/electrolytes" className="text-primary font-medium hover:underline">Electrolytes</Link>, and a <Link to="/tools/shoes" className="text-primary font-medium hover:underline">Shoe Finder</Link> tool.
      </>
    )
  },
  { 
    q: "Are Runners Hub's running calculators free?", 
    a: (
      <>
        Yes, all Runners Hub tools are 100% free with no sign-up required. Every formula is based on <Link to="/hubs" className="text-foreground font-semibold inline-flex items-center gap-0.5 hover:text-primary transition-colors">peer-reviewed research <ArrowUpRight className="h-3 w-3" /></Link>.
      </>
    )
  },
  { 
    q: "How much water should I drink while running?", 
    a: (
      <>
        On average 400–800 ml per hour, depending on temperature and intensity. Use our <Link to="/tools/hydration" className="text-primary font-medium hover:underline">Hydration Calculator</Link> for a personalized recommendation based on your sweat rate.
      </>
    )
  },
  { 
    q: "How many calories do you burn running a mile?", 
    a: (
      <>
        A general estimate is about 80–120 calories per mile. Heavier runners and faster paces burn more. Use the <Link to="/tools/calories" className="text-primary font-medium hover:underline">Calories Burned Calculator</Link> for a personalized figure.
      </>
    )
  },
  { 
    q: "How much protein do runners need per day?", 
    a: (
      <>
        Endurance runners typically need 1.2–1.7 g of protein per kg of body weight per day. The <Link to="/tools/protein" className="text-primary font-medium hover:underline">Protein Needs Calculator</Link> can give you a tailored recommendation.
      </>
    )
  },
  { 
    q: "What are the best running shoes for beginners?", 
    a: (
      <>
        Beginners generally benefit from neutral, well-cushioned shoes. Try our <Link to="/tools/shoes" className="text-primary font-medium hover:underline">Shoe Finder</Link> to get matched, or browse our <Link to="/hub#shoes" className="text-primary font-medium hover:underline">Shoe Hub</Link> for expert picks.
      </>
    )
  },
  { 
    q: "How do electrolytes affect running performance?", 
    a: (
      <>
        Electrolytes like sodium and magnesium help maintain fluid balance and prevent cramps. Use the <Link to="/tools/electrolytes" className="text-primary font-medium hover:underline">Electrolyte Calculator</Link> to estimate your specific needs.
      </>
    )
  },
  { 
    q: "What is a healthy BMI for runners?", 
    a: (
      <>
        Most competitive runners fall between 18.5 and 24.9 BMI, but it's just one metric. Try the <Link to="/tools/bmi" className="text-primary font-medium hover:underline">BMI Calculator</Link> for context and related performance guides.
      </>
    )
  },
];

const HomeFAQ = () => {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="editorial-line-center mb-8 text-center">
          <h2 className="font-display text-display-md font-bold text-foreground">Frequently Asked Questions</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Quick answers to common questions about running, hydration, nutrition and gear.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqItems.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-card px-5 transition-all data-[state=open]:shadow-card data-[state=open]:inner-glow">
              <AccordionTrigger className="text-left text-sm font-semibold text-card-foreground hover:no-underline sm:text-base [&[data-state=open]]:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default HomeFAQ;
