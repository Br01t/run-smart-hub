import { GuideContent } from "@/types/guide";
import guideStretching from "@/assets/guide-stretching.webp";

export const stretchingForRunners: GuideContent = {
  title: "La Guida allo Stretching per il Runner",
  seoTitle: "Stretching per Runner 2026: La Scienza della Mobilità",
  seoDescription: "Sblocca la tua falcata. Scopri perché lo stretching statico prima della corsa uccide la performance, la scienza della rigidità tendinea e le migliori routine di mobilità post-corsa.",
  keywords: ["stretching per runner", "stretching dinamico vs statico", "mobilità flessori anca", "flessibilità corsa", "prevenire infortuni corsa", "yoga per runner"],
  description: "Stretching dinamico vs statico: quando farlo, le migliori routine e come la flessibilità influisce sull'efficienza della corsa.",
  tags: ["recovery", "muscles", "running"],
  heroImage: guideStretching,
  readTime: "7 min di lettura",
  keyTakeaways: [
    "Lo stretching dinamico pre-corsa aumenta la temperatura tissutale e la velocità di conduzione nervosa",
    "La rigidità tendinea è necessaria per l'economia di corsa: lo statico pre-gara la riduce",
    "La fascia richiede idratazione e carichi lenti (Creep) per cambiare struttura a lungo termine",
    "Il PNF (Proprioceptive Neuromuscular Facilitation) è il metodo più efficace per guadagni rapidi di ROM",
    "La mobilità dell'alluce e della caviglia sono i predittori primari della prevenzione infortuni al piede",
  ],
  relatedTools: [
    { to: "/tools/bmi", label: "Calcolatore BMI" },
    { to: "/tools/protein", label: "Calcolatore Proteine" },
  ],
  relatedGuides: [
    { slug: "muscle-recovery", label: "Recupero Muscolare dopo la Corsa" },
    { slug: "injury-prevention", label: "Guida alla Prevenzione Infortuni" },
  ],
  sections: [
    { 
      heading: "La Scienza: Ciclo Allungamento-Accorciamento e Stiffness", 
      body: "La corsa è biomeccanicamente una successione di balzi. I tuoi tendini agiscono come elastici che immagazzinano energia nella fase di impatto e la rilasciano nella fase di stacco (Ciclo Allungamento-Accorciamento). \n\n**Il Paradosso della Rigidità (Stiffness):** Per essere un runner efficiente, hai bisogno di tendini *rigidi*. Una stiffness elevata permette un trasferimento di forza istantaneo e una migliore Economia di Corsa. Lo stretching statico prolungato prima di correre 'ammorbidisce' queste molle biologiche, riducendo la potenza esplosiva e aumentando il tempo di contatto al suolo. La mobilità pre-corsa deve quindi essere **Dinamica**: oscillazioni, andature e rotazioni che preparano il sistema nervoso senza compromettere la tensione elastica dei tendini.", 
      variant: "highlight" 
    },
    { 
      heading: "Neurofisiologia: Il Riflesso da Stiramento", 
      body: "Ogni muscolo contiene dei sensori chiamati 'fusi musaddominali'. Quando allunghi un muscolo bruscamente, questi sensori inviano un segnale al midollo spinale che risponde ordinando al muscolo di contrarsi per proteggersi (riflesso miotatico). \n\n**Il Metodo PNF:** Per 'aggirare' questo sistema, gli atleti usano la Facilitazione Neuromuscolare Propriocettiva. Contraendo il muscolo che stai cercando di allungare per 6-10 secondi e poi rilassandolo, sfrutti l'organo tendineo del Golgi per indurre un rilassamento profondo (inibizione autogena), permettendo di raggiungere nuovi range di movimento che lo stretching passivo non può toccare.", 
      variant: "default" 
    },
    { 
      heading: "Fascia e Creep: Il Rimodellamento a Lungo Termine", 
      body: "La fascia è una rete di tessuto connettivo che avvolge ogni muscolo. Non è elastica come il muscolo, ma è viscoelastica. \n\n- **Il Fenomeno del Creep:** Per indurre un cambiamento permanente nella fascia (deformazione plastica), è necessario applicare una tensione costante e moderata per almeno 60-90 secondi. Sotto questo carico lento, le fibre di collagene iniziano a scivolare e a riorganizzarsi. Questo è il motivo per cui lo stretching 'mordi e fuggi' di 10 secondi non produce benefici strutturali a lungo termine, ma fornisce solo un sollievo neurale temporaneo.", 
      variant: "default" 
    },
    { 
      heading: "Neural Flossing: Liberare i Nervi", 
      body: "Molti runner soffrono di una sensazione di 'femorali corti' che non migliora mai. Spesso non è tensione muscolare, ma scarsa mobilità del nervo sciatico (tensione neurale). I nervi devono poter scivolare liberamente attraverso i canali muscolari. Le tecniche di 'Neural Flossing' o 'Slumping' permettono di far scorrere il nervo senza metterlo in tensione eccessiva, risolvendo spesso dolori cronici che lo stretching tradizionale non riesce a trattare.", 
      variant: "default", 
      listItems: [
        "Dorsiflessione della Caviglia: Un ROM limitato è la causa numero uno di periostite e fascite plantare.", 
        "Mobilità Toracica: Fondamentale per una respirazione profonda e un'oscillazione delle braccia efficiente.", 
        "Idratazione: La fascia disidratata diventa 'appiccicosa'; bevi acqua per mantenere i tessuti scorrevoli.",
        "Inibizione Reciproca: Contrai il muscolo opposto (es. il quadricipite) per forzare il rilassamento del muscolo target (femorale)."
      ] 
    },
    {
      heading: "Stretching Post-Corsa e Sistema Parasimpatico",
      body: "Lo stretching statico e rilassato dopo l'allenamento ha un beneficio che va oltre la flessibilità: segnala al cervello che l'emergenza (l'allenamento) è finita. Questo attiva il sistema nervoso parasimpatico, abbassa i livelli di cortisolo e accelera l'inizio dei processi di riparazione tissutale. È il ponte tra la fase di stress e la fase di recupero.",
      variant: "tip"
    },
    {
      heading: "Avviso: Quando lo Stretching è Dannoso",
      body: "Mai fare stretching intenso su una lesione muscolare acuta (strappo o stiramento). Le fibre danneggiate hanno bisogno di riavvicinarsi per guarire; allungarle con forza può separare i margini della lesione e aumentare il tessuto cicatriziale, peggiorando la situazione a lungo termine.",
      variant: "warning"
    },
    { 
      heading: "Checklist: La Tua Routine di Mobilità", 
      body: "Struttura il tuo approccio per risultati duraturi.", 
      variant: "checklist", 
      listItems: [
        "Pre-Corsa Dinamico: 10 minuti di leg swings, affondi e rotazioni del tronco.", 
        "Post-Corsa Statico: Focus su Flessori dell'anca (psoas) e polpacci, tenute da 60 secondi.", 
        "Sera (Opzionale): 2 minuti di 'Deep Squat' per resettare la mobilità di bacino e caviglie.", 
        "Respirazione Diaframmatica: Espira profondamente mentre entri nella fase di allungamento.",
        "Ascolto: Non forzare mai fino al dolore acuto; cerca una sensazione di 'tensione piacevole'."
      ] 
    }
  ],
  hubCategory: "recovery",
};
