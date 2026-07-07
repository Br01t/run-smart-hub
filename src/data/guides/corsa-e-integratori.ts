import { GuideContent } from "@/types/guide";
import guideSupplements from "@/assets/guide-supplements.webp";

export const corsaEIntegratori: GuideContent = {
  title: "Corsa e Integratori: Cosa Serve Davvero (e Cosa No)",
  seoTitle: "Corsa e Integratori: Cosa Funziona Davvero nel 2026",
  seoDescription: "Corsa e integratori: guida evidence-based agli integratori che funzionano per chi corre e a quelli inutili. Dosaggi, tempistiche e priorità.",
  keywords: [
    "corsa e integratori",
    "integratori corsa",
    "integratori runner",
    "cosa integrare per correre",
    "integratori utili corsa",
  ],
  description:
    "Non tutti gli integratori funzionano. Ecco quelli con evidenza scientifica solida per chi corre, i dosaggi corretti e il 70% dei prodotti che puoi tranquillamente evitare.",
  tags: ["supplements", "nutrition", "recovery", "performance"],
  heroImage: guideSupplements,
  readTime: "10 min di lettura",
  hubCategory: "supplements",
  datePublished: "2026-07-02",
  dateModified: "2026-07-07",
  keyTakeaways: [
    "Solo 5 integratori hanno evidenza scientifica solida per la corsa: creatina, caffeina, beta-alanina, bicarbonato, nitrati.",
    "Prima degli integratori metti a posto sonno, dieta e allenamento: aumentano la performance del 20-40%.",
    "Il 70% degli integratori venduti per runner ha efficacia zero o minima (BCAA, glutammina, HMB nella dose standard).",
    "Ferro, vitamina D e magnesio sono utili SOLO se sei carente: fai le analisi prima di integrare.",
    "Whey proteine (20-30 g post-corsa) restano l'integratore con miglior rapporto costo/beneficio per il recupero.",
  ],
  relatedTools: [
    { to: "/tools/protein", label: "Calcolatore Proteine" },
    { to: "/tools/electrolytes", label: "Calcolatore Elettroliti" },
  ],
  relatedGuides: [
    { slug: "integratori-per-chi-corre", label: "Integratori per Chi Corre" },
    { slug: "supplements-for-runners", label: "Supplements for Runners" },
    { slug: "gel-carboidrati", label: "Gel di Carboidrati" },
  ],
  sections: [
    {
      heading: "La gerarchia della performance: dove stanno gli integratori",
      body: "Prima di comprare qualsiasi cosa, ricorda l'ordine di importanza per la performance nella corsa:\n\n1. **Allenamento coerente** (70% dei risultati)\n2. **Sonno 7-9 h di qualità** (10%)\n3. **Dieta equilibrata con carboidrati adeguati** (10%)\n4. **Idratazione ed elettroliti** (5%)\n5. **Integratori mirati** (5%)\n\nGli integratori sono la ciliegina, non la torta. Se dormi 5 ore o mangi solo insalate, nessun integratore ti salverà.",
      variant: "highlight",
    },
    {
      heading: "I 5 integratori con evidenza scientifica solida",
      body: "L'Australian Institute of Sport classifica gli integratori in gruppi A (evidenza forte), B (evidenza emergente), C (nessuna evidenza), D (proibiti). Ecco i gruppo A utili per il running:",
      variant: "default",
      listItems: [
        "Caffeina: 3-6 mg/kg 45' pre-gara. Migliora performance +2-4%. Costo: 0,10€/dose.",
        "Creatina monoidrato: 3-5 g/die. Utile per sprint e forza. Migliora recupero neuromuscolare. Neutrale per fondo lungo.",
        "Beta-alanina: 3-6 g/die per 6+ settimane. Utile per 400m-3000m, effetto limitato sopra i 10 km.",
        "Nitrati (succo di barbabietola): 300-600 mg 2-3 h pre-gara. Migliora economia di corsa 1-3%.",
        "Bicarbonato di sodio: 0,3 g/kg 60-90' pre-gara. Utile per sforzi ad alta intensità 1-8 minuti. Alto rischio disturbi gastrici.",
      ],
    },
    {
      heading: "Integratori inutili (o quasi) che tutti comprano",
      body: "Molti prodotti popolari NON hanno evidenza sufficiente:",
      variant: "warning",
      listItems: [
        "BCAA (aminoacidi ramificati): se assumi già 1,4-1,7 g/kg di proteine totali, l'aggiunta è ridondante. Costo/beneficio pessimo.",
        "Glutammina: nessuna evidenza di miglioramento performance o recupero in atleti sani.",
        "HMB (idrossimetil-butirrato): efficacia solo in principianti assoluti o con deficit calorico severo.",
        "L-carnitina: non aumenta l'ossidazione dei grassi come promesso. Zero evidenze in soggetti sani.",
        "Ossido nitrico in polvere (arginina): efficacia molto inferiore ai nitrati alimentari.",
        "Testosterone booster naturali (tribulus, fieno greco): non alzano il testosterone in modo clinicamente rilevante.",
      ],
    },
    {
      heading: "Micronutrienti: da integrare SOLO se carenti",
      body: "Ferro, vitamina D e magnesio sono spesso citati come 'essenziali per runner'. Verità: sono utili SOLO se sei carente. Integrare senza deficit può causare tossicità (ferro) o interferire con l'assorbimento di altri minerali.\n\n**Ferro**: le runner donne e i vegani hanno rischio anemia. Analisi consigliate: ferritina, transferrina, emoglobina. Integra solo con ferritina <30 ng/ml, sempre con vitamina C.\n\n**Vitamina D**: il 60-80% degli italiani è carente in inverno. Range ottimale: 30-50 ng/ml. Dose tipica: 1000-2000 UI/die per 3 mesi.\n\n**Magnesio**: utile se hai crampi ricorrenti nonostante idratazione corretta. Forma migliore: bisglicinato o citrato, 200-400 mg/die.",
      variant: "tip",
    },
    {
      heading: "Whey proteine: il miglior investimento",
      body: "Le proteine whey (siero del latte) sono l'integratore con miglior evidenza per il recupero muscolare nel runner. Motivi:\n- Rapido assorbimento (30-40 minuti).\n- Alto contenuto di leucina (aminoacido chiave per la sintesi proteica).\n- Ottimo rapporto costo/proteina (~0,25€ per porzione da 25 g).\n\n**Dose ottimale**: 20-30 g entro 60 minuti dalla fine dell'allenamento. Per runner ad alto volume (>60 km/settimana) può essere utile aggiungere caseine (assorbimento lento) prima di dormire.\n\nSe sei vegano/intollerante al lattosio, le proteine di piselli isolate (con integrazione di metionina) sono un'alternativa quasi equivalente.",
      variant: "highlight",
    },
    {
      heading: "Prodotti specifici per la corsa: cosa vale la spesa",
      body: "Oltre agli integratori 'classici', esistono prodotti specifici per la corsa. Ecco quelli che valgono davvero:",
      variant: "checklist",
      listItems: [
        "Gel di carboidrati: essenziali oltre 90' di sforzo. 30-90 g/h in gara.",
        "Elettroliti in polvere/compresse: utili in caldo estivo o oltre 90' (Na 400-700 mg/h).",
        "Barrette proteiche/energetiche: comode per snack, ma leggi etichette (spesso zuccheri > proteine).",
        "Bevande di recupero (3:1 carboidrati:proteine): utili solo dopo lunghi >90' o doppie sedute.",
      ],
    },
    {
      heading: "Come costruire un protocollo minimalista",
      body: "Un protocollo evidence-based ed economico per un runner amatoriale che si allena 4-5 volte/settimana:\n\n**Base quotidiana (2-3€/giorno)**:\n- 25 g di proteine whey post-corsa\n- 1000 UI di vitamina D in autunno/inverno\n- 300 mg di magnesio bisglicinato la sera (se hai crampi)\n\n**Pre-gara (uso saltuario)**:\n- 200-400 mg di caffeina 45 minuti prima (o 1 caffè + gel con caffeina)\n- Nitrati alimentari (barbabietola) 2-3 h prima delle gare importanti\n\n**In gara (>90 minuti)**:\n- Gel di carboidrati 45-60 g/h\n- Elettroliti 400-700 mg sodio/h in condizioni calde\n\nTotale mensile realistico: 40-80€. Tutto il resto è marketing.",
      variant: "checklist",
    },
  ],
  faq: [
    {
      q: "Quali integratori servono davvero per chi corre?",
      a: "Solo 5 hanno evidenza forte: caffeina, creatina, beta-alanina, bicarbonato di sodio e nitrati (succo di barbabietola). Aggiungi proteine whey per il recupero e vitamina D/ferro solo se carente da analisi.",
    },
    {
      q: "Gli integratori BCAA sono utili nella corsa?",
      a: "No. Se già assumi 1,4-1,7 g/kg di proteine totali dalla dieta, i BCAA sono ridondanti. La leucina che contengono la trovi già nel pollo, tonno, yogurt e whey a costo minore.",
    },
    {
      q: "Devo prendere integratori ogni giorno?",
      a: "Solo quelli 'di base' come vitamina D o magnesio (se carente). Caffeina, nitrati e bicarbonato vanno usati SOLO in specifici allenamenti o gare per non ridurne l'efficacia.",
    },
    {
      q: "Le proteine servono anche se non voglio ingrossarmi?",
      a: "Sì. Le proteine servono a RIPARARE i micro-danni muscolari, non a ingrossare i muscoli. Un runner ha bisogno di 1,2-1,7 g/kg/giorno per prevenire perdita muscolare e infiammazione.",
    },
    {
      q: "Gli integratori naturali sono più sicuri di quelli sintetici?",
      a: "Non necessariamente. La 'naturalità' non garantisce sicurezza né efficacia. Cerca prodotti certificati Informed Sport o NSF Certified for Sport, che garantiscono assenza di sostanze dopanti e purezza dichiarata.",
    },
  ],
};
