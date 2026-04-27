import { GuideContent } from "@/types/guide";
import guideWinterRunning from "@/assets/guide-winter-running.webp";

export const winterRunning: GuideContent = {
  title: "Come Correre in Sicurezza con il Freddo",
  seoTitle: "Guida Corsa Invernale 2026: Scienza dell'Abbigliamento e Strati",
  seoDescription: "Non lasciare che il freddo ti fermi. Padroneggia il sistema a 3 strati, scopri la diuresi indotta dal freddo e i migliori tessuti per la performance invernale.",
  keywords: ["abbigliamento corsa invernale", "correre con il freddo", "strati corsa inverno", "lana merino vs sintetico", "correre sul ghiaccio sicurezza", "idratazione invernale runner"],
  description: "Una guida pratica alla corsa invernale: sistemi a strati, attrezzatura essenziale e precauzioni di sicurezza per allenarsi nei mesi più freddi.",
  tags: ["accessories", "running", "apparel", "top-apparel-2026"],
  heroImage: guideWinterRunning,
  readTime: "7 min di lettura",
  keyTakeaways: [
    "Vestiti per una temperatura di 10°C superiore a quella reale per compensare il calore endogeno",
    "Il sistema a 3 strati (Base, Mid, Shell) è l'unico modo per gestire il sudore senza gelare",
    "La diuresi indotta dal freddo aumenta la perdita di liquidi: non scordare gli elettroliti",
    "Proteggi le vie respiratorie con un buff per prevenire il broncospasmo da aria secca",
    "Il cambio immediato post-corsa è critico per prevenire l'ipotermia da post-esercizio",
  ],
  relatedTools: [
    { to: "/tools/hydration", label: "Calcolatore Idratazione" },
    { to: "/tools/calories", label: "Calcolatore Calorie" },
  ],
  relatedGuides: [
    { slug: "choosing-running-shoes", label: "Come Scegliere le Scarpe da Corsa" },
    { slug: "injury-prevention", label: "Guida alla Prevenzione Infortuni" },
  ],
  sections: [
    { 
      heading: "La Scienza: Termoregolazione e Vasocostrizione", 
      body: "Quando corri con temperature vicine allo zero, il corpo attiva un protocollo di emergenza per proteggere gli organi vitali. La vasocostrizione periferica riduce il flusso sanguigno verso la pelle e le estremità per minimizzare la dispersione di calore. \n\n**Costo Energetico del Freddo:** Correre al freddo può bruciare leggermente più calorie (glicogeno) perché il corpo deve generare calore interno attraverso i brividi o l'attivazione del grasso bruno. Tuttavia, la performance muscolare pura cala: le fibre muscolari fredde sono meno efficienti e più inclini a micro-lesioni. Per questo, un riscaldamento progressivo è molto più critico in inverno che in estate.", 
      variant: "highlight" 
    },
    { 
      heading: "Fisiologia: La Diuresi Indotta dal Freddo", 
      body: "Ti sei mai chiesto perché devi urinare più spesso durante le corse invernali? \n\n- **Meccanismo:** Il freddo causa lo spostamento del volume sanguigno dalle estremità verso il centro del corpo. Questo aumento della pressione centrale viene interpretato dai recettori come un eccesso di liquidi. Il corpo risponde eliminando acqua attraverso i reni. \n- **Il Pericolo Disidratazione:** Molti runner smettono di bere perché non 'sentono' la sete. In realtà, perdi grandi quantità di liquidi attraverso la respirazione (l'aria fredda deve essere umidificata dai polmoni) e la diuresi. Sangue più denso significa cuore che lavora di più e recupero più lento.", 
      variant: "default" 
    },
    { 
      heading: "Il Sistema a Tre Strati: Ingegneria del Clima", 
      body: "Padroneggiare gli strati è l'unica difesa contro l'ipotermia da sudore. \n\n1. **Base Layer (Traspirazione):** Deve essere aderente e sintetico o in lana merino. Il suo unico compito è allontanare il sudore dalla pelle. Il cotone è proibito: assorbe acqua e ti raffredda 25 volte più velocemente dell'aria.\n2. **Mid Layer (Isolamento):** Intrappola l'aria calda. I tessuti 'waffle' o a griglia sono ideali perché offrono calore senza ingombro, permettendo al vapore acqueo di continuare il suo viaggio verso l'esterno.\n3. **Outer Shell (Protezione):** Deve bloccare il vento ma restare traspirante. Una giacca totalmente impermeabile è spesso controproducente perché intrappola il sudore all'interno, bagnando gli strati sottostanti.", 
      variant: "default" 
    },
    { 
      heading: "Salute Respiratoria e Aria Secca", 
      body: "L'aria invernale ha un'umidità bassissima. Quando inali aria fredda a 170 battiti al minuto, i tuoi bronchi subiscono uno shock termico.\n\n- **HME (Heat and Moisture Exchange):** Indossare uno scaldacollo (buff) sopra bocca e naso agisce come uno scambiatore di calore. L'umidità del tuo respiro in uscita rimane nel tessuto e umidifica l'aria secca in entrata. Questo riduce drasticamente il rischio di tosse post-corsa e broncospasmo indotto dall'esercizio.", 
      variant: "default", 
      listItems: [
        "Estremità: Indossa guanti tecnici; le mani sono le prime a perdere destrezza per la vasocostrizione.", 
        "Visibilità: In inverno le ore di luce sono ridotte; elementi riflettenti e luci sono obbligatori.", 
        "Trazione: Su neve o ghiaccio, riduci la lunghezza del passo e aumenta la cadenza per la stabilità.",
        "Batteria GPS: Il freddo rallenta le reazioni chimiche delle batterie; tieni l'orologio coperto dalla manica."
      ] 
    },
    {
      heading: "Consiglio: La Regola del +10°C",
      body: "La regola d'oro per non soffrire il freddo (né il caldo eccessivo) è vestirsi come se ci fossero 10 gradi in più rispetto alla temperatura reale. Se fuori ci sono 2°C, vestiti come se dovessi fare una passeggiata a 12°C. Sentirai freddo nei primi 5 minuti, masarai perfetto per il resto dell'allenamento.",
      variant: "tip"
    },
    {
      heading: "Attenzione: Il Pericolo post-corsa",
      body: "Il momento più pericoloso per l'ipotermia è *dopo* la corsa. Appena smetti di produrre calore, i vestiti umidi iniziano a sottrarre calore al tuo corpo a una velocità impressionante. Non fermarti a chiacchierare; entra in un luogo caldo e cambia il primo strato immediatamente.",
      variant: "warning"
    },
    { 
      heading: "Checklist: Preparazione Invernale", 
      body: "Non farti trovare impreparato dal gelo.", 
      variant: "checklist", 
      listItems: [
        "Riscaldamento Indoor: Esegui 5 minuti di mobilità in casa prima di uscire per non partire con muscoli 'congelati'.", 
        "Cura della Pelle: Usa creme barriera o vaselina su zigomi e naso per evitare bruciature da vento.", 
        "Controllo Meteo: Controlla sempre la velocità del vento (Wind Chill); 0°C con vento forte sembrano -10°C.", 
        "Idratazione Tiepida: Porta borracce con acqua tiepida per evitare che gelino durante i lunghi.",
        "Cambio Rapido: Prepara i vestiti asciutti e una bevanda calda da consumare subito dopo l'allenamento."
      ] 
    }
  ],
  hubCategory: "apparel",
};
