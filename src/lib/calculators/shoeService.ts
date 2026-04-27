import { FinderStep } from "@/types/finder";

export const shoeFinderSteps: FinderStep[] = [
  {
    question: "Che tipo di corsa pratichi maggiormente?",
    options: [
      { label: "Corsa su Strada", value: "road", emoji: "🛣️" },
      { label: "Trail Running", value: "trail", emoji: "⛰️" },
      { label: "Pista / Velocità", value: "track", emoji: "🏟️" },
      { label: "Terreno Misto", value: "mixed", emoji: "🌍" },
    ],
  },
  {
    question: "Qual è il tuo chilometraggio settimanale?",
    options: [
      { label: "Sotto i 20 km", value: "low", emoji: "🚶" },
      { label: "20–50 km", value: "medium", emoji: "🏃" },
      { label: "50–80 km", value: "high", emoji: "🏃‍♂️" },
      { label: "80+ km", value: "ultra", emoji: "🦸" },
    ],
  },
  {
    question: "Come descriveresti il tuo arco plantare?",
    options: [
      { label: "Piatto / Arco Basso", value: "flat", emoji: "🦶" },
      { label: "Normale / Medio", value: "normal", emoji: "👟" },
      { label: "Arco Alto", value: "high", emoji: "📐" },
      { label: "Non sono sicuro", value: "unsure", emoji: "❓" },
    ],
  },
  {
    question: "Qual è la tua priorità in una scarpa?",
    options: [
      { label: "Ammortizzazione", value: "cushion", emoji: "☁️" },
      { label: "Velocità / Leggerezza", value: "speed", emoji: "⚡" },
      { label: "Stabilità / Supporto", value: "stability", emoji: "🛡️" },
      { label: "Durata", value: "durability", emoji: "🔩" },
    ],
  },
  {
    question: "Qual è il tuo budget indicativo?",
    options: [
      { label: "Sotto €80", value: "budget", emoji: "💰" },
      { label: "€80 – €130", value: "mid", emoji: "💳" },
      { label: "€130 – €180", value: "premium", emoji: "💎" },
      { label: "Nessun limite", value: "unlimited", emoji: "🏆" },
    ],
  },
];

import { shoeSpecs } from "@/data/specs/shoes";

export interface ShoeRecommendation {
  model: string;
  brand: string;
  image: string;
  why: string;
  specs: {
    weight: string;
    drop: string;
    cushion: string;
  };
}

export interface ShoeCategoryResult {
  categoryName: string;
  description: string;
  science: string;
  practice: string;
  features: string[];
  recommendedShoes: ShoeRecommendation[];
}

