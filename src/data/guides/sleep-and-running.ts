import { GuideContent } from "@/types/guide";
import guideSleepRecovery from "@/assets/guide-sleep-recovery.webp";

export const sleepAndRunning: GuideContent = {
  title: "Sleep & Running Performance: The Science",
  seoTitle: "Sleep for Runners 2026: The Ultimate Recovery Guide",
  seoDescription: "Sleep is the most powerful performance enhancer. Learn how deep sleep repairs muscles, resets hormones, and why 8 hours is the minimum for athletes.",
  keywords: ["sleep for runners", "running recovery sleep", "deep sleep muscle repair", "glymphatic system running", "sleep deprivation performance", "athletic sleep hygiene"],
  description: "Why sleep is the most powerful (and free) performance enhancer for runners. Learn how sleep quality affects recovery, injury risk, and race-day performance.",
  tags: ["recovery", "protein", "muscles"],
  heroImage: guideSleepRecovery,
  readTime: "12 min read",
  keyTakeaways: [
    "Growth Hormone (GH) is almost exclusively released during N3 Deep Sleep",
    "Sleep deprivation increases perceived exertion (RPE)—making the same pace feel harder",
    "The Glymphatic System cleanses metabolic waste from the brain during sleep",
    "Banking sleep (9+ hours) before a race buffers the effects of pre-race insomnia",
  ],
  relatedTools: [
    { to: "/tools/protein", label: "Protein Calculator" },
    { to: "/tools/hydration", label: "Hydration Calculator" },
  ],
  relatedGuides: [
    { slug: "muscle-recovery", label: "Muscle Recovery After Running" },
    { slug: "running-nutrition", label: "Running Nutrition: What to Eat Before, During & After" },
  ],
  sections: [
    { 
      heading: "The Science: The Anabolic Window", 
      body: "Sleep is not passive; it is an active state of physiological reconstruction. During 'Slow Wave' sleep (N3), your body enters its most powerful anabolic state. The pituitary gland releases massive pulses of Growth Hormone (GH) and Testosterone, which are essential for muscle fiber repair, bone remodeling, and systemic inflammation reduction. \n\n**The Glymphatic Flush:** During sleep, the space between brain cells increases, allowing cerebrospinal fluid to wash away metabolic waste (like beta-amyloid). For a runner, this 'brain cleaning' is critical for maintaining the mental focus and reaction times needed for technical trail running or high-speed racing.", 
      variant: "highlight" 
    },
    { 
      heading: "Hormonal Balance: Cortisol vs. Recovery", 
      body: "Chronic sleep loss (under 7 hours) flips your hormonal profile from 'Build' to 'Breakdown'. \n\n- **Cortisol Spike:** Lack of sleep elevates nighttime cortisol, which blocks the uptake of glucose into the muscles. \n- **Glycogen Impairment:** Research suggests that even one night of restricted sleep can impair glycogen resynthesis by up to 20%. This means that even if you 'carb-load' correctly, your body cannot efficiently store that energy without adequate sleep.", 
      variant: "default" 
    },
    { 
      heading: "Sleep Architecture for Athletes", 
      body: "Endurance athletes have higher-than-average sleep needs due to the cognitive and physical load of training. \n\n- **Physical Repair (N3):** Occurs mostly in the first half of the night. If you go to bed late, you miss your primary physical recovery window. \n- **Mental Consolidation (REM):** Occurs mostly in the second half of the night. If you wake up too early for a run, you cut off your mental recovery, leading to brain fog and poor pacing strategy.", 
      variant: "default", 
      listItems: [
        "Protein Synthesis: Muscles repair 3x faster during deep sleep than while awake", 
        "Injury Risk: Runners sleeping <7h are 1.7x more likely to sustain an injury", 
        "Endurance Ceiling: Sleep loss reduces 'Time to Exhaustion' by an average of 11%",
        "Thermoregulation: Your body temp must drop 1°C to trigger the sleep cycle."
      ] 
    },
    {
      heading: "Sleep Extension: The Legal PED",
      body: "Research on collegiate athletes shows that extending sleep to 9-10 hours per night for several weeks leads to faster sprint times, better shooting accuracy, and significantly lower RPE (Relative Perceived Exertion). If you want to run faster, go to bed earlier.",
      variant: "tip"
    },
    {
      heading: "The Alcohol & Sleep Trap",
      body: "While alcohol may help you fall asleep faster, it completely destroys sleep quality by suppressing REM sleep and increasing heart rate variability (HRV) stress. A post-run beer can delay your physiological recovery by several hours.",
      variant: "warning"
    },
    { 
      heading: "Sleep Optimization Checklist", 
      body: "Use these science-backed habits to maximize your nightly recovery.", 
      variant: "checklist", 
      listItems: [
        "The Dark Room: Use blackout curtains; even a small amount of light can suppress melatonin.", 
        "Magnesium Protocol: 300mg of Magnesium Biglycinate before bed to assist muscle relaxation.", 
        "Consistency: Go to bed and wake up at the same time every day, including weekends.", 
        "Digital Sunset: No blue light 60 mins before bed to allow natural melatonin production.",
        "Napping Science: A 20-minute 'Power Nap' between 1 PM and 3 PM can restore alertness without causing grogginess."
      ] 
    },
  ],
  hubCategory: "recovery",
};
