import { GuideContent } from "@/types/guide";
import guideSupplements from "@/assets/guide-supplements.webp";

export const supplementsForRunners: GuideContent = {
  title: "Integratori Essenziali per il Runner",
  seoTitle: "Migliori Integratori Corsa 2026: Guida Scientifica ai Dosaggi",
  seoDescription: "Quali integratori migliorano davvero le prestazioni nella corsa? Analisi scientifica di Creatina, Nitrati, Beta-Alanina e Vitamina D per atleti di endurance.",
  keywords: ["integratori corsa", "performance endurance", "creatina per runner", "nitrati succo barbabietola", "magnesio per crampi", "proteine per endurance"],
  description: "Quali integratori funzionano davvero per la corsa? Una guida basata sulle evidenze scientifiche per la performance e la salute.",
  tags: ["supplements", "electrolytes", "protein", "top-supplements-2026"],
  heroImage: guideSupplements,
  readTime: "12 min di lettura",
  keyTakeaways: [
    "L'integrazione è efficace solo se la base nutrizionale (calorie e macro) è solida",
    "La Caffeina (3-6mg/kg) è l'aiuto ergogenico con le prove scientifiche più solide per l'endurance",
    "I Nitrati (Barbabietola) migliorano l'efficienza mitocondriale riducendo il costo di ossigeno",
    "La Creatina Monoidrato è utile anche per l'endurance per la risintesi rapida di ATP negli sprint",
    "Ferro e Vitamina D sono i micronutrienti critici che richiedono monitoraggio ematico costante",
  ],
  relatedTools: [
    { to: "/tools/protein", label: "Calcolatore Proteine" },
    { to: "/tools/electrolytes", label: "Calcolatore Elettroliti" },
    { to: "/tools/calories", label: "Calcolatore Calorie" },
  ],
  relatedGuides: [
    { slug: "muscle-recovery", label: "Recupero Muscolare dopo la Corsa" },
    { slug: "running-nutrition", label: "Nutrizione Corsa: Cosa Mangiare" },
  ],
  sections: [
    { 
      heading: "La Gerarchia delle Performance: Scienza vs. Marketing", 
      body: "L'integrazione sportiva è spesso percepita come una scorciatoia, ma scientificamente rappresenta solo la 'punta della piramide'. Prima di considerare pillole e polveri, è fondamentale che l'apporto calorico totale, il bilancio dei macronutrienti e la qualità del sonno siano ottimizzati. Tuttavia, per gli atleti che superano le 5-7 ore di allenamento settimanale, alcuni micronutrienti e aiuti ergogenici possono diventare fattori limitanti critici.\n\n**Perché integrare?** Durante la corsa di endurance, il corpo subisce stress ossidativo, micro-lesioni muscolari e deplezione di elettroliti. Gli integratori corretti aiutano a mitigare questi danni, permettendo volumi di allenamento più elevati con un rischio ridotto di infortuni e sindrome da sovrallenamento (Overtraining).", 
      variant: "highlight" 
    },
    { 
      heading: "Potenziatori di Performance: Il 'Livello A' dell'Endurance", 
      body: "Solo una manciata di sostanze ha evidenze di 'Livello A' (il massimo grado di certezza scientifica) per migliorare le prestazioni di endurance. \n\n- **Nitrati (Succo di Barbabietola):** Agiscono come precursori dell'ossido nitrico, che dilata i vasi sanguigni e migliora l'efficienza mitocondriale. Gli studi mostrano una riduzione del costo di ossigeno fino al 5% a intensità submassimali. Dosaggio: 400-800 mg di nitrati (circa 500ml di succo o shot concentrati) 2-3 ore prima dell'attività.\n- **Beta-Alanina:** Un aminoacido che aumenta i livelli di carnosina nei muscoli. La carnosina agisce come un tampone intracellulare, neutralizzando gli ioni idrogeno (H+) che causano l'acidosi e il bruciore durante gli sforzi ad alta intensità (es. sprint finale o salite). Dosaggio: 3,2-6,4 g al giorno per almeno 4 settimane per saturare i tessuti.\n- **Bicarbonato di Sodio:** Agisce come un tampone extracellulare. È estremamente efficace ma rischioso per i disturbi gastrointestinali. Molti runner professionisti usano ora capsule a rilascio ritardato per mitigare gli effetti collaterali.", 
      variant: "default" 
    },
    {
      heading: "Caffeina: Il Gold Standard Strategico",
      body: "La caffeina è l'integratore con le prove più solide per l'endurance. Non agisce solo come stimolante del sistema nervoso centrale, ma riduce la percezione dello sforzo (RPE), permettendoti di mantenere un'intensità maggiore per più tempo. \n\n**Il Protocollo Ottimale:** Il dosaggio standard è di 3-6 mg per kg di peso corporeo (circa 2-3 caffè per un runner medio), assunto 45-60 minuti prima dello start. \n**Strategie Ultra-Endurance:** In gare superiori alle 4-5 ore, dosi massicce iniziali possono portare a un 'crash'. La strategia vincente è l'assunzione di micro-dosi (50mg, circa mezzo caffè o un gel caffeinato) ogni ora per mantenere i livelli ematici costanti senza picchi di ansia o tachicardia.",
      variant: "tip"
    },
    { 
      heading: "Salute e Resilienza: Lo Stack del Recupero Sistemico", 
      body: "La corsa è un'attività catabolica. Mantenere la salute dei tessuti è fondamentale per la longevità sportiva. \n\n- **Vitamina D3 + K2:** Cruciale non solo per le ossa (prevenzione fratture da stress), ma anche per la forza muscolare e la funzione immunitaria. La Vitamina K2 assicura che il calcio venga depositato nelle ossa e non nelle arterie.\n- **Magnesio (Bisglicinato o Citrato):** Fondamentale per il rilassamento muscolare e la qualità del sonno. Il bisglicinato è la forma con la migliore biodisponibilità e il minor effetto lassativo.\n- **Omega-3 (EPA/DHA):** Potenti anti-infiammatori naturali. Aiutano a ridurre i DOMS (dolori muscolari post-allenamento) e migliorano la fluidità delle membrane cellulari, facilitando lo scambio di nutrienti.", 
      variant: "default", 
      listItems: [
        "Ferro e Ferritina: Fondamentali per il trasporto di ossigeno. I runner perdono ferro per l'impatto dei piedi (emolisi) e la sudorazione.", 
        "Collagene + Vitamina C: Assunti 45-60 min prima di un allenamento di forza, possono migliorare la sintesi di nuovo collagene nei tendini.", 
        "Zinco e Selenio: Supportano la funzione tiroidea e il sistema immunitario, spesso compromessi durante i blocchi di allenamento intensi.",
        "Probiotici: Essenziali per chi soffre di disturbi gastrici in corsa; migliorano la barriera intestinale contro lo stress da calore."
      ] 
    },
    {
      heading: "Elettroliti e Cinetica dell'Idratazione",
      body: "L'acqua da sola non basta per corse superiori ai 60 minuti. Il Sodio è l'elettrolita principale perso con il sudore (da 500mg a 2000mg per litro). Una carenza di sodio porta a una riduzione del volume plasmatico, aumentando la frequenza cardiaca e il rischio di crampi.\n\n**L'importanza del Magnesio e Potassio:** Sebbene persi in quantità minori, giocano un ruolo chiave nella conduzione nervosa. Un integratore di elettroliti bilanciato dovrebbe contenere un rapporto sodio-potassio di circa 3:1 per mantenere l'equilibrio osmotico cellulare.",
      variant: "default"
    },
    {
      heading: "Creatina Monoidrato: Non solo per i Bodybuilder",
      body: "Molti runner evitano la creatina per paura del guadagno di peso. In realtà, la creatina è un potente aiuto per l'endurance. Aiuta nella risintesi rapida dell'ATP, fondamentale per gli scatti, le salite e il cambio di ritmo. Inoltre, la ritenzione idrica associata (circa 0,5-1kg) è intracellulare (dentro il muscolo), il che può effettivamente aiutare la termoregolazione in condizioni di caldo estremo. Dosaggio: 3-5 g al giorno fissi, senza fase di carico.",
      variant: "default"
    },
    {
      heading: "Il Paradosso degli Antiossidanti ad Alto Dosaggio",
      body: "Attenzione all'uso cronico di Vitamina C (>1000mg) e Vitamina E subito dopo l'allenamento. La scienza suggerisce che dosi eccessive di antiossidanti possono 'spegnere' i segnali di adattamento mitocondriale. In breve: se elimini tutto lo stress ossidativo con gli integratori, il tuo corpo non riceve il segnale che deve diventare più forte. Riserva gli antiossidanti per i periodi di gara intensa o quando senti i primi sintomi di un raffreddore.",
      variant: "warning"
    },
    {
      heading: "Cinetica di Proteine e Aminoacidi",
      body: "La Sintesi Proteica Muscolare (MPS) è attivata principalmente dalla Leucina. Per un runner, l'apporto proteico ideale è tra 1,4 e 1,8 g per kg di peso. \n\n- **Proteine Whey:** Rapido assorbimento, ideali post-corsa per fermare il catabolismo.\n- **Caseina:** Assorbimento lento, ottima prima di dormire per riparare i tessuti durante il digiuno notturno.\n- **BCAA/EAA:** Utili solo se l'apporto proteico totale è basso. In generale, una polvere proteica completa è sempre preferibile agli aminoacidi isolati.",
      variant: "tip"
    },
    { 
      heading: "Checklist per un'Integrazione Sicura", 
      body: "Il mercato degli integratori non è regolamentato come quello dei farmaci. Segui queste regole per la tua sicurezza.", 
      variant: "checklist", 
      listItems: [
        "Verifica Certificazioni: Cerca i marchi 'Informed Sport' o 'NSF' per escludere contaminazioni da sostanze dopanti.", 
        "Testa in Allenamento: Mai provare un nuovo integratore (specialmente gel o caffeina) il giorno della gara.", 
        "Analisi del Sangue: Prima di integrare ferro o vitamina D, verifica i tuoi livelli reali con un medico.", 
        "Qualità del Brand: Scegli marche trasparenti (es. Myprotein, Onnit) che pubblicano i risultati dei test di laboratorio.",
        "Ciclicizzazione: Sospendi periodicamente gli stimolanti (caffeina) per resettare la sensibilità dei recettori."
      ] 
    },
  ],
  hubCategory: "supplements",
};
