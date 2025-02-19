import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "./components/Loading";
import Header from "./components/Header";

// Import the Index page directly to avoid lazy loading issues with the main route
import Index from "./pages/Index";

// Lazy load other pages
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

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              {/* Index route loaded directly */}
              <Route path="/" element={<Index />} />
              
              {/* Other routes wrapped in Suspense */}
              <Suspense fallback={<Loading />}>
                <Route path="/about-eugene-roofing" element={<About />} />
                <Route path="/contact-eugene-roofing" element={<Contact />} />
                <Route path="/services/eugene-or-roof-installation" element={<Installation />} />
                <Route path="/services/eugene-or-roof-repair" element={<Repair />} />
                <Route path="/services/emergency-roof-repair-eugene-or" element={<Emergency />} />
                <Route path="/services/roof-cleaning-eugene-or" element={<Cleaning />} />
                <Route path="*" element={<NotFound />} />
              </Suspense>
            </Routes>
          </main>
          <Toaster />
          <Sonner />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
