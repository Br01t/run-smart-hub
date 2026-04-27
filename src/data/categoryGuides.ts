export interface CategoryGuide {
  id: string;
  title: string;
  scientificTitle: string;
  scientificDescription: string;
  pillars: { title: string; description: string }[];
}

export const categoryGuides: Record<string, CategoryGuide> = {
  shoes: {
    id: "shoes",
    title: "Scarpe da Corsa",
    scientificTitle: "La Scienza del Supporto e della Propulsione",
    scientificDescription: "Scegliere la scarpa giusta è molto più che una questione di comfort; si tratta di efficienza biomeccanica e prevenzione degli infortuni. Analizziamo ogni scarpa basandoci su 4 pilastri tecnici.",
    pillars: [
      { 
        title: "Drop", 
        description: "La differenza di altezza tra tallone e punta. 10mm+ per chi appoggia di tallone, 4-6mm per una corsa naturale." 
      },
      { 
        title: "Ammortizzazione", 
        description: "Da 'Minimale' per sensibilità e velocità a 'Massimale' per protezione dagli impatti sulle lunghe distanze." 
      },
      { 
        title: "Peso", 
        description: "Fondamentale per la performance. Sotto i 250g per la gara, leggermente di più per un allenamento quotidiano duraturo." 
      },
      { 
        title: "Propulsione", 
        description: "Il ruolo delle schiume nell'intersuola e delle piastre in carbonio nel ritorno di energia e nell'economia di corsa." 
      }
    ]
  },
  supplements: {
    id: "supplements",
    title: "Integratori per la Performance",
    scientificTitle: "Bioavailability e Nutrient Timing",
    scientificDescription: "Gli integratori dovrebbero colmare il divario tra la domanda dell'allenamento e il recupero. La nostra selezione si concentra su ingredienti clinicamente testati e comfort digestivo.",
    pillars: [
      { 
        title: "Bioavailability", 
        description: "Quanto bene l'integratore viene assorbito. Diamo priorità alle proteine Isolate e ai minerali chelati." 
      },
      { 
        title: "Transito Gastrico", 
        description: "Essenziale per gel e barrette. Rapporti ottimali di Maltodestrina e Fruttosio prevengono i disturbi gastrointestinali." 
      },
      { 
        title: "Nutrient Timing", 
        description: "Strategie 'Pre' per il focus, 'During' per l'energia e 'Post' per la riparazione muscolare e il ripristino del glicogeno." 
      },
      { 
        title: "Carico Cognitivo", 
        description: "Utilizzo di adattogeni (come il Cordyceps) per gestire la fatica senza il 'crash' tipico delle formule ad alta caffeina." 
      }
    ]
  },
  hydration: {
    id: "hydration",
    title: "Idratazione ed Elettroliti",
    scientificTitle: "Mantenere l'Equilibrio Osmotico",
    scientificDescription: "L'idratazione non riguarda solo l'acqua; si tratta di reintegrare ciò che si perde con il sudore. Uno squilibrio porta a crampi e a un rapido calo delle prestazioni.",
    pillars: [
      { 
        title: "Rapporto Sodio-Potassio", 
        description: "I principali elettroliti persi. Essenziali per la trasmissione nervosa e la contrazione muscolare." 
      },
      { 
        title: "Attrezzatura per il Trasporto Fluidi", 
        description: "Zaini vs cinture di idratazione. Capacità vs mobilità a seconda della distanza di gara e del terreno." 
      },
      { 
        title: "Isotonicità", 
        description: "Assicurarsi che la bevanda corrisponda alla concentrazione del sangue per l'assorbimento più rapido possibile." 
      }
    ]
  },
  recovery: {
    id: "recovery",
    title: "Recupero e Prevenzione Infortuni",
    scientificTitle: "La Curva di Recupero Basata sulle Evidenze",
    scientificDescription: "Il danno muscolare (DOMS) e l'infiammazione sono risultati naturali dell'allenamento. Gli strumenti di recupero accelerano la fase di 'Riparazione' per rimetterti in strada più velocemente.",
    pillars: [
      { 
        title: "Rilascio Miofasciale", 
        description: "Utilizzo di foam roller e pistole massaggianti per sciogliere le aderenze e migliorare il flusso sanguigno locale." 
      },
      { 
        title: "Fisica della Compressione", 
        description: "Pressione graduata per favorire il ritorno venoso e ridurre il gonfiore post-gara o durante i lunghi viaggi." 
      },
      { 
        title: "Mobilità Mirata", 
        description: "Strumenti per punti trigger specifici, come la fascia plantare, che sono critici per i runner." 
      }
    ]
  },
  apparel: {
    id: "apparel",
    title: "Abbigliamento Tecnico",
    scientificTitle: "Termoregolazione e Gestione degli Sfregamenti",
    scientificDescription: "I tessuti tecnici lavorano con il tuo corpo per gestire il calore e l'umidità, prevenendo sia il surriscaldamento che l'ipotermia.",
    pillars: [
      { 
        title: "Traspirabilità", 
        description: "Azione capillare delle fibre sintetiche per allontanare il sudore dalla pelle verso la superficie del tessuto." 
      },
      { 
        title: "Ingegneria delle Cuciture", 
        description: "Cuciture piatte e taglio laser per eliminare i punti di sfregamento durante i movimenti ripetitivi." 
      },
      { 
        title: "Protezione Ambientale", 
        description: "Membrane come il GORE-TEX che offrono impermeabilità assoluta con un'alta permeabilità al vapore." 
      }
    ]
  },
  gear: {
    id: "gear",
    title: "Attrezzatura Performance",
    scientificTitle: "Efficienza Biomeccanica e Connettività",
    scientificDescription: "L'attrezzatura da corsa dovrebbe sparire durante la corsa, fornendo al contempo dati critici o infrastruttura. Analizziamo durata, rapporto peso-utilità e velocità dell'interfaccia.",
    pillars: [
      { 
        title: "Rapporto Peso/Utilità", 
        description: "Ogni grammo deve giustificare la sua presenza. Che si tratti di uno zaino da 10L o di un sensore da 40g, l'efficienza è la chiave." 
      },
      { 
        title: "Connettività", 
        description: "Focus sulla compatibilità dell'ecosistema (ANT+, Bluetooth) e sulla fedeltà dei dati per metriche di allenamento precise." 
      },
      { 
        title: "Durata Meccanica", 
        description: "Resistenza al sudore, agli urti e alle condizioni atmosferiche estreme. L'attrezzatura che sopravvive al trail è quella che giustifica il suo costo." 
      }
    ]
  }
};
