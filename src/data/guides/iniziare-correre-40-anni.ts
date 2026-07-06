import { GuideContent } from "@/types/guide";
import guideMarathon from "@/assets/guide-marathon.webp";

export const iniziareCorrere40Anni: GuideContent = {
  title: "Iniziare a Correre a 40 Anni: Guida Sicura e Progressiva",
  seoTitle: "Iniziare a Correre a 40 Anni: Programma Sicuro 2026",
  seoDescription: "Come iniziare a correre a 40 anni in sicurezza: controlli medici da fare, programma progressivo di 10 settimane, prevenzione infortuni e recupero.",
  keywords: ["come iniziare a correre a 40 anni", "correre a 40 anni", "iniziare corsa 40 anni", "correre dopo i 40", "corsa e età"],
  description: "Guida completa per chi vuole iniziare a correre a 40 anni: controlli medici, programma progressivo, prevenzione infortuni e adattamenti specifici per questa età.",
  tags: ["beginner", "training", "prevention", "recovery"],
  heroImage: guideMarathon,
  readTime: "10 min di lettura",
  keyTakeaways: [
    "A 40 anni si può iniziare a correre benissimo, ma serve un approccio più prudente rispetto ai 20enni.",
    "Consigliata visita medica sportiva + ECG a riposo/da sforzo prima di iniziare.",
    "Il metodo run-walk (alternanza corsa/cammino) riduce del 60-70% il rischio di infortuni nei principianti over 40.",
    "Dopo i 40 il recupero richiede 25-50% di tempo in più: rispetta i giorni di riposo.",
    "2-3 sessioni di rinforzo a settimana sono più importanti che a 25 anni per prevenire infortuni.",
  ],
  relatedTools: [
    { to: "/tools/bmi", label: "Calcolatore BMI" },
    { to: "/tools/shoes", label: "Trova le Scarpe Giuste" },
  ],
  relatedGuides: [
    { slug: "tabella-corsa-principianti", label: "Tabella Corsa Principianti da Zero a 5K" },
    { slug: "injury-prevention", label: "Prevenzione Infortuni per Runner" },
    { slug: "iniziare-correre-50-anni", label: "Iniziare a Correre a 50 Anni" },
  ],
  sections: [
    {
      heading: "Iniziare a 40 anni: cosa cambia rispetto ai 20 anni",
      body: "A 40 anni il tuo corpo può ancora adattarsi eccellentemente alla corsa, ma partì con condizioni diverse dal ventenne:\n\n- **Massa muscolare**: cala fisiologicamente dell'1% l'anno dopo i 30 (sarcopenia). Serve rinforzo mirato.\n- **Elasticità tendinea**: ridotta del 20-30% rispetto ai 20 anni. Servono progressioni più lente.\n- **Recupero**: richiede 25-50% di tempo in più. Le sessioni consecutive stressano di più.\n- **VO2max**: si può migliorare, ma il picco è più basso. Non serve confrontarsi con i 20enni.\n- **Salute cardiovascolare**: prima volta in cui uno screening medico ha davvero senso.\n\nBuona notizia: con un approccio intelligente puoi arrivare a completare una mezza maratona in 6-8 mesi partendo da zero.",
      variant: "highlight",
    },
    {
      heading: "I controlli medici da fare PRIMA di iniziare",
      body: "Non è pignoleria: dopo i 40 anni lo screening cardiovascolare è raccomandato da tutte le linee guida sportive.",
      variant: "warning",
      listItems: [
        "Visita medico-sportiva con ECG a riposo (obbligatoria in Italia per tesserati, consigliata sempre).",
        "ECG da sforzo (test ergometrico) se hai fattori di rischio: fumo, familiarità cardiaca, ipertensione, colesterolo alto.",
        "Esami del sangue: glicemia, colesterolo totale/HDL/LDL, ferritina, vitamina D, TSH.",
        "Valutazione posturale/podologica se hai avuto problemi articolari o ortopedici in passato.",
        "Misurazione pressione a riposo (a casa, per 5 giorni): se >140/90 parla col medico prima.",
      ],
    },
    {
      heading: "Il metodo run-walk: la chiave del successo a 40 anni",
      body: "L'errore fatale del principiante over 40 è provare a correre 30 minuti filati dalla prima settimana. Risultato: infortunio in 2-3 settimane.\n\nIl metodo run-walk (Jeff Galloway) alterna brevi periodi di corsa a brevi periodi di cammino. Ricerche mostrano che riduce del 60-70% il rischio di infortuni nei principianti maturi, migliorando comunque la fitness allo stesso ritmo.\n\n**Progressione tipo:**\n- Settimana 1-2: 5x (1' corsa + 2' cammino) × 3 volte/settimana\n- Settimana 3-4: 6x (2' corsa + 1' cammino)\n- Settimana 5-6: 5x (3' corsa + 1' cammino)\n- Settimana 7-8: 3x (5' corsa + 1' cammino)\n- Settimana 9-10: corsa continua 20-25 minuti",
      variant: "tip",
    },
    {
      heading: "Programma completo 10 settimane da zero",
      body: "Piano progressivo pensato per un over 40 senza esperienza di corsa recente.",
      variant: "default",
      listItems: [
        "Settimana 1: 3 sessioni x 20' (5x (1' run + 2' walk)) + 2 camminate 30'.",
        "Settimana 2: 3 sessioni x 22' (6x (1'30\" run + 2' walk)).",
        "Settimana 3: 3 sessioni x 25' (5x (3' run + 2' walk)).",
        "Settimana 4: SCARICO — 3 sessioni x 20' + focus stretching e rinforzo.",
        "Settimana 5: 3 sessioni x 27' (4x (5' run + 2' walk)).",
        "Settimana 6: 3 sessioni x 30' (3x (8' run + 2' walk)).",
        "Settimana 7: 3 sessioni x 30' (2x (12' run + 2' walk)).",
        "Settimana 8: SCARICO — 2 sessioni x 25' + 1 camminata veloce.",
        "Settimana 9: 3 sessioni: 20' corsa continua + 25' corsa continua + 20' corsa continua.",
        "Settimana 10: 3 sessioni x 25-30' corsa continua. Test finale: 5 km non-stop.",
      ],
    },
    {
      heading: "Rinforzo muscolare: non facoltativo a 40 anni",
      body: "A 40 anni la sarcopenia (perdita muscolare) è già iniziata. Se corri senza rinforzare, i muscoli non riescono a proteggere articolazioni e tendini dalle forze di impatto della corsa (2-3 volte il peso corporeo per passo).\n\n**Programma minimo essenziale (2 volte/settimana, 20 minuti):**\n- Squat corpo libero 3x12\n- Affondi laterali 3x10 per lato\n- Ponte glutei 3x15\n- Plank 3x30\"\n- Clam shell (rinforzo glutei medi) 3x15 per lato\n\nInizia in giornate di non-corsa. Con il tempo puoi aggiungere pesi o macchine in palestra.",
      variant: "default",
    },
    {
      heading: "Recupero e riposo: la variabile decisiva",
      body: "A 40 anni il recupero non è più immediato come a 20. Rispetta queste regole d'oro.",
      variant: "checklist",
      listItems: [
        "Mai correre 2 giorni consecutivi nelle prime 8 settimane.",
        "Sonno: minimo 7 ore, ideale 8. Il recupero avviene nel sonno profondo.",
        "1 giorno di riposo completo alla settimana (nessuna attività strutturata).",
        "Cross-training (bici, nuoto) nei giorni di non corsa se vuoi restare attivo.",
        "Ascolta il corpo: 2 giorni di fatica anomala = riduci il carico, non insistere.",
      ],
    },
    {
      heading: "Gli errori più comuni che portano all'infortunio",
      body: "Il 60% dei principianti over 40 abbandona per infortunio entro 6 mesi. Evita queste trappole tipiche.",
      variant: "warning",
      listItems: [
        "Aumentare volume e intensità nella stessa settimana.",
        "Correre in scarpe da ginnastica generiche invece che scarpe da running specifiche.",
        "Saltare riscaldamento e defaticamento pensando che 'non servano'.",
        "Correre su asfalto duro tutte le volte: alterna con parco/sentiero.",
        "Confrontarsi con runner esperti o con il proprio 'io' di 20 anni fa.",
      ],
    },
  ],
  hubCategory: "shoes",
  datePublished: "2026-07-06",
  dateModified: "2026-07-06",
  faq: [
    {
      q: "È pericoloso iniziare a correre a 40 anni?",
      a: "No, purché si faccia uno screening cardiologico preventivo e si segua una progressione graduale. Le linee guida internazionali (ACSM) considerano la corsa un'attività sicura e altamente raccomandata a qualsiasi età, con benefici cardiovascolari, metabolici e cognitivi importanti dopo i 40.",
    },
    {
      q: "Quanto tempo serve per correre 5 km continui partendo da zero a 40 anni?",
      a: "In media 8-12 settimane seguendo un programma run-walk progressivo. Alcuni ci arrivano in 6, altri in 14: dipende dalla condizione di partenza, dal peso, dalla regolarità dell'allenamento e dalla qualità del recupero. Non serve avere fretta.",
    },
    {
      q: "Quante volte a settimana devo correre a 40 anni?",
      a: "3 sessioni a settimana è l'ideale nei primi 6 mesi: permette recupero adeguato e progressi costanti. Aggiungi 1-2 sessioni di rinforzo muscolare e 1 di cross-training (bici o nuoto). Salire a 4-5 corse a settimana è sensato solo dopo 6-12 mesi di continuità.",
    },
    {
      q: "Correre a 40 anni fa male alle ginocchia?",
      a: "No, è un mito. Le meta-analisi più recenti mostrano che i runner amatoriali hanno un rischio di artrosi al ginocchio INFERIORE ai sedentari (3,5% vs 10,2%). Il problema non è la corsa in sé ma sovraccarichi mal gestiti: progressione lenta e rinforzo muscolare la rendono protettiva per le articolazioni.",
    },
  ],
};
