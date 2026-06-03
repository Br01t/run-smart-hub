export type SectionVariant = "default" | "highlight" | "tip" | "warning" | "checklist";

export interface GuideSection {
  heading: string;
  body: string;
  variant?: SectionVariant;
  listItems?: string[];
}

export interface GuideContent {
  title: string;
  description: string;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  tags: string[];
  heroImage: string;
  readTime: string;
  keyTakeaways: string[];
  sections: GuideSection[];
  relatedTools: { to: string; label: string }[];
  relatedGuides: { slug: string; label: string }[];
  hubCategory?: "shoes" | "supplements" | "hydration" | "recovery" | "apparel" | "gear" | "nutrition";
  datePublished?: string;
  dateModified?: string;
  faq?: { q: string; a: string }[];
}
