import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, MemoryRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Analytics from "./components/Analytics";
import Index from "./pages/Index";

// Lazy-load all non-critical routes to reduce initial bundle size
const ToolsHub = lazy(() => import("./pages/ToolsHub"));
const HydrationCalculator = lazy(() => import("./pages/calculators/HydrationCalculator"));
const CaloriesCalculator = lazy(() => import("./pages/calculators/CaloriesCalculator"));
const BMICalculator = lazy(() => import("./pages/calculators/BMICalculator"));
const ProteinCalculator = lazy(() => import("./pages/calculators/ProteinCalculator"));
const ElectrolyteCalculator = lazy(() => import("./pages/calculators/ElectrolyteCalculator"));
const ShoeFinder = lazy(() => import("./pages/calculators/ShoeFinder"));
const ProfileQuiz = lazy(() => import("./pages/ProfileQuiz"));
const GuidesHub = lazy(() => import("./pages/GuidesHub"));
const GuidePage = lazy(() => import("./pages/GuidePage"));
const MasterHub = lazy(() => import("./pages/MasterHub"));
const Method = lazy(() => import("./pages/Method"));
const About = lazy(() => import("./pages/About"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const AffiliateDisclosure = lazy(() => import("./pages/AffiliateDisclosure"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="flex min-h-[60vh] items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" aria-label="Loading page" />
  </div>
);

const basename = "/";

type AppProps = {
  prerenderUrl?: string;
};

const Router = ({ children, prerenderUrl }: { children: React.ReactNode; prerenderUrl?: string }) => {
  const future = {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  };

  if (prerenderUrl) {
    return (
      <MemoryRouter initialEntries={[prerenderUrl]} future={future}>
        {children}
      </MemoryRouter>
    );
  }

  return (
    <BrowserRouter basename={basename} future={future}>
      {children}
    </BrowserRouter>
  );
};

const App = ({ prerenderUrl }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router prerenderUrl={prerenderUrl}>
        <ScrollToTop />
        <Analytics />
        <Suspense fallback={<PageLoader />}>
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
            <Route path="/hub" element={<MasterHub />} />
            <Route path="/hub/:category" element={<MasterHub />} />
            <Route path="/hub/:category/:sport" element={<MasterHub />} />
            <Route path="/comparison/:category/:sport/:objective" element={<MasterHub />} />
            <Route path="/method" element={<Method />} />
            <Route path="/about" element={<About />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
