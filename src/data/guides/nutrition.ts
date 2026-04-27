import { GuideContent } from "@/types/guide";
import guideNutrition from "@/assets/guide-nutrition.webp";

export const runningNutrition: GuideContent = {
  title: "Nutrizione per la Corsa: Cosa Mangiare Prima, Durante e Dopo",
  seoTitle: "Guida Nutrizione Corsa 2026: Alimentazione per la Performance",
  seoDescription: "Padroneggia la scienza del rifornimento per la resistenza. Scopri i rapporti glucosio/fruttosio, i protocolli di carico dei carboidrati e come allenare l'intestino per processare 90g+ di carboidrati l'ora.",
  keywords: ["nutrizione corsa", "alimentazione maratona", "guida carico carboidrati", "rapporto glucosio fruttosio", "allenamento intestino runner", "pasto post corsa"],
  description: "Una guida completa per alimentare correttamente le tue corse. Impara cosa, quando e quanto mangiare per performance e salute ottimali.",
  tags: ["energia", "carboidrati", "integratori", "proteine"],
  heroImage: guideNutrition,
  readTime: "14 min di lettura",
  keyTakeaways: [
    "Punta a 60-90g di carboidrati l'ora per sforzi superiori ai 90 minuti",
    "Usa un rapporto Glucosio-Fruttosio di 1:0,8 per massimizzare l'assorbimento e ridurre i disturbi gastrici",
    "L'allenamento intestinale è un adattamento fisico: pratica il rifornimento durante le corse lunghe",
    "Il carico di carboidrati richiede 10g di carboidrati per kg di peso nelle 24-48 ore pre-gara",
  ],
  relatedTools: [
    { to: "/tools/calories", label: "Calcolatore Calorie" },
    { to: "/tools/protein", label: "Calcolatore Proteine" },
  ],
  relatedGuides: [
    { slug: "supplements-for-runners", label: "Integratori Essenziali per i Runner" },
    { slug: "marathon-training", label: "Guida alla Maratona per Principianti" },
  ],
  sections: [
    { 
      heading: "La Scienza: Cinetica del Glicogeno", 
      body: "Il tuo corpo immagazzina circa 2.000 calorie sotto forma di glicogeno nei muscoli e nel fegato. All'intensità di gara, questo dura circa 90-120 minuti. La performance di resistenza è essenzialmente una gara a chi gestisce meglio le riserve di carburante e le reintegra più velocemente durante il movimento.\n\n**Il Vantaggio del Doppio Trasportatore:** Combinando Glucosio (che usa i trasportatori SGLT1) e Fruttosio (che usa i trasportatori GLUT5), puoi superare il limite standard di assorbimento di 60g/ora, raggiungendo i 90g o addirittura i 120g l'ora senza crisi gastrointestinali.", 
      variant: "highlight" 
    },
    { 
      heading: "Pre-Gara: L'Arte del Carico di Carboidrati", 
      body: "Il carico di carboidrati non è solo una grande spaghettata la sera prima. Per saturare veramente le riserve di glicogeno, devi assumere **8-10g di carboidrati per kg di peso corporeo** nelle 36-48 ore precedenti l'evento. \n\n- **Gestione delle Fibre:** Riduci l'apporto di fibre durante la fase di carico per evitare sensazioni di pesantezza intestinale e soste impreviste in bagno durante la gara. \n- **Sincronizzazione Idratazione:** Ogni grammo di glicogeno immagazzinato richiede 3-4 grammi di acqua. Aspettati un leggero aumento di peso: è 'peso carburante' che userai sul percorso.", 
      variant: "default" 
    },
    { 
      heading: "Allenamento Intestinale: La Disciplina Dimenticata", 
      body: "Lo stomaco è un organo altamente adattabile. Se provi nausea o gonfiore durante il rifornimento, spesso è perché il tuo intestino non è abbastanza 'allenato' per processare il carico. \n\n- **Protocollo:** Inizia con 30g/ora e aumenta di 10g ogni due settimane durante le tue corse lunghe. \n- **Allenamento al Volume:** Pratica il bere volumi maggiori di liquidi in allenamento per aumentare la velocità di svuotamento gastrico, assicurando che i nutrienti raggiungano il flusso sanguigno più velocemente.", 
      variant: "default", 
      listItems: [
        "L'Osmolarità Conta: I gel hanno bisogno di acqua per essere assorbiti; gli 'Hydrogel' sono autosufficienti", 
        "Fatica del Sapore: Alterna tra carburanti dolci e salati durante gli sforzi superiori alle 4 ore", 
        "Strategia Caffeina: Riserva 3-6mg/kg di caffeina per gli ultimi 90 minuti di gara",
        "Equilibrio del Sale: Punta a 500-1000mg di sodio l'ora se sei un corridore che suda molto sale."
      ] 
    },
    {
      heading: "Il Quarto Carburante: FATmax e Flessibilità Metabolica",
      body: "Mentre i carboidrati sono fondamentali per la performance, la tua capacità di bruciare grassi ad alte intensità (FATmax) preserva il prezioso glicogeno. L'allenamento ad alto volume e bassa intensità in Zona 2 è il modo più efficace per spostare la tua curva metabolica, permettendoti di correre più veloce bruciando una percentuale maggiore di grassi.",
      variant: "tip"
    },
    {
      heading: "La 'Zona Rossa' dei Disturbi GI",
      body: "Evita cibi ricchi di grassi, fibre e proteine nelle 3-4 ore precedenti una corsa intensa. Questi rallentano lo svuotamento gastrico, portando a crampi e problemi intestinali. Se sei incline a problemi GI, passa a un rifornimento solo liquido nelle ultime ore pre-gara.",
      variant: "warning"
    },
    { 
      heading: "Timeline del Rifornimento: Checklist Operativa", 
      body: "Usa questa timeline per assicurarti di non finire mai l'energia durante una sessione chiave o una gara.", 
      variant: "checklist", 
      listItems: [
        "3h Prima: 100-150g di carboidrati a basso contenuto di fibre (avena, riso bianco, toast).", 
        "15m Prima: 20-30g di carboidrati a rapida azione (gel o bevanda sportiva).", 
        "Durante (Ogni 20m): 20-30g di carboidrati + 200ml di liquidi.", 
        "Post-Corsa (Immediato): Shake di recupero con rapporto carboidrati-proteine 3:1.",
        "Sera Dopo: Pasto ricco di sodio per reintegrare gli elettroliti persi col sudore."
      ] 
    },
  ],
  hubCategory: "supplements",
};
