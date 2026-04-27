import { GuideContent } from "@/types/guide";
import guideSupplements from "@/assets/guide-supplements.webp";

export const supplementsForRunners: GuideContent = {
  title: "Integratori Essenziali per il Runner",
  seoTitle: "Migliori Integratori Corsa 2026: Guida Scientifica ai Dosaggi",
  seoDescription: "Quali integratori migliorano davvero le prestazioni nella corsa? Analisi scientifica di Creatina, Nitrati, Beta-Alanina e Vitamina D per atleti di endurance.",
  keywords: ["integratori corsa", "performance endurance", "creatina per runner", "nitrati succo barbabietola", "magnesio per crampi", "proteine per endurance"],
  description: "Quali integratori funzionano davvero per la corsa? Una guida basata sulle evidenze scientifiche per la performance e la salute.",
  tags: ["supplements", "electrolytes", "protein", "top-supplements-2026"],
  heroImage: guideSupplements,
  readTime: "14 min di lettura",
  keyTakeaways: [
    "Dai priorità al cibo vero—gli integratori colmano le lacune lasciate da allenamenti ad alto volume",
    "Creatina e Beta-Alanina migliorano la capacità ad alta intensità e il tamponamento dell'acido lattico",
    "I Nitrati (Barbabietola) riducono il costo di ossigeno della corsa",
    "Ferro e Vitamina D sono le carenze più comuni nei runner",
  ],
  relatedTools: [
    { to: "/tools/protein", label: "Calcolatore Proteine" },
    { to: "/tools/electrolytes", label: "Calcolatore Elettroliti" },
    { to: "/tools/calories", label: "Calcolatore Calorie" },
  ],
  relatedGuides: [
    { slug: "muscle-recovery", label: "Recupero Muscolare dopo la Corsa" },
    { slug: "running-nutrition", label: "Nutrizione Corsa: Cosa Mangiare" },
  ],
  sections: [
    { 
      heading: "La Gerarchia delle Performance", 
      body: "L'integrazione è la 'punta della piramide'. Prima di considerare pillole e polveri, assicurati che l'apporto calorico, il bilancio dei macronutrienti e il sonno siano ottimizzati. Tuttavia, per gli atleti che si allenano più di 5 ore a settimana, specifici micronutrienti possono diventare fattori limitanti sia per la performance che per il recupero.", 
      variant: "highlight" 
    },
    { 
      heading: "Potenziatori di Performance: I Magnifici Tre", 
      body: "Solo una manciata di integratori ha evidenze di 'Livello A' per migliorare le prestazioni di endurance. \n\n- **Nitrati (Succo di Barbabietola):** Aumentano l'ossido nitrico, migliorando l'efficienza mitocondriale. Dosaggio: 400-800 mg 2-3 ore prima di una gara. \n- **Beta-Alanina:** Aumenta i livelli di carnosina muscolare, che tampona il 'bruciore' (ioni H+) durante gli sforzi VO2 max. Dosaggio: 3,2-6,4 g al giorno (dosi frazionate per evitare il formicolio). \n- **Creatina Monoidrato:** Migliora la risintesi della fosfocreatina per gli sprint in salita e le volate finali. Contrariamente ai miti, non causa gonfiore se assunta in basse dosi (3-5 g al giorno).", 
      variant: "default" 
    },
    { 
      heading: "Salute e Resilienza: Lo Stack del Recupero", 
      body: "La corsa di endurance è uno stress infiammatorio e ossidativo. Mantenere la salute sistemica è la chiave per un allenamento costante. \n\n- **Vitamina D3 + K2:** Fondamentale per l'assorbimento del calcio e la funzione immunitaria. Molti runner sono carenti. Punta a 2000-5000 UI al giorno. \n- **Magnesio (Bisglicinato/Citrato):** Coinvolto in oltre 300 reazioni. La carenza di magnesio è legata ai crampi muscolari e a una scarsa qualità del sonno. \n- **Omega-3 (EPA/DHA):** Riduce l'infiammazione sistemica indotta dall'esercizio e migliora la salute del cuore.", 
      variant: "default", 
      listItems: [
        "Ferro (Ferritina): i runner perdono ferro con il sudore e l'emolisi da impatto. Controlla i livelli regolarmente.", 
        "Probiotici: riducono l'incidenza di disturbi gastrointestinali durante i lunghi sforzi.", 
        "Collagene + Vitamina C: assunti 45 minuti prima di una sessione di forza, possono migliorare la riparazione di tendini e legamenti.",
        "Zinco: essenziale per la salute ormonale e la funzione enzimatica negli atleti ad alto chilometraggio."
      ] 
    },
    {
      heading: "Il Paradosso degli Antiossidanti",
      body: "Gli studi dimostrano che dosi elevate di Vitamina C (>1000 mg) e Vitamina E durante la fase di costruzione della base possono effettivamente **smorzare** gli adattamenti mitocondriali. Il tuo corpo ha bisogno dello 'stress' dell'ossidazione per segnalare la necessità di diventare più forte. Riserva gli antiossidanti ad alte dosi per i 3 giorni post-maratona o durante periodi di viaggio intensi.",
      variant: "warning"
    },
    {
      heading: "Cinetica di Proteine e Aminoacidi",
      body: "La Sintesi Proteica Muscolare (MPS) è guidata dalla 'Soglia di Leucina'. Punta a 20-30 g di proteine ogni 3-4 ore, assicurando almeno 2,5 g di Leucina per porzione (presente in whey, soia o uova) per attivare la via mTOR per la riparazione muscolare.",
      variant: "tip"
    },
    { 
      heading: "Checklist Integratori per il Runner", 
      body: "Come integrare in modo sicuro ed efficace gli integratori nella tua routine.", 
      variant: "checklist", 
      listItems: [
        "Cerca i loghi 'Informed Sport' o 'NSF' per garantire l'assenza di sostanze vietate.", 
        "Beta-Alanina: assumi 1,6 g due volte al giorno per minimizzare la 'parestesia' (formicolio cutaneo).", 
        "Creatina: non c'è bisogno di fasi di carico. 5 g al giorno costanti sono sufficienti per la saturazione in 21 giorni.", 
        "Vitamina D: assumila con un pasto contenente grassi per massimizzare l'assorbimento.",
        "Magnesio: assumilo prima di dormire per sfruttare i suoi effetti rilassanti e favorenti il sonno."
      ] 
    },
  ],
  hubCategory: "supplements",
};
