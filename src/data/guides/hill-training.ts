import { GuideContent } from "@/types/guide";
import guideHillTraining from "@/assets/guide-hill-training.webp";

export const hillTraining: GuideContent = {
  title: "Hill Training for Runners",
  seoTitle: "Hill Training for Runners 2026: Strength & Power Guide",
  seoDescription: "Unlock explosive power with hill training. Learn the science of Type II fiber recruitment, downhill mechanics, and the best hill workouts for marathoners.",
  keywords: ["hill training for runners", "hill repeats benefits", "uphill running technique", "downhill running mechanics", "running power workouts", "strength training for runners"],
  description: "Master uphill repeats, downhill technique and build explosive strength with targeted hill workouts.",
  tags: ["running", "muscles", "energy"],
  heroImage: guideHillTraining,
  readTime: "12 min read",
  keyTakeaways: [
    "Hills are 'strength training in disguise'—building power without the gym",
    "Uphill running recruits more Type II (fast-twitch) muscle fibers",
    "Downhill running provides an eccentric load that toughens tendons and bones",
    "Hill work naturally corrects overstriding and improves running form",
  ],
  relatedTools: [
    { to: "/tools/calories", label: "Calories Calculator" },
    { to: "/tools/hydration", label: "Hydration Calculator" },
  ],
  relatedGuides: [
    { slug: "running-form", label: "How to Improve Your Running Form" },
    { slug: "marathon-training", label: "Marathon Training Guide for Beginners" },
  ],
  sections: [
    { 
      heading: "The Science: Fiber Recruitment & Power", 
      body: "Hill training is one of the most efficient ways to increase your 'Power Output'. When running uphill, your body must overcome gravity, which requires a higher force production per step. This forces the recruitment of Type II (fast-twitch) muscle fibers that are often neglected during easy, flat runs. \n\n**Mitochondrial Biogenesis:** High-intensity hill repeats trigger rapid adaptations in the quads, glutes, and calves, increasing both your anaerobic capacity and your 'aerobic ceiling' (VO2 Max).", 
      variant: "highlight" 
    },
    { 
      heading: "Concentric vs. Eccentric Dynamics", 
      body: "Running involves two primary phases of muscle contraction. \n\n- **Uphill (Concentric):** Focuses on power and push-off. It strengthens the posterior chain (glutes, hamstrings, calves) with lower impact on the joints. \n- **Downhill (Eccentric):** Focuses on stability and braking. The muscles are lengthening under load, which causes significant micro-damage (DOMS). While painful, this eccentric stress is what makes your legs 'bulletproof' for the final 10km of a marathon.", 
      variant: "default" 
    },
    { 
      heading: "Biomechanics of the Climb", 
      body: "Hill running is a natural 'form corrector'. Because of the incline, it is biomechanically impossible to overstride (landing your foot too far in front of your body). This encourages a mid-foot strike and a higher knee drive. \n\n**Key Mechanics:** \n1. **Shorten the Stride:** Aim for a higher cadence rather than longer steps. \n2. **Drive the Arms:** Your arm swing provides the necessary torque to pull your center of gravity up the hill. \n3. **Posture:** Keep your chest open and eyes on the horizon (not your feet) to maintain optimal lung expansion.", 
      variant: "default", 
      listItems: [
        "VO2 Max: Hill repeats sustain 90-95% HR max more comfortably than flat track sessions", 
        "Running Economy: Improved power translates to 'easier' paces on flat ground", 
        "Tendon Resilience: The high forces of hill work strengthen the Achilles and Patellar tendons",
        "Neuromuscular Path: Hills improve the 'brain-to-muscle' communication speed."
      ] 
    },
    {
      heading: "The Downhill Safety Warning",
      body: "Specific downhill speed training can lead to stress fractures or severe muscle tears if overdone. Limit high-speed downhill efforts to once every 14 days and always ensure you are landing softly with slightly bent knees to absorb the impact.",
      variant: "warning"
    },
    {
      heading: "Variation: Short Sprints vs. Long Climbs",
      body: "Short Hills (30-60s) focus on pure power and neuromuscular speed. Long Hills (2-5 mins) focus on aerobic capacity and 'Threshold' strength. Both should have a place in a balanced marathon training block.",
      variant: "tip"
    },
    { 
      heading: "Hill Workout Checklist", 
      body: "Integrate these specific sessions into your monthly training plan.", 
      variant: "checklist", 
      listItems: [
        "Incline Choice: Find a 4-8% grade hill; anything steeper compromises form.", 
        "Recovery: Walk or very slow jog back down. The recovery should be at least 2x the work duration.", 
        "The Starter: 6x 45-second uphill repeats at 90% effort.", 
        "Progression: Add 1-2 repeats every two weeks as you get stronger.",
        "The 'Secret' Session: Run 5K on a hilly route at 'steady' effort (Zone 3) to build rhythm."
      ] 
    },
  ],
  hubCategory: "shoes",
};
