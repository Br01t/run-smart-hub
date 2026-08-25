import { GuideContent } from "@/types/guide";
import guideCadence from "@/assets/guide-cadence.webp";

export const runningCadence: GuideContent = {
  title: "Cadenza nella Corsa: Perché i Passi al Minuto Contano",
  seoTitle: "Cadenza Corsa: Quanti Passi al Minuto Servono Davvero",
  seoDescription: "Quanti passi al minuto servono davvero? Scopri se i 180 spm valgono per te, come misurare la tua cadenza in 60 secondi e il metodo +5% per aumentarla senza infortuni.",
  keywords: ["cadenza corsa", "180 spm corsa", "aumentare passi al minuto", "oscillazione verticale corsa", "infortunio overstriding", "efficienza corsa"],
  description: "Scopri perché la cadenza influisce sulle prestazioni, il riferimento dei 180 spm e come aumentare in sicurezza il numero di passi.",
  tags: ["running", "accessories"],
  heroImage: guideCadence,
  readTime: "7 min di lettura",
  keyTakeaways: [
    "La cadenza elevata (170-190 spm) riduce l'oscillazione verticale e lo spreco energetico",
    "Aumentare i passi del 5-10% riduce il carico sulle ginocchia fino al 20%",
    "Il tempo di contatto al suolo (GCT) è il miglior indicatore di efficienza elastica",
    "Non esiste un numero magico universale, ma una zona di efficienza basata sull'altezza",
    "La transizione verso una cadenza più alta deve essere graduale per proteggere i polpacci",
  ],
  relatedTools: [
    { to: "/tools/calories", label: "Calcolatore Calorie" },
    { to: "/tools/bmi", label: "Calcolatore BMI" },
  ],
  relatedGuides: [
    { slug: "running-form", label: "Come Migliorare la Tecnica di Corsa" },
    { slug: "running-heart-rate-zones", label: "Allenamento con le Zone Cardio" },
  ],
  sections: [
    { 
      heading: "La Scienza: Frequenza della Falcata ed Economia di Corsa", 
      body: "La cadenza, o frequenza della falcata, è il numero di passi compiuti in un minuto (spm). Biomeccanicamente, è la variabile più potente per ottimizzare l'Economia di Corsa. \n\n**Oscillazione Verticale e Duty Factor:** Ogni centimetro che ti sposti verso l'alto durante il volo è energia cinetica sprecata che non ti muove verso il traguardo. I runner con una cadenza elevata hanno un 'Duty Factor' (il rapporto tra tempo di contatto e tempo di volo) più bilanciato. Questo riduce il picco di forza d'impatto (Impact Transient) che attraversa le tue articolazioni ad ogni appoggio, distribuendo lo stress su una frequenza maggiore ma con intensità minore per ogni singolo colpo.", 
      variant: "highlight" 
    },
    { 
      heading: "Il Problema dell'Overstriding e la Forza Frenante", 
      body: "Una cadenza bassa (sotto i 160 spm) è quasi sempre associata all'overstriding. Questo accade quando il piede atterra troppo avanti rispetto al baricentro del corpo. \n\n- **Effetto Freno:** Atterrare davanti al centro di massa crea una forza di reazione al suolo che punta all'indietro, frenando letteralmente il tuo slancio. \n- **Soluzione Neuromuscolare:** Aumentando la cadenza, costringi il sistema nervoso ad accorciare la leva della gamba. Il piede atterra più vicino sotto l'anca, trasformando l'impatto verticale in una transizione fluida verso la spinta posteriore.", 
      variant: "default" 
    },
    { 
      heading: "La Molla Naturale: Accumulo di Energia Elastica", 
      body: "I tendini umani, in particolare l'Achille e la fascia plantare, sono progettati per agire come molle. Tuttavia, per funzionare come tali, richiedono un tempo di contatto al suolo (Ground Contact Time) estremamente breve. \n\n- **Ritorno Elastico:** A 180 spm, il tempo di contatto è solitamente sotto i 240 millisecondi. In questa finestra temporale, il tendine riesce a catturare l'energia dell'impatto e a restituirla nella fase di stacco senza che i muscoli debbano generare tutta la forza da zero. Se corri a 150 spm, il tempo di contatto aumenta, l'energia elastica si dissipa sotto forma di calore e la corsa diventa un lavoro puramente muscolare, portando a una fatica precoce.", 
      variant: "default" 
    },
    { 
      heading: "Il Mito dei 180 SPM: Realtà vs Medie", 
      body: "Il numero '180' deriva dalle osservazioni del leggendario allenatore Jack Daniels durante le Olimpiadi del 1984. \n\n- **Variabilità Individuale:** La cadenza ottimale è influenzata dall'altezza e dalla lunghezza degli arti. Un runner di 1.90m potrebbe essere efficiente a 172 spm, mentre uno di 1.60m potrebbe aver bisogno di 185 spm. \n- **Relazione con il Ritmo:** La cadenza non è fissa; aumenta naturalmente all'aumentare della velocità. Tuttavia, l'obiettivo è evitare che scenda drasticamente durante le corse lente (Easy Runs), dove il rischio di infortunio da overstriding è paradossalmente più alto.", 
      variant: "default", 
      listItems: [
        "Costo Metabolico: L'overstriding può aumentare il consumo di ossigeno fino all'8% a parità di velocità.", 
        "Prevenzione: Il 5% di aumento della cadenza riduce lo stress sull'articolazione femoro-rotulea del 15%.", 
        "Feedback: Molti orologi moderni misurano il 'Rapporto Verticale'; punta a tenerlo sotto l'8%.",
        "Cadence Lock: Attenzione ai cardiofrequenzimetri da polso che a volte confondono i passi con i battiti."
      ] 
    },
    {
      heading: "Consiglio: Usa la Musica o un Metronomo",
      body: "Il cervello è molto bravo a seguire i ritmi uditivi. Esistono playlist specifiche su Spotify divise per BPM (es. 'Running 175 BPM'). Inizialmente sembrerà di fare 'passi da formica', ma nel giro di 4-6 settimane questa diventerà la tua nuova normale, riducendo la fatica percepita.",
      variant: "tip"
    },
    {
      heading: "Attenzione ai Polpacci durante la Transizione",
      body: "Passare a una cadenza più alta sposta il carico dalle ginocchia verso i polpacci e il tendine d'Achille. Se aumenti troppo velocemente, rischi tendiniti. Segui la regola del 5%: aumenta la tua cadenza media di soli 5 passi alla volta, mantenendo il nuovo ritmo per almeno un mese prima di aumentare ancora.",
      variant: "warning"
    },
    { 
      heading: "Checklist: Come Aumentare la Cadenza", 
      body: "Un piano d'azione per una falcata più efficiente.", 
      variant: "checklist", 
      listItems: [
        "Analisi Iniziale: Verifica i tuoi dati medi degli ultimi 3 mesi sull'app dell'orologio.", 
        "Il Test del Metronomo: Durante una corsa facile, prova a seguire un battito di 175 bpm per 1 km.", 
        "Postura Alta: È più facile mantenere un'alta cadenza se corri 'alto' e inclinato in avanti.", 
        "Forza dei Piedi: Esegui esercizi di saltelli sul posto per migliorare la reattività del piede.",
        "Monitoraggio: Controlla se a fine mese la tua frequenza cardiaca media è scesa a parità di ritmo."
      ] 
    }
  ],
  faq: [
    { q: "Qual è la cadenza di corsa ideale?", a: "Per la maggior parte dei runner la zona di efficienza è tra 170 e 190 passi al minuto (spm). Il riferimento classico dei 180 spm deriva dagli studi di Jack Daniels sugli atleti élite, ma la cadenza ottimale dipende da altezza e ritmo: runner più alti possono essere efficienti a 172-175 spm." },
    { q: "Come faccio ad aumentare la mia cadenza di corsa?", a: "Aumenta gradualmente del 5% alla volta (circa 5-8 passi al minuto) e mantieni il nuovo ritmo per almeno 4 settimane. Usa un metronomo o playlist con BPM target, corri 'alto' con una leggera inclinazione in avanti e accorcia la falcata invece di forzare la frequenza." },
    { q: "I 180 passi al minuto valgono per tutti?", a: "No. I 180 spm sono una media osservata sugli élite in gara, non un numero magico universale. La cadenza varia con la velocità: nei lenti può scendere fisiologicamente di 5-10 spm. L'obiettivo reale è evitare l'overstriding, non inseguire un numero." },
    { q: "Una cadenza più alta previene davvero gli infortuni?", a: "Sì, gli studi biomeccanici mostrano che aumentare la cadenza del 5-10% riduce il carico sulle ginocchia fino al 20% e accorcia il tempo di contatto al suolo, riducendo le forze d'impatto. Attenzione però alla transizione: sposta il carico su polpacci e tendine d'Achille, quindi procedi per gradi." },
  ],
  dateModified: "2026-08-09",
  hubCategory: "shoes",
};
