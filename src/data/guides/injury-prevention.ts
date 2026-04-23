import { GuideContent } from "@/types/guide";
import guideInjury from "@/assets/guide-injury.webp";

export const injuryPrevention: GuideContent = {
  title: "Runner's Guide to Injury Prevention",
  seoTitle: "Injury Prevention for Runners 2026: The Science of Load",
  seoDescription: "Stay on the road with evidence-based injury prevention. Learn about the ACWR model, isometric tendon loading, and how to avoid the 'Overtraining Danger Zone'.",
  keywords: ["running injury prevention", "ACWR model running", "isometric exercises for tendons", "RED-S in runners", "preventing stress fractures", "running biomechanics"],
  description: "How to stay injury-free with smart training, strength work and proper recovery techniques.",
  tags: ["recovery", "massage", "muscles", "shoes", "top-recovery-2026"],
  heroImage: guideInjury,
  readTime: "14 min read",
  keyTakeaways: [
    "Manage your Acute:Chronic Workload Ratio (ACWR) between 0.8 and 1.3",
    "Strength training (2-3x/week) reduces overuse injuries by nearly 50%",
    "Tendons need 48-72h of 'low-load' time to remodel after hard efforts",
    "Early detection of 'niggles' is the key to avoiding long-term layoffs",
  ],
  relatedTools: [
    { to: "/tools/bmi", label: "BMI Calculator" },
    { to: "/tools/protein", label: "Protein Calculator" },
  ],
  relatedGuides: [
    { slug: "muscle-recovery", label: "Muscle Recovery After Running" },
    { slug: "choosing-running-shoes", label: "How to Choose Running Shoes" },
  ],
  sections: [
    { 
      heading: "The Science: Load-Capacity Balance", 
      body: "Injury prevention is the science of managing 'Mechanical Load' versus 'Biological Capacity'. Every tissue (bone, tendon, muscle) has a load threshold. Injuries occur when that threshold is breached through sudden volume spikes or poor recovery.\n\n**The ACWR Model:** The 'Acute:Chronic Workload Ratio' is the most robust predictor of injury. Your weekly load (Acute) should be 0.8 to 1.3 times your average load over the last four weeks (Chronic). Ratios above 1.5 indicate a 'Danger Zone' where injury risk increases exponentially.", 
      variant: "highlight" 
    },
    { 
      heading: "Tendon Health: Isometric Loading", 
      body: "Tendons are not like muscles; they have low blood flow and remodel slowly. If you have a 'cranky' Achilles or patellar tendon, complete rest is often the wrong answer. \n\n- **Isometric Holds:** Holding a heavy calf raise or wall sit for 45 seconds creates an analgesic (pain-killing) effect and stimulates collagen alignment without the inflammatory stress of repetitive jumping/running. \n- **Eccentric Focus:** Slowing down the 'lowering' phase of strength exercises builds the structural integrity needed to handle the 3-8x bodyweight forces of running.", 
      variant: "default" 
    },
    { 
      heading: "The Kinetic Chain & Muscle Synergies", 
      body: "Most running injuries are 'referred'. Knee pain is often a hip/glute stability issue; plantar fasciitis is often a calf tightness issue. \n\n- **The Glute Medius:** This muscle controls the lateral stability of your pelvis. If it's weak, your knee collapses inward (Valgus), leading to IT Band Syndrome or Runner's Knee. \n- **Foot Core:** Your foot has intrinsic muscles that support the arch. 'Short foot' exercises and toe yoga are essential for runners using modern, high-stack shoes that may 'lazy' the foot's natural mechanics.", 
      variant: "default", 
      listItems: [
        "Unilateral Strength: Always train single-leg to fix side-to-side imbalances", 
        "Cadence Fix: Increasing cadence by 5-10% reduces peak knee loading by ~20%", 
        "Bone Stress: Ensure adequate Calcium and Vitamin D intake to support remodeling",
        "Proprioception: Balance work on a foam pad reduces ankle sprain risk significantly."
      ] 
    },
    {
      heading: "RED-S: The Energy Availability Warning",
      body: "Relative Energy Deficiency in Sport (RED-S) occurs when your caloric intake doesn't match your training output. This shuts down hormonal health, leading to low bone density and frequent stress fractures. If you are constantly fatigued or suffering from repeated bone issues, consult a sports dietitian immediately.",
      variant: "warning"
    },
    {
      heading: "Niggle vs. Injury: The 24-Hour Rule",
      body: "If a pain is 3/10 or higher and is still present the morning after a run, it's an injury. Stop immediately for 48-72 hours. If it disappears after a 10-minute warmup and stays at 1/10, it's likely a niggle that needs targeted mobility work.",
      variant: "tip"
    },
    { 
      heading: "Prevention Protocol: Actionable Checklist", 
      body: "Integrate these habits into your weekly routine to stay bulletproof.", 
      variant: "checklist", 
      listItems: [
        "ACWR Tracking: Never increase weekly mileage by more than 10-15%.", 
        "Strength: 2x 30-min sessions focusing on Glutes, Hamstrings, and Calves.", 
        "Dynamic Warmup: 5 mins of leg swings and 'zombie walks' before every run.", 
        "Post-Run Mobility: Focus on Hip Flexors and TFL—the 'tight spots' for most runners.",
        "Sleep Hygiene: 8+ hours. Tissue repair happens during deep sleep, not on the foam roller."
      ] 
    },
  ],
  hubCategory: "recovery",
};
