
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Installation from "./pages/services/Installation";
import Repair from "./pages/services/Repair";
import Emergency from "./pages/services/Emergency";
import Cleaning from "./pages/services/Cleaning";
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
          <Route path="/about-eugene-roofing" element={<About />} />
          <Route path="/contact-eugene-roofing" element={<Contact />} />
          <Route path="/services/eugene-roof-installation" element={<Installation />} />
          <Route path="/services/eugene-roof-repair" element={<Repair />} />
          <Route path="/services/emergency-roof-repair-eugene" element={<Emergency />} />
          <Route path="/services/roof-cleaning-eugene" element={<Cleaning />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
