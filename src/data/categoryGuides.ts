export interface CategoryGuide {
  id: string;
  title: string;
  scientificTitle: string;
  scientificDescription: string;
  pillars: { title: string; description: string }[];
}

export const categoryGuides: Record<string, CategoryGuide> = {
  shoes: {
    id: "shoes",
    title: "Running Shoes",
    scientificTitle: "The Science of Support & Propulsion",
    scientificDescription: "Choosing the right shoe is more than just comfort; it's about biomechanical efficiency and injury prevention. We analyze every shoe based on 4 technical pillars.",
    pillars: [
      { 
        title: "Drop (Differenziale)", 
        description: "The height difference between heel and toe. 10mm+ for heel strikers, 4-6mm for natural runners." 
      },
      { 
        title: "Cushioning", 
        description: "From 'Minimal' for ground feel and speed to 'Maximal' for impact protection on long distances." 
      },
      { 
        title: "Weight", 
        description: "Fundamental for performance. Sub-250g for racing, slightly more for durable daily training." 
      },
      { 
        title: "Propulsion", 
        description: "The role of midsole foams and carbon plates in energy return and running economy." 
      }
    ]
  },
  supplements: {
    id: "supplements",
    title: "Performance Supplements",
    scientificTitle: "Bioavailability & Nutrient Timing",
    scientificDescription: "Supplements should bridge the gap between training demand and recovery. Our selection focuses on clinically proven ingredients and digestion comfort.",
    pillars: [
      { 
        title: "Bioavailability", 
        description: "How well the supplement is absorbed. We prioritize Isolate proteins and chelated minerals." 
      },
      { 
        title: "Gastric Transit", 
        description: "Essential for gels and bars. Optimal ratios of Maltodextrin and Fructose prevent GI distress." 
      },
      { 
        title: "Nutrient Timing", 
        description: "Strategizing 'Pre' for focus, 'During' for fuel, and 'Post' for muscle repair and glycogen refill." 
      },
      { 
        title: "Cognitive Load", 
        description: "Using adaptogens (like Cordyceps) to manage fatigue without the 'crash' typical of high-caffeine formulas." 
      }
    ]
  },
  hydration: {
    id: "hydration",
    title: "Hydration & Electrolytes",
    scientificTitle: "Maintaining Osmotic Balance",
    scientificDescription: "Hydration is not just about water; it's about replacing what you lose through sweat. Imbalance leads to cramping and rapid performance decline.",
    pillars: [
      { 
        title: "Sodium-Potassium Ratio", 
        description: "The primary electrolytes lost. Essential for nerve transmission and muscle contraction." 
      },
      { 
        title: "Fluid Transport Gear", 
        description: "Hydration vests vs belts. Capacity vs mobility depending on race distance and terrain." 
      },
      { 
        title: "Isotonicity", 
        description: "Ensuring your drink matches your blood's concentration for the fastest possible absorption." 
      }
    ]
  },
  recovery: {
    id: "recovery",
    title: "Recovery & Injury Prevention",
    scientificTitle: "The Evidence-Based Recovery Curve",
    scientificDescription: "Muscle damage (DOMS) and inflammation are natural results of training. Recovery tools accelerate the 'Repair' phase to get you back on the road faster.",
    pillars: [
      { 
        title: "Myofascial Release", 
        description: "Using foam rollers and massage guns to break up adhesions and improve local blood flow." 
      },
      { 
        title: "Compression Physics", 
        description: "Graduated pressure to assist venous return and reduce swelling post-race or during long travel." 
      },
      { 
        title: "Targeted Mobility", 
        description: "Tools for specific trigger points, like the plantar fascia, which are critical for runners." 
      }
    ]
  },
  apparel: {
    id: "apparel",
    title: "Technical Apparel",
    scientificTitle: "Thermoregulation & Friction Management",
    scientificDescription: "Technical fabrics work with your body to manage heat and moisture, preventing both overheating and hypothermia.",
    pillars: [
      { 
        title: "Moisture Wicking", 
        description: "Capillary action of synthetic fibers to move sweat away from the skin to the fabric surface." 
      },
      { 
        title: "Seam Engineering", 
        description: "Flat-lock seams and laser cutting to eliminate chafing points during repetitive motions." 
      },
      { 
        title: "Environmental Shield", 
        description: "Membranes like GORE-TEX that offer absolute waterproofness with high vapor permeability." 
      }
    ]
  }
};
