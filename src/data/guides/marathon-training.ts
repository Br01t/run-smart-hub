import { GuideContent } from "@/types/guide";
import guideMarathon from "@/assets/guide-marathon.webp";

export const marathonTraining: GuideContent = {
  title: "Guida alla Maratona per Principianti",
  seoTitle: "Guida Allenamento Maratona 2026: Scienza e Strategia per i 42,2K",
  seoDescription: "La tabella di marcia completa per la tua prima maratona. Blocchi di allenamento scientifici, strategie di tapering, ritmo gara e come evitare 'Il Muro'.",
  keywords: ["allenamento maratona principianti", "tabella maratona", "tapering maratona", "ritmo gara maratona", "evitare il muro maratona", "alimentazione maratona"],
  description: "Tutto quello che devi sapere per allenarti per la tua prima maratona: piani, ritmo, nutrizione e attrezzatura.",
  tags: ["energia", "carboidrati", "scarpe", "abbigliamento", "top-apparel-2026"],
  heroImage: guideMarathon,
  readTime: "12 min di lettura",
  keyTakeaways: [
    "La maratona è una gara di gestione del glicogeno: l'efficienza metabolica conta più della velocità pura",
    "Struttura l'allenamento in blocchi (Base, Forza, Specifico, Taper) per massimizzare la supercompensazione",
    "Il 'Muro' al km 32 è una crisi fisiologica evitabile con il corretto Gut Training e carboidrati (60-90g/h)",
    "Il Tapering riduce la fatica accumulata senza perdere gli adattamenti cardiovascolari",
    "Il Negative Split (seconda metà più veloce) è la strategia statisticamente più efficace per i record personali",
  ],
  relatedTools: [
    { to: "/tools/calories", label: "Calcolatore Calorie" },
    { to: "/tools/hydration", label: "Calcolatore Idratazione" },
  ],
  relatedGuides: [
    { slug: "running-nutrition", label: "Nutrizione per la Corsa: Cosa Mangiare" },
    { slug: "choosing-running-shoes", label: "Come Scegliere le Scarpe da Corsa" },
  ],
  sections: [
    { 
      heading: "Fisiologia dei 42,2K: I Limiti della Performance", 
      body: "Correre una maratona non è semplicemente correre a lungo; è un esercizio di gestione dei limiti fisiologici. Tre sono i pilastri che determinano il tuo tempo finale: \n1. **VO2 Max:** Il tuo 'soffitto' aerobico.\n2. **Soglia del Lattato:** L'intensità massima che puoi mantenere senza accumulare acido lattico in modo esponenziale.\n3. **Economia di Corsa:** Quanta energia consumi a una determinata velocità.\n\n**Il Fattore Glicogeno:** Il corpo umano può immagazzinare circa 1800-2000 kcal di glicogeno (tra fegato e muscoli). Una maratona corsa a ritmo intenso ne richiede circa 2500-3000. La differenza deve essere colmata bruciando grassi (Fat Oxidation) e integrando carboidrati durante la corsa. L'allenamento serve a innalzare la tua capacità di ossidare grassi a ritmi elevati, preservando il glicogeno per gli ultimi 10 km.", 
      variant: "highlight" 
    },
    { 
      heading: "Periodizzazione dell'Allenamento: I Quattro Blocchi", 
      body: "Un piano di 16-20 settimane deve essere strutturato in fasi progressive per evitare l'overtraining e piccare al momento giusto.\n\n- **Fase di Base (Settimane 1-6):** Focus sullo sviluppo della rete capillare e dei mitocondri. Chilometraggio facile (Zona 2) e costante.\n- **Fase di Forza (Settimane 7-10):** Introduzione di ripetute in salita e sessioni di forza funzionale per rinforzare tendini e legamenti in vista dei lunghi.\n- **Fase Specifica (Settimane 11-15):** Il cuore del piano. Allenamenti a Ritmo Maratona (RMG) inseriti all'interno dei lunghi domenicali per abituare il corpo alla specifica biomeccanica di gara.\n- **Fase di Taper (Ultime 2-3 settimane):** Riduzione del volume per permettere la riparazione dei tessuti e il caricamento massimo delle scorte di glicogeno.", 
      variant: "default" 
    },
    { 
      heading: "Gut Training: Allena il tuo Intestino", 
      body: "Molti runner falliscono per problemi gastrointestinali, non per mancanza di fiato. L'intestino è un organo allenabile. \n\n- **Capacità di Assorbimento:** Durante la corsa, il sangue viene deviato dai visceri verso i muscoli, rendendo difficile la digestione. Praticare il 'Gut Training' significa consumare quantità crescenti di carboidrati durante gli allenamenti lunghi (partendo da 30g/h fino ad arrivare a 60-90g/h). Questo aumenta il numero di trasportatori di glucosio e fruttosio (SGLT1 e GLUT5) nell'intestino, permettendoti di assorbire l'energia senza dolori o nausea il giorno della gara.", 
      variant: "default" 
    },
    { 
      heading: "La Scienza del Tapering: Supercompensazione Finale", 
      body: "Il Tapering non è riposo passivo. È una riduzione del volume (km totali) mantenendo però l'intensità (velocità) e la frequenza. Gli studi dimostrano che un taper ben eseguito può migliorare la performance finale del 3-5%.\n\n**Cosa succede al corpo?** Il volume plasmatico si espande, il conteggio dei globuli rossi si stabilizza, le scorte di glicogeno muscolare si riempiono ai livelli massimi storici e lo stress psicologico diminuisce. È il momento in cui il corpo 'incassa' tutto il lavoro duro dei mesi precedenti.", 
      variant: "default", 
      listItems: [
        "Economia di Corsa: Migliora fino al 2% durante il taper grazie alla riparazione delle micro-lesioni muscolari.", 
        "Enzimi Ossidativi: La loro attività aumenta, permettendoti di bruciare carburante in modo più efficiente.", 
        "Stato Ormonale: Il rapporto Testosterone/Cortisolo migliora sensibilmente, favorendo uno stato anabolico.",
        "Buffer Mentale: Il recupero del sistema nervoso centrale (SNC) ti permette di gestire meglio il dolore negli ultimi 10 km."
      ] 
    },
    {
      heading: "Metabolic Drift e Termoregolazione",
      body: "Durante una maratona, anche mantenendo lo stesso ritmo, la frequenza cardiaca tende a salire (Cardiovascular Drift). Questo accade a causa della disidratazione e dell'aumento della temperatura interna. Il corpo deve pompare sangue verso la pelle per raffreddarsi, sottraendolo ai muscoli. \n\n**Strategia:** Una corretta idratazione con elettroliti fin dai primi km può mitigare questo effetto, mantenendo il volume del sangue costante e permettendo al cuore di lavorare in modo più efficiente fino alla fine.",
      variant: "default"
    },
    {
      heading: "Neuromuscular Fatigue: Quando le Gambe Non Rispondono",
      body: "Dopo il km 30, la fatica non è solo metabolica (mancanza di zuccheri), ma anche neuromuscolare. Il cervello riduce il segnale elettrico inviato ai muscoli per proteggerli da danni eccessivi. \n\n**Come contrastarla:** L'allenamento della forza esplosiva (pliometria leggera) e le corse lunghe servono a ritardare questo momento, insegnando alle fibre muscolari a lavorare in modo coordinato anche sotto estrema fatica.",
      variant: "default"
    },
    {
      heading: "Pacing: La Scienza del Negative Split",
      body: "Statistiche alla mano, i record del mondo di maratona sono quasi tutti ottenuti con un 'Negative Split' (la seconda metà della gara corsa più velocemente della prima). \n\n- **Perché funziona:** Partire leggermente più cauti (5-10 secondi al km più lenti del target) preserva le scorte di glicogeno e riduce l'accumulo di calore precoce. Arrivare alla mezza maratona sentendosi 'troppo bene' è il miglior indicatore di una prestazione solida. Gli ultimi 12 km sono una gara a sé stante: avere ancora energia mentale e fisica per accelerare in questa fase ti permette di superare centinaia di runner che hanno 'cotto' le gambe nei primi 10 km.",
      variant: "default"
    },
    {
      heading: "La Biomeccanica del 'Muro' al Km 32",
      body: "Oltre alla fine delle scorte di zuccheri, il muro è causato dal danno meccanico alle fibre muscolari dovuto a migliaia di impatti eccentrici. I muscoli diventano meno elastici e richiedono più ossigeno per produrre la stessa forza. Questo aumenta drasticamente lo sforzo percepito. L'unico rimedio è la costanza nei lunghi allenamenti dei mesi precedenti, che creano una 'armatura' protettiva intorno alle fibre.",
      variant: "default"
    },
    {
      heading: "La Psicologia della Maratona: Il Muro Mentale",
      body: "Il 'Muro' è spesso una combinazione di deplezione di glicogeno e fatica centrale. Il cervello cerca di farti rallentare per sicurezza. \n\n**Tecniche di Coping:** \n- **Chunking:** Dividi la gara in segmenti (es. quattro blocchi da 10 km).\n- **Self-talk Positivo:** Focalizzati sulla meccanica (spalle basse, cadenza alta) invece che sul dolore.\n- **Associazione vs Dissociazione:** Gli atleti d'élite 'associano' (ascoltano i segnali del corpo per regolarli); i principianti spesso 'dissociano' (ascoltano musica per ignorare il dolore). Entrambe le tattiche sono valide a seconda della fase della gara.",
      variant: "tip"
    },
    {
      heading: "Recupero Post-Gara: I Primi 14 Giorni",
      body: "Hai appena concluso una maratona: il tuo corpo è in uno stato di infiammazione acuta e il sistema immunitario è soppresso (Open Window theory). \n\n- **Giorni 1-3:** Riposo totale. Camminate leggere e molta idratazione. Evita massaggi profondi che potrebbero danneggiare fibre già traumatizzate.\n- **Giorni 4-7:** Cross-training leggero (nuoto o bici senza resistenza). \n- **Giorni 8-14:** Rientro graduale alla corsa (jogging di 20-30 minuti). Il danno cellulare richiede fino a 4 settimane per risolversi completamente; non avere fretta di tornare agli allenamenti intensi.",
      variant: "default"
    },
    {
      heading: "L'Errore del 'Carbon Plate' nei Debuttanti",
      body: "Le scarpe con piastra in carbonio sono miracolose per la velocità, ma aumentano il carico meccanico su polpacci e tendine d'Achille. Se non le hai testate a fondo nei lunghi o se la tua muscolatura non è pronta, potrebbero causare crampi precoci o infortuni da stress osseo proprio durante la gara. La maratona non è il momento per esperimenti.",
      variant: "warning"
    },
    { 
      heading: "Checklist Definitiva: Le Ultime 48 Ore", 
      body: "Segui questo protocollo professionale per non lasciare nulla al caso.", 
      variant: "checklist", 
      listItems: [
        "Carb-Loading: Punta a 10g di carboidrati per kg di peso. Esempio: 700g per un atleta di 70kg.", 
        "Elimina le Fibre: Riduci drasticamente frutta e verdura fibrosa per evitare problemi intestinali in corsa.", 
        "Pianificazione Logistica: Pettorale, scarpe e gel pronti la sera prima. Riduci lo stress decisionale.", 
        "Idratazione Salata: Un carico di sodio la sera prima aiuta a trattenere i liquidi vitali.",
        "Vaselina e Protezione: Applica crema anti-sfregamento in ogni zona critica. 4 ore di attrito non perdonano."
      ] 
    }
  ],
  hubCategory: "apparel",
};
