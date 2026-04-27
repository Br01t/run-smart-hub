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
  readTime: "4 min di lettura",
  keyTakeaways: [
    "Corri 'alto' con una leggera inclinazione dalle caviglie, non dalle anche",
    "Atterra con il piede direttamente sotto il tuo centro di massa per eliminare le forze frenanti",
    "Il movimento delle braccia deve essere compatto e sagittale (avanti-dietro), evitando dispersioni rotazionali",
    "Un bacino stabile e neutro è la base per una falcata potente",
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
      heading: "La Scienza: Allineamento della Catena Cinetica", 
      body: "La tecnica di corsa è l'ottimizzazione della 'Catena Cinetica'. Ogni inefficienza—come l'overstriding o l'incrocio della linea mediana—crea 'forze frenanti' che il corpo deve superare. \n\n**Dispersione di Energia:** L'oscillazione laterale delle anche o delle spalle rappresenta energia che dovrebbe muoverti in avanti ma viene persa lateralmente. Un core rigido e stabile e un bacino neutro permettono ai tuoi arti di produrre potenza da una piattaforma solida, migliorando significativamente la tua Economia di Corsa (il costo di ossigeno a un dato ritmo).", 
      variant: "highlight" 
    },
    { 
      heading: "Pilastri Posturali: L'Inclinazione dalla Caviglia", 
      body: "Correre in modo efficace è essenzialmente una 'caduta controllata'. Invece di inclinarti dalla vita (cosa che mette stress sulla zona lombare e limita l'estensione dell'anca), dovresti inclinarti dalle **caviglie**. \n\n- **L'Assist della Gravità:** Questa leggera inclinazione in avanti usa la gravità per tirare il tuo centro di massa in avanti, riducendo il lavoro muscolare necessario per iniziare ogni passo. \n- **Il Segnale 'Corri Alto':** Immagina un filo che tira la cima della tua testa verso il cielo. Questo allunga la colonna vertebrale e apre la cavità toracica per una migliore capacità respiratoria.", 
      variant: "default" 
    },
    { 
      heading: "Movimento delle Braccia e Coppia Rotazionale", 
      body: "Le tue braccia non sono solo passeggeri; sono essenziali per bilanciare la coppia rotazionale delle gambe. \n\n- **Piano Sagittale:** Le braccia dovrebbero muoversi principalmente avanti e indietro. Se le mani incrociano la linea mediana del petto, la parte superiore del corpo ruota eccessivamente, costringendo core e anche a lavorare di più per tenerti dritto. \n- **La Regola dei 90 Gradi:** Tieni i gomiti piegati a 90 gradi o leggermente meno. Un braccio lungo che oscilla è una 'leva' più lunga, che richiede più energia per muoversi avanti e indietro.", 
      variant: "default", 
      listItems: [
        "Rilassamento delle Spalle: spalle alte e tese limitano l'espansione polmonare e sprecano glicogeno", 
        "Appoggio del Piede: non 'cercare' il terreno con il piede; lascialo atterrare naturalmente sotto le anche", 
        "Inclinazione Pelvica: evita l'antiversione (sedere all'infuori) poiché inibisce il coinvolgimento dei glutei",
        "Spinta delle Ginocchia: una spinta moderata delle ginocchia crea lo spazio necessario per una falcata efficiente."
      ] 
    },
    {
      heading: "La Regola dei 'Piedi Silenziosi'",
      body: "Un forte 'schiaffo' sull'asfalto è segno di energia sprecata e alto carico d'impatto. Concentrati sui 'piedi silenziosi'. Se riesci a sentire i tuoi passi sopra il respiro, probabilmente stai atterrando troppo pesantemente o facendo overstriding. I piedi silenziosi favoriscono naturalmente l'appoggio di mesopiede e un migliore assorbimento degli urti.",
      variant: "tip"
    },
    {
      heading: "Evita la Posizione 'Seduta'",
      body: "Quando i runner si stancano, spesso 'affondano' nelle anche, apparendo come se fossero seduti su una sedia mentre corrono. Questo disattiva i glutei e mette una pressione enorme sulla zona lombare e sulle ginocchia. Ogni 10 minuti, fai un 'reset della forma': raddrizza la colonna, attiva il core e aumenta la cadenza.",
      variant: "warning"
    },
    { 
      heading: "Checklist per la Correzione della Tecnica", 
      body: "Esercita questi accorgimenti durante le tue corse facili per costruire la memoria muscolare per il giorno della gara.", 
      variant: "checklist", 
      listItems: [
        "Posizione della Testa: guarda 20-30 metri avanti, non ai tuoi piedi, per mantenere il collo neutro.", 
        "Impugnatura delle Mani: immagina di tenere un uovo delicato in ogni mano—mani rilassate significano spalle rilassate.", 
        "Il Drill di 'Tiro': concentrati sul tirare il tallone verso il gluteo piuttosto che spingere via dal terreno.", 
        "Respirazione Addominale: assicurati che la pancia si espanda durante l'inspirazione per massimizzare l'apporto di ossigeno.",
        "Allunghi Post-Corsa: esegui 4 allunghi da 100 m concentrandoti sulla tecnica per fissare le buone abitudini anche da stanchi."
      ] 
    },
  ],
  hubCategory: "shoes",
};
