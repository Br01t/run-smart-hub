export interface QuizOption {
  value: string;
  label: string;
  icon: string; // Icon identifier (e.g., "User", "Zap")
  description: string;
}

export interface QuizQuestion {
  id: string;
  label: string;
  subtitle: string;
  icon: string; // Icon identifier
  options: QuizOption[];
}

export interface ProfileResult {
  title: string;
  archetype: string;
  description: string;
  tags: string[];
  tools: { label: string; to: string; icon: string }[];
  guides: { label: string; slug: string }[];
  tips: string[];
}
