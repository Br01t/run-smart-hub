import { GuideContent } from "@/types/guide";
import guideMarathon from "@/assets/guide-marathon.webp";

export const programmaCorsaPrincipianti: GuideContent = {
  title: "Programma di Corsa per Principianti: 12 Settimane per Correre 10 Km",
  seoTitle: "Programma Corsa Principianti: 12 Settimane per 10 Km",
  seoDescription: "Programma di corsa per principianti: 12 settimane strutturate per passare dalla camminata alla corsa continua di 10 km. Tabelle e progressione.",
  keywords: [
    "programma corsa principianti",
    "programma corsa 12 settimane",
    "programma per iniziare a correre",
    "piano allenamento corsa principianti",
    "come arrivare a correre 10 km",
  ],
  description:
    "Un programma di corsa in 12 settimane pensato per veri principianti. Progressione sicura da camminata a 10 km continui, con giorni di riposo, forza e recupero.",
  tags: ["beginner", "training", "10k", "programma"],
  heroImage: guideMarathon,
  readTime: "11 min di lettura",
  hubCategory: "shoes",
  datePublished: "2026-07-04",
  dateModified: "2026-07-07",
  keyTakeaways: [
    "In 12 settimane un principiante sano può passare da zero a correre 10 km continui.",
    "Alterna corsa e camminata: la progressione avviene aumentando i tempi di corsa e riducendo quelli di camminata.",
    "Servono almeno 3 sedute a settimana, non più di 4 nelle prime 8 settimane per evitare infortuni.",
    "Le prime 4 settimane sono le più delicate: tendini e legamenti si adattano più lentamente dei muscoli.",
    "Non correre mai due giorni consecutivi nelle prime 6 settimane: il rischio infortuni è massimo.",
  ],
  relatedTools: [
    { to: "/tools/bmi", label: "Calcolatore BMI" },
    { to: "/tools/calories", label: "Calcolatore Calorie" },
  ],
  relatedGuides: [
    { slug: "tabella-corsa-principianti", label: "Tabella Corsa Principianti (8 settimane 5K)" },
    { slug: "iniziare-correre-40-anni", label: "Iniziare a Correre a 40 Anni" },
    { slug: "correre-per-dimagrire", label: "Correre per Dimagrire" },
    { slug: "choosing-running-shoes", label: "Come Scegliere le Scarpe da Corsa" },
  ],
  sections: [
    {
      heading: "Come funziona un programma da 12 settimane",
      body: "L'obiettivo di questo programma è portarti a correre 10 km continui in 12 settimane, partendo davvero da zero. Il metodo è la progressione **corsa/camminata**: si alternano brevi intervalli di corsa e camminata, aumentando gradualmente i minuti di corsa e riducendo quelli di camminata.\n\nQuesto approccio è validato dagli studi (Buman 2015, BJSM): riduce del 40-60% il rischio di infortuni rispetto al tentativo di correre subito 20-30 minuti continui.",
      variant: "highlight",
    },
    {
      heading: "Prima di iniziare: check-list obbligatoria",
      body: "Prima della prima uscita:",
      variant: "checklist",
      listItems: [
        "Se hai >40 anni, sei sovrappeso (BMI >27) o hai patologie cardiache, consulta il medico.",
        "Compra scarpe da running vere in un negozio specializzato (non quelle da palestra).",
        "Scegli un percorso pianeggiante, sicuro e possibilmente su asfalto o sterrato morbido.",
        "Cronometro sul telefono o smartwatch base per gestire i tempi corsa/camminata.",
        "Bottiglietta d'acqua se corri in estate o per oltre 30 minuti.",
      ],
    },
    {
      heading: "Settimane 1-4: adattamento (da 0 a 20 minuti totali)",
      body: "L'obiettivo è abituare tendini, legamenti e sistema cardiovascolare al gesto della corsa. Ogni seduta inizia con 5 minuti di camminata e finisce con 5 minuti di defaticamento. 3 uscite a settimana, mai due giorni consecutivi.",
      variant: "default",
      listItems: [
        "Settimana 1: 8 x (1' corsa + 2' camminata) — Tot: 24' + riscaldamento e defaticamento.",
        "Settimana 2: 8 x (1'30\" corsa + 1'30\" camminata) — Tot: 24'.",
        "Settimana 3: 6 x (2' corsa + 2' camminata) — Tot: 24'.",
        "Settimana 4: 5 x (3' corsa + 2' camminata) — Tot: 25'.",
      ],
    },
    {
      heading: "Settimane 5-8: consolidamento (fino a 30 minuti continui)",
      body: "Qui il corpo comincia ad adattarsi: la respirazione migliora, il ritmo cardiaco a parità di sforzo scende, la sensazione di fatica si attenua. Passiamo a 3-4 uscite a settimana.",
      variant: "default",
      listItems: [
        "Settimana 5: 4 x (5' corsa + 2' camminata) — Tot: 28'.",
        "Settimana 6: 3 x (8' corsa + 2' camminata) — Tot: 30'.",
        "Settimana 7: 2 x (12' corsa + 2' camminata) + 1 x (10' corsa) — Tot: 38'.",
        "Settimana 8: 20' corsa continua + 2' camminata + 10' corsa — Tot: 32'.",
      ],
    },
    {
      heading: "Settimane 9-12: obiettivo 10 km",
      body: "Nelle ultime 4 settimane si arriva alla corsa continua e si costruisce la distanza. 3-4 uscite a settimana, con una seduta più lunga nel weekend e due sedute brevi infrasettimanali.",
      variant: "default",
      listItems: [
        "Settimana 9: 30' corsa continua (2 volte) + 40' corsa continua (weekend).",
        "Settimana 10: 35' corsa continua (2 volte) + 50' corsa continua (weekend).",
        "Settimana 11: 40' corsa continua (2 volte) + 60' corsa continua (weekend, circa 7-8 km).",
        "Settimana 12: 30' facile + 40' facile + 10 km CONTINUI (obiettivo raggiunto).",
      ],
    },
    {
      heading: "Ritmo: come capire se stai correndo troppo forte",
      body: "Il ritmo giusto per un principiante è quello a cui riesci a **parlare a frasi intere** senza affanno (Talk Test). Se puoi solo dire una parola alla volta, stai correndo troppo forte: rallenta o passa alla camminata.\n\nLa velocità NON è importante nelle prime 12 settimane. Correre 8 min/km è perfettamente normale all'inizio. La velocità arriverà da sola con l'aumento della forma fisica.",
      variant: "tip",
    },
    {
      heading: "Alimentazione base per principianti",
      body: "Non serve niente di sofisticato:\n- **Prima**: se corri al mattino digiuno, va bene sotto i 45 minuti. Sopra, mangia una banana o 30 g di pane con marmellata 30-60' prima.\n- **Dopo**: entro 60 minuti fai un pasto normale con carboidrati e proteine (pasta al pomodoro con tonno, riso e pollo, yogurt greco con cereali).\n- **Idratazione**: 500 ml di acqua nelle 2 ore precedenti, altri 500-700 ml nelle 2 ore successive.\n\nNessun integratore serve nelle prime 12 settimane. La dieta italiana bilanciata è più che sufficiente.",
      variant: "default",
    },
    {
      heading: "Errori tipici da evitare",
      body: "Il 50% dei principianti si infortuna nei primi 6 mesi. Le cause principali:",
      variant: "warning",
      listItems: [
        "Aumentare volume o intensità troppo in fretta (violare la regola del 10%).",
        "Correre due giorni consecutivi nelle prime 6 settimane.",
        "Usare scarpe sbagliate (da tennis, palestra, running vecchie).",
        "Ignorare piccoli dolori sperando che passino da soli.",
        "Saltare il riscaldamento e il defaticamento.",
        "Non fare nemmeno un giorno di forza a settimana (2 sessioni di 20' bastano per prevenire il 30% degli infortuni).",
      ],
    },
    {
      heading: "E dopo le 12 settimane?",
      body: "Congratulazioni, corri 10 km continui. Ora hai diverse strade:\n- **Consolidare**: fai altri 2 mesi a questo volume per costruire una base solida.\n- **Migliorare il tempo sui 10 km**: introduci 1 seduta a settimana di intervalli.\n- **Puntare alla mezza maratona**: segui un piano da 10-12 settimane con progressione fino a 18-20 km.\n- **Correre per dimagrire**: mantieni 3-4 sedute/settimana + camminate nei giorni off.\n\nQuello che è importante ora è la **costanza**: correre 3 volte a settimana per un anno vale più di correre 6 volte a settimana per 2 mesi.",
      variant: "highlight",
    },
  ],
  faq: [
    {
      q: "In quanto tempo un principiante può correre 10 km?",
      a: "Con un programma progressivo e allenandosi 3 volte a settimana, un principiante sano può correre 10 km continui in 10-14 settimane. I tempi si allungano se hai sovrappeso significativo o riprendi dopo anni di sedentarietà.",
    },
    {
      q: "Quanti giorni a settimana deve correre un principiante?",
      a: "3 giorni a settimana sono l'ideale per le prime 8-10 settimane. Correre di più aumenta molto il rischio infortuni. Nei giorni off puoi camminare, andare in bici o fare esercizi di forza.",
    },
    {
      q: "È normale che le gambe facciano male dopo le prime corse?",
      a: "Sì, il DOMS (dolore muscolare tardivo) è normale nelle prime 2-3 settimane. Dovrebbe scomparire in 48-72 ore. Se dura di più o è localizzato in un punto preciso, fermati e valuta con un professionista.",
    },
    {
      q: "Posso saltare una settimana del programma se sto meglio?",
      a: "Meglio di no. Il programma è progettato per far adattare tendini e legamenti, che rispondono più lentamente dei muscoli. Saltare tappe aumenta molto il rischio di fasciti, tendiniti e periostiti tibiali.",
    },
    {
      q: "Devo comprare scarpe costose per iniziare?",
      a: "No. Una scarpa da running con buona ammortizzazione tra 80€ e 120€ è più che sufficiente. L'importante è che sia specifica per corsa, adatta al tuo peso e alla tua biomeccanica. Vai in un negozio specializzato per una valutazione base.",
    },
  ],
};
