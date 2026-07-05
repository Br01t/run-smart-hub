import { GuideContent } from "@/types/guide";
import guideShoes from "@/assets/guide-shoes.webp";

export const scarpeRunningPronazione: GuideContent = {
  title: "Scarpe da Running per Pronazione: Guida alla Scelta",
  seoTitle: "Scarpe Running Pronazione 2026: Guida alla Scelta",
  seoDescription: "Come scegliere le scarpe da running per la pronazione: cosa dice la scienza aggiornata, quando serve una scarpa stabile e i modelli migliori del 2026.",
  keywords: ["scarpe running pronazione", "scarpe corsa pronatore", "scarpe stabili corsa", "iperpronazione scarpe", "scarpe pronazione runner"],
  description: "Cosa dice davvero la scienza sulla pronazione e sulle scarpe stabili, e come scegliere il modello giusto senza cadere nel marketing.",
  tags: ["shoes", "gear", "biomechanics"],
  heroImage: guideShoes,
  readTime: "9 min di lettura",
  keyTakeaways: [
    "La pronazione è un movimento naturale del piede: 'iperpronazione' non equivale automaticamente a infortunio.",
    "Studi recenti (2013-2024) mostrano che scegliere la scarpa in base al tipo di pronazione NON riduce gli infortuni.",
    "Il criterio più importante è il comfort percepito: il 'comfort filter' predice meglio del test statico.",
    "Le scarpe stabili moderne usano guide rails e schiume differenziate, non pesanti supporti mediali.",
    "Se non hai dolori con una scarpa neutra, non servono scarpe stabili solo perché 'pronaci'.",
  ],
  relatedTools: [
    { to: "/tools/shoes", label: "Shoe Finder" },
    { to: "/quiz", label: "Quiz Profilo Runner" },
  ],
  relatedGuides: [
    { slug: "choosing-running-shoes", label: "Come Scegliere le Scarpe da Corsa" },
    { slug: "running-shoe-rotation", label: "Costruire una Rotazione di Scarpe" },
    { slug: "injury-prevention", label: "Prevenzione Infortuni" },
  ],
  sections: [
    {
      heading: "Cos'è davvero la pronazione (senza allarmismi)",
      body: "La pronazione è **il naturale rollio del piede verso l'interno** durante la fase di appoggio. Ha una funzione precisa: assorbire l'urto con il suolo distribuendo il carico su una superficie più ampia. Nessuno corre senza pronare.\n\nSi parla di:\n- **Pronazione neutra** — l'arco plantare cede in modo fisiologico (circa il 70% dei runner).\n- **Iperpronazione** — il rollio verso l'interno è più marcato del normale (~20%).\n- **Supinazione** — l'appoggio resta all'esterno del piede, l'arco cede poco (~10%).\n\nPer decenni l'industria della scarpa da corsa ha venduto l'idea che scegliere il modello 'giusto' per il tuo tipo di pronazione riducesse gli infortuni. Studi recenti hanno smontato questa convinzione.",
      variant: "highlight",
    },
    {
      heading: "Cosa dice la scienza aggiornata",
      body: "Diversi trial controllati (Ryan 2011, Nielsen 2014, Malisoux 2016, Willy 2022) hanno confrontato runner assegnati a scarpe scelte 'per pronazione' con runner assegnati a scarpe neutre a caso. Il risultato è consistente:\n\n- **Nessuna riduzione statisticamente significativa degli infortuni** nel gruppo 'personalizzato'.\n- Il tipo di appoggio da fermo (test bagnato, gate analysis rapida) non predice il pattern in corsa.\n- Il **comfort percepito** predice il rischio di infortunio meglio di qualsiasi classificazione biomeccanica.\n\nQuesto non significa che le scarpe stabili siano inutili: significa che vanno scelte in base a **sintomi reali**, non a un'etichetta pronatore/supinatore.",
      variant: "default",
    },
    {
      heading: "Quando una scarpa stabile serve davvero",
      body: "Le scarpe con supporto (stabili) restano utili in casi specifici, tutti caratterizzati da **sintomi concreti**:\n\n- Storia ricorrente di infortuni tipici della pronazione eccessiva (fascite plantare mediale, tendinopatia del tibiale posteriore, dolore mediale al ginocchio).\n- Sensazione di **collasso mediale** evidente in corsa (il ginocchio 'entra dentro').\n- Peso corporeo elevato (>85-90 kg) combinato ad alto volume settimanale.\n- Prescrizione di plantari medici che richiedono un contenimento adeguato.\n- Runner che soggettivamente si sentono **più stabili e sicuri** con una scarpa guidata.\n\nSe non rientri in nessuna di queste categorie e stai bene con scarpe neutre, non c'è motivo di cambiare.",
      variant: "default",
    },
    {
      heading: "Come sono fatte le scarpe stabili moderne",
      body: "Le scarpe stabili di oggi non hanno più i pesanti cunei mediali in gomma dura degli anni 2000. La stabilità è ottenuta in modo più intelligente:\n\n- **Guide Rails** (Brooks) — pareti laterali che guidano il piede solo quando serve.\n- **Schiume a doppia densità** — più morbida sul lato esterno, più densa sul mediale.\n- **Sagoma allargata dell'intersuola** — base d'appoggio più larga per stabilità passiva.\n- **Rocker geometry** — curvatura della suola che facilita il rollio in avanti riducendo la richiesta di stabilizzazione.\n\nRisultato: scarpe stabili moderne pesano quanto le neutre (250-280 g), sono confortevoli e non hanno più la sensazione 'da ortopedia' del passato.",
      variant: "tip",
    },
    {
      heading: "Categorie di stabilità: come orientarsi",
      body: "Le scarpe si posizionano su un continuum di stabilità, non in categorie rigide.",
      variant: "default",
      listItems: [
        "Neutra classica (es. Asics Nimbus, Nike Pegasus, Brooks Ghost): 70% dei runner.",
        "Neutra con base ampia / rocker (Hoka Clifton, Saucony Triumph): stabilità passiva.",
        "Stabilità leggera (Brooks Adrenaline GTS, Asics GT-2000, Saucony Guide): guide rails, moderata.",
        "Stabilità marcata (Brooks Beast, Asics Kayano): per iperpronazione sintomatica o alto peso.",
        "Motion control (New Balance 860 heavy): raro, indicato solo con prescrizione ortopedica.",
      ],
    },
    {
      heading: "Il test del comfort filter: come provarle in negozio",
      body: "Il metodo più affidabile per scegliere le scarpe è ancora il **comfort filter** proposto da Nigg (2015). Funziona così:\n\n1. In un negozio con tapis roulant, prova 3-4 modelli diversi (2 neutri, 2 con stabilità leggera).\n2. Corri 2-3 minuti con ciascuno a ritmo abituale.\n3. Assegna un voto di comfort da 0 a 10 subito dopo aver tolto la scarpa.\n4. **Scegli quella con il voto più alto**, indipendentemente da cosa dice il commesso sulla tua pronazione.\n\nStudi di Nigg dimostrano che il modello percepito come più comodo dal singolo runner riduce il tasso di infortuni fino al 50% rispetto a modelli assegnati per criteri biomeccanici.",
      variant: "tip",
    },
    {
      heading: "Errori comuni da evitare",
      body: "Ecco gli errori che vediamo più spesso quando un runner cerca 'scarpe per pronazione'.",
      variant: "warning",
      listItems: [
        "Comprare scarpe stabili senza alcun sintomo, solo perché una gait analysis ha detto 'pronatore'.",
        "Cambiare scarpa preferita per una stabile perché un amico o influencer l'ha consigliata.",
        "Usare la stessa scarpa per 1000+ km: il supporto mediale collassa dopo 600-800 km.",
        "Scegliere solo dallo scaffale 'stabili': molte scarpe neutre moderne (Hoka, base ampia) offrono più stabilità reale di certe 'stabilità leggere'.",
        "Ignorare il fitting (mezzo numero in più per la corsa) concentrandosi solo sulla categoria.",
      ],
    },
    {
      heading: "Checklist pratica per la scelta",
      body: "Usa questa checklist come guida definitiva.",
      variant: "checklist",
      listItems: [
        "Ho identificato sintomi specifici o storia di infortuni legati alla pronazione? Se sì, valuta stabili.",
        "Ho provato almeno 3 modelli sul tapis roulant a ritmo abituale.",
        "Ho scelto in base al comfort percepito, non alla classificazione teorica.",
        "La scarpa ha almeno mezzo numero in più della scarpa da città.",
        "Prevedo di sostituirla ogni 600-800 km di corsa.",
        "Se corro più di 40 km a settimana, ho una seconda scarpa in rotazione.",
      ],
    },
  ],
  hubCategory: "shoes",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  faq: [
    {
      q: "Come capire se ho bisogno di scarpe per pronazione?",
      a: "Non servono scarpe stabili solo perché 'proni'. Ne hai bisogno se hai una storia ricorrente di infortuni tipici della pronazione eccessiva (fascite plantare mediale, tibiale posteriore, dolore mediale al ginocchio) o se il ginocchio 'entra dentro' visibilmente in corsa. Senza sintomi, una scarpa neutra ben scelta è sufficiente.",
    },
    {
      q: "Le scarpe stabili prevengono davvero gli infortuni?",
      a: "Gli studi controllati recenti mostrano che scegliere la scarpa in base al tipo di pronazione NON riduce in modo significativo gli infortuni. Il criterio più predittivo è il comfort percepito dal singolo runner (comfort filter). Le scarpe stabili restano utili in casi specifici con sintomi reali.",
    },
    {
      q: "Qual è la differenza tra scarpe stabili e neutre oggi?",
      a: "Le scarpe stabili moderne non hanno più i cunei mediali rigidi del passato. Usano guide rails, schiume a doppia densità e sagome allargate. Pesano quanto le neutre (250-280 g) e sono più confortevoli. Molte scarpe neutre a base larga (Hoka Clifton) offrono stabilità passiva paragonabile.",
    },
    {
      q: "Ogni quanto sostituire le scarpe per pronazione?",
      a: "Ogni 600-800 km di corsa. Nelle scarpe stabili il collasso del supporto mediale può precedere l'usura visibile della suola: se torni ad avvertire sintomi che avevi risolto, spesso è ora di cambiare scarpa anche se sembra 'ancora buona'.",
    },
  ],
};
