import { GuideContent } from "@/types/guide";
import guideStretching from "@/assets/guide-stretching.webp";

export const stretchingForRunners: GuideContent = {
  title: "The Runner's Stretching Guide",
  description: "Dynamic vs static stretching: when to stretch, the best routines, and how flexibility prevents injuries.",
  tags: ["recovery", "muscles", "running"],
  heroImage: guideStretching,
  readTime: "7 min read",
  keyTakeaways: [
    "Dynamic stretching before, static stretching after running",
    "Consistent stretching reduces injury risk by up to 30%",
    "Focus on hip flexors, hamstrings and calves",
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
      heading: "The Science: Neural Potentiation vs. Tissue Length", 
      body: "Stretching for runners must be phase-specific. Pre-run, the goal is 'Potentiation' (priming the nervous system); post-run, the goal is 'Parasympathetic Shift' and fascial reset.\n\nThe Stretch-Shortening Cycle (SSC): Running is an explosive act where tendons act as springs. Static stretching before a run can reduce 'tendon stiffness', which is actually detrimental to energy storage and return (Running Economy). In contrast, dynamic stretching increases core temperature and improves muscle fiber sliding without blunting the elastic recoil.", 
      variant: "highlight" 
    },
    { 
      heading: "Fascial Elasticity & Range of Motion", 
      body: "Consistent mobility work improves the quality of the 'sarcomeres' (muscle units) and prevents excessive scar tissue in the fascia. For runners, the hip flexors and ankles (dorsiflexion) are critical. \n\nReciprocal Inhibition: When you stretch the hip flexors, the brain sends a signal to relax the glutes. This allows for a more powerful hip extension during the 'toe-off' phase, directly increasing stride length without increasing effort.", 
      variant: "default", 
      listItems: [
        "Eccentric Loading: Stretches under load (like calf drops) are superior for tendon remodeling.", 
        "Ankle Mobility: Lack of dorsiflexion is a primary cause of shin splints and knee stress.", 
        "Proprioceptive Training: Improving balance reduces the risk of acute ligament strains by 45%.",
        "Neural Flossing: Sciatic nerve mobility can resolve 'tight hamstring' sensations that are actually neural in origin."
      ] 
    },
    {
      heading: "The '30-Second' Sweet Spot",
      body: "For static stretching to actually alter tissue length (creep), a minimum of 30 seconds is required per hold. Holding for 60-90 seconds is even more effective for chronic tightness in the calves and hip flexors.",
      variant: "tip"
    },
    { 
      heading: "The Practical Guide: What Should I Do?", 
      body: "Implement this 10-minute daily routine to unlock your running efficiency.", 
      variant: "checklist", 
      listItems: [
        "Pre-Run: Spend 5 mins on DYNAMIC moves only (leg swings, walking lunges, calf bounces).", 
        "Post-Run: Perform 5-10 mins of STATIC stretching once your HR has dropped below 100 BPM.", 
        "Daily Ritual: Spend 2 mins in a 'Deep Squat' position daily to maintain hip and ankle ROM.", 
        "Consistency Over Intensity: A short 5-min daily session is 10x more effective than a rare 60-min yoga class.",
        "Target Areas: Focus on: Hip Flexors (Ilio-psoas), Calves (Gastrocnemius), and Glutes."
      ] 
    },
  ],
  hubCategory: "recovery",
};
