import { GuideContent } from "@/types/guide";
import guideNutrition from "@/assets/guide-nutrition.webp";

export const runningNutrition: GuideContent = {
  title: "Running Nutrition: What to Eat Before, During & After",
  seoTitle: "Running Nutrition Guide 2026: Fueling for Performance",
  seoDescription: "Master the science of endurance fueling. Learn about glucose/fructose ratios, carb loading protocols, and how to train your gut for 90g+ of carbs per hour.",
  keywords: ["running nutrition", "marathon fueling", "carb loading guide", "glucose fructose ratio", "gut training for runners", "post run meal"],
  description: "A complete guide to fueling your runs properly. Learn what, when and how much to eat for optimal performance and health.",
  tags: ["energy", "carbohydrates", "supplements", "protein"],
  heroImage: guideNutrition,
  readTime: "14 min read",
  keyTakeaways: [
    "Target 60-90g of carbohydrates per hour for efforts longer than 90 minutes",
    "Use a 1:0.8 Glucose-to-Fructose ratio to maximize absorption and reduce GI distress",
    "Gut Training is a physical adaptation—practice fueling during your long runs",
    "Carb loading requires 10g of carbs per kg of body weight in the 24-48h before a race",
  ],
  relatedTools: [
    { to: "/tools/calories", label: "Calories Calculator" },
    { to: "/tools/protein", label: "Protein Calculator" },
  ],
  relatedGuides: [
    { slug: "supplements-for-runners", label: "Essential Supplements for Runners" },
    { slug: "marathon-training", label: "Marathon Training Guide for Beginners" },
  ],
  sections: [
    { 
      heading: "The Science: Glycogen Kinetics", 
      body: "Your body stores approximately 2,000 calories of glycogen in the muscles and liver. At race intensity, this lasts about 90-120 minutes. Endurance performance is essentially a competition of who can manage their fuel stores most efficiently and replace them fastest while moving.\n\n**The Dual-Transporter Advantage:** By combining Glucose (using SGLT1 transporters) and Fructose (using GLUT5 transporters), you can bypass the standard 60g/hour absorption limit, reaching up to 90g or even 120g per hour without gastrointestinal breakdown.", 
      variant: "highlight" 
    },
    { 
      heading: "Pre-Race: The Art of Carb Loading", 
      body: "Carb loading isn't just a big pasta dinner the night before. To truly super-saturate your glycogen stores, you need to hit **8-10g of carbohydrates per kg of body weight** for 36-48 hours before the event. \n\n- **Fiber Management:** Reduce fiber intake during the loading phase to avoid 'heavy' gut feelings and mid-race bathroom breaks. \n- **Hydration Sync:** Every gram of glycogen stored requires 3-4 grams of water. Expect a slight weight gain—this is 'fuel weight' that you will use on course.", 
      variant: "default" 
    },
    { 
      heading: "Gut Training: The Forgotten Discipline", 
      body: "The stomach is a highly adaptable organ. If you experience nausea or bloating while fueling, it's often because your gut isn't 'fit' enough to process the load. \n\n- **Protocol:** Start with 30g/hour and increase by 10g every two weeks during your long runs. \n- **Volume Training:** Practice drinking larger volumes of fluid in training to increase gastric emptying speed, ensuring nutrients reach your bloodstream faster.", 
      variant: "default", 
      listItems: [
        "Osmolarity Matters: Gels need water to be absorbed; 'Hydrogels' are self-contained", 
        "Flavor Fatigue: Alternate between sweet and salty fuels during 4h+ efforts", 
        "Caffeine Strategy: Save 3-6mg/kg of caffeine for the final 90 minutes of a race",
        "Salt Balance: Target 500-1000mg of sodium per hour if you are a salty sweater."
      ] 
    },
    {
      heading: "The 4th Fuel: FATmax & Metabolic Flexibility",
      body: "While carbs are king for performance, your ability to burn fat at higher intensities (FATmax) preserves precious glycogen. High-volume, low-intensity training in Zone 2 is the most effective way to shift your metabolic curve, allowing you to run faster while burning a higher percentage of fat.",
      variant: "tip"
    },
    {
      heading: "The GI Distress 'Red Zone'",
      body: "Avoid high-fat, high-fiber, and high-protein foods in the 3-4 hours before a hard run. These slow down gastric emptying, leading to 'sloshing', cramps, and the dreaded 'Runner's Trots'. If you are prone to GI issues, switch to liquid-only fueling in the final hours pre-race.",
      variant: "warning"
    },
    { 
      heading: "Fueling Timeline: Actionable Checklist", 
      body: "Use this timeline to ensure you never 'Bonk' during a key session or race.", 
      variant: "checklist", 
      listItems: [
        "3h Before: 100-150g of low-fiber carbs (Oatmeal, White Rice, Toast).", 
        "15m Before: 20-30g of fast-acting carbs (Gel or Sports Drink).", 
        "During (Every 20m): 20-30g of carbs + 200ml of fluid.", 
        "Post-Run (Immediate): 3:1 Carb-to-Protein recovery shake.",
        "Evening After: High-sodium meal to replace electrolytes lost in sweat."
      ] 
    },
  ],
  hubCategory: "supplements",
};
