
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Tool, Clock, CheckCircle } from 'lucide-react';

interface LocationContentProps {
  city: string;
  isNeighborhood?: boolean;
}

const LocationContent: React.FC<LocationContentProps> = ({ city, isNeighborhood }) => {
  const location = isNeighborhood ? `${city} neighborhood of Eugene` : city;
  
  const benefits = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: `Fully licensed and insured roofing services in ${location}, protecting your investment`
    },
    {
      icon: Tool,
      title: "Expert Craftsmanship",
      description: `Professional roofing installations and repairs by ${location}'s most experienced roofers`
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: `Round-the-clock emergency roof repairs for ${location} homeowners`
    },
    {
      icon: CheckCircle,
      title: "Quality Materials",
      description: `Premium roofing materials and warranties for lasting protection in ${location}'s climate`
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-6">
            Professional Roofing Services in {location}, Oregon
          </h2>
          
          <p className="text-lg text-gray-700 mb-6">
            Welcome to Eugene Roofing NW, your trusted roofing contractor serving {location} and surrounding areas. 
            Our expert team specializes in comprehensive roofing solutions, from repairs and maintenance to complete 
            roof replacements, all tailored to withstand Oregon's unique climate challenges.
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            Expert Roofing Solutions for {location} Properties
          </h3>
          
          <p className="text-gray-700 mb-6">
            {location}'s variable weather patterns demand roofing systems that can handle everything from heavy winter 
            rains to summer heat. Our local roofing experts understand these challenges and provide customized solutions 
            that ensure lasting protection for your home or business.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-none shadow-sm">
                <CardContent className="flex items-start gap-4 p-6">
                  <benefit.icon className="w-8 h-8 text-secondary shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            Why Choose Us for Your {location} Roofing Needs?
          </h3>

          <ul className="list-none space-y-4 mb-8">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
              <span>Over 20 years of local roofing experience in {location}</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
              <span>GAF and CertainTeed certified contractors</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
              <span>Comprehensive warranties on materials and workmanship</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
              <span>Free detailed roof inspections and estimates</span>
            </li>
          </ul>

          <div className="bg-muted/30 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">
              Common Roofing Services in {location}
            </h3>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Roof leak repair</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Complete roof replacement</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Emergency roof repair</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Roof maintenance</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Gutter installation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Storm damage repair</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContent;
