import { GuideContent } from "@/types/guide";
import guideRecovery from "@/assets/guide-recovery.webp";

export const muscleRecovery: GuideContent = {
  title: "Muscle Recovery After Running",
  seoTitle: "Muscle Recovery for Runners: 2026 Scientific Guide",
  seoDescription: "Maximize training gains with evidence-based recovery. Learn about HRV, SMR, protein synthesis, and the science of deep sleep for elite performance.",
  keywords: ["muscle recovery", "runner recovery", "HRV training", "foam rolling science", "post-run nutrition", "DOMS prevention"],
  description: "Scientific strategies to recover faster: stretching, foam rolling, nutrition and sleep.",
  tags: ["recovery", "massage", "protein", "top-recovery-2026"],
  heroImage: guideRecovery,
  readTime: "12 min read",
  keyTakeaways: [
    "Recovery is when your body adapts and grows stronger (Supercompensation)",
    "Slow-wave sleep (N3/N4) is responsible for 95% of Growth Hormone release",
    "Foam rolling (SMR) reduces DOMS and improves range of motion without strength loss",
    "Heart Rate Variability (HRV) is the most objective metric for systemic recovery",
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
      heading: "The Supercompensation Principle", 
      body: "Training is a catabolic process (it breaks you down). Progress only occurs during the anabolic recovery phase. The 'Supercompensation' model illustrates that if you apply a stressor and allow adequate recovery, the body returns to a higher baseline of fitness. If you train too soon, you descend into overtraining; if you wait too long, the gains dissipate.", 
      variant: "highlight" 
    },
    { 
      heading: "Sleep Architecture: The Ultimate Performance Enhancer", 
      body: "Research published in the Journal of Science and Medicine in Sport suggests that sleep deprivation reduces time to exhaustion by up to 10%. \n\n- **Non-REM Stage 3 & 4:** This is where the magic happens. Blood flow is redirected from the brain to the muscles, bringing oxygen and nutrients that facilitate tissue repair. \n- **Hormonal Regulation:** During deep sleep, cortisol levels drop and growth hormone spikes. Disrupting this cycle leads to insulin resistance and impaired glycogen storage.", 
      variant: "default" 
    },
    { 
      heading: "Myofascial Release & Lymphatic Clearance", 
      body: "Foam rolling (Self-Myofascial Release) doesn't actually 'break up' knots (fascia is too strong for that). Instead, it communicates with the nervous system to decrease muscle tension (autogenic inhibition). \n\n**Active vs. Passive Recovery:** \n- **Active:** 20 mins of Zone 1 cycling or walking increases blood flow and aids lactate clearance more effectively than complete rest. \n- **Cryotherapy:** Using ice baths post-workout can blunt inflammation. Note: Acute inflammation is an adaptation signal. For strength gains, limit ice; for multi-day endurance events, use it to manage pain.", 
      variant: "default", 
      listItems: [
        "Compression Therapy: Reduces swelling and improves venous return", 
        "HRV Monitoring: Use a chest strap to track the balance between your sympathetic and parasympathetic nervous systems",
        "Tendon Loading: Unlike muscles, tendons need 48-72h of 'down time' to remodel collagen after high-impact runs.",
        "Sauna & Heat: Increases plasma volume and heat-shock proteins, improving cardiovascular efficiency."
      ] 
    },
    {
      heading: "Nutritional Window for Hyper-Recovery",
      body: "The 'Metabolic Window' is wider than once thought, but the first 45-60 minutes remain critical for glycogen resynthesis. \n\n- **The 3:1 Ratio:** Consume 1.2g of carbohydrates per kg of body weight to replenish muscle glycogen, paired with 0.4g/kg of high-leucine protein to trigger Muscle Protein Synthesis (MPS). \n- **Hydration:** For every kg of weight lost during a run, consume 1.5L of water enriched with sodium to ensure cellular rehydration.",
      variant: "tip"
    },
    { 
      heading: "Common Pitfalls in Recovery", 
      body: "Many runners mistake 'rest' for 'recovery'. True recovery is proactive. \n\n- **NSAID Overuse:** Taking ibuprofen after every run inhibits the prostaglandin-driven repair process, potentially weakening long-term adaptation. \n- **Neglecting the Mind:** Psychological stress (work, family) uses the same physiological resources as physical stress. If life is stressful, your body needs more time to recover from runs.", 
      variant: "warning" 
    },
    { 
      heading: "The Professional Protocol: A Step-by-Step Checklist", 
      body: "Follow this sequence after every hard session or long run to maximize your ROI.", 
      variant: "checklist", 
      listItems: [
        "Post-Run Flush: 5-10 mins of very light walking immediately after stopping.", 
        "The 60-Minute Fuel: Shake or meal with 3:1 Carb:Protein ratio.", 
        "Soft Tissue Work: 10 mins SMR focusing on calves, quads, and glutes.",
        "Temperature Contrast: Alternating hot/cold shower to stimulate peripheral circulation.",
        "The Dark Room: 8+ hours of sleep in a room below 19°C (66°F)."
      ] 
    },
  ],
  hubCategory: "recovery",
};
