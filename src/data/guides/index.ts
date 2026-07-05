import { GuideContent } from "@/types/guide";
import { choosingRunningShoes } from "./choosing-shoes";
import { supplementsForRunners } from "./supplements";
import { recovery } from "./recovery";
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
import { integratoriPerChiCorre } from "./integratori-per-chi-corre";
import { gelEnergeticiCorsa } from "./gel-energetici-corsa";
import { ginocchioDelCorridore } from "./ginocchio-del-corridore";
import { tabellaCorsaPrincipianti } from "./tabella-corsa-principianti";
import { scarpeRunningPronazione } from "./scarpe-running-pronazione";



export const guidesContent: Record<string, GuideContent> = {
  "choosing-running-shoes": choosingRunningShoes,
  "supplements-for-runners": supplementsForRunners,
  "muscle-recovery": recovery,
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
  "integratori-per-chi-corre": integratoriPerChiCorre,
  "gel-energetici-corsa": gelEnergeticiCorsa,
  "ginocchio-del-corridore": ginocchioDelCorridore,
  "tabella-corsa-principianti": tabellaCorsaPrincipianti,
  "scarpe-running-pronazione": scarpeRunningPronazione,
};
