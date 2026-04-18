import React from "react";

const StepIndicator = ({ current, total }: { current: number; total: number }) => (
  <div className="flex items-center gap-1.5">
    {Array.from({ length: total }).map((_, i) => (
      <div
        key={i}
        className={`h-1.5 rounded-full transition-all duration-300 ${
          i < current ? "w-6 bg-primary" : i === current ? "w-8 bg-primary" : "w-4 bg-muted"
        }`}
      />
    ))}
  </div>
);

export default StepIndicator;
