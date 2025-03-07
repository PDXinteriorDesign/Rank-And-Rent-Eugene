
import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { getLocalBusinessSchema } from '@/utils/localSeoSchema';

interface LocationTemplateProps {
  city: string;
  title: string;
  metaDescription: string;
  neighborhoods?: string[];
}

const LocationTemplate: React.FC<LocationTemplateProps> = ({
  city,
  title,
  metaDescription,
  neighborhoods
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify(getLocalBusinessSchema(city))}
        </script>
      </Helmet>

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            Professional Roofing Services in {city}, OR
          </h1>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Trusted {city}, OR Roofing Contractors
              </h2>
              <p className="text-gray-600 mb-4">
                Eugene Roofing NW provides expert roofing services throughout {city}, Oregon. 
                Our team specializes in installations, repairs, and maintenance, with solutions 
                designed specifically for Oregon's unique climate conditions.
              </p>
              {neighborhoods && neighborhoods.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-medium mb-2">Areas We Serve in {city}:</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {neighborhoods.map((neighborhood) => (
                      <li key={neighborhood}>{neighborhood}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">
                Our Roofing Services in {city}
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/services/roof-repair-eugene-oregon" className="text-primary hover:underline">
                    ✓ Expert Roof Repairs
                  </Link>
                </li>
                <li>
                  <Link to="/services/roof-installation-eugene-oregon" className="text-primary hover:underline">
                    ✓ New Roof Installation
                  </Link>
                </li>
                <li>
                  <Link to="/services/emergency-roof-repair-eugene-oregon" className="text-primary hover:underline">
                    ✓ 24/7 Emergency Services
                  </Link>
                </li>
                <li>
                  <Link to="/services/roof-cleaning-eugene-oregon" className="text-primary hover:underline">
                    ✓ Professional Roof Cleaning
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Get Your Free Roofing Estimate in {city}, OR
            </h2>
            <p className="mb-6">
              Contact Eugene Roofing NW today for expert roofing services tailored to your needs.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <a 
                href="https://share-na2.hsforms.com/2kBv8I8IESvG_YdjJ25NKlA401s19"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationTemplate;
