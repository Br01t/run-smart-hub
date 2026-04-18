import { GuideContent } from "@/types/guide";
import guideTrail from "@/assets/guide-trail.webp";

export const trailRunning: GuideContent = {
  title: "Getting Started with Trail Running",
  description: "A beginner's guide to trail running: gear, technique, safety and finding the right trails.",
  tags: ["shoes", "running", "accessories", "hydration", "top-gear-2026"],
  heroImage: guideTrail,
  readTime: "9 min read",
  keyTakeaways: [
    "Expect to be 20-40% slower on trails — that's normal",
    "Trail shoes with aggressive lugs are essential",
    "Always tell someone your route and expected return",
  ],
  relatedTools: [
    { to: "/tools/hydration", label: "Hydration Calculator" },
    { to: "/tools/calories", label: "Calories Calculator" },
  ],
  relatedGuides: [
    { slug: "choosing-running-shoes", label: "How to Choose Running Shoes" },
    { slug: "injury-prevention", label: "Runner's Guide to Injury Prevention" },
  ],
  sections: [
    { 
      heading: "The Science: Terrain Variability & Vertical Displacement", 
      body: "Trail running is a multi-dimensional sport. Unlike road running, which focuses on sagittal plane efficiency, trails require frontal plane stability and high eccentric strength for descending. Every 100m of climb is roughly equivalent to 1km of flat running in terms of energy expenditure.\n\Proprioceptive Demand: Technical trails require 3x more neural activation as the brain must process foot placement, balance, and obstacle avoidance simultaneously. This increases 'Perceived Exertion' (RPE) even if the cardiovascular load remains moderate.", 
      variant: "highlight" 
    },
    { 
      heading: "Traction Mechanics & Rock Protection", 
      body: "Trail footwear is a safety tool. Lug depth determines shear resistance on loose surfaces. 'Rock Plates' (hard TPU inserts) protect the metatarsals from sharp impacts.\n\nAltitude vs. Sea Level: If your trails involve elevation gain into the alpine, the partial pressure of oxygen drops. Even at 1,500m, your VO2 max can drop by 5-7%, requiring a significant reduction in pace to maintain an aerobic state.", 
      variant: "default", 
      listItems: [
        "Descending Mechanics: High eccentric load causes microscopic muscle tears; trail runners need higher protein.", 
        "Ankle Stability: Lateral movement on trails requires strong peroneal muscles to prevent inversion sprains.", 
        "Trekking Poles: Can reduce the load on leg joints by 25% on steep (>15%) climbs.",
        "Surface Compliance: Softer trails (mud/pine needles) absorb more energy than road, increasing metabolic cost."
      ] 
    },
    {
      heading: "The 'Hiking' Efficiency",
      body: "In trail running, hiking is a strategic skill, not a sign of weakness. On grades steeper than 12-15%, hiking is often more metabolically efficient than running, preserving your 'matchbook' for the runnable sections.",
      variant: "tip"
    },
    { 
      heading: "The Practical Guide: What Should I Do?", 
      body: "Transition to the trails safely and efficiently with this tactical guide.", 
      variant: "checklist", 
      listItems: [
        "Ditch the Pace: Run by effort (Heart Rate or RPE). Expect to be 20-50% slower than on the road.", 
        "Lookup Cue: Keep your eyes 3-5 meters ahead to pre-process terrain; don't just stare at your feet.", 
        "Step Lightly: Use shorter, quicker steps on technical sections to maintain balance and avoid 'locking' the knee.", 
        "Carry the Essentials: Always have a lightweight waterproof shell, whistle, and mobile phone with offline maps.",
        "Eco-Ethics: Stay on the trail to prevent erosion and respect local wildlife habitats."
      ] 
    },
  ],
  hubCategory: "shoes",
};
