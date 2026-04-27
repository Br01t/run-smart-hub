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
  readTime: "16 min di lettura",
  keyTakeaways: [
    "Struttura il tuo allenamento in quattro blocchi distinti: Base, Forza, Specifico e Taper",
    "Il 'Muro' è un evento fisiologico in cui il glicogeno si esaurisce: previenilo con 60-90g di carboidrati/ora",
    "Il Tapering (riduzione del volume, mantenimento dell'intensità) è essenziale per la 'Supercompensazione'",
    "Un negative split (seconda metà più veloce) è il gold standard per l'efficienza in maratona",
  ],
  relatedTools: [
    { to: "/tools/calories", label: "Calcolatore Calorie" },
    { to: "/tools/hydration", label: "Calcolatore Idratazione" },
  ],
  relatedGuides: [
    { slug: "running-nutrition", label: "Nutrizione per la Corsa: Cosa Mangiare Prima, Durante e Dopo" },
    { slug: "choosing-running-shoes", label: "Come Scegliere le Scarpe da Corsa" },
  ],
  sections: [
    { 
      heading: "La Fisiologia dei 42,2K", 
      body: "Il successo in maratona è determinato da tre variabili metaboliche: VO2 Max (soffitto aerobico), Soglia del Lattato (intensità sostenibile) ed Economia di Corsa (efficienza del carburante). \n\n**Lo switch 'Fat Max':** All'intensità della maratona, il corpo deve ossidare efficacemente i grassi insieme al glicogeno. Se ti affidi troppo al glicogeno fin dall'inizio, colpirai inevitabilmente 'Il Muro' al KM 32-35. Allenare il corpo a utilizzare i lipidi a velocità più elevate è l'obiettivo primario della Corsa Lunga della domenica.", 
      variant: "highlight" 
    },
    { 
      heading: "Il Progetto di 16 Settimane: Blocchi di Allenamento", 
      body: "Non correre solo chilometri; costruiscili con uno scopo. \n\n1. **Fase di Base (Settimane 1-4):** Focus sul volume e sull'integrità strutturale. Tutte le corse sono facili (Zona 2). \n2. **Fase di Forza/Salite (Settimane 5-8):** Introduzione di ripetute in salita e sessioni di 'Forza Resistente' per rafforzare i tessuti connettivi. \n3. **Fase Specifica (Settimane 9-13):** Intervalli ad alto volume e blocchi a 'Ritmo Maratona' all'interno delle corse lunghe. \n4. **Fase di Taper (Settimane 14-16):** Riduzione della fatica mantenendo la 'brillantezza' nelle gambe.", 
      variant: "default" 
    },
    { 
      heading: "La Scienza del Tapering: La Fase di Supercompensazione", 
      body: "Il Tapering NON è solo riposo. È una riduzione strategica del volume (km) mantenendo frequenza e intensità (velocità). \n\n- **Super-caricamento di Glicogeno:** Durante il taper, i tuoi muscoli possono immagazzinare fino al 20% in più di glicogeno rispetto al solito perché non vengono svuotati quotidianamente. \n- **Volume dei Globuli Rossi:** Il ridotto carico di allenamento permette al volume plasmatico di espandersi e al conteggio dei globuli rossi di recuperare, massimizzando l'apporto di ossigeno ai muscoli il giorno della gara.", 
      variant: "default", 
      listItems: [
        "Negative Splits: Una seconda metà più veloce dell'1-3% previene l'accumulo precoce di acido lattico", 
        "Drift Cardiaco: La tua frequenza cardiaca aumenterà di 10-15 bpm in 4 ore a causa del calore e della disidratazione", 
        "Il Soffitto delle 2,5 Ore: La maggior parte dei benefici dell'allenamento per la corsa lunga picca tra le 2,5 e le 3 ore",
        "Densità Mitocondriale: La corsa facile ad alto volume è l'unico modo per costruire più organelli energetici."
      ] 
    },
    {
      heading: "Strategia di Ritmo: La Regola 10/10/10/2,2",
      body: "Dividi la gara in blocchi mentali. Prime 10 miglia: Resta rilassato, sentiti 'lento'. Seconde 10 miglia: Trova il tuo ritmo e stabilizzati nello 'sforzo'. Ultime 10 miglia: La gara inizia qui: è dove il tuo allenamento ti tiene insieme. Ultimi 2,2K: Pura grinta.",
      variant: "tip"
    },
    {
      heading: "La Trappola del 'Nuovo il Giorno della Gara'",
      body: "Mai indossare scarpe nuove, usare una nuova marca di gel o provare calze nuove il giorno della gara. Vesciche o disturbi gastrointestinali che sembrano lievi al KM 5 possono mettere fine alla gara al KM 30. Le tue corse lunghe sono 'prove generali': trattale come tali.",
      variant: "warning"
    },
    { 
      heading: "Checklist Pre-Gara: Le Ultime 48 Ore", 
      body: "Esegui questi passaggi per assicurarti di arrivare alla linea di partenza pronto per la performance.", 
      variant: "checklist", 
      listItems: [
        "Carico di Carboidrati: 8-10g/kg di peso corporeo nelle 48 ore precedenti lo sparo.", 
        "Idratazione: Sorseggia liquidi ricchi di elettroliti; evita l'acqua naturale per prevenire l'iponatriemia.", 
        "Sonno: Dai priorità al sonno di DUE notti prima della gara; il nervosismo della notte prima è normale.", 
        "Logistica: Prepara l'attrezzatura, il pettorale e i gel la sera prima per ridurre lo stress mattutino.",
        "Riscaldamento: 5-10 minuti di mobilità leggera; non sprecare energia correndo 5 km prima di una 42 km."
      ] 
    },
  ],
  hubCategory: "apparel",
};
