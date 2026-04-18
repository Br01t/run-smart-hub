import { GuideContent } from "@/types/guide";
import guideShoes from "@/assets/guide-shoes.webp";

export const runningShoeRotation: GuideContent = {
  title: "How to Build a Running Shoe Rotation",
  description: "The scientific and practical guide to rotating multiple pairs of shoes to reduce injury risk and improve performance.",
  tags: ["shoes", "gear", "injury-prevention", "top-picks-2026"],
  heroImage: guideShoes,
  readTime: "9 min read",
  keyTakeaways: [
    "Rotating 2+ pairs reduces injury risk by 39%",
    "Different foams and geometries vary mechanical loading",
    "Save high-end 'Super Shoes' for key sessions and race day",
  ],
  relatedTools: [
    { to: "/tools/bmi", label: "BMI Calculator" },
    { to: "/tools/protein", label: "Protein Calculator" },
  ],
  relatedGuides: [
    { slug: "choosing-running-shoes", label: "How to Choose Running Shoes" },
    { slug: "injury-prevention", label: "Runner's Guide to Injury Prevention" },
  ],
  sections: [
    { 
      heading: "The Science: Mechanical Variation & Overuse Prevention", 
      body: "Overuse injuries in running are often caused by the 'monotony of load'—applying the exact same stress to the same tissues thousands of times. By rotating between shoes with different stack heights, foam densities (EVA vs PEBA), and heel-to-toe drops, you subtly shift the stress across different joints and muscle groups.\n\nFoam Recovery: Midsole foams take 24-48 hours to fully 'decompress' after a run. If you run in the same pair every day, the foam remains partially compressed, providing suboptimal protection and losing its energy return properties faster.", 
      variant: "highlight" 
    },
    { 
      heading: "The Ideal 3-Shoe Matrix", 
      body: "A balanced rotation typically consists of three distinct categories. This ensures that every type of run has a specialized tool, maximizing both shoe longevity and training adaptation.\n\nDynamic Loading: Rotating a neutral daily trainer with a low-drop speed shoe and a high-stack rocker helps strengthen the intrinsic muscles of the foot and the stabilizers of the ankle by forcing them to adapt to different proprioceptive signals.", 
      variant: "default", 
      listItems: [
        "The Daily Trainer: Reliable EVA-based shoe for 70-80% of your mileage.", 
        "The Speed/Interval Shoe: Light, flexible, and responsive for workouts.", 
        "The Recovery/Long Run Shoe: Maximal cushioning and a 'rocker' geometry to save the legs.",
        "The Race Day 'Super Shoe': Carbon-plated with high energy return for PB attempts."
      ] 
    },
    {
      heading: "The Longevity Hack",
      body: "Using two pairs of shoes alternately doesn't cost more—it actually increases the total lifespan of both pairs because the foam has time to fully recover its molecular structure between efforts.",
      variant: "tip"
    },
    { 
      heading: "The Practical Guide: What Should I Do?", 
      body: "Build your rotation strategically using this step-by-step plan.", 
      variant: "checklist", 
      listItems: [
        "Start with Two: If you run 3+ times a week, own two pairs with different heel drops (e.g., 8mm and 4mm).", 
        "Save the Plates: save expensive carbon-plated shoes for sessions at or above race pace.", 
        "Track Your Mileage: Use an app like Strava to retire shoes individually once they pass 600-800km.", 
        "Phase-In New Pairs: When a shoe reaches 500km, buy its replacement and rotate it in slowly for 100km.",
        "Surface Matching: Match your rotation to your terrain (e.g., 2 road pairs, 1 tail pair)."
      ] 
    },
  ],
  hubCategory: "shoes",
};
