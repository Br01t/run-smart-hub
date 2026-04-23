import { GuideContent } from "@/types/guide";
import guideMarathon from "@/assets/guide-marathon.webp";

export const marathonTraining: GuideContent = {
  title: "Marathon Training Guide for Beginners",
  seoTitle: "Marathon Training Guide 2026: 42.2K Science & Strategy",
  seoDescription: "The complete roadmap to your first marathon. Scientific training blocks, tapering strategies, race-day pacing, and how to avoid 'The Wall'.",
  keywords: ["marathon training for beginners", "marathon training plan", "tapering for marathon", "marathon pacing strategy", "avoiding the wall marathon", "marathon fueling"],
  description: "Everything you need to know to train for your first marathon: plans, pacing, nutrition and gear.",
  tags: ["energy", "carbohydrates", "shoes", "apparel", "top-apparel-2026"],
  heroImage: guideMarathon,
  readTime: "16 min read",
  keyTakeaways: [
    "Structure your training into four distinct blocks: Base, Strength, Specific, and Taper",
    "The 'Wall' is a physiological event where glycogen is depleted—prevent it with 60-90g carbs/hour",
    "Tapering (reducing volume, keeping intensity) is essential for 'Supercompensation'",
    "A negative split (second half faster) is the gold standard for marathon efficiency",
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
      heading: "The Physiology of 42.2K", 
      body: "Marathon success is determined by three metabolic variables: VO2 Max (aerobic ceiling), Lactate Threshold (sustainable intensity), and Running Economy (fuel efficiency). \n\n**The 'Fat Max' Shift:** At marathon intensity, the body must efficiently oxidize fat alongside glycogen. If you rely too heavily on glycogen early on, you will inevitably hit 'The Wall' at KM 32-35. Training the body to utilize lipids at higher speeds is the primary goal of the Sunday Long Run.", 
      variant: "highlight" 
    },
    { 
      heading: "The 16-Week Blueprint: Training Blocks", 
      body: "Don't just run miles; build them with purpose. \n\n1. **Base Phase (Weeks 1-4):** Focus on volume and structural integrity. All runs are easy (Zone 2). \n2. **Strength/Hill Phase (Weeks 5-8):** Introduce hill repeats and 'Strength Endurance' sessions to toughen connective tissues. \n3. **Specific Phase (Weeks 9-13):** High-volume intervals and 'Marathon Pace' blocks within long runs. \n4. **Taper Phase (Weeks 14-16):** Reducing fatigue while maintaining 'pop' in the legs.", 
      variant: "default" 
    },
    { 
      heading: "Tapering Science: The Supercompensation Phase", 
      body: "Tapering is NOT just resting. It is a strategic reduction in volume (miles) while maintaining frequency and intensity (speed). \n\n- **Glycogen Super-loading:** During the taper, your muscles can store up to 20% more glycogen than usual because they aren't being depleted daily. \n- **Red Blood Cell Volume:** Reduced training load allows your plasma volume to expand and red blood cell count to recover, maximizing oxygen delivery to the muscles on race day.", 
      variant: "default", 
      listItems: [
        "Negative Splits: A 1-3% faster second half prevents early 'lactic acid' accumulation", 
        "Cardiac Drift: Your HR will rise 10-15bpm over 4 hours due to heat and dehydration", 
        "The 2.5-Hour Ceiling: Most training benefits for the long run peak at 2.5 to 3 hours",
        "Mitochondrial Density: High-volume easy running is the only way to build more energy organelles."
      ] 
    },
    {
      heading: "Pacing Strategy: The 10/10/10/2.2 Rule",
      body: "Break the race into mental blocks. First 10 miles: Stay relaxed, feel 'slow'. Second 10 miles: Find your rhythm and settle into the 'work'. Final 10 miles: The race begins—this is where your training holds you together. Final 2.2K: Pure grit.",
      variant: "tip"
    },
    {
      heading: "The 'New on Race Day' Trap",
      body: "Never wear new shoes, use a new brand of gel, or try new socks on race day. Blisters or GI distress that feel minor at KM 5 can be race-ending at KM 30. Your long runs are 'dress rehearsals'—treat them as such.",
      variant: "warning"
    },
    { 
      heading: "Pre-Race Checklist: The Final 48 Hours", 
      body: "Execute these steps to ensure you arrive at the start line ready to perform.", 
      variant: "checklist", 
      listItems: [
        "Carb Load: 8-10g/kg of body weight in the 48h before the gun goes off.", 
        "Hydration: Sip electrolyte-rich fluids; avoid plain water to prevent hyponatremia.", 
        "Sleep: Prioritize the sleep TWO nights before the race; the night-before jitters are normal.", 
        "Logistics: Lay out your gear, bib, and gels the night before to reduce morning stress.",
        "Warmup: 5-10 mins of light mobility; don't waste energy running 5K before a 42K."
      ] 
    },
  ],
  hubCategory: "apparel",
};
