import { ProfileResult } from "@/types/quiz";

export const getRunnerProfile = (answers: Record<string, string>): ProfileResult => {
  const tags: string[] = [];
  const tools: { label: string; to: string; icon: string }[] = [];
  const guides: { label: string; slug: string }[] = [];
  const tips: string[] = [];

  let title = "Il Runner Equilibrato";
  let archetype = "🏃";
  let description = "Hai un approccio equilibrato alla corsa. Concentrati sulla costanza e sul sovraccarico progressivo.";

  // 1. Archetype Determination (The Core Identity)
  const exp = answers.experience;
  const terrain = answers.terrain;
  const goal = answers.goal;
  const dist = answers.distance;
  const freq = answers.frequency;

  if (exp === "beginner") {
    title = "Il Costruttore di Fondamenta";
    archetype = "🌱";
    description = "Sei nella fase più critica: costruire fondamenta strutturali resistenti. Il tuo focus dovrebbe essere su chilometri lenti e facili per permettere a tendini e legamenti di adattarsi prima dei muscoli. La costanza è il tuo superpotere in questo momento.";
    tags.push("daily-trainer", "socks", "accessories", "beginner-kit");
    tips.push("Il 'Talk Test': Dovresti essere in grado di parlare a frasi intere durante l'80% delle tue corse.");
    tips.push("La costanza batte l'intensità. È meglio correre 20 minuti 3 volte a settimana che 1 ora una volta a settimana.");
    tips.push("Non saltare il riscaldamento: 5 minuti di stretching dinamico (oscillazioni gambe, sollevamenti polpacci) preparano il tuo SNC allo sforzo.");
    guides.push({ label: "Tabella Corsa Principianti (8 settimane)", slug: "tabella-corsa-principianti" });
    guides.push({ label: "Come Iniziare a Correre a 40 Anni", slug: "iniziare-correre-40-anni" });
  } else if (terrain === "trail" && (dist === "trail-ultra" || dist === "marathon")) {
    title = "Il Maestro dei Sentieri Tecnici";
    archetype = "🏔️";
    description = "Ti esalti dove finisce l'asfalto. Il tuo allenamento richiede un focus specializzato sulla forza eccentrica delle gambe per le discese ripide e un rifornimento di alta precisione per le lunghe e imprevedibili giornate in montagna.";
    tags.push("trail", "hydration", "accessories", "energy", "electrolytes", "trail-elite");
    tips.push("Pratica il 'power hiking' sulle salite ripide per preservare il glicogeno per i tratti corribili.");
    tips.push("Concentrati sul dislivello, non solo sul chilometraggio. 1000m di salita equivalgono a circa 10km di sforzo in piano.");
    tips.push("Testa la tua attrezzatura: mai usare uno zaino o scarpe nuove in una corsa più lunga di 90 minuti per la prima volta.");
    guides.push({ label: "Guida al Trail Running", slug: "trail-running-beginners" });
  } else if (terrain === "trail" && goal === "speed") {
    title = "L'Ibrido Trail-Velocista";
    archetype = "🦊";
    description = "Combini l'agilità di un trail runner con la velocità pura di un atleta stradale. La tua sfida è bilanciare le abilità tecniche con lo sviluppo del VO2max ad alta intensità.";
    tags.push("trail", "performance", "energy", "orologi", "speed-pro");
    tips.push("Intervalli sull'erba: esegui i tuoi lavori di velocità su superfici morbide per costruire gli stabilizzatori senza l'impatto dell'asfalto.");
    tips.push("Sprit in salita: 8-10 ripetute di 10 secondi al massimo sforzo in salita costruiscono un'incredibile potenza esplosiva.");
  } else if (goal === "speed" && (exp === "advanced" || exp === "competitive")) {
    title = "L'Inseguitore di Performance";
    archetype = "⚡";
    description = "Insegui il cronometro. Ogni dettaglio, dagli intervalli VO2max al peso delle scarpe e ai tassi di ossidazione dei carboidrati, conta per limare secondi al tuo PB. La precisione è il tuo principale strumento di allenamento.";
    tags.push("performance", "energy", "supplements", "orologi", "abbigliamento", "speed-pro");
    tips.push("Incorpora degli allunghi (20s veloci / 45s recupero) alla fine delle corse facili per mantenere la velocità neuromuscolare.");
    tips.push("Ottimizza il tuo recupero: proteine e carboidrati post-corsa entro 30 minuti sono non negoziabili al tuo livello.");
    tips.push("Focus sulla soglia: il tuo 'Tempo Run' settimanale è il principale driver della tua performance in gara.");
    guides.push({ label: "Migliorare la Tecnica di Corsa", slug: "running-form" });
  } else if (dist === "marathon" || dist === "half-marathon") {
    title = "Lo Specialista della Resistenza";
    archetype = "♾️";
    description = "Il volume e l'efficienza metabolica sono le tue armi. Devi padroneggiare l'arte dell'ossidazione dei grassi e l'allenamento intestinale per gestire la fatica cumulativa degli eventi di lunga distanza.";
    tags.push("carbohydrates", "electrolytes", "recovery", "cushioning", "socks", "endurance-base");
    tips.push("Allena l'intestino: consuma il tuo target di carboidrati da gara (60-90g/ora) durante le tue corse lunghe settimanali.");
    tips.push("I blocchi ad alto chilometraggio richiedono un sonno di alta qualità (8h+). Il recupero è dove avviene il miglioramento della forma fisica.");
    tips.push("Variazioni della Corsa Lunga: non correre solo piano; aggiungi 5-10km a ritmo gara alla fine delle tue sessioni superiori ai 25km.");
    guides.push({ label: "Alimentazione Maratona", slug: "running-nutrition" });
    if (dist === "half-marathon") {
      guides.push({ label: "Mezza Maratona in 2 Mesi", slug: "mezza-maratona-2-mesi" });
      guides.push({ label: "Quanti Km alla Settimana per la Mezza", slug: "quanti-km-mezza-maratona" });
    }
    guides.push({ label: "Gel Energetici per la Corsa", slug: "gel-energetici-corsa" });
  } else if (freq === "5-6" || freq === "7+") {
    title = "Il Guerriero Stradale ad Alto Volume";
    archetype = "🚜";
    description = "Sei una macchina da chilometri. Il tuo allenamento è definito da alta frequenza e carico costante. La tua sfida più grande è gestire l'infiammazione sistemica e lo stress ripetitivo.";
    tags.push("recovery", "cushioning", "protein", "magnesium", "socks", "high-volume");
    tips.push("Rotazione Scarpe: usa 2-3 modelli diversi per variare lo stress sui piedi ed estendere la vita delle scarpe.");
    tips.push("Recupero Attivo: una camminata di 15 minuti o una corsa 'shakeout' molto lenta può aiutare a smaltire i rifiuti metabolici meglio del riposo totale.");
  } else if (goal === "injury-free" || answers.issue === "injuries") {
    title = "L'Atleta Resiliente";
    archetype = "🛡️";
    description = "La longevità è la tua priorità. Focalizzandoti su mobilità, forza e gestione intelligente del carico, stai costruendo un corpo in grado di gestire lo stress ripetitivo della corsa per decenni.";
    tags.push("recovery", "muscles", "protein", "accessories", "daily-trainer", "magnesium", "injury-prevention");
    tips.push("Dai priorità alla 'Pre-hab': 10 minuti di attivazione dei glutei e del core prima di ogni singola corsa.");
    tips.push("Se fa male più di 3/10, fermati. Correre sopra un dolore acuto porta a stop di mesi.");
    tips.push("Allenamento di Forza: concentrati su esercizi a gamba singola (split squat, sollevamenti polpacci) per correggere gli squilibri.");
    guides.push({ label: "Prevenzione Infortuni", slug: "injury-prevention" });
    guides.push({ label: "Ginocchio del Corridore: Cause e Rimedi", slug: "ginocchio-del-corridore" });
    guides.push({ label: "Dolore al Ginocchio Durante la Corsa", slug: "dolore-ginocchio-corsa" });
  } else if (goal === "weight-loss") {
    title = "Il Trasformatore Metabolico";
    archetype = "🔥";
    description = "Usi la corsa come un potente strumento per il cambiamento della composizione corporea. Concentrati sull'apporto proteico per proteggere la massa muscolare magra mantenendo un deficit calorico sostenibile.";
    tags.push("protein", "energy", "supplements", "abbigliamento", "weight-loss-kit");
    tips.push("Non 'correre per mangiare' — concentrati su cibi ad alta densità di nutrienti che ti mantengano sazio durante le settimane ad alto volume.");
    tips.push("Camminare è uno strumento sottovalutato per la perdita di grasso. Aggiungi 30 minuti di movimento a bassa intensità nei giorni di riposo.");
    tips.push("Proteine pre-corsa: un piccolo snack proteico prima della corsa può aiutare a prevenire la scomposizione muscolare durante gli sforzi lunghi.");
    tools.push({ label: "Calcolatore BMI", to: "/tools/bmi", icon: "Activity" });
    guides.push({ label: "Correre per Dimagrire: Programma Realistico", slug: "correre-per-dimagrire" });
    guides.push({ label: "Cosa Mangiare Dopo la Corsa", slug: "cosa-mangiare-dopo-corsa" });
  } else {
    title = "Il Guerriero del Weekend";
    archetype = "🎖️";
    description = "Bilanci la corsa con uno stile di vita impegnato. Il tuo piano si concentra sul massimizzare l'impatto del tuo limitato tempo di allenamento rimanendo sano ed energico.";
    tags.push("daily-trainer", "accessories", "protein", "energy", "casual-runner");
    tips.push("Qualità sopra la quantità: se corri solo due volte a settimana, fai una corsa lunga facile e una a ritmo tempo moderato.");
    tips.push("L'idratazione non è solo per le corse. Mantenere un'idratazione di base giornaliera migliora significativamente i tuoi livelli di energia.");
  }

  // 2. Specialized Logic (Additions to the Archetype)
  
  // Experience Level Adjustments
  if (exp === "competitive") {
    tips.push("Monitora la frequenza cardiaca a riposo al mattino: un aumento > 5 bpm può indicare sovrallenamento o malattia in arrivo.");
    guides.push({ label: "Zone di Allenamento", slug: "running-heart-rate-zones" });
    guides.push({ label: "Integratori per Chi Corre", slug: "integratori-per-chi-corre" });
    tags.push("competitive-pro");
  }

  // Terrain Specifics
  if (terrain === "road" || terrain === "track") {
    tags.push("road", "cushioning");
    if (goal === "speed") {
      guides.push({ label: "Guida alla Cadenza", slug: "running-cadence" });
      tags.push("performance");
    }
  } else if (terrain === "trail" || terrain === "mixed") {
    tags.push("trail", "hydration");
    tools.push({ label: "Calcolatore Elettroliti", to: "/tools/electrolytes", icon: "Zap" });
  }

  // Biomechanics & Gear Variety
  if (answers.biomechanics === "overpronation") {
    tips.push("Controllo Stabilità: assicurati che le tue scarpe abbiano un supporto mediale per prevenire l'eccessiva rotazione interna.");
    tags.push("stability");
  }
  
  if (freq === "5-6" || freq === "7+") {
    tags.push("recovery", "muscles");
    tips.push("Focus sul recupero: considera l'uso di abbigliamento a compressione o il foam rolling per gestire l'affaticamento muscolare ad alto volume.");
  }

  // Issues & Nutrition
  if (answers.issue === "cramps-dehydration") {
    tags.push("electrolytes", "magnesium", "hydration");
    tools.push({ label: "Calcolatore Elettroliti", to: "/tools/electrolytes", icon: "Zap" });
    tips.push("Sweat Test: pesati prima e dopo una corsa di un'ora per determinare il tuo tasso di perdita di liquidi.");
  } else if (answers.issue === "fatigue-recovery") {
    tags.push("protein", "recovery", "magnesium", "energy");
    tools.push({ label: "Calcolatore Proteine", to: "/tools/protein", icon: "Dumbbell" });
    tips.push("Igiene del Sonno: 7-9 ore di sonno di qualità sono più efficaci di qualsiasi integratore per il recupero.");
  } else if (answers.issue === "nutrition") {
    tags.push("energy", "carbohydrates", "protein", "nutrition");
    tools.push({ label: "Calcolatore Calorie", to: "/tools/calories", icon: "Zap" });
    guides.push({ label: "Nutrizione Performance", slug: "running-nutrition" });
  }

  // 3. Final Aggregation
  const uniqueTags = [...new Set(tags)];
  const uniqueTools = tools.filter((t, i, arr) => arr.findIndex((x) => x.to === t.to) === i);
  const uniqueGuides = guides.filter((g, i, arr) => arr.findIndex((x) => x.slug === g.slug) === i).slice(0, 4);

  // Default fallbacks if lists are empty
  if (uniqueTools.length === 0) uniqueTools.push({ label: "Tutti gli Strumenti", to: "/tools", icon: "Wrench" });
  if (uniqueGuides.length === 0) uniqueGuides.push({ label: "Guida Tecnica", slug: "running-form" });

  return {
    title, archetype, description,
    tags: uniqueTags.length > 0 ? uniqueTags : ["supplements"],
    tools: uniqueTools,
    guides: uniqueGuides,
    tips: [...new Set(tips)].slice(0, 5),
  };
};
