import { GuideContent } from "@/types/guide";
import guideRunningForm from "@/assets/guide-running-form.webp";

export const runningForm: GuideContent = {
  title: "Come Migliorare la Tecnica di Corsa",
  seoTitle: "Guida Tecnica di Corsa 2026: Scienza della Postura ed Efficienza",
  seoDescription: "Corri più veloce con meno sforzo. Padroneggia la scienza della tecnica di corsa, inclusa l'inclinazione pelvica, il movimento delle braccia e l'inclinazione delle caviglie per la massima efficienza.",
  keywords: ["guida tecnica corsa", "postura corsa", "migliorare efficienza corsa", "appoggio mesopiede", "movimento braccia corsa", "tecnica corretta corsa"],
  description: "Correggi la postura, il movimento delle braccia, l'appoggio del piede e la respirazione per una corsa più efficiente e senza infortuni.",
  tags: ["running", "muscles", "shoes"],
  heroImage: guideRunningForm,
  readTime: "7 min di lettura",
  keyTakeaways: [
    "La tecnica corretta riduce le forze frenanti e massimizza l'economia di corsa",
    "L'inclinazione deve partire dalle caviglie per sfruttare la gravità come propulsore",
    "Atterrare sotto il centro di massa riduce drasticamente lo stress sulle ginocchia",
    "Il movimento delle braccia bilancia la coppia rotazionale prodotta dalle gambe",
    "Un bacino stabile è fondamentale per attivare correttamente la catena dei glutei",
  ],
  relatedTools: [
    { to: "/tools/bmi", label: "Calcolatore BMI" },
    { to: "/tools/calories", label: "Calcolatore Calorie" },
  ],
  relatedGuides: [
    { slug: "running-cadence", label: "Cadenza nella Corsa: Perché i Passi Contano" },
    { slug: "injury-prevention", label: "Guida alla Prevenzione Infortuni" },
  ],
  sections: [
    { 
      heading: "La Scienza: Ottimizzazione della Catena Cinetica", 
      body: "La tecnica di corsa non è solo estetica; è l'ottimizzazione della 'Catena Cinetica'. Ogni inefficienza—come l'overstriding (passo troppo lungo) o l'incrocio della linea mediana con le braccia—crea delle 'forze frenanti' che il corpo deve compensare sprecando energia preziosa. \n\n**Gestione delle Forze di Impatto:** Quando il piede tocca terra, il corpo subisce una forza di reazione al suolo (GRF) pari a circa 3 volte il peso corporeo. Una tecnica efficiente permette di distribuire queste forze attraverso le articolazioni in modo che vengano assorbite dai muscoli e restituite dai tendini sotto forma di energia elastica. Se la postura è scorretta, queste forze vengono scaricate direttamente su ossa e cartilagini, portando a infortuni da stress.", 
      variant: "highlight" 
    },
    { 
      heading: "Pilastri Posturali: La Caduta Controllata", 
      body: "Correre in modo efficace è essenzialmente una 'caduta controllata'. Invece di inclinarti dalla vita (ponendo stress sulla zona lombare), dovresti mantenere il corpo dritto e inclinarti leggermente in avanti dalle **caviglie**. \n\n- **Il Motore della Gravità:** Questa inclinazione sposta il tuo centro di massa leggermente davanti al punto di appoggio, permettendo alla gravità di 'tirarti' in avanti. Questo riduce il lavoro richiesto ai muscoli flessori dell'anca per iniziare ogni passo. \n- **Allineamento Verticale:** Immagina una linea retta che attraversa orecchie, spalle, anche e caviglie. Mantenere questa 'statura alta' apre la cavità toracica, facilitando una respirazione diaframmatica profonda e massimizzando l'apporto di ossigeno.", 
      variant: "default" 
    },
    { 
      heading: "Appoggio del Piede e Overstriding", 
      body: "L'errore più comune è atterrare con il tallone molto davanti al ginocchio (Overstriding). Questo agisce come un freno a ogni passo. \n\n- **Atterraggio sotto il Baricentro:** L'obiettivo è far toccare il piede il più vicino possibile alla proiezione verticale del tuo centro di massa. Non importa se tocchi prima di tallone, mesopiede o avampiede; l'importante è che la tibia sia perpendicolare al terreno al momento dell'impatto. Questo minimizza il momento frenante e massimizza la propulsione immediata.", 
      variant: "default" 
    },
    { 
      heading: "Movimento delle Braccia: Il Contrappeso", 
      body: "Le braccia bilanciano la rotazione naturale del bacino. \n\n- **Piano Sagittale:** Le mani dovrebbero muoversi avanti e indietro come pendoli, senza mai incrociare la linea mediana del petto. Se le braccia oscillano lateralmente, costringono il core a lavorare duramente per stabilizzare la colonna, sprecando glucosio muscolare.\n- **Angolo del Gomito:** Mantieni un angolo di circa 90 gradi. Un braccio troppo disteso crea una leva lunga e pesante da muovere; un braccio troppo contratto crea tensione nelle spalle e nel collo.", 
      variant: "default", 
      listItems: [
        "Rilassamento: Tieni le mani come se stringessi un uovo; la tensione delle mani risale fino alle spalle.", 
        "Bacino Neutro: Evita di correre 'seduto'; attiva i glutei per mantenere le anche alte.", 
        "Respirazione: Coordina il respiro con i passi (es. 2 passi inspiro, 2 passi espiro) per stabilizzare il core.",
        "Sguardo: Guarda 20 metri avanti per mantenere la testa in asse con la colonna vertebrale."
      ] 
    },
    {
      heading: "La Strategia dei 'Piedi Silenziosi'",
      body: "Un rumore forte all'impatto è segno di energia sprecata e alto carico d'impatto. Concentrati sul correre in modo silenzioso. Se riesci a sentire a malapena i tuoi passi, significa che stai atterrando in modo elastico, caricando correttamente i tendini e riducendo il rischio di fessure da stress.",
      variant: "tip"
    },
    {
      heading: "Fatica e Collasso della Tecnica",
      body: "Quando la fatica subentra, la tecnica è la prima a soffrire: le spalle si alzano, il bacino scende e la cadenza rallenta. In questi momenti, fai un 'form check' mentale ogni km: abbassa le spalle, raddrizza la schiena e aumenta leggermente la frequenza dei passi. Spesso, correggere la forma riduce istantaneamente la percezione dello sforzo (RPE).",
      variant: "warning"
    },
    { 
      heading: "Checklist: Migliora la Tua Tecnica", 
      body: "Esercizi pratici da inserire nelle tue sessioni di allenamento.", 
      variant: "checklist", 
      listItems: [
        "Drill A/B/C: Inserisci andature tecniche prima di ogni sessione veloce per resettare la memoria muscolare.", 
        "Video Analisi: Chiedi a un amico di filmarti di profilo mentre corri al tuo ritmo di gara.", 
        "Allunghi di Tecnica: A fine corsa, fai 4 scatti da 80m focalizzandoti solo sulla postura perfetta.", 
        "Cadenza: Usa un metronomo o la musica per stabilizzare il ritmo dei passi.",
        "Core Strength: Una schiena forte è la chiave per mantenere la forma corretta oltre le due ore di corsa."
      ] 
    }
  ],
  hubCategory: "shoes",
};
