
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EmergencyHero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            24/7 Emergency Roof Repair in Eugene, Oregon
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            When disaster strikes, every minute counts. Our emergency roofing team is available 
            24/7 to protect your home from storm damage, sudden leaks, and structural issues. 
            Trust Eugene's most reliable emergency roofing service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90">
              <Link to="/contact">Request Emergency Service</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Schedule Free Inspection</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyHero;
