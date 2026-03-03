import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, User, CheckCircle, Zap, Target, Heart, Droplets, Dumbbell, Footprints, BookOpen, Wrench, RotateCcw, Trophy, Shield, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import RecommendedProducts from "@/components/RecommendedProducts";
import ZoneRunBanner from "@/components/ZoneRunBanner";

interface QuizQuestion {
  id: string;
  label: string;
  subtitle: string;
  icon: React.ReactNode;
  options: { value: string; label: string; icon: React.ReactNode; description: string }[];
}

const questions: QuizQuestion[] = [
  {
    id: "experience",
    label: "What's your running experience?",
    subtitle: "This helps us calibrate recommendations to your level.",
    icon: <Footprints className="h-5 w-5" />,
    options: [
      { value: "beginner", label: "Beginner", icon: <User className="h-4 w-4" />, description: "Just started or running < 6 months" },
      { value: "intermediate", label: "Intermediate", icon: <Activity className="h-4 w-4" />, description: "1-3 years, running regularly" },
      { value: "advanced", label: "Advanced", icon: <Zap className="h-4 w-4" />, description: "3+ years, structured training" },
      { value: "competitive", label: "Competitive", icon: <Trophy className="h-4 w-4" />, description: "Racing regularly, chasing PRs" },
    ],
  },
  {
    id: "distance",
    label: "What distance do you focus on?",
    subtitle: "Different distances require different strategies.",
    icon: <Target className="h-5 w-5" />,
    options: [
      { value: "5k-10k", label: "5K – 10K", icon: <Zap className="h-4 w-4" />, description: "Speed-focused shorter distances" },
      { value: "half-marathon", label: "Half Marathon", icon: <Activity className="h-4 w-4" />, description: "The sweet spot: speed meets endurance" },
      { value: "marathon", label: "Marathon", icon: <Target className="h-4 w-4" />, description: "The classic 42.2K challenge" },
      { value: "trail-ultra", label: "Trail / Ultra", icon: <Footprints className="h-4 w-4" />, description: "Off-road and ultra-distance running" },
    ],
  },
  {
    id: "frequency",
    label: "How many times per week do you run?",
    subtitle: "Training volume affects nutrition and recovery needs.",
    icon: <Activity className="h-5 w-5" />,
    options: [
      { value: "1-2", label: "1-2 times", icon: <Heart className="h-4 w-4" />, description: "Casual or just getting started" },
      { value: "3-4", label: "3-4 times", icon: <Activity className="h-4 w-4" />, description: "Consistent recreational runner" },
      { value: "5-6", label: "5-6 times", icon: <Zap className="h-4 w-4" />, description: "Dedicated training schedule" },
      { value: "7+", label: "Daily+", icon: <Trophy className="h-4 w-4" />, description: "High volume, sometimes doubles" },
    ],
  },
  {
    id: "goal",
    label: "What's your primary goal right now?",
    subtitle: "We'll tailor recommendations to what matters most.",
    icon: <Trophy className="h-5 w-5" />,
    options: [
      { value: "speed", label: "Get Faster", icon: <Zap className="h-4 w-4" />, description: "Set new PRs and improve race times" },
      { value: "endurance", label: "Build Endurance", icon: <Target className="h-4 w-4" />, description: "Run longer distances comfortably" },
      { value: "weight-loss", label: "Lose Weight", icon: <Activity className="h-4 w-4" />, description: "Use running for healthy weight loss" },
      { value: "injury-free", label: "Stay Injury-Free", icon: <Shield className="h-4 w-4" />, description: "Prevent injuries and run consistently" },
    ],
  },
  {
    id: "issue",
    label: "What's your biggest challenge?",
    subtitle: "Identifying weak points helps us focus your plan.",
    icon: <Heart className="h-5 w-5" />,
    options: [
      { value: "cramps-dehydration", label: "Cramps & Dehydration", icon: <Droplets className="h-4 w-4" />, description: "Muscle cramps or feeling dehydrated" },
      { value: "fatigue-recovery", label: "Fatigue & Slow Recovery", icon: <Dumbbell className="h-4 w-4" />, description: "Always tired, takes days to recover" },
      { value: "injuries", label: "Recurring Injuries", icon: <Shield className="h-4 w-4" />, description: "Knee pain, shin splints, IT band issues" },
      { value: "nutrition", label: "Nutrition Confusion", icon: <Zap className="h-4 w-4" />, description: "Not sure what or when to eat" },
    ],
  },
];

type Answers = Record<string, string>;

interface ProfileResult {
  title: string;
  archetype: string;
  description: string;
  tags: string[];
  tools: { label: string; to: string; icon: React.ReactNode }[];
  guides: { label: string; slug: string }[];
  tips: string[];
}

