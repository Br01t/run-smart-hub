import { guidesContent } from "@/data/guides/index";

export interface RelatedGuideLink {
  slug: string;
  label: string;
}

/**
 * Automatic internal linking:
 * scores every other guide by shared hubCategory (+3) and shared tags (+2 each),
 * returns the top N most-related guides.
 */
export function getRelatedGuides(currentSlug: string, limit = 6): RelatedGuideLink[] {
  const current = guidesContent[currentSlug as keyof typeof guidesContent];
  if (!current) return [];

  const scored = Object.entries(guidesContent)
    .filter(([slug]) => slug !== currentSlug)
    .map(([slug, g]) => {
      let score = 0;
      if (g.hubCategory && g.hubCategory === current.hubCategory) score += 3;
      const sharedTags = g.tags.filter((t) => current.tags.includes(t)).length;
      score += sharedTags * 2;
      return { slug, label: g.title, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);

  // Fallback: if not enough scored matches, top up with any other guides.
  if (scored.length < limit) {
    const seen = new Set(scored.map((s) => s.slug));
    for (const [slug, g] of Object.entries(guidesContent)) {
      if (scored.length >= limit) break;
      if (slug === currentSlug || seen.has(slug)) continue;
      scored.push({ slug, label: g.title, score: 0 });
      seen.add(slug);
    }
  }

  return scored.slice(0, limit).map(({ slug, label }) => ({ slug, label }));
}

/**
 * Merge manually-curated related guides with auto-discovered ones,
 * preserving order and deduplicating by slug.
 */
export function mergeRelatedGuides(
  currentSlug: string,
  manual: { slug: string; label: string }[] = [],
  limit = 6,
): RelatedGuideLink[] {
  const auto = getRelatedGuides(currentSlug, limit + manual.length);
  const seen = new Set<string>();
  const out: RelatedGuideLink[] = [];

  for (const m of manual) {
    if (m.slug === currentSlug || seen.has(m.slug)) continue;
    if (!guidesContent[m.slug as keyof typeof guidesContent]) continue;
    seen.add(m.slug);
    out.push(m);
  }
  for (const a of auto) {
    if (out.length >= limit) break;
    if (seen.has(a.slug)) continue;
    seen.add(a.slug);
    out.push(a);
  }
  return out;
}
