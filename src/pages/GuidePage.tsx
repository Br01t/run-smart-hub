import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Wrench, BookOpen, BarChart3, Clock, Tag, Lightbulb, CheckCircle2, AlertTriangle } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import RecommendedProducts from "@/components/RecommendedProducts";
import ZoneRunBanner from "@/components/ZoneRunBanner";
import { translateCategory, translateSport, translateGoal } from "@/lib/translations";
import productsData from "@/data/products.json";
import comparisonsData from "@/data/comparisons.json";

// Hero images
import guideShoes from "@/assets/guide-shoes.webp";
import guideSupplements from "@/assets/guide-supplements.webp";
import guideRecovery from "@/assets/guide-recovery.webp";
import guideNutrition from "@/assets/guide-nutrition.webp";
import guideInjury from "@/assets/guide-injury.webp";
import guideMarathon from "@/assets/guide-marathon.webp";
import guideTrail from "@/assets/guide-trail.webp";
import guideHeartrate from "@/assets/guide-heartrate.webp";
import guideStretching from "@/assets/guide-stretching.webp";
import guideRunningForm from "@/assets/guide-running-form.webp";
import guideCadence from "@/assets/guide-cadence.webp";
import guideHillTraining from "@/assets/guide-hill-training.webp";
import guideRunningWatches from "@/assets/guide-running-watches.webp";
import guideWinterRunning from "@/assets/guide-winter-running.webp";
import guideIntervalTraining from "@/assets/guide-interval-training.webp";
import guideSleepRecovery from "@/assets/guide-sleep-recovery.webp";

type SectionVariant = "default" | "highlight" | "tip" | "warning" | "checklist";

interface GuideSection {
  heading: string;
  body: string;
  variant?: SectionVariant;
  listItems?: string[];
}

interface GuideContent {
  title: string;
  description: string;
  tags: string[];
  heroImage: string;
  readTime: string;
  keyTakeaways: string[];
  sections: GuideSection[];
  relatedTools: { to: string; label: string }[];
  relatedGuides: { slug: string; label: string }[];
}

interface Comparison {
  sport: string;
  obiettivo: string;
  categoria: string;
  intro: string;
  tags: string[];
  faq: { q: string; a: string }[];
}

