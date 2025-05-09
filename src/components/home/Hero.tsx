
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Clock, MapPin, Star, Trophy } from 'lucide-react';
import { useScrollTop } from '@/hooks/use-scroll-top';

const Hero = () => {
  const navigate = useNavigate();
  const scrollToTopAndNavigate = useScrollTop();

  return (
    <section 
      className="min-h-[600px] bg-no-repeat bg-cover bg-center relative"
      style={{ 
        backgroundImage: 'url("/lovable-uploads/c5babf64-7fbb-4ba8-809c-ea3d00fe5786.png")',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 relative h-full flex items-center py-20">
        <div className="text-center max-w-3xl mx-auto animate-fadeIn">
          <div className="flex items-center justify-center gap-2 text-white mb-4">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium">#1 Rated Roofing Contractor in Eugene, Oregon</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Expert Roofing Services in Eugene, Oregon
          </h1>
          <p className="text-lg text-gray-100 mb-8">
            <span className="underline cursor-pointer" onClick={() => scrollToTopAndNavigate('/services/roof-repair-eugene-oregon')}>Roof Repair</span>, <span className="underline cursor-pointer" onClick={() => scrollToTopAndNavigate('/services/roof-replacement-eugene-oregon')}>Roof Replacement</span>, Siding, & Gutters
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center justify-center gap-2 text-white">
              <Shield className="w-5 h-5" />
              <span className="text-sm">GAF Certified</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white">
              <Clock className="w-5 h-5" />
              <span className="text-sm">24/7 Emergency Service</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white">
              <Trophy className="w-5 h-5" />
              <span className="text-sm">Top-Rated in Lane County</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 w-full sm:w-auto"
              asChild
            >
              <a 
                href="https://share-na2.hsforms.com/2kBv8I8IESvG_YdjJ25NKlA401s19"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Free Estimate Today
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white"
              onClick={() => scrollToTopAndNavigate('/services/roof-replacement-eugene-oregon')}
            >
              <span className="hidden sm:inline">Premium</span> Roof Replacement
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
