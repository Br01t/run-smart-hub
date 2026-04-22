import { FinderStep, FinderResult } from "@/types/finder";

export const shoeFinderSteps: FinderStep[] = [
  {
    question: "What type of running do you do most?",
    options: [
      { label: "Road Running", value: "road", emoji: "🛣️" },
      { label: "Trail Running", value: "trail", emoji: "⛰️" },
      { label: "Track / Speed", value: "track", emoji: "🏟️" },
      { label: "Mixed Terrain", value: "mixed", emoji: "🌍" },
    ],
  },
  {
    question: "What's your weekly mileage?",
    options: [
      { label: "Under 20 km", value: "low", emoji: "🚶" },
      { label: "20–50 km", value: "medium", emoji: "🏃" },
      { label: "50–80 km", value: "high", emoji: "🏃‍♂️" },
      { label: "80+ km", value: "ultra", emoji: "🦸" },
    ],
  },
  {
    question: "How would you describe your foot arch?",
    options: [
      { label: "Flat / Low Arch", value: "flat", emoji: "🦶" },
      { label: "Normal / Medium", value: "normal", emoji: "👟" },
      { label: "High Arch", value: "high", emoji: "📐" },
      { label: "Not Sure", value: "unsure", emoji: "❓" },
    ],
  },
  {
    question: "What's your main priority in a shoe?",
    options: [
      { label: "Cushioning", value: "cushion", emoji: "☁️" },
      { label: "Speed / Lightweight", value: "speed", emoji: "⚡" },
      { label: "Stability / Support", value: "stability", emoji: "🛡️" },
      { label: "Durability", value: "durability", emoji: "🔩" },
    ],
  },
  {
    question: "What's your budget range?",
    options: [
      { label: "Under €80", value: "budget", emoji: "💰" },
      { label: "€80 – €130", value: "mid", emoji: "💳" },
      { label: "€130 – €180", value: "premium", emoji: "💎" },
      { label: "No limit", value: "unlimited", emoji: "🏆" },
    ],
  },
];

import { shoeSpecs } from "@/data/specs/shoes";

export interface ShoeRecommendation {
  model: string;
  brand: string;
  image: string;
  why: string;
  specs: {
    weight: string;
    drop: string;
    cushion: string;
  };
}

export interface ShoeCategoryResult {
  categoryName: string;
  description: string;
  science: string;
  practice: string;
  features: string[];
  recommendedShoes: ShoeRecommendation[];
}

export const getShoeRecommendations = (answers: Record<number, string>): ShoeCategoryResult => {
  const terrain = answers[0];
  const priority = answers[3];
  const budget = answers[4];

  if (terrain === "trail") {
    const trailShoes = shoeSpecs.filter(s => s.terrain === "Trail");
    return {
      categoryName: "Technical Trail Performer",
      description: "You need a shoe with aggressive lugs and a protective rock plate to handle varied terrain and debris.",
      science: "Trail running involves high eccentric loads and unstable surfaces. A dedicated trail shoe provides the necessary lateral stability and proprioceptive feedback to prevent ankle roll while protecting the metatarsals from sharp impacts.",
      practice: "Always clean your outsoles after muddy runs to maintain lug efficacy. If you run both road and trail, don't use trail shoes on pavement as the soft rubber compounds will wear down significantly faster.",
      features: ["Aggressive Lugs (>4mm)", "Rock Plate Protection", "Gore-Tex or Anti-debris Mesh"],
      recommendedShoes: trailShoes.slice(0, 2).map(s => ({
        model: s.name,
        brand: s.brand,
        image: s.image,
        why: s.bestFor,
        specs: {
          weight: s.weight,
          drop: s.drop,
          cushion: s.cushion
        }
      }))
    };
  }

  if (priority === "speed") {
    const speedShoes = shoeSpecs.filter(s => s.name.includes("Nitro") || s.name.includes("Speed"));
    return {
      categoryName: "Lightweight Tempo / Racing",
      description: "A responsive, lightweight shoe designed for speed intervals, tempo runs, and race day performance.",
      science: "Performance shoes use high-rebound foams (PEBA/TPEE) and often carbon or TPU plates to increase energy return. Research suggests these materials can reduce the energetic cost of running by 2-4% at higher velocities.",
      practice: "Reserve these for 1-2 sessions per week. Using them for every run can lead to 'lazy' lower leg mechanics and calf strain due to the extreme responsiveness and lower stack weight.",
      features: ["Super-critical Foam", "Lightweight Mesh", "Responsive Geometry"],
      recommendedShoes: speedShoes.slice(0, 2).map(s => ({
        model: s.name,
        brand: s.brand,
        image: s.image,
        why: s.bestFor,
        specs: {
          weight: s.weight,
          drop: s.drop,
          cushion: s.cushion
        }
      }))
    };
  }

  if (priority === "stability") {
    const stabilityShoes = shoeSpecs.filter(s => s.support === "Stable");
    return {
      categoryName: "Structured Support Trainer",
      description: "Designed for runners who need extra guidance and moderate to maximum stability for overpronation.",
      science: "Stability shoes use medial posts or 'guide rails' to decelerate the rate of internal tibial rotation. While it doesn't 'fix' form, it reduces the torque on the knee and ankle during high-mileage blocks.",
      practice: "Check your outsole wear pattern every 200km. If the stability features are compressed or worn unevenly, it can actually start misaligning your stride. Replace strictly every 600-800km.",
      features: ["Medial Support System", "Firm Midsole Core", "Heel Counter Stability"],
      recommendedShoes: stabilityShoes.slice(0, 2).map(s => ({
        model: s.name,
        brand: s.brand,
        image: s.image,
        why: s.bestFor,
        specs: {
          weight: s.weight,
          drop: s.drop,
          cushion: s.cushion
        }
      }))
    };
  }

  // Default to Neutral
  const neutralShoes = shoeSpecs.filter(s => s.support === "Neutral" && s.terrain === "Road");
  return {
    categoryName: "Neutral Daily Cushion",
    description: "The most versatile category, offering a balance of impact protection and weight for long-term health.",
    science: "Neutral shoes rely on shock attenuation through EVA or Nitrogen-infused foams. They allow the foot to move naturally through its gait cycle while absorbing 35-45% of the initial impact force during heel or midfoot strike.",
    practice: "This should be your 'workhorse' shoe. Focus on a fit that allows a thumb's width of space at the toes. Tight shoes lead to black toenails and restricted natural toe splay.",
    features: ["Balanced Cushioning", "Breathable Upper", "High-Abrasion Rubber"],
    recommendedShoes: neutralShoes.slice(0, 2).map(s => ({
      model: s.name,
      brand: s.brand,
      image: s.image,
      why: s.bestFor,
      specs: {
        weight: s.weight,
        drop: s.drop,
        cushion: s.cushion
      }
    }))
  };
};
