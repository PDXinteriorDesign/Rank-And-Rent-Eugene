
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CleaningHero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Professional Roof Cleaning & Treatment in Eugene
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Maintaining a clean and well-treated roof is essential for preserving your home's integrity 
            and enhancing its curb appeal. Trust our expert team to keep your roof in optimal condition.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
            <Link to="/contact">Schedule Cleaning Service</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CleaningHero;
