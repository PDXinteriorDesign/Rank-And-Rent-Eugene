
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Clock, MapPin } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto animate-fadeIn">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-medium">Proudly Serving Eugene, Springfield & Lane County</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Eugene's Most Trusted Roofing Experts
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Specializing in expert roof repairs, new installations, and moss removal services. 
            Our licensed and insured team delivers superior craftsmanship with 20+ years of local experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-sm">Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5 text-secondary" />
              <span className="text-sm">24/7 Emergency Service</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-secondary" />
              <span className="text-sm">Free Local Estimates</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 w-full sm:w-auto"
              onClick={() => navigate('/contact-eugene-roofing')}
            >
              Get Free Estimate
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto"
              onClick={() => navigate('/services/eugene-or-roof-installation')}
            >
              View Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
