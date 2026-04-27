import { GuideContent } from "@/types/guide";
import guideRunningWatches from "@/assets/guide-running-watches.webp";

export const runningWatches: GuideContent = {
  title: "Migliori Orologi GPS per la Corsa: Guida all'Acquisto",
  seoTitle: "Migliori Orologi Corsa 2026: Guida a GPS e Tecnologia",
  seoDescription: "Scegli l'orologio da corsa giusto. Analizziamo il GNSS Multi-Band, la prontezza all'allenamento HRV, la durata della batteria e la scienza del cardio ottico per i runner.",
  keywords: ["migliori orologi corsa 2026", "precisione orologio GPS", "GNSS multi-band corsa", "punteggio prontezza HRV", "misuratore potenza corsa", "Garmin vs Coros vs Suunto"],
  description: "Una guida completa e indipendente per scegliere l'orologio GPS da corsa giusto. Analizziamo caratteristiche, precisione, batteria e rapporto qualità-prezzo per ogni budget.",
  tags: ["accessories", "running", "watches", "top-gear-2026"],
  heroImage: guideRunningWatches,
  readTime: "7 min di lettura",
  keyTakeaways: [
    "Il GNSS Multi-Band (L1+L5) garantisce la massima precisione del ritmo in città e boschi",
    "La Variabilità della Frequenza Cardiaca (HRV) è il miglior indicatore di recupero del sistema nervoso",
    "I sensori ottici da polso sono soggetti a 'cadence lock': usa la fascia per gli intervalli",
    "La Potenza di Corsa (Watt) è una metrica di sforzo istantanea, superiore al ritmo in salita",
    "Le stime del VO2 Max e del Tempo di Recupero si basano su algoritmi Firstbeat scientificamente validati",
  ],
  relatedTools: [
    { to: "/tools/calories", label: "Calcolatore Calorie" },
    { to: "/tools/hydration", label: "Calcolatore Idratazione" },
  ],
  relatedGuides: [
    { slug: "running-heart-rate-zones", label: "Allenamento con le Zone Cardio" },
    { slug: "trail-running-beginners", label: "Iniziare con il Trail Running" },
  ],
  sections: [
    { 
      heading: "La Scienza: Dinamiche GNSS e Precisione Satellitare", 
      body: "I moderni orologi GPS utilizzano il GNSS Multi-Band (Global Navigation Satellite System) per tracciare la posizione. Mentre i vecchi orologi usavano solo la frequenza L1, i nuovi modelli si agganciano anche alla L5. \n\n**Perché è importante?** La frequenza L5 è in grado di distinguere tra il segnale diretto dal satellite e quello riflesso da edifici alti o alberi (errore multipath). Questo permette di avere un ritmo istantaneo (Pace) estremamente stabile anche durante le corse nelle 'giungle urbane' o nei trail più fitti, dove il segnale rimbalza ovunque. Un orologio che si connette simultaneamente a GPS, GLONASS e Galileo garantisce una copertura globale senza zone d'ombra.", 
      variant: "highlight" 
    },
    { 
      heading: "Fisiologia: HRV e Prontezza all'Allenamento", 
      body: "L'orologio non misura solo i passi; monitora lo stato del tuo Sistema Nervoso Autonomo attraverso la Variabilità della Frequenza Cardiaca (HRV). \n\n- **Equilibrio Simpatico/Parasimpatico:** La HRV è il tempo millimetrico che intercorre tra ogni battito cardiaco. Una HRV alta e variabile indica un sistema nervoso 'fresco' e pronto (Parasimpatico dominante). Una HRV bassa e piatta indica stress fisico o psicologico (Simpatico dominante). \n- **Algoritmi di Recupero:** Integrando HRV, qualità del sonno e carico di allenamento recente, l'orologio genera un 'Punteggio di Prontezza'. Seguire questo dato aiuta a evitare il sovrallenamento (Overtraining), suggerendo quando è il momento di spingere e quando è meglio fare una sessione di scarico o riposo.", 
      variant: "default" 
    },
    { 
      heading: "Cardio Ottico vs Fascia Cardio: La Verità Tecnologica", 
      body: "La tecnologia PPG (fotopletismografia) usa luci LED verdi per misurare il volume di sangue che scorre nei capillari del polso. \n\n- **Il Limite del Polso:** Durante la corsa, il movimento del braccio e la cadenza possono creare interferenze. Il 'Cadence Lock' è un errore comune dove l'orologio aggancia il ritmo dei tuoi passi (es. 170 spm) invece dei battiti cardiaci (es. 150 bpm). \n- **Il Gold Standard:** Per sessioni di qualità o intervalli brevi, la fascia cardio toracica (che misura l'attività elettrica del cuore, ECG) rimane insuperabile. La fascia è istantanea, mentre il sensore al polso ha un ritardo di 10-15 secondi nel rilevare le variazioni rapide di intensità.", 
      variant: "default" 
    },
    { 
      heading: "Metriche Avanzate: Potenza e VO2 Max", 
      body: "Oltre alla frequenza cardiaca, gli orologi moderni stimano parametri fisiologici complessi.\n\n- **Running Power (Watt):** Misura il lavoro meccanico istantaneo. A differenza della FC, che richiede tempo per salire, la potenza risponde immediatamente se acceleri o se incontri una salita. \n- **Stima VO2 Max:** Utilizzando la relazione tra ritmo e battiti (Algoritmi Firstbeat), l'orologio stima la tua massima capacità di consumo di ossigeno. Sebbene non sia precisa come un test di laboratorio con maschera, è una metrica eccellente per monitorare i trend di fitness nel lungo periodo.", 
      variant: "default", 
      listItems: [
        "Durata Batteria: I modelli Ultra raggiungono le 60-100 ore in modalità GPS costante.", 
        "Mappe Offline: Fondamentali per esplorare nuovi percorsi senza dipendere dal telefono.", 
        "Saturazione Ossigeno (SpO2): Utile per chi si allena in quota o per monitorare apnee notturne.",
        "Dinamiche di Corsa: Misurano tempo di contatto al suolo e oscillazione verticale."
      ] 
    },
    {
      heading: "Consiglio: La Regola del 'Segnale GPS'",
      body: "Non premere mai 'Start' finché l'icona del GPS non è fissa e verde. Iniziare a correre mentre l'orologio sta ancora cercando i satelliti causerà errori di tracciamento e ritmi sballati per i primi 2-3 chilometri della tua sessione.",
      variant: "tip"
    },
    {
      heading: "Attenzione alla Vestibilità",
      body: "Per una precisione cardio accettabile, l'orologio deve essere stretto a sufficienza da non scivolare sul polso, ma non così tanto da bloccare la circolazione. Posizionalo circa due dita sopra l'osso del polso per evitare che le ossa interferiscano con la luce dei sensori.",
      variant: "warning"
    },
    { 
      heading: "Checklist: Scegli l'Orologio Giusto", 
      body: "Parametri da valutare prima dell'acquisto.", 
      variant: "checklist", 
      listItems: [
        "Budget: La fascia media (250-400€) è il miglior compromesso tra funzioni e prezzo.", 
        "Autonomia: Se corri trail o ultra, punta a modelli con almeno 40 ore di GPS attivo.", 
        "Ecosistema App: Verifica la facilità d'uso di Garmin Connect, Coros App o Suunto App.", 
        "Design: Schermi AMOLED per la visibilità urbana, MIP per la leggibilità sotto il sole diretto.",
        "Compatibilità: Assicurati che supporti sensori esterni Bluetooth e ANT+."
      ] 
    }
  ],
  hubCategory: "gear",
};
