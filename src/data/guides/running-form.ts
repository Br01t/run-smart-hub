import { GuideContent } from "@/types/guide";
import guideRunningForm from "@/assets/guide-running-form.webp";

export const runningForm: GuideContent = {
  title: "How to Improve Your Running Form",
  description: "Fix your posture, arm swing, foot strike and breathing for more efficient, injury-free running.",
  tags: ["running", "muscles", "shoes"],
  heroImage: guideRunningForm,
  readTime: "8 min read",
  keyTakeaways: [
    "Slight forward lean from ankles, not waist",
    "Arms at 90°, relaxed shoulders, no crossing midline",
    "Land under your center of mass, not ahead of it",
  ],
  relatedTools: [
    { to: "/tools/bmi", label: "BMI Calculator" },
    { to: "/tools/calories", label: "Calories Calculator" },
  ],
  relatedGuides: [
    { slug: "running-cadence", label: "Running Cadence: Why Steps Per Minute Matter" },
    { slug: "injury-prevention", label: "Runner's Guide to Injury Prevention" },
  ],
  sections: [
    { 
      heading: "The Science: Kinetic Chain Alignment", 
      body: "Running form is the optimization of the 'Kinetic Chain'. Every inefficiency—like overstriding or crossing the midline—creates 'braking forces' that the body must overcome. By aligning the center of mass over the foot strike, we minimize the ground reaction force (GRF) and maximize energy return from the tendons.\n\nEnergy Leakage: 'Wobbling' of the hips or shoulders represents energy that should be moving you forward but is being lost laterally. A rigid, stable core is the foundation from which the limbs produce power.", 
      variant: "highlight" 
    },
    { 
      heading: "Posture & Proprioception", 
      body: "A slight forward lean from the ankles (not the waist) uses gravity to assist forward momentum. This 'falling' motion reduces the muscular effort required to initiate each stride. \n\nVertical Oscillation: Bouncing too high is wasted energy. The goal is a 'flat' running style where the head moves in a horizontal line rather than a wave. This is often achieved by increasing cadence and landing with a mid-foot strike.", 
      variant: "default", 
      listItems: [
        "Arm Swing: 90-degree angle, swinging forward-back; prevent the hands from crossing the chest midline.", 
        "Foot Strike: Landing under the center of mass reduces impact by 15-20%.", 
        "Core Stability: A rigid core prevents rotational energy leaks during the swing phase.",
        "Glute Activation: Driving the leg back using the glutes rather than 'pulling' forward with the hip flexors."
      ] 
    },
    {
      heading: "The 'Quiet' Rule",
      body: "The louder your footstrike, the more energy you are wasting on impact. Focus on 'quiet feet' to naturally improve your absorption mechanics and reduce injury risk.",
      variant: "tip"
    },
    { 
      heading: "The Practical Guide: What Should I Do?", 
      body: "Refine your form with these actionable cues.", 
      variant: "checklist", 
      listItems: [
        "The 'Tall' Cue: Imagine a string pulling your head toward the sky to lengthen your spine.", 
        "The 'Mid-Foot' Focus: Don't force a strike; just focus on bringing your foot back under your hips before it hits the ground.", 
        "Midline Check: Ensure your hands don't cross the center of your chest; this prevents rotational waste.", 
        "Diaphragmatic Breathing: Practice 'belly breathing' to ensure maximal oxygen uptake without shoulder tension.",
        "Check Your Form: Every 5-10 mins during a run, perform a quick 'scan' from head to toe to reset your posture."
      ] 
    },
  ],
  hubCategory: "shoes",
};
