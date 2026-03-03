const categoryMap: Record<string, string> = {
  integratori: "Supplements",
  scarpe: "Shoes",
  accessori: "Accessories",
  recupero: "Recovery",
  idratazione: "Hydration",
  supplements: "Supplements",
  shoes: "Shoes",
  hydration: "Hydration",
  recovery: "Recovery",
};

const sportMap: Record<string, string> = {
  corsa: "Running",
  trail: "Trail Running",
  "trail-running": "Trail Running",
  marathon: "Marathon",
  "half-marathon": "Half Marathon",
  "10k": "10K",
  "5k": "5K",
  ciclismo: "Cycling",
  nuoto: "Swimming",
  triathlon: "Triathlon",
};

const goalMap: Record<string, string> = {
  performance: "Performance",
  recupero: "Recovery",
  idratazione: "Hydration",
  dimagrimento: "Weight Loss",
  "prevenzione-infortuni": "Injury Prevention",
  resistenza: "Endurance",
  forza: "Strength",
};

export const translateCategory = (key: string): string =>
  categoryMap[key] || key.charAt(0).toUpperCase() + key.slice(1);

export const translateSport = (key: string): string =>
  sportMap[key] || key.charAt(0).toUpperCase() + key.slice(1);

export const translateGoal = (key: string): string =>
  goalMap[key] || key.charAt(0).toUpperCase() + key.slice(1);
