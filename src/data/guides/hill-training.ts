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
  readTime: "4 min di lettura",
  keyTakeaways: [
    "Le salite sono 'allenamento della forza travestito'—costruiscono potenza senza palestra",
    "La corsa in salita recluta più fibre muscolari di Tipo II (a contrazione rapida)",
    "La corsa in discesa fornisce un carico eccentrico che rinforza tendini e ossa",
    "Il lavoro in salita corregge naturalmente l'overstriding e migliora la tecnica di corsa",
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
      heading: "La Scienza: Reclutamento delle Fibre e Potenza", 
      body: "L'allenamento in salita è uno dei modi più efficienti per aumentare la tua 'Potenza di Uscita'. Quando corri in salita, il tuo corpo deve vincere la forza di gravità, il che richiede una produzione di forza maggiore per ogni passo. Questo forza il reclutamento delle fibre muscolari di Tipo II (a contrazione rapida) che sono spesso trascurate durante le corse facili in pianura. \n\n**Biogenesi Mitocondriale:** Le ripetute in salita ad alta intensità innescano rapidi adattamenti in quadricipiti, glutei e polpacci, aumentando sia la tua capacità anaerobica che il tuo 'soffitto aerobico' (VO2 Max).", 
      variant: "highlight" 
    },
    { 
      heading: "Dinamica Concentrica vs Eccentrica", 
      body: "La corsa coinvolge due fasi primarie di contrazione muscolare. \n\n- **Salita (Concentrica):** Si concentra sulla potenza e sulla spinta. Rafforza la catena posteriore (glutei, femorali, polpacci) con un impatto minore sulle articolazioni. \n- **Discesa (Eccentrica):** Si concentra sulla stabilità e sulla frenata. I muscoli si allungano sotto carico, il che causa micro-danni significativi (DOMS). Sebbene doloroso, questo stress eccentrico è ciò che rende le tue gambe 'a prova di proiettile' per gli ultimi 10 km di una maratona.", 
      variant: "default" 
    },
    { 
      heading: "Biomeccanica della Scalata", 
      body: "La corsa in salita è un naturale 'correttore di forma'. A causa della pendenza, è biomeccanicamente impossibile fare passi troppo lunghi (overstriding, ovvero atterrare con il piede troppo davanti al corpo). Questo favorisce un appoggio di mesopiede e una maggiore spinta delle ginocchia. \n\n**Meccanica Chiave:** \n1. **Accorcia la Falcata:** Punta a una cadenza più alta piuttosto che a passi più lunghi. \n2. **Spinta delle Braccia:** Il movimento delle braccia fornisce la coppia necessaria per tirare il tuo centro di gravità su per la collina. \n3. **Postura:** Mantieni il petto aperto e lo sguardo all'orizzonte (non ai piedi) per mantenere un'espansione polmonare ottimale.", 
      variant: "default", 
      listItems: [
        "VO2 Max: le ripetute in salita mantengono il 90-95% della FC max più comodamente delle sessioni in pianura", 
        "Economia di Corsa: il miglioramento della potenza si traduce in ritmi 'più facili' in pianura", 
        "Resilienza Tendinea: le elevate forze del lavoro in salita rafforzano i tendini d'Achille e rotuleo",
        "Via Neuromuscolare: le salite migliorano la velocità di comunicazione 'cervello-muscolo'."
      ] 
    },
    {
      heading: "Avviso di Sicurezza per la Discesa",
      body: "L'allenamento specifico della velocità in discesa può portare a fratture da stress o gravi lesioni muscolari se eccessivo. Limita gli sforzi in discesa ad alta velocità a una volta ogni 14 giorni e assicurati sempre di atterrare dolcemente con le ginocchia leggermente flesse per assorbire l'impatto.",
      variant: "warning"
    },
    {
      heading: "Variazione: Sprint Brevi vs Scalate Lunghe",
      body: "Le salite brevi (30-60s) si concentrano sulla potenza pura e sulla velocità neuromuscolare. Le salite lunghe (2-5 min) si concentrano sulla capacità aerobica e sulla forza 'di soglia'. Entrambe dovrebbero avere spazio in un programma di allenamento per la maratona bilanciato.",
      variant: "tip"
    },
    { 
      heading: "Checklist per l'Allenamento in Salita", 
      body: "Integra queste sessioni specifiche nel tuo piano di allenamento mensile.", 
      variant: "checklist", 
      listItems: [
        "Scelta della Pendenza: trova una collina con pendenza tra il 4% e l'8%; pendenze superiori compromettono la tecnica.", 
        "Recupero: torna giù camminando o con una corsa molto lenta. Il recupero dovrebbe essere almeno il doppio della durata dello sforzo.", 
        "Il Punto di Partenza: 6 ripetute da 45 secondi in salita al 90% dell'impegno.", 
        "Progressione: aggiungi 1-2 ripetute ogni due settimane man mano che diventi più forte.",
        "La Sessione 'Segreta': corri 5 km su un percorso collinare a un impegno 'costante' (Zona 3) per costruire il ritmo."
      ] 
    },
  ],
  hubCategory: "shoes",
};
