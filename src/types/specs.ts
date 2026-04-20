export interface SupplementSpec {
  name: string;
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
  category: "Watch" | "Hydration" | "Lighting" | "Socks" | "Belt";
  metric1: string; // Battery / Capacity / Lumens / Fit
  metric2: string; // Maps / Pockets / Charging / Material
  bestFor: string;
  usage: string;
  price?: string;
  link?: string;
  image?: string;
  emphasized?: boolean;
}

export interface ApparelSpec {
  name: string;
  brand: string;
  category: "Shirt" | "Shorts" | "Jacket";
  breathability: string; 
  fit: "Compression" | "Fitted" | "Loose";
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
  intensity: string; 
  techDetails: string; 
  useType: "Running" | "Rest" | "Race";
  bestFor: string;
  recommendedFor: string;
  price?: string;
  link?: string;
  image?: string;
  emphasized?: boolean;
}
