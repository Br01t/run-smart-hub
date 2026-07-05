import { GuideContent } from "@/types/guide";
import guideSupplements from "@/assets/guide-supplements.webp";

export const integratoriPerChiCorre: GuideContent = {
  title: "Integratori per Chi Corre: Guida Scientifica 2026",
  seoTitle: "Integratori per Chi Corre: Guida Completa 2026",
  seoDescription: "Quali integratori servono davvero a chi corre? Dosaggi, tempi e prove scientifiche per carboidrati, elettroliti, caffeina, ferro e vitamina D.",
  keywords: ["integratori per chi corre", "corsa e integratori", "integratori runner", "integratori per corridori", "integratori endurance"],
  description: "Una guida pratica e basata su evidenze per capire quali integratori funzionano davvero per chi corre, con dosaggi, tempi e criteri di scelta.",
  tags: ["supplements", "nutrition", "endurance"],
  heroImage: guideSupplements,
  readTime: "10 min di lettura",
  keyTakeaways: [
    "L'80% dei risultati arriva da dieta, sonno e allenamento: gli integratori sono il restante 20%.",
    "I 3 integratori con evidenza forte per la corsa: carboidrati intra-workout, caffeina, nitrati (barbabietola).",
    "Ferro e vitamina D vanno integrati solo dopo esame del sangue, non 'a occhio'.",
    "Elettroliti (sodio in primis) diventano critici oltre i 60 minuti di corsa o con caldo elevato.",
    "Le proteine (1,4-1,8 g/kg) contano più di qualsiasi integratore per il recupero muscolare.",
  ],
  relatedTools: [
    { to: "/tools/protein", label: "Calcolatore Proteine" },
    { to: "/tools/electrolytes", label: "Calcolatore Elettroliti" },
    { to: "/tools/calories", label: "Calcolatore Calorie" },
  ],
  relatedGuides: [
    { slug: "supplements-for-runners", label: "Integratori Essenziali per il Runner" },
    { slug: "running-nutrition", label: "Nutrizione per la Corsa" },
    { slug: "gel-energetici-corsa", label: "Gel Energetici per la Corsa" },
  ],
  sections: [
    {
      heading: "Prima degli integratori: la base che nessuno vuole sentire",
      body: "Nessun integratore compensa un deficit calorico cronico, notti da 5 ore o allenamenti mal programmati. Prima di spendere in polveri e capsule, verifica di coprire: **fabbisogno calorico** (in genere 30-40 kcal/kg per runner attivi), **proteine** (1,4-1,8 g/kg), **carboidrati** (5-8 g/kg nei giorni di allenamento), **7-9 ore di sonno**, **idratazione** costante. Se manca una di queste basi, gli integratori sono soldi buttati.\n\nDetto questo, per un runner amatoriale che corre 3-5 volte a settimana, alcune integrazioni mirate hanno prove scientifiche molto solide.",
      variant: "highlight",
    },
    {
      heading: "I 3 integratori con evidenza forte per la corsa",
      body: "La International Society of Sports Nutrition classifica pochi integratori come 'Livello A' (efficacia dimostrata da studi replicati). Per la corsa sono principalmente tre:\n\n- **Carboidrati intra-workout** (30-90 g/h a seconda della durata): evitano il calo glicemico oltre i 75-90 minuti.\n- **Caffeina** (3-6 mg/kg, 45-60 minuti prima): riduce la percezione dello sforzo del 5-10%.\n- **Nitrati da succo di barbabietola** (400-800 mg di nitrati, 2-3 ore prima): riducono il costo di ossigeno del 3-5%.",
      variant: "default",
    },
    {
      heading: "Carboidrati: il carburante che fa davvero la differenza",
      body: "Le riserve di glicogeno muscolare si esauriscono in 60-90 minuti di corsa a ritmo medio. Oltre questa soglia, integrare carboidrati è la singola strategia con l'impatto più grande sulla performance.\n\n**Regole pratiche per durata:**\n- Sotto i 60 min: acqua basta.\n- 60-90 min: 30 g/h di carboidrati (1 gel).\n- 90-150 min: 60 g/h (2 gel/h).\n- Oltre 150 min: fino a 90 g/h ma in rapporto glucosio-fruttosio 2:1 per evitare disturbi gastrici.\n\nProva SEMPRE gel e bevande in allenamento prima di usarli in gara. Il 'gut training' (allenare l'intestino) è essenziale.",
      variant: "tip",
    },
    {
      heading: "Elettroliti: quando servono davvero",
      body: "Il sudore contiene principalmente sodio (500-2000 mg/L), poi potassio, magnesio e cloro. Sotto l'ora, con clima fresco, non serve integrarli. Diventano importanti quando:\n\n- La corsa supera i 60 minuti.\n- Fa caldo (>22 °C) o c'è umidità alta.\n- Sei un 'salty sweater' (aloni bianchi sui vestiti).\n- Ti alleni più volte al giorno.\n\nCerca prodotti con 300-700 mg di sodio per porzione, evitando le pastiglie ipertoniche che possono peggiorare i disturbi gastrici.",
      variant: "default",
    },
    {
      heading: "Ferro e Vitamina D: i due micronutrienti critici del runner",
      body: "L'impatto ripetuto della corsa causa **emolisi da footstrike** (rottura di globuli rossi nel piede) e piccole perdite di ferro col sudore. Nei runner amatoriali la carenza di ferritina è più frequente che nella popolazione generale. Sintomi: fiato corto anomalo, ritmi che 'crollano', stanchezza cronica.\n\n**Cosa fare:** una volta l'anno controlla ferritina, emocromo e vitamina D. Integra solo se i valori sono sotto la norma (ferritina <30 ng/mL per donne, <40 per uomini attivi). L'integrazione al buio di ferro può causare stress ossidativo e problemi gastrici.",
      variant: "warning",
    },
    {
      heading: "Proteine: la vera priorità post-corsa",
      body: "Molti runner sottovalutano le proteine perché pensano siano 'roba da palestra'. In realtà chi corre ha bisogno di 1,4-1,8 g di proteine per kg di peso corporeo per riparare le microlesioni muscolari e mantenere la massa magra. \n\n- Post-corsa entro 60 minuti: 20-40 g di proteine (whey, ricotta, yogurt greco, uova).\n- Prima di dormire nei giorni di carico: 20-30 g di caseina o skyr per una sintesi proteica prolungata.\n\nLe polveri proteiche sono comode ma non obbligatorie: 200 g di petto di pollo bastano.",
      variant: "default",
    },
    {
      heading: "Tabella comparativa: cosa vale davvero i soldi",
      body: "Per aiutarti a stabilire le priorità di spesa, ecco una classifica per rapporto evidenza-costo per un runner amatoriale medio.",
      variant: "default",
      listItems: [
        "★★★★★ Carboidrati/gel — evidenza altissima, costo basso, utili da subito.",
        "★★★★★ Elettroliti (sodio) — indispensabili oltre l'ora o con caldo.",
        "★★★★☆ Caffeina — molto efficace ma valuta tolleranza personale.",
        "★★★★☆ Proteine in polvere — utili se fatichi a raggiungere l'apporto giornaliero.",
        "★★★☆☆ Vitamina D3 — quasi tutti gli italiani sono carenti in inverno.",
        "★★★☆☆ Omega-3 (EPA/DHA) — utili per infiammazione e recupero.",
        "★★☆☆☆ BCAA/EAA — inutili se le proteine totali sono adeguate.",
        "★☆☆☆☆ Bruciagrassi/pre-workout generici — marketing, non scienza.",
      ],
    },
    {
      heading: "Errori più comuni nell'integrazione",
      body: "Anche runner esperti cadono in queste trappole. Evitale.",
      variant: "checklist",
      listItems: [
        "Provare un gel nuovo il giorno della gara: rischio disturbi gastrici garantito.",
        "Integrare ferro senza analisi: può fare più male che bene.",
        "Assumere antiossidanti in dose alta subito dopo l'allenamento: blocca gli adattamenti.",
        "Fidarsi di marchi senza certificazione Informed Sport o NSF Certified for Sport.",
        "Pensare che gli integratori possano compensare una dieta carente o poco sonno.",
      ],
    },
  ],
  hubCategory: "supplements",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  faq: [
    {
      q: "Quali integratori sono davvero utili a chi corre?",
      a: "I tre con maggiori evidenze scientifiche sono i carboidrati intra-workout (30-90 g/h per corse oltre l'ora), la caffeina (3-6 mg/kg 45-60 min prima) e i nitrati da succo di barbabietola. Utili anche elettroliti (soprattutto sodio), proteine (1,4-1,8 g/kg) e — dopo esame del sangue — ferro e vitamina D.",
    },
    {
      q: "Devo prendere integratori se corro solo 3 volte a settimana?",
      a: "In genere no, se la dieta è equilibrata e le corse restano sotto i 60 minuti. Utili invece un buon multivitaminico se hai una dieta variabile, la vitamina D3 in inverno e gli elettroliti nelle giornate calde.",
    },
    {
      q: "Meglio i gel o le barrette per la corsa?",
      a: "I gel sono più digeribili e rapidi in gara. Le barrette funzionano meglio negli allenamenti lunghi a ritmo blando e nel trail running dove hai più tempo per masticare e digerire.",
    },
    {
      q: "Ferro sì o no per chi corre?",
      a: "Solo dopo esame del sangue. Il runner ha un rischio di carenza di ferritina superiore alla media a causa di emolisi da impatto e perdite col sudore. Integrare senza analisi può causare stress ossidativo e sovraccarico epatico.",
    },
  ],
};
