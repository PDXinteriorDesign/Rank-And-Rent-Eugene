
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

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
          <main className="flex-1">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about-eugene-roofing" element={<About />} />
                <Route path="/contact-eugene-roofing" element={<Contact />} />
                <Route path="/services/eugene-or-roof-installation" element={<Installation />} />
                <Route path="/services/eugene-or-roof-repair" element={<Repair />} />
                <Route path="/services/emergency-roof-repair-eugene-or" element={<Emergency />} />
                <Route path="/services/roof-cleaning-eugene-or" element={<Cleaning />} />
                <Route path="/services/roof-replacement-eugene-or" element={<Replacement />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
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
