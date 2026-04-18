import { GuideContent } from "@/types/guide";
import guideWinterRunning from "@/assets/guide-winter-running.webp";

export const winterRunning: GuideContent = {
  title: "How to Run Safely in Cold Weather",
  description: "A practical guide to winter running: layering systems, essential gear, breathing techniques and safety precautions for training through the coldest months.",
  tags: ["accessories", "running", "apparel", "top-apparel-2026"],
  heroImage: guideWinterRunning,
  readTime: "8 min read",
  keyTakeaways: [
    "Dress for 10°C warmer than the actual temperature",
    "Three layers (base, mid, outer) regulate temperature and moisture",
    "Reflective gear and headlamps are essential for low-light runs",
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
      heading: "The Science: Thermoregulation & Vasoconstriction", 
      body: "In cold weather, the body prioritizes core temperature by constricting blood flow to the extremities (hands/feet). This increases the risk of frostbite and reduces manual dexterity. \n\nCold-Induced Diuresis: Exposure to cold increases blood pressure, which signals the kidneys to filter excess fluid, leading to a higher rate of dehydration despite the lack of visible sweat. Proper winter hydration is often neglected because thirst cues are suppressed by the cold.", 
      variant: "highlight" 
    },
    { 
      heading: "The 3-Layer Performance System", 
      body: "The goal is managing the 'Microclimate' next to your skin. A base layer (merino) wicks, a mid-layer (fleece) insulates, and an outer shell (technical laminate) protects.\n\nMaterial Science: Cotton is the enemy of winter runners. It absorbs 27x its weight in water and loses all insulating properties when wet, leading to rapid heat loss via conduction.", 
      variant: "default", 
      listItems: [
        "Base Layer: 100% synthetic or Merino wool for moisture management.", 
        "Mid Layer: Polartec or similar grid-fleece to trap warm air pockets.", 
        "Outer Layer: Breathable but wind-resistant shell (Gore-Tex Infinium or similar).",
        "Extremities: 30% of heat loss occurs through the head and hands; lightweight gloves are mandatory below 5°C."
      ] 
    },
    {
      heading: "Bronchospasm Risk",
      body: "Cold, dry air can cause the airways to constrict (Exercise-Induced Bronchospasm). Wear a buff or neck gaiter over your mouth to pre-warm and humidify the air before it enters your lungs.",
      variant: "warning"
    },
    { 
      heading: "The Practical Guide: What Should I Do?", 
      body: "Stay safe and warm with these winter protocols.", 
      variant: "checklist", 
      listItems: [
        "The 10-Degree Rule: Dress as if it is 10°C (18°F) warmer than the actual thermometer reading.", 
        "Visibility: Reflective gear and a high-lumen headlamp are non-negotiable in winter low-light conditions.", 
        "Traction: If running on packed snow or ice, use traction aids (Microspikes) to prevent groin and calf strains.", 
        "Warm-Up Indoors: Perform your dynamic stretching inside to start the run with an already elevated heart rate.",
        "Post-Run Strip: Remove wet layers immediately after finishing to prevent a rapid drop in core temperature."
      ] 
    },
  ],
  hubCategory: "apparel",
};
