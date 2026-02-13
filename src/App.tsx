import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ToolsHub from "./pages/ToolsHub";
import HydrationCalculator from "./pages/calculators/HydrationCalculator";
import CaloriesCalculator from "./pages/calculators/CaloriesCalculator";
import BMICalculator from "./pages/calculators/BMICalculator";
import ProteinCalculator from "./pages/calculators/ProteinCalculator";
import ElectrolyteCalculator from "./pages/calculators/ElectrolyteCalculator";
import ProfileQuiz from "./pages/ProfileQuiz";
import Metodo from "./pages/Metodo";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/strumenti" element={<ToolsHub />} />
          <Route path="/strumenti/idratazione" element={<HydrationCalculator />} />
          <Route path="/strumenti/calorie" element={<CaloriesCalculator />} />
          <Route path="/strumenti/bmi" element={<BMICalculator />} />
          <Route path="/strumenti/proteine" element={<ProteinCalculator />} />
          <Route path="/strumenti/elettroliti" element={<ElectrolyteCalculator />} />
          <Route path="/quiz" element={<ProfileQuiz />} />
          <Route path="/metodo" element={<Metodo />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
