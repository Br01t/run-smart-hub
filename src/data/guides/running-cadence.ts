import { GuideContent } from "@/types/guide";
import guideCadence from "@/assets/guide-cadence.webp";

export const runningCadence: GuideContent = {
  title: "Running Cadence: Why Steps Per Minute Matter",
  seoTitle: "Running Cadence Guide 2026: Why 180 SPM is a Benchmark",
  seoDescription: "Unlock running efficiency with the science of cadence. Learn how increasing steps per minute reduces injury risk, vertical oscillation, and braking forces.",
  keywords: ["running cadence", "180 spm running", "increase steps per minute", "running vertical oscillation", "overstriding injury", "running efficiency"],
  description: "Learn why cadence impacts performance, the 180 spm benchmark, and how to safely increase your turnover.",
  tags: ["running", "accessories"],
  heroImage: guideCadence,
  readTime: "12 min read",
  keyTakeaways: [
    "Increasing cadence shortens your stride, bringing your foot strike closer to your center of mass",
    "High cadence (170-190 spm) reduces peak impact forces on the knee by up to 20%",
    "Vertical Oscillation (wasted upward energy) is significantly lower at higher cadences",
    "The 'Achilles Spring' is most efficient when ground contact time is minimized",
  ],
  relatedTools: [
    { to: "/tools/calories", label: "Calories Calculator" },
    { to: "/tools/bmi", label: "BMI Calculator" },
  ],
  relatedGuides: [
    { slug: "running-form", label: "How to Improve Your Running Form" },
    { slug: "running-heart-rate-zones", label: "Heart Rate Zone Training for Runners" },
  ],
  sections: [
    { 
      heading: "The Science: Stride Frequency", 
      body: "Cadence, or Stride Frequency, is the number of steps you take per minute (spm). It is the primary lever for reducing 'Vertical Oscillation'—the amount of 'bounce' in your stride. \n\n**Vertical Oscillation:** Every centimeter you move upward is energy that isn't moving you forward. High-cadence runners move more horizontally and less vertically, which dramatically improves Running Economy. By taking more steps, you reduce the 'impact transient' (the sharp spike of force) that travels through your skeleton with every landing.", 
      variant: "highlight" 
    },
    { 
      heading: "The Braking Force Effect", 
      body: "When you run with a low cadence, you are likely 'overstriding'—landing your heel far in front of your knee. This creates a 'Braking Force' that sends a shockwave up your leg and literally slows you down. \n\n- **Center of Mass:** Increasing your cadence naturally pulls your foot landing underneath your hips. This converts the vertical impact into forward momentum, turning a 'clunky' stride into a smooth, rolling motion.", 
      variant: "default" 
    },
    { 
      heading: "The Achilles 'Natural Spring'", 
      body: "Your Achilles tendon is the most efficient 'energy return' system in the human body. However, it only works if your ground contact time is short. \n\n- **Ground Contact Time (GCT):** High-cadence runners spend less time on the ground. This allows the tendon to act like a spring, storing and releasing elastic energy. If your cadence is too low, you 'sink' into the ground, forcing your muscles to do the work that your tendons should be doing for free.", 
      variant: "default", 
      listItems: [
        "Metabolic Cost: Overstriding increases the oxygen cost of running by ~5-8%", 
        "Injury Protection: Higher cadence is the #1 fix for 'Runner's Knee' (PFPS)", 
        "SPM Benchmark: Elite runners rarely drop below 175 spm, even at 'easy' paces",
        "Watch Data: Use your GPS watch to track 'Vertical Ratio' alongside Cadence."
      ] 
    },
    {
      heading: "The 180 SPM Myth",
      body: "180 spm is not a 'magic number' that applies to everyone. Taller runners with longer legs naturally have a slightly lower cadence, while shorter runners may be closer to 190. The goal is not a specific number, but a **range** (170-190) that feels efficient for your unique anatomy.",
      variant: "tip"
    },
    {
      heading: "Transition Warning: The 5% Rule",
      body: "Do not try to jump from 155 to 180 in one week. This will overwork your calves and Achilles, leading to tendonitis. Increase your average cadence by only **5% every 3-4 weeks** to allow your neuromuscular system to adapt.",
      variant: "warning"
    },
    { 
      heading: "Cadence Improvement Checklist", 
      body: "How to safely and effectively increase your turnover.", 
      variant: "checklist", 
      listItems: [
        "Measure Baseline: Find your average spm on a flat 5km run at Zone 2 effort.", 
        "Use a Metronome: Set a metronome app to 5 spm above your baseline for short blocks.", 
        "Shorten the Stride: Focus on taking 'smaller, quieter' steps rather than moving faster.", 
        "Uphill Sprints: Running up steep hills naturally forces a high cadence and proper form.",
        "Check Your Shoes: Heavy, stiff shoes can make high cadence feel more difficult; lighter trainers help."
      ] 
    },
  ],
  hubCategory: "shoes",
};
