export interface FinderStep {
  question: string;
  options: { label: string; value: string; emoji: string }[];
}

export interface FinderResult {
  name: string;
  brand: string;
  category: string;
  price: string;
  why: string;
  features: string[];
}
