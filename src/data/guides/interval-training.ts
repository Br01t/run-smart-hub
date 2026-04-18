import { GuideContent } from "@/types/guide";
import guideIntervalTraining from "@/assets/guide-interval-training.webp";

export const intervalTraining: GuideContent = {
  title: "Interval Training for Runners: The Complete Guide",
  description: "Master every type of speed workout — from fartlek to VO2max repeats. Learn how to structure intervals, set target paces, and periodize speed work for race-day results.",
  tags: ["running", "energy", "muscles"],
  heroImage: guideIntervalTraining,
  readTime: "9 min read",
  keyTakeaways: [
    "Speed work should be max 20% of weekly volume (80/20 rule)",
    "Different interval types target different energy systems",
    "Always warm up 10-15 min before any speed session",
  ],
  relatedTools: [
    { to: "/tools/calories", label: "Calories Calculator" },
    { to: "/tools/hydration", label: "Hydration Calculator" },
  ],
  relatedGuides: [
    { slug: "running-heart-rate-zones", label: "Heart Rate Zone Training for Runners" },
    { slug: "marathon-training", label: "Marathon Training Guide for Beginners" },
  ],
  sections: [
    { 
      heading: "The Science: Energy Systems & Lactate Clearance", 
      body: "Interval training is the manipulation of work-to-rest ratios to target specific metabolic pathways. \n\nLactate Shuttle Efficiency: High-intensity intervals (VO2 Max repeats) train the body to 'shuttle' lactate from fast-twitch fibers to slow-twitch fibers and the heart to be used as fuel. This increases your 'Redline'—the pace you can maintain before catastrophic muscle fatigue occurs.", 
      variant: "highlight" 
    },
    { 
      heading: "Structuring the Speed Microcycle", 
      body: "A successful interval session requires a structured warm-up to 'unlock' the neuromuscular system. The recovery period between intervals is purely functional—it allows for the partial resynthesis of Phosphocreatine (PCr).\n\nPeripheral Adaptations: Speed work increases the diameter of the aorta and the stroke volume of the heart, allowing more oxygen-rich blood to reach the quadriceps and glutes with every beat.", 
      variant: "default", 
      listItems: [
        "VO2 Max Repeats: 3-5 minute efforts at 95% Max HR to maximize oxygen uptake ceiling.", 
        "Tempo/Threshold: 20-40 minute sustained efforts at 'comfortably hard' pace to build endurance.", 
        "Fartlek: 'Speed play' intervals to build mental adaptability to changing paces.",
        "Anaerobic Capacity: Short (30-60 sec) max-effort bursts to train the body to handle high acidity."
      ] 
    },
    {
      heading: "The 20% Speed Ceiling",
      body: "To prevent injury, speed training (intensity > Zone 3) should never exceed 20% of your total weekly mileage. For a 50km/week runner, that's a maximum of 10km of high-intensity work.",
      variant: "tip"
    },
    { 
      heading: "The Practical Guide: What Should I Do?", 
      body: "Execute your speed work with precision.", 
      variant: "checklist", 
      listItems: [
        "Warm-Up Protocol: 15 mins of easy jogging + 4x 100m 'strides' before the main set.", 
        "Pacing Target: Use a recent race result to calculate your 'Target Paces'; don't run by hope, run by data.", 
        "Active Recovery: Keep your recovery intervals moving at a very slow jog to facilitate lactate clearance.", 
        "Listen to the 'Pop': If you feel a sharp, sudden muscle pain, stop the session immediately. Speed work is high-risk.",
        "Cool Down: Perform at least 10 mins of very easy running post-intervals to return the CNS to a baseline state."
      ] 
    },
  ],
  hubCategory: "recovery",
};
