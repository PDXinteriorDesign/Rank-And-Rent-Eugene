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
const Locations = lazy(() => import("./pages/Locations"));
const DowntownEugene = lazy(() => import("./pages/locations/DowntownEugene"));
const SouthEugene = lazy(() => import("./pages/locations/SouthEugene"));
const NorthEugene = lazy(() => import("./pages/locations/NorthEugene"));
const WestEugene = lazy(() => import("./pages/locations/WestEugene"));
const EastEugene = lazy(() => import("./pages/locations/EastEugene"));
const Springfield = lazy(() => import("./pages/locations/Springfield"));
const CottageGrove = lazy(() => import("./pages/locations/CottageGrove"));
const JunctionCity = lazy(() => import("./pages/locations/JunctionCity"));
const Veneta = lazy(() => import("./pages/locations/Veneta"));
const Lowell = lazy(() => import("./pages/locations/Lowell"));

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
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services/roof-installation-eugene-oregon" element={<Installation />} />
                <Route path="/services/roof-repair-eugene-oregon" element={<Repair />} />
                <Route path="/services/emergency-roof-repair-eugene-oregon" element={<Emergency />} />
                <Route path="/services/roof-cleaning-eugene-oregon" element={<Cleaning />} />
                <Route path="/services/roof-replacement-eugene-oregon" element={<Replacement />} />
                <Route path="/roofing-tips" element={<Blog />} />
                <Route path="/roofing-tips/:slug" element={<BlogPost />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/locations/downtown-eugene" element={<DowntownEugene />} />
                <Route path="/locations/south-eugene" element={<SouthEugene />} />
                <Route path="/locations/north-eugene" element={<NorthEugene />} />
                <Route path="/locations/west-eugene" element={<WestEugene />} />
                <Route path="/locations/east-eugene" element={<EastEugene />} />
                <Route path="/locations/springfield" element={<Springfield />} />
                <Route path="/locations/cottage-grove" element={<CottageGrove />} />
                <Route path="/locations/junction-city" element={<JunctionCity />} />
                <Route path="/locations/veneta" element={<Veneta />} />
                <Route path="/locations/lowell" element={<Lowell />} />
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
