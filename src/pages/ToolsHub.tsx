import Layout from "@/components/Layout";
import ToolCard from "@/components/ToolCard";
import SEOHead from "@/components/SEOHead";
import { Droplets, Flame, Scale, Dumbbell, Zap } from "lucide-react";

const allTools = [
  {
    title: "Hydration Needs",
    description: "Calculate how much water to drink before, during and after your run based on duration, weight and temperature.",
    icon: Droplets,
    to: "/tools/hydration",
  },
  {
    title: "Calories Burned",
    description: "Estimate calories burned during your run based on distance, weight and average pace.",
    icon: Flame,
    to: "/tools/calories",
  },
  {
    title: "Advanced BMI",
    description: "Calculate your body mass index with detailed classification and recommendations.",
    icon: Scale,
    to: "/tools/bmi",
  },
  {
    title: "Protein Needs",
    description: "Find out how much protein to consume daily based on your activity level and goals.",
    icon: Dumbbell,
    to: "/tools/protein",
  },
  {
    title: "Electrolyte Needs",
    description: "Calculate the amount of electrolytes to replenish based on sweat rate and duration.",
    icon: Zap,
    to: "/tools/electrolytes",
  },
];

const ToolsHub = () => {
  return (
    <Layout>
      <SEOHead title="Calculators for Runners" description="Free calculators for hydration, calories, BMI, protein and electrolytes. Science-based tools to improve your performance." path="/tools" />
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="mb-8 sm:mb-10">
          <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            All Tools
          </h1>
          <p className="mt-2 text-base text-muted-foreground sm:text-lg">
            Free calculators backed by scientific data to improve your performance.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {allTools.map((tool) => (
            <ToolCard key={tool.to} {...tool} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ToolsHub;
