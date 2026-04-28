import { GuideContent } from "@/types/guide";
import guideInjury from "@/assets/guide-injury.webp";

export const injuryPrevention: GuideContent = {
  title: "Guida del Runner alla Prevenzione degli Infortuni",
  seoTitle: "Prevenzione Infortuni Corsa Over 50 e Longevità Atletica 2026",
  seoDescription: "Guida alla prevenzione infortuni per runner. Scopri come gestire il carico (ACWR), rinforzare i tendini e mantenere la salute ossea per correre a lungo.",
  keywords: ["prevenzione infortuni corsa over 50", "modello ACWR corsa", "esercizi isometrici tendini", "longevità atletica runner", "prevenire fratture da stress", "biomeccanica corsa prevenzione"],
  description: "Come rimanere lontani dagli infortuni con un allenamento intelligente, potenziamento e tecniche di recupero adeguate.",
  tags: ["recupero", "massaggio", "muscoli", "scarpe", "top-recovery-2026"],
  heroImage: guideInjury,
  readTime: "12 min di lettura",
  keyTakeaways: [
    "Il Modello ACWR (Acute:Chronic Workload Ratio) è il miglior predittore matematico degli infortuni",
    "La salute dei tendini dipende dal carico progressivo (Isometrici e Eccentrici), non dal riposo assoluto",
    "La stabilità del gluteo medio previene il collasso del ginocchio e la sindrome della bandelletta",
    "La disponibilità energetica (evitare RED-S) è vitale per prevenire fratture da stress osseo",
    "Il 70% degli infortuni deriva da errori di programmazione, non dalla biomeccanica del piede",
  ],
  relatedTools: [
    { to: "/tools/bmi", label: "Calcolatore BMI" },
    { to: "/tools/protein", label: "Calcolatore Proteine" },
  ],
  relatedGuides: [
    { slug: "recovery", label: "Recupero Muscolare dopo la Corsa" },
    { slug: "choosing-running-shoes", label: "Come Scegliere le Scarpe da Corsa" },
  ],
  sections: [
    { 
      heading: "La Scienza del Carico: Il Modello ACWR", 
      body: "La maggior parte dei runner crede che gli infortuni siano causati da scarpe sbagliate o da una tecnica imperfetta. Tuttavia, la letteratura scientifica più recente indica che la causa principale è l'errore di programmazione: caricare i tessuti più velocemente di quanto possano adattarsi.\n\n**Acute:Chronic Workload Ratio (ACWR):** Questo modello matematico confronta il carico di allenamento dell'ultima settimana (Acuto) con la media delle quattro settimane precedenti (Cronico). Se il rapporto supera 1,5 (ovvero hai aumentato il carico del 50% rispetto alla tua media recente), entri nella 'Zona di Pericolo' dove il rischio di infortunio aumenta drasticamente nelle 2-4 settimane successive. Mantenere il rapporto tra 0,8 e 1,3 è il modo più efficace per garantire una progressione sicura.", 
      variant: "highlight" 
    },
    { 
      heading: "Meccanotrasduzione: Come i Tessuti Si Adattano", 
      body: "Ogni volta che corri, le tue cellule ossee e tendinee subiscono micro-deformazioni. Attraverso un processo chiamato **meccanotrasduzione**, queste sollecitazioni meccaniche vengono convertite in segnali chimici che istruiscono il corpo a produrre nuovo collagene o a densificare la matrice ossea. \n\n**Il Punto di Rottura:** Questo processo richiede tempo. Mentre il sistema cardiovascolare migliora in poche settimane, i tendini e le ossa richiedono mesi. Gli infortuni da sovraccarico si verificano quando il ritmo della degradazione tissutale indotta dalla corsa supera il ritmo della sintesi proteica e del rimodellamento osseo.", 
      variant: "default" 
    },
    { 
      heading: "Patologia Tendinea: Perché il Riposo Non Basta", 
      body: "I tendini (Achille, Rotuleo, Femorale) hanno una biologia unica. Quando un tendine fa male, non è quasi mai una 'infiammazione' classica (tendinite), ma una 'tendinopatia' (disorganizzazione del collagene). \n\n- **Il Fallimento del Riposo:** Il riposo totale riduce la capacità di carico del tendine, rendendolo ancora più vulnerabile quando torni a correre. \n- **Il Carico Terapeutico:** I tendini amano il carico. Gli esercizi **isometrici** (mantenere una contrazione senza movimento) per 45 secondi hanno un provato effetto analgesico e stimolano la guarigione senza lo stress dell'impatto. A seguire, gli esercizi **eccentrici** (allungamento sotto carico) aiutano a riallineare le fibre di collagene in modo ordinato.", 
      variant: "default" 
    },
    { 
      heading: "La Catena Cinetica e il Gluteo Medio", 
      body: "Il corpo umano funziona come un'unica unità. Un dolore localizzato al ginocchio è quasi sempre il sintomo di una disfunzione altrove. \n\n- **Stabilità Pelvica:** Il gluteo medio è il principale stabilizzatore laterale del bacino. Se questo muscolo è debole, il bacino 'cade' ad ogni passo (segno di Trendelenburg), causando una rotazione interna del femore. Questo porta il ginocchio a collassare verso l'interno (valgismo dinamico), scatenando la sindrome della bandelletta ileotibiale o il dolore femoro-rotuleo. \n- **Core Stability:** Un 'core' forte non serve solo per gli addominali; serve a mantenere il bacino in una posizione neutra, permettendo alle gambe di produrre forza da una base solida.", 
      variant: "default" 
    },
    { 
      heading: "Foot Core Stability: La Forza del Piede", 
      body: "Troppo spesso trascurati, i muscoli intrinseci del piede sono i 'guardiani' del tuo arco plantare. \n\n- **La Molla Interna:** Questi piccoli muscoli lavorano insieme alla fascia plantare per assorbire l'energia dell'impatto e restituirla come spinta. Se questi muscoli sono deboli, l'arco collassa eccessivamente, mettendo in tensione il tendine d'Achille e la tibia. Esercizi semplici come il 'Short Foot exercise' (accorciare il piede senza arricciare le dita) possono fare la differenza tra una stagione sana e una passata a combattere con la fascite plantare.", 
      variant: "default" 
    },
    { 
      heading: "Propriocezione e Controllo Neuromuscolare", 
      body: "La forza muscolare da sola non basta se il cervello non sa quando e come attivarla. \n\n- **Il Sensore Interno:** La propriocezione è la capacità del sistema nervoso di percepire la posizione del corpo nello spazio. Durante la corsa, specialmente su terreni irregolari o quando sei stanco, la precisione di questo segnale diminuisce. Allenare l'equilibrio monopodalico su superfici instabili allena i recettori articolari, permettendo al corpo di reagire istantaneamente a una storta o a un atterraggio scomposto, prevenendo lesioni acute ai legamenti della caviglia.", 
      variant: "default" 
    },
    { 
      heading: "Salute Ossea e RED-S: Il Pericolo Silenzioso", 
      body: "Le fratture da stress sono gli infortuni più temuti. Spesso non sono dovute solo all'impatto, ma a una bassa disponibilità energetica nota come **RED-S** (Relative Energy Deficiency in Sport). \n\n**Il Meccanismo:** Se consumi meno calorie di quelle che bruci (deficit energetico), il corpo taglia le funzioni 'non essenziali' come la produzione ormonale (Estrogeni/Testosterone) e il rimodellamento osseo. Le ossa diventano fragili e non riescono a riparare le micro-fracture causate dalla corsa. La nutrizione adeguata e l'apporto di Vitamina D e Calcio sono pilastri della prevenzione infortuni tanto quanto l'allenamento della forza.", 
      variant: "default", 
      listItems: [
        "Allenamento della Forza: Sollevare pesi pesanti (80% del massimale) migliora la densità ossea e la stiffness tendinea.", 
        "Scarpe e Usura: Oltre i 600-800km, le schiume dell'intersuola perdono la capacità di assorbimento, aumentando il carico sulle articolazioni.", 
        "Sonno: La secrezione di ormone della crescita (GH), vitale per la riparazione cellulare, picca durante il sonno profondo.",
        "Varietà del Terreno: Correre su superfici diverse (erba, sterrato, asfalto) cambia il pattern di carico, riducendo l'usura ripetitiva."
      ] 
    },
    {
      heading: "Stress Psicologico e Rischio Infortuni",
      body: "Il cervello e il corpo non sono separati. Lo stress psicologico (lavoro, vita personale) aumenta la tensione muscolare e riduce la capacità del sistema immunitario di riparare i tessuti. Quando sei mentalmente esausto, il tuo rischio di infortunio è statisticamente più alto. In questi periodi, è più saggio ridurre l'intensità degli allenamenti invece di forzare, poiché il tuo 'buffer' di recupero è ridotto.",
      variant: "default"
    },
    {
      heading: "Test di Autodiagnosi: Il Salto Monopodalico",
      body: "Un test semplice per valutare la salute ossea e tendinea è il salto su una gamba sola. Se avverti un dolore localizzato e acuto (4/10 o più) quando atterri su una gamba, potresti avere un inizio di reazione da stress osseo. Non ignorarlo: 3 giorni di riposo ora possono evitare 3 mesi di gesso poi.",
      variant: "tip"
    },
    {
      heading: "Return to Play: Il Protocollo di Carico Graduato",
      body: "Tornare a correre dopo un infortunio richiede pazienza. Segui la regola del 24 ore: puoi aumentare il carico solo se il dolore non peggiora durante l'attività E se non c'è dolore aumentato la mattina successiva. Se il dolore torna, torna allo step precedente. Il rientro deve essere una scala, non un ascensore.",
      variant: "default"
    },
    {
      heading: "I Segnali di Allarme: Quando Fermarsi",
      body: "Molti runner sono orgogliosi di 'correre attraverso il dolore'. È un errore fatale. Fermati immediatamente se avverti: \n1. Dolore che peggiora durante la corsa.\n2. Dolore che ti costringe a cambiare il modo di correre.\n3. Dolore presente a riposo o che disturba il sonno.\n4. Gonfiore localizzato o calore su un'articolazione o un osso.",
      variant: "warning"
    },
    { 
      heading: "Checklist: Il Runner A Prova di Infortunio", 
      body: "Integra queste azioni nella tua routine per massimizzare la tua longevità sportiva.", 
      variant: "checklist", 
      listItems: [
        "Monitoraggio Carico: Usa un'app o un diario per calcolare il tuo ACWR settimanale.", 
        "Routine di Forza: Almeno 2 sessioni a settimana focalizzate su single-leg squats e calf raises.", 
        "Idratazione e Micronutrienti: Assicurati livelli ottimali di Ferro, Calcio e Magnesio.", 
        "Ascolto Attivo: Se sei stanco, sostituisci una corsa intensa con una facile o con cross-training.",
        "Riscaldamento Neuromuscolare: Esegui andature tecniche per 'accendere' i glutei prima di correre."
      ] 
    }
  ],
  hubCategory: "recovery",
};
