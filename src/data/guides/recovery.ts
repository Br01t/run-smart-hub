import { GuideContent } from "@/types/guide";
import guideRecovery from "@/assets/guide-recovery.webp";

export const recovery: GuideContent = {
  title: "Recupero Muscolare Dopo la Corsa: Scienza e Strategia",
  seoTitle: "Recupero Muscolare Runner 2026: La Guida Scientifica Definitiva",
  seoDescription: "Ottimizza la supercompensazione con il recupero basato sulle evidenze. Dalla nutrizione post-corsa al monitoraggio HRV e alla scienza del sonno profondo.",
  keywords: ["recupero muscolare corsa", "supercompensazione runner", "nutrizione post corsa", "monitoraggio HRV runner", "crioterapia corsa", "massaggio sportivo benefici"],
  description: "Padroneggia l'arte del recupero per tornare a correre più forte. Scopri come il tuo corpo si ripara e come ottimizzare ogni ora dopo l'allenamento.",
  tags: ["recupero", "muscoli", "protein", "top-recovery-2026"],
  heroImage: guideRecovery,
  readTime: "12 min di lettura",
  keyTakeaways: [
    "Il recupero è il momento in cui avvengono effettivamente gli adattamenti fisiologici",
    "La supercompensazione trasforma lo stress dell'allenamento in nuove capacità di performance",
    "Il passaggio allo stato parasimpatico è necessario per avviare la sintesi proteica muscolare",
    "Il monitoraggio dell'HRV permette di personalizzare il carico di allenamento giornaliero",
    "La nutrizione post-corsa (rapporto 4:1 carboidrati/proteine) è la chiave per il recupero rapido",
  ],
  relatedTools: [
    { to: "/tools/protein", label: "Calcolatore Proteine" },
    { to: "/tools/bmi", label: "Calcolatore BMI" },
  ],
  relatedGuides: [
    { slug: "running-nutrition", label: "Nutrizione per la Corsa: Cosa Mangiare" },
    { slug: "injury-prevention", label: "Guida alla Prevenzione Infortuni" },
  ],
  sections: [
    { 
      heading: "La Scienza del Recupero: Supercompensazione", 
      body: "L'allenamento non ti rende più forte; è il recupero dall'allenamento che lo fa. Quando corri, crei micro-lesioni muscolari e deplezione ormonale. Il corpo risponde con la **supercompensazione**: non solo ripara il danno, ma ricostruisce i tessuti rendendoli leggermente più resistenti di prima.\n\n**Il Sistema Parasimpatico:** Per avviare la riparazione, devi passare dallo stato 'Fight or Flight' (Simpatico) allo stato 'Rest and Digest' (Parasimpatico). Senza questo switch neurologico, il corpo rimane in uno stato catabolico (di demolizione), rendendo vani anche gli allenamenti più duri. Il recupero è un processo attivo che richiede intenzione e precisione biologica.", 
      variant: "highlight" 
    },
    { 
      heading: "Sintesi del Glicogeno e Finestra Metabolica", 
      body: "Nelle prime 2 ore post-corsa, la sensibilità all'insulina è ai massimi livelli. Questo è il momento critico per ripristinare le scorte di glicogeno epatico e muscolare. \n\n- **Il Rapporto 4:1:** Consumare un mix di carboidrati e proteine in un rapporto di 4:1 accelera la risintesi del glicogeno rispetto ai soli carboidrati. \n- **Riparazione Strutturale:** Le proteine forniscono gli aminoacidi (leucina in particolare) necessari per innescare la sintesi proteica muscolare via mTOR, riparando le fibre danneggiate dagli impatti eccentrici della corsa.", 
      variant: "default" 
    },
    { 
      heading: "Monitoraggio HRV: La Finestra sul Sistema Nervoso", 
      body: "La Variabilità della Frequenza Cardiaca (HRV) è il miglior indicatore del tuo stato di recupero neurale. \n\n- **Cosa misura:** L'HRV misura la variazione di tempo tra i battiti cardiaci. Un'alta variabilità indica un sistema nervoso flessibile e pronto (dominanza parasimpatica). \n- **Applicazione Pratica:** Se la tua HRV è significativamente sotto la tua media basale per due giorni consecutivi, il tuo corpo sta combattendo uno stress sistemico (overtraining, malattia imminente o scarso sonno). In questi giorni, ridurre l'intensità o riposare è più produttivo che forzare un allenamento di qualità.", 
      variant: "default" 
    },
    { 
      heading: "Fisiologia del Recupero Attivo", 
      body: "Stare seduti sul divano non è sempre il modo migliore per recuperare. \n\n- **Effetto Pompa:** Una camminata leggera o una pedalata agile aumentano il flusso sanguigno verso i muscoli senza aggiungere stress meccanico. Questo facilita la rimozione dei sottoprodotti metabolici e apporta nutrienti freschi e ossigeno ai tessuti in riparazione. \n- **Il Limite:** Il recupero attivo deve rimanere in Zona 1 (sotto il 60% della FC Max). Se superi questa soglia, inizi a produrre nuova fatica invece di smaltire quella esistente.", 
      variant: "default" 
    },
    { 
      heading: "Crioterapia e Gestione dell'Infiammazione", 
      body: "L'uso del ghiaccio (CWI - Cold Water Immersion) è uno strumento potente ma va usato con cautela. \n\n- **Benefici:** Riduce la percezione del dolore e l'edema muscolare, permettendoti di sentirti 'fresco' più velocemente. \n- **Il Paradosso:** L'infiammazione acuta post-allenamento è il segnale che innesca l'adattamento. Se usi il ghiaccio sistematicamente dopo ogni sessione di forza o velocità, potresti 'spegnere' i segnali che portano ai miglioramenti a lungo termine. Usa la crioterapia solo durante blocchi di gare ravvicinate o quando il recupero immediato è prioritario rispetto all'adattamento cronico.", 
      variant: "default" 
    },
    { 
      heading: "Drenaggio Linfatico e Compressione", 
      body: "A differenza del sistema circolatorio, il sistema linfatico non ha una pompa (il cuore). Si affida alla contrazione muscolare per muovere i liquidi. \n\n- **Abbigliamento a Compressione:** Calze e gambali esercitano una pressione graduata che facilita il ritorno venoso e il drenaggio dei fluidi interstiziali dalle gambe. \n- **Pressoterapia:** L'uso di stivali a compressione pneumatica simula questo processo in modo potenziato, riducendo drasticamente la sensazione di gambe pesanti e accelerando il turnover dei metaboliti della fatica.", 
      variant: "default" 
    },
    {
      heading: "Il Sonno: Il Doping Naturale",
      body: "Il 90% della riparazione fisica avviene durante il sonno profondo (fase N3). In questa fase, l'ipofisi rilascia il picco massimo di Ormone della Crescita (GH). Se dormi meno di 7-8 ore, stai sabotando attivamente il tuo allenamento. Nessun integratore o massaggio può sostituire i benefici ormonali di una notte di sonno di qualità.",
      variant: "tip"
    },
    {
      heading: "Attenzione: Anti-infiammatori e Guarigione",
      body: "Evita l'uso sistematico di FANS (Ibuprofene, Aspirina) per gestire i doms. Questi farmaci bloccano le prostaglandine, fondamentali per la riparazione dei tessuti e l'adattamento muscolare. Il dolore muscolare del giorno dopo è un segnale, non un nemico da mettere a tacere a ogni costo.",
      variant: "warning"
    },
    { 
      heading: "Checklist: Protocollo di Recupero Pro", 
      body: "Massimizza ogni ora post-allenamento.", 
      variant: "checklist", 
      listItems: [
        "Reidratazione: Bevi 1.5L di acqua per ogni kg di peso perso durante la corsa.", 
        "Alimentazione: Consuma 20-30g di proteine e 60-80g di carboidrati entro 45 minuti.", 
        "Mobilità: 10 minuti di foam rolling per ridurre la tensione fasciale, non il dolore muscolare.", 
        "Mindfulness: 5 minuti di respirazione diaframmatica per attivare il nervo vago.",
        "Compressione: Indossa calze a compressione per 2-4 ore dopo i lunghi o gli allenamenti intensi."
      ] 
    }
  ],
  hubCategory: "recovery",
};
