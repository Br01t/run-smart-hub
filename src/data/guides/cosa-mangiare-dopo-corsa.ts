import { GuideContent } from "@/types/guide";
import guideNutrition from "@/assets/guide-nutrition.webp";

export const cosaMangiareDopoCorsa: GuideContent = {
  title: "Cosa Mangiare Dopo la Corsa: Recupero Nutrizionale in 30 Minuti",
  seoTitle: "Cosa Mangiare Dopo la Corsa: Guida Pratica 2026",
  seoDescription: "Cosa mangiare dopo la corsa per un recupero ottimale: la finestra dei 30 minuti, il rapporto carbo-proteine 3:1, cibi consigliati e cosa evitare assolutamente.",
  keywords: ["cosa mangiare dopo la corsa", "recupero nutrizionale corsa", "cosa integrare dopo una corsa", "cibi post corsa", "pasto dopo corsa"],
  description: "Il pasto post-corsa determina il tuo recupero muscolare e la prontezza per l'allenamento successivo. Regole pratiche, cibi migliori ed errori da evitare.",
  tags: ["nutrition", "recovery", "protein", "carbohydrates"],
  heroImage: guideNutrition,
  readTime: "8 min di lettura",
  keyTakeaways: [
    "Finestra ottimale: 30-60 minuti dopo la corsa, quando l'assorbimento è massimo.",
    "Rapporto d'oro: 3:1 di carboidrati:proteine (es. 60 g carbo + 20 g proteine).",
    "Almeno 500 ml di acqua con elettroliti nei primi 30 minuti se hai sudato molto.",
    "Evita grassi elevati subito dopo: rallentano lo svuotamento gastrico e il recupero.",
    "Per corse sotto i 45 minuti basta il pasto normale successivo: non serve nulla di specifico.",
  ],
  relatedTools: [
    { to: "/tools/protein", label: "Calcolatore Proteine" },
    { to: "/tools/calories", label: "Calcolatore Calorie" },
    { to: "/tools/hydration", label: "Calcolatore Idratazione" },
  ],
  relatedGuides: [
    { slug: "running-nutrition", label: "Nutrizione per la Corsa" },
    { slug: "muscle-recovery", label: "Recupero Muscolare Dopo la Corsa" },
    { slug: "integratori-per-chi-corre", label: "Integratori per Chi Corre" },
  ],
  sections: [
    {
      heading: "Perché il post-corsa è più importante del pre-corsa",
      body: "Molti runner curano ossessivamente il pasto prima dell'allenamento e trascurano quello dopo. È un errore. Il pre-corsa serve a evitare cali energetici; il **post-corsa determina quanto in fretta e quanto bene ti riprendi**, cioè la qualità dell'allenamento successivo.\n\nDurante la corsa consumi glicogeno muscolare, disidratati e crei micro-lesioni. Nei 60 minuti successivi il corpo è in una fase di ipersensibilità insulinica: assorbe carboidrati e amminoacidi con efficienza superiore al 60% rispetto al resto della giornata. Sfruttare questa finestra accelera in modo netto il recupero.",
      variant: "highlight",
    },
    {
      heading: "La finestra dei 30 minuti: cosa dice davvero la scienza",
      body: "Il concetto di 'anabolic window' è stato ridimensionato: non esiste una scadenza rigida oltre la quale 'perdi tutto'. Ma le evidenze mostrano che mangiare entro 30-60 minuti dopo una corsa:\n\n- accelera la risintesi del glicogeno del 20-40% (Ivy et al., studi replicati)\n- ottimizza la sintesi proteica muscolare\n- riduce cortisolo e infiammazione\n- limita il catabolismo (perdita di massa magra)\n\nPer runner amatoriali che si allenano una volta al giorno, la finestra non è critica come per gli atleti di élite. Ma è comunque il momento con il ROI più alto per un pasto strategico.",
      variant: "default",
    },
    {
      heading: "Il rapporto d'oro: 3:1 di carboidrati e proteine",
      body: "Studi su ciclisti e runner mostrano che la combinazione più efficace nel post-endurance è **3 grammi di carboidrati per ogni grammo di proteine**.\n\n**Dosaggi pratici per corse di 60-90 minuti:**\n- Runner 60 kg: ~45 g carbo + 15 g proteine\n- Runner 70 kg: ~60 g carbo + 20 g proteine\n- Runner 80 kg: ~75 g carbo + 25 g proteine\n\nI carboidrati ricaricano il glicogeno, le proteine forniscono gli amminoacidi per riparare i muscoli. Prese insieme aumentano il rilascio insulinico e migliorano l'ingresso dei nutrienti nelle cellule.",
      variant: "tip",
    },
    {
      heading: "I 10 pasti post-corsa migliori (pratici e reali)",
      body: "Combinazioni realistiche da avere in casa o pronte all'occorrenza.",
      variant: "default",
      listItems: [
        "Yogurt greco 200 g + miele 2 cucchiaini + banana + granola (35 g carbo, 20 g proteine).",
        "Toast integrale 2 fette + prosciutto crudo 40 g + succo d'arancia 250 ml (60 g carbo, 20 g proteine).",
        "Smoothie: latte 300 ml + banana + fiocchi d'avena 40 g + whey 20 g (65 g carbo, 30 g proteine).",
        "Riso basmati 80 g crudi + petto di pollo 100 g + verdure (65 g carbo, 30 g proteine).",
        "Pasta 70 g + pomodoro + ricotta 80 g + parmigiano (55 g carbo, 20 g proteine).",
        "Panino integrale + tonno al naturale + pomodoro + mela (55 g carbo, 25 g proteine).",
        "Cornflakes 60 g + latte 250 ml + uova strapazzate 2 (65 g carbo, 20 g proteine).",
        "Wrap di pollo grigliato + hummus + insalata (50 g carbo, 25 g proteine).",
        "Bagel + salmone affumicato 50 g + formaggio spalmabile (60 g carbo, 20 g proteine).",
        "Frullato di recupero commerciale se hai fretta (leggi bene le etichette).",
      ],
    },
    {
      heading: "Cosa NON mangiare (o mangiare più tardi)",
      body: "Alcuni cibi apparentemente sani sono controproducenti nella finestra post-corsa.\n\n- **Grassi elevati** (avocado abbondante, formaggi grassi, burro d'arachidi in grandi dosi): rallentano lo svuotamento gastrico e l'assorbimento dei carboidrati.\n- **Alimenti troppo ricchi di fibre** (crusca, verdure crude in grandi quantità): possono causare fastidi gastrici e ridurre l'assorbimento.\n- **Alcol**: riduce la sintesi proteica muscolare fino al 30% se assunto nelle 2-4 ore post-allenamento.\n- **Cibi solidi pesanti** se hai lo stomaco chiuso: meglio uno smoothie o uno yogurt che aspettare 2 ore per fame.",
      variant: "warning",
    },
    {
      heading: "Idratazione post-corsa: la parte spesso dimenticata",
      body: "Il pasto conta, ma senza reidratazione i nutrienti non arrivano bene alle cellule.\n\n**Regola pratica:** pesati prima e dopo la corsa. Per ogni chilogrammo perso, bevi **1,5 litri di liquidi** nelle 2 ore successive (l'extra 50% compensa la diuresi indotta dall'iperidratazione).\n\nSe la corsa è durata più di 60 min o è stata intensa, aggiungi elettroliti (500-700 mg di sodio per litro). Acqua liscia da sola può causare iponatriemia diluizionale nei casi estremi.",
      variant: "default",
    },
    {
      heading: "Checklist recupero nutrizionale ottimale",
      body: "La routine del runner che vuole davvero recuperare bene.",
      variant: "checklist",
      listItems: [
        "Entro 15 min: 500 ml acqua + elettroliti se sudata abbondante.",
        "Entro 30-60 min: pasto o snack con rapporto 3:1 carbo/proteine.",
        "Entro 2 ore: pasto completo bilanciato (carboidrati complessi + proteine + verdure).",
        "Nelle 24h successive: proteine distribuite in 4 pasti da 20-30 g ciascuno.",
        "Prima di dormire (giorni di carico): 20 g di caseina o skyr per sintesi notturna.",
      ],
    },
  ],
  hubCategory: "nutrition",
  datePublished: "2026-07-06",
  dateModified: "2026-07-06",
  faq: [
    {
      q: "Devo mangiare subito dopo la corsa anche se non ho fame?",
      a: "Per corse sotto i 45-60 minuti no: puoi tranquillamente aspettare il pasto normale successivo. Per corse più lunghe o intense sì: anche uno snack piccolo (yogurt + banana) entro 30-60 minuti accelera il recupero, poi mangi il pasto vero quando ti torna appetito.",
    },
    {
      q: "Cosa mangiare dopo la corsa se voglio dimagrire?",
      a: "Anche in deficit calorico serve mangiare qualcosa entro 60 minuti per proteggere la massa magra. Riduci le porzioni ma mantieni le proteine (20-25 g) e includi carboidrati integrali (30-40 g). Saltare il pasto post-corsa peggiora fame, cortisolo e catabolismo muscolare.",
    },
    {
      q: "Le proteine in polvere sono necessarie dopo la corsa?",
      a: "Comode ma non indispensabili. 20-25 g di whey nel latte sono l'equivalente proteico di 100 g di petto di pollo o 200 g di yogurt greco. Usa le proteine in polvere solo se non riesci a raggiungere l'apporto giornaliero (1,4-1,8 g/kg) con il cibo normale.",
    },
    {
      q: "Posso bere una birra dopo la corsa?",
      a: "Occasionalmente sì, ma sappi che l'alcol riduce la sintesi proteica muscolare fino al 30% se assunto nelle 2-4 ore dopo l'allenamento e peggiora la reidratazione. Meglio idratarsi bene prima con acqua ed elettroliti e rimandare la birra al pasto successivo.",
    },
  ],
};
