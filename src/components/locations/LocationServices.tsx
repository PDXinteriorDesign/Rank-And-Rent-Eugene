
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useScrollTop } from '@/hooks/use-scroll-top';

interface LocationServicesProps {
  city: string;
}

const LocationServices: React.FC<LocationServicesProps> = ({ city }) => {
  const scrollToTopAndNavigate = useScrollTop();
  
  const services = [
    {
      title: 'Roof Installation',
      description: `Professional roof installation services in ${city}, OR with premium materials and expert craftsmanship.`,
      link: '/services/roof-installation-eugene-oregon'
    },
    {
      title: 'Roof Repair',
      description: `Fast, reliable roof repair services in ${city}, OR. We fix leaks, damage, and wear.`,
      link: '/services/roof-repair-eugene-oregon'
    },
    {
      title: 'Emergency Repairs',
      description: `24/7 emergency roof repair services in ${city}, OR when you need immediate assistance.`,
      link: '/services/emergency-roof-repair-eugene-oregon'
    },
    {
      title: 'Roof Replacement',
      description: `Complete ${city === 'Eugene' ? 'premium roof replacement in Eugene' : 'roof replacement services'} in ${city}, OR with quality materials and installation.`,
      link: '/services/roof-replacement-eugene-oregon'
    },
    {
      title: 'Roof Cleaning',
      description: `Professional roof cleaning services in ${city}, OR to maintain your roof's condition and appearance.`,
      link: '/services/roof-cleaning-eugene-oregon'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Roofing Services in {city}, OR
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button 
                  onClick={() => scrollToTopAndNavigate(service.link)}
                  className="text-primary hover:underline"
                >
                  Learn More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationServices;
