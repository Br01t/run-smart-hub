import { GuideContent } from "@/types/guide";
import guideMarathon from "@/assets/guide-marathon.webp";

export const mezzaMaratona2Mesi: GuideContent = {
  title: "Mezza Maratona in 2 Mesi: È Possibile? Tabella Reale",
  seoTitle: "Preparare Mezza Maratona in 2 Mesi: Tabella e Consigli",
  seoDescription: "Come preparare una mezza maratona in 2 mesi: chi può realmente farla, tabella settimanale di 8 settimane, prevenzione infortuni e strategia di gara.",
  keywords: ["come preparare una mezza maratona in due mesi", "mezza maratona 2 mesi", "preparazione mezza in 8 settimane", "tabella mezza maratona 2 mesi"],
  description: "Piano realistico di 8 settimane per completare una mezza maratona partendo da una base di corsa esistente. Con tabella dettagliata e strategia di gara.",
  tags: ["training", "half-marathon", "endurance"],
  heroImage: guideMarathon,
  readTime: "10 min di lettura",
  keyTakeaways: [
    "2 mesi bastano SOLO se hai già una base: minimo 15 km/settimana da 2-3 mesi.",
    "Il long run cresce da 8 km a 18 km in 8 settimane con incrementi max +2 km/settimana.",
    "L'obiettivo realistico per la maggior parte è COMPLETARE, non fare tempo: tra 2h e 2h30'.",
    "L'ultimo long run (18 km) va fatto 2 settimane prima della gara, poi tapering.",
    "Prova gel, scarpe e vestiti IN allenamento: niente di nuovo il giorno della gara.",
  ],
  relatedTools: [
    { to: "/tools/hydration", label: "Calcolatore Idratazione" },
    { to: "/tools/electrolytes", label: "Calcolatore Elettroliti" },
  ],
  relatedGuides: [
    { slug: "marathon-training", label: "Guida alla Maratona per Principianti" },
    { slug: "running-nutrition", label: "Nutrizione per la Corsa" },
    { slug: "gel-energetici-corsa", label: "Gel Energetici per la Corsa" },
  ],
  sections: [
    {
      heading: "2 mesi bastano davvero? La risposta onesta",
      body: "Preparare una mezza maratona in 2 mesi è possibile ma **NON per chiunque**. Le linee guida della sports medicine raccomandano una preparazione di 12-16 settimane. Comprimere a 8 settimane funziona solo se:\n\n- Corri già almeno 15 km/settimana da almeno 2-3 mesi\n- Riesci a correre 8 km continui senza fermarti oggi\n- Non hai infortuni in corso o recenti\n- Puoi dedicare 4 sessioni a settimana alla corsa\n- Il tuo obiettivo è **finire**, non fare un tempo specifico\n\nSe parti da zero corsa, 2 mesi sono pericolosi: il rischio di infortunio arriva al 60-70%. In quel caso pianifica una mezza a 4-6 mesi.",
      variant: "warning",
    },
    {
      heading: "Struttura del piano: 4 uscite a settimana",
      body: "Il piano si basa su 4 tipologie di uscita, ognuna con un obiettivo fisiologico preciso.\n\n1. **Corsa lenta (Zona 2)**: costruisce base aerobica, migliora efficienza mitocondriale.\n2. **Corsa media**: sviluppa soglia lattacida (Zona 3-4).\n3. **Intervalli**: migliora VO2max e economia di corsa.\n4. **Long run**: adatta muscoli, tendini e apparato gastrointestinale a distanze lunghe.\n\nRegole d'oro:\n- Mai correre 2 giorni consecutivi allo stesso ritmo intenso.\n- Long run sempre al ritmo più lento della settimana (30-45\" più lento del ritmo gara previsto).\n- 1 settimana di scarico ogni 3 di carico.",
      variant: "highlight",
    },
    {
      heading: "Tabella 8 settimane completa",
      body: "Piano dettagliato con volumi settimanali. Ritmo lento = Zona 2 (conversazionale); ritmo medio = Zona 3 (respirazione controllata); ritmo veloce = Zona 4 (respirazione impegnativa).",
      variant: "default",
      listItems: [
        "Sett 1: Mar 6 km lento | Gio 5 km lento + 4x100m | Sab 6 km medio | Dom LUNGO 10 km lento. Totale 27 km.",
        "Sett 2: Mar 6 km lento | Gio 6 km + 6x300m recupero 1' | Sab 6 km medio | Dom LUNGO 12 km lento. Totale 30 km.",
        "Sett 3: Mar 7 km lento | Gio 6 km + 5x600m recupero 90\" | Sab 7 km medio | Dom LUNGO 14 km lento. Totale 34 km.",
        "Sett 4 (SCARICO): Mar 5 km lento | Gio 5 km lento | Sab 6 km medio | Dom LUNGO 10 km lento. Totale 26 km.",
        "Sett 5: Mar 7 km lento | Gio 8 km + 4x1km recupero 2' | Sab 8 km medio | Dom LUNGO 15 km lento. Totale 38 km.",
        "Sett 6: Mar 8 km lento | Gio 8 km + 3x1600m recupero 2' | Sab 8 km medio | Dom LUNGO 17 km lento. Totale 41 km.",
        "Sett 7: Mar 8 km lento | Gio 6 km + 5x600m veloce | Sab 6 km medio | Dom LUNGO 18 km lento. Totale 38 km.",
        "Sett 8 (TAPER): Mar 6 km lento | Gio 5 km + 4x300m | Sab 4 km lento + 4x100m | Dom GARA 21,097 km. Totale 36 km.",
      ],
    },
    {
      heading: "Alimentazione durante gli allenamenti lunghi",
      body: "I long run oltre i 90 minuti richiedono integrazione di carboidrati per non incorrere nella crisi glicemica.\n\n**Regole pratiche:**\n- Colazione 2-3 ore prima: 60-80 g di carboidrati (avena, banana, toast + miele).\n- Durante corsa 10-14 km: acqua sufficiente + 1 gel al 60° minuto.\n- Durante corsa 15-18 km: 1 gel ogni 30-40 min (2-3 gel totali).\n- Idratazione: 400-600 ml/h a seconda del caldo.\n\nUsa GLI STESSI gel e le stesse bevande che userai in gara. Il gut training (allenamento dell'intestino) è essenziale per evitare disturbi gastrici il giorno della mezza.",
      variant: "tip",
    },
    {
      heading: "La settimana di tapering: cosa fare (e non fare)",
      body: "L'ultima settimana serve a scaricare la fatica accumulata mantenendo l'attivazione neuromuscolare. Gli errori qui possono rovinare mesi di lavoro.\n\n**Cosa fare:**\n- Ridurre volume del 40-50% ma mantenere qualche allungo veloce.\n- Dormire 8+ ore ogni notte (banking del sonno).\n- Aumentare i carboidrati negli ultimi 3 giorni (5-7 g/kg).\n- Idratarsi bene: urine chiare 2 volte al giorno.\n- Provare mentalmente la gara: visualizzazione dei km chiave.\n\n**Cosa NON fare:**\n- Ultimo long run nell'ultima settimana (fatica non smaltibile).\n- Provare gel o scarpe nuove.\n- Iniziare massaggi profondi mai fatti.\n- Trasferte lunghe o eventi stressanti.\n- Salti di pasto o diete restrittive.",
      variant: "highlight",
    },
    {
      heading: "Strategia di gara: come non 'esplodere' a metà",
      body: "L'errore più comune del debuttante è partire troppo veloce. La regola: dividi la gara in 3 parti.",
      variant: "checklist",
      listItems: [
        "Km 1-7: parti 15-20\"/km più lento del ritmo obiettivo. Sentirai che vai piano: è giusto.",
        "Km 8-14: stabilizza sul ritmo obiettivo, respiro controllato.",
        "Km 15-18: mantieni il ritmo, gestisci la fatica mentalmente.",
        "Km 19-21: se hai energie, aumenta gradualmente. Non 'sprinta' fino agli ultimi 500m.",
        "Bevi a ogni ristoro anche se non hai sete: la sete arriva tardi.",
        "Se hai crampi: rallenta, cammina 60\", riprendi. Non fermarti completamente.",
      ],
    },
    {
      heading: "Quando fermarsi: segnali di allarme durante la preparazione",
      body: "Comprimere una preparazione aumenta il rischio infortuni. Riconosci i campanelli d'allarme e agisci.\n\n- Frequenza cardiaca a riposo +5-8 bpm per 3 giorni consecutivi → probabile sovraccarico.\n- Dolore che aumenta durante la corsa (non si scalda) → sospendi.\n- Sonno peggiorato + irritabilità → riduci volume.\n- Dolore osseo puntuale su tibia, metatarso, femore → possibile stress fracture: STOP e visita.\n- Persistente calo delle performance → 1 settimana di scarico completo.\n\nMeglio saltare la gara (o farla al 70%) che infortunarsi per mesi. La mezza esisterà ancora tra 4 mesi.",
      variant: "warning",
    },
  ],
  hubCategory: "shoes",
  datePublished: "2026-07-06",
  dateModified: "2026-07-06",
  faq: [
    {
      q: "Quanto tempo minimo serve per preparare una mezza maratona?",
      a: "Da zero corsa serve un minimo di 16 settimane per lavorare in sicurezza. Se hai già una base di 15-20 km/settimana da 2-3 mesi, 8-12 settimane sono sufficienti. 4 settimane sono sconsigliate a chiunque per rischio infortunio elevato.",
    },
    {
      q: "Che tempo posso fare in una mezza maratona con 2 mesi di preparazione?",
      a: "Per un debuttante con base di corsa, i tempi realistici sono: 1h50-2h per runner allenati, 2h-2h20 per runner intermedi, 2h20-2h40 per chi vuole solo finire. L'obiettivo con 2 mesi di preparazione dovrebbe essere completare, non ottimizzare il tempo.",
    },
    {
      q: "Quanti chilometri devo correre a settimana per una mezza in 2 mesi?",
      a: "Il volume settimanale sale da 25-27 km nelle prime settimane a 38-41 km nel picco. Il long run cresce da 10 km a 18 km. Se non riesci a sostenere questi volumi, allunga la preparazione: comprimere di più aumenta troppo il rischio infortunio.",
    },
    {
      q: "Cosa mangiare la mattina della mezza maratona?",
      a: "3 ore prima della gara: 60-80 g di carboidrati facilmente digeribili (pane bianco/miele, avena con banana, cereali). Un caffè se sei abituato. NIENTE grassi, fibre alte, latticini se ti danno fastidio. 15-20 min prima: eventualmente un gel se hai dormito poco o hai lo stomaco vuoto.",
    },
  ],
};
