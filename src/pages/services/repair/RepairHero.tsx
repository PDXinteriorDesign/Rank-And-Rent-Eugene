
import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollTop } from '@/hooks/use-scroll-top';

const RepairHero = () => {
  const scrollToTopAndNavigate = useScrollTop();
  
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Protect Your Home with Expert Roof Repair in Eugene, OR
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Whether it's minor leaks, storm damage, or aging shingles, our professional roof repair services 
            are designed to keep your home safe and secure. We understand Oregon's unique weather conditions 
            and provide tailored solutions to ensure your roof withstands the test of time. For major damage, consider our <button onClick={() => scrollToTopAndNavigate('/services/roof-replacement-eugene-oregon')} className="text-primary font-medium hover:underline">premium roof replacement in Eugene</button> services.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90"
              asChild
            >
              <a 
                href="https://share-na2.hsforms.com/2kBv8I8IESvG_YdjJ25NKlA401s19"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Free Inspection
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="flex items-center gap-2"
              asChild
            >
              <a 
                href="https://share-na2.hsforms.com/2kBv8I8IESvG_YdjJ25NKlA401s19"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairHero;
