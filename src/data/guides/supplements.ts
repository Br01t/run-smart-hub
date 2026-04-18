import { GuideContent } from "@/types/guide";
import guideSupplements from "@/assets/guide-supplements.webp";

export const supplementsForRunners: GuideContent = {
  title: "Essential Supplements for Runners",
  description: "Which supplements actually work for running? An evidence-based guide.",
  tags: ["supplements", "electrolytes", "protein", "top-supplements-2026"],
  heroImage: guideSupplements,
  readTime: "10 min read",
  keyTakeaways: [
    "A balanced diet covers most needs for recreational runners",
    "Magnesium, Vitamin D and protein have strong evidence",
    "Electrolytes are critical for runs over 60 minutes",
  ],
  relatedTools: [
    { to: "/tools/protein", label: "Protein Calculator" },
    { to: "/tools/electrolytes", label: "Electrolyte Calculator" },
    { to: "/tools/calories", label: "Calories Calculator" },
  ],
  relatedGuides: [
    { slug: "muscle-recovery", label: "Muscle Recovery After Running" },
    { slug: "running-nutrition", label: "Running Nutrition: What to Eat Before, During & After" },
  ],
  sections: [
    { 
      heading: "The Science: Metabolism & Bio-Available Recovery", 
      body: "Supplementation for runners is a matter of nutrient timing and biological saturation. Unlike pure strength athletes, runners must manage a higher rate of oxidative stress and glycogen depletion.\n\nProtein & The Leucine Threshold: Muscle Protein Synthesis (MPS) is not just about total protein, but about hitting the 'Leucine Threshold'. You need approximately 2.5g to 3.0g of the amino acid Leucine in a single meal to 'switch on' the anabolic signaling pathway (mTOR). Without this threshold, repair is suboptimal, even if total daily protein intake is high.", 
      variant: "highlight" 
    },
    { 
      heading: "Creatine, ATP Kinetics & Nitric Oxide", 
      body: "While often dismissed as a 'bodybuilding' supplement, Creatine Monohydrate improves ATP resynthesis—the primary energy source for short, intense bursts like hill sprints or the final race kick. It also aids in muscle cell hydration and glycogen storage.\n\nNitric Oxide Precursors: Dietary nitrates (found in beetroot juice) improve mitochondrial efficiency by reducing the oxygen cost of submaximal exercise. Studies show a 1-3% improvement in time-trial performance following acute nitrate loading.", 
      variant: "default", 
      listItems: [
        "Magnesium: Critical for 300+ enzymatic reactions, including oxygen delivery to muscles", 
        "Beta-Alanine: Buffers H+ ions (acidity) during high-intensity intervals", 
        "Electrolyte Balance: Sodium-to-Potassium ratio is key for cellular hydration",
        "Vitamin D3: Essential for bone density and immune function; aim for >40 ng/mL blood levels."
      ] 
    },
    {
      heading: "The Antioxidant Paradox",
      body: "While runners produce high levels of free radicals, high-dose antioxidant supplementation (Vitamin C & E) can actually blunt the training response. Oxidative stress acts as a signaling molecule for mitochondrial biogenesis. Only supplement with antioxidants during high-stress race blocks, not during base building phases.",
      variant: "warning"
    },
    { 
      heading: "The Practical Guide: What Should I Do?", 
      body: "How should a runner approach supplementation for maximum effect with minimum risk?", 
      variant: "checklist", 
      listItems: [
        "Prioritize 'Food First': Use supplements to fill specific nutrient gaps (e.g. Iron, Vitamin D).", 
        "Post-Run Protocol: Consume 20-30g of high-quality protein (Whey/Isolate) within 60 minutes of finishing.", 
        "Creatine Loading: Take 5g daily consistently—it takes 2-4 weeks to reach saturation levels in the muscles.", 
        "Hydration Check: On runs over 90 minutes, supplement with 400-800mg of sodium per hour to avoid hyponatremia.",
        "Iron Monitoring: Runners have higher iron turnover due to foot-strike hemolysis; check Ferritin levels twice yearly."
      ] 
    },
  ],
  hubCategory: "supplements",
};
