
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

// Lazy load all pages
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Installation = lazy(() => import("./pages/services/Installation"));
const Repair = lazy(() => import("./pages/services/Repair"));
const Emergency = lazy(() => import("./pages/services/Emergency"));
const Cleaning = lazy(() => import("./pages/services/Cleaning"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-eugene-roofing" element={<About />} />
            <Route path="/contact-eugene-roofing" element={<Contact />} />
            <Route path="/services/eugene-or-roof-installation" element={<Installation />} />
            <Route path="/services/eugene-or-roof-repair" element={<Repair />} />
            <Route path="/services/emergency-roof-repair-eugene-or" element={<Emergency />} />
            <Route path="/services/roof-cleaning-eugene-or" element={<Cleaning />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
