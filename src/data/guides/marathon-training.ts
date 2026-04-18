import { GuideContent } from "@/types/guide";
import guideMarathon from "@/assets/guide-marathon.webp";

export const marathonTraining: GuideContent = {
  title: "Marathon Training Guide for Beginners",
  description: "Everything you need to know to train for your first marathon: plans, pacing, nutrition and gear.",
  tags: ["energy", "carbohydrates", "shoes", "apparel", "top-apparel-2026"],
  heroImage: guideMarathon,
  readTime: "12 min read",
  keyTakeaways: [
    "Build a base of 30-40 km/week for 3 months first",
    "Long runs are the cornerstone of marathon prep",
    "Nothing new on race day — test everything in training",
  ],
  relatedTools: [
    { to: "/tools/calories", label: "Calories Calculator" },
    { to: "/tools/hydration", label: "Hydration Calculator" },
  ],
  relatedGuides: [
    { slug: "running-nutrition", label: "Running Nutrition: What to Eat Before, During & After" },
    { slug: "choosing-running-shoes", label: "How to Choose Running Shoes" },
  ],
  sections: [
    { 
      heading: "The Science: The Physiology of 42.2K", 
      body: "Marathon success is determined by three metabolic variables: VO2 Max (aerobic ceiling), Lactate Threshold (sustainable intensity), and Running Economy (fuel efficiency). At marathon intensity, the body undergoes a profound shift in lipid metabolism as glycogen stores near depletion.\n\nThe Central Governor Theory: It's not just muscles that fatigue; the brain (CNS) suppresses muscle recruitment to protect vital organs. Training the body to utilize fat as a fuel source at higher intensities ('Fat Max') is critical to avoiding the 'Wall' at KM 32.", 
      variant: "highlight" 
    },
    { 
      heading: "Tapering & Supercompensation", 
      body: "A 3-week taper allows for the reversal of 'accumulated fatigue' without losing 'fitness'. During this phase, muscle glycogen stores can increase by up to 20% if paired with high-carbohydrate intake (8-10g/kg). \n\nThermoregulation: As glycogen burns, it releases water (3g of water per 1g of glycogen). This endogenous water source helps with hydration, but the heat generated requires efficient sweat evaporation. High humidity is the #1 performance killer in the marathon.", 
      variant: "default", 
      listItems: [
        "Negative Splits: Running the second half 1-3% faster is metabolically more efficient.", 
        "Cardiac Drift: Expect your HR to rise by 5-10% in the second half even at a constant pace.", 
        "Mitochondrial Biogenesis: Long runs (90-150 mins) are the primary stimulus for new energy organelles.",
        "Capillarization: High-volume easy running increases the density of capillaries surrounding muscle fibers."
      ] 
    },
    {
      heading: "The '30KM' Rule",
      body: "In training, your longest run doesn't need to be 42km. 28-32km is usually sufficient to trigger the necessary mitochondrial and structural adaptations without the 2-week recovery cost of a full marathon distance.",
      variant: "tip"
    },
    { 
      heading: "The Practical Guide: What Should I Do?", 
      body: "Execute your marathon preparation with this objective action plan.", 
      variant: "checklist", 
      listItems: [
        "Build Your Base: Have at least 3 months of 30-40km weekly volume before starting a specific 16-week plan.", 
        "The Long Run Is King: Focus on time on feet rather than distance. Target 2.5 to 3.5 hours for your peak runs.", 
        "Fueling Practice: Take 60-90g of carbs per hour in every long run to train your gut for race day.", 
        "Master the Taper: Reduce volume by 40% in Week 2 and 60% in Week 1, but keep the intensity (speed) high.",
        "Post-Race Recovery: No running for at least 7 days post-marathon to allow for structural tissue repair."
      ] 
    },
  ],
  hubCategory: "apparel",
};
