
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

// Create QueryClient instance outside of component
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
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loading />}>
                  <Index />
                </Suspense>
              }
            />
            <Route
              path="/about-eugene-roofing"
              element={
                <Suspense fallback={<Loading />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/contact-eugene-roofing"
              element={
                <Suspense fallback={<Loading />}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="/services/eugene-or-roof-installation"
              element={
                <Suspense fallback={<Loading />}>
                  <Installation />
                </Suspense>
              }
            />
            <Route
              path="/services/eugene-or-roof-repair"
              element={
                <Suspense fallback={<Loading />}>
                  <Repair />
                </Suspense>
              }
            />
            <Route
              path="/services/emergency-roof-repair-eugene-or"
              element={
                <Suspense fallback={<Loading />}>
                  <Emergency />
                </Suspense>
              }
            />
            <Route
              path="/services/roof-cleaning-eugene-or"
              element={
                <Suspense fallback={<Loading />}>
                  <Cleaning />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<Loading />}>
                  <NotFound />
                </Suspense>
              }
            />
          </Routes>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
