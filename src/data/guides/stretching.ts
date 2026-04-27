import { GuideContent } from "@/types/guide";
import guideStretching from "@/assets/guide-stretching.webp";

export const stretchingForRunners: GuideContent = {
  title: "La Guida allo Stretching per il Runner",
  seoTitle: "Stretching per Runner 2026: La Scienza della Mobilità",
  seoDescription: "Sblocca la tua falcata. Scopri perché lo stretching statico prima della corsa uccide la performance, la scienza della rigidità tendinea e le migliori routine di mobilità post-corsa.",
  keywords: ["stretching per runner", "stretching dinamico vs statico", "mobilità flessori anca", "flessibilità corsa", "prevenire infortuni corsa", "yoga per runner"],
  description: "Stretching dinamico vs statico: quando farlo, le migliori routine e come la flessibilità influisce sull'efficienza della corsa.",
  tags: ["recovery", "muscles", "running"],
  heroImage: guideStretching,
  readTime: "12 min di lettura",
  keyTakeaways: [
    "Lo stretching dinamico (potenziamento) è obbligatorio prima della corsa per preparare il sistema nervoso",
    "Lo stretching statico prima della corsa riduce la 'Rigidità Tendinea', diminuendo il ritorno elastico",
    "Lo stretching statico post-corsa attiva il Sistema Nervoso Parasimpatico per un recupero più rapido",
    "La mobilità mirata di caviglia e anca è la base di una falcata efficiente",
  ],
  relatedTools: [
    { to: "/tools/bmi", label: "Calcolatore BMI" },
    { to: "/tools/protein", label: "Calcolatore Proteine" },
  ],
  relatedGuides: [
    { slug: "muscle-recovery", label: "Recupero Muscolare dopo la Corsa" },
    { slug: "injury-prevention", label: "Guida alla Prevenzione Infortuni" },
  ],
  sections: [
    { 
      heading: "La Scienza: Il Ciclo Allungamento-Accorciamento", 
      body: "La corsa è una serie di salti esplosivi. I tuoi tendini agiscono come elastici, immagazzinando e rilasciando energia elastica tramite il Ciclo Allungamento-Accorciamento (SSC). \n\n**Il Paradosso della Rigidità Tendinea:** Per essere un runner efficiente, in realtà vuoi tendini *rigidi*. Un'elevata rigidità tendinea permette un trasferimento di energia più veloce e una migliore Economia di Corsa. Lo stretching statico (mantenere una posizione) prima di correre 'ammorbidisce' queste molle, riducendo misurabilmente la tua potenza e velocità. La mobilità pre-corsa deve essere **Dinamica** per aumentare il flusso sanguigno senza smorzare il ritorno elastico.", 
      variant: "highlight" 
    },
    { 
      heading: "Creep e Deformazione Plastica", 
      body: "Per aumentare effettivamente la lunghezza a riposo di un muscolo o della fascia, è necessario applicare uno stress a basso carico nel tempo. Questo fenomeno è noto come 'Creep'. \n\n- **La Regola dei 30-60 Secondi:** Lo stretching statico per meno di 20 secondi fornisce solo un rilassamento neurale temporaneo. Per ottenere una 'Deformazione Plastica' (cambiamento permanente nella lunghezza del tessuto), è necessario mantenere lo stretch per almeno 45-60 secondi in uno stato rilassato post-corsa. È in questo momento che le fibre di collagene nella fascia iniziano a riallinearsi.", 
      variant: "default" 
    },
    { 
      heading: "Neural Flossing e Inibizione Reciproca", 
      body: "Molti runner sentono i 'femorali contratti' che sembrano non allentarsi mai. Spesso non è un problema muscolare, ma di **Tensione Neurale**. \n\n- **Neural Flossing:** Tecniche che fanno 'scivolare' il nervo sciatico attraverso il tessuto molle possono risolvere una 'tensione' che lo stretching tradizionale non può toccare. \n- **Inibizione Reciproca:** Contraendo i glutei durante uno stretch dei flessori dell'anca, costringi il cervello a inviare un segnale di 'rilassamento' allo psoas, rendendo l'allungamento significativamente più efficace.", 
      variant: "default", 
      listItems: [
        "Dorsiflessione della Caviglia: essenziale per prevenire periostite e tendinite d'Achille", 
        "Mobilità Toracica: un torace aperto permette la massima espansione polmonare durante gli sforzi intensi", 
        "Idratazione Fasciale: il movimento e lo stretching aiutano a muovere i fluidi attraverso la matrice extracellulare",
        "Passaggio al Parasimpatico: lo stretching post-corsa segnala al corpo di smettere di produrre cortisolo."
      ] 
    },
    {
      heading: "Avviso Pre-Corsa: Niente Tenute Statiche",
      body: "Ricerche mostrano che lo stretching statico per più di 60 secondi per gruppo muscolare prima di un'attività esplosiva può ridurre la forza del 5-10%. Riserva le tenute lunghe per la sera o per il defaticamento post-corsa.",
      variant: "warning"
    },
    {
      heading: "Il Deep Squat di 2 Minuti",
      body: "Il miglior esercizio singolo per la mobilità del runner è il 'Deep Squat'. Passare 2 minuti al giorno in uno squat profondo e rilassato apre le anche, allunga la zona lombare e migliora simultaneamente la dorsiflessione della caviglia.",
      variant: "tip"
    },
    { 
      heading: "Checklist Mobilità Quotidiana", 
      body: "Una routine strutturata per mantenere la tua catena cinetica libera di muoversi.", 
      variant: "checklist", 
      listItems: [
        "Dinamico (Pre-Corsa): 10 slanci gambe (Avanti/Lat), 10 affondi camminati, 20 rimbalzi sui polpacci.", 
        "Statico (Post-Corsa): 60s Couch Stretch (Anche), 60s Pigeon Pose (Glutei), 60s stretch polpacci.", 
        "Neurale (Sera): 10 'scivolamenti' del nervo sciatico per gamba per mantenere la mobilità nervosa.", 
        "Respirazione: espira sempre *durante* l'allungamento per abbassare la sensibilità dei fusi muscolari.",
        "Costanza: 5 minuti ogni giorno sono 100 volte meglio di 60 minuti una volta al mese."
      ] 
    },
  ],
  hubCategory: "recovery",
};
