import { GuideContent } from "@/types/guide";
import guideShoes from "@/assets/guide-shoes.webp";

export const runningShoeRotation: GuideContent = {
  title: "Come Costruire una Rotazione di Scarpe da Corsa",
  seoTitle: "Guida Rotazione Scarpe Corsa 2026: Scienza della Prevenzione Infortuni",
  seoDescription: "Riduci il rischio di infortuni del 39% con una rotazione strategica delle scarpe. Scopri il recupero del foam, la variazione meccanica e come creare la rotazione perfetta.",
  keywords: ["rotazione scarpe corsa", "prevenire infortuni corsa", "recupero foam scarpe corsa", "scarpa daily trainer vs speed", "rotazione scarpe in carbonio", "guida attrezzatura corsa"],
  description: "La guida scientifica e pratica alla rotazione di più paia di scarpe per ridurre il rischio di infortuni e migliorare le prestazioni.",
  tags: ["shoes", "gear", "injury-prevention", "top-picks-2026"],
  heroImage: guideShoes,
  readTime: "4 min di lettura",
  keyTakeaways: [
    "Alternare tra più di 2 modelli riduce il rischio di infortuni da stress ripetitivo del 39%",
    "Variare il drop (es. 10 mm e 4 mm) sposta il carico su diverse articolazioni",
    "Le schiume dell'intersuola richiedono 24-48 ore per decomprimersi completamente e recuperare il ritorno di energia",
    "Una rotazione a 3 scarpe (Daily, Speed, Recovery) massimizza sia la durata delle scarpe che le prestazioni",
  ],
  relatedTools: [
    { to: "/tools/bmi", label: "Calcolatore BMI" },
    { to: "/tools/protein", label: "Calcolatore Proteine" },
  ],
  relatedGuides: [
    { slug: "choosing-running-shoes", label: "Come Scegliere le Scarpe da Corsa" },
    { slug: "injury-prevention", label: "Guida alla Prevenzione Infortuni" },
  ],
  sections: [
    { 
      heading: "La Scienza: Variazione Meccanica", 
      body: "Gli infortuni da sovraccarico nella corsa sono spesso causati dalla 'monotonia del carico'—ovvero applicare lo stesso identico stress ai medesimi tessuti migliaia di volte per chilometro. Alternando scarpe con diverse altezze, densità di schiuma e geometrie, sposti sottilmente lo stress su diverse articolazioni e gruppi muscolari. \n\n**Stimolazione Propriocettiva:** Scarpe diverse inviano segnali diversi al cervello. Questo impedisce al sistema neuromuscolare di diventare 'pigro' e rafforza i muscoli intrinseci del piede e gli stabilizzatori della caviglia.", 
      variant: "highlight" 
    },
    { 
      heading: "Recupero della Schiuma: Il Livello Molecolare", 
      body: "Le moderne schiume per intersuole (EVA, TPU e PEBA) sono composte da strutture a celle chiuse che si comprimono per assorbire l'urto. Le ricerche mostrano che possono essere necessarie fino a **48 ore** affinché queste celle si 'decomprimano' completamente e tornino alla loro forma originale dopo una corsa di 10 km. \n\n- **Il Cedimento Prematuro:** Se corri con lo stesso paio ogni giorno, stai effettivamente correndo su una schiuma parzialmente collassata. Questo fornisce meno protezione alle articolazioni e causa la 'morte' della scarpa (perdita di reattività) il 20-30% più velocemente.", 
      variant: "default" 
    },
    { 
      heading: "La Matrice Ideale a 4 Scarpe", 
      body: "Per il runner dedicato, una rotazione in quattro categorie assicura di avere sempre lo strumento giusto per ogni lavoro. \n\n1. **La Daily Trainer:** Affidabile e durevole (drop 8-10 mm). Il tuo 'mulo' per il 60% delle corse. \n2. **La Scarpa da Velocità/Intervalli:** Leggera e flessibile con un'altezza inferiore per una migliore sensazione del terreno. \n3. **La Scarpa da Recupero/Massima Ammortizzazione:** Molta schiuma sotto il piede con geometria 'rocker' per scaricare polpacci e tendine d'Achille nelle corse facili. \n4. **La 'Super Shoe' da Gara:** Schiuma a base PEBA con piastra in carbonio per il massimo ritorno energetico.", 
      variant: "default", 
      listItems: [
        "De-loading Meccanico: le scarpe con drop alto salvano l'Achille; quelle con drop basso salvano le ginocchia", 
        "Vita Economica: ruotare 3 paia dura di più che comprare 3 paia in sequenza", 
        "Specificità della Superficie: usa scarpe da trail dedicate per proteggere la suola delle tue scarpe da strada",
        "Lo Switch della Stabilità: usa una scarpa neutra per i giorni veloci e una stabile per i giorni in cui sei stanco."
      ] 
    },
    {
      heading: "Il Mito della Longevità",
      body: "Ruotare le scarpe non 'costa' di più nel lungo periodo. Poiché distribuisci il chilometraggio su più paia, ogni paio dura per una distanza totale maggiore perché la schiuma non è soggetta al cedimento da uso quotidiano. Alla fine, comprerai scarpe meno spesso.",
      variant: "tip"
    },
    {
      heading: "La Zona di Pericolo delle 'Scarpe Vecchie'",
      body: "Una volta che una scarpa perde la sua reattività, i tuoi muscoli devono lavorare di più per stabilizzare l'andatura. Se avverti un dolore insolito all'arco plantare o periostite con un paio che ha più di 600 km, è probabile che la schiuma sia 'scarica' anche se la suola sembra nuova. Falle andare in pensione immediatamente per evitare infortuni.",
      variant: "warning"
    },
    { 
      heading: "Checklist per Costruire la Rotazione", 
      body: "Come aggiungere strategicamente scarpe al tuo armadio.", 
      variant: "checklist", 
      listItems: [
        "Analizza l'Attrezzatura Attuale: identifica se hai un 'vuoto' (es. ti manca una scarpa leggera da velocità).", 
        "Varia il Drop: se la tua scarpa attuale è da 10 mm, cerca un'opzione da 5 mm o 6 mm per il prossimo paio.", 
        "Sincronizza con il tuo Piano: abbina le scarpe ai tuoi prossimi blocchi di allenamento (es. preparazione maratona).", 
        "Traccia i Chilometri: usa un registro digitale per sapere esattamente quando una scarpa sta raggiungendo il suo limite.",
        "Introduzione Graduale: indossa i nuovi modelli per brevi corse di 5 km prima di affrontarci una corsa lunga."
      ] 
    },
  ],
  hubCategory: "shoes",
};
