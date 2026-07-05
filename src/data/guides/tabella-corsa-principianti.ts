import { GuideContent } from "@/types/guide";
import guideMarathon from "@/assets/guide-marathon.webp";

export const tabellaCorsaPrincipianti: GuideContent = {
  title: "Tabella Corsa Principianti: 8 Settimane da Zero a 5K",
  seoTitle: "Tabella Corsa Principianti: da Zero a 5K in 8 Settimane",
  seoDescription: "Tabella di corsa per principianti di 8 settimane: programma progressivo settimanale per arrivare a correre 5 km senza fermarsi. Include consigli e recupero.",
  keywords: ["corsa principianti tabella", "programma corsa principianti", "tabella corsa 5k", "come iniziare a correre", "da zero a 5 km"],
  description: "Un programma completo di 8 settimane per passare dal divano ai 5 km di corsa continua, con dettaglio giornaliero e consigli pratici.",
  tags: ["beginners", "training", "5k"],
  heroImage: guideMarathon,
  readTime: "10 min di lettura",
  keyTakeaways: [
    "8 settimane sono sufficienti per arrivare a 5 km di corsa continua partendo da zero.",
    "Il metodo Walk-Run alterna corsa e camminata per abituare progressivamente muscoli, tendini e sistema cardiovascolare.",
    "3 sessioni a settimana, sempre a giorni alterni, per garantire il recupero.",
    "La regola d'oro: dovresti riuscire a parlare mentre corri (test della parola).",
    "Salta un giorno se sei stanco o dolorante: recuperare vale più che rispettare la tabella.",
  ],
  relatedTools: [
    { to: "/tools/shoes", label: "Shoe Finder" },
    { to: "/tools/calories", label: "Calcolatore Calorie" },
  ],
  relatedGuides: [
    { slug: "choosing-running-shoes", label: "Come Scegliere le Scarpe da Corsa" },
    { slug: "running-heart-rate-zones", label: "Zone Cardio per la Corsa" },
    { slug: "injury-prevention", label: "Prevenzione Infortuni" },
  ],
  sections: [
    {
      heading: "Prima di iniziare: 4 controlli veloci",
      body: "Correre da zero è una delle attività aerobiche più accessibili, ma alcuni preparativi riducono a zero il rischio di abbandono o infortunio.\n\n1. **Visita medico-sportiva non agonistica**: obbligatoria in Italia per attività organizzata, comunque consigliata sopra i 35 anni o con familiarità cardiovascolare.\n2. **Scarpe da running vere** (non da palestra o casual): un modello ammortizzato neutro entry-level costa 70-100€. Le scarpe sbagliate sono la prima causa di infortuni nei principianti.\n3. **Abbigliamento tecnico** (non cotone): magliette traspiranti evitano irritazioni.\n4. **App o cronometro**: serve per gestire con precisione gli intervalli corsa/cammino.",
      variant: "highlight",
    },
    {
      heading: "Il metodo Walk-Run: perché funziona",
      body: "Il metodo Walk-Run (o 'Couch to 5K') è validato da decenni di pratica e ricerca. Alternare corsa e camminata permette di **allenare il sistema cardiovascolare più velocemente di quanto tendini, ossa e articolazioni possano adattarsi**. Le pause in cammino evitano il sovraccarico che porta all'80% degli infortuni nei principianti.\n\nOgni settimana la fase di corsa si allunga e quella di cammino si riduce, fino ad arrivare alla corsa continua. Il progresso è graduale ma reale: nessuna scorciatoia, nessun 'sforzo eroico'.",
      variant: "default",
    },
    {
      heading: "Settimane 1-2: adattamento iniziale",
      body: "L'obiettivo qui non è correre veloce ma **abituare il corpo al movimento ciclico della corsa**. Ritmo: molto blando, dovresti riuscire a parlare senza ansimare.",
      variant: "default",
      listItems: [
        "Settimana 1 (3 sessioni): 5 min riscaldamento cammino + 8x(1 min corsa + 90 s cammino) + 5 min defaticamento. Totale ~30 min.",
        "Settimana 2 (3 sessioni): 5 min cammino + 6x(90 s corsa + 2 min cammino) + 5 min cammino. Totale ~31 min.",
        "Giorni consigliati: Lun / Mer / Ven (o Mar / Gio / Sab). Mai due giorni di fila.",
        "Nel giorno di riposo: cammina 20-30 min o fai stretching leggero.",
      ],
    },
    {
      heading: "Settimane 3-4: costruzione della base",
      body: "Il corpo comincia a rispondere. Cuore più efficiente, gambe più forti. Continua a rispettare i tempi anche se ti senti in grado di correre di più: la pazienza qui evita gli infortuni delle prossime settimane.",
      variant: "default",
      listItems: [
        "Settimana 3 (3 sessioni): 5 min cammino + 2x(90 s corsa + 90 s cammino + 3 min corsa + 3 min cammino). Totale ~28 min.",
        "Settimana 4 (3 sessioni): 5 min cammino + (3 min corsa + 90 s cammino + 5 min corsa + 2,5 min cammino + 3 min corsa + 90 s cammino + 5 min corsa). Totale ~32 min.",
        "Iniziare a bere piccole quantità d'acqua se le sedute superano i 30 min.",
        "Se compare dolore che non passa in 24h, salta la seduta successiva.",
      ],
    },
    {
      heading: "Settimane 5-6: il grande salto",
      body: "Queste sono le settimane in cui molti abbandonano: le corsette diventano più lunghe e mentalmente impegnative. Fidati del programma: se hai completato le prime 4 settimane, hai già la base per farcela.",
      variant: "default",
      listItems: [
        "Settimana 5 sessione 1: 5 min cammino + (5 min corsa + 3 min cammino) x3. Totale ~29 min.",
        "Settimana 5 sessione 2: 5 min cammino + (8 min corsa + 5 min cammino + 8 min corsa). Totale ~26 min.",
        "Settimana 5 sessione 3: 5 min cammino + 20 min corsa continua + 5 min cammino. Totale ~30 min.",
        "Settimana 6 sessione 1: 5 min cammino + (5 min corsa + 3 min cammino + 8 min corsa + 3 min cammino + 5 min corsa). Totale ~29 min.",
        "Settimana 6 sessione 2: 5 min cammino + (10 min corsa + 3 min cammino + 10 min corsa). Totale ~28 min.",
        "Settimana 6 sessione 3: 5 min cammino + 25 min corsa continua. Totale ~30 min.",
      ],
    },
    {
      heading: "Settimane 7-8: arrivare ai 5 km",
      body: "L'obiettivo diventa concreto: 5 km di corsa continua. A ritmo blando (di solito 30-40 min per un principiante). Non pensare al tempo, pensa alla continuità.",
      variant: "tip",
      listItems: [
        "Settimana 7 sessione 1: 5 min cammino + 25 min corsa continua.",
        "Settimana 7 sessione 2: 5 min cammino + 28 min corsa continua.",
        "Settimana 7 sessione 3: 5 min cammino + 30 min corsa continua.",
        "Settimana 8 sessione 1: 5 min cammino + 30 min corsa continua.",
        "Settimana 8 sessione 2: 5 min cammino + 5 km (circa 32-40 min).",
        "Settimana 8 sessione 3: la tua prima 5K! Cerca un percorso pianeggiante e misurato.",
      ],
    },
    {
      heading: "Regole di sopravvivenza per non mollare",
      body: "Il 60% di chi inizia a correre abbandona entro 3 mesi. Queste sono le abitudini di chi invece resta.",
      variant: "checklist",
      listItems: [
        "Rispetta i giorni di riposo anche se ti senti bene: il progresso avviene nel recupero.",
        "Non aumentare il tempo totale settimanale più del 10% da una settimana all'altra.",
        "Se ti manca una seduta, riprendi da dove eri, non 'recuperare' due sedute in una.",
        "Cerca un compagno di corsa o un gruppo: riduce l'abbandono del 40%.",
        "Registra ogni seduta: vedere il progresso scritto è potente motivazionalmente.",
        "In caso di dolore che dura oltre 3 giorni, ferma tutto e consulta un fisioterapista.",
      ],
    },
    {
      heading: "Dopo gli 8 settimane: come continuare",
      body: "Congratulazioni, hai completato la tabella. Adesso hai davanti tre strade:\n\n- **Consolidare** i 5 km facendoli 3 volte a settimana per un mese, migliorando gradualmente il ritmo.\n- **Allungare** verso i 10 km con un nuovo programma di 6-8 settimane (aggiungendo 5-10% di volume settimanale).\n- **Iscriverti a una corsa non competitiva** (Run 5K locali): l'obiettivo dà struttura all'allenamento.\n\nEvita l'errore classico: **non passare direttamente alla mezza maratona**. Consolida prima una base solida sui 10 km per almeno 2-3 mesi.",
      variant: "default",
    },
  ],
  hubCategory: "shoes",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  faq: [
    {
      q: "In quanto tempo un principiante può correre 5 km?",
      a: "Con un programma strutturato di 3 sessioni settimanali, un adulto sano parte da zero e arriva a 5 km continui in 8 settimane. Chi ha già una minima base di camminata veloce può farcela anche in 6 settimane. L'importante è rispettare i giorni di riposo.",
    },
    {
      q: "Quante volte a settimana deve correre un principiante?",
      a: "Tre volte a settimana a giorni alterni è il numero ottimale per un principiante. Meno di due sedute rende difficile il progresso; più di tre aumenta molto il rischio di infortuni prima che ossa e tendini si siano adattati.",
    },
    {
      q: "A che ritmo deve correre un principiante?",
      a: "A un ritmo che permetta di parlare a frasi complete senza ansimare (il 'test della parola'). In genere per un principiante corrisponde a 7:00-8:00 min/km. La velocità arriverà dopo, prima serve costruire la base aerobica.",
    },
    {
      q: "Cosa fare se manco una sessione della tabella?",
      a: "Se salti una seduta, riprendi da dove eri: non cercare di recuperare due sessioni in una. Se salti un'intera settimana, ripeti la settimana precedente prima di procedere. Meglio 9 settimane senza infortuni che 7 con una ricaduta.",
    },
  ],
};
