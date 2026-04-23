import { GuideContent } from "@/types/guide";
import guideWinterRunning from "@/assets/guide-winter-running.webp";

export const winterRunning: GuideContent = {
  title: "How to Run Safely in Cold Weather",
  seoTitle: "Winter Running Guide 2026: Gear & Layering Science",
  seoDescription: "Don't let the cold stop you. Master the 3-layer system, learn about cold-induced diuresis, and discover the best fabrics for winter performance.",
  keywords: ["winter running gear", "running in the cold", "cold weather running layers", "merino wool vs synthetic", "running on ice safety", "winter hydration for runners"],
  description: "A practical guide to winter running: layering systems, essential gear, and safety precautions for training through the coldest months.",
  tags: ["accessories", "running", "apparel", "top-apparel-2026"],
  heroImage: guideWinterRunning,
  readTime: "12 min read",
  keyTakeaways: [
    "Dress for 10°C warmer than the actual temperature to account for internal heat production",
    "A 3-layer system (Base, Mid, Shell) creates a regulated microclimate near the skin",
    "Merino wool is the gold standard for thermal regulation and moisture management",
    "Cold air triggers diuresis (increased urination)—proper hydration is critical even without sweat",
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
      heading: "The Science: Thermoregulation", 
      body: "In cold weather, the body prioritizes core temperature by constricting blood flow to the extremities (vasoconstriction). This protects vital organs but leaves hands and feet vulnerable to frostbite. \n\n**Cold-Induced Diuresis:** Exposure to cold increases central blood pressure, which signals the kidneys to filter excess fluid. This is why you feel the need to urinate more in winter. Because you don't 'feel' as sweaty, runners often neglect hydration, leading to thick, viscous blood that impairs oxygen delivery to the muscles.", 
      variant: "highlight" 
    },
    { 
      heading: "The Material Science: Merino vs. Synthetic", 
      body: "Cotton is your greatest enemy in winter. It absorbs moisture and loses all insulating properties when wet, leading to rapid heat loss via conduction. \n\n- **Merino Wool:** Can absorb up to 35% of its weight in water before feeling 'wet'. It maintains warmth even when damp and is naturally anti-microbial. \n- **Synthetics (Polyester/Nylon):** Designed for maximum wicking. They dry faster than wool but provide less static warmth. The ideal system often uses a synthetic base for high-intensity runs and a merino base for long, easy miles.", 
      variant: "default" 
    },
    { 
      heading: "Managing the Microclimate", 
      body: "A successful winter kit is a 3-layer modular system. \n\n1. **Base Layer:** Wicks sweat away from the skin. \n2. **Mid Layer (Insulation):** Traps a layer of warm air. Grid-fleeces (like Polartec Power Grid) are superior because they provide warmth while allowing excess heat to escape. \n3. **Outer Layer (Protection):** A wind-resistant shell. Avoid fully waterproof jackets unless it's raining, as they trap sweat inside, creating a 'sauna effect' that eventually leaves you freezing.", 
      variant: "default", 
      listItems: [
        "Head & Hands: 30-40% of total heat loss can occur through the extremities", 
        "Traction: Carbide-tipped spikes are necessary for running on black ice", 
        "Visibility: Reflectivity is more important than color in low-winter-sun conditions",
        "Battery Life: Cold temperatures can drop GPS watch battery life by up to 50%."
      ] 
    },
    {
      heading: "Bronchospasm & Lung Health",
      body: "Cold, dry air can trigger 'Exercise-Induced Bronchospasm' (EIB). Wearing a buff or neck gaiter over your mouth creates a 'heat and moisture exchange' (HME), pre-warming and humidifying the air before it reaches your bronchial tubes.",
      variant: "warning"
    },
    {
      heading: "The 'Bold Start' Rule",
      body: "You should feel slightly chilly when you first step out of the door. If you are perfectly warm at the start, you will be dangerously overheating within 15 minutes. Plan for the temperature your body will reach at KM 5, not the temp at the start line.",
      variant: "tip"
    },
    { 
      heading: "Winter Running Checklist", 
      body: "Safety and gear protocols for sub-zero training.", 
      variant: "checklist", 
      listItems: [
        "Pre-Warm: Do 5 mins of dynamic drills *inside* your house before heading out.", 
        "Gear Check: Test your headlamp batteries; they drain faster in the cold.", 
        "Hydrate: Drink room-temperature electrolytes before and after your run.", 
        "Skin Protection: Use an anti-chafing balm or 'Vaseline' on exposed face skin to prevent windburn.",
        "Post-Run Protocol: Get out of wet clothes within 5 mins of stopping to prevent a core temp crash."
      ] 
    },
  ],
  hubCategory: "apparel",
};
