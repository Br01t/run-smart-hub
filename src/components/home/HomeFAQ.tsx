import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  q: string;
  a: React.ReactNode;
}

export const faqItems: FAQItem[] = [
  { 
    q: "Quali strumenti offre Runners Hub per i corridori?", 
    a: (
      <>
        Runners Hub offre 6 calcolatori gratuiti basati sulla scienza: <Link to="/tools/hydration" className="text-primary font-medium hover:underline">Idratazione</Link>, <Link to="/tools/calories" className="text-primary font-medium hover:underline">Calorie Bruciate</Link>, <Link to="/tools/bmi" className="text-primary font-medium hover:underline">BMI</Link>, <Link to="/tools/protein" className="text-primary font-medium hover:underline">Fabbisogno Proteico</Link>, <Link to="/tools/electrolytes" className="text-primary font-medium hover:underline">Elettroliti</Link> e uno strumento <Link to="/tools/shoes" className="text-primary font-medium hover:underline">Trova Scarpe</Link>.
      </>
    )
  },
  { 
    q: "I calcolatori di corsa di Runners Hub sono gratuiti?", 
    a: (
      <>
        Sì, tutti gli strumenti di Runners Hub sono gratuiti al 100% e non richiedono alcuna registrazione. Ogni formula si basa su <Link to="/method" className="text-foreground font-semibold inline-flex items-center gap-0.5 hover:text-primary transition-colors">ricerche peer-reviewed <ArrowUpRight className="h-3 w-3" /></Link>.
      </>
    )
  },
  { 
    q: "Quanta acqua dovrei bere mentre corro?", 
    a: (
      <>
        In media 400–800 ml l'ora, a seconda della temperatura e dell'intensità. Usa il nostro <Link to="/tools/hydration" className="text-primary font-medium hover:underline">Calcolatore di Idratazione</Link> per una raccomandazione personalizzata basata sul tuo tasso di sudorazione.
      </>
    )
  },
  { 
    q: "Quante calorie si bruciano correndo un chilometro?", 
    a: (
      <>
        Una stima generale è di circa 60–80 calorie per chilometro (circa 100 per miglio). I runner più pesanti e i ritmi più veloci bruciano di più. Usa il <Link to="/tools/calories" className="text-primary font-medium hover:underline">Calcolatore delle Calorie Bruciate</Link> per una cifra personalizzata.
      </>
    )
  },
  { 
    q: "Quante proteine servono ai runner ogni giorno?", 
    a: (
      <>
        I runner di endurance hanno tipicamente bisogno di 1,2–1,7 g di proteine per kg di peso corporeo al giorno. Il <Link to="/tools/protein" className="text-primary font-medium hover:underline">Calcolatore del Fabbisogno Proteico</Link> può darti una raccomandazione su misura.
      </>
    )
  },
  { 
    q: "Quali sono le migliori scarpe da corsa per principianti?", 
    a: (
      <>
        I principianti generalmente traggono beneficio da scarpe neutre e ben ammortizzate. Prova il nostro <Link to="/tools/shoes" className="text-primary font-medium hover:underline">Trova Scarpe</Link> per trovare il tuo abbinamento, o sfoglia il nostro <Link to="/hub#shoes" className="text-primary font-medium hover:underline">Hub Scarpe</Link> per le selezioni degli esperti.
      </>
    )
  },
  { 
    q: "In che modo gli elettroliti influenzano le prestazioni?", 
    a: (
      <>
        Gli elettroliti come sodio e magnesio aiutano a mantenere il bilancio dei liquidi e a prevenire i crampi. Usa il <Link to="/tools/electrolytes" className="text-primary font-medium hover:underline">Calcolatore di Elettroliti</Link> per stimare le tue esigenze specifiche.
      </>
    )
  },
  { 
    q: "Cos'è un BMI salutare per i runner?", 
    a: (
      <>
        La maggior parte dei runner competitivi ha un BMI compreso tra 18,5 e 24,9, ma è solo una metrica. Prova il <Link to="/tools/bmi" className="text-primary font-medium hover:underline">Calcolatore BMI</Link> per contestualizzare il dato con le guide alle prestazioni correlate.
      </>
    )
  },
];

const HomeFAQ = () => {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="editorial-line-center mb-8 text-center">
          <h2 className="font-display text-display-md font-bold text-foreground">Domande Frequenti</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Risposte rapide alle domande comuni su corsa, idratazione, nutrizione e attrezzatura.
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
