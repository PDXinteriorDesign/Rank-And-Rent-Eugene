import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import Header from "./components/Header";

// Import pages
import Index from "./pages/Index";
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Installation = lazy(() => import("./pages/services/Installation"));
const Repair = lazy(() => import("./pages/services/Repair"));
const Emergency = lazy(() => import("./pages/services/Emergency"));
const Cleaning = lazy(() => import("./pages/services/Cleaning"));
const Replacement = lazy(() => import("./pages/services/Replacement"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Import location pages
import LocationPage from "./pages/locations/LocationPage";
import Locations from "./pages/locations/Locations";
import { CITIES, NEIGHBORHOODS } from "./pages/locations";

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
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/locations" element={<Locations />} />
                
                {/* City Routes */}
                {CITIES.map(city => (
                  <Route 
                    key={city}
                    path={`/locations/${city.toLowerCase().replace(/ /g, '-')}`}
                    element={<LocationPage city={city} />}
                  />
                ))}

                {/* Neighborhood Routes */}
                {NEIGHBORHOODS.map(neighborhood => (
                  <Route 
                    key={neighborhood}
                    path={`/locations/${neighborhood.toLowerCase().replace(/ /g, '-')}`}
                    element={<LocationPage city={neighborhood} isNeighborhood={true} />}
                  />
                ))}
                
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services/roof-installation-eugene-oregon" element={<Installation />} />
                <Route path="/services/roof-repair-eugene-oregon" element={<Repair />} />
                <Route path="/services/emergency-roof-repair-eugene-oregon" element={<Emergency />} />
                <Route path="/services/roof-cleaning-eugene-oregon" element={<Cleaning />} />
                <Route path="/services/roof-replacement-eugene-oregon" element={<Replacement />} />
                <Route path="/roofing-tips" element={<Blog />} />
                <Route path="/roofing-tips/:slug" element={<BlogPost />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <Toaster />
          <Sonner />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
