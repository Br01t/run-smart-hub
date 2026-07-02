import { GuideContent } from "@/types/guide";
import guideRunningWatches from "@/assets/guide-running-watches.webp";

export const runningWatches: GuideContent = {
  title: "Migliori Orologi Running 2026: Guida GPS per la Corsa",
  seoTitle: "Miglior Orologio Running 2026: Guida GPS per Correre",
  seoDescription: "Guida ai migliori orologi per la corsa 2026: confronto GPS multi-band, cardio HRV, batteria e potenza. Trova l'orologio running giusto per te fra Garmin, Coros, Suunto.",
  keywords: ["orologi per la corsa", "orologio running", "orologi per correre", "miglior orologio running", "migliore orologio per correre", "migliori orologi per running", "orologio corsa gps", "orologio gps running"],
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
    { to: "/tools/shoes", label: "Shoe Finder Personalizzato" },
    { to: "/tools/calories", label: "Calcolatore Calorie" },
    { to: "/tools/hydration", label: "Calcolatore Idratazione" },
    { to: "/quiz", label: "Quiz Profilo Runner" },
  ],
  relatedGuides: [
    { slug: "running-heart-rate-zones", label: "Allenamento con le Zone Cardio" },
    { slug: "trail-running-beginners", label: "Iniziare con il Trail Running" },
    { slug: "marathon-training", label: "Guida alla Maratona" },
    { slug: "running-cadence", label: "Cadenza di Corsa Ottimale" },
  ],
  faq: [
    { q: "Qual è il miglior orologio GPS per la corsa nel 2026?", a: "Per la maggior parte dei runner amatoriali Garmin Forerunner 255 e Coros Pace 3 offrono il miglior rapporto qualità-prezzo: GNSS multi-band, HRV, autonomia 30+ ore in GPS. Per il trail e ultra il Garmin Fenix 7 o Suunto Vertical con mappe topografiche." },
    { q: "Garmin o Coros: quale scegliere?", a: "Garmin ha l'ecosistema software più ricco (Garmin Connect, Training Readiness, mappe). Coros è più leggero, costa meno e dura più a lungo in batteria. Se vuoi metriche e community: Garmin. Se vuoi essenzialità e prezzo: Coros." },
    { q: "Servono davvero le piastre cardio toraciche se ho l'orologio?", a: "Sì, per le ripetute e gli intervalli brevi. Il sensore ottico al polso ha un ritardo di 10-15 secondi e soffre di 'cadence lock'. La fascia toracica (Polar H10, Garmin HRM-Pro) misura l'attività elettrica del cuore ed è istantanea." },
    { q: "Quanti satelliti GPS sono necessari per una traccia precisa?", a: "Almeno 4 per il fix base, ma per precisione sub-metrica servono 8+ satelliti su frequenze multiple (L1+L5). Aspetta che l'icona GPS sia fissa verde prima di premere Start." },
    { q: "Il VO2 Max stimato dall'orologio è affidabile?", a: "È utile per monitorare i trend nel tempo (±3-5 ml/kg/min vs test di laboratorio). Non usarlo come valore assoluto, ma come indicatore di miglioramento o calo di forma." },
  ],
  datePublished: "2026-04-15",
  dateModified: "2026-06-05",
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
