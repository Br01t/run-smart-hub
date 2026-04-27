import { GuideContent } from "@/types/guide";
import guideWinterRunning from "@/assets/guide-winter-running.webp";

export const winterRunning: GuideContent = {
  title: "Come Correre in Sicurezza con il Freddo",
  seoTitle: "Guida Corsa Invernale 2026: Scienza dell'Abbigliamento e Strati",
  seoDescription: "Non lasciare che il freddo ti fermi. Padroneggia il sistema a 3 strati, scopri la diuresi indotta dal freddo e i migliori tessuti per la performance invernale.",
  keywords: ["abbigliamento corsa invernale", "correre con il freddo", "strati corsa inverno", "lana merino vs sintetico", "correre sul ghiaccio sicurezza", "idratazione invernale runner"],
  description: "Una guida pratica alla corsa invernale: sistemi a strati, attrezzatura essenziale e precauzioni di sicurezza per allenarsi nei mesi più freddi.",
  tags: ["accessories", "running", "apparel", "top-apparel-2026"],
  heroImage: guideWinterRunning,
  readTime: "12 min di lettura",
  keyTakeaways: [
    "Vestiti per una temperatura di 10°C superiore a quella reale per compensare il calore corporeo prodotto",
    "Un sistema a 3 strati (Base, Mid, Shell) crea un microclima regolato vicino alla pelle",
    "La lana merino è il gold standard per la regolazione termica e la gestione dell'umidità",
    "L'aria fredda innesca la diuresi: un'idratazione corretta è fondamentale anche senza sudore percepito",
  ],
  relatedTools: [
    { to: "/tools/hydration", label: "Calcolatore Idratazione" },
    { to: "/tools/calories", label: "Calcolatore Calorie" },
  ],
  relatedGuides: [
    { slug: "choosing-running-shoes", label: "Come Scegliere le Scarpe da Corsa" },
    { slug: "injury-prevention", label: "Guida alla Prevenzione Infortuni" },
  ],
  sections: [
    { 
      heading: "La Scienza: Termoregolazione", 
      body: "Con il freddo, il corpo dà priorità alla temperatura interna restringendo il flusso sanguigno alle estremità (vasocostrizione). Questo protegge gli organi vitali ma lascia mani e piedi vulnerabili. \n\n**Diuresi Indotta dal Freddo:** L'esposizione al freddo aumenta la pressione sanguigna centrale, segnalando ai reni di filtrare i liquidi in eccesso. Ecco perché senti il bisogno di urinare di più in inverno. Poiché non 'senti' di sudare molto, i runner spesso trascurano l'idratazione, portando a un sangue più denso che compromette il trasporto di ossigeno ai muscoli.", 
      variant: "highlight" 
    },
    { 
      heading: "Scienza dei Materiali: Merino vs Sintetico", 
      body: "Il cotone è il tuo peggior nemico in inverno. Assorbe l'umidità e perde ogni proprietà isolante quando è bagnato, portando a una rapida perdita di calore per conduzione. \n\n- **Lana Merino:** può assorbire fino al 35% del suo peso in acqua prima di sembrare 'bagnata'. Mantiene il calore anche se umida ed è naturalmente antimicrobica. \n- **Sintetici (Poliestere/Nylon):** progettati per la massima traspirazione. Asciugano più velocemente della lana ma forniscono meno calore statico. Il sistema ideale prevede spesso una base sintetica per le corse intense e una base merino per i lunghi lenti.", 
      variant: "default" 
    },
    { 
      heading: "Gestire il Microclima", 
      body: "Un kit invernale vincente è un sistema modulare a 3 strati. \n\n1. **Base Layer (Intimo):** allontana il sudore dalla pelle. \n2. **Mid Layer (Isolamento):** intrappola uno strato di aria calda. I pile a griglia (come il Polartec Power Grid) sono superiori perché isolano permettendo al calore in eccesso di uscire. \n3. **Outer Layer (Protezione):** un guscio resistente al vento. Evita giacche totalmente impermeabili a meno che non piova, poiché intrappolano il sudore all'interno, creando un 'effetto sauna' che finisce per farti gelare.", 
      variant: "default", 
      listItems: [
        "Testa e Mani: il 30-40% della perdita totale di calore può avvenire attraverso le estremità", 
        "Trazione: ramponcini o scarpe chiodate sono necessari per correre sul ghiaccio vivo", 
        "Visibilità: la riflettività è più importante del colore in condizioni di bassa luce invernale",
        "Durata Batteria: le basse temperature possono ridurre la durata della batteria dell'orologio GPS fino al 50%."
      ] 
    },
    {
      heading: "Broncospasmo e Salute Polmonare",
      body: "L'aria fredda e secca può innescare il 'Broncospasmo indotto dall'esercizio' (EIB). Indossare uno scaldacollo (buff) davanti alla bocca crea uno 'scambio di calore e umidità' (HME), preriscaldando e umidificando l'aria prima che raggiunga i bronchi.",
      variant: "warning"
    },
    {
      heading: "La Regola del 'Partenza Fredda'",
      body: "Dovresti sentirti leggermente infreddolito appena metti piede fuori casa. Se sei perfettamente al caldo alla partenza, finirai per surriscaldarti pericolosamente entro 15 minuti. Vestiti per la temperatura che il tuo corpo raggiungerà al 5° km, non per quella della linea di partenza.",
      variant: "tip"
    },
    { 
      heading: "Checklist Corsa Invernale", 
      body: "Protocolli di sicurezza e attrezzatura per l'allenamento sotto zero.", 
      variant: "checklist", 
      listItems: [
        "Riscaldamento: fai 5 minuti di drill dinamici *dentro* casa prima di uscire.", 
        "Controllo Attrezzatura: testa le batterie della lampada frontale; si scaricano più velocemente al freddo.", 
        "Idratazione: bevi elettroliti a temperatura ambiente prima e dopo la corsa.", 
        "Protezione Pelle: usa un balsamo anti-sfregamento o vaselina sulla pelle del viso esposta per prevenire bruciature da vento.",
        "Protocollo Post-Corsa: togliti i vestiti bagnati entro 5 minuti dalla fine per evitare un crollo della temperatura corporea."
      ] 
    },
  ],
  hubCategory: "apparel",
};
