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
  readTime: "7 min di lettura",
  keyTakeaways: [
    "Il trail richiede un'attivazione neurale superiore del 300% per la stabilità propriocettiva",
    "Sopra pendenze del 15%, il 'Power Hiking' è più efficiente della corsa",
    "La scelta della mescola della gomma e del disegno dei tasselli è fondamentale per la sicurezza",
    "Dimentica il ritmo al km: sui sentieri si corre a 'sforzo' e a tempo",
    "La discesa tecnica richiede un lavoro eccentrico massiccio sui quadricipiti",
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
      heading: "La Scienza: Proprioccezione Neurale e Stabilità", 
      body: "Il trail running è uno sport multidimensionale. A differenza della corsa su strada, che si concentra sull'efficienza nel piano sagittale (avanti-dietro), i sentieri richiedono una costante **stabilità nel piano frontale** e un controllo laterale millimetrico. \n\n**Il Carico Propriocettivo:** Ogni passo su un sentiero tecnico è diverso. Il cervello deve elaborare simultaneamente l'appoggio del piede su superfici irregolari, l'equilibrio dinamico e l'evitamento degli ostacoli. Questo aumenta la 'Fatica Neurale' in modo significativamente più rapido rispetto alla corsa su strada. Studi EMG mostrano che i muscoli stabilizzatori della caviglia e del bacino (come il gluteo medio) lavorano fino a tre volte più duramente per prevenire distorsioni e cadute.", 
      variant: "highlight" 
    },
    { 
      heading: "Vertical Gain: Il Costo Energetico della Salita", 
      body: "La gravità è la variabile principale. Ogni 100 metri di dislivello positivo aggiungono un carico metabolico equivalente a circa 1 chilometro di corsa in pianura. \n\n**Efficienza nel Power Hiking:** Molti principianti cercano di correre in salita fino all'esaurimento. Tuttavia, su pendenze superiori al 15-20%, la camminata potente ('Power Hiking') è biomeccanicamente più efficiente. Inclinando il busto in avanti, premendo le mani sulle cosce o usando i bastoncini, si riduce il lavoro richiesto ai polpacci, spostando il carico sui grandi gruppi muscolari delle cosce e dei glutei, preservando così le scorte di glicogeno per le parti più scorrevoli.", 
      variant: "default" 
    },
    { 
      heading: "Biomeccanica della Discesa: Il Carico Eccentrico", 
      body: "La discesa è dove si vincono le gare ma si perdono le gambe. Mentre in salita il lavoro è concentrico, in discesa i quadricipiti lavorano in modo **eccentrico** (il muscolo si allunga mentre è sotto tensione) per frenare l'impatto della gravità. \n\n**Tecnica corretta:** Mantieni i passi brevi e veloci ('cadenza alta'). Evita di 'piantare' il tallone con la gamba tesa, poiché questo invia una forza d'urto enorme direttamente al ginocchio. Invece, cerca di 'galleggiare' sul sentiero, atterrando di mesopiede e mantenendo le ginocchia leggermente flesse per agire come ammortizzatori naturali.", 
      variant: "default" 
    },
    { 
      heading: "Trazione e Materiali: Tasselli e Mescole", 
      body: "Le tue scarpe sono l'unico punto di contatto con il terreno. \n\n- **Profondità dei Tasselli (Lugs):** Tasselli da 3-4 mm sono ideali per sentieri asciutti e compatti. Se corri nel fango o sulla ghiaia smossa, hai bisogno di 5-7 mm per evitare l'effetto 'slittamento'. \n- **Mescola della Gomma:** Una gomma morbida e 'appiccicosa' (sticky rubber) è vitale per la trazione su roccia bagnata e radici. \n- **Rock Plate:** Molte scarpe da trail includono una piastra rigida tra l'intersuola e la suola per proteggere i piedi dai sassi appuntiti, prevenendo i fastidiosi 'lividi plantari'.", 
      variant: "default", 
      listItems: [
        "Spostamento della Glicemia: Lo stress del trail può alterare la digestione; prediligi calorie liquide o semi-liquide.", 
        "Pressione di Ossigeno: Se sali sopra i 2000m, aspettati un calo della performance del 10% dovuto all'altitudine.", 
        "Equilibrio: Il lavoro con la tavoletta propriocettiva a casa è il miglior allenamento specifico per le caviglie del trail runner.",
        "Equipaggiamento obbligatorio: In montagna, porta sempre una giacca a vento e una fonte d'acqua aggiuntiva."
      ] 
    },
    {
      heading: "La Strategia Visiva: Guardare Avanti",
      body: "Il segreto dei trail runner veloci è dove guardano. Non fissare i tuoi piedi; guarda 3-5 metri avanti a te. Il tuo cervello ha una capacità incredibile di 'fotografare' il sentiero e pianificare i prossimi tre passi in modo inconscio. Se guardi i piedi, il tuo tempo di reazione sarà troppo lento per correggere un eventuale sasso instabile o una radice nascosta.",
      variant: "tip"
    },
    {
      heading: "Sicurezza e Self-Sufficiency",
      body: "In montagna, sei tu il tuo primo soccorritore. La temperatura cala di circa 0.6°C ogni 100m di salita. Una pioggia leggera in città può essere neve o nebbia fitta in quota. Porta sempre con te un cellulare con mappe offline (il GPS dell'orologio è ottimo), un fischietto e una coperta termica leggera. Informa sempre qualcuno sul tuo percorso e l'orario di rientro previsto.",
      variant: "warning"
    },
    { 
      heading: "Checklist: Il tuo Primo Trail", 
      body: "Preparati per l'avventura fuori strada.", 
      variant: "checklist", 
      listItems: [
        "Dimentica il GPS: Concentrati sullo sforzo percepito (RPE) invece che sul passo medio.", 
        "Vestiti a Strati: Il meteo in natura è imprevedibile; il sistema 'a cipolla' è vincente.", 
        "Idratazione Costante: Anche se fa freddo, la respirazione in quota disidrata velocemente.", 
        "Andature in Salita: Pratica la camminata veloce alternata a brevi tratti di corsa.",
        "Rispetto della Natura: 'Leave No Trace'—porta a casa ogni rifiuto e rimani sui sentieri tracciati."
      ] 
    }
  ],
  hubCategory: "shoes",
};
