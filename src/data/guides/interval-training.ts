import { GuideContent } from "@/types/guide";
import guideIntervalTraining from "@/assets/guide-interval-training.webp";

export const intervalTraining: GuideContent = {
  title: "Allenamento a Intervalli per Runner: La Guida Completa",
  seoTitle: "Guida Allenamento a Intervalli 2026: La Scienza della Velocità",
  seoDescription: "Padroneggia l'arte della velocità. Scopri come strutturare ripetute VO2 Max, Tempo run e Fartlek utilizzando rapporti lavoro-riposo scientifici per la massima performance.",
  keywords: ["allenamento a intervalli corsa", "ripetute VO2 max", "tempo run vs soglia", "guida fartlek", "lavori velocità maratona", "sistemi energetici corsa"],
  description: "Padroneggia ogni tipo di allenamento di velocità — dal fartlek alle ripetute VO2 max. Impara come strutturare gli intervalli e impostare i ritmi target.",
  tags: ["running", "energy", "muscles"],
  heroImage: guideIntervalTraining,
  readTime: "7 min di lettura",
  keyTakeaways: [
    "Gli intervalli migliorano l'efficienza del 'Lactate Shuttle', usando il lattato come carburante",
    "Il rapporto lavoro-riposo determina quale sistema energetico stai allenando",
    "Le ripetute VO2 Max espandono il tuo soffitto aerobico e la gittata cardiaca",
    "Le Tempo Run (Soglia) insegnano al corpo a correre veloce senza accumulare fatica precoce",
    "L'effetto EPOC post-intervalli aumenta il metabolismo basale per ore dopo la sessione",
  ],
  relatedTools: [
    { to: "/tools/calories", label: "Calcolatore Calorie" },
    { to: "/tools/hydration", label: "Calcolatore Idratazione" },
  ],
  relatedGuides: [
    { slug: "running-heart-rate-zones", label: "Allenamento con le Zone Cardio" },
    { slug: "marathon-training", label: "Guida alla Maratona per Principianti" },
  ],
  sections: [
    { 
      heading: "La Scienza: Sistemi Energetici e Lactate Shuttle", 
      body: "L'allenamento a intervalli è la manipolazione strategica di intensità e recupero per sollecitare i tre sistemi energetici: Fosfagena (ATP-PC), Glicolitica (Anaerobica) e Ossidativa (Aerobica). \n\n**Efficienza del Lactate Shuttle:** Contrariamente alla credenza popolare, il lattato non è un rifiuto tossico, ma una fonte di energia. Gli intervalli ad alta intensità allenano il tuo corpo a 'trasportare' efficacemente il lattato dai muscoli impegnati verso il cuore e il fegato, dove viene riconvertito in carburante. Questo processo ti permette di mantenere un ritmo di gara elevato per tempi prolungati, riducendo l'acidosi muscolare che causa il rallentamento.", 
      variant: "highlight" 
    },
    { 
      heading: "Fisiologia: VO2 Max e Gittata Sistolica", 
      body: "Le ripetute ad alta intensità (sopra il 90% della FC Max) sono l'unico modo per migliorare significativamente il VO2 Max. \n\n- **Adattamenti Cardiaci:** Durante uno sforzo intenso, le pareti del cuore si rinforzano e la capacità dei ventricoli aumenta. Questo porta a una maggiore **gittata sistolica** (più sangue ossigenato pompato ad ogni battito). \n- **Effetto EPOC:** Dopo una sessione di intervalli, il corpo consuma ossigeno extra per riparare i tessuti e ripristinare le scorte di glicogeno. Questo 'debito di ossigeno' (Excess Post-exercise Oxygen Consumption) mantiene il metabolismo basale elevato per diverse ore dopo la doccia, favorendo la ricomposizione corporea.", 
      variant: "default" 
    },
    { 
      heading: "La Matrice dei Rapporti Lavoro-Riposo", 
      body: "La magia degli intervalli risiede nella gestione del riposo, non solo nella velocità. \n\n- **VO2 Max (Rapporto 1:1):** Ad esempio, 3 minuti di corsa intensa seguiti da 3 minuti di corsa lentissima. Questo tempo permette una risintesi parziale della fosfocreatina muscolare, così da poter ripetere lo sforzo mantenendo un'alta qualità tecnica. \n- **Capacità Anaerobica (Rapporto 1:3):** Sprint brevi (es. 200m) richiedono un recupero lungo per permettere al sistema nervoso centrale di 'resettarsi' e produrre di nuovo la massima potenza. \n- **Soglia del Lattato (Riposo Breve):** Ripetute di 1000m-2000m con solo 60-90 secondi di pausa. Il riposo breve impedisce lo smaltimento totale del lattato, forzando il corpo a imparare a correre in uno stato di acidosi moderata.", 
      variant: "default" 
    },
    { 
      heading: "I Tre Pilastri della Velocità", 
      body: "Una programmazione bilanciata deve includere queste tre varianti.\n\n1. **Fartlek:** Gioco di velocità su terreni variabili. Allena l'adattabilità e la forza mentale senza lo stress del cronometro.\n2. **Tempo Run:** Sforzo sostenuto (di solito 20-40 minuti) al ritmo che potresti mantenere per un'ora. È il miglior allenamento per la resistenza specifica.\n3. **Intervalli Brevi:** Ripetute da 200m-400m per migliorare la meccanica della falcata, la cadenza e l'economia di corsa.", 
      variant: "default", 
      listItems: [
        "Economia di Corsa: Gli intervalli migliorano la comunicazione tra cervello e fibre muscolari, rendendo la corsa 'più facile'.", 
        "Capillarizzazione: L'intensità stimola la crescita di nuovi capillari nei muscoli, migliorando il trasporto di ossigeno.", 
        "Enzimi Ossidativi: Aumenta l'attività degli enzimi che bruciano grassi e zuccheri nei mitocondri.",
        "Resilienza: Superare intervalli duri costruisce il 'buffer' mentale necessario per i chilometri finali della gara."
      ] 
    },
    {
      heading: "Attenzione al Carico: La Regola del 20%",
      body: "Il lavoro ad alta intensità è estremamente tassante per il sistema nervoso e per i tessuti connettivi. Per prevenire infortuni e burnout, non dedicare più del 20% del tuo volume settimanale totale agli intervalli veloci. Se corri 40 km a settimana, non fare più di 8 km di intensità (escluso riscaldamento e defaticamento).",
      variant: "warning"
    },
    {
      heading: "Consiglio: Recupero Attivo vs Passivo",
      body: "Durante le ripetute di soglia, preferisci sempre il recupero attivo (corsa molto lenta). Questo mantiene attiva la 'pompa muscolare', aiutando il cuore a far circolare il sangue e facilitando lo smaltimento metabolico dei prodotti di scarto dell'intensità appena conclusa.",
      variant: "tip"
    },
    { 
      heading: "Checklist per una Sessione Perfetta", 
      body: "Segui questi passi per massimizzare ogni singolo allenamento di velocità.", 
      variant: "checklist", 
      listItems: [
        "Riscaldamento Progressivo: 15 minuti di corsa facile che culmina con 4-6 allunghi da 80m.", 
        "Controllo del Ritmo: Non 'sparare' tutto nel primo intervallo; punta alla costanza o a un leggero crescendo.", 
        "Analisi Post-Lavoro: Confronta i tuoi dati (FC e Passo) per vedere se hai colpito l'obiettivo metabolico.", 
        "Nutrizione Post-Sforzo: Carboidrati liquidi e proteine entro 30 minuti per fermare il catabolismo muscolare.",
        "Riposo Successivo: Assicurati che il giorno dopo un lavoro a intervalli sia di riposo totale o di corsa rigenerativa brevissima."
      ] 
    }
  ],
  hubCategory: "recovery",
};
