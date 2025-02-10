
import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import EstimateFormModal from '@/components/EstimateFormModal';

const RepairHero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleEstimateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFormOpen(true);
  };

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
            and provide tailored solutions to ensure your roof withstands the test of time.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link to="#" onClick={handleEstimateClick}>Get Free Inspection</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="#" onClick={handleEstimateClick} className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <EstimateFormModal 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </section>
  );
};

export default RepairHero;
