export interface ComparisonFAQ {
  q: string;
  a: string;
}

export interface ComparisonData {
  sport: "running" | "trail" | "cycling";
  objective: string;
  category: string;
  intro: string;
  tags: string[];
  faq: ComparisonFAQ[];
}
