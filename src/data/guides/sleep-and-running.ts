import { GuideContent } from "@/types/guide";
import guideSleepRecovery from "@/assets/guide-sleep-recovery.webp";

export const sleepAndRunning: GuideContent = {
  title: "Sleep & Running Performance: The Science",
  description: "Why sleep is the most powerful (and free) performance enhancer for runners. Learn how sleep quality affects recovery, injury risk, and race-day performance.",
  tags: ["recovery", "protein", "muscles"],
  heroImage: guideSleepRecovery,
  readTime: "7 min read",
  keyTakeaways: [
    "One night of poor sleep reduces endurance performance by 11%",
    "Growth hormone peaks during deep sleep — essential for muscle repair",
    "Sleep extension (9+ hours) measurably improves sprint times and reaction time",
  ],
  relatedTools: [
    { to: "/tools/protein", label: "Protein Calculator" },
    { to: "/tools/hydration", label: "Hydration Calculator" },
  ],
  relatedGuides: [
    { slug: "muscle-recovery", label: "Muscle Recovery After Running" },
    { slug: "running-nutrition", label: "Running Nutrition: What to Eat Before, During & After" },
  ],
  sections: [
    { 
      heading: "The Science: Sleep Architecture & Neural Plasticity", 
      body: "Sleep is the only time the body enters a deep anabolic state. During N3 'Slow Wave' sleep, the pituitary gland releases massive pulses of Growth Hormone (GH), responsible for tissue repair and bone remodeling.\n\nThe Cognitive Load: REM sleep (Rapid Eye Movement) is where the brain consolidates motor patterns. If you are learning a new running form or technique, sleep deprivation will significantly delay your neuromuscular adaptation.", 
      variant: "highlight" 
    },
    { 
      heading: "Hormonal Dynamics: Cortisol vs. Melatonin", 
      body: "Chronic sleep disruption elevates nighttime cortisol, which blocks the anabolic response to training. \n\nGlycogen Re-saturation: Research suggests that sleep loss impairs the body's ability to resynthesize glycogen by up to 20%, meaning you start your next run with partially empty fuel tanks even if you ate correctly.", 
      variant: "default", 
      listItems: [
        "N3 Stage: The 'Physical Repair Shop' – essential for healing micro-tears in muscle fibers.", 
        "REM Stage: The 'Executive Shop' – critical for mental focus and race-day pacing strategy.", 
        "Sleep Banking: Getting extra sleep (9h+) in the week leading up to a race can buffer against race-night anxiety.",
        "Thermoregulation: A drop in core temperature is required to trigger sleep; hot showers before bed can help by causing vasodilation."
      ] 
    },
    {
      heading: "The Caffeine Cut-off",
      body: "Caffeine has a half-life of 5-6 hours. To protect your sleep architecture, avoid caffeine intake at least 8-10 hours before your planned bedtime.",
      variant: "warning"
    },
    { 
      heading: "The Practical Guide: What Should I Do?", 
      body: "Turn your bedroom into your most effective recovery tool.", 
      variant: "checklist", 
      listItems: [
        "Keep it Cool: Set your bedroom temperature to 18°C (64°F) for optimal deep sleep cycles.", 
        "Digital Sunset: Shutdown blue-light emitting screens (phones/TV) 60-90 minutes before sleep.", 
        "Magnesium Ritual: Take 200-400mg of Magnesium Glycinate 30 mins before bed to calm the nervous system.", 
        "Morning Light: Expose your eyes to sunlight within 30 mins of waking to lock in your circadian rhythm.",
        "Check Your HRV: If your Heart Rate Variability is low, prioritize an extra hour of sleep over an early morning run."
      ] 
    },
  ],
  hubCategory: "recovery",
};
