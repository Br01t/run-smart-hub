import { GuideContent } from "@/types/guide";
import guideShoes from "@/assets/guide-shoes.webp";

export const choosingRunningShoes: GuideContent = {
  title: "Come Scegliere le Scarpe da Corsa",
  seoTitle: "Come Scegliere le Scarpe da Corsa 2026: Guida a Biomeccanica e Schiume",
  seoDescription: "La guida scientifica definitiva alle scarpe da corsa. Scopri le schiume PEBA, l'altezza dello stack, il drop e come trovare il paio perfetto usando la teoria del Comfort Filter.",
  keywords: ["scelta scarpe corsa", "scienza scarpe running", "schiuma PEBA vs EVA", "scarpe piastra carbonio", "drop scarpe corsa", "rotazione scarpe"],
  description: "Guida completa per scegliere le scarpe da corsa giuste in base al tipo di piede, al terreno e agli obiettivi di performance.",
  tags: ["scarpe", "corsa", "ammortizzazione", "top-picks-2026"],
  heroImage: guideShoes,
  readTime: "12 min di lettura",
  keyTakeaways: [
    "Il 'Comfort Filter' è il miglior predittore di efficienza e prevenzione infortuni",
    "Le moderne schiume PEBA restituiscono fino all'87% di energia rispetto al 60% dell'EVA standard",
    "Il drop (0-12mm) sposta il carico meccanico tra ginocchia e polpacci",
    "Ruotare almeno due paia di scarpe riduce gli infortuni da stress ripetitivo del 39%",
  ],
  relatedTools: [
    { to: "/tools/bmi", label: "Calcolatore BMI" },
    { to: "/tools/calories", label: "Calcolatore Calorie" },
  ],
  relatedGuides: [
    { slug: "muscle-recovery", label: "Recupero Muscolare Dopo la Corsa" },
    { slug: "injury-prevention", label: "Guida per Runner alla Prevenzione Infortuni" },
  ],
  sections: [
    { 
      heading: "La Scienza: Biomeccanica e Dinamica dell'Energia", 
      body: "La moderna scienza delle scarpe da corsa è passata dal 'controllo del movimento' alla 'gestione dell'energia'. Quando corri, il tuo corpo sperimenta forze d'impatto tra 2,5 e 3,0 volte il tuo peso corporeo. L'obiettivo di una scarpa da performance è gestire queste forze attraverso specifiche proprietà dei materiali.\n\n**Efficienza del Ritorno di Energia:** La schiuma EVA tradizionale (Etilene Vinil Acetato) restituisce circa il 60-65% dell'energia immagazzinata durante la compressione. Al contrario, le schiume avanzate in PEBA (Poliere Blocco Ammide) — presenti nelle moderne 'Super Shoes' — possono restituire oltre l'85%. Ciò riduce il costo metabolico della corsa (Economia di Corsa) dall'1,8% all'1,9%, permettendo velocità più elevate a parità di sforzo cardiovascolare.", 
      variant: "highlight" 
    },
    { 
      heading: "Tecnologia delle Schiume: EVA vs. PEBA vs. TPU", 
      body: "Non tutte le ammortizzazioni sono uguali. Comprendere la chimica dell'intersuola ti aiuta a scegliere lo strumento giusto per il lavoro. \n\n- **EVA (Standard):** Affidabile, durevole e soda. Ideale per l'allenamento quotidiano e la stabilità. \n- **TPU (Iniettato):** Più durevole dell'EVA, migliore resistenza alla temperatura e maggiore ritorno di energia. Spesso si trova nelle scarpe da allenamento quotidiano premium. \n- **PEBA (Super Foam):** Ultraleggera e iper-reattiva. Fornisce il massimo ritorno di energia ma ha una durata più breve (circa 400-500 km).", 
      variant: "default" 
    },
    { 
      heading: "Stack Height, Propriocezione e Stabilità", 
      body: "Le altezze elevate dello stack (>35mm) forniscono una protezione superiore dagli impatti ma possono ridurre la sensibilità al suolo o propriocezione. Gli studi dimostrano che stack estremamente alti possono aumentare l'instabilità della caviglia in alcuni runner a causa dell'effetto 'braccio di leva' della schiuma.\n\n**La Teoria del Comfort Filter:** Ideata dal Dr. Benno Nigg, questa teoria suggerisce che la scarpa che risulta più comoda e meno restrittiva per la tua andatura naturale sia statisticamente la più efficiente e la meno probabile a causare infortuni. Le scarpe neutre permettono il movimento naturale del piede, mentre le scarpe stabili usano schiume a doppia densità per rallentare il tasso di pronazione.", 
      variant: "default", 
      listItems: [
        "Compression Set: Le schiume EVA perdono circa il 10% della loro ammortizzazione ogni 100 km", 
        "Geometria di Stabilità: La stabilità moderna deriva da basi più larghe piuttosto che da inserti rigidi mediali", 
        "Percorso dell'Andatura: Le scarpe stabili dovrebbero supportare, non sovrastare, il tuo naturale 'percorso di movimento preferito'",
        "Heel Drop: Un drop più alto (10-12mm) sposta il carico sulle ginocchia; un drop più basso (0-4mm) sposta il carico su polpacci e tendine d'Achille."
      ] 
    },
    { 
      heading: "La Rivoluzione della Piastra in Carbonio", 
      body: "Le piastre in carbonio non agiscono come 'molle'. Invece, funzionano come un 'agente irrigidente' che stabilizza la schiuma PEBA iper-morbida e agisce come una leva per ridurre il lavoro richiesto dalle articolazioni dell'alluce e della caviglia. Questo spostamento di carico significa che devi avere polpacci e fianchi forti per gestire l'aumentato stress eccentrico delle scarpe da gara con piastra.", 
      variant: "tip" 
    },
    { 
      heading: "Miti Comuni sulla Taglia", 
      body: "Molti runner comprano scarpe troppo piccole. I piedi si gonfiano significativamente durante la corsa, specialmente con il caldo. \n\n- **La Regola del Pollice:** Hai bisogno di almeno 1 cm di spazio tra il dito più lungo e la fine della scarpa. \n- **La Larghezza Conta:** Se vedi il piede 'traboccare' dall'intersuola, hai bisogno di una versione larga (2E/4E). Un piede costretto non può attivare correttamente il meccanismo di verricello (il supporto naturale dell'arco del piede).", 
      variant: "warning" 
    },
    { 
      heading: "Checklist per la Scelta: Come Acquistare", 
      body: "Segui questo protocollo quando provi nuove calzature per assicurarti un abbinamento perfetto.", 
      variant: "checklist", 
      listItems: [
        "Acquista nel Pomeriggio: I tuoi piedi sono più grandi dopo una giornata di cammino.", 
        "Indossa le Tue Calze da Corsa: Lo spessore delle calze cambia la vestibilità di mezza taglia.", 
        "Rimuovi la Soletta: Alzati sopra di essa. Se il tuo piede trabocca dai bordi, la scarpa è troppo stretta.", 
        "Il Test della Camminata: Se senti un 'punto caldo' o attrito mentre cammini, diventerà una vescica mentre corri.",
        "Piano di Rotazione: Prevedi una scarpa 'soda' per corse brevi/veloci e una 'morbida' per corse lunghe/lente."
      ] 
    },
  ],
  hubCategory: "shoes",
};
