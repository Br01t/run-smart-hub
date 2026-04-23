import { GuideContent } from "@/types/guide";
import guideRunningForm from "@/assets/guide-running-form.webp";

export const runningForm: GuideContent = {
  title: "How to Improve Your Running Form",
  seoTitle: "Running Form Guide 2026: Efficiency & Posture Science",
  seoDescription: "Run faster with less effort. Master the science of running form, including pelvic tilt, arm swing torque, and the 'ankle lean' for maximum efficiency.",
  keywords: ["running form guide", "running posture", "improve running efficiency", "midfoot strike running", "running arm swing", "proper running technique"],
  description: "Fix your posture, arm swing, foot strike and breathing for more efficient, injury-free running.",
  tags: ["running", "muscles", "shoes"],
  heroImage: guideRunningForm,
  readTime: "12 min read",
  keyTakeaways: [
    "Run 'tall' with a slight lean from the ankles, not the hips",
    "Land with your foot directly under your center of mass to eliminate braking forces",
    "Arm swing should be compact and sagittal (forward-back), preventing rotational waste",
    "A stable, neutral pelvis is the foundation of a powerful stride",
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
    { 
      heading: "The Science: Kinetic Chain Alignment", 
      body: "Running form is the optimization of the 'Kinetic Chain'. Every inefficiency—like overstriding or crossing the midline—creates 'braking forces' that the body must overcome. \n\n**Energy Leakage:** Lateral 'wobbling' of the hips or shoulders represents energy that should be moving you forward but is being lost to the sides. A rigid, stable core and a neutral pelvis allow your limbs to produce power from a solid platform, significantly improving your Running Economy (the oxygen cost of a given pace).", 
      variant: "highlight" 
    },
    { 
      heading: "Postural Pillars: The Ankle Lean", 
      body: "Effective running is essentially a 'controlled fall'. Instead of leaning from the waist (which puts stress on the lower back and limits hip extension), you should lean from the **ankles**. \n\n- **The Gravity Assist:** This slight forward tilt uses gravity to pull your center of mass forward, reducing the muscular work required to initiate each step. \n- **The Tall Cue:** Imagine a string pulling the crown of your head toward the sky. This lengthens the spine and opens up the thoracic cavity for better breathing capacity.", 
      variant: "default" 
    },
    { 
      heading: "Arm Swing & Rotational Torque", 
      body: "Your arms are not just passengers; they are essential for counterbalancing the rotational torque of your legs. \n\n- **Sagittal Plane:** Arms should move primarily forward and back. If your hands cross the midline of your chest, your upper body rotates excessively, forcing your core and hips to work harder to keep you straight. \n- **The 90-Degree Rule:** Keep your elbows bent at 90 degrees or slightly less. A long, swinging arm is a longer 'lever', which requires more energy to move back and forth.", 
      variant: "default", 
      listItems: [
        "Shoulder Relaxation: High, tense shoulders restrict lung expansion and waste glycogen", 
        "Foot Strike: Don't 'reach' with your foot; let it land naturally underneath your hips", 
        "Pelvic Tilt: Avoid 'butt-out' (anterior tilt) as it inhibits glute engagement",
        "Knee Drive: A moderate knee drive creates the necessary space for an efficient stride."
      ] 
    },
    {
      heading: "The 'Quiet Feet' Rule",
      body: "A loud 'slap' on the pavement is a sign of wasted energy and high impact loading. Focus on 'quiet feet'. If you can hear your footsteps over your breathing, you are likely landing too heavily or overstriding. Quiet feet naturally encourage a mid-foot strike and better shock absorption.",
      variant: "tip"
    },
    {
      heading: "Avoid the 'Seated' Position",
      body: "When runners get tired, they often 'sink' into their hips, appearing as if they are sitting in a chair while running. This disables the glutes and puts massive pressure on the lower back and knees. Every 10 minutes, perform a 'form reset': straighten the spine, engage the core, and pick up the cadence.",
      variant: "warning"
    },
    { 
      heading: "Form Correction Checklist", 
      body: "Practice these cues during your easy runs to build the muscle memory for race day.", 
      variant: "checklist", 
      listItems: [
        "Head Position: Look 20-30 meters ahead, not at your feet, to keep your neck neutral.", 
        "Hand Grip: Imagine holding a delicate egg in each hand—relaxed hands equal relaxed shoulders.", 
        "The 'Pull' Drill: Focus on pulling your heel up toward your glute rather than pushing off the ground.", 
        "Belly Breathing: Ensure your stomach expands on the inhale to maximize oxygen intake.",
        "Post-Run Strides: Perform 4x 100m fast 'form focus' runs to lock in good habits while tired."
      ] 
    },
  ],
  hubCategory: "shoes",
};
