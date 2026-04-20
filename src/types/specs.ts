export interface SupplementSpec {
  name: string;
  brand: string;
  absorption: "Fast" | "Medium" | "Slow";
  timing: "Pre-workout" | "During" | "Post-workout" | "Anytime";
  ingredients: string;
  effect: string;
  bestFor: string;
  recommendedFor: string;
  price?: string;
  link?: string;
  image?: string;
  emphasized?: boolean;
}

export interface ShoeSpec {
  name: string;
  brand: string;
  terrain: "Road" | "Trail";
  weight: string;
  drop: string;
  cushion: "Minimal" | "Balanced" | "Maximum";
  support: "Neutral" | "Stable";
  bestFor: string;
  price: string;
  link?: string;
  image?: string;
  emphasized?: boolean;
}

export interface GearSpec {
  name: string;
  brand: string;
  category: "Watch" | "Hydration" | "Lighting" | "Socks" | "Belt" | "Gear";
  metric1: string; // Battery / Capacity / Lumens / Fit
  metric2: string; // Maps / Pockets / Charging / Material
  bestFor: string;
  usage: string;
  price?: string;
  format?: string;
  sodium?: string;
  sugar?: string;
  timing?: string;
  effect?: string;
  link?: string;
  image?: string;
  emphasized?: boolean;
}

export interface ApparelSpec {
  name: string;
  brand: string;
  category: "Shirt" | "Shorts" | "Jacket" | "Leggings" | "Accessory";
  breathability: string; 
  fit: "Compression" | "Fitted" | "Loose" | "Regular" | "One Size";
  antiChafing: string; // e.g. "Flatlock", "Seamless"
  visibility: string; // e.g. "360 Reflex", "Standard"
  seasonal: string; // e.g. "Summer", "All Season", "Rain/Wind"
  details: string; 
  bestFor: string;
  usage: string;
  price?: string;
  link?: string;
  image?: string;
  emphasized?: boolean;
}

export interface RecoverySpec {
  name: string;
  brand: string;
  method?: "Deep Massage" | "Circulatory Support" | "Active Prevention" | "Thermal Therapy";
  benefit?: string;
  targetArea?: string; // e.g. "Muscles", "Circulation", "IT Band"
  strategy?: string; // e.g. "Release", "Activation", "Therapy"
  intensity: string; // High / Medium / Low / Temp-based
  techDetails: string;
  useType: "Rest" | "Race";
  bestFor: string;
  recommendedFor: string;
  price?: string;
  link?: string;
  image?: string;
  emphasized?: boolean;
}