export const getShoeRecommendations = (answers: Record<number, string>): ShoeCategoryResult => {
  const terrain = answers[0];
  const priority = answers[3];

  if (terrain === "trail") {
    const trailShoes = shoeSpecs.filter(s => s.terrain === "Trail");
    return {
      categoryName: "Specialista Trail Tecnico",
      description: "Hai bisogno di una scarpa con tasselli aggressivi e una piastra protettiva (rock plate) per gestire terreni vari e detriti.",
      science: "Il trail running comporta carichi eccentrici elevati e superfici instabili. Una scarpa da trail dedicata fornisce la necessaria stabilità laterale e il feedback propriocettivo per prevenire distorsioni della caviglia, proteggendo i metatarsi dagli impatti taglienti.",
      practice: "Pulisci sempre le suole dopo corse nel fango per mantenere l'efficacia dei tasselli. Se corri sia su strada che su sentiero, non usare scarpe da trail sull'asfalto: le mescole di gomma morbida si usureranno molto più velocemente.",
      features: ["Tasselli Aggressivi (>4mm)", "Piastra di Protezione Rock Plate", "Mesh Anti-detriti"],
      recommendedShoes: trailShoes.slice(0, 2).map(s => ({
        model: s.name,
        brand: s.brand,
        image: s.image,
        why: s.bestFor,
        specs: {
          weight: s.weight,
          drop: s.drop,
          cushion: s.cushion
        }
      }))
    };
  }

  if (priority === "speed") {
    const speedShoes = shoeSpecs.filter(s => s.name.includes("Nitro") || s.name.includes("Speed"));
    return {
      categoryName: "Leggera da Tempo / Gara",
      description: "Una scarpa reattiva e leggera, progettata per intervalli di velocità, corse a ritmo tempo e performance il giorno della gara.",
      science: "Le scarpe da performance utilizzano schiume ad alto rimbalzo (PEBA/TPEE) e spesso piastre in carbonio o TPU per aumentare il ritorno di energia. La ricerca suggerisce che questi materiali possono ridurre il costo energetico della corsa del 2-4% a velocità più elevate.",
      practice: "Riserva queste scarpe per 1-2 sessioni a settimana. Usarle per ogni corsa può portare a meccaniche della parte inferiore della gamba 'pigre' e affaticamento dei polpacci a causa dell'estrema reattività e del peso ridotto.",
      features: ["Schiuma Super-critica", "Mesh Ultraleggero", "Geometria Reattiva"],
      recommendedShoes: speedShoes.slice(0, 2).map(s => ({
        model: s.name,
        brand: s.brand,
        image: s.image,
        why: s.bestFor,
        specs: {
          weight: s.weight,
          drop: s.drop,
          cushion: s.cushion
        }
      }))
    };
  }

  if (priority === "stability") {
    const stabilityShoes = shoeSpecs.filter(s => s.support === "Stable");
    return {
      categoryName: "Supporto Strutturato",
      description: "Progettata per i runner che hanno bisogno di guida extra e stabilità da moderata a massima per l'iperpronazione.",
      science: "Le scarpe stabili utilizzano supporti mediali o 'guide rails' per decelerare il tasso di rotazione tibiale interna. Sebbene non 'correggano' la forma, riducono la torsione su ginocchio e caviglia durante i blocchi ad alto chilometraggio.",
      practice: "Controlla l'usura della suola ogni 200 km. Se le caratteristiche di stabilità sono compresse o consumate in modo non uniforme, possono iniziare a disallineare la tua falcata. Sostituiscile rigorosamente ogni 600-800 km.",
      features: ["Sistema di Supporto Mediale", "Intersuola a Densità Differenziata", "Stabilità del Tallone"],
      recommendedShoes: stabilityShoes.slice(0, 2).map(s => ({
        model: s.name,
        brand: s.brand,
        image: s.image,
        why: s.bestFor,
        specs: {
          weight: s.weight,
          drop: s.drop,
          cushion: s.cushion
        }
      }))
    };
  }

  // Default to Neutral
  const neutralShoes = shoeSpecs.filter(s => s.support === "Neutral" && s.terrain === "Road");
  return {
    categoryName: "Ammortizzazione Neutra Quotidiana",
    description: "La categoria più versatile, che offre un equilibrio tra protezione dagli impatti e peso per la salute a lungo termine.",
    science: "Le scarpe neutre si affidano all'attenuazione degli urti attraverso schiume in EVA o infuse di azoto. Permettono al piede di muoversi naturalmente durante il ciclo del passo assorbendo il 35-45% della forza d'impatto iniziale.",
    practice: "Questa dovrebbe essere la tua scarpa 'da fatica'. Punta a una calzata che lasci uno spazio pari alla larghezza di un pollice in punta. Scarpe strette portano a unghie nere e limitano l'espansione naturale delle dita.",
    features: ["Ammortizzazione Bilanciata", "Tomaia Traspirante", "Gomma ad Alta Resistenza"],
    recommendedShoes: neutralShoes.slice(0, 2).map(s => ({
      model: s.name,
      brand: s.brand,
      image: s.image,
      why: s.bestFor,
      specs: {
        weight: s.weight,
        drop: s.drop,
        cushion: s.cushion
      }
    }))
  };
};
