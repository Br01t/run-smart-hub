import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  q: string;
  a: React.ReactNode;
  plainText?: string;
}

export const faqItems: FAQItem[] = [
  { 
    q: "Qual è la scarpa migliore per una maratona?", 
    a: (
      <>
        Per prestazioni ottimali in maratona, dominano le "Super Shoes" con piastra in carbonio e schiuma PEBA. Modelli d'élite come <Link to="/hub/shoes" className="text-primary font-medium hover:underline">Adizero Adios Pro Evo 1</Link> o <Link to="/hub/shoes" className="text-primary font-medium hover:underline">Nike Alphafly 3</Link> offrono il massimo ritorno di energia. Usa il nostro <Link to="/tools/shoes" className="text-primary font-medium hover:underline">Trova Scarpe</Link> per scoprire l'abbinamento perfetto per il tuo ritmo.
      </>
    ),
    plainText: "Per prestazioni ottimali in maratona, dominano le Super Shoes con piastra in carbonio e schiuma PEBA. Modelli d'élite come Adizero Adios Pro Evo 1 o Nike Alphafly 3 offrono il massimo ritorno di energia. Usa il nostro Trova Scarpe per scoprire l'abbinamento perfetto per il tuo ritmo."
  },
  { 
    q: "Quante proteine devo reintegrare dopo la corsa?", 
    a: (
      <>
        I runner di endurance dovrebbero assumere 20-30g di proteine entro 60 minuti post-corsa per massimizzare il recupero muscolare. Il fabbisogno giornaliero totale varia da 1,2 a 1,7g per kg di peso. Calcola il tuo target esatto col <Link to="/tools/protein" className="text-primary font-medium hover:underline">Calcolatore Proteico</Link>.
      </>
    ),
    plainText: "I runner di endurance dovrebbero assumere 20-30g di proteine entro 60 minuti post-corsa per massimizzare il recupero muscolare. Il fabbisogno giornaliero totale varia da 1,2 a 1,7g per kg di peso. Calcola il tuo target esatto col Calcolatore Proteico."
  },
  { 
    q: "Quanto bere durante una maratona?", 
    a: (
      <>
        Punta a 400-800 ml l'ora, sorseggiando regolarmente ogni 15-20 minuti. Il quantitativo esatto dipende da temperatura, peso e tasso di sudorazione. Usa il <Link to="/tools/hydration" className="text-primary font-medium hover:underline">Calcolatore Idratazione</Link> per una stima precisa e personalizzata.
      </>
    ),
    plainText: "Punta a 400-800 ml l'ora, sorseggiando regolarmente ogni 15-20 minuti. Il quantitativo esatto dipende da temperatura, peso e tasso di sudorazione. Usa il Calcolatore Idratazione per una stima precisa e personalizzata."
  },
  { 
    q: "Quante calorie si bruciano correndo 10 km?", 
    a: (
      <>
        Una stima scientifica generale è di circa 60-80 calorie per chilometro (600-800 kcal totali per 10km). Fattori come pendenza, peso corporeo ed efficienza influenzano il risultato. Verifica col <Link to="/tools/calories" className="text-primary font-medium hover:underline">Calcolatore Calorie Bruciate</Link>.
      </>
    ),
    plainText: "Una stima scientifica generale è di circa 60-80 calorie per chilometro (600-800 kcal totali per 10km). Fattori come pendenza, peso corporeo ed efficienza influenzano il risultato. Verifica col Calcolatore Calorie Bruciate."
  },
  { 
    q: "Come reintegrare i sali minerali (elettroliti) dopo la corsa?", 
    a: (
      <>
        Durante la corsa perdi tra i 500 e i 1500mg di sodio per ogni litro di sudore, oltre a potassio e magnesio. Usa bevande isotoniche e calcola le tue perdite specifiche col <Link to="/tools/electrolytes" className="text-primary font-medium hover:underline">Calcolatore Elettroliti</Link> per evitare i crampi.
      </>
    ),
    plainText: "Durante la corsa perdi tra i 500 e i 1500mg di sodio per ogni litro di sudore, oltre a potassio e magnesio. Usa bevande isotoniche e calcola le tue perdite specifiche col Calcolatore Elettroliti per evitare i crampi."
  },
  { 
    q: "Come recuperare velocemente dopo una gara o maratona?", 
    a: (
      <>
        Il recupero si basa su 3 pilastri: ripristino del glicogeno (carboidrati/proteine entro un'ora), reidratazione mirata, e recupero attivo o meccanico (es. pistole massaggianti, compressione). Scopri i migliori strumenti nell'<Link to="/hub/recovery" className="text-primary font-medium hover:underline">Hub Recupero</Link>.
      </>
    ),
    plainText: "Il recupero si basa su 3 pilastri: ripristino del glicogeno (carboidrati/proteine entro un'ora), reidratazione mirata, e recupero attivo o meccanico (es. pistole massaggianti, compressione). Scopri i migliori strumenti nell'Hub Recupero."
  },
  { 
    q: "Qual è il peso o BMI ideale per correre forte?", 
    a: (
      <>
        La maggior parte dei runner amatoriali competitivi ha un BMI tra 18,5 e 24,9. Un rapporto peso-potenza ottimizzato migliora i tempi e riduce l'impatto sulle articolazioni. Usa il <Link to="/tools/bmi" className="text-primary font-medium hover:underline">Calcolatore BMI</Link> per analizzare le tue metriche.
      </>
    ),
    plainText: "La maggior parte dei runner amatoriali competitivi ha un BMI tra 18,5 e 24,9. Un rapporto peso-potenza ottimizzato migliora i tempi e riduce l'impatto sulle articolazioni. Usa il Calcolatore BMI per analizzare le tue metriche."
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
