import { GuideContent } from "@/types/guide";
import guideInjury from "@/assets/guide-injury.webp";

export const injuryPrevention: GuideContent = {
  title: "Guida del Runner alla Prevenzione degli Infortuni",
  seoTitle: "Prevenzione Infortuni Corsa 2026: La Scienza del Carico",
  seoDescription: "Resta in strada con la prevenzione infortuni basata sulle evidenze. Scopri il modello ACWR, il carico isometrico dei tendini e come evitare la 'Zona Pericolo Overtraining'.",
  keywords: ["prevenzione infortuni corsa", "modello ACWR corsa", "esercizi isometrici tendini", "RED-S runner", "prevenire fratture da stress", "biomeccanica corsa"],
  description: "Come rimanere lontani dagli infortuni con un allenamento intelligente, potenziamento e tecniche di recupero adeguate.",
  tags: ["recupero", "massaggio", "muscoli", "scarpe", "top-recovery-2026"],
  heroImage: guideInjury,
  readTime: "5 min di lettura",
  keyTakeaways: [
    "Gestisci il tuo Acute:Chronic Workload Ratio (ACWR) tra 0,8 e 1,3",
    "L'allenamento della forza (2-3 volte/settimana) riduce gli infortuni da sovraccarico di quasi il 50%",
    "I tendini hanno bisogno di 48-72 ore di tempo a 'basso carico' per rimodellarsi dopo sforzi intensi",
    "La rilevazione precoce dei piccoli fastidi è la chiave per evitare lunghi stop",
  ],
  relatedTools: [
    { to: "/tools/bmi", label: "Calcolatore BMI" },
    { to: "/tools/protein", label: "Calcolatore Proteine" },
  ],
  relatedGuides: [
    { slug: "muscle-recovery", label: "Recupero Muscolare dopo la Corsa" },
    { slug: "choosing-running-shoes", label: "Come Scegliere le Scarpe da Corsa" },
  ],
  sections: [
    { 
      heading: "La Scienza: Equilibrio tra Carico e Capacità", 
      body: "La prevenzione degli infortuni è la scienza della gestione del 'Carico Meccanico' rispetto alla 'Capacità Biologica'. Ogni tessuto (osso, tendine, muscolo) ha una soglia di carico. Gli infortuni si verificano quando tale soglia viene superata a causa di improvvisi picchi di volume o scarso recupero.\n\n**Il Modello ACWR:** L'Acute:Chronic Workload Ratio è il predittore più robusto degli infortuni. Il tuo carico settimanale (Acuto) dovrebbe essere da 0,8 a 1,3 volte il tuo carico medio delle ultime quattro settimane (Cronico). Rapporti superiori a 1,5 indicano una 'Zona di Pericolo' in cui il rischio di infortunio aumenta in modo esponenziale.", 
      variant: "highlight" 
    },
    { 
      heading: "Salute dei Tendini: Carico Isometrico", 
      body: "I tendini non sono come i muscoli; hanno un basso flusso sanguigno e si rimodellano lentamente. Se hai un tendine d'Achille o rotuleo infiammato, il riposo completo è spesso la risposta sbagliata. \n\n- **Tenute Isometriche:** Mantenere una posizione di calf raise o wall sit per 45 secondi crea un effetto analgesico e stimola l'allineamento del collagene senza lo stress infiammatorio di salti/corsa ripetitivi. \n- **Focus Eccentrico:** Rallentare la fase di 'discesa' degli esercizi di forza costruisce l'integrità strutturale necessaria per gestire forze pari a 3-8 volte il peso corporeo durante la corsa.", 
      variant: "default" 
    },
    { 
      heading: "La Catena Cinetica e le Sinergie Muscolari", 
      body: "La maggior parte degli infortuni nella corsa sono 'riflessi'. Il dolore al ginocchio è spesso un problema di stabilità dell'anca/gluteo; la fascite plantare è spesso legata a polpacci contratti. \n\n- **Il Gluteo Medio:** Questo muscolo controlla la stabilità laterale del bacino. Se è debole, il ginocchio collassa verso l'interno (Valgo), portando alla sindrome della bandelletta ileotibiale o al ginocchio del corridore. \n- **Foot Core:** Il piede ha muscoli intrinseci che supportano l'arco. Gli esercizi 'short foot' e lo yoga per le dita dei piedi sono essenziali per i runner che usano scarpe moderne con molta ammortizzazione che potrebbero 'pigrire' la meccanica naturale del piede.", 
      variant: "default", 
      listItems: [
        "Forza Unilaterale: allenati sempre su una gamba sola per correggere gli squilibri", 
        "Correzione della Cadenza: aumentare la cadenza del 5-10% riduce il carico sul ginocchio di circa il 20%", 
        "Stress Osseo: assicura un apporto adeguato di Calcio e Vitamina D per supportare il rimodellamento",
        "Propriocezione: il lavoro di equilibrio su pedane instabili riduce significativamente il rischio di distorsioni alla caviglia."
      ] 
    },
    {
      heading: "RED-S: L'Avviso sulla Disponibilità Energetica",
      body: "La Carenza Energetica Relativa nello Sport (RED-S) si verifica quando l'apporto calorico non corrisponde al dispendio energetico dell'allenamento. Questo compromette la salute ormonale, portando a una bassa densità ossea e a frequenti fratture da stress. Se sei costantemente affaticato o soffri di ripetuti problemi ossei, consulta immediatamente un dietista sportivo.",
      variant: "warning"
    },
    {
      heading: "Fastidio vs Infortunio: La Regola delle 24 Ore",
      body: "Se un dolore è pari a 3/10 o superiore ed è ancora presente il mattino dopo una corsa, è un infortunio. Fermati immediatamente per 48-72 ore. Se scompare dopo 10 minuti di riscaldamento e rimane a 1/10, è probabilmente un fastidio che necessita di mobilità mirata.",
      variant: "tip"
    },
    { 
      heading: "Protocollo di Prevenzione: Checklist Azionabile", 
      body: "Integra queste abitudini nella tua routine settimanale per diventare 'a prova di proiettile'.", 
      variant: "checklist", 
      listItems: [
        "Monitoraggio ACWR: non aumentare mai il chilometraggio settimanale di oltre il 10-15%.", 
        "Forza: 2 sessioni da 30 minuti focalizzate su Glutei, Femorali e Polpacci.", 
        "Riscaldamento Dinamico: 5 minuti di slanci e andature prima di ogni corsa.", 
        "Mobilità Post-Corsa: focus su Flessori dell'Anca e TFL—i punti critici per molti runner.",
        "Igiene del Sonno: 8+ ore. La riparazione dei tessuti avviene durante il sonno profondo, non sul foam roller."
      ] 
    },
  ],
  hubCategory: "recovery",
};
