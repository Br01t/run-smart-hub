import { GuideContent } from "@/types/guide";
import guideShoes from "@/assets/guide-shoes.webp";

export const runningShoeRotation: GuideContent = {
  title: "Come Costruire una Rotazione di Scarpe da Corsa",
  seoTitle: "Guida Rotazione Scarpe Corsa 2026: Scienza della Prevenzione Infortuni",
  seoDescription: "Riduci il rischio di infortuni del 39% con una rotazione strategica delle scarpe. Scopri il recupero del foam, la variazione meccanica e come creare la rotazione perfetta.",
  keywords: ["rotazione scarpe corsa", "prevenire infortuni corsa", "recupero foam scarpe corsa", "scarpa daily trainer vs speed", "rotazione scarpe in carbonio", "guida attrezzatura corsa"],
  description: "La guida scientifica e pratica alla rotazione di più paia di scarpe per ridurre il rischio di infortuni e migliorare le prestazioni.",
  tags: ["shoes", "gear", "injury-prevention", "top-picks-2026"],
  heroImage: guideShoes,
  readTime: "7 min di lettura",
  keyTakeaways: [
    "Alternare 2 o più modelli riduce il rischio di infortuni da stress ripetitivo del 39%",
    "Le schiume richiedono 24-48 ore per recuperare le proprietà elastiche dopo la compressione",
    "Variare il drop delle scarpe distribuisce il carico tra ginocchia, polpacci e tendini",
    "Una rotazione specializzata (Daily, Speed, Race) prolunga la vita utile di ogni paio",
    "La monotonia meccanica è il nemico numero uno della salute del piede del runner",
  ],
  relatedTools: [
    { to: "/tools/bmi", label: "Calcolatore BMI" },
    { to: "/tools/protein", label: "Calcolatore Proteine" },
  ],
  relatedGuides: [
    { slug: "choosing-running-shoes", label: "Come Scegliere le Scarpe da Corsa" },
    { slug: "injury-prevention", label: "Guida alla Prevenzione Infortuni" },
  ],
  sections: [
    { 
      heading: "La Scienza: Variabilità Biomeccanica e Carico", 
      body: "La rotazione delle scarpe non è solo un modo per possedere più calzature; è una strategia basata sulla biomeccanica per prevenire gli infortuni. Ogni volta che corri con lo stesso paio, applichi esattamente lo stesso stress meccanico ai medesimi tessuti (tendini, ossa, muscoli) per migliaia di volte.\n\n**Interrompere la Monotonia:** Alternando scarpe con diverse densità di schiuma, geometrie (rocker vs flat) e altezze, costringi il corpo a modificare leggermente la cinematica della falcata. Questi micro-aggiustamenti sono fondamentali per evitare l'accumulo di stress localizzato, riducendo significativamente l'incidenza di patologie da sovraccarico come la fascite plantare o la periostite tibiale.", 
      variant: "highlight" 
    },
    { 
      heading: "Recupero Viscoelastico delle Schiume", 
      body: "Le intersuole moderne (EVA, TPU, PEBA) sono materiali viscoelastici. Durante la corsa, le micro-bolle d'aria all'interno della schiuma si comprimono per dissipare l'energia dell'impatto. \n\n- **Il Tempo di Riposo:** Gli studi sui materiali mostrano che una schiuma può impiegare fino a **48 ore** affinché queste celle si 'decomprimano' completamente e tornino alla loro forma originale dopo una corsa di 10 km. \n- **Il Cedimento Prematuro:** Se corri con lo stesso paio ogni giorno, la schiuma non ha il tempo di 'respirare'. Questo porta a una corsa più 'secca', aumentando le forze di impatto che risalgono lungo la tibia e il femore, accelerando anche l'usura strutturale della scarpa.", 
      variant: "default" 
    },
    { 
      heading: "L'Effetto del Drop sulla Catena Cinetica", 
      body: "Il 'drop' è la differenza di altezza tra il tallone e l'avampiede. Modificare questo parametro è la chiave per una rotazione efficace. \n\n- **Drop Alto (8-12 mm):** Sposta il carico verso le ginocchia e il femore, scaricando il tendine d'Achille e i polpacci. Ideale se hai una storia di tendiniti o fascite.\n- **Drop Basso (0-5 mm):** Favorisce un appoggio di mesopiede e carica maggiormente la catena posteriore (polpacci e Achille), riducendo però lo stress sull'articolazione del ginocchio. \nAlternare queste due tipologie permette di allenare in modo completo tutte le strutture del piede e della gamba.", 
      variant: "default" 
    },
    { 
      heading: "Categorie di Rotazione: Gli Strumenti Giusti", 
      body: "Per massimizzare i benefici, la tua rotazione dovrebbe includere tre tipi di scarpe:\n\n1. **Daily Trainer:** La scarpa tuttofare, ammortizzata ma non troppo pesante, per il 70% dei tuoi chilometri.\n2. **Speed Shoe:** Una scarpa più leggera e reattiva (spesso con piastra in carbonio o nylon) per le ripetute e il tempo run.\n3. **Recovery Shoe:** Massima ammortizzazione e geometrie rocker per i giorni in cui le gambe sono stanche e hanno bisogno di protezione extra.", 
      variant: "default", 
      listItems: [
        "Durata: Una scarpa ruotata può durare fino a 100-200 km in più rispetto a una usata quotidianamente.", 
        "Adattamento: La rotazione prepara il piede a diverse superfici (strada, sterrato, pista).", 
        "Prevenzione: Il 39% di infortuni in meno è un dato derivante da studi su runner amatoriali.",
        "Equilibrio: Aiuta a identificare squilibri nell'appoggio analizzando l'usura su modelli diversi."
      ] 
    },
    {
      heading: "Consiglio: Quando Sostituire le Scarpe",
      body: "Non basarti solo sul chilometraggio. Se inizi ad avvertire piccoli dolori alle articolazioni che prima non avevi, o se senti che la scarpa è diventata 'muta' (non restituisce energia), è ora di cambiarla. Una scarpa scarica è una delle cause principali di infortuni evitabili.",
      variant: "tip"
    },
    {
      heading: "Attenzione alla Transizione al Drop Basso",
      body: "Se hai sempre corso con drop di 10-12 mm, non passare improvvisamente a una scarpa 'Zero Drop'. Questo causerebbe un sovraccarico immediato ai polpacci. Inserisci la scarpa a drop basso gradualmente, partendo da sessioni di 15-20 minuti una volta a settimana.",
      variant: "warning"
    },
    { 
      heading: "Checklist: Crea la Tua Rotazione Perfetta", 
      body: "Passi pratici per gestire il tuo armadio tecnico.", 
      variant: "checklist", 
      listItems: [
        "Identifica il Modello Base: Quello con cui ti trovi meglio per le corse lunghe.", 
        "Aggiungi una Scarpa Opposta: Se hai una scarpa neutra, prova un modello leggermente più stabile per i giorni di fatica.", 
        "Usa un'App di Tracciamento: Segna i km per ogni paio separatamente su Strava o Garmin Connect.", 
        "Rotazione Climatica: Tieni un paio specifico per la pioggia (magari in Gore-Tex) per preservare gli altri.",
        "Test delle Sensazioni: Una volta al mese, fai una corsa corta con ogni paio per sentire le differenze di risposta."
      ] 
    }
  ],
  hubCategory: "shoes",
};
