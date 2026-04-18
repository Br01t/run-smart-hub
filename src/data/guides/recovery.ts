import { GuideContent } from "@/types/guide";
import guideRecovery from "@/assets/guide-recovery.webp";

export const muscleRecovery: GuideContent = {
  title: "Muscle Recovery After Running",
  description: "Scientific strategies to recover faster: stretching, foam rolling, nutrition and sleep.",
  tags: ["recovery", "massage", "protein", "top-recovery-2026"],
  heroImage: guideRecovery,
  readTime: "7 min read",
  keyTakeaways: [
    "Recovery is when your body adapts and grows stronger",
    "Foam rolling can reduce DOMS by up to 50%",
    "7-9 hours of sleep is non-negotiable for runners",
  ],
  relatedTools: [
    { to: "/tools/protein", label: "Protein Calculator" },
    { to: "/tools/hydration", label: "Hydration Calculator" },
  ],
  relatedGuides: [
    { slug: "supplements-for-runners", label: "Essential Supplements for Runners" },
    { slug: "injury-prevention", label: "Runner's Guide to Injury Prevention" },
  ],
  sections: [
    { 
      heading: "The Science: Sleep Architecture & Hormonal Reset", 
      body: "Recovery is not a passive state but a highly metabolically active phase. Research shows that 95% of daily growth hormone (GH) — the primary driver for tissue repair and muscle adaptation — is released during the N3 and N4 stages of 'Slow Wave' deep sleep.\n\nCortisol vs. Melatonin: Endurance training elevates cortisol (the stress hormone). If recovery is neglected, chronic cortisol elevation suppresses testosterone and blunts the 'Supercompensation' phase, leading to Overtraining Syndrome (OTS).", 
      variant: "highlight" 
    },
    { 
      heading: "Myofascial Release & Lymphatic Clearance", 
      body: "Foam rolling (SMR) has been clinically shown to reduce delayed onset muscle soreness (DOMS) by 33% by improving local blood flow. Similarly, active recovery (running at <50% of VO2 max) assists in the clearance of hydrogen ions and metabolic waste products from muscle tissue faster than complete rest.\n\nCryotherapy vs. Heat: Cold water immersion reduces acute inflammation and perception of pain, which is useful during multi-day races. However, for long-term adaptation, heat (sauna) improves plasma volume and nutrient delivery to recovering tissues.", 
      variant: "default", 
      listItems: [
        "Compression Therapy: External pressure (15-20 mmHg) assists venous return and reduces post-run swelling", 
        "Inflammation Management: Acute inflammation is an adaptation signal; avoid excessive NSAID use", 
        "Heart Rate Variability (HRV): The most objective measure of your systemic recovery status",
        "Tendon Health: Tendons have lower blood flow; they need 48h between high-load sessions to remodel."
      ] 
    },
    {
      heading: "Nutritional Window for Repair",
      body: "Glycogen resynthesis is most efficient in the first 45 minutes post-exercise (The Metabolic Window). Coupling 1.2g/kg of carbohydrates with 0.4g/kg of protein triggers a maximal hormonal response for recovery and adaptation.",
      variant: "tip"
    },
    { 
      heading: "The Practical Guide: What Should I Do?", 
      body: "Maximize your training adaptations by following these evidence-based recovery protocols.", 
      variant: "checklist", 
      listItems: [
        "Prioritize Sleep Hygiene: Aim for 7-9 hours. Keep your bedroom at 18°C (64°F) for optimal deep sleep.", 
        "Active Recovery Days: Perform 20-30 minutes of low-impact activity (walking/easy cycling) on rest days.", 
        "Sequential Nutrition: Consume a 3:1 carb-to-protein snack immediately after long runs (300+ kcal).", 
        "Post-Run SMR: Spend 10 minutes rolling your calves, quads, and TFL after every hard session.",
        "HRV Monitoring: If your HRV is 10% below your baseline for 3 consecutive days, reduce training intensity by 50%."
      ] 
    },
  ],
  hubCategory: "recovery",
};
