const categoryMap: Record<string, string> = {
  integratori: "Integratori",
  scarpe: "Scarpe",
  accessori: "Accessori",
  recupero: "Recupero",
  idratazione: "Idratazione",
  supplements: "Integratori",
  shoes: "Scarpe",
  hydration: "Idratazione",
  recovery: "Recupero",
  abbigliamento: "Abbigliamento",
  apparel: "Abbigliamento",
  gear: "Attrezzatura",
  nutrition: "Nutrizione",
};

const sportMap: Record<string, string> = {
  corsa: "Corsa",
  trail: "Trail Running",
  "trail-running": "Trail Running",
  marathon: "Maratona",
  "half-marathon": "Mezza Maratona",
  "10k": "10K",
  "5k": "5K",
  ciclismo: "Ciclismo",
  nuoto: "Nuoto",
  triathlon: "Triathlon",
  road: "Corsa",
};

const goalMap: Record<string, string> = {
  performance: "Performance",
  recupero: "Recupero",
  idratazione: "Idratazione",
  "weight-loss": "Perdita Peso",
  "injury-prevention": "Prevenzione Infortuni",
  endurance: "Resistenza",
  forza: "Forza",
  muscle: "Massa Muscolare",
};

const quizMap: Record<string, string> = {
  experience: "Esperienza",
  terrain: "Terreno",
  distance: "Distanza",
  frequency: "Frequenza",
  biomechanics: "Appoggio",
  goal: "Obiettivo",
  issue: "Sfida",
};

export const translateCategory = (key: string): string =>
  categoryMap[key] || key.charAt(0).toUpperCase() + key.slice(1);

export const translateSport = (key: string): string =>
  sportMap[key] || key.charAt(0).toUpperCase() + key.slice(1);

export const translateGoal = (key: string): string =>
  goalMap[key] || key.charAt(0).toUpperCase() + key.slice(1);

export const translateQuizLabel = (key: string): string =>
  quizMap[key] || key.charAt(0).toUpperCase() + key.slice(1);
