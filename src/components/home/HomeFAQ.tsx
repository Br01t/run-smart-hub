import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const faqItems = [
  { q: "What tools does Runners Hub offer for runners?", a: "Runners Hub offers 6 free science-based calculators: Hydration Calculator, Calories Burned Calculator, BMI Calculator, Protein Needs Calculator, Electrolyte Calculator, and a Shoe Finder tool." },
  { q: "Are Runners Hub's running calculators free?", a: "Yes, all Runners Hub tools are 100% free with no sign-up required. Every formula is based on peer-reviewed research." },
  { q: "How much water should I drink while running?", a: "On average 400–800 ml per hour, depending on temperature, intensity and individual sweat rate. Use Runners Hub's Hydration Calculator for a personalized recommendation based on your weight, duration and conditions." },
  { q: "How many calories do you burn running a mile?", a: "A general estimate is about 80–120 calories per mile depending on body weight, pace and terrain. Heavier runners and faster paces burn more. Use the Calories Burned Calculator for a personalized figure." },
  { q: "How much protein do runners need per day?", a: "Endurance runners typically need 1.2–1.7 g of protein per kg of body weight per day, depending on training volume and goals. The Protein Needs Calculator can give you a tailored recommendation." },
  { q: "What are the best running shoes for beginners?", a: "Beginners generally benefit from neutral, well-cushioned shoes with moderate drop (8–10 mm). The right shoe depends on foot type, surface and budget. Try Runners Hub's Shoe Finder to get matched in under a minute." },
  { q: "How do electrolytes affect running performance?", a: "Electrolytes — especially sodium, potassium and magnesium — help maintain fluid balance, prevent cramps and support muscle function. Losses increase with heat and duration. Use the Electrolyte Calculator to estimate your needs." },
  { q: "What is a healthy BMI for runners?", a: "Most competitive runners fall between 18.5 and 24.9 BMI, but BMI alone doesn't account for muscle mass or body composition. It's best used as one data point alongside other metrics. Try the BMI Calculator for context." },
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
