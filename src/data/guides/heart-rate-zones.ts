import { GuideContent } from "@/types/guide";
import guideHeartrate from "@/assets/guide-heartrate.webp";

export const heartRateZones: GuideContent = {
  title: "Allenamento con le Zone di Frequenza Cardiaca",
  seoTitle: "Allenamento Zone Cardio 2026: Regola 80/20 e Scienza della FC Max",
  seoDescription: "Smetti di indovinare l'intensità. Scopri la scienza delle zone cardio, come trovare la tua vera FC Max e perché la regola 80/20 è il segreto delle prestazioni d'élite.",
  keywords: ["zone frequenza cardiaca corsa", "regola 80/20 corsa", "calcolare zone cardio", "soglia anaerobica corsa", "benefici zona 2", "test frequenza cardiaca massima"],
  description: "Come utilizzare le zone di frequenza cardiaca per allenarsi in modo più intelligente, evitare il sovrallenamento e migliorare le prestazioni nella corsa.",
  tags: ["accessories", "running"],
  heroImage: guideHeartrate,
  readTime: "7 min di lettura",
  keyTakeaways: [
    "La polarizzazione 80/20 è il segreto degli atleti d'élite: 80% volume facile, 20% alta intensità",
    "Le formule standard (220-età) hanno un margine di errore del 15%, i test sul campo sono necessari",
    "La Zona 2 è la 'sala macchine' per la biogenesi mitocondriale e l'ossidazione dei grassi",
    "La variabilità della frequenza cardiaca (HRV) indica lo stato di recupero del sistema nervoso",
    "Le fasce cardio toraciche rimangono lo standard per la precisione negli allenamenti a intervalli",
  ],
  relatedTools: [
    { to: "/tools/calories", label: "Calcolatore Calorie" },
    { to: "/tools/bmi", label: "Calcolatore BMI" },
  ],
  relatedGuides: [
    { slug: "marathon-training", label: "Guida alla Maratona per Principianti" },
    { slug: "running-nutrition", label: "Nutrizione Corsa: Cosa Mangiare" },
  ],
  sections: [
    { 
      heading: "La Scienza: Hub dello Stress Metabolico", 
      body: "La frequenza cardiaca (FC) è la finestra più oggettiva sul tuo stress metabolico interno. A differenza del ritmo (pace), che è una metrica esterna, la FC ti dice quanto cuore e polmoni stiano lavorando per soddisfare la richiesta energetica muscolare in tempo reale. \n\n**La Polarizzazione 80/20:** Gli atleti di endurance d'élite seguono quasi universalmente un modello 'Polarizzato'. Trascorrono circa l'80% del loro tempo totale di allenamento a bassa intensità (Zona 2) per aumentare la densità mitocondriale e la rete capillare. Il restante 20% è dedicato ad alta intensità (Soglia e VO2 Max). Molti runner amatoriali commettono l'errore della 'Zona Grigia' (Zona 3)—correndo tutto a un impegno 'moderato' che è troppo faticoso per permettere un recupero ottimale ma troppo blando per generare adattamenti fisiologici significativi.", 
      variant: "highlight" 
    },
    { 
      heading: "Soglie Fisiologiche: Aerobica vs Lattato", 
      body: "Le zone di allenamento sono definite da due 'punti di svolta' metabolici fondamentali. \n\n1. **Soglia Aerobica (AeT):** Il punto in cui il corpo inizia a produrre più lattato rispetto al valore basale, pur riuscendo ancora a gestirlo facilmente. È il limite superiore della Zona 2. Allenarsi qui migliora la capacità del corpo di usare i grassi come carburante.\n2. **Soglia del Lattato (LT):** L'intensità massima alla quale la produzione di lattato eguaglia la sua rimozione. Oltre questo punto, la fatica diventa esponenziale. Migliorare la tua LT ti permette di mantenere ritmi di gara più elevati per tempi prolungati senza 'scoppiare'.", 
      variant: "default" 
    },
    { 
      heading: "Fattori che Alterano la FC: La Deriva Cardiaca", 
      body: "La frequenza cardiaca non è una costante fissa. Diversi fattori possono alterare i dati, rendendo necessaria una corretta interpretazione.\n\n- **Cardiovascular Drift:** Durante corse lunghe, la FC tende a salire gradualmente anche se mantieni lo stesso ritmo. Questo è dovuto alla disidratazione e all'aumento della temperatura interna (il cuore pompa più velocemente per raffreddare il corpo tramite la pelle).\n- **Fattori Ambientali:** Caldo umido, altitudine e caffeina possono alzare la FC basale di 5-15 battiti. In queste condizioni, è più saggio correre basandosi sullo Sforzo Percepito (RPE) piuttosto che fissarsi esclusivamente sul cardiofrequenzimetro.", 
      variant: "default" 
    },
    { 
      heading: "Calcolare le Zone: Oltre le Formule Standard", 
      body: "La classica formula '220 - Età' ha un'imprecisione statistica troppo alta per l'allenamento serio. \n\n- **Il Metodo Karvonen:** Integra la Frequenza Cardiaca a Riposo per calcolare la 'Riserva Cardiaca', riflettendo meglio il tuo reale livello di fitness.\n- **Test sul Campo (30 min Time Trial):** È il gold standard per i runner. Corri al massimo sforzo costante per 30 minuti. La media dei battiti degli ultimi 20 minuti rappresenta la tua Soglia del Lattato (LTHR), dalla quale puoi ricavare zone di allenamento estremamente precise.", 
      variant: "default", 
      listItems: [
        "Fascia Cardio: I sensori ottici al polso soffrono di 'cadence lock' e ritardi nella rilevazione durante gli scatti.", 
        "Frequenza a Riposo: Monitorala al mattino; un aumento costante indica sovrallenamento o malattia imminente.", 
        "Zona 1 (Recupero): Utilizzala per le corse post-gara per facilitare il flusso sanguigno senza stress aggiuntivo.",
        "HRV (Variabilità): Un'alta HRV indica un buon equilibrio tra sistema simpatico e parasimpatico."
      ] 
    },
    {
      heading: "Zona 2: La Base della Performance",
      body: "Spesso chiamata 'Endurance di Base', la Zona 2 (60-70% della Riserva Cardiaca) stimola la biogenesi mitocondriale. Più mitocondri hai, più energia puoi produrre aerobicamente prima di dover ricorrere al metabolismo anaerobico (più costoso e limitato). Se non riesci a conversare agevolmente, stai andando troppo forte.",
      variant: "tip"
    },
    {
      heading: "Il Pericolo della 'Zona Grigia'",
      body: "Correre costantemente in Zona 3 (ritmo 'medio') è una trappola comune. È abbastanza dura da generare fatica cronica ma non abbastanza intensa da migliorare il VO2 Max o la Soglia del Lattato. Il risultato è la stagnazione delle prestazioni. Ricorda: le giornate facili devono essere davvero facili per permettere alle giornate dure di essere davvero dure.",
      variant: "warning"
    },
    { 
      heading: "Checklist per l'Allenamento Cardio", 
      body: "Come massimizzare l'uso dei dati cardio nella tua routine.", 
      variant: "checklist", 
      listItems: [
        "Configura le Zone: Inserisci la tua FC Max e a riposo reale nelle impostazioni dell'orologio.", 
        "Usa una Fascia Toracica: Fondamentale per ripetute brevi e lavori di soglia.", 
        "Test Periodico: Ripeti il test di 30 minuti ogni 12 settimane per aggiornare le zone.", 
        "Ascolta il Corpo: Se la FC è stranamente alta ma ti senti bene, potrebbe essere caldo; se la FC non sale, sei stanco.",
        "Post-Allenamento: Analizza quanto tempo hai passato in ogni zona per verificare se hai rispettato l'obiettivo."
      ] 
    }
  ],
  hubCategory: "apparel",
};
