import { GuideContent } from "@/types/guide";
import guideStretching from "@/assets/guide-stretching.webp";

export const stretchingForRunners: GuideContent = {
  title: "The Runner's Stretching Guide",
  seoTitle: "Stretching for Runners 2026: Science of Mobility",
  seoDescription: "Unlock your stride. Learn why static stretching before a run kills performance, the science of tendon stiffness, and the best post-run mobility routines.",
  keywords: ["stretching for runners", "dynamic vs static stretching", "hip flexor mobility", "running flexibility", "prevent running injuries", "yoga for runners"],
  description: "Dynamic vs static stretching: when to stretch, the best routines, and how flexibility impacts running efficiency.",
  tags: ["recovery", "muscles", "running"],
  heroImage: guideStretching,
  readTime: "12 min read",
  keyTakeaways: [
    "Dynamic stretching (potentiation) is mandatory before running to prime the nervous system",
    "Static stretching before a run reduces 'Tendon Stiffness', which lowers energy return",
    "Post-run static stretching triggers the Parasympathetic Nervous System for faster recovery",
    "Targeted ankle and hip mobility are the foundation of an efficient stride",
  ],
  relatedTools: [
    { to: "/tools/bmi", label: "BMI Calculator" },
    { to: "/tools/protein", label: "Protein Calculator" },
  ],
  relatedGuides: [
    { slug: "muscle-recovery", label: "Muscle Recovery After Running" },
    { slug: "injury-prevention", label: "Runner's Guide to Injury Prevention" },
  ],
  sections: [
    { 
      heading: "The Science: The Stretch-Shortening Cycle", 
      body: "Running is a series of explosive jumps. Your tendons act like rubber bands, storing and releasing elastic energy via the Stretch-Shortening Cycle (SSC). \n\n**The Tendon Stiffness Paradox:** To be an efficient runner, you actually want *stiff* tendons. High tendon stiffness allows for faster energy transfer and better Running Economy. Static stretching (holding a position) before a run 'softens' these springs, measurably reducing your power output and speed. Pre-run mobility must be **Dynamic** to increase blood flow without blunting the elastic recoil.", 
      variant: "highlight" 
    },
    { 
      heading: "Creep & Plastic Deformation", 
      body: "To actually increase the resting length of a muscle or fascia, you must apply low-load stress over time. This is known as 'Creep'. \n\n- **The 30-60 Second Rule:** Static stretching for less than 20 seconds only provides temporary neural relaxation. To achieve 'Plastic Deformation' (permanent change in tissue length), you must hold a stretch for at least 45-60 seconds in a relaxed, post-run state. This is when the collagen fibers in the fascia begin to realign.", 
      variant: "default" 
    },
    { 
      heading: "Neural Flossing & Reciprocal Inhibition", 
      body: "Many runners feel 'tight hamstrings' that never seem to loosen. This is often not a muscle issue, but a **Neural Tension** issue. \n\n- **Neural Flossing:** Techniques that slide the sciatic nerve through the soft tissue can resolve 'tightness' that traditional stretching cannot touch. \n- **Reciprocal Inhibition:** By contracting the glutes during a hip flexor stretch, you force the brain to send a 'relax' signal to the psoas, making the stretch significantly more effective.", 
      variant: "default", 
      listItems: [
        "Ankle Dorsiflexion: Essential for preventing shin splints and Achilles tendonitis", 
        "Thoracic Mobility: An open chest allows for maximal lung expansion during hard efforts", 
        "Fascial Hydration: Movement and stretching help move fluid through the extracellular matrix",
        "Parasympathetic Shift: Post-run stretching signals the body to stop producing cortisol."
      ] 
    },
    {
      heading: "Pre-Run Warning: No Static Holds",
      body: "Research shows that static stretching for more than 60 seconds per muscle group before an explosive activity can reduce strength by up to 5-10%. Save the long holds for the evening or post-run cool down.",
      variant: "warning"
    },
    {
      heading: "The 2-Minute Deep Squat",
      body: "The single best exercise for runner mobility is the 'Deep Squat' hold. Spending 2 minutes a day in a relaxed squat opens the hips, stretches the lower back, and improves ankle dorsiflexion simultaneously.",
      variant: "tip"
    },
    { 
      heading: "Daily Mobility Checklist", 
      body: "A structured routine to keep your kinetic chain moving freely.", 
      variant: "checklist", 
      listItems: [
        "Dynamic (Pre-Run): 10x Leg Swings (Front/Side), 10x Walking Lunges, 20x Calf Bounces.", 
        "Static (Post-Run): 60s Couch Stretch (Hips), 60s Pigeon Pose (Glutes), 60s Calf Stretch.", 
        "Neural (Evening): 10x Sciatic Nerve Glides per leg to maintain nerve mobility.", 
        "Breathing: Always exhale *into* the stretch to lower muscle spindle sensitivity.",
        "Consistency: 5 minutes every day is 100x better than 60 minutes once a month."
      ] 
    },
  ],
  hubCategory: "recovery",
};
