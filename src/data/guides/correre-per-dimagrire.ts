import { GuideContent } from "@/types/guide";
import guideMarathon from "@/assets/guide-marathon.webp";

export const correrePerDimagrire: GuideContent = {
  title: "Correre per Dimagrire: Programma Realistico per Principianti",
  seoTitle: "Correre per Dimagrire: Programma Efficace 2026",
  seoDescription: "Come correre per dimagrire davvero: la scienza della lipolisi, calcolo del deficit calorico, programma di 12 settimane e perché la sola corsa non basta.",
  keywords: ["come iniziare a correre per dimagrire", "correre per dimagrire", "corsa dimagrimento", "quanto correre per perdere peso", "corsa e perdita peso"],
  description: "Guida basata sulla scienza per usare la corsa come strumento di perdita di peso: cosa funziona davvero, cosa è marketing e come costruire un programma sostenibile.",
  tags: ["beginner", "weight-loss", "nutrition", "training"],
  heroImage: guideMarathon,
  readTime: "10 min di lettura",
  keyTakeaways: [
    "La perdita di peso è 70% cucina, 30% allenamento: non puoi 'correre via' una dieta sbagliata.",
    "Un runner di 70 kg brucia circa 70 kcal per km. Servono ~10 km per 1 pizza margherita.",
    "La corsa in Zona 2 (aerobica lenta) massimizza l'utilizzo dei grassi come substrato energetico.",
    "Il rebound: il corpo compensa fino al 30% della spesa calorica riducendo il metabolismo basale.",
    "Combinare corsa + rinforzo muscolare + deficit calorico moderato (300-500 kcal/die) è la formula più efficace.",
  ],
  relatedTools: [
    { to: "/tools/calories", label: "Calcolatore Calorie" },
    { to: "/tools/bmi", label: "Calcolatore BMI" },
    { to: "/tools/protein", label: "Calcolatore Proteine" },
  ],
  relatedGuides: [
    { slug: "tabella-corsa-principianti", label: "Tabella Corsa Principianti" },
    { slug: "running-nutrition", label: "Nutrizione per la Corsa" },
    { slug: "running-heart-rate-zones", label: "Zone Cardio: Allenamento Efficace" },
  ],
  sections: [
    {
      heading: "La dura verità: correre non basta per dimagrire",
      body: "Il marketing sportivo racconta la storia della corsa come 'brucia-grassi definitivo'. La scienza dice altro: la perdita di peso duratura è al 70% questione di alimentazione, al 20% attività fisica totale, al 10% genetica e altri fattori.\n\nUn runner di 70 kg brucia circa 60-70 kcal per km corso. Per perdere 1 kg di grasso servono 7.700 kcal in deficit. Significa correre 110 km per bruciare 1 kg di grasso — se la dieta rimane uguale.\n\nQuesto non vuol dire che correre sia inutile per dimagrire. Vuol dire che va combinato con un intervento alimentare, non usato come 'lasciapassare' per mangiare di più.",
      variant: "highlight",
    },
    {
      heading: "La scienza della lipolisi: quando bruci grassi davvero",
      body: "Il corpo usa due substrati principali durante la corsa: grassi e carboidrati (glicogeno). La proporzione cambia con l'intensità.\n\n- **Zona 2 (60-70% FCmax, ritmo conversazionale)**: 50-70% dei calori da grassi.\n- **Zona 3 (70-80% FCmax, ritmo medio)**: 30-40% dei calori da grassi.\n- **Zona 4-5 (80%+ FCmax, ritmo veloce)**: 10-20% dei calori da grassi.\n\nMorale: **la corsa lenta e prolungata brucia proporzionalmente più grassi**. Ma l'intensità alta brucia più calorie totali in meno tempo. Per il dimagrimento serve una combinazione: 80% corse lente lunghe + 20% intervalli.",
      variant: "default",
    },
    {
      heading: "Quante calorie brucia davvero la corsa",
      body: "Tabella indicativa del dispendio calorico per km corso, basata sulla formula 'peso × 1 kcal/km' con correzioni per intensità e velocità.",
      variant: "default",
      listItems: [
        "60 kg a 7 min/km: circa 50-55 kcal/km (500-550 kcal per 10 km).",
        "70 kg a 6 min/km: circa 65-70 kcal/km (650-700 kcal per 10 km).",
        "80 kg a 6 min/km: circa 75-80 kcal/km (750-800 kcal per 10 km).",
        "90 kg a 7 min/km: circa 85-90 kcal/km (850-900 kcal per 10 km).",
        "Nota: le stime degli orologi GPS spesso sovrastimano del 15-25%.",
      ],
    },
    {
      heading: "Programma corsa+dieta 12 settimane per dimagrire 5-8 kg",
      body: "Piano realistico per un principiante che vuole perdere 5-8 kg in 3 mesi in modo sostenibile.\n\n**Fase 1 (settimane 1-4): abitudine + micro-deficit**\n- 3 corse/settimana con metodo run-walk (25-30 min).\n- Deficit calorico: 200 kcal/die (facilmente ottenibile riducendo bevande zuccherate).\n- 2 sessioni rinforzo muscolare a settimana.\n\n**Fase 2 (settimane 5-8): incremento volume**\n- 3-4 corse/settimana (30-40 min continui).\n- Deficit calorico: 350-400 kcal/die.\n- Aggiungi 1 sessione di intervalli (es. 8x1' veloce con 1' recupero).\n\n**Fase 3 (settimane 9-12): consolidamento**\n- 4 corse/settimana + 1 lungo (45-60 min).\n- Deficit calorico: 400-500 kcal/die.\n- Proteine a 1,8 g/kg per proteggere massa magra.",
      variant: "tip",
    },
    {
      heading: "Il rebound: perché il corpo si difende dal dimagrimento",
      body: "Il corpo umano è evolutivamente costruito per RESISTERE al dimagrimento. Quando aumenti il dispendio calorico, si attivano meccanismi compensatori:\n\n- **Riduzione del metabolismo basale** fino al 30% del deficit indotto.\n- **Aumento della fame** via grelina, riduzione della sazietà via leptina.\n- **Riduzione dell'attività spontanea** (NEAT): sali meno le scale, gesticoli meno.\n- **Aumento efficienza energetica**: le stesse corse iniziano a bruciare meno calorie.\n\nSoluzioni: cicli di 'diet break' (1-2 settimane a mantenimento ogni 8-12 di deficit), variazione degli stimoli allenanti, ricomposizione corporea (perdere grasso mantenendo o aumentando massa magra).",
      variant: "warning",
    },
    {
      heading: "Errori tipici del principiante che vuole dimagrire correndo",
      body: "Le trappole in cui cade la maggior parte dei principianti.",
      variant: "checklist",
      listItems: [
        "Compensare la corsa con più cibo ('me lo sono meritato'): annulla il deficit.",
        "Correre sempre allo stesso ritmo (medio-veloce): meno grassi bruciati proporzionalmente.",
        "Saltare colazione o pasti pensando che 'ridurre calorie basti': porta a binge serali.",
        "Non fare rinforzo muscolare: perdi massa magra insieme al grasso.",
        "Pesarsi ogni giorno: fluttuazioni di 1-2 kg sono normali e demoralizzano.",
        "Deficit calorico troppo aggressivo (>800 kcal/die): perdita massa magra + rebound garantito.",
        "Bere alcol regolarmente: 700 kcal da 3 birre annullano un'ora di corsa.",
      ],
    },
    {
      heading: "Combinare corsa e forza: la strategia ottimale",
      body: "Studi recenti mostrano che la combinazione corsa + resistance training produce risultati superiori sia alla corsa da sola sia alla sola forza per la ricomposizione corporea.\n\n**Programma settimanale ottimale:**\n- Lunedì: corsa Zona 2, 40 min.\n- Martedì: forza corpo intero, 40 min.\n- Mercoledì: corsa intervalli o riposo attivo.\n- Giovedì: forza (upper body + core) 30 min.\n- Venerdì: riposo.\n- Sabato: corsa lunga (60-75 min).\n- Domenica: camminata + stretching lungo.\n\nQuesta struttura preserva massa magra, migliora composizione corporea e riduce il rischio di infortuni tipico di chi corre soltanto.",
      variant: "default",
    },
  ],
  hubCategory: "nutrition",
  datePublished: "2026-07-06",
  dateModified: "2026-07-06",
  faq: [
    {
      q: "Quanto devo correre per perdere 1 kg?",
      a: "Servono circa 7.700 kcal di deficit per perdere 1 kg di grasso. Un runner di 70 kg brucia ~65 kcal/km, quindi servono circa 118 km di sola corsa. In realtà, combinando corsa + moderato deficit alimentare, 1 kg si perde in 1-2 settimane in modo sostenibile.",
    },
    {
      q: "Meglio correre a stomaco vuoto per dimagrire?",
      a: "La corsa a digiuno (fasted cardio) aumenta leggermente l'ossidazione dei grassi durante la sessione, ma non produce maggiore perdita di peso nell'arco della giornata. Ha però controindicazioni: peggiore performance, maggior rischio catabolismo muscolare e ipoglicemia. Non è consigliata per principianti.",
    },
    {
      q: "Meglio correre veloce o lento per dimagrire?",
      a: "La combinazione. La corsa lenta (Zona 2) massimizza l'uso dei grassi e permette volumi settimanali alti con basso rischio infortuni. La corsa veloce (intervalli) crea un afterburn (EPOC) che aumenta il consumo calorico anche nelle ore successive. 80% lento + 20% veloce è la formula ideale.",
    },
    {
      q: "Perché non dimagrisco anche se corro 3 volte a settimana?",
      a: "Cause tipiche: compensazione alimentare inconscia (mangi di più senza accorgertene), sovrastima delle calorie bruciate (gli orologi GPS le sovrastimano del 15-25%), ritenzione idrica da nuovo allenamento, perdita di grasso ma guadagno di massa magra (peso stabile ma silhouette migliora). Fai un diario alimentare per 2 settimane per capire cosa non torna.",
    },
  ],
};
