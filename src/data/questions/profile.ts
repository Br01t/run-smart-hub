import { QuizQuestion } from "@/types/quiz";

export const profileQuestions: QuizQuestion[] = [
  {
    id: "experience",
    label: "Qual è la tua esperienza nella corsa?",
    subtitle: "Questo ci aiuta a calibrare le raccomandazioni al tuo livello.",
    icon: "Footprints",
    options: [
      { value: "beginner", label: "Principiante", icon: "User", description: "Inizio da zero o corro da < 6 mesi" },
      { value: "intermediate", label: "Intermedio", icon: "Activity", description: "1-3 anni, corro regolarmente" },
      { value: "advanced", label: "Avanzato", icon: "Zap", description: "3+ anni, allenamento strutturato" },
      { value: "competitive", label: "Competitivo", icon: "Trophy", description: "Gareggio regolarmente, inseguo i PB" },
    ],
  },
  {
    id: "terrain",
    label: "Dove corri più spesso?",
    subtitle: "La scelta del terreno detta le esigenze di attrezzatura e allenamento.",
    icon: "Navigation",
    options: [
      { value: "road", label: "Strada e Asfalto", icon: "Navigation", description: "Cemento, asfalto, strade cittadine" },
      { value: "trail", label: "Sentieri e Natura", icon: "Footprints", description: "Sentieri sterrati, montagna, terreni tecnici" },
      { value: "mixed", label: "Superficie Mista", icon: "Layers", description: "Un mix di strada, parco e sentieri leggeri" },
      { value: "track", label: "Pista di Atletica", icon: "RotateCcw", description: "Focus su intervalli e velocità pura" },
    ],
  },
  {
    id: "distance",
    label: "Qual è la tua distanza principale?",
    subtitle: "Distanze diverse richiedono strategie metaboliche diverse.",
    icon: "Target",
    options: [
      { value: "5k-10k", label: "5K – 10K", icon: "Zap", description: "Distanze brevi focalizzate sulla velocità" },
      { value: "half-marathon", label: "Mezza Maratona", icon: "Activity", description: "Il punto d'incontro tra velocità e resistenza" },
      { value: "marathon", label: "Maratona", icon: "Target", description: "La classica sfida dei 42,2 km" },
      { value: "trail-ultra", label: "Trail / Ultra", icon: "Footprints", description: "Corsa fuori strada e ultra-distanze" },
    ],
  },
  {
    id: "frequency",
    label: "Frequenza di allenamento settimanale?",
    subtitle: "Il volume è il principale driver delle necessità di recupero.",
    icon: "Activity",
    options: [
      { value: "1-2", label: "1-2 volte", icon: "Heart", description: "Occasionale o appena iniziato" },
      { value: "3-4", label: "3-4 volte", icon: "Activity", description: "Runner amatoriale costante" },
      { value: "5-6", label: "5-6 volte", icon: "Zap", description: "Programma di allenamento dedicato" },
      { value: "7+", label: "Giornaliero+", icon: "Trophy", description: "Alto volume, a volte bi-giornalieri" },
    ],
  },
  {
    id: "biomechanics",
    label: "Come descriveresti il tuo appoggio?",
    subtitle: "Conoscere il tuo arco plantare e la pronazione ci aiuta a scegliere le scarpe giuste.",
    icon: "Activity",
    options: [
      { value: "neutral", label: "Neutro / Arco Alto", icon: "Footprints", description: "Allineamento naturale, rotazione minima del piede" },
      { value: "overpronation", label: "Iperpronazione / Piatto", icon: "ArrowDown", description: "Il piede ruota verso l'interno, arco basso" },
      { value: "unknown", label: "Non lo so", icon: "HelpCircle", description: "Non ho ancora fatto un'analisi dell'appoggio" },
    ],
  },
  {
    id: "goal",
    label: "Qual è il tuo obiettivo principale ora?",
    subtitle: "Adatteremo le raccomandazioni a ciò che conta di più per te.",
    icon: "Trophy",
    options: [
      { value: "speed", label: "Diventare più veloce", icon: "Zap", description: "Nuovi PB e miglioramento dei tempi in gara" },
      { value: "endurance", label: "Costruire resistenza", icon: "Target", description: "Correre distanze più lunghe con facilità" },
      { value: "weight-loss", label: "Perdere peso", icon: "Activity", description: "Usare la corsa per un sano dimagrimento" },
      { value: "injury-free", label: "Evitare infortuni", icon: "Shield", description: "Prevenire infortuni e correre con costanza" },
    ],
  },
  {
    id: "issue",
    label: "Qual è la tua sfida più grande?",
    subtitle: "Identificare i punti deboli ci aiuta a focalizzare il tuo piano.",
    icon: "Heart",
    options: [
      { value: "cramps-dehydration", label: "Crampi e Disidratazione", icon: "Droplets", description: "Crampi muscolari o sensazione di disidratazione" },
      { value: "fatigue-recovery", label: "Fatica e Recupero Lento", icon: "Dumbbell", description: "Sempre stanco, ci vogliono giorni per recuperare" },
      { value: "injuries", label: "Infortuni Ricorrenti", icon: "Shield", description: "Dolore alle ginocchia, periostite, problemi alla bandelletta" },
      { value: "nutrition", label: "Confusione Alimentare", icon: "Zap", description: "Non sono sicuro di cosa o quando mangiare" },
    ],
  },
];
