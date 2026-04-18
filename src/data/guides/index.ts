import { GuideContent } from "@/types/guide";
import { choosingRunningShoes } from "./choosing-shoes";
import { supplementsForRunners } from "./supplements";
import { muscleRecovery } from "./recovery";
import { runningNutrition } from "./nutrition";
import { injuryPrevention } from "./injury-prevention";
import { marathonTraining } from "./marathon-training";
import { trailRunning } from "./trail-running";
import { heartRateZones } from "./heart-rate-zones";
import { stretchingForRunners } from "./stretching";
import { runningForm } from "./running-form";
import { runningCadence } from "./running-cadence";
import { hillTraining } from "./hill-training";
import { runningWatches } from "./running-watches";
import { winterRunning } from "./winter-running";
import { intervalTraining } from "./interval-training";
import { sleepAndRunning } from "./sleep-and-running";
import { runningShoeRotation } from "./shoe-rotation";

export const guidesContent: Record<string, GuideContent> = {
  "choosing-running-shoes": choosingRunningShoes,
  "supplements-for-runners": supplementsForRunners,
  "muscle-recovery": muscleRecovery,
  "running-nutrition": runningNutrition,
  "injury-prevention": injuryPrevention,
  "marathon-training": marathonTraining,
  "trail-running-beginners": trailRunning,
  "running-heart-rate-zones": heartRateZones,
  "stretching-for-runners": stretchingForRunners,
  "running-form": runningForm,
  "running-cadence": runningCadence,
  "hill-training": hillTraining,
  "best-running-watches": runningWatches,
  "winter-running": winterRunning,
  "interval-training": intervalTraining,
  "sleep-and-running": sleepAndRunning,
  "running-shoe-rotation": runningShoeRotation,
};
