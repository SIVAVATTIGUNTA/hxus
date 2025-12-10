import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Platform from "./pages/Platform";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BusinessConsulting from "./pages/services/BusinessConsulting";
import AIAgents from "./pages/services/AIAgents";
import MSP from "./pages/services/MSP";
import RPO from "./pages/services/RPO";
import RaaS from "./pages/services/RaaS";
import SaaSEnablement from "./pages/services/SaaSEnablement";
import DirectSourcing from "./pages/solutions/DirectSourcing";
import GlobalStaffing from "./pages/solutions/GlobalStaffing";
import DataInsights from "./pages/solutions/DataInsights";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/business-consulting" element={<BusinessConsulting />} />
          <Route path="/services/ai-agents" element={<AIAgents />} />
          <Route path="/services/msp" element={<MSP />} />
          <Route path="/services/rpo" element={<RPO />} />
          <Route path="/services/raas" element={<RaaS />} />
          <Route path="/services/saas-enablement" element={<SaaSEnablement />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/direct-sourcing" element={<DirectSourcing />} />
          <Route path="/solutions/global-staffing" element={<GlobalStaffing />} />
          <Route path="/solutions/data-insights" element={<DataInsights />} />
          <Route path="/solutions/*" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
