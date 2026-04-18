import { GuideContent } from "@/types/guide";
import guideInjury from "@/assets/guide-injury.webp";

export const injuryPrevention: GuideContent = {
  title: "Runner's Guide to Injury Prevention",
  description: "How to stay injury-free with smart training, strength work and proper recovery techniques.",
  tags: ["recovery", "massage", "muscles", "shoes", "top-recovery-2026"],
  heroImage: guideInjury,
  readTime: "8 min read",
  keyTakeaways: [
    "Never increase weekly mileage by more than 10%",
    "2-3 strength sessions per week dramatically reduce injuries",
    "Early intervention prevents chronic problems",
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
      heading: "The Science: The Load-Capacity Balance", 
      body: "Injury prevention is the science of managing 'Mechanical Load' versus 'Biological Capacity'. Every tissue (bone, tendon, muscle) has a load threshold. Injuries occur when that threshold is breached through sudden volume spikes or poor recovery.\n\nThe ACWR Model: The 'Acute:Chronic Workload Ratio' is the most scientifically robust predictor of injury. Ideally, your weekly load (Acute) should be between 0.8 and 1.3 times your average load over the last four weeks (Chronic). Ratios above 1.5 indicate a 'Danger Zone' where injury risk increases exponentially.", 
      variant: "highlight" 
    },
    { 
      heading: "Tendon Remodeling & Collagen Turnover", 
      body: "Unlike muscles, tendons have low blood flow and take 48-72 hours to remodel after a high-load session. This is why 'Rest Days' are non-negotiable for tendon health. \n\nBone Stress Balance: Bone is a dynamic tissue. Running causes micro-damage that, when repaired, makes the bone stronger (Mechanotransduction). However, if the rate of damage exceeds the rate of remodeling (often due to low energy availability), stress reactions and fractures occur.", 
      variant: "default", 
      listItems: [
        "Isometric Loading: 45-second holds are the gold standard for managing tendon pain", 
        "Strength-to-Weight Ratio: A higher ratio reduces the absolute load per step", 
        "Cadence (SPM): Increasing cadence by 5-10% reduces peak impact forces on the knee",
        "Proprioceptive Training: Improving balance reduces the risk of acute ligament strains by 45%."
      ] 
    },
    {
      heading: "The 'Niggle' vs. 'Pain' Distinction",
      body: "A 'niggle' is a 1-2/10 discomfort that usually disappears after 10 mins of warming up. True injury pain (3/10+) persists or worsens during the run. Learning to differentiate these is the hallmark of an experienced runner.",
      variant: "warning"
    },
    { 
      heading: "The Practical Guide: What Should I Do?", 
      body: "Follow these proactive principles to stay on the road and out of the clinic.", 
      variant: "checklist", 
      listItems: [
        "Implement the ACWR: Use an app or spreadsheet to ensure your weekly mileage doesn't spike by more than 15%.", 
        "Strength Train Twice Weekly: Focus on unilateral (single-leg) exercises like single-leg deadlifts and eccentric calf raises.", 
        "Daily Foot Core: Spend 2 minutes doing 'Short Foot' exercises to strengthen the intrinsic muscles that support your arch.", 
        "Listen to Your Body: If a pain is 3/10 or higher and persists the next morning, take 2 days of complete rest immediately.",
        "Surface Variety: Run on grass or trails for 20% of your volume to vary the mechanical stress on your joints."
      ] 
    },
  ],
  hubCategory: "recovery",
};
