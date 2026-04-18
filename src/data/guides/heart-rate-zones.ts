import { GuideContent } from "@/types/guide";
import guideHeartrate from "@/assets/guide-heartrate.webp";

export const heartRateZones: GuideContent = {
  title: "Heart Rate Zone Training for Runners",
  description: "How to use heart rate zones to train smarter, avoid overtraining and improve performance.",
  tags: ["accessories", "running"],
  heroImage: guideHeartrate,
  readTime: "8 min read",
  keyTakeaways: [
    "Spend 80% of training in Zones 1-2 (easy effort)",
    "The '220 minus age' formula is inaccurate for many people",
    "Chest straps are more accurate than wrist-based HR monitors",
  ],
  relatedTools: [
    { to: "/tools/calories", label: "Calories Calculator" },
    { to: "/tools/bmi", label: "BMI Calculator" },
  ],
  relatedGuides: [
    { slug: "marathon-training", label: "Marathon Training Guide for Beginners" },
    { slug: "running-nutrition", label: "Running Nutrition: What to Eat Before, During & After" },
  ],
  sections: [
    { heading: "The Science: The Autonomic Nervous System Hub", body: "Heart rate (HR) is the most objective measure of internal metabolic stress. By monitoring BPM, we gain insight into the Autonomic Nervous System's balance between the Sympathetic (stress) and Parasympathetic (recovery) branches.\n\nThe 80/20 Rule: Elite athletes spend 80% of their time in Zone 2 to maximize mitochondrial biogenesis and fat oxidation without overtaxing their CNS. Most recreational runners make the 'Gray Zone' mistake — running too hard for aerobic gains but too easy for threshold gains.", variant: "highlight" },
    { heading: "Defining the Zones", body: "Zones are not arbitrary; they represent metabolic transition points. Zone 2 is purely aerobic (fat burning). Zone 4 (Threshold) is the tipping point where lactate accumulation exceeds clearance. Zone 5 is the 'Red Zone' targeting VO2 Max (maximal oxygen processing).\n\nHRV (Heart Rate Variability): The variability between heartbeats is a proxy for nervous system health. High variability = high recovery; Low variability = high systemic stress.", variant: "default", listItems: ["Drift: Heart rate rises during a run even at a constant pace as core temp climbs (Cardiac Drift)", "Testing: Use a Max HR field test instead of formulas (220-age is often +/- 15 BPM off)", "Chest Straps: Essential for intervals; optical wrist sensors lag by up to 20 seconds"] },
    { heading: "The Practical Guide: What Should I Do?", body: "Take control of your intensity with these objective steps.", variant: "checklist", listItems: ["Find Your True Max: Run 3x 3-minute uphill repeats at maximum effort, your highest recorded HR is your Max HR.", "Zone 2 Discipline: Keep your easy runs 'conversational' — if you can't speak in full sentences, you are out of Zone 2.", "Morning HRV: Track your resting HR or HRV each morning. If it's elevated by >5 BPM, your body needs extra recovery.", "Don't Chase Pace: On hot or humid days, ignore your pace and follow your heart rate. Your internal stress matters more than the external clock."] },
  ],
  hubCategory: "apparel",
};
