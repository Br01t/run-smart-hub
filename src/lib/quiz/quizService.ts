import { ProfileResult } from "@/types/quiz";

export const getRunnerProfile = (answers: Record<string, string>): ProfileResult => {
  const tags: string[] = [];
  const tools: { label: string; to: string; icon: string }[] = [];
  const guides: { label: string; slug: string }[] = [];
  const tips: string[] = [];

  let title = "The Balanced Runner";
  let archetype = "🏃";
  let description = "You have a well-rounded approach to running. Focus on consistency and progressive overload.";

  if (answers.experience === "beginner") {
    archetype = "🌱"; title = "The Rising Runner";
    description = "You're building your foundation — the most exciting phase! Focus on consistency over intensity, and let your body adapt gradually.";
    guides.push({ label: "Getting Started with Trail Running", slug: "trail-running-beginners" });
    tips.push("Follow the 10% rule: never increase weekly mileage by more than 10%");
    tips.push("Invest in proper running shoes — get a gait analysis at a specialty store");
  } else if (answers.experience === "competitive") {
    archetype = "🏆"; title = "The Competitive Racer";
    description = "You're optimizing every detail for peak performance. Marginal gains in nutrition, recovery and training structure will take you to the next level.";
    tips.push("Periodize your training: base → build → peak → taper → race");
    tips.push("Consider lab testing (VO2max, lactate threshold) for precision training zones");
  } else if (answers.experience === "advanced") {
    archetype = "⚡"; title = "The Dedicated Athlete";
    description = "You have a solid base and know your body well. Time to fine-tune your approach with data-driven training and targeted supplementation.";
    tips.push("Track heart rate variability (HRV) to optimize training load and recovery");
  } else {
    archetype = "🎯"; title = "The Progressing Runner";
    description = "You've built consistency and are ready for the next step. Structured training and smarter nutrition will unlock significant gains.";
  }

  if (answers.distance === "5k-10k") {
    tags.push("energy", "supplements");
    guides.push({ label: "Running Cadence: Why Steps Per Minute Matter", slug: "running-cadence" });
    guides.push({ label: "How to Improve Your Running Form", slug: "running-form" });
    tips.push("For 5K-10K, speed work (intervals, tempo runs) is king — 2 quality sessions per week");
  } else if (answers.distance === "half-marathon") {
    tags.push("energy", "carbohydrates", "electrolytes");
    guides.push({ label: "Marathon Training Guide", slug: "marathon-training" });
    guides.push({ label: "Running Nutrition", slug: "running-nutrition" });
    tips.push("Practice your race-day fueling strategy during long runs — nothing new on race day");
  } else if (answers.distance === "marathon") {
    tags.push("energy", "carbohydrates", "electrolytes", "supplements");
    tools.push({ label: "Hydration Calculator", to: "/tools/hydration", icon: "Droplets" });
    guides.push({ label: "Marathon Training Guide", slug: "marathon-training" });
    guides.push({ label: "Running Nutrition", slug: "running-nutrition" });
    tips.push("Long runs are your most important workout — build up to 32-35K before race day");
    tips.push("Carb-load 2-3 days before race day: 7-10g/kg bodyweight");
  } else if (answers.distance === "trail-ultra") {
    tags.push("electrolytes", "hydration", "energy", "accessories");
    tools.push({ label: "Hydration Calculator", to: "/tools/hydration", icon: "Droplets" });
    tools.push({ label: "Electrolyte Calculator", to: "/tools/electrolytes", icon: "Zap" });
    guides.push({ label: "Getting Started with Trail Running", slug: "trail-running-beginners" });
    guides.push({ label: "Hill Training for Runners", slug: "hill-training" });
    tips.push("Train on terrain similar to your target race — specificity matters");
  }

  if (answers.goal === "speed") {
    tags.push("energy", "supplements", "carbohydrates");
    tools.push({ label: "Calories Calculator", to: "/tools/calories", icon: "Zap" });
    guides.push({ label: "Heart Rate Zone Training", slug: "running-heart-rate-zones" });
    tips.push("80% of your runs should be easy — hard days hard, easy days easy");
  } else if (answers.goal === "endurance") {
    tags.push("energy", "carbohydrates", "electrolytes");
    tools.push({ label: "Calories Calculator", to: "/tools/calories", icon: "Zap" });
    tips.push("Build aerobic base with lots of Zone 2 running before adding intensity");
  } else if (answers.goal === "weight-loss") {
    tags.push("protein", "energy");
    tools.push({ label: "BMI Calculator", to: "/tools/bmi", icon: "Activity" });
    tools.push({ label: "Calories Calculator", to: "/tools/calories", icon: "Zap" });
    tips.push("A moderate deficit of 300-500 kcal/day preserves performance while losing fat");
    tips.push("Prioritize protein (1.6-2.0g/kg) to preserve muscle during weight loss");
  } else if (answers.goal === "injury-free") {
    tags.push("recovery", "muscles", "magnesium");
    tools.push({ label: "Protein Calculator", to: "/tools/protein", icon: "Dumbbell" });
    guides.push({ label: "Runner's Guide to Injury Prevention", slug: "injury-prevention" });
    guides.push({ label: "The Runner's Stretching Guide", slug: "stretching-for-runners" });
    tips.push("Add 2-3 strength sessions per week — focus on glutes, core and calves");
  }

  if (answers.issue === "cramps-dehydration") {
    tags.push("hydration", "electrolytes", "magnesium");
    tools.push({ label: "Hydration Calculator", to: "/tools/hydration", icon: "Droplets" });
    tools.push({ label: "Electrolyte Calculator", to: "/tools/electrolytes", icon: "Zap" });
    tips.push("Start runs well-hydrated and take electrolytes for sessions over 60 minutes");
  } else if (answers.issue === "fatigue-recovery") {
    tags.push("protein", "recovery", "magnesium");
    tools.push({ label: "Protein Calculator", to: "/tools/protein", icon: "Dumbbell" });
    guides.push({ label: "Muscle Recovery After Running", slug: "muscle-recovery" });
    tips.push("Sleep is your #1 recovery tool — aim for 7-9 hours consistently");
    tips.push("Take 20-30g protein within 30 min of finishing your run");
  } else if (answers.issue === "injuries") {
    tags.push("recovery", "muscles", "shoes");
    guides.push({ label: "Injury Prevention Guide", slug: "injury-prevention" });
    guides.push({ label: "The Runner's Stretching Guide", slug: "stretching-for-runners" });
    tips.push("Consider seeing a sports physio for a movement screening");
    tips.push("Replace running shoes every 600-800 km");
  } else if (answers.issue === "nutrition") {
    tags.push("energy", "carbohydrates", "protein", "supplements");
    tools.push({ label: "Calories Calculator", to: "/tools/calories", icon: "Zap" });
    tools.push({ label: "Protein Calculator", to: "/tools/protein", icon: "Dumbbell" });
    guides.push({ label: "Running Nutrition Guide", slug: "running-nutrition" });
    guides.push({ label: "Essential Supplements", slug: "supplements-for-runners" });
    tips.push("Eat carb-rich meals 2-3 hours before running, protein within 30 min after");
  }

  if (answers.frequency === "5-6" || answers.frequency === "7+") {
    tags.push("protein", "recovery");
    tips.push("With high training volume, recovery nutrition is non-negotiable — don't skip post-run fueling");
  }

  const uniqueTags = [...new Set(tags)];
  const uniqueTools = tools.filter((t, i, arr) => arr.findIndex((x) => x.to === t.to) === i);
  const uniqueGuides = guides.filter((g, i, arr) => arr.findIndex((x) => x.slug === g.slug) === i).slice(0, 4);

  if (uniqueTools.length === 0) {
    uniqueTools.push({ label: "All Tools", to: "/tools", icon: "Wrench" });
  }

  return {
    title, archetype, description,
    tags: uniqueTags.length > 0 ? uniqueTags : ["supplements", "running"],
    tools: uniqueTools,
    guides: uniqueGuides,
    tips: [...new Set(tips)].slice(0, 5),
  };
};
