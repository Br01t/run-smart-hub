import { GuideContent } from "@/types/guide";
import guideMarathon from "@/assets/guide-marathon.webp";

export const iniziareCorrere50Anni: GuideContent = {
  title: "Iniziare a Correre a 50 Anni: Programma Adatto all'Età",
  seoTitle: "Iniziare a Correre a 50 Anni: Guida Sicura 2026",
  seoDescription: "Come iniziare a correre a 50 anni in sicurezza: screening medico completo, programma progressivo di 12 settimane, prevenzione infortuni e recupero avanzato.",
  keywords: ["come iniziare a correre a 50 anni", "correre a 50 anni", "iniziare corsa 50 anni", "correre dopo i 50", "corsa e menopausa"],
  description: "Guida evidence-based per iniziare a correre a 50 anni: screening medico obbligatorio, programma di 12 settimane, rinforzo muscolare essenziale e prevenzione infortuni.",
  tags: ["beginner", "training", "prevention", "recovery"],
  heroImage: guideMarathon,
  readTime: "11 min di lettura",
  keyTakeaways: [
    "A 50 anni si può iniziare a correre con ottimi risultati: la ricerca mostra che gli 'atleti tardivi' guadagnano fino a 7 anni di aspettativa di vita.",
    "Screening cardiologico completo (ECG a riposo + da sforzo) è fortemente raccomandato.",
    "Progressione: 12 settimane vs 8-10 per un 40enne. La pazienza è la variabile chiave.",
    "Rinforzo muscolare (2-3 volte/settimana) è OBBLIGATORIO per contrastare sarcopenia.",
    "Alterna sempre corsa e cammino: rischio infortuni ridotto fino al 70% con il metodo run-walk.",
  ],
  relatedTools: [
    { to: "/tools/bmi", label: "Calcolatore BMI" },
    { to: "/tools/shoes", label: "Trova le Scarpe Giuste" },
  ],
  relatedGuides: [
    { slug: "iniziare-correre-40-anni", label: "Iniziare a Correre a 40 Anni" },
    { slug: "tabella-corsa-principianti", label: "Tabella Corsa Principianti da Zero a 5K" },
    { slug: "injury-prevention", label: "Prevenzione Infortuni per Runner" },
  ],
  sections: [
    {
      heading: "Iniziare a correre a 50 anni: cosa dice la scienza",
      body: "Contrariamente a quanto molti pensano, iniziare a correre a 50 anni è una delle scelte con il maggior impatto positivo sulla salute in età adulta. Studi longitudinali (Copenhagen City Heart Study, Cooper Institute) mostrano che chi inizia una regolare attività aerobica dopo i 50 anni guadagna in media 3-7 anni di aspettativa di vita, con miglioramenti importanti su:\n\n- densità ossea (contrasto all'osteopenia)\n- sensibilità insulinica (prevenzione diabete)\n- salute cerebrale (riduzione rischio demenza -30%)\n- umore e qualità del sonno\n- capacità cardiovascolare (VO2max migliorabile del 15-25% nei primi 6 mesi)\n\nIl punto critico: farlo in sicurezza, con progressione più lenta rispetto a un 40enne.",
      variant: "highlight",
    },
    {
      heading: "Screening medico: cosa fare PRIMA della prima corsa",
      body: "A 50 anni gli eventi cardiovascolari silenti sono statisticamente più probabili. Uno screening completo è la migliore forma di prevenzione.",
      variant: "warning",
      listItems: [
        "Visita medico-sportiva agonistica con ECG a riposo.",
        "ECG da sforzo (test ergometrico): OBBLIGATORIO per chiunque inizi corsa a 50+ anni.",
        "Ecocardiogramma se familiarità cardiaca o pressione elevata.",
        "Esami del sangue completi: glicemia, HbA1c, colesterolo, ferritina, vitamina D, TSH, PSA (uomini).",
        "MOC (densitometria ossea) per donne in menopausa: guida la scelta del carico iniziale.",
        "Valutazione podologica/posturale: molti 50enni hanno asimmetrie da compensare.",
      ],
    },
    {
      heading: "Adattamenti fisiologici specifici dopo i 50",
      body: "Il corpo a 50 anni funziona benissimo per correre, ma con differenze da tenere in conto.\n\n- **Sarcopenia**: da 1% a 1,5% di massa muscolare persa all'anno se non si fa rinforzo.\n- **Rigidità tendinea**: aumentata del 40-50% rispetto ai 20 anni. Richiede riscaldamento più lungo.\n- **Densità ossea**: in menopausa cala del 2-3% l'anno nei primi 5 anni. La corsa la protegge (osteogenic loading).\n- **Recupero**: 40-60% più lento. Servono 48h tra le sessioni.\n- **Termoregolazione**: meno efficiente. Attenzione a caldo e disidratazione.\n- **Frequenza cardiaca massima**: usa la formula 208 - (0,7 × età) invece della classica 220 - età.",
      variant: "default",
    },
    {
      heading: "Programma 12 settimane per over 50 principianti",
      body: "Progressione ultra-graduale che minimizza il rischio di infortuni.",
      variant: "default",
      listItems: [
        "Settimana 1: 3 sessioni x 20' (10x (30\" corsa + 90\" cammino)) + 2 camminate 30'.",
        "Settimana 2: 3 sessioni x 22' (7x (1' corsa + 2' cammino)).",
        "Settimana 3: 3 sessioni x 24' (6x (2' corsa + 2' cammino)).",
        "Settimana 4: SCARICO — riduzione volume 30%, focus stretching e rinforzo.",
        "Settimana 5: 3 sessioni x 25' (5x (3' corsa + 2' cammino)).",
        "Settimana 6: 3 sessioni x 27' (4x (5' corsa + 2' cammino)).",
        "Settimana 7: 3 sessioni x 28' (3x (7' corsa + 2' cammino)).",
        "Settimana 8: SCARICO — riduzione volume 30%, valutazione dello stato.",
        "Settimana 9: 3 sessioni x 30' (2x (12' corsa + 3' cammino)).",
        "Settimana 10: 3 sessioni x 30' (2x (15' corsa + 2' cammino)).",
        "Settimana 11: 3 sessioni: 20' corsa + 25' corsa + 20' corsa (continua).",
        "Settimana 12: 3 sessioni x 25-30' corsa continua. Obiettivo: 5 km entro 12 settimane.",
      ],
    },
    {
      heading: "Rinforzo muscolare: la variabile che fa la differenza",
      body: "A 50 anni il rinforzo NON è opzionale. Senza, la sarcopenia e la ridotta elasticità tendinea aumentano drasticamente il rischio di infortuni.\n\n**Programma minimo (2-3 volte/settimana, 25 min):**\n- Squat parziali con appoggio 3x12\n- Affondi (assistiti da parete se necessario) 3x8 per lato\n- Ponte glutei 3x15\n- Plank frontale 3x20\"\n- Clam shell 3x15 per lato\n- Elevazioni sui talloni (rinforzo polpaccio) 3x20\n\nDopo 4-6 settimane aggiungi carichi leggeri (2-4 kg) o resistenza elastica. Un fisioterapista può personalizzare il programma in base a eventuali asimmetrie.",
      variant: "tip",
    },
    {
      heading: "Menopausa e corsa: cosa cambia per le donne",
      body: "La menopausa introduce sfide specifiche gestibili con adattamenti mirati.\n\n- **Densità ossea**: la corsa è protettiva (impact loading stimola gli osteoblasti). Non evitarla, gestiscila.\n- **Termoregolazione**: le vampate durante la corsa sono comuni. Vestiti a strati, evita ore calde.\n- **Recupero più lento**: i cali di estrogeni riducono la sintesi proteica. Aumenta le proteine a 1,4-1,6 g/kg.\n- **Aumento del grasso addominale**: la corsa moderata (Zona 2) è più efficace della corsa veloce per la lipolisi centrale.\n- **Sonno disturbato**: cura l'igiene del sonno, evita corse serali intense.\n- **Salute pelvica**: se hai avuto figli, valuta rinforzo del pavimento pelvico prima di iniziare la corsa (rischio incontinenza da sforzo).",
      variant: "highlight",
    },
    {
      heading: "Recupero: il pilastro della longevità sportiva",
      body: "A 50 anni saltare i giorni di recupero non è 'più allenamento': è più danno. Le tue regole d'oro.",
      variant: "checklist",
      listItems: [
        "Mai correre 2 giorni consecutivi nei primi 4 mesi.",
        "Sonno: 8 ore obiettivo, mai sotto 7.",
        "Idratazione: 30-35 ml/kg di peso, aumentati nei giorni caldi o di allenamento.",
        "Proteine: 1,4-1,6 g/kg (donne 1,5-1,8 in menopausa).",
        "Massaggio o auto-massaggio con foam roller 2-3 volte a settimana.",
        "Un giorno di riposo TOTALE ogni settimana (nessuna attività strutturata).",
      ],
    },
  ],
  hubCategory: "shoes",
  datePublished: "2026-07-06",
  dateModified: "2026-07-06",
  faq: [
    {
      q: "È troppo tardi per iniziare a correre a 50 anni?",
      a: "Assolutamente no. Gli studi mostrano che iniziare a correre a 50 anni può aggiungere 3-7 anni di aspettativa di vita e ridurre del 30% il rischio di demenza. L'importante è farlo con progressione graduale e dopo controlli medici adeguati.",
    },
    {
      q: "Devo per forza fare l'ECG da sforzo prima di iniziare a 50 anni?",
      a: "Sì, è fortemente raccomandato. A 50 anni gli eventi cardiovascolari silenti sono statisticamente più probabili e l'ECG a riposo può non intercettarli. Un test ergometrico da 50 euro può letteralmente salvarti la vita.",
    },
    {
      q: "Quanti chilometri dovrei correre a settimana a 50 anni?",
      a: "Nei primi 6 mesi: 10-20 km/settimana totali, divisi in 3 sessioni. Dopo un anno di continuità puoi salire a 25-35 km/settimana per obiettivi come la 10 km, 35-50 km/settimana per la mezza maratona. Sopra i 60 km/settimana i benefici cardiovascolari non aumentano, mentre il rischio di infortuni sale in modo lineare.",
    },
    {
      q: "Cosa fare se ho ginocchia o articolazioni doloranti dopo la corsa?",
      a: "Ferma 3-5 giorni e valuta: se il dolore passa, riprendi con volume ridotto del 30% e aggiungi rinforzo muscolare. Se il dolore persiste oltre 7 giorni o è intenso, consulta un fisioterapista specializzato in sport. Non ignorare il dolore: a 50 anni un infortunio trascurato diventa cronico più facilmente.",
    },
  ],
};
