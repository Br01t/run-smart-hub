import { GuideContent } from "@/types/guide";
import guideTrail from "@/assets/guide-trail.webp";

export const trailRunning: GuideContent = {
  title: "Iniziare con il Trail Running",
  seoTitle: "Guida Trail Running 2026: Scienza della Tecnica e Attrezzatura",
  seoDescription: "Abbandona l'asfalto. Padroneggia la scienza del trail running, dal carico neurale propriocettivo all'efficienza del 'Power Hiking' e alla meccanica dei tasselli.",
  keywords: ["trail running per principianti", "guida scarpe trail running", "tecnica power hiking", "sicurezza trail running", "corsa in salita sentieri", "trail vs strada"],
  description: "Una guida per principianti al trail running: attrezzatura, tecnica, sicurezza e come trovare i sentieri giusti.",
  tags: ["shoes", "running", "accessories", "hydration", "top-gear-2026"],
  heroImage: guideTrail,
  readTime: "14 min di lettura",
  keyTakeaways: [
    "Il trail running richiede un'attivazione neurale 3 volte superiore per la richiesta propriocettiva",
    "Su pendenze superiori al 15%, il 'Power Hiking' è più efficiente dal punto di vista metabolico rispetto alla corsa",
    "La profondità dei tasselli e la mescola della gomma determinano la resistenza allo scivolamento su superfici morbide o bagnate",
    "Aspettati di essere dal 20% al 50% più lento sui sentieri: concentrati sul tempo passato a correre invece che sui chilometri",
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
      heading: "La Scienza: Proprioccezione Neurale", 
      body: "Il trail running è uno sport multidimensionale. A differenza della corsa su strada, che si concentra sull'efficienza nel piano sagittale (avanti-dietro), i sentieri richiedono una costante **stabilità nel piano frontale** e controllo laterale. \n\n**Il Carico Propriocettivo:** I sentieri tecnici costringono il cervello a elaborare simultaneamente l'appoggio del piede, l'equilibrio e l'evitamento degli ostacoli. Questo aumenta la tua 'Fatica Neurale' in modo significativamente più rapido rispetto alla corsa su strada, anche se la frequenza cardiaca rimane in una zona facile. Ecco perché i trail runner spesso si sentono 'mentalmente esausti' dopo una lunga sessione in montagna.", 
      variant: "highlight" 
    },
    { 
      heading: "Dislivello Verticale e Costo Energetico", 
      body: "La gravità è la variabile principale sui sentieri. Ogni 100 metri di dislivello positivo equivalgono approssimativamente a 1 chilometro di corsa in pianura in termini di dispendio energetico. \n\n- **Power Hiking:** I trail runner d'élite usano il 'power hiking' (camminata veloce e potente) sulle salite ripide per preservare il glicogeno. Inclinandosi in avanti e spingendo sulle cosce, mantengono una frequenza cardiaca costante, evitando il 'fuori giri' che si verifica cercando di correre su una pendenza del 20%. Padroneggia la transizione dalla corsa alla camminata per dominare le lunghe gare di trail.", 
      variant: "default" 
    },
    { 
      heading: "Meccanica della Trazione: Tasselli e Gomma", 
      body: "Le tue scarpe sono il tuo principale equipaggiamento di sicurezza. \n\n- **Profondità dei Tasselli:** Tasselli da 3-4 mm sono per sentieri compatti; tasselli da 5-8 mm sono per fango profondo e ghiaia smossa. \n- **Resistenza allo Scivolamento:** La mescola della gomma (es. Vibram Megagrip) è progettata per creare attrito sulla roccia bagnata. Una scarpa da strada manca sia della profondità dei tasselli che della mescola specializzata, rendendola pericolosa sulle discese tecniche. \n- **Protezione:** Le piastre anti-roccia in TPU proteggono i delicati metatarsi dai 'lividi' causati dalle pietre appuntite.", 
      variant: "default", 
      listItems: [
        "Tecnica in Discesa: usa passi brevi e veloci e 'ginocchia morbide' per assorbire l'impatto", 
        "Forza della Caviglia: gli esercizi di equilibrio su una gamba sola sono essenziali per prevenire distorsioni", 
        "Cambio di Idratazione: gli ambienti montani sono spesso più secchi; aumenta l'apporto di liquidi",
        "Calo con l'Altitudine: sopra i 2.000 m, il tuo VO2 max può calare del 10% a causa della minore pressione di ossigeno."
      ] 
    },
    {
      heading: "La Regola del 'Guarda Avanti'",
      body: "Non fissarti i piedi. Il tuo cervello ha bisogno di 'pre-elaborare' il sentiero 3-5 metri avanti. Quando i tuoi piedi raggiungono una roccia, il tuo sistema nervoso dovrebbe già avere un piano su come scavalcarla o girarci intorno.",
      variant: "tip"
    },
    {
      heading: "Sicurezza: La Regola del 10%",
      body: "Non affrontare mai un sentiero tecnico di montagna da solo senza un fischietto, una coperta termica e una mappa offline (come un file GPX sull'orologio). Il meteo in montagna può cambiare in pochi minuti e una banale distorsione alla caviglia può trasformarsi rapidamente in una situazione pericolosa se non sei preparato.",
      variant: "warning"
    },
    { 
      heading: "Checklist per il Passaggio al Trail", 
      body: "Passi tattici per le tue prime avventure fuori strada.", 
      variant: "checklist", 
      listItems: [
        "Ignora il Ritmo: il tuo passo di 5:00/km su strada potrebbe diventare 8:00/km su un sentiero tecnico.", 
        "Equipaggiati con il Grip: investi in scarpe specifiche da trail con una protezione sulla punta.", 
        "Impara a Camminare: pratica il passaggio dalla corsa alla camminata veloce sulle colline locali ripide.", 
        "Porta Acqua: i sentieri sono più lenti; starai fuori molto più a lungo di quanto pensi.",
        "Non Lasciare Tracce: porta sempre via gli involucri dei gel e rimani sui sentieri tracciati."
      ] 
    },
  ],
  hubCategory: "shoes",
};
