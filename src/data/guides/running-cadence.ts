import { GuideContent } from "@/types/guide";
import guideCadence from "@/assets/guide-cadence.webp";

export const runningCadence: GuideContent = {
  title: "Running Cadence: Why Steps Per Minute Matter",
  description: "Learn why cadence impacts performance, the 180 spm benchmark, and how to safely increase yours.",
  tags: ["running", "accessories"],
  heroImage: guideCadence,
  readTime: "6 min read",
  keyTakeaways: [
    "Higher cadence reduces impact forces on joints",
    "Optimal cadence is individual — 170-190 spm for most runners",
    "Increase by no more than 5% at a time",
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
      heading: "The Science: Stride Frequency & Impact Loading", 
      body: "Cadence is the number of steps per minute (spm). It is the primary lever for reducing 'Vertical Oscillation'. High vertical oscillation is wasted energy. Increasing cadence naturally shortens the stride, which brings the foot strike closer to the center of mass, reducing peak impact forces on the knee by up to 20%.\n\nGround Contact Time (GCT): Higher cadence reduces GCT. Elite runners spend less time on the ground, utilizing the 'natural springiness' of the Achilles tendon rather than slow muscle contraction.", 
      variant: "highlight" 
    },
    { 
      heading: "The 180 SPM Benchmark", 
      body: "While 180 spm is a common benchmark, it is individual. Optimal cadence is a function of leg length and pace. However, most recreational runners overstride at 150-160 spm, which increases injury risk.\n\nEnergy Conservation: Overstriding causes a 'braking' effect with every step. Moving your cadence from 160 to 170 spm can reduce the load on your hip and knee joints by millions of kilograms over a full marathon training cycle.", 
      variant: "default", 
      listItems: [
        "Stride Length vs. Frequency: Speed = Stride Length x Frequency. Frequency is safer to increase than length.", 
        "Braking Forces: Shorter strides eliminate the 'heel-strike' braking effect.", 
        "Neuromuscular Adaptations: High turnover trains the brain to coordinate faster leg movement.",
        "Metronomic Pacing: Using auditory cues helps 'reset' the brain's internal rhythm."
      ] 
    },
    {
      heading: "The 5% Rule",
      body: "Never increase your cadence by more than 5% at once. Sudden jumps can cause calf and Achilles strain as the body adjusts to the different loading patterns.",
      variant: "warning"
    },
    { 
      heading: "The Practical Guide: What Should I Do?", 
      body: "Increase your turnover safely with these drills.", 
      variant: "checklist", 
      listItems: [
        "Measure First: Use your watch to find your current average cadence on a flat, easy run.", 
        "Metronome Drills: Use a metronome app set to 5% higher than your current avg for 1-minute intervals.", 
        "Focus on 'Quick Feet': Think about lifting your feet off the ground faster, rather than pushing off harder.", 
        "Treadmill Training: Treadmills provide a constant speed, making it easier to focus purely on cadence changes.",
        "Downhill Cadence: Focus on high turnover when running downhill to avoid heavy impact."
      ] 
    },
  ],
  hubCategory: "shoes",
};
