import { GuideContent } from "@/types/guide";
import guideHillTraining from "@/assets/guide-hill-training.webp";

export const hillTraining: GuideContent = {
  title: "Allenamento in Salita per Runner",
  seoTitle: "Allenamento in Salita 2026: Guida a Forza e Potenza",
  seoDescription: "Sblocca una potenza esplosiva con l'allenamento in salita. Scopri la scienza del reclutamento delle fibre di Tipo II, la meccanica della discesa e i migliori allenamenti per maratoneti.",
  keywords: ["allenamento in salita runner", "benefici ripetute in salita", "tecnica corsa in salita", "meccanica corsa in discesa", "allenamenti potenza corsa", "forza per runner"],
  description: "Padroneggia le ripetute in salita, la tecnica in discesa e costruisci una forza esplosiva con allenamenti mirati.",
  tags: ["running", "muscles", "energy"],
  heroImage: guideHillTraining,
  readTime: "7 min di lettura",
  keyTakeaways: [
    "Le salite sono 'allenamento della forza travestito': potenziano glutei e polpacci senza pesi",
    "La corsa in salita corregge naturalmente l'overstriding, migliorando la biomeccanica",
    "Le salite brevi (sotto i 60s) reclutano le fibre veloci di Tipo II e aumentano la potenza",
    "La discesa allena la capacità eccentrica dei quadricipiti, vitale per le fasi finali della maratona",
    "Il costo di ossigeno aumenta esponenzialmente con la pendenza: impara a gestire l'RPE",
  ],
  relatedTools: [
    { to: "/tools/calories", label: "Calcolatore Calorie" },
    { to: "/tools/hydration", label: "Calcolatore Idratazione" },
  ],
  relatedGuides: [
    { slug: "running-form", label: "Come Migliorare la Tecnica di Corsa" },
    { slug: "marathon-training", label: "Guida alla Maratona per Principianti" },
  ],
  sections: [
    { 
      heading: "La Scienza: Reclutamento delle Fibre e Potenza Esplosiva", 
      body: "L'allenamento in salita è uno dei modi più efficienti per aumentare la tua 'Potenza di Uscita'. Quando corri contro la forza di gravità, il corpo deve produrre una forza di spinta maggiore per ogni singolo passo. Questo attiva massicciamente le fibre muscolari di Tipo II (a contrazione rapida), che solitamente rimangono 'dormienti' durante le corse facili in pianura. \n\n**Efficienza Neuromuscolare:** Correre in salita migliora la comunicazione tra cervello e muscoli. Il sistema nervoso impara a reclutare più unità motorie simultaneamente e a farle contrarre più velocemente. Il risultato è un aumento della velocità massima e una migliore Economia di Corsa anche in pianura, poiché ogni passo richiederà una percentuale minore della tua forza massima.", 
      variant: "highlight" 
    },
    { 
      heading: "Fisiologia: VO2 Max e Capacità Anaerobica", 
      body: "Le salite permettono di raggiungere intensità cardiache vicine al massimo (Zona 5) con un impatto meccanico sulle articolazioni inferiore rispetto alla corsa veloce in piano. \n\n- **Saturazione di Ossigeno:** Durante ripetute in salita lunghe (2-3 minuti), la richiesta di ossigeno supera la capacità di fornitura, forzando il corpo a migliorare il meccanismo di tamponamento dell'acido lattico. Questo sposta verso l'alto la tua Soglia Anaerobica, permettendoti di mantenere ritmi di gara più elevati prima che il 'bruciore' muscolare ti costringa a rallentare.", 
      variant: "default" 
    },
    { 
      heading: "Meccanica della Scalata: Un Correttore Naturale", 
      body: "La pendenza è un 'coach' silenzioso che corregge i difetti di forma più comuni. \n\n- **Eliminazione dell'Overstriding:** In salita è fisicamente impossibile atterrare con il piede troppo davanti al corpo. Questo obbliga il runner ad atterrare di mesopiede, riducendo le forze frenanti. \n- **Drive delle Ginocchia:** La salita richiede una spinta delle ginocchia più alta per superare l'ostacolo del terreno. Questo rinforza i flessori dell'anca e migliora la fluidità della falcata generale. \n- **Postura e Braccia:** Per salire con efficienza, devi mantenere il petto aperto e le braccia che oscillano con decisione. Questo crea una coppia di forza che facilita il superamento della gravità.", 
      variant: "default" 
    },
    { 
      heading: "L'Allenamento Eccentrico in Discesa", 
      body: "Mentre la salita è un lavoro concentrico (il muscolo si accorcia mentre produce forza), la discesa è un lavoro **eccentrico**. \n\n- **Rafforzamento dei Tessuti:** I quadricipiti lavorano per frenare l'impatto della gravità. Questo stress controllato causa micro-lesioni alle fibre muscolari che, una volta riparate, diventano incredibilmente resistenti alla fatica. Gli atleti che includono la corsa in discesa nel loro programma soffrono meno di crampi e cedimenti muscolari negli ultimi 10 km della maratona, dove le fibre iniziano a cedere per fatica meccanica.", 
      variant: "default", 
      listItems: [
        "Inclinazione Ottimale: Per gli sprint di potenza, cerca pendenze del 6-10%; per il ritmo, il 3-5%.", 
        "Cadenza: In salita, punta ad aumentare la frequenza dei passi invece di allungarli.", 
        "Recupero: Il ritorno alla base deve essere camminato o corso molto piano per smaltire il lattato.",
        "Respirazione: Non guardare i piedi; tieni lo sguardo 20 metri avanti per aprire il torace."
      ] 
    },
    {
      heading: "Consiglio: Le Salite Brevi per la Tecnica",
      body: "Inserisci 6-8 scatti da 15 secondi in salita ripida al termine di una corsa facile una volta a settimana. Questo 'resetta' la tua tecnica di corsa, attiva i glutei e migliora la reattività del piede senza accumulare troppa fatica per il giorno successivo.",
      variant: "tip"
    },
    {
      heading: "Attenzione al Carico sul Tendine d'Achille",
      body: "Correre in salita mette in massima tensione il tendine d'Achille e la fascia plantare. Se hai una storia di infortuni in queste zone, inizia con pendenze molto lievi e non superare mai il 10% di inclinazione finché i tessuti non si sono adattati al nuovo stimolo meccanico.",
      variant: "warning"
    },
    { 
      heading: "Checklist: Programma il Tuo Hill Training", 
      body: "Esempi di sessioni per ogni obiettivo.", 
      variant: "checklist", 
      listItems: [
        "Power Development: 8 x 30 secondi sprint massimali su pendenza 8%, recupero 2 minuti camminando.", 
        "Aerobic Strength: 5 x 3 minuti a ritmo soglia su pendenza 4%, recupero corsa lenta in discesa.", 
        "Hill Fartlek: 45 minuti su percorso collinare correndo forte ogni salita e piano le pianure.", 
        "Forza delle Gambe: Allunghi in discesa controllata (max 4% pendenza) per la stabilità del ginocchio.",
        "Costanza: Una sessione in salita ogni 10-14 giorni è sufficiente per vedere miglioramenti drastici."
      ] 
    }
  ],
  hubCategory: "shoes",
};
