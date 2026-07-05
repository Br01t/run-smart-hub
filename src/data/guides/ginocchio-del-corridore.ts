import { GuideContent } from "@/types/guide";
import guideInjury from "@/assets/guide-injury.webp";

export const ginocchioDelCorridore: GuideContent = {
  title: "Ginocchio del Corridore: Sintomi, Cause e Rimedi Efficaci",
  seoTitle: "Ginocchio del Corridore: Sintomi, Cause e Come Curarlo",
  seoDescription: "Ginocchio del corridore (sindrome femoro-rotulea e bandelletta ileotibiale): sintomi, cause, esercizi di recupero e prevenzione basati su evidenze.",
  keywords: ["ginocchio del corridore", "dolore ginocchio corsa", "dolore ginocchio dopo corsa", "sindrome femoro-rotulea corsa", "bandelletta ileotibiale runner"],
  description: "Guida pratica al 'ginocchio del corridore': cosa è davvero, come distinguerlo dalla sindrome della bandelletta e quali esercizi funzionano.",
  tags: ["injuries", "knee", "prevention", "recovery"],
  heroImage: guideInjury,
  readTime: "11 min di lettura",
  keyTakeaways: [
    "Il 'ginocchio del corridore' è quasi sempre sindrome femoro-rotulea (dolore anteriore) o della bandelletta ileotibiale (dolore laterale).",
    "La causa non è quasi mai il ginocchio: sono anca debole, glutei inattivi o carichi settimanali cresciuti troppo in fretta.",
    "Regola del 10%: non aumentare il chilometraggio settimanale di più del 10% per settimana.",
    "Rinforzo di glutei e anche riduce il dolore in 6-8 settimane nel 70-80% dei casi.",
    "Ghiaccio e riposo totale servono poco: la corsa va modulata, non azzerata.",
  ],
  relatedTools: [
    { to: "/tools/shoes", label: "Shoe Finder" },
    { to: "/quiz", label: "Profile Quiz Runner" },
  ],
  relatedGuides: [
    { slug: "injury-prevention", label: "Prevenzione Infortuni per Runner" },
    { slug: "running-form", label: "Migliorare la Tecnica di Corsa" },
    { slug: "muscle-recovery", label: "Recupero Muscolare dopo la Corsa" },
  ],
  sections: [
    {
      heading: "Cosa si intende davvero per 'ginocchio del corridore'",
      body: "Il termine popolare 'ginocchio del corridore' non è una diagnosi medica ma un'espressione che raggruppa due patologie molto diverse:\n\n- **Sindrome femoro-rotulea (PFPS)** — dolore attorno o dietro la rotula, tipico salendo o scendendo le scale, dopo essere stati seduti a lungo o nei primi km.\n- **Sindrome della bandelletta ileotibiale (ITBS)** — dolore netto sul **lato esterno** del ginocchio, che compare in modo prevedibile dopo un certo numero di minuti/km di corsa.\n\nSono le due cause più frequenti di dolore al ginocchio nei runner amatoriali (oltre il 40% degli infortuni da corsa secondo la letteratura). Il trattamento è diverso, quindi la diagnosi corretta è il primo passo.",
      variant: "highlight",
    },
    {
      heading: "Sintomi tipici: come riconoscere quale hai",
      body: "Prima di correre in farmacia, prova a localizzare il dolore.\n\n**Sindrome femoro-rotulea (dolore anteriore):**\n- Dolore sordo attorno alla rotula.\n- Peggiora scendendo le scale, in accosciata, in discesa.\n- Rigidità dopo essere stati seduti a lungo ('theater sign').\n- Talvolta scrocchi o sensazione di 'sabbia' sotto la rotula.\n\n**Bandelletta ileotibiale (dolore laterale):**\n- Dolore acuto e localizzato sul lato esterno del ginocchio.\n- Compare dopo un tempo prevedibile (es. sempre al km 5).\n- Sparisce fermandosi, ritorna riprendendo la corsa.\n- Peggiora in discesa e con passo lento.",
      variant: "default",
    },
    {
      heading: "Le vere cause: non è (quasi mai) colpa del ginocchio",
      body: "Il ginocchio è la vittima, non il colpevole. Nel 80% dei casi la causa è a monte o a valle.\n\n**Fattori di rischio principali (evidenza scientifica solida):**\n\n- **Debolezza dei glutei medio e piccolo** — causa collasso del ginocchio verso l'interno (valgo dinamico).\n- **Anca poco mobile** in flessione ed estensione.\n- **Aumento troppo rapido dei chilometri** o del ritmo (violata la regola del 10%).\n- **Scarpe usurate** oltre i 600-800 km.\n- **Superficie sempre uguale** (troppo asfalto, sempre lo stesso verso su strade inclinate).\n- **Cadenza troppo bassa** (<170 spm) con overstriding.\n\nLa forma del piede o l'iperpronazione hanno un ruolo molto minore rispetto a quanto si pensasse dieci anni fa.",
      variant: "default",
    },
    {
      heading: "Cosa fare nella fase acuta (primi 7-10 giorni)",
      body: "Il vecchio 'RICE' (riposo totale, ghiaccio, compressione, elevazione) è superato. L'attuale approccio si chiama **POLICE** (Protection, Optimal Loading, Ice, Compression, Elevation).\n\n**Cosa fa la differenza:**\n1. **Ridurre il carico, non azzerarlo**: dimezza il chilometraggio, elimina discese e salite.\n2. **Sostituisci** con cyclette (senza dolore), nuoto, ellittica.\n3. **Ghiaccio 15 min** post-corsa se c'è infiammazione visibile.\n4. **Evita antinfiammatori cronici**: inibiscono la guarigione tendinea.\n5. **Non stare fermo del tutto**: il tessuto ha bisogno di carico controllato per rigenerarsi.",
      variant: "warning",
    },
    {
      heading: "I 5 esercizi con più evidenza scientifica",
      body: "Studi clinici mostrano che 6-8 settimane di rinforzo mirato dei glutei e dei muscoli dell'anca riducono il dolore nel 70-80% dei casi di PFPS e ITBS. Esegui 3 volte a settimana.",
      variant: "default",
      listItems: [
        "Ponte a un piede (Single-Leg Bridge): 3x12 per lato. Attiva il grande gluteo.",
        "Clamshell con elastico: 3x15 per lato. Isola il piccolo e medio gluteo.",
        "Step-down laterale da 20 cm: 3x10 per lato. Corregge il valgo dinamico.",
        "Squat bulgaro con manubri leggeri: 3x8 per lato. Forza monopodalica.",
        "Copenhagen adduction: 3x8 per lato. Rinforza gli adduttori spesso trascurati.",
      ],
    },
    {
      heading: "Tabella: quanto tempo per tornare a correre",
      body: "Tempi realistici di recupero se applichi il protocollo corretto (rinforzo + carico modulato + attesa dei sintomi).",
      variant: "default",
      listItems: [
        "Dolore lieve occasionale, sparisce col riscaldamento: 1-2 settimane con carico ridotto.",
        "Dolore che compare durante ogni corsa e dura ore dopo: 3-6 settimane.",
        "Dolore che ti fa zoppicare o costringe a fermarti: 6-12 settimane + fisioterapia.",
        "Sintomi da oltre 3 mesi: valutazione medica con eco/RM per escludere altre cause.",
      ],
    },
    {
      heading: "Ritorno alla corsa: il protocollo Walk-Run",
      body: "Non riprendere da dove avevi lasciato. Reintroduci il carico progressivamente con il metodo Walk-Run.\n\n**Settimana 1**: 5 volte (1 min corsa + 2 min cammino) — 15 min totali, a giorni alterni.\n**Settimana 2**: 5 volte (2 min corsa + 1 min cammino) — 15 min totali.\n**Settimana 3**: 4 volte (5 min corsa + 1 min cammino) — 24 min totali.\n**Settimana 4**: corsa continua 25-30 min ritmo blando.\n\nSe il dolore torna e supera 3/10 sulla scala del dolore, torna alla settimana precedente. Progresso lento ma solido batte sempre le ricadute.",
      variant: "tip",
    },
    {
      heading: "Quando andare dal medico o fisioterapista",
      body: "L'autogestione ha limiti chiari. Rivolgiti a un professionista se compare almeno uno di questi segnali.",
      variant: "checklist",
      listItems: [
        "Gonfiore visibile del ginocchio o versamento articolare.",
        "Dolore notturno anche a riposo, non solo correndo.",
        "Cedimenti del ginocchio, blocchi articolari o scrocchi dolorosi.",
        "Trauma acuto (torsione, caduta) prima della comparsa del dolore.",
        "Dolore persistente dopo 4-6 settimane di gestione conservativa corretta.",
      ],
    },
  ],
  hubCategory: "recovery",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  faq: [
    {
      q: "Cos'è esattamente il ginocchio del corridore?",
      a: "Il termine 'ginocchio del corridore' raggruppa due patologie: la sindrome femoro-rotulea (dolore attorno o dietro la rotula) e la sindrome della bandelletta ileotibiale (dolore netto sul lato esterno del ginocchio). Sono le due cause più frequenti di dolore al ginocchio nei runner amatoriali.",
    },
    {
      q: "Devo smettere di correre se ho dolore al ginocchio dopo la corsa?",
      a: "Non smettere del tutto: il riposo totale non è la soluzione più efficace. Riduci volume e intensità del 30-50%, elimina discese e salite, sostituisci con bici o nuoto e inizia subito il rinforzo di glutei e anche. Ferma la corsa solo se il dolore supera 5/10 o ti fa zoppicare.",
    },
    {
      q: "In quanto tempo passa il ginocchio del corridore?",
      a: "Un caso lieve preso in tempo si risolve in 1-2 settimane. Un dolore presente da settimane richiede 6-8 settimane di rinforzo mirato più carico modulato. Se il problema dura da oltre 3 mesi, serve una valutazione medica per escludere altre cause.",
    },
    {
      q: "Quali esercizi fanno bene al ginocchio del corridore?",
      a: "I più efficaci con evidenza scientifica sono ponte a un piede, clamshell con elastico, step-down laterale, squat bulgaro e Copenhagen adduction. Servono a rinforzare glutei e anche, che sono la vera causa a monte del problema nell'80% dei casi.",
    },
  ],
};
