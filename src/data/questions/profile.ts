import { QuizQuestion } from "@/types/quiz";

export const profileQuestions: QuizQuestion[] = [
  {
    id: "experience",
    label: "What's your running experience?",
    subtitle: "This helps us calibrate recommendations to your level.",
    icon: "Footprints",
    options: [
      { value: "beginner", label: "Beginner", icon: "User", description: "Just started or running < 6 months" },
      { value: "intermediate", label: "Intermediate", icon: "Activity", description: "1-3 years, running regularly" },
      { value: "advanced", label: "Advanced", icon: "Zap", description: "3+ years, structured training" },
      { value: "competitive", label: "Competitive", icon: "Trophy", description: "Racing regularly, chasing PRs" },
    ],
  },
  {
    id: "distance",
    label: "What distance do you focus on?",
    subtitle: "Different distances require different strategies.",
    icon: "Target",
    options: [
      { value: "5k-10k", label: "5K – 10K", icon: "Zap", description: "Speed-focused shorter distances" },
      { value: "half-marathon", label: "Half Marathon", icon: "Activity", description: "The sweet spot: speed meets endurance" },
      { value: "marathon", label: "Marathon", icon: "Target", description: "The classic 42.2K challenge" },
      { value: "trail-ultra", label: "Trail / Ultra", icon: "Footprints", description: "Off-road and ultra-distance running" },
    ],
  },
  {
    id: "frequency",
    label: "How many times per week do you run?",
    subtitle: "Training volume affects nutrition and recovery needs.",
    icon: "Activity",
    options: [
      { value: "1-2", label: "1-2 times", icon: "Heart", description: "Casual or just getting started" },
      { value: "3-4", label: "3-4 times", icon: "Activity", description: "Consistent recreational runner" },
      { value: "5-6", label: "5-6 times", icon: "Zap", description: "Dedicated training schedule" },
      { value: "7+", label: "Daily+", icon: "Trophy", description: "High volume, sometimes doubles" },
    ],
  },
  {
    id: "goal",
    label: "What's your primary goal right now?",
    subtitle: "We'll tailor recommendations to what matters most.",
    icon: "Trophy",
    options: [
      { value: "speed", label: "Get Faster", icon: "Zap", description: "Set new PRs and improve race times" },
      { value: "endurance", label: "Build Endurance", icon: "Target", description: "Run longer distances comfortably" },
      { value: "weight-loss", label: "Lose Weight", icon: "Activity", description: "Use running for healthy weight loss" },
      { value: "injury-free", label: "Stay Injury-Free", icon: "Shield", description: "Prevent injuries and run consistently" },
    ],
  },
  {
    id: "issue",
    label: "What's your biggest challenge?",
    subtitle: "Identifying weak points helps us focus your plan.",
    icon: "Heart",
    options: [
      { value: "cramps-dehydration", label: "Cramps & Dehydration", icon: "Droplets", description: "Muscle cramps or feeling dehydrated" },
      { value: "fatigue-recovery", label: "Fatigue & Slow Recovery", icon: "Dumbbell", description: "Always tired, takes days to recover" },
      { value: "injuries", label: "Recurring Injuries", icon: "Shield", description: "Knee pain, shin splints, IT band issues" },
      { value: "nutrition", label: "Nutrition Confusion", icon: "Zap", description: "Not sure what or when to eat" },
    ],
  },
];
