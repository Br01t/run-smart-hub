import { GuideContent } from "@/types/guide";
import guideInjury from "@/assets/guide-injury.webp";

export const doloreGinocchioDopoCorsa: GuideContent = {
  title: "Dolore al Ginocchio Dopo la Corsa: Diagnosi e Recupero",
  seoTitle: "Dolore Ginocchio Dopo Corsa: Cause e Recupero 2026",
  seoDescription: "Perché ti fa male il ginocchio dopo aver corso: guida pratica per identificare la causa, capire quando fermarsi e il protocollo di recupero in 4 settimane.",
  keywords: ["dolore ginocchio dopo corsa", "ginocchio gonfio dopo corsa", "ginocchio dolorante corsa", "recupero ginocchio corsa", "corsa e ginocchio infiammato"],
  description: "Come distinguere un dolore normale da un infortunio serio, cosa fare nelle prime 48 ore e il protocollo di recupero settimana per settimana.",
  tags: ["injury", "knee", "recovery", "prevention"],
  heroImage: guideInjury,
  readTime: "10 min di lettura",
  keyTakeaways: [
    "Dolore che passa in 24-48 ore = normale adattamento. Dolore che dura oltre 3 giorni = infortunio da valutare.",
    "Le 3 cause più comuni: sindrome femoro-rotulea (anteriore), bandelletta ileotibiale (laterale), tendinopatia rotulea (sotto la rotula).",
    "Il 'test del gradino': se scendere le scale ti fa male più che salirle, quasi sempre è la rotula.",
    "Nelle prime 48h protocollo POLICE (non più RICE): Protection, Optimal Loading, Ice, Compression, Elevation.",
    "Rinforzo di glutei e quadricipiti riduce il rischio di recidiva del 40-60%.",
  ],
  relatedTools: [
    { to: "/tools/shoes", label: "Trova le Scarpe Giuste" },
  ],
  relatedGuides: [
    { slug: "ginocchio-del-corridore", label: "Ginocchio del Corridore: Guida Completa" },
    { slug: "injury-prevention", label: "Prevenzione Infortuni per Runner" },
    { slug: "muscle-recovery", label: "Recupero Muscolare Dopo la Corsa" },
  ],
  sections: [
    {
      heading: "Dolore fisiologico o infortunio? La regola delle 72 ore",
      body: "Non tutti i dolori al ginocchio sono uguali. Dopo una corsa lunga o un allenamento intenso è normale sentire indolenzimento diffuso per 24-48 ore (DOMS + infiammazione da carico). Diventa un segnale d'allarme quando:\n\n- persiste oltre 72 ore senza attenuarsi\n- peggiora invece di migliorare\n- il ginocchio si gonfia visibilmente\n- senti scrosci o instabilità\n- il dolore è localizzato in un punto preciso e riproducibile\n\nIn questi casi ferma la corsa e valuta l'infortunio con calma, prima che diventi cronico.",
      variant: "highlight",
    },
    {
      heading: "Localizzazione del dolore: la mappa diagnostica",
      body: "Dove fa male dice quasi tutto sulla causa. Palpati il ginocchio a freddo e individua il punto esatto.",
      variant: "default",
      listItems: [
        "Anteriore (sotto/attorno alla rotula) → Sindrome femoro-rotulea (runner's knee).",
        "Laterale (lato esterno) → Sindrome della bandelletta ileotibiale (ITBS).",
        "Sotto la rotula, sul tendine → Tendinopatia rotulea (jumper's knee).",
        "Mediale (lato interno) → Sovraccarico del vasto mediale o menisco.",
        "Posteriore (dietro) → Cisti di Baker o tendine popliteo.",
      ],
    },
    {
      heading: "Il test del gradino: distingui rotula da bandelletta",
      body: "Un semplice test casalingo che aiuta a orientarsi.\n\n**Test:** sali e scendi un gradino singolo, lentamente, appoggiando solo la gamba dolorante.\n\n- Se **scendere** fa più male di salire → quasi sempre problema femoro-rotuleo (carico eccentrico sul quadricipite).\n- Se il dolore è **laterale e compare dopo qualche minuto** di corsa/discesa → tipico della bandelletta ileotibiale.\n- Se fa male **sotto la rotula quando salti** o accelleri → tendinopatia rotulea.\n\nQuesta autodiagnosi non sostituisce un fisioterapista, ma ti dà un'ipotesi di lavoro per iniziare il recupero.",
      variant: "tip",
    },
    {
      heading: "Le prime 48 ore: protocollo POLICE",
      body: "Il vecchio RICE (Rest-Ice-Compression-Elevation) è stato aggiornato in **POLICE** perché il riposo assoluto rallenta il recupero.\n\n- **P**rotection: evita movimenti dolorosi ma non immobilizzare.\n- **O**ptimal **L**oading: cammina se non fa male, mobilizza dolcemente.\n- **I**ce: 15-20 min ogni 2-3 ore nelle prime 48h se c'è gonfiore.\n- **C**ompression: fascia elastica leggera per limitare l'edema.\n- **E**levation: gamba sopra il livello del cuore quando riposi.\n\nEvita FANS (ibuprofene, ketoprofene) nei primi 3 giorni: bloccano l'infiammazione utile alla riparazione tissutale.",
      variant: "warning",
    },
    {
      heading: "Protocollo di recupero in 4 settimane",
      body: "Un piano progressivo generico per infortuni lievi/medi (non sostituisce la valutazione del fisioterapista).",
      variant: "default",
      listItems: [
        "Settimana 1: stop corsa. Camminata, bici a bassa resistenza, mobilità dell'anca 15 min/die.",
        "Settimana 2: aggiungi rinforzo isometrico (wall sit 3x30\", clam shell 3x15) e stretching bandelletta/quadricipite.",
        "Settimana 3: introduci esercizi eccentrici (single leg squat 3x8, step down 3x10). Prima corsetta test 1-2 km su piano.",
        "Settimana 4: se test asintomatico, riparti con protocollo run-walk 5x(2' corsa + 1' cammino), 3 volte a settimana.",
        "Regola d'oro: incrementa il volume max +10%/settimana per il mese successivo.",
      ],
    },
    {
      heading: "Le 5 cause che ti fanno tornare l'infortunio",
      body: "Riprendere a correre senza rimuovere la causa iniziale porta quasi sempre a recidiva. Verifica questi punti.",
      variant: "checklist",
      listItems: [
        "Scarpe usurate oltre i 600-800 km: la schiuma non ammortizza più.",
        "Aumento volume settimanale >10% (violazione regola dei 10%).",
        "Debolezza glutei medi: causa collasso del ginocchio verso l'interno.",
        "Cadenza troppo bassa (<165 spm): aumenta forze verticali di impatto.",
        "Trascurare rinforzo e mobilità in favore del solo running.",
      ],
    },
    {
      heading: "Quando andare dal medico o dal fisioterapista",
      body: "Non aspettare che il dolore diventi cronico. Consulta uno specialista se:\n\n- Il dolore non migliora in 7-10 giorni con riposo relativo.\n- Il ginocchio cede o si blocca in flessione/estensione.\n- Il gonfiore è marcato e non regredisce.\n- Senti scrosci articolari con dolore.\n- Il dolore compare anche a riposo o di notte.\n\nUn fisioterapista specializzato in sport riabilitation può identificare la causa biomeccanica (non solo trattare il sintomo) e costruire un piano di rinforzo su misura.",
      variant: "default",
    },
  ],
  hubCategory: "recovery",
  datePublished: "2026-07-06",
  dateModified: "2026-07-06",
  faq: [
    {
      q: "Quanto tempo devo stare fermo se ho dolore al ginocchio dopo la corsa?",
      a: "Dipende dalla gravità: per un dolore lieve 3-5 giorni di riposo attivo (cammino, bici) sono spesso sufficienti. Per sindrome femoro-rotulea o bandelletta ileotibiale servono in genere 2-4 settimane di stop + rinforzo prima di riprendere.",
    },
    {
      q: "Posso continuare a correre con dolore lieve al ginocchio?",
      a: "No. La regola è: se il dolore su una scala 0-10 supera 3/10 durante la corsa, o peggiora nelle ore successive, fermati. Continuare trasforma un problema acuto in cronico e allunga i tempi di recupero.",
    },
    {
      q: "Meglio ghiaccio o caldo per il dolore al ginocchio post-corsa?",
      a: "Ghiaccio nelle prime 48-72 ore se c'è gonfiore o dolore acuto. Caldo dopo la fase acuta per rilassare la muscolatura e migliorare la circolazione. Alternati (contrast therapy) sono utili in fase sub-acuta.",
    },
    {
      q: "Il ginocchio scrocchia mentre cammino: è grave?",
      a: "Scrosci senza dolore (crepitii articolari) sono nella maggior parte dei casi innocui e legati alla dinamica di cartilagine e liquidi. Se accompagnati da dolore, gonfiore o blocchi articolari, invece, servono una valutazione ortopedica.",
    },
  ],
};
