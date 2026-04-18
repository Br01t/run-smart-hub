import { GuideContent } from "@/types/guide";
import guideNutrition from "@/assets/guide-nutrition.webp";

export const runningNutrition: GuideContent = {
  title: "Running Nutrition: What to Eat Before, During & After",
  description: "A complete guide to fueling your runs properly. Learn what, when and how much to eat for optimal performance.",
  tags: ["energy", "carbohydrates", "supplements", "protein"],
  heroImage: guideNutrition,
  readTime: "9 min read",
  keyTakeaways: [
    "Eat carb-rich meals 2-3 hours before running",
    "Fuel with 30-60g carbs/hour for runs over 60 minutes",
    "Recover with a 3:1 carb-to-protein ratio within 60 minutes",
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
      heading: "The Science: Glycogen Kinetics & Oxidation Rates", 
      body: "The human body stores approximately 400-500g of glycogen in the muscles and 100g in the liver. At marathon intensity, these stores are depleted in 90-120 minutes. Successful fueling is about maximizing 'Exogenous Carbohydrate Oxidation'.\n\nThe 1:0.8 Ratio: By combining Glucose (which uses the SGLT1 transporter) and Fructose (which uses the GLUT5 transporter), runners can increase carbohydrate absorption from 60g/hour to over 90-100g/hour. This prevents the 'Gastrointestinal Bottleneck' that causes the 'Bonk' or 'Hitting the Wall'.", 
      variant: "highlight" 
    },
    { 
      heading: "Hydration, Osmolarity & Sodium Loss", 
      body: "The osmolarity of your sports drink determines gastric emptying speed. Isotonic drinks (280-300 mOsm/L) match the concentration of blood and are absorbed fastest. \n\nSweat Sodium Concentration: This varies widely among individuals (from 200mg/L to 2,000mg/L). If you are a 'salty sweater', standard sports drinks may not prevent hyponatremia during long efforts. Specialized electrolyte loading (1,000mg+ sodium) may be required pre-race.", 
      variant: "default", 
      listItems: [
        "Pre-Fueling: 10g/kg of carbohydrates 24h before a race to super-saturate stores", 
        "Glycemic Index: Use low-GI foods (oats) 3h before; high-GI (gels) during the run", 
        "Gut Training: You must train your digestive system to handle 80g+ of carb/hour",
        "Hypoglycemia: Rebound hypoglycemia can occur if you eat high-GI foods 45-60 mins before a run without starting the effort immediately."
      ] 
    },
    {
      heading: "The 4th Fuel: Ketones & FATmax",
      body: "While carbs are the primary fuel for high intensity, optimizing your FATmax (the intensity at which fat oxidation is highest) preserves glycogen for the final 10km of a race. Long, slow runs in a fasted state can improve fat metabolic efficiency.",
      variant: "tip"
    },
    { 
      heading: "The Practical Guide: What Should I Do?", 
      body: "Turn your nutrition into an objective training variable with these actionable steps.", 
      variant: "checklist", 
      listItems: [
        "Test everything in training: Never use a new gel or fuel source on race day.", 
        "The 60g-90g Rule: For any run over 90 minutes, target 60-90g of carbohydrates per hour.", 
        "Measure Sweat Rate: Weigh yourself before/after a 60-min run. Every 1kg lost = 1L of fluid deficit.", 
        "Pre-Race Carb Loading: Focus on low-fiber, high-carb foods (white rice, pretzels) in the 48 hours before.",
        "Immediate Refuel: Within 30 mins of a hard run, consume 1g/kg of carbs and 0.3g/kg of protein to stop muscle breakdown."
      ] 
    },
  ],
  hubCategory: "supplements",
};
