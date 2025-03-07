
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface LocationHeroProps {
  city: string;
  isNeighborhood?: boolean;
}

const LocationHero: React.FC<LocationHeroProps> = ({ city, isNeighborhood }) => {
  const location = isNeighborhood ? `${city} neighborhood of Eugene` : city;
  
  return (
    <section className="relative py-20 bg-black/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Trusted {location}, OR Roofing Contractors
          </h1>
          <p className="text-lg mb-8 text-gray-700">
            Trusted local roofing contractors providing expert installation, repair, and maintenance 
            services to protect your home in {location}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a 
                href="https://share-na2.hsforms.com/2kBv8I8IESvG_YdjJ25NKlA401s19"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary"
              >
                Get Free Estimate
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHero;
