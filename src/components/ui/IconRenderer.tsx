import React from "react";
import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";

/**
 * Dynamically renders a Lucide icon based on its string name.
 */
export const IconRenderer = ({ name, ...props }: { name: string } & LucideProps) => {
  const Icon = (LucideIcons as any)[name];
  
  if (!Icon) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return <LucideIcons.HelpCircle {...props} />;
  }
  
  return <Icon {...props} />;
};
