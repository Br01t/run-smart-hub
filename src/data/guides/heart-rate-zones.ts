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
  readTime: "12 min di lettura",
  keyTakeaways: [
    "Trascorri l'80% del tuo volume in Zona 2 per costruire una base aerobica massiccia",
    "Le formule per la FC Max (220-età) possono sbagliare fino a 15-20 battiti al minuto",
    "La Soglia del Lattato (Zona 4) è il miglior predittore della performance in gara",
    "Le fasce cardio sono obbligatorie per la precisione durante gli intervalli ad alta intensità",
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
      body: "La frequenza cardiaca (FC) è la finestra più oggettiva sul tuo stress metabolico interno. A differenza del ritmo (pace), che è una metrica esterna, la FC ti dice quanto cuore e polmoni stiano lavorando per soddisfare la richiesta. \n\n**La Polarizzazione 80/20:** Gli atleti di endurance d'élite seguono un modello 'Polarizzato'. Trascorrono l'80% del tempo a bassa intensità (Zona 2) per aumentare la densità mitocondriale e il 20% ad alta intensità. Molti runner amatoriali commettono l'errore della 'Zona Grigia'—correndo tutto a un impegno 'moderato' che è troppo faticoso per il recupero ma troppo blando per un adattamento significativo.", 
      variant: "highlight" 
    },
    { 
      heading: "Soglie: Aerobica vs Lattato", 
      body: "Le zone di allenamento sono definite da due 'punti di rottura' fisiologici. \n\n1. **Soglia Aerobica (AeT):** Il punto in cui il lattato nel sangue inizia a salire sopra il valore basale. È il limite superiore della Zona 2. \n2. **Soglia del Lattato (LT):** L'intensità in cui la produzione di lattato eguaglia la sua rimozione. È il limite superiore della Zona 4. Migliorare la tua LT ti permette di correre più veloce più a lungo prima che il 'bruciore' ti costringa a rallentare.", 
      variant: "default" 
    },
    { 
      heading: "Calcolare le Zone: Oltre le Formule", 
      body: "La formula '220 - Età' è una media della popolazione ed è spesso pericolosamente imprecisa per i singoli atleti. \n\n- **Il Metodo Karvonen:** Questa formula utilizza la tua Frequenza Cardiaca a Riposo (FCR) per calcolare la 'Riserva di Frequenza Cardiaca', un modo più personalizzato per impostare le zone. \n- **Test sul Campo:** Il gold standard è una prova a cronometro di 30 minuti. La tua FC media degli ultimi 20 minuti di uno sforzo massimo di 30 minuti è un'approssimazione molto vicina alla tua FC di soglia del lattato.", 
      variant: "default", 
      listItems: [
        "Deriva Cardiaca: la tua FC salirà del 5-10% durante una corsa lunga all'aumentare della temperatura corporea", 
        "Fattori Esterni: caffeina, caldo e stress possono alzare la FC di oltre 10 BPM indipendentemente dall'impegno", 
        "Polso vs Fascia: i sensori ottici da polso spesso soffrono di 'cadence lock' (mimano i passi invece dei battiti)",
        "FC di Recupero: quanto velocemente cala la FC in 1 minuto dopo uno sforzo intenso è un segno di fitness."
      ] 
    },
    {
      heading: "Zona 2: La Sala Macchine",
      body: "L'allenamento in Zona 2 (60-70% della FC Max) stimola la crescita dei mitocondri e migliora la 'Flessibilità Metabolica'—la capacità del corpo di bruciare grassi a velocità più elevate. Se non riesci a parlare a frasi intere mentre corri, non sei in Zona 2.",
      variant: "tip"
    },
    {
      heading: "Il Pericolo della 'Zona Grigia'",
      body: "Correre in Zona 3 (la zona 'Moderata') in ogni sessione è una ricetta per la stagnazione. Fornisce abbastanza stress da causare fatica ma non uno stimolo specifico sufficiente per guidare guadagni aerobici o anaerobici di alto livello. O vai piano o vai veloce; non vivere nel mezzo.",
      variant: "warning"
    },
    { 
      heading: "Checklist per l'Applicazione Pratica", 
      body: "Come usare i dati cardio per guidare il tuo programma settimanale.", 
      variant: "checklist", 
      listItems: [
        "Esegui un test sul campo ogni 8-12 settimane per aggiornare le zone man mano che migliori.", 
        "Investi in una fascia cardio di qualità (Bluetooth/ANT+) per tutte le sessioni di intervalli.", 
        "Imposta un 'Allarme FC' sul tuo orologio per le corse in Zona 2 per evitare ritmi eccessivi.", 
        "Controlla la FC a riposo al risveglio; un aumento di >5 BPM suggerisce la necessità di un giorno di riposo.",
        "Nelle giornate di salita, lascia che la FC raggiunga la Zona 5, ma assicurati che torni in Zona 2 prima della ripetizione success."
      ] 
    },
  ],
  hubCategory: "apparel",
};
