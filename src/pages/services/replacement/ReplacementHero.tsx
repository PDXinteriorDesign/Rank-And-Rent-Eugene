
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useScrollTop } from '@/hooks/use-scroll-top';

const ReplacementHero = () => {
  const scrollToTopAndNavigate = useScrollTop();
  
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Premium Roof Replacement in Eugene
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            When repairs aren't enough, trust Eugene's leading roofing experts for a complete roof replacement. 
            We use premium materials and guaranteed craftsmanship to protect your home for decades to come.
            With competitive <span className="font-medium">average roof replacement cost in Eugene</span>, our solutions provide maximum value.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/50 p-4 rounded-lg">
              <p className="text-sm"><span className="font-semibold">Average Lifespan:</span> 30-50 years</p>
              <p className="text-xs text-gray-600">With proper installation</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <p className="text-sm"><span className="font-semibold">Material Options:</span> 15+ choices</p>
              <p className="text-xs text-gray-600">For every budget & style</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <p className="text-sm"><span className="font-semibold">Warranty:</span> Lifetime</p>
              <p className="text-xs text-gray-600">On workmanship</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link to="/contact">Get Free Estimate</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToTopAndNavigate('/services/roof-repair-eugene-oregon')}
            >
              Need Roof Repair Instead?
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReplacementHero;
