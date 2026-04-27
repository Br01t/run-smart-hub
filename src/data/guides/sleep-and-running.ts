import { GuideContent } from "@/types/guide";
import guideSleepRecovery from "@/assets/guide-sleep-recovery.webp";

export const sleepAndRunning: GuideContent = {
  title: "Sonno e Performance nella Corsa: La Scienza",
  seoTitle: "Sonno per Runner 2026: La Guida Definitiva al Recupero",
  seoDescription: "Il sonno è il più potente potenziatore di prestazioni. Scopri come il sonno profondo ripara i muscoli, resetta gli ormoni e perché 8 ore sono il minimo per gli atleti.",
  keywords: ["sonno per runner", "recupero corsa sonno", "riparazione muscolare sonno profondo", "sistema glinfatico corsa", "performance privazione sonno", "igiene del sonno atleti"],
  description: "Perché il sonno è il più potente (e gratuito) potenziatore di prestazioni per i runner. Scopri come la qualità del sonno influisce sul recupero, sul rischio di infortuni e sulla performance in gara.",
  tags: ["recovery", "protein", "muscles"],
  heroImage: guideSleepRecovery,
  readTime: "12 min di lettura",
  keyTakeaways: [
    "L'Ormone della Crescita (GH) viene rilasciato quasi esclusivamente durante il sonno profondo N3",
    "La privazione del sonno aumenta lo sforzo percepito (RPE)—rendendo lo stesso ritmo più faticoso",
    "Il sistema glinfatico pulisce i rifiuti metabolici dal cervello durante il sonno",
    "Accumulare ore di sonno (9+ ore) prima di una gara mitiga gli effetti dell'insonnia pre-gara",
  ],
  relatedTools: [
    { to: "/tools/protein", label: "Calcolatore Proteine" },
    { to: "/tools/hydration", label: "Calcolatore Idratazione" },
  ],
  relatedGuides: [
    { slug: "muscle-recovery", label: "Recupero Muscolare dopo la Corsa" },
    { slug: "running-nutrition", label: "Nutrizione Corsa: Cosa Mangiare" },
  ],
  sections: [
    { 
      heading: "La Scienza: La Finestra Anabolica", 
      body: "Il sonno non è passivo; è uno stato attivo di ricostruzione fisiologica. Durante il sonno a 'onde lente' (N3), il tuo corpo entra nel suo stato anabolico più potente. L'ipofisi rilascia massicci impulsi di Ormone della Crescita (GH) e Testosterone, essenziali per la riparazione delle fibre muscolari, il rimodellamento osseo e la riduzione dell'infiammazione sistemica. \n\n**Il Lavaggio Glinfatico:** Durante il sonno, lo spazio tra le cellule cerebrali aumenta, permettendo al liquido cerebrospinale di lavare via i rifiuti metabolici (come la beta-amiloide). Per un runner, questa 'pulizia del cervello' è fondamentale per mantenere il focus mentale e i tempi di reazione necessari per il trail running tecnico o le gare ad alta velocità.", 
      variant: "highlight" 
    },
    { 
      heading: "Equilibrio Ormonale: Cortisolo vs Recupero", 
      body: "La perdita cronica di sonno (sotto le 7 ore) sposta il tuo profilo ormonale da 'Costruzione' a 'Demolizione'. \n\n- **Picco di Cortisolo:** La mancanza di sonno eleva il cortisolo notturno, che blocca l'assorbimento del glucosio nei muscoli. \n- **Compromissione del Glicogeno:** Ricerche suggeriscono che anche una sola notte di sonno limitato può compromettere la risintesi del glicogeno fino al 20%. Ciò significa che anche se fai il 'carico di carboidrati' correttamente, il tuo corpo non può immagazzinare quell'energia in modo efficiente senza un sonno adeguato.", 
      variant: "default" 
    },
    { 
      heading: "Architettura del Sonno per Atleti", 
      body: "Gli atleti di endurance hanno esigenze di sonno superiori alla media a causa del carico cognitivo e fisico dell'allenamento. \n\n- **Riparazione Fisica (N3):** Avviene principalmente nella prima metà della notte. Se vai a letto tardi, perdi la tua principale finestra di recupero fisico. \n- **Consolidamento Mentale (REM):** Avviene principalmente nella seconda metà della notte. Se ti svegli troppo presto per correre, tagli fuori il tuo recupero mentale, portando a nebbia cerebrale e scarse strategie di ritmo.", 
      variant: "default", 
      listItems: [
        "Sintesi Proteica: i muscoli si riparano 3 volte più velocemente durante il sonno profondo rispetto a quando sei sveglio", 
        "Rischio Infortuni: i runner che dormono <7 ore hanno 1,7 volte più probabilità di subire un infortunio", 
        "Soffitto di Endurance: la perdita di sonno riduce il 'Tempo all'Esaurimento' in media dell'11%",
        "Termoregolazione: la temperatura corporea deve calare di 1°C per innescare il ciclo del sonno."
      ] 
    },
    {
      heading: "Estensione del Sonno: Il Doping Legale",
      body: "Ricerche su atleti universitari mostrano che estendere il sonno a 9-10 ore a notte per diverse settimane porta a tempi di scatto più veloci, migliore precisione e un RPE (Sforzo Percepito) significativamente più basso. Se vuoi correre più veloce, vai a letto prima.",
      variant: "tip"
    },
    {
      heading: "La Trappola di Alcol e Sonno",
      body: "Sebbene l'alcol possa aiutare ad addormentarsi più velocemente, distrugge completamente la qualità del sonno sopprimendo il sonno REM e aumentando lo stress della variabilità della frequenza cardiaca (HRV). Una birra post-corsa può ritardare il tuo recupero fisiologico di diverse ore.",
      variant: "warning"
    },
    { 
      heading: "Checklist per l'Ottimizzazione del Sonno", 
      body: "Usa queste abitudini basate sulla scienza per massimizzare il tuo recupero notturno.", 
      variant: "checklist", 
      listItems: [
        "La Stanza Buia: usa tende oscuranti; anche una piccola quantità di luce può sopprimere la melatonina.", 
        "Protocollo Magnesio: 300 mg di Magnesio Biglicinato prima di dormire per aiutare il rilassamento muscolare.", 
        "Costanza: vai a letto e svegliati alla stessa ora ogni giorno, fine settimana inclusi.", 
        "Tramonto Digitale: niente luce blu nei 60 minuti prima di dormire per permettere la produzione naturale di melatonina.",
        "Scienza del Pisolino: un 'Power Nap' di 20 minuti tra le 13:00 e le 15:00 può ripristinare la vigilanza senza causare intontimento."
      ] 
    },
  ],
  hubCategory: "recovery",
};
