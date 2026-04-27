import { GuideContent } from "@/types/guide";
import guideRecovery from "@/assets/guide-recovery.webp";

export const muscleRecovery: GuideContent = {
  title: "Recupero Muscolare dopo la Corsa",
  seoTitle: "Recupero Muscolare per Runner: Guida Scientifica 2026",
  seoDescription: "Massimizza i guadagni dell'allenamento con il recupero basato sulle evidenze. Scopri HRV, SMR, sintesi proteica e la scienza del sonno profondo.",
  keywords: ["recupero muscolare", "recupero runner", "allenamento HRV", "scienza foam rolling", "nutrizione post-corsa", "prevenzione DOMS"],
  description: "Strategie scientifiche per recuperare più velocemente: stretching, foam rolling, nutrizione e sonno.",
  tags: ["recupero", "massaggio", "proteine", "top-recovery-2026"],
  heroImage: guideRecovery,
  readTime: "12 min di lettura",
  keyTakeaways: [
    "Il recupero è il momento in cui il corpo si adatta e diventa più forte (Supercompensazione)",
    "Il sonno a onde lente (N3/N4) è responsabile del 95% del rilascio dell'ormone della crescita",
    "Il foam rolling (SMR) riduce i DOMS e migliora il range di movimento senza perdita di forza",
    "La Variabilità della Frequenza Cardiaca (HRV) è la metrica più oggettiva per il recupero sistemico",
  ],
  relatedTools: [
    { to: "/tools/protein", label: "Calcolatore Proteine" },
    { to: "/tools/hydration", label: "Calcolatore Idratazione" },
  ],
  relatedGuides: [
    { slug: "supplements-for-runners", label: "Integratori Essenziali per Runner" },
    { slug: "injury-prevention", label: "Guida alla Prevenzione Infortuni" },
  ],
  sections: [
    { 
      heading: "Il Principio della Supercompensazione", 
      body: "L'allenamento è un processo catabolico (demolisce i tessuti). Il progresso avviene solo durante la fase di recupero anabolico. Il modello della 'Supercompensazione' illustra che se applichi uno stress e consenti un recupero adeguato, il corpo ritorna a un livello di fitness superiore. Se ti alleni troppo presto, scendi nell'overtraining; se aspetti troppo, i guadagni svaniscono.", 
      variant: "highlight" 
    },
    { 
      heading: "Architettura del Sonno: Il Miglior Potenziatore di Performance", 
      body: "Ricerche pubblicate sul Journal of Science and Medicine in Sport suggeriscono che la privazione del sonno riduce il tempo all'esaurimento fino al 10%. \n\n- **Stadi Non-REM 3 e 4:** È qui che avviene la magia. Il flusso sanguigno viene reindirizzato dal cervello ai muscoli, portando ossigeno e nutrienti che facilitano la riparazione dei tessuti. \n- **Regolazione Ormonale:** Durante il sonno profondo, i livelli di cortisolo calano e l'ormone della crescita ha dei picchi. Interrompere questo ciclo porta a insulino-resistenza e compromette lo stoccaggio del glicogeno.", 
      variant: "default" 
    },
    { 
      heading: "Rilascio Miofasciale e Drenaggio Linfatico", 
      body: "Il foam rolling (Self-Myofascial Release) non 'scioglie' effettivamente i nodi (la fascia è troppo forte). Invece, comunica con il sistema nervoso per diminuire la tensione muscolare (inibizione autogena). \n\n**Recupero Attivo vs Passivo:** \n- **Attivo:** 20 minuti di ciclismo in Zona 1 o camminata aumentano il flusso sanguigno e aiutano la rimozione del lattato più efficacemente del riposo completo. \n- **Crioterapia:** L'uso di bagni di ghiaccio post-allenamento può smorzare l'infiammazione. Nota: l'infiammazione acuta è un segnale di adattamento. Per guadagni di forza, limita il ghiaccio; per eventi di endurance di più giorni, usalo per gestire il dolore.", 
      variant: "default", 
      listItems: [
        "Terapia a Compressione: riduce il gonfiore e migliora il ritorno venoso", 
        "Monitoraggio HRV: usa una fascia cardio per monitorare l'equilibrio tra sistema nervoso simpatico e parasimpatico",
        "Carico Tendineo: a differenza dei muscoli, i tendini hanno bisogno di 48-72 ore di 'tempo di scarico' per rimodellare il collagene dopo corse ad alto impatto.",
        "Sauna e Calore: aumentano il volume plasmatico e le proteine da shock termico, migliorando l'efficienza cardiovascolare."
      ] 
    },
    {
      heading: "Finestra Nutrizionale per l'Iper-Recupero",
      body: "La 'Finestra Metabolica' è più ampia di quanto si pensasse, ma i primi 45-60 minuti rimangono critici per la risintesi del glicogeno. \n\n- **Il Rapporto 3:1:** Consuma 1,2 g di carboidrati per kg di peso corporeo per reintegrare il glicogeno muscolare, abbinati a 0,4 g/kg di proteine ad alto contenuto di leucina per innescare la Sintesi Proteica Muscolare (MPS). \n- **Idratazione:** Per ogni kg di peso perso durante una corsa, consuma 1,5 L di acqua arricchita con sodio per garantire la reidratazione cellulare.",
      variant: "tip"
    },
    { 
      heading: "Errori Comuni nel Recupero", 
      body: "Molti runner scambiano il 'riposo' con il 'recupero'. Il vero recupero è proattivo. \n\n- **Abuso di FANS:** Assumere ibuprofene dopo ogni corsa inibisce il processo di riparazione guidato dalle prostaglandine, indebolendo potenzialmente l'adattamento a lungo termine. \n- **Trascurare la Mente:** Lo stress psicologico (lavoro, famiglia) utilizza le stesse risorse fisiologiche dello stress fisico. Se la vita è stressante, il tuo corpo ha bisogno di più tempo per recuperare dalle corse.", 
      variant: "warning" 
    },
    { 
      heading: "Protocollo Professionale: Checklist Passo-Passo", 
      body: "Segui questa sequenza dopo ogni sessione intensa o corsa lunga per massimizzare il tuo ritorno sull'investimento.", 
      variant: "checklist", 
      listItems: [
        "Defaticamento Post-Corsa: 5-10 minuti di camminata molto leggera subito dopo essersi fermati.", 
        "Rifornimento entro 60 Minuti: shake o pasto con rapporto Carboidrati:Proteine di 3:1.", 
        "Lavoro sui Tessuti Molli: 10 minuti di SMR concentrandosi su polpacci, quadricipiti e glutei.",
        "Contrasto Termico: doccia alternata caldo/freddo per stimolare la circolazione periferica.",
        "La Stanza Buia: 8+ ore di sonno in una stanza sotto i 19°C."
      ] 
    },
  ],
  hubCategory: "recovery",
};
