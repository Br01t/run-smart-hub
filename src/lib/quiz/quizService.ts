import { ProfileResult } from "@/types/quiz";

export const getRunnerProfile = (answers: Record<string, string>): ProfileResult => {
  const tags: string[] = []; // Removed generic "running" base tag
  const tools: { label: string; to: string; icon: string }[] = [];
  const guides: { label: string; slug: string }[] = [];
  const tips: string[] = [];

  let title = "The Balanced Runner";
  let archetype = "🏃";
  let description = "You have a well-rounded approach to running. Focus on consistency and progressive overload.";

  // 1. Archetype Determination (The Core Identity)
  const exp = answers.experience;
  const terrain = answers.terrain;
  const goal = answers.goal;
  const dist = answers.distance;
  const freq = answers.frequency;

  if (exp === "beginner") {
    title = "The Foundation Builder";
    archetype = "🌱";
    description = "You're in the most critical phase: building a durable structural foundation. Your focus should be on slow, easy miles to allow tendons and ligaments to adapt before the muscles do. Consistency is your superpower right now.";
    tags.push("daily-trainer", "socks", "accessories", "beginner-kit");
    tips.push("The 'Talk Test': You should be able to speak in full sentences during 80% of your runs.");
    tips.push("Consistency beats intensity. It's better to run 20 minutes 3 times a week than 1 hour once a week.");
    tips.push("Don't skip the warm-up: 5 minutes of dynamic stretching (leg swings, calf raises) prepares your CNS for effort.");
    guides.push({ label: "How to Start Running", slug: "trail-running-beginners" });
  } else if (terrain === "trail" && (dist === "trail-ultra" || dist === "marathon")) {
    title = "The Technical Trail Master";
    archetype = "🏔️";
    description = "You thrive where the pavement ends. Your training requires specialized focus on eccentric leg strength for steep descents and high-precision fueling for long, unpredictable days in the mountains.";
    tags.push("trail", "hydration", "accessories", "energy", "electrolytes", "trail-elite");
    tips.push("Practice 'power hiking' on steep inclines to preserve glycogen for runnable sections.");
    tips.push("Focus on vertical gain, not just mileage. 1000m of climbing equals roughly 10km of flat effort.");
    tips.push("Test your gear: never use a new pack or shoes on a run longer than 90 minutes for the first time.");
    guides.push({ label: "Trail Running Guide", slug: "trail-running-beginners" });
  } else if (terrain === "trail" && goal === "speed") {
    title = "The Hybrid Trail-Speedster";
    archetype = "🦊";
    description = "You combine the agility of a trail runner with the raw turnover of a road athlete. Your challenge is balancing technical skills with high-intensity VO2max development.";
    tags.push("trail", "performance", "energy", "orologi", "speed-pro");
    tips.push("Intervals on grass: perform your speed work on soft surfaces to build stabilizers without the impact of asphalt.");
    tips.push("Hill Sprints: 8-10 reps of 10-second all-out uphill efforts build incredible explosive power.");
  } else if (goal === "speed" && (exp === "advanced" || exp === "competitive")) {
    title = "The Performance Pursuit";
    archetype = "⚡";
    description = "You're chasing the clock. Every detail from VO2max intervals to shoe weight and carbohydrate oxidation rates matters to shave seconds off your PR. Precision is your primary training tool.";
    tags.push("performance", "energy", "supplements", "orologi", "abbigliamento", "speed-pro");
    tips.push("Incorporate strides (20s fast/45s recovery) at the end of easy runs to maintain neuromuscular speed.");
    tips.push("Optimize your recovery: post-run protein and carbs within 30 minutes are non-negotiable at your level.");
    tips.push("Threshold focus: your weekly 'Tempo' run is the biggest driver of your race-day performance.");
    guides.push({ label: "Improving Running Form", slug: "running-form" });
  } else if (dist === "marathon" || dist === "half-marathon") {
    title = "The Endurance Specialist";
    archetype = "♾️";
    description = "Volume and metabolic efficiency are your weapons. You need to master the art of fat oxidation and gut training to handle the cumulative fatigue of long-distance events.";
    tags.push("carbohydrates", "electrolytes", "recovery", "cushioning", "socks", "endurance-base");
    tips.push("Train your gut: consume your race-day carb target (60-90g/hr) during your weekly long runs.");
    tips.push("High-mileage blocks require high-quality sleep (8h+). Recovery is where the fitness happens.");
    tips.push("Long Run variations: don't just run slow; add 5-10km at race pace at the end of your 25km+ sessions.");
    guides.push({ label: "Marathon Fueling", slug: "running-nutrition" });
  } else if (freq === "5-6" || freq === "7+") {
    title = "The High-Volume Road Warrior";
    archetype = "🚜";
    description = "You are a mileage machine. Your training is defined by high frequency and consistent load. Your biggest challenge is managing systemic inflammation and repetitive stress.";
    tags.push("recovery", "cushioning", "protein", "magnesium", "socks", "high-volume");
    tips.push("Shoe Rotation: Use 2-3 different models to vary the stress on your feet and extend shoe life.");
    tips.push("Active Recovery: A 15-minute walk or very slow 'shakeout' run can help clear metabolic waste better than total rest.");
  } else if (goal === "injury-free" || answers.issue === "injuries") {
    title = "The Resilient Athlete";
    archetype = "🛡️";
    description = "Longevity is your priority. By focusing on mobility, strength, and smart load management, you're building a body that can handle the repetitive stress of running for decades.";
    tags.push("recovery", "muscles", "protein", "accessories", "daily-trainer", "magnesium", "injury-prevention");
    tips.push("Prioritize 'Pre-hab': 10 minutes of glute and core activation before every single run.");
    tips.push("If it hurts more than 3/10, stop. Running through sharp pain leads to 3-month layoffs.");
    tips.push("Strength Training: Focus on single-leg exercises (split squats, calf raises) to address imbalances.");
    guides.push({ label: "Injury Prevention", slug: "injury-prevention" });
  } else if (goal === "weight-loss") {
    title = "The Metabolic Transformer";
    archetype = "🔥";
    description = "You're using running as a powerful tool for body composition change. Focus on protein intake to protect lean muscle mass while maintaining a sustainable caloric deficit.";
    tags.push("protein", "energy", "supplements", "abbigliamento", "weight-loss-kit");
    tips.push("Don't 'run to eat' — focus on high-nutrient density foods that keep you satiated during high-volume weeks.");
    tips.push("Walking is an underrated tool for fat loss. Add 30 minutes of low-intensity movement on rest days.");
    tips.push("Pre-run protein: a small protein snack before your run can help prevent muscle breakdown during long efforts.");
    tools.push({ label: "BMI Calculator", to: "/tools/bmi", icon: "Activity" });
  } else {
    title = "The Weekend Warrior";
    archetype = "🎖️";
    description = "You balance running with a busy lifestyle. Your plan focuses on maximizing the impact of your limited training time while staying healthy and energized.";
    tags.push("daily-trainer", "accessories", "protein", "energy", "casual-runner");
    tips.push("Quality over quantity: if you only run twice a week, make one an easy long run and one a moderate tempo.");
    tips.push("Hydration isn't just for runs. Maintaining baseline hydration daily improves your energy levels significantly.");
  }

  // 2. Specialized Logic (Additions to the Archetype)
  
  // Experience Level Adjustments
  if (exp === "competitive") {
    tips.push("Monitor Morning Resting HR: An increase of >5 bpm can indicate overtraining or oncoming illness.");
    guides.push({ label: "Training Zones", slug: "running-heart-rate-zones" });
    tags.push("competitive-pro");
  }

  // Terrain Specifics
  if (terrain === "road" || terrain === "track") {
    tags.push("road", "cushioning");
    if (goal === "speed") {
      guides.push({ label: "Cadence Guide", slug: "running-cadence" });
      tags.push("performance");
    }
  } else if (terrain === "trail" || terrain === "mixed") {
    tags.push("trail", "hydration");
    tools.push({ label: "Electrolyte Calculator", to: "/tools/electrolytes", icon: "Zap" });
  }

  // Biomechanics & Gear Variety
  if (answers.biomechanics === "overpronation") {
    tips.push("Stability Check: Ensure your shoes have medial support to prevent excessive inward roll.");
    tags.push("stability");
  }
  
  if (freq === "5-6" || freq === "7+") {
    tags.push("recovery", "muscles");
    tips.push("Recovery focus: consider compression gear or foam rolling to manage high-volume muscle fatigue.");
  }

  // Issues & Nutrition
  if (answers.issue === "cramps-dehydration") {
    tags.push("electrolytes", "magnesium", "hydration");
    tools.push({ label: "Electrolyte Calculator", to: "/tools/electrolytes", icon: "Zap" });
    tips.push("Sweat Test: Weigh yourself before and after an hour-long run to determine your fluid loss rate.");
  } else if (answers.issue === "fatigue-recovery") {
    tags.push("protein", "recovery", "magnesium", "energy");
    tools.push({ label: "Protein Calculator", to: "/tools/protein", icon: "Dumbbell" });
    tips.push("Sleep Hygiene: 7-9 hours of quality sleep is more effective than any supplement for recovery.");
  } else if (answers.issue === "nutrition") {
    tags.push("energy", "carbohydrates", "protein", "nutrition");
    tools.push({ label: "Calories Calculator", to: "/tools/calories", icon: "Zap" });
    guides.push({ label: "Performance Nutrition", slug: "running-nutrition" });
  }

  // 3. Final Aggregation
  const uniqueTags = [...new Set(tags)];
  const uniqueTools = tools.filter((t, i, arr) => arr.findIndex((x) => x.to === t.to) === i);
  const uniqueGuides = guides.filter((g, i, arr) => arr.findIndex((x) => x.slug === g.slug) === i).slice(0, 4);

  // Default fallbacks if lists are empty
  if (uniqueTools.length === 0) uniqueTools.push({ label: "All Tools", to: "/tools", icon: "Wrench" });
  if (uniqueGuides.length === 0) uniqueGuides.push({ label: "Form Guide", slug: "running-form" });

  return {
    title, archetype, description,
    tags: uniqueTags.length > 0 ? uniqueTags : ["supplements"],
    tools: uniqueTools,
    guides: uniqueGuides,
    tips: [...new Set(tips)].slice(0, 5),
  };
};
