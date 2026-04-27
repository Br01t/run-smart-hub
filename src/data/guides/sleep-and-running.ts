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
  readTime: "7 min di lettura",
  keyTakeaways: [
    "Il sonno profondo (N3) è l'unica fase in cui avviene il rilascio massiccio di Ormone della Crescita (GH)",
    "La privazione del sonno riduce la risintesi del glicogeno muscolare fino al 20%",
    "Il sistema glinfatico 'lava' il cervello dai sottoprodotti metabolici della fatica durante la notte",
    "Dormire meno di 7 ore aumenta il rischio di infortuni da sovraccarico del 1.7x",
    "L'estensione del sonno (9+ ore) è una strategia di performance superiore a qualsiasi integratore",
  ],
  relatedTools: [
    { to: "/tools/protein", label: "Calcolatore Proteine" },
    { to: "/tools/hydration", label: "Calcolatore Idratazione" },
  ],
  relatedGuides: [
    { slug: "recovery", label: "Recupero Muscolare dopo la Corsa" },
    { slug: "running-nutrition", label: "Nutrizione Corsa: Cosa Mangiare" },
  ],
  sections: [
    { 
      heading: "La Scienza: La Finestra Anabolica Notturna", 
      body: "Il sonno non è un tempo di inattività, ma il periodo di massima attività anabolica. Per un runner, è l'unico momento in cui il corpo ripara effettivamente i micro-danni causati dall'allenamento. \n\n**Il Picco di GH e Testosterone:** Durante la fase di sonno a onde lente (SWS), l'ipofisi rilascia impulsi di Ormone della Crescita (GH). Questo ormone è il principale responsabile della sintesi proteica e del rimodellamento dei tessuti connettivi e ossei. Se accorci la durata del sonno, tagli drasticamente questa finestra di riparazione, rendendo vani i benefici dell'allenamento del giorno precedente.", 
      variant: "highlight" 
    },
    { 
      heading: "Fisiologia: Risintesi del Glicogeno e Metabolismo", 
      body: "La qualità del sonno influisce direttamente sulla tua capacità di immagazzinare carburante. \n\n- **Resistenza Insulinica Temporanea:** La privazione di sonno induce uno stato di insulino-resistenza simile a quello del diabete di tipo 2. Questo impedisce ai muscoli di assorbire efficacemente il glucosio dal sangue. \n- **Glicogeno Compromesso:** Gli studi dimostrano che i runner privati di sonno non riescono a ricaricare completamente le scorte di glicogeno muscolare, anche seguendo un protocollo di carbo-loading. Questo porta a 'colpire il muro' molto prima durante la maratona o gli allenamenti lunghi.", 
      variant: "default" 
    },
    { 
      heading: "Il Sistema Glinfatico: La Pulizia del Cervello", 
      body: "La corsa di endurance produce un alto carico cognitivo e metabolico nel sistema nervoso centrale. \n\n- **Il Lavaggio Notturno:** Durante il sonno profondo, gli spazi tra i neuroni si allargano e il liquido cerebrospinale fluisce con forza tra le cellule (Sistema Glinfatico). Questo processo elimina la beta-amiloide e altri metaboliti della fatica. Senza questa pulizia, si avverte la tipica 'nebbia cerebrale' (brain fog), che riduce la capacità di mantenere il focus e aumenta la percezione dello sforzo (RPE) durante la corsa.", 
      variant: "default" 
    },
    { 
      heading: "Architettura del Sonno ed Endurance", 
      body: "Il sonno è diviso in cicli di circa 90 minuti. \n\n- **Fase N3 (Fisica):** Predomina nella prima metà della notte. Saltare le prime ore di sonno significa perdere la riparazione muscolare. \n- **Fase REM (Mentale):** Predomina nell'ultima parte della notte. È fondamentale per il consolidamento della memoria motoria (la tecnica di corsa) e la regolazione dell'umore. Svegliarsi bruscamente con la sveglia per una corsa all'alba spesso sacrifica questa fase cruciale per la resilienza mentale.", 
      variant: "default", 
      listItems: [
        "Sforzo Percepito: A parità di ritmo, correre stanchi sembra il 15% più duro a livello neurale.", 
        "Rischio Infortuni: La coordinazione motoria cala drasticamente con meno di 7 ore di sonno.", 
        "Immunità: Una sola notte di 4 ore di sonno riduce le cellule natural killer del sistema immunitario del 70%.",
        "Termoregolazione: Il sonno scarso peggiora la capacità del corpo di sudare e raffreddarsi sotto sforzo."
      ] 
    },
    {
      heading: "Consiglio: Il 'Banking del Sonno'",
      body: "Se sai che la notte prima della gara non dormirai bene per l'ansia, puoi 'accumulare' sonno nei 7 giorni precedenti. Dormire 9 ore a notte per una settimana prima dell'evento crea una riserva di recupero che protegge la tua prestazione anche in caso di una notte quasi insonne pre-gara.",
      variant: "tip"
    },
    {
      heading: "Attenzione: Caffeina e Emivita",
      body: "La caffeina ha un'emivita di circa 6 ore. Se prendi un caffè alle 16:00, alle 22:00 metà della caffeina è ancora nel tuo sistema, impedendo al cervello di entrare nelle fasi profonde del sonno (N3), anche se riesci ad addormentarti.",
      variant: "warning"
    },
    { 
      heading: "Checklist: Igiene del Sonno per Runner", 
      body: "Ottimizza il tuo ambiente per un recupero da atleta d'élite.", 
      variant: "checklist", 
      listItems: [
        "Temperatura: Mantieni la camera a 18-19°C; il corpo deve raffreddarsi per iniziare il sonno profondo.", 
        "Luce Blu: Spegni schermi e smartphone 90 minuti prima di coricarti.", 
        "Magnesio Biglicinato: Un integratore utile per rilassare il sistema nervoso centrale post-corsa.", 
        "Esposizione Solare: Prendi luce naturale entro 30 minuti dal risveglio per regolare il ritmo circadiano.",
        "Routine di Rilassamento: 10 minuti di stretching leggero o lettura per segnalare al corpo la fine della giornata."
      ] 
    }
  ],
  hubCategory: "recovery",
};
