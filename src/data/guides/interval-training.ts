import { GuideContent } from "@/types/guide";
import guideIntervalTraining from "@/assets/guide-interval-training.webp";

export const intervalTraining: GuideContent = {
  title: "Interval Training for Runners: The Complete Guide",
  seoTitle: "Interval Training Guide 2026: Speed Work Science",
  seoDescription: "Master the art of speed. Learn how to structure VO2 Max repeats, Tempo runs, and Fartleks using scientific work-to-rest ratios for maximum performance.",
  keywords: ["interval training running", "VO2 max intervals", "tempo run vs threshold", "fartlek training guide", "speed work for marathon", "running energy systems"],
  description: "Master every type of speed workout — from fartlek to VO2 max repeats. Learn how to structure intervals and set target paces.",
  tags: ["running", "energy", "muscles"],
  heroImage: guideIntervalTraining,
  readTime: "14 min read",
  keyTakeaways: [
    "Interval training manipulates work-to-rest ratios to target specific energy systems",
    "VO2 Max repeats (3-5 mins) improve your maximal oxygen processing capacity",
    "Tempo runs (Threshold) increase the pace you can sustain without 'redlining'",
    "Active recovery (jogging) between sets clears lactate faster than standing still",
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
      heading: "The Science: Energy Systems", 
      body: "Interval training is the strategic manipulation of intensity and recovery to stress the body's three energy systems: the Phosphagen (ATP-PC), Glycolytic (Anaerobic), and Oxidative (Aerobic) pathways. \n\n**Lactate Shuttle Efficiency:** High-intensity intervals train your body to 'shuttle' lactate out of the working muscles to be used as fuel by the heart and liver. This physiological adaptation allows you to sustain 'race pace' with significantly less perceived exertion.", 
      variant: "highlight" 
    },
    { 
      heading: "The Work-to-Rest Ratio Matrix", 
      body: "The magic of intervals lies in the recovery. \n\n- **VO2 Max Repeats (1:1 Ratio):** If you run for 4 minutes hard, you rest for 4 minutes easy. This allows for partial Phosphocreatine (PCr) resynthesis, so you can repeat the high-intensity effort. \n- **Anaerobic Capacity (1:3 Ratio):** Short, explosive bursts (e.g., 200m sprints) require long rest to allow the nervous system to recover. \n- **Threshold/Tempo (Short Rest):** 1-mile repeats with only 60-90 seconds of rest keep the heart rate elevated, forcing the body to deal with continuous lactate accumulation.", 
      variant: "default" 
    },
    { 
      heading: "Types of Speed Work", 
      body: "Every runner's plan should rotate through these three 'Pillars of Speed'. \n\n1. **Fartlek ('Speed Play'):** Unstructured intervals based on landmarks (e.g., 'sprint to that tree'). Best for building mental grit and variety. \n2. **Tempo Runs:** Sustained efforts at 85-90% of Max HR. This is the 'glue' that holds your marathon pace together. \n3. **VO2 Max Repeats:** Efforts of 800m to 1600m that leave you gasping for air. These build the 'aerobic ceiling' that dictates your ultimate potential.", 
      variant: "default", 
      listItems: [
        "Strides: 80-100m accelerations to improve running economy and neuromuscular 'pop'", 
        "Stroke Volume: Speed work increases the amount of blood pumped per heartbeat", 
        "Capillarization: Intense efforts create new microscopic blood vessels in the muscles",
        "Mental Taper: Intervals teach the brain that 'uncomfortable' is not 'dangerous'."
      ] 
    },
    {
      heading: "The 20% Intensity Rule",
      body: "To avoid the 'Overtraining Syndrome', high-intensity work (Zone 4/5) should never exceed 20% of your total weekly mileage. If you run 50km a week, keep your 'hard' miles under 10km.",
      variant: "warning"
    },
    {
      heading: "Pacing by Data, Not Ego",
      body: "Use a recent 5K or 10K race result to calculate your training paces. Running your intervals 'as fast as possible' is often counter-productive. If a session calls for 'Threshold Pace' and you run 'Mile Pace', you are targeting the wrong energy system and accumulating unnecessary fatigue.",
      variant: "tip"
    },
    { 
      heading: "Interval Session Checklist", 
      body: "How to execute a perfect speed session from start to finish.", 
      variant: "checklist", 
      listItems: [
        "Warm-Up: 15 mins easy + dynamic drills (high knees, butt kicks).", 
        "The Main Set: Focus on consistency—your last interval should be as fast as your first.", 
        "Active Recovery: Keep the legs moving at a 'shuffle' pace to prevent blood pooling.", 
        "Refuel: Consume high-quality carbs and protein within 45 mins of finishing.",
        "Surface Selection: Use a flat road or track for VO2 Max work to ensure accurate pacing."
      ] 
    },
  ],
  hubCategory: "recovery",
};