const getProfile = (answers: Answers): ProfileResult => {
  const tags: string[] = [];
  const tools: { label: string; to: string; icon: React.ReactNode }[] = [];
  const guides: { label: string; slug: string }[] = [];
  const tips: string[] = [];

  // Archetype based on experience + goal
  let title = "The Balanced Runner";
  let archetype = "🏃";
  let description = "You have a well-rounded approach to running. Focus on consistency and progressive overload.";

  if (answers.experience === "beginner") {
    archetype = "🌱";
    title = "The Rising Runner";
    description = "You're building your foundation — the most exciting phase! Focus on consistency over intensity, and let your body adapt gradually.";
    guides.push({ label: "Getting Started with Trail Running", slug: "trail-running-beginners" });
    tips.push("Follow the 10% rule: never increase weekly mileage by more than 10%");
    tips.push("Invest in proper running shoes — get a gait analysis at a specialty store");
  } else if (answers.experience === "competitive") {
    archetype = "🏆";
    title = "The Competitive Racer";
    description = "You're optimizing every detail for peak performance. Marginal gains in nutrition, recovery and training structure will take you to the next level.";
    tips.push("Periodize your training: base → build → peak → taper → race");
    tips.push("Consider lab testing (VO2max, lactate threshold) for precision training zones");
  } else if (answers.experience === "advanced") {
    archetype = "⚡";
    title = "The Dedicated Athlete";
    description = "You have a solid base and know your body well. Time to fine-tune your approach with data-driven training and targeted supplementation.";
    tips.push("Track heart rate variability (HRV) to optimize training load and recovery");
  } else {
    archetype = "🎯";
    title = "The Progressing Runner";
    description = "You've built consistency and are ready for the next step. Structured training and smarter nutrition will unlock significant gains.";
  }

  // Distance-based recommendations
  if (answers.distance === "5k-10k") {
    tags.push("energia", "integratori");
    guides.push({ label: "Running Cadence: Why Steps Per Minute Matter", slug: "running-cadence" });
    guides.push({ label: "How to Improve Your Running Form", slug: "running-form" });
    tips.push("For 5K-10K, speed work (intervals, tempo runs) is king — 2 quality sessions per week");
  } else if (answers.distance === "half-marathon") {
    tags.push("energia", "carboidrati", "elettroliti");
    guides.push({ label: "Marathon Training Guide", slug: "marathon-training" });
    guides.push({ label: "Running Nutrition", slug: "running-nutrition" });
    tips.push("Practice your race-day fueling strategy during long runs — nothing new on race day");
  } else if (answers.distance === "marathon") {
    tags.push("energia", "carboidrati", "elettroliti", "integratori");
    tools.push({ label: "Hydration Calculator", to: "/tools/hydration", icon: <Droplets className="h-4 w-4" /> });
    guides.push({ label: "Marathon Training Guide", slug: "marathon-training" });
    guides.push({ label: "Running Nutrition", slug: "running-nutrition" });
    tips.push("Long runs are your most important workout — build up to 32-35K before race day");
    tips.push("Carb-load 2-3 days before race day: 7-10g/kg bodyweight");
  } else if (answers.distance === "trail-ultra") {
    tags.push("elettroliti", "idratazione", "energia", "accessori");
    tools.push({ label: "Hydration Calculator", to: "/tools/hydration", icon: <Droplets className="h-4 w-4" /> });
    tools.push({ label: "Electrolyte Calculator", to: "/tools/electrolytes", icon: <Zap className="h-4 w-4" /> });
    guides.push({ label: "Getting Started with Trail Running", slug: "trail-running-beginners" });
    guides.push({ label: "Hill Training for Runners", slug: "hill-training" });
    tips.push("Train on terrain similar to your target race — specificity matters");
  }

  // Goal-based
  if (answers.goal === "speed") {
    tags.push("energia", "integratori", "carboidrati");
    tools.push({ label: "Calories Calculator", to: "/tools/calories", icon: <Zap className="h-4 w-4" /> });
    guides.push({ label: "Heart Rate Zone Training", slug: "running-heart-rate-zones" });
    tips.push("80% of your runs should be easy — hard days hard, easy days easy");
  } else if (answers.goal === "endurance") {
    tags.push("energia", "carboidrati", "elettroliti");
    tools.push({ label: "Calories Calculator", to: "/tools/calories", icon: <Zap className="h-4 w-4" /> });
    tips.push("Build aerobic base with lots of Zone 2 running before adding intensity");
  } else if (answers.goal === "weight-loss") {
    tags.push("proteine", "energia");
    tools.push({ label: "BMI Calculator", to: "/tools/bmi", icon: <Activity className="h-4 w-4" /> });
    tools.push({ label: "Calories Calculator", to: "/tools/calories", icon: <Zap className="h-4 w-4" /> });
    tips.push("A moderate deficit of 300-500 kcal/day preserves performance while losing fat");
    tips.push("Prioritize protein (1.6-2.0g/kg) to preserve muscle during weight loss");
  } else if (answers.goal === "injury-free") {
    tags.push("recupero", "muscoli", "magnesio");
    tools.push({ label: "Protein Calculator", to: "/tools/protein", icon: <Dumbbell className="h-4 w-4" /> });
    guides.push({ label: "Runner's Guide to Injury Prevention", slug: "injury-prevention" });
    guides.push({ label: "The Runner's Stretching Guide", slug: "stretching-for-runners" });
    tips.push("Add 2-3 strength sessions per week — focus on glutes, core and calves");
  }

  // Issue-based
  if (answers.issue === "cramps-dehydration") {
    tags.push("idratazione", "elettroliti", "magnesio");
    tools.push({ label: "Hydration Calculator", to: "/tools/hydration", icon: <Droplets className="h-4 w-4" /> });
    tools.push({ label: "Electrolyte Calculator", to: "/tools/electrolytes", icon: <Zap className="h-4 w-4" /> });
    tips.push("Start runs well-hydrated and take electrolytes for sessions over 60 minutes");
  } else if (answers.issue === "fatigue-recovery") {
    tags.push("proteine", "recupero", "magnesio");
    tools.push({ label: "Protein Calculator", to: "/tools/protein", icon: <Dumbbell className="h-4 w-4" /> });
    guides.push({ label: "Muscle Recovery After Running", slug: "muscle-recovery" });
    tips.push("Sleep is your #1 recovery tool — aim for 7-9 hours consistently");
    tips.push("Take 20-30g protein within 30 min of finishing your run");
  } else if (answers.issue === "injuries") {
    tags.push("recupero", "muscoli", "scarpe");
    guides.push({ label: "Injury Prevention Guide", slug: "injury-prevention" });
    guides.push({ label: "The Runner's Stretching Guide", slug: "stretching-for-runners" });
    tips.push("Consider seeing a sports physio for a movement screening");
    tips.push("Replace running shoes every 600-800 km");
  } else if (answers.issue === "nutrition") {
    tags.push("energia", "carboidrati", "proteine", "integratori");
    tools.push({ label: "Calories Calculator", to: "/tools/calories", icon: <Zap className="h-4 w-4" /> });
    tools.push({ label: "Protein Calculator", to: "/tools/protein", icon: <Dumbbell className="h-4 w-4" /> });
    guides.push({ label: "Running Nutrition Guide", slug: "running-nutrition" });
    guides.push({ label: "Essential Supplements", slug: "supplements-for-runners" });
    tips.push("Eat carb-rich meals 2-3 hours before running, protein within 30 min after");
  }

  // Frequency-based additions
  if (answers.frequency === "5-6" || answers.frequency === "7+") {
    tags.push("proteine", "recupero");
    tips.push("With high training volume, recovery nutrition is non-negotiable — don't skip post-run fueling");
  }

  // Deduplicate
  const uniqueTags = [...new Set(tags)];
  const uniqueTools = tools.filter((t, i, arr) => arr.findIndex((x) => x.to === t.to) === i);
  const uniqueGuides = guides.filter((g, i, arr) => arr.findIndex((x) => x.slug === g.slug) === i).slice(0, 4);

  if (uniqueTools.length === 0) {
    uniqueTools.push({ label: "All Tools", to: "/tools", icon: <Wrench className="h-4 w-4" /> });
  }

  return {
    title,
    archetype,
    description,
    tags: uniqueTags.length > 0 ? uniqueTags : ["integratori", "corsa"],
    tools: uniqueTools,
    guides: uniqueGuides,
    tips: [...new Set(tips)].slice(0, 5),
  };
};

const ProfileQuiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const done = step >= questions.length;
  const progress = (step / questions.length) * 100;

  const selectAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [questions[step].id]: value }));
    setTimeout(() => setStep((s) => s + 1), 250);
  };

  const profile = done ? getProfile(answers) : null;

  return (
    <Layout>
      <SEOHead
        title="Runner Profile Quiz"
        description="Take the Runner Profile Quiz to get personalized recommendations for training, nutrition and gear based on your goals and experience."
        path="/quiz"
      />

      {!done && (
        <div className="min-h-[80vh] flex flex-col">
          {/* Progress bar */}
          <div className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur-sm">
            <div className="container mx-auto max-w-2xl px-4 py-3 sm:py-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-muted-foreground">
                  Step {step + 1} of {questions.length}
                </span>
                <span className="text-xs font-bold text-primary">{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>

          {/* Question content */}
          <div className="flex-1 flex items-center">
            <div className="container mx-auto max-w-2xl px-4 py-8 sm:py-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Question header */}
                  <div className="mb-6 sm:mb-8 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:h-14 sm:w-14">
                      {questions[step].icon}
                    </div>
                    <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
                      {questions[step].label}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                      {questions[step].subtitle}
                    </p>
                  </div>

                  {/* Options */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    {questions[step].options.map((opt) => {
                      const isSelected = answers[questions[step].id] === opt.value;
                      return (
                        <button
                          key={opt.value}
                          onClick={() => selectAnswer(opt.value)}
                          className={`group relative rounded-2xl border-2 p-4 text-left transition-all sm:p-5 ${
                            isSelected
                              ? "border-primary bg-primary/5 shadow-md"
                              : "border-border bg-card hover:border-primary/40 hover:shadow-sm"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
                              isSelected ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                            }`}>
                              {opt.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className={`font-display text-sm font-bold sm:text-base ${isSelected ? "text-primary" : "text-card-foreground"}`}>
                                {opt.label}
                              </p>
                              <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                                {opt.description}
                              </p>
                            </div>
                            {isSelected && (
                              <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Back button */}
              {step > 0 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => setStep((s) => s - 1)}
                  className="mt-6 inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <ArrowLeft className="h-4 w-4" /> Previous question
                </motion.button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {done && profile && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {/* Hero result */}
          <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary/10 via-background to-accent/5">
            <div className="container mx-auto max-w-3xl px-4 py-10 sm:py-14 text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mx-auto mb-4 text-5xl sm:text-6xl"
              >
                {profile.archetype}
              </motion.div>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="font-display text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl"
              >
                {profile.title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground sm:text-base leading-relaxed"
              >
                {profile.description}
              </motion.p>
            </div>
          </section>

          <div className="container mx-auto max-w-3xl px-4 py-6 sm:py-10 space-y-6 sm:space-y-8">
            {/* Your answers summary */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-card"
            >
              <h2 className="mb-3 flex items-center gap-2 font-display text-base font-bold text-card-foreground sm:text-lg">
                <User className="h-5 w-5 text-primary" /> Your Profile Summary
              </h2>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
                {questions.map((q) => {
                  const answer = answers[q.id];
                  const opt = q.options.find((o) => o.value === answer);
                  return (
                    <div key={q.id} className="rounded-xl bg-secondary/50 p-3">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{q.id}</p>
                      <p className="mt-0.5 text-sm font-semibold text-foreground">{opt?.label || answer}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Personalized tips */}
            {profile.tips.length > 0 && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-4 sm:p-6"
              >
                <h2 className="mb-4 flex items-center gap-2 font-display text-base font-bold text-foreground sm:text-lg">
                  <Zap className="h-5 w-5 text-primary" /> Personalized Tips
                </h2>
                <div className="space-y-3">
                  {profile.tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                        {i + 1}
                      </div>
                      <p className="text-sm text-foreground leading-relaxed sm:text-base">{tip}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Recommended tools */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-card"
            >
              <h2 className="mb-4 flex items-center gap-2 font-display text-base font-bold text-card-foreground sm:text-lg">
                <Wrench className="h-5 w-5 text-primary" /> Recommended Tools
              </h2>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {profile.tools.map((tool) => (
                  <Link
                    key={tool.to}
                    to={tool.to}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-background p-3.5 transition-all hover:border-primary/30 hover:shadow-sm hover:-translate-y-0.5 sm:p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {tool.icon}
                    </div>
                    <span className="flex-1 text-sm font-medium text-foreground">{tool.label}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Recommended guides */}
            {profile.guides.length > 0 && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-card"
              >
                <h2 className="mb-4 flex items-center gap-2 font-display text-base font-bold text-card-foreground sm:text-lg">
                  <BookOpen className="h-5 w-5 text-primary" /> Recommended Reading
                </h2>
                <div className="space-y-2.5">
                  {profile.guides.map((guide) => (
                    <Link
                      key={guide.slug}
                      to={`/guides/${guide.slug}`}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-background p-3.5 transition-all hover:border-primary/30 hover:shadow-sm hover:-translate-y-0.5 sm:p-4"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <span className="flex-1 text-sm font-medium text-foreground">{guide.label}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Products */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <RecommendedProducts tags={profile.tags} title="Products Picked For You" maxProducts={4} />
            </motion.div>

            {/* ZoneRun banner */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <ZoneRunBanner variant="inline" />
            </motion.div>

            {/* Retake */}
            <div className="flex items-center justify-center pb-4">
              <button
                onClick={() => { setStep(0); setAnswers({}); }}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-medium text-muted-foreground shadow-card transition-all hover:text-foreground hover:shadow-card-hover"
              >
                <RotateCcw className="h-4 w-4" /> Retake Quiz
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </Layout>
  );
};

export default ProfileQuiz;
