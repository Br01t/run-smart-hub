import { GuideContent } from "@/types/guide";
import guideShoes from "@/assets/guide-shoes.webp";

export const choosingRunningShoes: GuideContent = {
  title: "How to Choose Running Shoes",
  description: "Complete guide to choosing the right running shoes for your foot type, terrain and goals.",
  tags: ["shoes", "running", "cushioning", "top-picks-2026"],
  heroImage: guideShoes,
  readTime: "8 min read",
  keyTakeaways: [
    "Your foot strike type determines the support you need",
    "Drop and cushioning should match your running style",
    "Replace shoes every 600-1000 km",
  ],
  relatedTools: [
    { to: "/tools/bmi", label: "BMI Calculator" },
    { to: "/tools/calories", label: "Calories Calculator" },
  ],
  relatedGuides: [
    { slug: "muscle-recovery", label: "Muscle Recovery After Running" },
    { slug: "injury-prevention", label: "Runner's Guide to Injury Prevention" },
  ],
  sections: [
    { 
      heading: "The Science: Biomechanics & Energy Dynamics", 
      body: "Modern running shoe science has transitioned from 'motion control' to 'energy management'. When you run, your body experiences impact forces between 2.5x and 3.0x your body weight (Newtons). The goal of a performance shoe is to manage these forces through specific material properties.\n\nEnergy Return Efficiency: Traditional EVA (Ethylene-Vinyl Acetate) foam returns approximately 60-65% of the energy stored during compression. In contrast, advanced PEBA (Polyether Block Amide) foams — found in modern 'Super Shoes' — can return between 80% and 87%. This reduces the metabolic cost of running (Running Economy) by an average of 1.8% to 1.9%, allowing for higher speeds at the same cardiovascular effort.", 
      variant: "highlight" 
    },
    { 
      heading: "Stack Height, Proprioception & Stability", 
      body: "High stack heights (>35mm) provide superior impact protection but can reduce 'ground feel' or proprioception. Studies show that extremely high stacks can actually increase ankle instability in certain runners due to the 'lever arm' effect of the foam.\n\nThe 'Comfort Filter' theory remains the most scientifically valid approach: the shoe that feels most comfortable and least restrictive to your natural gait is statistically the most efficient and least likely to cause injury. Neutral shoes allow for natural foot movement, while stability shoes use dual-density foams to slow the rate of pronation.", 
      variant: "default", 
      listItems: [
        "Compression Set: EVA foams lose ~10% of their cushioning every 100km", 
        "PEBA Decay: Performance gains from PEBA foams degrade significantly after 450km", 
        "Gait Path: Stability shoes should support, not override, your natural 'preferred movement path'",
        "Heel Drop: Higher drop (10-12mm) shifts load to the knees; lower drop (0-4mm) shifts load to the calves and Achilles."
      ] 
    },
    { 
      heading: "Kinetic Chain Integration", 
      body: "Your choice of shoe affects the entire kinetic chain. A stiffer carbon-plated shoe reduces the workload on the metatarsophalangeal (MTP) joints but increases the work required by the calves and hips. Understanding this 'load shift' is critical for injury prevention. If you transition to a plate-based racer, you must gradually strengthen your posterior chain to handle the increased eccentric load.", 
      variant: "tip" 
    },
    { 
      heading: "The Practical Guide: What Should I Do?", 
      body: "How do you apply this theory to your daily running routine? Here is the direct action plan for selecting and managing your footwear.", 
      variant: "checklist", 
      listItems: [
        "Use the 'Thumbnail Rule': Ensure 1cm of space at the front. Feet swell up to 0.5 sizes during long runs.", 
        "Adopt a Shoe Rotation: Rotating between 3 different models reduces injury risk by 39% by varying mechanical loads.", 
        "Measure Life by Sensation, not KM: If the foam feels 'flat' or you feel unusual joint soreness, the midsole is likely at its limit.", 
        "Match the shoe to the session: Use EVA-based 'Daily Trainers' for 80% of your runs, and save PEBA-based 'Speed Shoes' for key intervals.",
        "Surface Matching: Don't wear road shoes on technical trails; the lack of lateral stability increases ankle sprain risk by 2.5x."
      ] 
    },
  ],
  hubCategory: "shoes",
};
