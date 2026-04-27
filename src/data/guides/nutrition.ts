import { GuideContent } from "@/types/guide";
import guideNutrition from "@/assets/guide-nutrition.webp";

export const runningNutrition: GuideContent = {
  title: "Nutrizione per la Corsa: Rifornimento e Metabolismo",
  seoTitle: "Guida Nutrizione Corsa 2026: Scienza della Performance e Carboidrati",
  seoDescription: "Ottimizza il tuo motore con la nutrizione per runner basata sulla scienza. Scopri il rapporto glucosio-fruttosio 2:1, il Gut Training e come evitare il muro in maratona.",
  keywords: ["nutrizione corsa", "cosa mangiare corsa", "carboidrati runner", "rapporto glucosio fruttosio 2:1", "gut training runner", "idratazione runner elettroliti"],
  description: "Una guida completa alla nutrizione per runner: cosa mangiare prima, durante e dopo la corsa per massimizzare le prestazioni e il recupero.",
  tags: ["nutrizione", "energia", "carboidrati", "top-nutrition-2026"],
  heroImage: guideNutrition,
  readTime: "12 min di lettura",
  keyTakeaways: [
    "I carboidrati sono il carburante limitante per la performance di alta intensità",
    "Il rapporto 2:1 glucosio-fruttosio massimizza l'assorbimento di energia per ora",
    "L'intestino è un organo allenabile (Gut Training) per prevenire problemi gastrici",
    "L'idratazione richiede un equilibrio preciso di sodio per mantenere il volume plasmatico",
    "La nutrizione anti-infiammatoria accelera il recupero strutturale post-allenamento",
  ],
  relatedTools: [
    { to: "/tools/calories", label: "Calcolatore Calorie" },
    { to: "/tools/hydration", label: "Calcolatore Idratazione" },
  ],
  relatedGuides: [
    { slug: "supplements-for-runners", label: "Integratori Essenziali per i Runner" },
    { slug: "recovery", label: "Recupero Muscolare dopo la Corsa" },
  ],
  sections: [
    { 
      heading: "Il Carburante dell'Endurance: Substrati Energetici", 
      body: "La nutrizione per la corsa non riguarda solo le calorie, ma la capacità del corpo di utilizzare i giusti substrati al momento giusto. \n\n- **Ossidazione dei Grassi (FatMax):** Alle basse intensità, il corpo preferisce i grassi. L'allenamento aerobico aumenta l'efficienza dei mitocondri, permettendoti di correre più velocemente consumando meno glicogeno.\n- **Potenza dei Carboidrati:** Per le alte intensità (sopra la soglia anaerobica), i carboidrati sono l'unico carburante efficace. Ottimizzare le scorte di glicogeno attraverso il carbo-loading e l'integrazione in corsa è la chiave per evitare il 'muro'.", 
      variant: "highlight" 
    },
    { 
      heading: "La Scienza del Rapporto 2:1 (Glucosio:Fruttosio)", 
      body: "L'intestino umano ha limiti fisiologici nell'assorbimento dei carboidrati. \n\n- **Trasportatori SGLT1:** Possono assorbire circa 60g di glucosio all'ora. \n- **Trasportatori GLUT5:** Assorbono circa 30g di fruttosio all'ora. \nUtilizzando gel o bevande con un mix di entrambi (rapporto 2:1), puoi aumentare l'apporto energetico fino a 90g all'ora senza causare stress intestinale. Questo 'doppio canale' di assorbimento è fondamentale per le gare di lunga durata dove la disponibilità energetica limita la prestazione.", 
      variant: "default" 
    },
    { 
      heading: "Il Microbioma del Runner: Il Secondo Cervello", 
      body: "Ricerche recenti mostrano che il microbioma intestinale dei runner è unico. \n\n- **Veillonella e Lattato:** Alcuni batteri (come la Veillonella) metabolizzano il lattato prodotto dai muscoli e lo convertono in acidi grassi a catena corta (SCFA), che vengono poi riutilizzati dal corpo come energia. Una dieta ricca di fibre vegetali e polifenoli supporta questa simbiosi, migliorando indirettamente la tua resistenza alla fatica e la salute immunitaria post-corsa.", 
      variant: "default" 
    },
    { 
      heading: "Fisiologia dello Svuotamento Gastrico", 
      body: "La velocità con cui i nutrienti passano dallo stomaco all'intestino (Gastric Emptying) determina l'efficacia dell'integrazione. \n\n- **Fattori Limitanti:** Soluzioni troppo concentrate (ipertoniche), temperature estreme dei liquidi e stress psicologico possono bloccare lo svuotamento gastrico, causando nausea e quel fastidioso senso di 'acqua nello stomaco'. Le bevande idro-elettrolitiche devono essere leggermente ipotoniche per massimizzare la velocità di assorbimento dell'acqua tramite l'osmosi.", 
      variant: "default" 
    },
    { 
      heading: "Nutrizione Anti-Infiammatoria: Omega-3 e Polifenoli", 
      body: "La corsa produce radicali liberi e infiammazione muscolare. \n\n- **Omega-3:** Acidi grassi essenziali che migliorano la fluidità delle membrane cellulari e modulano la risposta infiammatoria sistemica, accelerando il recupero strutturale.\n- **Antocianine:** Presenti in frutti rossi, ciliegie e barbabietole, agiscono come potenti antiossidanti che riducono lo stress ossidativo indotto dall'esercizio intenso, migliorando la capacità del corpo di tollerare carichi di allenamento crescenti.", 
      variant: "default" 
    },
    { 
      heading: "Il Sodio e la Scienza del Sudore", 
      body: "Non perdiamo tutti lo stesso sale. \n\n- **Salty Sweaters:** Alcuni runner perdono fino a 2000mg di sodio per litro di sudore, altri solo 200mg. Senza un'adeguata integrazione di sodio, il volume del plasma diminuisce, il sangue diventa viscoso e compaiono i crampi. Eseguire un test del sudore o monitorare i residui bianchi sulla pelle dopo la corsa ti permette di personalizzare la tua strategia di elettroliti, fondamentale per la performance in climi caldi e umidi.", 
      variant: "default" 
    },
    {
      heading: "Gut Training: Allena il tuo Intestino", 
      body: "L'apparato digerente è un organo allenabile. \n\n- **Adattamento:** Praticare l'assunzione di gel e liquidi durante i lunghi insegna all'intestino a gestire il carico di zuccheri sotto sforzo.\n- **Svuotamento Gastrico:** Con l'allenamento, lo stomaco impara a svuotarsi più velocemente, riducendo il rischio di nausea e problemi gastrointestinali in gara.", 
      variant: "default", 
      listItems: [
        "Frequenza: Piccole dosi ogni 20-30 minuti sono meglio di una grande dose ogni ora.", 
        "Varietà: Testa diverse marche e gusti per evitare la stanchezza del palato.", 
        "Simulazione Gara: Esegui almeno 3 allenamenti lunghi simulando esattamente il piano nutrizionale di gara.",
        "Pianificazione: Segna i punti di ristoro e calcola quando prendere i tuoi gel personali."
      ] 
    },
    {
      heading: "Consiglio: Il Carico di Carboidrati 'Light'",
      body: "Per una maratona, non serve abbuffarsi di pasta il giorno prima (rischiando pesantezza intestinale). Inizia a aumentare i carboidrati 2-3 giorni prima della gara, riducendo grassi, fibre e proteine. Questo riempirà le scorte di glicogeno in modo progressivo e senza shock digestivi.",
      variant: "tip"
    },
    {
      heading: "Attenzione: La Trappola della Disidratazione",
      body: "Una perdita di peso corporeo superiore al 2% dovuta al sudore compromette significativamente la performance aerobica e le funzioni cognitive. Pesati prima e dopo una corsa lunga per capire quanti liquidi perdi effettivamente ogni ora in diverse condizioni climatiche.",
      variant: "warning"
    },
    { 
      heading: "Checklist: Nutrizione per la Gara", 
      body: "Protocolli pratici per il successo.", 
      variant: "checklist", 
      listItems: [
        "Pre-Gara: Colazione 3 ore prima, ricca di carboidrati semplici e povera di fibre.", 
        "Idratazione: Sorseggia piccoli volumi regolarmente invece di bere molto tutto in una volta.", 
        "Sodio: Almeno 500-700mg per litro di acqua se corri oltre i 90 minuti.", 
        "Post-Corsa: Finestra di 30 minuti per proteine e carboidrati per massimizzare la riparazione.",
        "Test in Allenamento: Mai provare un nuovo integratore o un nuovo cibo il giorno della gara."
      ] 
    }
  ],
  hubCategory: "supplements",
};
