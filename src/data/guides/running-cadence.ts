import { GuideContent } from "@/types/guide";
import guideCadence from "@/assets/guide-cadence.webp";

export const runningCadence: GuideContent = {
  title: "Cadenza nella Corsa: Perché i Passi al Minuto Contano",
  seoTitle: "Guida Cadenza Corsa 2026: Perché i 180 SPM sono un Riferimento",
  seoDescription: "Sblocca l'efficienza della corsa con la scienza della cadenza. Scopri come l'aumento dei passi al minuto riduce il rischio di infortuni, l'oscillazione verticale e le forze frenanti.",
  keywords: ["cadenza corsa", "180 spm corsa", "aumentare passi al minuto", "oscillazione verticale corsa", "infortunio overstriding", "efficienza corsa"],
  description: "Scopri perché la cadenza influisce sulle prestazioni, il riferimento dei 180 spm e come aumentare in sicurezza il numero di passi.",
  tags: ["running", "accessories"],
  heroImage: guideCadence,
  readTime: "12 min di lettura",
  keyTakeaways: [
    "L'aumento della cadenza accorcia la falcata, portando l'appoggio del piede più vicino al centro di massa",
    "Un'alta cadenza (170-190 spm) riduce le forze d'impatto sul ginocchio fino al 20%",
    "L'oscillazione verticale (energia sprecata verso l'alto) è significativamente inferiore a cadenze elevate",
    "La 'Molla dell'Achille' è più efficiente quando il tempo di contatto con il suolo è ridotto al minimo",
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
      heading: "La Scienza: Frequenza della Falcata", 
      body: "La cadenza, o frequenza della falcata, è il numero di passi compiuti in un minuto (spm). È la leva principale per ridurre l'oscillazione verticale—ovvero la quantità di 'rimbalzo' nella tua falcata. \n\n**Oscillazione Verticale:** Ogni centimetro che ti sposti verso l'alto è energia che non ti sta muovendo in avanti. I runner con una cadenza elevata si muovono in modo più orizzontale e meno verticale, il che migliora drasticamente l'economia di corsa. Aumentando i passi, riduci il 'transiente d'impatto' (il picco di forza) che attraversa il tuo scheletro ad ogni appoggio.", 
      variant: "highlight" 
    },
    { 
      heading: "L'Effetto della Forza Frenante", 
      body: "Quando corri con una cadenza bassa, è probabile che tu stia facendo 'overstriding'—ovvero atterri con il tallone molto davanti al ginocchio. Questo crea una 'Forza Frenante' che invia un'onda d'urto lungo la gamba e, letteralmente, ti rallenta. \n\n- **Centro di Massa:** Aumentare la cadenza porta naturalmente l'appoggio del piede sotto le anche. Questo converte l'impatto verticale in slancio in avanti, trasformando una falcata 'pesante' in un movimento fluido e scorrevole.", 
      variant: "default" 
    },
    { 
      heading: "La 'Molla Naturale' dell'Achille", 
      body: "Il tendine d'Achille è il sistema di 'ritorno elastico' più efficiente del corpo umano. Tuttavia, funziona solo se il tempo di contatto con il suolo è breve. \n\n- **Tempo di Contatto (GCT):** I runner ad alta cadenza trascorrono meno tempo a terra. Questo permette al tendine di agire come una molla, immagazzinando e rilasciando energia elastica. Se la cadenza è troppo bassa, 'affondi' nel terreno, costringendo i muscoli a fare il lavoro che i tendini dovrebbero fare gratuitamente.", 
      variant: "default", 
      listItems: [
        "Costo Metabolico: l'overstriding aumenta il costo di ossigeno della corsa del 5-8% circa", 
        "Protezione Infortuni: una cadenza più alta è la soluzione numero 1 per il 'Ginocchio del Corridore' (PFPS)", 
        "Riferimento SPM: i runner d'élite scendono raramente sotto i 175 spm, anche a ritmi facili",
        "Dati dell'Orologio: usa il tuo GPS per monitorare il 'Rapporto Verticale' insieme alla cadenza."
      ] 
    },
    {
      heading: "Il Mito dei 180 SPM",
      body: "180 spm non è un 'numero magico' universale. I runner più alti con gambe più lunghe hanno naturalmente una cadenza leggermente più bassa, mentre quelli più bassi potrebbero essere più vicini a 190. L'obiettivo non è un numero specifico, ma un **intervallo** (170-190) che risulti efficiente per la tua anatomia unica.",
      variant: "tip"
    },
    {
      heading: "Avviso di Transizione: La Regola del 5%",
      body: "Non provare a passare da 155 a 180 in una settimana. Questo sovraccaricherà polpacci e tendine d'Achille, portando a tendiniti. Aumenta la tua cadenza media solo del **5% ogni 3-4 settimane** per permettere al sistema neuromuscolare di adattarsi.",
      variant: "warning"
    },
    { 
      heading: "Checklist per il Miglioramento della Cadenza", 
      body: "Come aumentare in modo sicuro ed efficace la tua frequenza di passi.", 
      variant: "checklist", 
      listItems: [
        "Misura la Base: trova la tua cadenza media su una corsa in pianura di 5 km a un impegno di Zona 2.", 
        "Usa un Metronomo: imposta un'app metronomo a 5 spm sopra la tua base per brevi tratti.", 
        "Accorcia la Falcata: concentrati sul fare passi 'più piccoli e silenziosi' piuttosto che muoverti più velocemente.", 
        "Sprint in Salita: correre su salite ripide forza naturalmente un'alta cadenza e una tecnica corretta.",
        "Controlla le Scarpe: scarpe pesanti e rigide possono rendere più difficile una cadenza alta; scarpe più leggere aiutano."
      ] 
    },
  ],
  hubCategory: "shoes",
};