const guidesContent: Record<string, GuideContent> = {
  "choosing-running-shoes": {
    title: "How to Choose Running Shoes",
    description: "Complete guide to choosing the right running shoes for your foot type, terrain and goals.",
    tags: ["scarpe", "corsa", "ammortizzazione"],
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
      { heading: "Why the right shoes matter", body: "Running shoes are the most important investment for a runner. Ill-fitting shoes can cause injuries, joint pain and reduce performance. Your choice depends on foot strike (neutral, overpronator, supinator), terrain (road, trail, mixed), distance and training frequency.", variant: "highlight" },
      { heading: "Foot strike type", body: "Foot strike is the primary factor. A neutral strike needs balanced cushioning. Overpronators need medial support. Supinators require extra cushioning on the outer side.", variant: "default", listItems: ["Neutral: balanced cushioning, most versatile", "Overpronation: medial post support, stability shoes", "Supination: extra lateral cushioning, neutral-cushioned shoes", "Use a wet test or gait analysis to determine your type"] },
      { heading: "Drop and cushioning", body: "Drop is the height difference between heel and toe. High drop (8-12mm) suits heel strikers. Low drop (0-6mm) is for midfoot or forefoot runners. Cushioning should match your weight and distance: the more km you run, the more cushioning you need.", variant: "tip" },
      { heading: "When to replace your shoes", body: "On average, running shoes last 600-1000 km. Track the km on each pair to know when to replace them.", variant: "warning", listItems: ["Outsole rubber is smooth or worn through", "Midsole feels flat and unresponsive", "You're experiencing new aches or pains", "The upper is stretched or torn"] },
    ],
  },
  "supplements-for-runners": {
    title: "Essential Supplements for Runners",
    description: "Which supplements actually work for running? An evidence-based guide.",
    tags: ["integratori", "elettroliti", "proteine"],
    heroImage: guideSupplements,
    readTime: "10 min read",
    keyTakeaways: [
      "A balanced diet covers most needs for recreational runners",
      "Magnesium, Vitamin D and protein have strong evidence",
      "Electrolytes are critical for runs over 60 minutes",
    ],
    relatedTools: [
      { to: "/tools/protein", label: "Protein Calculator" },
      { to: "/tools/electrolytes", label: "Electrolyte Calculator" },
      { to: "/tools/calories", label: "Calories Calculator" },
    ],
    relatedGuides: [
      { slug: "muscle-recovery", label: "Muscle Recovery After Running" },
      { slug: "running-nutrition", label: "Running Nutrition: What to Eat Before, During & After" },
    ],
    sections: [
      { heading: "Do you really need supplements?", body: "For most recreational runners, a balanced diet is sufficient. However, some supplements have solid evidence for improving performance and recovery: magnesium, vitamin D, whey protein, electrolytes and caffeine.", variant: "highlight" },
      { heading: "Magnesium", body: "Magnesium is involved in over 300 enzymatic reactions. For runners it's crucial: it reduces cramps, supports muscle function and improves sleep quality. Citrate form has the highest bioavailability. Recommended dose: 300-400mg/day.", variant: "default" },
      { heading: "Protein", body: "Protein is essential for muscle recovery. For runners training 4+ times per week, 1.4-1.8g/kg body weight per day is optimal. Whey isolate within 30 minutes post-workout accelerates recovery.", variant: "tip" },
      { heading: "Electrolytes", body: "For runs over 60 minutes or in hot conditions, electrolytes are essential. Sodium, potassium and magnesium are lost through sweat. Effervescent tablets are the most practical format during activity.", variant: "default", listItems: ["Sodium: 300-600mg per hour of running", "Potassium: supports nerve and muscle function", "Magnesium: prevents cramps, aids recovery", "Look for sugar-free electrolyte tablets"] },
    ],
  },
  "muscle-recovery": {
    title: "Muscle Recovery After Running",
    description: "Scientific strategies to recover faster: stretching, foam rolling, nutrition and sleep.",
    tags: ["recupero", "massaggio", "proteine"],
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
      { heading: "Why recovery is essential", body: "Training creates micro-damage in muscles. It's during recovery that your body adapts and grows stronger. Skipping recovery leads to overtraining, injuries and performance decline.", variant: "highlight" },
      { heading: "Foam rolling", body: "Foam rolling (or SMR – Self-Myofascial Release) reduces DOMS (delayed onset muscle soreness) by up to 50% according to some studies. 10-15 minutes post-workout on major muscle groups is sufficient.", variant: "default", listItems: ["Quads: 60 seconds per leg, slow rolls", "Calves: focus on tight spots, pause on tender areas", "IT band: roll from hip to just above knee", "Glutes: sit on roller, cross one ankle over opposite knee"] },
      { heading: "Post-run nutrition", body: "The anabolic window within 30-60 minutes after training is the optimal time to consume protein (20-30g) and carbs (1g/kg). A shake with whey protein and a banana is a practical and effective solution.", variant: "tip" },
      { heading: "Sleep", body: "Sleep is the most underrated recovery factor. During deep sleep, growth hormone (GH) is released, essential for muscle repair. Target: 7-9 hours per night, with consistent schedules.", variant: "warning" },
    ],
  },
  "running-nutrition": {
    title: "Running Nutrition: What to Eat Before, During & After",
    description: "A complete guide to fueling your runs properly. Learn what, when and how much to eat for optimal performance.",
    tags: ["energia", "carboidrati", "integratori", "proteine"],
    heroImage: guideNutrition,
    readTime: "9 min read",
    keyTakeaways: [
      "Eat carb-rich meals 2-3 hours before running",
      "Fuel with 30-60g carbs/hour for runs over 60 minutes",
      "Recover with a 3:1 carb-to-protein ratio within 60 minutes",
    ],
    relatedTools: [
      { to: "/tools/calories", label: "Calories Calculator" },
      { to: "/tools/protein", label: "Protein Calculator" },
    ],
    relatedGuides: [
      { slug: "supplements-for-runners", label: "Essential Supplements for Runners" },
      { slug: "marathon-training", label: "Marathon Training Guide for Beginners" },
    ],
    sections: [
      { heading: "Pre-run nutrition", body: "Eat a carb-rich meal 2-3 hours before running (oatmeal, toast with banana, rice). Avoid high-fiber and high-fat foods that may cause GI distress. A small snack 30-60 min before is fine for early morning runs.", variant: "default", listItems: ["2-3 hours before: oatmeal, toast, rice with lean protein", "30-60 min before: banana, energy bar, small smoothie", "Avoid: high-fiber, high-fat, spicy or new foods"] },
      { heading: "Fueling during runs", body: "For runs under 60 minutes, water is usually sufficient. Beyond that, aim for 30-60g of carbs per hour through gels, chews or sports drinks. Practice your fueling strategy in training, never on race day.", variant: "warning" },
      { heading: "Post-run recovery meals", body: "Within 30-60 minutes after running, consume 20-30g protein and 1-1.2g/kg carbs. Chocolate milk is a surprisingly effective recovery drink with the ideal 3:1 carb-to-protein ratio.", variant: "tip" },
      { heading: "Hydration strategies", body: "Start runs well-hydrated (pale yellow urine). During runs, drink 400-800ml per hour based on sweat rate. Weigh yourself before and after to calculate individual fluid needs.", variant: "checklist", listItems: ["Check urine color before runs (pale yellow = good)", "Drink 400-800ml per hour during activity", "Weigh pre/post run to measure fluid loss", "Replace 150% of lost fluid in 4-6 hours post-run"] },
    ],
  },
  "injury-prevention": {
    title: "Runner's Guide to Injury Prevention",
    description: "How to stay injury-free with smart training, strength work and proper recovery techniques.",
    tags: ["recupero", "massaggio", "muscoli", "scarpe"],
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
      { heading: "The 10% rule", body: "Never increase weekly mileage by more than 10%. Sudden volume spikes are the leading cause of running injuries. Build gradually and include cutback weeks every 3-4 weeks.", variant: "warning" },
      { heading: "Strength training for runners", body: "2-3 strength sessions per week targeting glutes, core and calves dramatically reduce injury risk.", variant: "default", listItems: ["Single-leg squats: 3x12 each leg", "Calf raises: 3x15, both straight and bent knee", "Hip bridges: 3x15, progress to single-leg", "Planks: 3x45 seconds, include side planks"] },
      { heading: "Common running injuries", body: "Runner's knee, shin splints, IT band syndrome, plantar fasciitis and Achilles tendinopathy are the most common. Most are overuse injuries that respond to load management.", variant: "highlight" },
      { heading: "When to see a professional", body: "If pain persists beyond 2 weeks, worsens during runs, causes limping, or involves swelling, see a sports physiotherapist. Early intervention prevents chronic issues.", variant: "tip" },
    ],
  },
  "marathon-training": {
    title: "Marathon Training Guide for Beginners",
    description: "Everything you need to know to train for your first marathon: plans, pacing, nutrition and gear.",
    tags: ["energia", "carboidrati", "scarpe", "corsa"],
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
      { heading: "Base requirements", body: "Before starting marathon training, you should be comfortable running 30-40 km per week for at least 3 months. A solid aerobic base prevents injuries during the 16-20 week marathon build.", variant: "highlight" },
      { heading: "Training structure", body: "A typical marathon plan includes 4-5 runs per week:", variant: "default", listItems: ["1 long run (cornerstone): 20km → 32-35km peak", "1 tempo run: sustained effort at threshold pace", "1 interval session: shorter, faster repeats for speed", "1-2 easy runs: active recovery, aerobic base"] },
      { heading: "Pacing strategy", body: "Most beginners start too fast and crash after 30km ('hitting the wall'). Use negative splits: run the first half 10-15 sec/km slower than goal pace. Practice marathon pace in long runs.", variant: "tip" },
      { heading: "Race week and taper", body: "Reduce volume by 40-60% in the final 2-3 weeks (taper). Maintain intensity but cut distance.", variant: "checklist", listItems: ["2-3 weeks before: begin taper, reduce volume 40-60%", "3 days before: carb-load (7-10g/kg bodyweight)", "Night before: lay out ALL gear — nothing new on race day", "Race morning: eat proven pre-race meal 3 hours before start"] },
    ],
  },
  "trail-running-beginners": {
    title: "Getting Started with Trail Running",
    description: "A beginner's guide to trail running: gear, technique, safety and finding the right trails.",
    tags: ["scarpe", "corsa", "accessori", "idratazione"],
    heroImage: guideTrail,
    readTime: "9 min read",
    keyTakeaways: [
      "Expect to be 20-40% slower on trails — that's normal",
      "Trail shoes with aggressive lugs are essential",
      "Always tell someone your route and expected return",
    ],
    relatedTools: [
      { to: "/tools/hydration", label: "Hydration Calculator" },
      { to: "/tools/calories", label: "Calories Calculator" },
    ],
    relatedGuides: [
      { slug: "choosing-running-shoes", label: "How to Choose Running Shoes" },
      { slug: "injury-prevention", label: "Runner's Guide to Injury Prevention" },
    ],
    sections: [
      { heading: "Road to trail transition", body: "Trail running is slower than road running — and that's perfectly normal. Expect to be 20-40% slower on technical terrain. Focus on effort (heart rate or perceived exertion) rather than pace.", variant: "highlight" },
      { heading: "Essential trail gear", body: "Having the right gear makes trail running safer and more enjoyable.", variant: "checklist", listItems: ["Trail shoes with aggressive lugs for traction", "Hydration vest for runs over 1 hour", "Lightweight rain jacket (weather changes fast)", "Phone with offline maps downloaded", "Trekking poles (optional, helpful on steep terrain)"] },
      { heading: "Uphill and downhill technique", body: "Uphill: shorten your stride, lean slightly forward, use your arms. Walking steep uphills is not cheating — even elites walk. Downhill: lean forward, quick light steps, eyes on the trail 3-5 meters ahead.", variant: "tip" },
      { heading: "Safety on the trails", body: "Trail running requires more planning than road running.", variant: "warning", listItems: ["Always tell someone your route and expected return", "Carry enough water and food for emergencies", "Check weather conditions before heading out", "Start with well-marked, popular trails first"] },
    ],
  },
  "running-heart-rate-zones": {
    title: "Heart Rate Zone Training for Runners",
    description: "How to use heart rate zones to train smarter, avoid overtraining and improve performance.",
    tags: ["accessori", "corsa"],
    heroImage: guideHeartrate,
    readTime: "8 min read",
    keyTakeaways: [
      "Spend 80% of training in Zones 1-2 (easy effort)",
      "The '220 minus age' formula is inaccurate for many people",
      "Chest straps are more accurate than wrist-based HR monitors",
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
      { heading: "Understanding the 5 zones", body: "Heart rate zones help you train at the right intensity for different training goals.", variant: "default", listItems: ["Zone 1 (50-60%): active recovery, very easy", "Zone 2 (60-70%): aerobic base, conversational pace", "Zone 3 (70-80%): tempo, comfortably hard", "Zone 4 (80-90%): VO2max intervals, hard effort", "Zone 5 (90-100%): sprints, max effort"] },
      { heading: "The 80/20 rule", body: "Elite runners spend 80% of training time in Zones 1-2 and only 20% in Zones 3-5. Most recreational runners do the opposite — running too hard on easy days and too easy on hard days.", variant: "highlight" },
      { heading: "Finding your max heart rate", body: "The '220 minus age' formula is inaccurate for many people. A field test (e.g., 3x 3-minute uphill repeats at max effort) gives a better estimate. Lab testing (VO2max test) is the gold standard.", variant: "tip" },
      { heading: "Chest strap vs optical HR", body: "Chest straps (Polar, Garmin HRM) are more accurate during high-intensity efforts. Wrist-based optical sensors can lag and misread during intervals. For zone training, a chest strap is recommended.", variant: "default" },
    ],
  },
  "stretching-for-runners": {
    title: "The Runner's Stretching Guide",
    description: "Dynamic vs static stretching: when to stretch, the best routines, and how flexibility prevents injuries.",
    tags: ["recupero", "muscoli", "corsa"],
    heroImage: guideStretching,
    readTime: "7 min read",
    keyTakeaways: [
      "Dynamic stretching before, static stretching after running",
      "Consistent stretching reduces injury risk by up to 30%",
      "Focus on hip flexors, hamstrings and calves",
    ],
    relatedTools: [
      { to: "/tools/bmi", label: "BMI Calculator" },
      { to: "/tools/protein", label: "Protein Calculator" },
    ],
    relatedGuides: [
      { slug: "muscle-recovery", label: "Muscle Recovery After Running" },
      { slug: "injury-prevention", label: "Runner's Guide to Injury Prevention" },
    ],
    sections: [
      { heading: "Dynamic vs static stretching", body: "Dynamic stretching (leg swings, walking lunges, high knees) prepares muscles for activity by increasing blood flow and range of motion. Static stretching (holding a position for 20-30 seconds) is best post-run when muscles are warm. Never static stretch cold muscles before running.", variant: "highlight" },
      { heading: "Pre-run warm-up routine", body: "Spend 5-10 minutes on dynamic stretches before every run. This primes your nervous system and gradually increases heart rate.", variant: "checklist", listItems: ["Leg swings: 15 each leg, front-to-back and side-to-side", "Walking lunges: 10 each leg with a gentle torso twist", "High knees: 20 steps, focus on hip flexor activation", "Butt kicks: 20 steps, warming up hamstrings and quads", "Ankle circles: 10 each direction per foot"] },
      { heading: "Post-run static stretches", body: "After running, hold each stretch for 20-30 seconds without bouncing. Focus on the muscle groups most worked during your run.", variant: "default", listItems: ["Standing quad stretch: pull heel to glute, keep knees together", "Standing calf stretch: lean into wall, straight back leg", "Pigeon pose: excellent for hip flexors and glutes", "Hamstring stretch: straight leg on elevated surface, hinge at hips", "Figure-four stretch: targets deep hip rotators"] },
      { heading: "Flexibility and injury prevention", body: "Tight hip flexors are the #1 contributor to runner's knee and IT band issues. A 10-minute daily stretching routine — even on rest days — can reduce injury risk by up to 30%. Yoga for runners is an excellent supplement.", variant: "tip" },
    ],
  },
  "running-form": {
    title: "How to Improve Your Running Form",
    description: "Fix your posture, arm swing, foot strike and breathing for more efficient, injury-free running.",
    tags: ["corsa", "muscoli", "scarpe"],
    heroImage: guideRunningForm,
    readTime: "8 min read",
    keyTakeaways: [
      "Slight forward lean from ankles, not waist",
      "Arms at 90°, relaxed shoulders, no crossing midline",
      "Land under your center of mass, not ahead of it",
    ],
    relatedTools: [
      { to: "/tools/bmi", label: "BMI Calculator" },
      { to: "/tools/calories", label: "Calories Calculator" },
    ],
    relatedGuides: [
      { slug: "running-cadence", label: "Running Cadence: Why Steps Per Minute Matter" },
      { slug: "injury-prevention", label: "Runner's Guide to Injury Prevention" },
    ],
    sections: [
      { heading: "Posture and alignment", body: "Good running posture starts with a tall spine and slight forward lean from the ankles — not the waist. Imagine a string pulling you up from the crown of your head. Keep your gaze 10-20 meters ahead, not at your feet. A hunched posture restricts breathing and wastes energy.", variant: "highlight" },
      { heading: "Arm swing", body: "Your arms drive your legs. Keep elbows at roughly 90° and swing forward-back, not across your body. Crossing your midline creates rotational forces that waste energy and stress your spine. Keep hands relaxed — imagine holding a potato chip without breaking it.", variant: "tip" },
      { heading: "Foot strike", body: "Where your foot lands relative to your body matters more than heel vs forefoot strike.", variant: "default", listItems: ["Land under your center of mass, not ahead of it", "Overstriding (foot landing ahead) is the most common form error", "Midfoot strike is generally most efficient for distance running", "A slight forward lean naturally encourages midfoot contact", "Transition gradually — sudden changes cause injuries"] },
      { heading: "Breathing technique", body: "Rhythmic breathing synced to your cadence improves oxygen delivery and core stability. A 3:2 pattern (3 steps inhale, 2 steps exhale) works well for easy runs. For hard efforts, switch to 2:1. Belly breathing (diaphragmatic) is more efficient than shallow chest breathing.", variant: "checklist", listItems: ["Easy runs: inhale 3 steps, exhale 2 steps", "Tempo/threshold: inhale 2 steps, exhale 1 step", "Breathe from the diaphragm (belly expands)", "Exhale forcefully to trigger a stronger inhale reflex"] },
    ],
  },
  "running-cadence": {
    title: "Running Cadence: Why Steps Per Minute Matter",
    description: "Learn why cadence impacts performance, the 180 spm benchmark, and how to safely increase yours.",
    tags: ["corsa", "accessori"],
    heroImage: guideCadence,
    readTime: "6 min read",
    keyTakeaways: [
      "Higher cadence reduces impact forces on joints",
      "Optimal cadence is individual — 170-190 spm for most runners",
      "Increase by no more than 5% at a time",
    ],
    relatedTools: [
      { to: "/tools/calories", label: "Calories Calculator" },
      { to: "/tools/bmi", label: "BMI Calculator" },
    ],
    relatedGuides: [
      { slug: "running-form", label: "How to Improve Your Running Form" },
      { slug: "running-heart-rate-zones", label: "Heart Rate Zone Training for Runners" },
    ],
    sections: [
      { heading: "What is cadence?", body: "Cadence is the number of steps you take per minute (spm). It's one of the two factors that determine speed (the other is stride length). Most recreational runners have a cadence of 150-170 spm, while elite runners typically run at 180-190+ spm.", variant: "highlight" },
      { heading: "Why higher cadence helps", body: "A higher cadence naturally shortens your stride, which means your foot lands closer to your center of mass. This reduces braking forces, decreases impact loading on knees and hips by up to 20%, and improves running economy.", variant: "default", listItems: ["Reduced ground contact time = less energy wasted", "Lower vertical oscillation = smoother running", "Less impact on joints = fewer overuse injuries", "Better turnover = maintained speed with less effort"] },
      { heading: "How to measure and increase cadence", body: "Most GPS watches track cadence automatically. You can also count steps for 30 seconds and multiply by 2. To increase cadence, do it gradually — no more than 5% at a time.", variant: "tip", listItems: ["Use a metronome app set to your target spm", "Do cadence drills during easy runs (1-2 min at target, then relax)", "Run to music with the right BPM (e.g., 180 BPM playlists)", "Focus on 'quick feet' rather than consciously shortening stride"] },
      { heading: "Common mistakes", body: "Don't chase 180 spm as a magic number. Optimal cadence varies by height, leg length, pace and terrain. Taller runners naturally have lower cadence. The goal is to find YOUR optimal range, not copy someone else's.", variant: "warning" },
    ],
  },
  "hill-training": {
    title: "Hill Training for Runners",
    description: "Master uphill repeats, downhill technique and build explosive strength with targeted hill workouts.",
    tags: ["corsa", "muscoli", "energia"],
    heroImage: guideHillTraining,
    readTime: "8 min read",
    keyTakeaways: [
      "Hill repeats build strength equivalent to gym work",
      "Uphill running improves VO2max faster than flat intervals",
      "Downhill technique is a skill — practice it deliberately",
    ],
    relatedTools: [
      { to: "/tools/calories", label: "Calories Calculator" },
      { to: "/tools/hydration", label: "Hydration Calculator" },
    ],
    relatedGuides: [
      { slug: "running-form", label: "How to Improve Your Running Form" },
      { slug: "marathon-training", label: "Marathon Training Guide for Beginners" },
    ],
    sections: [
      { heading: "Why hills make you faster", body: "Hill running recruits more muscle fibers, builds explosive power and improves cardiovascular fitness simultaneously. A study in the Journal of Strength and Conditioning found that 6 weeks of hill sprints improved 5K times by an average of 2%. Hills are 'speed work in disguise.'", variant: "highlight" },
      { heading: "Uphill technique", body: "Running uphill efficiently requires technique adjustments to maintain momentum and conserve energy.", variant: "checklist", listItems: ["Shorten stride and increase cadence by 5-10%", "Lean slightly forward from ankles, not waist", "Drive arms more aggressively — they power your legs uphill", "Keep eyes 3-5 meters ahead, not at your feet", "Use power hiking on very steep grades (>15%) — even pros do it"] },
      { heading: "Hill repeat workouts", body: "Start with a moderate hill (4-6% grade, 200-400m long). After a 10-min warm-up, run hard uphill for 60-90 seconds, jog down to recover, repeat.", variant: "default", listItems: ["Beginner: 4-6 repeats × 60 seconds, full recovery jog down", "Intermediate: 6-8 repeats × 90 seconds, controlled jog down", "Advanced: 8-12 repeats × 2 minutes, or long hill tempo (10-15 min)", "Frequency: 1 hill session per week during base/build phase"] },
      { heading: "Downhill running technique", body: "Downhill running causes more muscle damage than uphill due to eccentric contractions. But it's a trainable skill. Lean into the descent, use quick light steps and let gravity do the work. Braking by landing on your heels increases impact forces by 3-4x.", variant: "tip" },
    ],
  },
  "best-running-watches": {
    title: "Best GPS Running Watches: Buyer's Guide",
    description: "A comprehensive, independent guide to choosing the right GPS running watch. We break down features, accuracy, battery life and value across every budget — from entry-level to premium multisport.",
    tags: ["accessori", "corsa"],
    heroImage: guideRunningWatches,
    readTime: "10 min read",
    keyTakeaways: [
      "GPS accuracy and heart rate reliability vary significantly between brands",
      "Battery life is the #1 factor for ultra and trail runners",
      "Mid-range watches ($200-350) offer the best value for most runners",
    ],
    relatedTools: [
      { to: "/tools/calories", label: "Calories Calculator" },
      { to: "/tools/hydration", label: "Hydration Calculator" },
    ],
    relatedGuides: [
      { slug: "running-heart-rate-zones", label: "Heart Rate Zone Training for Runners" },
      { slug: "trail-running-beginners", label: "Getting Started with Trail Running" },
    ],
    sections: [
      { heading: "Why a GPS watch matters", body: "A GPS running watch is more than a timer — it's your most objective training partner. It tracks pace, distance, heart rate, elevation and recovery metrics that help you train smarter, avoid overtraining and measure progress over weeks and months. Unlike phone apps, a dedicated watch provides real-time data without draining your phone battery or requiring you to carry it.", variant: "highlight" },
      { heading: "Key features to compare", body: "Not all features matter equally. Prioritize based on your running type and goals.", variant: "checklist", listItems: ["GPS accuracy: multi-band GNSS is the gold standard for trail runners", "Optical heart rate: adequate for easy runs, less reliable at high intensity", "Battery life: 20+ hours GPS for marathoners, 40+ for ultra runners", "Navigation: breadcrumb trails and turn-by-turn for trail and adventure runs", "Training metrics: VO2max estimate, training load, recovery advisor", "Music storage: Spotify/Amazon offline playback without carrying a phone"] },
      { heading: "Budget tier ($100-200)", body: "Entry-level GPS watches cover the essentials well. Expect reliable GPS tracking, basic heart rate monitoring and 10-15 hours of GPS battery life. These are ideal for beginner to intermediate road runners who want pace and distance data without complexity. Models in this range typically lack advanced navigation, multi-band GPS and detailed training analytics, but they're perfectly functional for 5K-to-marathon training.", variant: "default", listItems: ["Accurate GPS for road running and well-marked trails", "Optical HR suitable for zone training on easy-moderate runs", "Basic interval and workout features", "Smartphone notifications and activity tracking"] },
      { heading: "Mid-range tier ($200-400)", body: "This is the sweet spot for serious recreational runners. You get multi-band GPS, more accurate HR sensors, training load tracking, recovery metrics, and 25-40 hours of GPS battery. Many models include offline maps, music storage and advanced workout builders. These watches can genuinely help you improve by providing data-driven insights into your training balance.", variant: "tip" },
      { heading: "Premium tier ($400+)", body: "Premium watches are for competitive athletes, ultra runners and tech enthusiasts. Expect touchscreen AMOLED displays, solar charging, full topographic maps, advanced training analytics (stamina, HRV, power), and 60+ hours of GPS battery. The performance gains over mid-range are marginal for most runners — the jump is mainly in durability, display quality and ultra-long battery.", variant: "default" },
      { heading: "Wrist HR vs chest strap", body: "Optical wrist HR sensors have improved dramatically but still struggle with high-intensity intervals, cold weather and dark skin tones. If you train by heart rate zones seriously, consider pairing your watch with a chest strap (Polar H10, Garmin HRM-Pro Plus) for threshold and interval sessions. Wrist HR is fine for easy and steady-state runs.", variant: "warning" },
    ],
  },
  "winter-running": {
    title: "How to Run Safely in Cold Weather",
    description: "A practical guide to winter running: layering systems, essential gear, breathing techniques and safety precautions for training through the coldest months.",
    tags: ["accessori", "corsa", "scarpe"],
    heroImage: guideWinterRunning,
    readTime: "8 min read",
    keyTakeaways: [
      "Dress for 10°C warmer than the actual temperature",
      "Three layers (base, mid, outer) regulate temperature and moisture",
      "Reflective gear and headlamps are essential for low-light runs",
    ],
    relatedTools: [
      { to: "/tools/hydration", label: "Hydration Calculator" },
      { to: "/tools/calories", label: "Calories Calculator" },
    ],
    relatedGuides: [
      { slug: "choosing-running-shoes", label: "How to Choose Running Shoes" },
      { slug: "injury-prevention", label: "Runner's Guide to Injury Prevention" },
    ],
    sections: [
      { heading: "The layering system", body: "The key to comfortable winter running is layering — not bulk. A proper three-layer system wicks sweat away from your skin, insulates, and blocks wind and rain. The biggest mistake? Overdressing. You should feel slightly cool when you step outside — your body generates significant heat within the first 5-10 minutes of running.", variant: "highlight", listItems: ["Base layer: merino wool or synthetic moisture-wicking fabric (never cotton)", "Mid layer: lightweight fleece or insulated vest for temps below 0°C", "Outer layer: windproof, water-resistant jacket (not waterproof — you need breathability)"] },
      { heading: "Extremities and exposed skin", body: "Your body prioritizes core temperature, reducing blood flow to hands, feet and ears. These are the first areas to suffer. A thin pair of running gloves, a merino beanie or headband, and wool-blend socks make a dramatic difference. For temperatures below -5°C, consider a buff or balaclava to warm the air before it enters your lungs.", variant: "checklist", listItems: ["Gloves: lightweight touchscreen-compatible for most conditions", "Head: merino beanie or ear-covering headband", "Feet: merino wool socks (avoid cotton — it retains moisture)", "Face: buff or neck gaiter pulled up in wind and extreme cold", "Vaseline: apply to cheeks and nose to prevent windburn"] },
      { heading: "Traction and footing", body: "Ice and packed snow are the biggest injury risks in winter. Regular road shoes have zero grip on icy surfaces. Trail shoes with aggressive lugs provide some traction on snow, but for icy roads you'll need traction devices (Yaktrax, Kahtoola NANOspikes) that slip over your shoes. Shorten your stride on slippery surfaces and lower your center of gravity.", variant: "warning" },
      { heading: "Visibility and safety", body: "Winter means shorter days and reduced visibility for both you and drivers. Reflective vests, LED armbands and a headlamp are non-negotiable for any low-light running. Stick to well-lit, familiar routes. Tell someone your planned route and expected return time, especially in extreme conditions.", variant: "tip" },
      { heading: "Breathing in cold air", body: "Cold, dry air can trigger bronchospasm and irritate airways. Breathe through a buff or face covering to warm and humidify the air. If you have exercise-induced asthma, cold weather is a known trigger — carry your inhaler and warm up gradually. Nose breathing during easy runs naturally warms the air before it reaches your lungs.", variant: "default" },
    ],
  },
  "interval-training": {
    title: "Interval Training for Runners: The Complete Guide",
    description: "Master every type of speed workout — from fartlek to VO2max repeats. Learn how to structure intervals, set target paces, and periodize speed work for race-day results.",
    tags: ["corsa", "energia", "muscoli"],
    heroImage: guideIntervalTraining,
    readTime: "9 min read",
    keyTakeaways: [
      "Speed work should be max 20% of weekly volume (80/20 rule)",
      "Different interval types target different energy systems",
      "Always warm up 10-15 min before any speed session",
    ],
    relatedTools: [
      { to: "/tools/calories", label: "Calories Calculator" },
      { to: "/tools/hydration", label: "Hydration Calculator" },
    ],
    relatedGuides: [
      { slug: "running-heart-rate-zones", label: "Heart Rate Zone Training for Runners" },
      { slug: "marathon-training", label: "Marathon Training Guide for Beginners" },
    ],
    sections: [
      { heading: "Types of speed work", body: "Not all intervals are equal — each type trains a different physiological system. Understanding these differences lets you target specific weaknesses and peak for race day.", variant: "highlight", listItems: ["Strides: 80-100m accelerations at 90-95% effort with full recovery — neuromuscular activation", "Fartlek: unstructured speed play mixing fast and easy segments — great for beginners", "Tempo runs: 20-40 min at lactate threshold pace — teaches your body to clear lactate", "VO2max intervals: 3-5 min repeats at 95-100% max HR — improves oxygen processing", "Repetitions: 200-400m sprints with full recovery — develops pure speed and running economy"] },
      { heading: "How to set target paces", body: "Your interval paces should be based on recent race performances or a time trial, not arbitrary numbers. A recent 5K time is the most practical reference point. Tempo pace is roughly your 1-hour race pace. VO2max intervals should be at your 3K-5K pace. If you can't finish the last rep at the same quality as the first, you started too fast.", variant: "tip" },
      { heading: "Session structure", body: "Every speed session follows the same template: warm up, main set, cool down. Never skip the warm-up — it prepares your cardiovascular system, muscles and joints for intense effort, and dramatically reduces injury risk.", variant: "checklist", listItems: ["Warm-up: 10-15 min easy jog + dynamic stretches + 2-3 strides", "Main set: intervals at target pace with prescribed recovery", "Recovery between reps: jog or walk (never stop completely)", "Cool-down: 10 min easy jog + static stretching", "Total session: 45-75 minutes including warm-up and cool-down"] },
      { heading: "Weekly programming", body: "For most runners, 1-2 speed sessions per week is optimal. More than that increases injury risk without proportional fitness gains. Separate hard sessions by at least 48 hours. A common weekly structure: Monday easy, Tuesday intervals, Wednesday easy, Thursday tempo, Friday rest, Saturday long run, Sunday easy or rest.", variant: "default" },
      { heading: "Common interval mistakes", body: "The most common mistake is running recovery intervals too fast. Your recovery pace should be genuinely easy — walking is perfectly acceptable for short reps. Running recoveries too hard turns a precise training stimulus into generic 'hard running' that doesn't target any specific system effectively.", variant: "warning", listItems: ["Starting reps too fast and fading — practice even pacing", "Running recovery too hard — it should feel easy", "Doing speed work when fatigued from yesterday's session", "Skipping the warm-up — this is an injury waiting to happen", "Too much volume: quality over quantity for intervals"] },
    ],
  },
  "sleep-and-running": {
    title: "Sleep & Running Performance: The Science",
    description: "Why sleep is the most powerful (and free) performance enhancer for runners. Learn how sleep quality affects recovery, injury risk, and race-day performance.",
    tags: ["recupero", "proteine", "muscoli"],
    heroImage: guideSleepRecovery,
    readTime: "7 min read",
    keyTakeaways: [
      "One night of poor sleep reduces endurance performance by 11%",
      "Growth hormone peaks during deep sleep — essential for muscle repair",
      "Sleep extension (9+ hours) measurably improves sprint times and reaction time",
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
      { heading: "Sleep is your #1 recovery tool", body: "No supplement, foam roller or ice bath comes close to the restorative power of sleep. During deep sleep (stages 3-4), your body releases 70% of its daily growth hormone — the key driver of muscle repair and tissue regeneration. A Stanford study found that athletes who extended sleep to 9+ hours improved sprint times by 5% and reaction time by 9%. Sleep is not passive rest — it's active recovery.", variant: "highlight" },
      { heading: "How poor sleep impacts running", body: "Sleep deprivation has measurable, negative effects on every aspect of running performance. Even one night of poor sleep (under 6 hours) impacts your body significantly.", variant: "warning", listItems: ["Endurance drops 11% after one bad night", "Perceived effort (RPE) increases — the same pace feels harder", "Glycogen replenishment is impaired — less fuel for tomorrow's run", "Injury risk increases 1.7x with less than 7 hours of sleep", "Immune function drops — making you more susceptible to illness during heavy training"] },
      { heading: "Sleep hygiene for runners", body: "Sleep quality matters as much as quantity. These evidence-based habits improve both how fast you fall asleep and how much deep sleep you achieve.", variant: "checklist", listItems: ["Consistent schedule: same bedtime and wake time, even weekends (±30 min)", "Cool room: 16-19°C is optimal for deep sleep", "No screens 60 min before bed: blue light suppresses melatonin by 50%", "Avoid caffeine after 2pm: half-life is 5-6 hours", "Post-run timing: finish intense sessions at least 3 hours before bed", "Magnesium glycinate (200-400mg) before bed supports sleep quality"] },
      { heading: "Naps and sleep banking", body: "A 20-30 minute nap between 1-3pm can partially compensate for a poor night's sleep without affecting nighttime sleep quality. Longer naps (60-90 minutes) include a full sleep cycle and are beneficial before races or during heavy training blocks. 'Sleep banking' — extending sleep for a week before a race — has been shown to buffer against race-week sleep disruptions.", variant: "tip" },
      { heading: "Pre-race sleep strategy", body: "Race-night insomnia is extremely common — and largely harmless. Research shows that the sleep 2 nights before the race matters more than the night before. Bank extra sleep during race week, plan a calming pre-bed routine, and don't stress about race-night wakefulness. Your adrenaline will more than compensate on race day.", variant: "default" },
    ],
  },
};
const SectionBlock = ({ section, index }: { section: GuideSection; index: number }) => {
  const isEven = index % 2 === 0;

  const variantIcon = {
    tip: <Lightbulb className="h-5 w-5 text-primary" />,
    warning: <AlertTriangle className="h-5 w-5 text-accent" />,
    highlight: null,
    checklist: <CheckCircle2 className="h-5 w-5 text-primary" />,
    default: null,
  };

  const variantStyles: Record<SectionVariant, string> = {
    default: "",
    highlight: "bg-primary/5 border-l-4 border-primary rounded-r-xl p-5 sm:p-6",
    tip: "bg-primary/5 border border-primary/20 rounded-xl p-5 sm:p-6",
    warning: "bg-accent/5 border border-accent/20 rounded-xl p-5 sm:p-6",
    checklist: "bg-secondary/50 border border-border rounded-xl p-5 sm:p-6",
  };

  const variant = section.variant || "default";
  const icon = variantIcon[variant];

  return (
    <section
      id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}
      className={`scroll-mt-24 ${variantStyles[variant]} ${variant === "default" ? (isEven ? "" : "") : ""}`}
    >
      <div className="flex items-start gap-3">
        {icon && <div className="mt-0.5 shrink-0">{icon}</div>}
        <div className="flex-1 min-w-0">
          <h2 className="font-display text-lg font-bold text-foreground sm:text-xl lg:text-2xl">
            {section.heading}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-[17px] lg:leading-relaxed">
            {section.body}
          </p>
          {section.listItems && (
            <ul className={`mt-3 space-y-2 ${variant === "checklist" ? "" : "list-disc pl-5"}`}>
              {section.listItems.map((item, i) => (
                <li key={i} className={`text-sm text-muted-foreground sm:text-base ${variant === "checklist" ? "flex items-start gap-2" : ""}`}>
                  {variant === "checklist" && <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

/* ─── Key Takeaways box ─── */
const KeyTakeaways = ({ items }: { items: string[] }) => (
  <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/15 p-5 sm:p-6">
    <h3 className="flex items-center gap-2 font-display text-base font-bold text-foreground sm:text-lg">
      <Lightbulb className="h-5 w-5 text-primary" />
      Key Takeaways
    </h3>
    <ul className="mt-3 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-foreground sm:text-base">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const GuidePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? guidesContent[slug] : null;

  if (!guide) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="font-display text-2xl font-bold text-foreground">Guide not found</h1>
          <Link to="/guides" className="mt-4 inline-block text-sm text-primary hover:underline">Back to guides</Link>
        </div>
      </Layout>
    );
  }

  const guideProducts = (productsData as { id: string; nome: string; descrizione: string; linkAffiliato: string; immagine: string; tag: string[] }[])
    .filter((p) => p.tag.some((t) => guide.tags.includes(t)));

  const relatedComparisons = (comparisonsData as Comparison[])
    .filter((c) => c.tags.some((t) => guide.tags.includes(t)))
    .slice(0, 3);

  return (
    <Layout>
      <SEOHead title={guide.title} description={guide.description} path={`/guides/${slug}`} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        author: { "@type": "Organization", name: "Runners Hub", url: "https://www.runners-hub.org" },
        publisher: { "@type": "Organization", name: "Runners Hub", url: "https://www.runners-hub.org", logo: { "@type": "ImageObject", url: "https://www.runners-hub.org/favicon.ico" } },
        mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.runners-hub.org/guides/${slug}` },
        image: guide.heroImage,
        articleSection: guide.tags.join(", "),
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["article p", "article h2"]
        }
      }} />
      {guideProducts.length > 0 && (
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `Related products – ${guide.title}`,
          itemListElement: guideProducts.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: { "@type": "Product", name: p.nome, description: p.descrizione, image: p.immagine, url: p.linkAffiliato },
          })),
        }} />
      )}

      {/* Hero section */}
      <div className="relative w-full overflow-hidden bg-foreground">
        <img
          src={guide.heroImage}
          alt={guide.title}
          width={1200}
          height={400}
          fetchPriority="high"
          className="h-48 w-full object-cover opacity-60 sm:h-64 md:h-80 lg:h-96"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto max-w-3xl px-4 pb-6 sm:pb-8 lg:pb-10">
            <Link to="/guides" className="mb-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground sm:text-sm">
              <ArrowLeft className="h-3.5 w-3.5" /> All guides
            </Link>
            <h1 className="font-display text-display-lg font-bold text-primary-foreground leading-tight">
              {guide.title}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-3 sm:mt-3">
              <span className="inline-flex items-center gap-1.5 text-xs text-primary-foreground/70 sm:text-sm">
                <Clock className="h-3.5 w-3.5" /> {guide.readTime}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-primary-foreground/70 sm:text-sm">
                <Tag className="h-3.5 w-3.5" /> {guide.tags.length} topics
              </span>
            </div>
          </div>
        </div>
      </div>

      <article className="container mx-auto max-w-3xl px-4 py-10 sm:py-14">
        {/* Description */}
        <p className="text-base text-muted-foreground leading-relaxed sm:text-lg lg:text-xl lg:leading-relaxed">
          {guide.description}
        </p>

        {/* Table of Contents */}
        <nav className="mt-6 rounded-xl border border-border bg-secondary/30 p-4 sm:mt-8 sm:p-5" aria-label="Table of contents">
          <h2 className="flex items-center gap-2 font-display text-sm font-bold text-foreground sm:text-base">
            <BookOpen className="h-4 w-4 text-primary" /> Table of Contents
          </h2>
          <ol className="mt-3 space-y-1.5">
            {guide.sections.map((section, i) => {
              const sectionId = section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
              return (
                <li key={i}>
                  <a
                    href={`#${sectionId}`}
                    className="group flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary"
                  >
                    <span className="font-mono text-xs text-muted-foreground/60">{String(i + 1).padStart(2, "0")}</span>
                    {section.heading}
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Key takeaways */}
        <div className="mt-6 sm:mt-8">
          <KeyTakeaways items={guide.keyTakeaways} />
        </div>

        {/* Sections */}
        <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
          {guide.sections.map((section, i) => (
            <SectionBlock key={i} section={section} index={i} />
          ))}
        </div>

        {/* Products */}
        <RecommendedProducts tags={guide.tags} title="Related products" />

        {/* ZoneRun Banner */}
        <div className="mt-8">
          <ZoneRunBanner variant="inline" />
        </div>

        {/* Related Tools */}
        {guide.relatedTools.length > 0 && (
          <section className="mt-8 sm:mt-10">
            <h2 className="mb-4 flex items-center gap-2 font-display text-display-md font-bold text-foreground">
              <Wrench className="h-5 w-5 text-primary" /> Try These Tools
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {guide.relatedTools.map((tool) => (
                <Link
                  key={tool.to}
                  to={tool.to}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Wrench className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-card-foreground">{tool.label}</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related Comparisons */}
        {relatedComparisons.length > 0 && (
          <section className="mt-8 sm:mt-10">
            <h2 className="mb-4 flex items-center gap-2 font-display text-display-md font-bold text-foreground">
              <BarChart3 className="h-5 w-5 text-primary" /> Related Comparisons
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedComparisons.map((c) => {
                const cSlug = `${c.categoria}-per-${c.sport}-${c.obiettivo}`;
                return (
                  <Link
                    key={cSlug}
                    to={`/comparison/${cSlug}`}
                    className="group rounded-xl border border-border bg-card p-4 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
                  >
                    <h3 className="text-sm font-semibold capitalize text-card-foreground">{translateCategory(c.categoria)} for {translateSport(c.sport)}</h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent">{translateGoal(c.obiettivo)}</p>
                    <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{c.intro}</p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Related Guides */}
        {guide.relatedGuides.length > 0 && (
          <section className="mt-8 sm:mt-10">
            <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-foreground sm:text-2xl">
              <BookOpen className="h-5 w-5 text-primary" /> Keep Reading
            </h2>
            <div className="grid gap-3">
              {guide.relatedGuides.map((g) => (
                <Link
                  key={g.slug}
                  to={`/guides/${g.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <BookOpen className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-card-foreground">{g.label}</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </Layout>
  );
};

export default GuidePage;
