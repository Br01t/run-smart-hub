import { GuideContent } from "@/types/guide";
import guideHillTraining from "@/assets/guide-hill-training.webp";

export const hillTraining: GuideContent = {
  title: "Hill Training for Runners",
  description: "Master uphill repeats, downhill technique and build explosive strength with targeted hill workouts.",
  tags: ["running", "muscles", "energy"],
  heroImage: guideHillTraining,
  readTime: "8 min read",
  keyTakeaways: [
    "Hill repeats build strength equivalent to gym work",
    "Uphill running improves VO2max faster than flat intervals",
    "Downhill technique is a skill — practice it deliberately",
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
      heading: "The Science: Eccentric Loading & Power Output", 
      body: "Hill training is 'strength training in disguise'. Uphill running forces the body to overcome gravity, recruiting more Type II (fast-twitch) muscle fibers than flat running. This builds explosive power and improves Running Economy.\n\nMitochondrial Density: High-intensity hill repeats trigger rapid mitochondrial adaptation in the quads and glutes, significantly increasing your 'aerobic ceiling' (VO2 Max).", 
      variant: "highlight" 
    },
    { 
      heading: "Uphill vs. Downhill Mechanics", 
      body: "Uphill running requires a shorter stride and driving the knees higher. Downhill running provides a massive 'eccentric load' that strengthens tendons and bones.\n\nBiomechanics of the Climb: Hill running naturally encourages a mid-foot strike and proper posture. Many coaches use hills to 'fix' a runner's form because it is nearly impossible to overstride while running uphill.", 
      variant: "default", 
      listItems: [
        "VO2 Max: Hill repeats are the most efficient way to reach and sustain max heart rate.", 
        "Eccentric Strength: Downhill running prepares legs for the muscle damage of a marathon race.", 
        "Stride Power: The increased push-off required on hills translates to longer strides on the flat.",
        "Mental Resilience: Hills train the brain to maintain effort when the perceived exertion is high."
      ] 
    },
    {
      heading: "The Downhill Warning",
      body: "Downhill running causes significantly more muscle damage (DOMS) than uphill. Limit specific downhill speed training to once every 10-14 days to allow for structural repair.",
      variant: "warning"
    },
    { 
      heading: "The Practical Guide: What Should I Do?", 
      body: "Incorporate hills into your weekly routine.", 
      variant: "checklist", 
      listItems: [
        "The Perfect Hill: Find a 4-6% grade for 'Short Hills' (30-60 secs) to build power.", 
        "Long Hills: Use a 2-3% grade for 'Aerobic Hills' (2-5 mins) to build endurance.", 
        "The Warm-Up: Never do hill sprints cold; perform 15-20 mins of easy jogging first.", 
        "The Workout: Start with 6 repeats of 45 seconds at 90% effort. Jog down very slowly for recovery.",
        "Form Cue: Look at the top of the hill, not your feet, to maintain an open chest and lengthening spine."
      ] 
    },
  ],
  hubCategory: "shoes",
};
