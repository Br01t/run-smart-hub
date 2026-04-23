import { GuideContent } from "@/types/guide";
import guideHeartrate from "@/assets/guide-heartrate.webp";

export const heartRateZones: GuideContent = {
  title: "Heart Rate Zone Training for Runners",
  seoTitle: "Heart Rate Zone Training 2026: 80/20 Rule & Max HR Science",
  seoDescription: "Stop guessing your intensity. Learn the science of Heart Rate Zones, how to find your true Max HR, and why the 80/20 rule is the secret to elite performance.",
  keywords: ["heart rate zones running", "80/20 running rule", "calculate heart rate zones", "lactate threshold running", "zone 2 training benefits", "max heart rate test"],
  description: "How to use heart rate zones to train smarter, avoid overtraining and improve running performance.",
  tags: ["accessories", "running"],
  heroImage: guideHeartrate,
  readTime: "12 min read",
  keyTakeaways: [
    "Spend 80% of your volume in Zone 2 to build a massive aerobic base",
    "Max HR formulas (220-age) can be off by up to 15-20 beats per minute",
    "Lactate Threshold (Zone 4) is the best predictor of race performance",
    "Chest straps are mandatory for accuracy during high-intensity intervals",
  ],
  relatedTools: [
    { to: "/tools/calories", label: "Calories Calculator" },
    { to: "/tools/bmi", label: "BMI Calculator" },
  ],
  relatedGuides: [
    { slug: "marathon-training", label: "Marathon Training Guide for Beginners" },
    { slug: "running-nutrition", label: "Running Nutrition: What to Eat Before, During & After" },
  ],
  sections: [
    { 
      heading: "The Science: Metabolic Stress Hub", 
      body: "Heart rate (HR) is the most objective window into your internal metabolic stress. Unlike pace, which is an external metric, HR tells you how hard your heart and lungs are working to meet the demand. \n\n**The 80/20 Polarization:** Elite endurance athletes follow a 'Polarized' model. They spend 80% of their time at low intensity (Zone 2) to build mitochondrial density and 20% at high intensity. Most recreational runners make the 'Gray Zone' mistake—running everything at a 'moderate' effort that is too hard for recovery but too easy for significant adaptation.", 
      variant: "highlight" 
    },
    { 
      heading: "Thresholds: Aerobic vs. Lactate", 
      body: "Training zones are defined by two physiological 'break points'. \n\n1. **Aerobic Threshold (AeT):** The point where blood lactate begins to rise above baseline. This is the top of Zone 2. \n2. **Lactate Threshold (LT):** The intensity where lactate production equals clearance. This is the top of Zone 4. Improving your LT allows you to run faster for longer before the 'burn' forces you to slow down.", 
      variant: "default" 
    },
    { 
      heading: "Calculating Your Zones: Beyond the Formulas", 
      body: "The '220 - Age' formula is a population average and is often dangerously inaccurate for individual athletes. \n\n- **The Karvonen Method:** This formula uses your Resting Heart Rate (RHR) to calculate 'Heart Rate Reserve', which is a more personalized way to set zones. \n- **Field Testing:** The gold standard is a 30-minute time trial or a step test. Your average HR for the final 20 minutes of a 30-minute 'all-out' effort is a very close approximation of your Lactate Threshold HR.", 
      variant: "default", 
      listItems: [
        "Cardiac Drift: Your HR will rise 5-10% during a long run as core temperature increases", 
        "External Factors: Caffeine, heat, and stress can raise your HR by 10+ BPM independently of effort", 
        "Wrist vs. Chest: Optical wrist sensors often 'cadence lock' (mimic your steps instead of your heart)",
        "Recovery HR: How fast your HR drops in 1 minute after a hard effort is a sign of fitness."
      ] 
    },
    {
      heading: "Zone 2: The Engine Room",
      body: "Zone 2 training (60-70% of Max HR) stimulates the growth of mitochondria and improves 'Metabolic Flexibility'—the body's ability to burn fat at higher speeds. If you can't speak in full sentences while running, you aren't in Zone 2.",
      variant: "tip"
    },
    {
      heading: "The Danger of 'Gray Zone' Training",
      body: "Running in Zone 3 (the 'Moderate' zone) for every run is a recipe for stagnation. It provides enough stress to cause fatigue but not enough specific stimulus to drive elite-level aerobic or anaerobic gains. Either go slow or go fast; don't live in the middle.",
      variant: "warning"
    },
    { 
      heading: "Practical Application Checklist", 
      body: "How to use HR data to guide your weekly training schedule.", 
      variant: "checklist", 
      listItems: [
        "Conduct a field test every 8-12 weeks to update your zones as you get fitter.", 
        "Invest in a quality chest strap (Bluetooth/ANT+) for all interval sessions.", 
        "Set an 'HR Alert' on your watch for Zone 2 runs to prevent 'ego-pacing'.", 
        "Check your Resting HR upon waking; a spike of >5 BPM suggests you need a rest day.",
        "On hill days, allow your HR to peak in Zone 5, but ensure it returns to Zone 2 before the next rep."
      ] 
    },
  ],
  hubCategory: "apparel",
};
