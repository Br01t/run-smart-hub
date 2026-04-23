import { GuideContent } from "@/types/guide";
import guideShoes from "@/assets/guide-shoes.webp";

export const choosingRunningShoes: GuideContent = {
  title: "How to Choose Running Shoes",
  seoTitle: "How to Choose Running Shoes 2026: Biomechanics & Foam Guide",
  seoDescription: "The ultimate scientific guide to running shoes. Learn about PEBA foams, stack heights, heel drop, and how to find the perfect pair using the Comfort Filter theory.",
  keywords: ["choosing running shoes", "running shoe science", "PEBA foam vs EVA", "carbon plated shoes", "heel to toe drop", "running shoe rotation"],
  description: "Complete guide to choosing the right running shoes for your foot type, terrain and performance goals.",
  tags: ["shoes", "running", "cushioning", "top-picks-2026"],
  heroImage: guideShoes,
  readTime: "12 min read",
  keyTakeaways: [
    "The 'Comfort Filter' is the best predictor of efficiency and injury prevention",
    "Modern PEBA foams return up to 87% of energy compared to 60% for standard EVA",
    "Heel drop (0-12mm) shifts the mechanical load between your knees and calves",
    "Rotate at least two pairs of shoes to reduce repetitive stress injuries by 39%",
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
      body: "Modern running shoe science has transitioned from 'motion control' to 'energy management'. When you run, your body experiences impact forces between 2.5x and 3.0x your body weight. The goal of a performance shoe is to manage these forces through specific material properties.\n\n**Energy Return Efficiency:** Traditional EVA (Ethylene-Vinyl Acetate) foam returns approximately 60-65% of the energy stored during compression. In contrast, advanced PEBA (Polyether Block Amide) foams — found in modern 'Super Shoes' — can return over 85%. This reduces the metabolic cost of running (Running Economy) by 1.8% to 1.9%, allowing for higher speeds at the same cardiovascular effort.", 
      variant: "highlight" 
    },
    { 
      heading: "Foam Technology: EVA vs. PEBA vs. TPU", 
      body: "Not all cushions are created equal. Understanding the midsole chemistry helps you choose the right tool for the job. \n\n- **EVA (Standard):** Reliable, durable, and firm. Best for daily training and stability. \n- **TPU (Injected):** More durable than EVA, better temperature resistance, and higher energy return. Often found in premium daily trainers. \n- **PEBA (Super Foam):** Ultralight and hyper-responsive. It provides the highest energy return but has a shorter lifespan (approx. 400-500km).", 
      variant: "default" 
    },
    { 
      heading: "Stack Height, Proprioception & Stability", 
      body: "High stack heights (>35mm) provide superior impact protection but can reduce 'ground feel' or proprioception. Studies show that extremely high stacks can increase ankle instability in certain runners due to the 'lever arm' effect of the foam.\n\n**The Comfort Filter Theory:** Pioneered by Dr. Benno Nigg, this theory suggests that the shoe that feels most comfortable and least restrictive to your natural gait is statistically the most efficient and least likely to cause injury. Neutral shoes allow for natural foot movement, while stability shoes use dual-density foams to slow the rate of pronation.", 
      variant: "default", 
      listItems: [
        "Compression Set: EVA foams lose ~10% of their cushioning every 100km", 
        "Stability Geometry: Modern stability comes from wider 'netsol' bases rather than hard medial posts", 
        "Gait Path: Stability shoes should support, not override, your natural 'preferred movement path'",
        "Heel Drop: Higher drop (10-12mm) shifts load to the knees; lower drop (0-4mm) shifts load to the calves and Achilles."
      ] 
    },
    { 
      heading: "The Carbon Plate Revolution", 
      body: "Carbon plates don't act like 'springs'. Instead, they work as a 'stiffening agent' that stabilizes the hyper-soft PEBA foam and acts as a lever to reduce the work required by the big toe and ankle joints. This shift in load means you must have strong calves and hips to handle the increased eccentric stress of plate-based racers.", 
      variant: "tip" 
    },
    { 
      heading: "Common Sizing Myths", 
      body: "Many runners buy shoes that are too small. Your feet swell significantly during a run, especially in the heat. \n\n- **The Thumbnail Rule:** You need at least 1cm of space between your longest toe and the end of the shoe. \n- **Width Matters:** If you see 'muffin topping' over the midsole, you need a wide (2E/4E) version. A constricted foot cannot properly engage the windlass mechanism (the foot's natural arch support).", 
      variant: "warning" 
    },
    { 
      heading: "The Shoefinder Checklist: How to Buy", 
      body: "Follow this protocol when testing new footwear to ensure a perfect match.", 
      variant: "checklist", 
      listItems: [
        "Shop in the Afternoon: Your feet are at their largest after a day of walking.", 
        "Wear Your Running Socks: Sock thickness changes the fit by half a size.", 
        "Remove the Insole: Stand on it. If your foot overflows the edges, the shoe is too narrow.", 
        "The Walk Test: If you feel a 'hot spot' or friction while walking, it will become a blister while running.",
        "Rotation Plan: Have one 'firm' shoe for short/fast runs and one 'soft' shoe for long/easy runs."
      ] 
    },
  ],
  hubCategory: "shoes",
};
