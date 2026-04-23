import { GuideContent } from "@/types/guide";
import guideTrail from "@/assets/guide-trail.webp";

export const trailRunning: GuideContent = {
  title: "Getting Started with Trail Running",
  seoTitle: "Trail Running Guide 2026: Gear & Technique Science",
  seoDescription: "Escape the pavement. Master the science of trail running, from proprioceptive neural load to 'Power Hiking' efficiency and lug depth mechanics.",
  keywords: ["trail running for beginners", "trail running shoes guide", "power hiking technique", "trail running safety", "uphill running trails", "trail vs road running"],
  description: "A beginner's guide to trail running: gear, technique, safety and finding the right trails.",
  tags: ["shoes", "running", "accessories", "hydration", "top-gear-2026"],
  heroImage: guideTrail,
  readTime: "14 min read",
  keyTakeaways: [
    "Trail running requires 3x more neural activation due to proprioceptive demand",
    "On grades steeper than 15%, 'Power Hiking' is more metabolically efficient than running",
    "Lug depth and rubber compound determine shear resistance on loose or wet surfaces",
    "Expect to be 20-50% slower on trails—focus on time on feet rather than mileage",
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
      heading: "The Science: Neural Proprioception", 
      body: "Trail running is a multi-dimensional sport. Unlike road running, which focuses on sagittal plane efficiency (forward-back), trails require constant **Frontal Plane stability** and lateral control. \n\n**The Proprioceptive Load:** Technical trails force the brain to process foot placement, balance, and obstacle avoidance simultaneously. This increases your 'Neural Fatigue' significantly faster than road running, even if your heart rate remains in an easy zone. This is why trail runners often feel 'mentally drained' after a long mountain session.", 
      variant: "highlight" 
    },
    { 
      heading: "Vertical Displacement & Energy Cost", 
      body: "Gravity is the primary variable on the trails. Every 100 meters of vertical gain is roughly equivalent to 1 kilometer of flat running in terms of energy expenditure. \n\n- **Power Hiking:** Elite trail runners 'power hike' on steep inclines to preserve glycogen. By leaning forward and pushing off their thighs, they maintain a consistent heart rate, avoiding the 'Redline' that occurs when trying to run a 20% grade. Master the transition from running to hiking to dominate long trail races.", 
      variant: "default" 
    },
    { 
      heading: "Traction Mechanics: Lugs & Rubber", 
      body: "Your shoes are your primary safety equipment. \n\n- **Lug Depth:** 3-4mm lugs are for hard-pack trails; 5-8mm lugs are for deep mud and loose scree. \n- **Shear Resistance:** The compound of the rubber (e.g. Vibram Megagrip) is designed to create friction on wet rock. A road shoe lacks both the lug depth and the specialized compound, making it dangerous on technical descents. \n- **Rock Protection:** TPU rock plates protect the delicate metatarsals from 'bruising' caused by sharp stones.", 
      variant: "default", 
      listItems: [
        "Descending Form: Use short, quick steps and 'soft knees' to absorb impact", 
        "Ankle Strength: Single-leg balance drills are essential for preventing sprains", 
        "Hydration Shift: Mountain environments are often drier; increase fluid intake",
        "Altitude Drop: At 2,000m+, your VO2 max can drop by 10% due to lower oxygen pressure."
      ] 
    },
    {
      heading: "The 'Look Ahead' Rule",
      body: "Do not stare at your feet. Your brain needs to 'pre-process' the trail 3-5 meters ahead. By the time your feet reach a rock, your nervous system should already have a plan for how to step over or around it.",
      variant: "tip"
    },
    {
      heading: "Safety: The 10% Rule",
      body: "Never attempt a technical mountain trail alone without a whistle, a space blanket, and an offline map (like GPX on your watch). Mountain weather can change in minutes, and a minor ankle sprain can quickly become a life-threatening situation if you are unprepared.",
      variant: "warning"
    },
    { 
      heading: "Trail Transition Checklist", 
      body: "Tactical steps for your first off-road adventures.", 
      variant: "checklist", 
      listItems: [
        "Ignore the Pace: Your 5:00/km road pace might be 8:00/km on a technical trail.", 
        "Equip the Grip: Invest in trail-specific shoes with a protective toe cap.", 
        "Learn to Hike: Practice the transition from running to hiking on steep local hills.", 
        "Carry Water: Trails are slower; you will be 'out there' longer than you think.",
        "Leave No Trace: Always pack out your gel wrappers and stay on the designated paths."
      ] 
    },
  ],
  hubCategory: "shoes",
};
