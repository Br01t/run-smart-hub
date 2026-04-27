import { GuideContent } from "@/types/guide";
import guideIntervalTraining from "@/assets/guide-interval-training.webp";

export const intervalTraining: GuideContent = {
  title: "Allenamento a Intervalli per Runner: La Guida Completa",
  seoTitle: "Guida Allenamento a Intervalli 2026: La Scienza della Velocità",
  seoDescription: "Padroneggia l'arte della velocità. Scopri come strutturare ripetute VO2 Max, Tempo run e Fartlek utilizzando rapporti lavoro-riposo scientifici per la massima performance.",
  keywords: ["allenamento a intervalli corsa", "ripetute VO2 max", "tempo run vs soglia", "guida fartlek", "lavori velocità maratona", "sistemi energetici corsa"],
  description: "Padroneggia ogni tipo di allenamento di velocità — dal fartlek alle ripetute VO2 max. Impara come strutturare gli intervalli e impostare i ritmi target.",
  tags: ["running", "energy", "muscles"],
  heroImage: guideIntervalTraining,
  readTime: "5 min di lettura",
  keyTakeaways: [
    "L'allenamento a intervalli manipola i rapporti lavoro-riposo per colpire specifici sistemi energetici",
    "Le ripetute VO2 Max (3-5 min) migliorano la tua capacità massima di elaborazione dell'ossigeno",
    "Le Tempo run (Soglia) aumentano il ritmo che puoi sostenere senza andare fuori giri",
    "Il recupero attivo (corsa lenta) tra le serie rimuove il lattato più velocemente del riposo da fermi",
  ],
  relatedTools: [
    { to: "/tools/calories", label: "Calcolatore Calorie" },
    { to: "/tools/hydration", label: "Calcolatore Idratazione" },
  ],
  relatedGuides: [
    { slug: "running-heart-rate-zones", label: "Allenamento con le Zone Cardio" },
    { slug: "marathon-training", label: "Guida alla Maratona per Principianti" },
  ],
  sections: [
    { 
      heading: "La Scienza: Sistemi Energetici", 
      body: "L'allenamento a intervalli è la manipolazione strategica di intensità e recupero per sollecitare i tre sistemi energetici del corpo: le vie Fosfagena (ATP-PC), Glicolitica (Anaerobica) e Ossidativa (Aerobica). \n\n**Efficienza del Lactate Shuttle:** Gli intervalli ad alta intensità allenano il tuo corpo a 'trasportare' il lattato fuori dai muscoli impegnati per essere usato come carburante dal cuore e dal fegato. Questo adattamento fisiologico ti permette di sostenere il 'ritmo gara' con uno sforzo percepito significativamente inferiore.", 
      variant: "highlight" 
    },
    { 
      heading: "La Matrice del Rapporto Lavoro-Riposo", 
      body: "La magia degli intervalli risiede nel recupero. \n\n- **Ripetute VO2 Max (Rapporto 1:1):** Se corri per 4 minuti intensamente, riposi per 4 minuti lentamente. Questo permette una risintesi parziale della fosfocreatina (PCr), così da poter ripetere lo sforzo ad alta intensità. \n- **Capacità Anaerobica (Rapporto 1:3):** Scatti brevi ed esplosivi (es. 200 m) richiedono un riposo lungo per permettere al sistema nervoso di recuperare. \n- **Soglia/Tempo (Riposo Breve):** Ripetute di 1,5-2 km con solo 60-90 secondi di riposo mantengono elevata la frequenza cardiaca, forzando il corpo a gestire l'accumulo continuo di lattato.", 
      variant: "default" 
    },
    { 
      heading: "Tipi di Lavori di Velocità", 
      body: "Il piano di ogni runner dovrebbe ruotare attraverso questi tre 'Pilastri della Velocità'. \n\n1. **Fartlek ('Gioco di Velocità'):** Intervalli non strutturati basati su punti di riferimento (es. 'scatto fino a quell'albero'). Ottimo per costruire resilienza mentale e varietà. \n2. **Tempo Run:** Sforzi sostenuti all'85-90% della FC Max. È il 'collante' che tiene insieme il tuo ritmo maratona. \n3. **Ripetute VO2 Max:** Sforzi da 800 m a 1600 m che ti lasciano con il fiato corto. Costruiscono il 'soffitto aerobico' che detta il tuo potenziale ultimo.", 
      variant: "default", 
      listItems: [
        "Allunghi: accelerazioni di 80-100 m per migliorare l'economia di corsa e la reattività neuromuscolare", 
        "Gittata Sistolica: il lavoro di velocità aumenta la quantità di sangue pompata per ogni battito", 
        "Capillarizzazione: gli sforzi intensi creano nuovi vasi sanguigni microscopici nei muscoli",
        "Taper Mentale: gli intervalli insegnano al cervello che 'disagio' non significa 'pericolo'."
      ] 
    },
    {
      heading: "La Regola del 20% di Intensità",
      body: "Per evitare la 'Sindrome da Sovrallenamento', il lavoro ad alta intensità (Zona 4/5) non dovrebbe mai superare il 20% del tuo chilometraggio settimanale totale. Se corri 50 km a settimana, mantieni i chilometri 'duri' sotto i 10 km.",
      variant: "warning"
    },
    {
      heading: "Ritmo basato sui Dati, non sull'Ego",
      body: "Usa un recente risultato di gara di 5 km o 10 km per calcolare i tuoi ritmi di allenamento. Correre gli intervalli 'il più veloce possibile' è spesso controproducente. Se una sessione richiede il 'Ritmo Soglia' e tu corri al 'Ritmo Miglio', stai colpendo il sistema energetico sbagliato e accumulando fatica non necessaria.",
      variant: "tip"
    },
    { 
      heading: "Checklist per la Sessione a Intervalli", 
      body: "Come eseguire una sessione di velocità perfetta dall'inizio alla fine.", 
      variant: "checklist", 
      listItems: [
        "Riscaldamento: 15 minuti facili + drill dinamici (ginocchia alte, calciata).", 
        "Il Set Principale: punta alla costanza—il tuo ultimo intervallo dovrebbe essere veloce quanto il primo.", 
        "Recupero Attivo: mantieni le gambe in movimento a un ritmo lentissimo per evitare il ristagno di sangue.", 
        "Rifornimento: consuma carboidrati e proteine di alta qualità entro 45 minuti dalla fine.",
        "Scelta della Superficie: usa una strada pianeggiante o una pista per i lavori VO2 Max per garantire ritmi precisi."
      ] 
    },
  ],
  hubCategory: "recovery",
};
