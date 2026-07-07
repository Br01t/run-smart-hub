import { guidesContent } from "@/data/guides/index";

export interface ContextualGuide {
  title: string;
  path: string;
  desc: string;
}

const pick = (slug: string): ContextualGuide | null => {
  const g = guidesContent[slug as keyof typeof guidesContent];
  if (!g) return null;
  return {
    title: g.title,
    path: `/guides/${slug}`,
    desc: g.seoDescription || g.description,
  };
};

const dedupe = (list: (ContextualGuide | null)[], limit = 3): ContextualGuide[] => {
  const seen = new Set<string>();
  const out: ContextualGuide[] = [];
  for (const g of list) {
    if (!g || seen.has(g.path)) continue;
    seen.add(g.path);
    out.push(g);
    if (out.length >= limit) break;
  }
  return out;
};

/**
 * Returns dynamic related guides based on the calculator context
 * and the user's inputs / profile.
 * Fallback slugs are supplied per calculator so results are always populated.
 */
export function getContextualGuides(
  calculator: "protein" | "calories" | "hydration" | "electrolyte" | "bmi" | "shoe",
  params: Record<string, string | undefined> = {},
): ContextualGuide[] {
  const slugs: string[] = [];

  switch (calculator) {
    case "protein": {
      if (params.goal === "lose") slugs.push("correre-per-dimagrire", "cosa-mangiare-dopo-corsa");
      if (params.goal === "gain") slugs.push("supplements-for-runners", "cosa-mangiare-dopo-corsa");
      if (params.goal === "maintain") slugs.push("running-nutrition", "cosa-mangiare-dopo-corsa");
      if (params.activity === "intense") slugs.push("integratori-per-chi-corre", "muscle-recovery");
      slugs.push("cosa-mangiare-dopo-corsa", "muscle-recovery", "running-nutrition");
      break;
    }
    case "calories": {
      slugs.push(
        "correre-per-dimagrire",
        "running-nutrition",
        "cosa-mangiare-dopo-corsa",
        "gel-energetici-corsa",
      );
      break;
    }
    case "hydration": {
      const t = parseFloat(params.temp || "");
      if (!isNaN(t) && t >= 25) slugs.push("winter-running"); // fallback contextual
      slugs.push(
        "running-nutrition",
        "gel-energetici-corsa",
        "integratori-per-chi-corre",
        "cosa-mangiare-dopo-corsa",
      );
      break;
    }
    case "electrolyte": {
      if (params.intensity === "intense") slugs.push("gel-energetici-corsa", "muscle-recovery");
      slugs.push(
        "integratori-per-chi-corre",
        "cosa-mangiare-dopo-corsa",
        "supplements-for-runners",
      );
      break;
    }
    case "bmi": {
      if (params.category?.toLowerCase().includes("sovrapp") || params.category?.toLowerCase().includes("obes"))
        slugs.push("correre-per-dimagrire", "iniziare-correre-40-anni", "tabella-corsa-principianti");
      if (params.category?.toLowerCase().includes("sotto"))
        slugs.push("running-nutrition", "cosa-mangiare-dopo-corsa");
      slugs.push(
        "correre-per-dimagrire",
        "tabella-corsa-principianti",
        "iniziare-correre-40-anni",
      );
      break;
    }
    case "shoe": {
      const name = (params.categoryName || "").toLowerCase();
      if (name.includes("pron")) slugs.push("scarpe-running-pronazione");
      if (name.includes("sup")) slugs.push("scarpe-running-supinazione");
      if (name.includes("trail")) slugs.push("trail-running-beginners");
      if (name.includes("marat")) slugs.push("marathon-training");
      slugs.push(
        "choosing-running-shoes",
        "running-shoe-rotation",
        "injury-prevention",
      );
      break;
    }
  }

  return dedupe(slugs.map(pick), 3);
}
