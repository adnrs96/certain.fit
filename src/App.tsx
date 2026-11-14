import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SiteLayout from "./components/SiteLayout";
import Coach from "./pages/Coach";
import HowItWorks from "./pages/HowItWorks";
import Journal from "./pages/Journal";
import Timeline from "./pages/Timeline";
import Programme from "./pages/Programme";
import Journey from "./pages/Journey";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/coach" element={<Coach />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/life-happens" element={<Navigate to="/programme" replace />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/programme" element={<Programme />} />
            <Route path="/start-journey" element={<Journey />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
