import { GuideContent } from "@/types/guide";
import guideMarathon from "@/assets/guide-marathon.webp";

export const quantiKmMezzaMaratona: GuideContent = {
  title: "Quanti Km alla Settimana per la Mezza Maratona?",
  seoTitle: "Quanti Km a Settimana per la Mezza Maratona? Guida 2026",
  seoDescription: "Quanti chilometri a settimana servono per preparare la mezza maratona: volume ideale in base al livello, progressione, long run e i miti da sfatare.",
  keywords: ["quanti km a settimana per preparare una mezza maratona", "km settimanali mezza maratona", "volume settimanale mezza", "chilometraggio mezza maratona"],
  description: "Il volume settimanale corretto per la mezza maratona dipende dal tuo obiettivo, esperienza e recupero. Guida evidence-based con tabelle e progressione.",
  tags: ["training", "half-marathon", "endurance", "volume"],
  heroImage: guideMarathon,
  readTime: "9 min di lettura",
  keyTakeaways: [
    "Per COMPLETARE una mezza servono 25-35 km/settimana nel picco. Per far tempo, 40-55 km/settimana.",
    "La regola del 10%: mai aumentare volume settimanale oltre +10% vs settimana precedente.",
    "Il long run dovrebbe essere il 30-35% del volume settimanale totale.",
    "Oltre 60-70 km/settimana per la mezza i benefici marginali crollano e il rischio infortuni sale.",
    "Meglio 4 corse consistenti che 6 corse tirate: la qualità batte la quantità nella maggior parte dei casi.",
  ],
  relatedTools: [
    { to: "/tools/calories", label: "Calcolatore Calorie" },
    { to: "/tools/hydration", label: "Calcolatore Idratazione" },
  ],
  relatedGuides: [
    { slug: "mezza-maratona-2-mesi", label: "Mezza Maratona in 2 Mesi" },
    { slug: "marathon-training", label: "Guida alla Maratona per Principianti" },
    { slug: "interval-training", label: "Allenamento a Intervalli" },
  ],
  sections: [
    {
      heading: "Non esiste 'il numero magico': dipende dall'obiettivo",
      body: "La domanda 'quanti km a settimana per la mezza?' non ha risposta unica. Il volume ottimale dipende da 5 variabili:\n\n1. **Obiettivo**: solo finire vs fare un tempo specifico\n2. **Esperienza**: primo anno di corsa vs runner esperto\n3. **Tempo disponibile**: 3, 4 o 5 sessioni a settimana\n4. **Rischio infortuni**: storia personale, età, peso corporeo\n5. **Recupero**: sonno, stress, altre attività fisiche\n\nCorrere 40 km/settimana per anni fa più risultato di 60 km/settimana per 2 mesi seguiti da un infortunio. La costanza batte l'intensità.",
      variant: "highlight",
    },
    {
      heading: "Volumi consigliati per livello e obiettivo",
      body: "Tabella orientativa del volume settimanale nel PICCO della preparazione (settimane 6-8 di un piano da 10-12 settimane). Nelle prime settimane il volume è 30-40% inferiore.",
      variant: "default",
      listItems: [
        "Debuttante mezza (obiettivo: finire): 25-32 km/settimana, 3-4 uscite.",
        "Intermedio (obiettivo: sotto 2h): 35-45 km/settimana, 4 uscite.",
        "Avanzato (obiettivo: sotto 1h45): 45-55 km/settimana, 4-5 uscite.",
        "Élite amatoriale (sotto 1h30): 55-70 km/settimana, 5-6 uscite.",
        "Runner competitivi (sotto 1h20): 70-90 km/settimana, 6-7 uscite.",
      ],
    },
    {
      heading: "La regola del 10%: perché non violarla",
      body: "La regola più consolidata della sports medicine per la corsa: **il volume settimanale non dovrebbe aumentare più del 10% vs la settimana precedente**.\n\nStudi retrospettivi mostrano che quando i runner superano questo limite, il rischio di infortuni da sovraccarico (fascite plantare, tendinite achillea, sindrome ITB, stress fractures) aumenta di 2-3 volte.\n\n**Esempio di progressione corretta partendo da 20 km/settimana:**\n- Sett 1: 20 km\n- Sett 2: 22 km (+10%)\n- Sett 3: 24 km (+9%)\n- Sett 4: SCARICO 18 km (-25%)\n- Sett 5: 26 km\n- Sett 6: 29 km\n- Sett 7: 32 km\n- Sett 8: SCARICO 24 km\n\nOgni 3-4 settimane di carico, 1 settimana di scarico. Questo ciclo di supercompensazione è ciò che permette gli adattamenti fisiologici senza rompersi.",
      variant: "warning",
    },
    {
      heading: "Il long run: quanto deve essere lungo",
      body: "Il long run è la sessione più importante della settimana per la mezza. Regola: **dovrebbe rappresentare il 30-35% del volume settimanale**, MAI più del 40%.\n\n**Esempi:**\n- 25 km totali → long run 8-10 km\n- 35 km totali → long run 12-14 km\n- 45 km totali → long run 15-17 km\n- 55 km totali → long run 18-20 km\n\nPer la mezza NON serve mai correre 21 km in allenamento. Il long run massimo nella preparazione è 18-19 km, poi il tapering. Correre la distanza intera in allenamento non porta benefici aggiuntivi e aumenta il rischio infortuni.",
      variant: "tip",
    },
    {
      heading: "Distribuzione settimanale ideale",
      body: "Un piano da 40 km/settimana ben distribuito rende molto più di un piano da 50 km mal distribuito. Modello 80/20 (Stephen Seiler) applicato alla mezza.",
      variant: "default",
      listItems: [
        "80% del volume a intensità BASSA (Zona 1-2, conversazionale).",
        "20% a intensità ALTA (Zona 4-5, intervalli o soglia).",
        "MAI più di 2 sessioni intense a settimana.",
        "Long run sempre al ritmo più lento della settimana (30-45\" più lento del ritmo gara).",
        "1 giorno di riposo TOTALE ogni settimana.",
      ],
    },
    {
      heading: "Segnali che stai facendo troppo",
      body: "Il tuo corpo ti avvisa quando il volume è eccessivo. Riconoscere i segnali precoci evita infortuni.",
      variant: "checklist",
      listItems: [
        "Frequenza cardiaca a riposo +5-8 bpm per 3+ giorni consecutivi.",
        "Sensazione di gambe pesanti che persiste oltre 48h dopo la sessione dura.",
        "Sonno peggiorato, risvegli notturni, difficoltà ad addormentarsi.",
        "Irritabilità, calo di libido, tono dell'umore basso.",
        "Sistema immunitario debole (raffreddori frequenti).",
        "Performance in calo per 2+ settimane consecutive.",
        "Comparsa di dolori articolari o tendinei nuovi.",
      ],
    },
    {
      heading: "Il tapering: ridurre il volume prima della gara",
      body: "Nelle 2 settimane prima della mezza il volume DEVE ridursi per permettere supercompensazione.\n\n**Modello tapering per mezza:**\n- 14 giorni prima: volume normale (100%)\n- Settimana -2: riduzione al 75% del volume, ultimo long run 15-18 km.\n- Settimana -1 (gara domenica): riduzione al 50%, ultima sessione 4-5 km facili con qualche allungo.\n\nL'errore più comune: NON ridurre il volume 'per paura di perdere la forma'. È il contrario: durante il taper il corpo consolida gli adattamenti e arriva più fresco al via.",
      variant: "highlight",
    },
  ],
  hubCategory: "shoes",
  datePublished: "2026-07-06",
  dateModified: "2026-07-06",
  faq: [
    {
      q: "Basta correre 3 volte a settimana per fare la mezza maratona?",
      a: "Sì, se le 3 uscite sono ben strutturate: 1 corsa lenta media (8-10 km), 1 sessione di qualità (intervalli o medio, 6-8 km), 1 long run (12-18 km). Con 3 uscite arrivi a 30-36 km/settimana nel picco, sufficienti per completare una mezza in 2h-2h20.",
    },
    {
      q: "Devo correre 21 km in allenamento per la mezza?",
      a: "No, non serve. Il long run massimo consigliato nella preparazione è 18-19 km. Il tuo corpo estrapola i benefici della distanza breve al giorno della gara, dove la scarica di adrenalina e l'atmosfera ti fanno completare i km mancanti senza problemi.",
    },
    {
      q: "Se salto una settimana di allenamento perdo tutto?",
      a: "No. Studi mostrano che 7 giorni senza corsa causano al massimo 3-5% di perdita di VO2max, recuperabile in 2 settimane. 2 settimane di stop causano 5-10% di perdita. Se sei infortunato o stanchissimo, meglio saltare che insistere e infortunarsi seriamente.",
    },
    {
      q: "Meglio più km lenti o meno km veloci per la mezza?",
      a: "Il modello 80/20 (80% volume lento, 20% intenso) è dimostrato essere il più efficace per il fondo. Ha senso privilegiare il volume lento fino a un massimo di 45-55 km/settimana; oltre, i benefici crollano e conviene lavorare sulla qualità (soglia lattacida e VO2max).",
    },
  ],
};
