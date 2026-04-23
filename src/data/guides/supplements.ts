import { GuideContent } from "@/types/guide";
import guideSupplements from "@/assets/guide-supplements.webp";

export const supplementsForRunners: GuideContent = {
  title: "Essential Supplements for Runners",
  seoTitle: "Best Running Supplements 2026: Evidence-Based Dosage Guide",
  seoDescription: "Which supplements actually improve running performance? Scientific analysis of Creatine, Nitrates, Beta-Alanine, and Vitamin D for endurance athletes.",
  keywords: ["running supplements", "endurance performance", "creatine for runners", "beetroot juice nitrates", "magnesium for cramps", "protein for endurance"],
  description: "Which supplements actually work for running? An evidence-based guide to performance and health.",
  tags: ["supplements", "electrolytes", "protein", "top-supplements-2026"],
  heroImage: guideSupplements,
  readTime: "14 min read",
  keyTakeaways: [
    "Prioritize 'Food First'—supplements fill the gaps left by high-volume training",
    "Creatine and Beta-Alanine improve high-intensity capacity and buffering",
    "Nitrates (Beetroot) reduce the oxygen cost of running",
    "Iron and Vitamin D are the most common deficiencies in runners",
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
      heading: "The Performance Hierarchy", 
      body: "Supplementation is the 'tip of the pyramid'. Before considering pills, ensure your caloric intake, macronutrient balance, and sleep are optimized. However, for athletes training 5+ hours per week, specific micronutrients become rate-limiting factors for both performance and recovery.", 
      variant: "highlight" 
    },
    { 
      heading: "Performance Enhancers: The Big Three", 
      body: "Only a handful of supplements have 'Level A' evidence for improving endurance performance. \n\n- **Nitrates (Beetroot Juice):** Increases Nitric Oxide, improving mitochondrial efficiency. Dose: 400-800mg 2-3 hours before a race. \n- **Beta-Alanine:** Increases muscle carnosine levels, which buffers the 'burn' (H+ ions) during VO2 max efforts. Dose: 3.2-6.4g daily (split doses to avoid tingling). \n- **Creatine Monohydrate:** Improves phosphocreatine resynthesis for hill sprints and finishing kicks. Contrary to myth, it doesn't cause bloating if taken in low doses (3-5g/day).", 
      variant: "default" 
    },
    { 
      heading: "Health & Resilience: The Recovery Stack", 
      body: "Endurance running is an inflammatory and oxidative stressor. Maintaining systemic health is key to consistent training. \n\n- **Vitamin D3 + K2:** Critical for calcium absorption and immune function. Most runners in northern latitudes are deficient. Aim for 2000-5000 IU/day. \n- **Magnesium (Bisglycinate/Citrate):** Involved in 300+ reactions. Magnesium deficiency is linked to muscle cramps and poor sleep quality. \n- **Omega-3 (EPA/DHA):** Reduces exercise-induced systemic inflammation and improves heart health.", 
      variant: "default", 
      listItems: [
        "Iron (Ferritin): Runners lose iron through sweat and 'foot-strike hemolysis'. Check levels regularly.", 
        "Probiotics: Reduces the incidence of GI distress ('runner's trots') during long efforts.", 
        "Collagen + Vitamin C: Taken 45 mins before a strength session, it may improve tendon and ligament repair.",
        "Zinc: Essential for hormonal health and enzyme function in high-mileage athletes."
      ] 
    },
    {
      heading: "The Antioxidant Paradox",
      body: "Studies show that high doses of Vitamin C (>1000mg) and Vitamin E during the base-building phase can actually **blunt** mitochondrial adaptations. Your body needs the 'stress' of oxidation to signal it to get stronger. Save high-dose antioxidants for the 3 days post-marathon or during heavy travel blocks.",
      variant: "warning"
    },
    {
      heading: "Protein & Amino Acid Kinetics",
      body: "Muscle Protein Synthesis (MPS) is driven by the 'Leucine Threshold'. Aim for 20-30g of protein every 3-4 hours, ensuring at least 2.5g of Leucine per serving (found in whey, soy, or eggs) to trigger the mTOR pathway for muscle repair.",
      variant: "tip"
    },
    { 
      heading: "The Runner's Supplement Checklist", 
      body: "How to safely and effectively integrate supplements into your routine.", 
      variant: "checklist", 
      listItems: [
        "Look for 'Informed Sport' or 'NSF' labels to ensure no banned substances.", 
        "Beta-Alanine: Take 1.6g twice daily to minimize 'paresthesia' (skin tingling).", 
        "Creatine: No need to 'load'. 5g daily consistently is enough for saturation in 21 days.", 
        "Vitamin D: Take with a meal containing fat to maximize absorption.",
        "Magnesium: Take before bed to leverage its muscle-relaxing and sleep-promoting effects."
      ] 
    },
  ],
  hubCategory: "supplements",
};
