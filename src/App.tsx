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
import ShoeFinder from "./pages/calculators/ShoeFinder";
import ProfileQuiz from "./pages/ProfileQuiz";
import GuidesHub from "./pages/GuidesHub";
import GuidePage from "./pages/GuidePage";
import ComparisonsHub from "./pages/ComparisonsHub";
import ComparisonPage from "./pages/ComparisonPage";
import HubsIndex from "./pages/HubsIndex";
import HubPage from "./pages/HubPage";
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
          <Route path="/tools" element={<ToolsHub />} />
          <Route path="/tools/hydration" element={<HydrationCalculator />} />
          <Route path="/tools/calories" element={<CaloriesCalculator />} />
          <Route path="/tools/bmi" element={<BMICalculator />} />
          <Route path="/tools/protein" element={<ProteinCalculator />} />
          <Route path="/tools/electrolytes" element={<ElectrolyteCalculator />} />
          <Route path="/tools/shoes" element={<ShoeFinder />} />
          <Route path="/quiz" element={<ProfileQuiz />} />
          <Route path="/guides" element={<GuidesHub />} />
          <Route path="/guides/:slug" element={<GuidePage />} />
          <Route path="/comparisons" element={<ComparisonsHub />} />
          <Route path="/comparison/:slug" element={<ComparisonPage />} />
          <Route path="/hub" element={<HubsIndex />} />
          <Route path="/hub/:category/:sport" element={<HubPage />} />
          <Route path="/method" element={<Metodo />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
