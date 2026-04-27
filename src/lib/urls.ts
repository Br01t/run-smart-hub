/**
 * URL and Slug utilities for SEO-friendly routing
 */

const categoryToSlug: Record<string, string> = {
  supplements: "integratori",
  shoes: "scarpe",
  hydration: "idratazione",
  recovery: "recupero",
  apparel: "abbigliamento",
  gear: "accessori",
};

const sportToSlug: Record<string, string> = {
  running: "corsa",
  trail: "trail",
  marathon: "maratona",
  "half-marathon": "mezza-maratona",
  "10k": "10k",
  "5k": "5k",
};

const objectiveToSlug: Record<string, string> = {
  performance: "performance",
  recovery: "recupero",
  hydration: "idratazione",
  "weight-loss": "dimagrimento",
  "injury-prevention": "prevenzione-infortuni",
  endurance: "resistenza",
};

/**
 * Generates an Italian SEO slug for a comparison
 */
export const getComparisonSlug = (category: string, sport: string, objective: string): string => {
  const c = categoryToSlug[category] || category;
  const s = sportToSlug[sport] || sport;
  const o = objectiveToSlug[objective] || objective;
  return `${c}-per-${s}-${o}`;
};

/**
 * Reverses a slug back to its components (for routing)
 */
export const parseComparisonSlug = (slug: string) => {
  const parts = slug.split("-per-");
  if (parts.length !== 2) return null;
  
  const categorySlug = parts[0];
  const rest = parts[1].split("-");
  const sportSlug = rest[0];
  const objectiveSlug = rest.slice(1).join("-");

  // Reverse mapping
  const category = Object.keys(categoryToSlug).find(key => categoryToSlug[key] === categorySlug) || categorySlug;
  const sport = Object.keys(sportToSlug).find(key => sportToSlug[key] === sportSlug) || sportSlug;
  const objective = Object.keys(objectiveToSlug).find(key => objectiveToSlug[key] === objectiveSlug) || objectiveSlug;

  return { category, sport, objective };
};
