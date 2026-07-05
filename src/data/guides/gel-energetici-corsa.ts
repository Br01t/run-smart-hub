import { GuideContent } from "@/types/guide";
import guideNutrition from "@/assets/guide-nutrition.webp";

export const gelEnergeticiCorsa: GuideContent = {
  title: "Gel Energetici per la Corsa: Quando Prenderli e Quali Scegliere",
  seoTitle: "Gel Energetici Corsa: Quando Usarli e Quali Scegliere",
  seoDescription: "Guida completa ai gel energetici per la corsa: quando prenderli, dosaggi per 10K, mezza e maratona, come evitare disturbi gastrici e quali marche scegliere.",
  keywords: ["gel energetici corsa", "gel carboidrati", "gel maratona", "quando prendere gel corsa", "migliori gel corsa"],
  description: "Come e quando usare i gel energetici in corsa, con dosaggi precisi per ogni distanza e criteri di scelta per evitare disturbi gastrici.",
  tags: ["nutrition", "supplements", "carbohydrates"],
  heroImage: guideNutrition,
  readTime: "9 min di lettura",
  keyTakeaways: [
    "Sotto i 60 min di corsa i gel non servono: acqua è sufficiente.",
    "Regola d'oro: 30-60 g di carboidrati per ora oltre l'ora, fino a 90 g/h con miscele 2:1 glucosio-fruttosio.",
    "Il primo gel va assunto al minuto 30-45, non quando arriva la crisi energetica.",
    "Bevi 100-150 ml d'acqua con ogni gel per aiutare l'assorbimento gastrico.",
    "Provali sempre in allenamento: il 'gut training' evita i disturbi gastrici in gara.",
  ],
  relatedTools: [
    { to: "/tools/calories", label: "Calcolatore Calorie" },
    { to: "/tools/hydration", label: "Calcolatore Idratazione" },
  ],
  relatedGuides: [
    { slug: "running-nutrition", label: "Nutrizione per la Corsa" },
    { slug: "integratori-per-chi-corre", label: "Integratori per Chi Corre" },
    { slug: "marathon-training", label: "Guida alla Maratona per Principianti" },
  ],
  sections: [
    {
      heading: "A cosa servono davvero i gel energetici",
      body: "Un gel energetico è una dose concentrata di 20-30 g di carboidrati (glucosio, fruttosio, maltodestrine) in 30-60 ml di liquido. Serve a **mantenere alta la glicemia** e a **risparmiare glicogeno muscolare** durante corse lunghe, ritardando l'affaticamento e il temuto 'muro'.\n\nOgni ora di corsa a ritmo medio-alto brucia 60-90 g di carboidrati. Le riserve di glicogeno del corpo bastano per circa 90 minuti. Oltre quella soglia, senza integrazione, la performance crolla in modo netto.",
      variant: "highlight",
    },
    {
      heading: "Quando iniziare a prenderli: il timing è tutto",
      body: "L'errore più diffuso è aspettare di 'sentire il bisogno': quando ti manca l'energia, è già troppo tardi. Il gel impiega 15-20 minuti per raggiungere il flusso sanguigno.\n\n**Regole di timing per gara/uscita lunga:**\n- Primo gel: **al minuto 30-45**, mai oltre.\n- Successivi: **uno ogni 30-45 minuti**.\n- Ultimo gel: **non nell'ultimo 15% della corsa** (rischio inutilizzato + crampi).",
      variant: "tip",
    },
    {
      heading: "Dosaggi per distanza: quanti gel ti servono davvero",
      body: "Ogni distanza ha il suo protocollo. Considera 1 gel = circa 25 g di carboidrati.",
      variant: "default",
      listItems: [
        "5K (sotto i 30 min): nessun gel, solo acqua.",
        "10K (40-60 min): 0-1 gel se corri oltre l'ora o a intensità alta.",
        "Mezza maratona (1h30-2h): 2-3 gel, uno al km 8, uno al km 14, opzionale al km 18.",
        "Maratona (3h-5h): 5-8 gel, uno ogni 30-40 min a partire dal km 8-10.",
        "Ultra (>4h): 60-90 g/h di carboidrati misti (gel + solidi + bevande).",
      ],
    },
    {
      heading: "Glucosio, fruttosio e maltodestrine: come leggere l'etichetta",
      body: "Non tutti i gel sono uguali. La chiave è il **rapporto glucosio-fruttosio 2:1** che permette di assorbire fino a 90 g/h di carboidrati usando due trasportatori intestinali diversi (SGLT1 per glucosio, GLUT5 per fruttosio).\n\n- **Gel a solo glucosio/maltodestrine**: massimo 60 g/h, buoni per corse sotto le 2 ore.\n- **Gel con miscela 2:1 glucosio-fruttosio**: fino a 90 g/h, indispensabili in maratona e ultra.\n- **Gel isotonici** (più liquidi): richiedono meno acqua, ideali quando non hai borracce.\n- **Gel con caffeina** (25-100 mg): utili nella seconda metà della gara, non da abusare.",
      variant: "default",
    },
    {
      heading: "Come evitare i disturbi gastrici (gut training)",
      body: "Nausea, gonfiore, diarrea in gara: quasi sempre colpa di gel provati per la prima volta o di un intestino non allenato. Il **gut training** consiste nell'abituare progressivamente l'apparato digerente a gestire carboidrati durante lo sforzo.\n\n**Protocollo pratico in 4 settimane:**\n- Settimana 1: 30 g/h nel lungo (1 gel dopo 45 min).\n- Settimana 2: 45 g/h (1 gel ogni 40 min).\n- Settimana 3: 60 g/h con miscela 2:1.\n- Settimana 4: 75-90 g/h nella simulazione gara.\n\nBevi sempre 100-150 ml di acqua con ogni gel: senza liquidi il gel resta nello stomaco e crea crampi.",
      variant: "warning",
    },
    {
      heading: "Gel con caffeina: quando hanno senso",
      body: "I gel caffeinati (25-100 mg per porzione) riducono la percezione dello sforzo del 5-10% e migliorano la lucidità nella seconda metà della gara. \n\n**Uso intelligente:**\n- Non nel primo gel (rischio tachicardia e crampi).\n- Introdurli dopo il km 15-20 in maratona.\n- Alterna caffeinati e non caffeinati.\n- Dose totale massima consigliata: 3-6 mg/kg di caffeina in gara.\n\nSe non consumi caffeina abitualmente, testali molte volte in allenamento: alcune persone hanno risposte gastriche negative marcate.",
      variant: "tip",
    },
    {
      heading: "Alternative naturali ai gel commerciali",
      body: "Se i gel industriali non ti piacciono o vuoi risparmiare, hai alternative valide anche se meno pratiche.\n\n- **Miele in bustina** (1 cucchiaio ≈ 17 g di zuccheri) — economico e digeribile.\n- **Datteri Medjool** (2 datteri ≈ 30 g di carboidrati) — ottimi nel trail e nell'ultra.\n- **Banana matura** (25 g di carboidrati) — indispensabile prima e dopo.\n- **Gel fatti in casa**: 200 g miele + 100 ml acqua + 3 g sale = 6-7 dosi da 25 g CHO.\n\nSotto le 2 ore le alternative naturali sono paragonabili ai gel commerciali. Oltre quella durata, i gel industriali offrono un rapporto peso/carboidrati imbattibile.",
      variant: "default",
    },
    {
      heading: "Checklist prima di una gara lunga",
      body: "Il giorno prima e la mattina della gara, ripassa questi punti per evitare sorprese.",
      variant: "checklist",
      listItems: [
        "Ho testato in allenamento marca e gusto di tutti i gel che porterò in gara.",
        "Ho stabilito il timing esatto: km/tempo di ogni gel.",
        "Ho previsto acqua o rifornimento a ogni gel (mai gel senz'acqua).",
        "Ho un piano B: gel di riserva o alternativa naturale in caso di nausea.",
        "Ho evitato marchi mai provati o offerti al pasta party.",
      ],
    },
  ],
  hubCategory: "supplements",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
  faq: [
    {
      q: "Quando prendere il primo gel energetico in una gara?",
      a: "Il primo gel va assunto al minuto 30-45 di corsa, mai oltre. Il gel impiega 15-20 minuti per essere assorbito, quindi se aspetti di sentire il calo energetico sarai già in crisi. In maratona il primo gel si prende in genere tra il km 8 e il km 10.",
    },
    {
      q: "Quanti gel per una maratona?",
      a: "In media 5-8 gel per una maratona di 3-5 ore, ovvero uno ogni 30-40 minuti a partire dal km 8-10. L'obiettivo è assumere 60-90 g di carboidrati all'ora, meglio se in rapporto glucosio-fruttosio 2:1.",
    },
    {
      q: "I gel energetici fanno male allo stomaco?",
      a: "Solo se non sono stati testati in allenamento o se vengono presi senza acqua. Il gut training progressivo (aumentare i carboidrati orari in 3-4 settimane) permette all'intestino di gestire fino a 90 g/h senza disturbi.",
    },
    {
      q: "Meglio gel con o senza caffeina?",
      a: "Nella prima metà della gara meglio senza caffeina. Dopo il km 15-20 in maratona, i gel caffeinati (25-50 mg) riducono la percezione dello sforzo. Non superare 3-6 mg/kg di caffeina totale in gara.",
    },
  ],
};
