
import React from 'react';
import { Award, BadgeCheck, Users } from 'lucide-react';

const TrustIndicators = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="animate-slideUp">
            <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
            <p className="text-gray-600">
              CCB# Licensed Oregon contractor with full insurance coverage for your protection. 
              Serving Eugene homeowners with confidence since 2004.
            </p>
          </div>
          <div className="animate-slideUp" style={{ animationDelay: "100ms" }}>
            <BadgeCheck className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">
              Industry-leading 10-year workmanship warranty on all roofing services. 
              Using only premium materials from GAF, CertainTeed, and Owens Corning.
            </p>
          </div>
          <div className="animate-slideUp" style={{ animationDelay: "200ms" }}>
            <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">5-Star Rated</h3>
            <p className="text-gray-600">
              Over 200+ verified 5-star reviews from Eugene homeowners. 
              Voted Best Roofing Contractor in Lane County three years running.
            </p>
          </div>
        </div>

        {/* Organization Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Eugene Roofing NW",
            "foundingDate": "2004",
            "areaServed": {
              "@type": "City",
              "name": "Eugene",
              "state": "Oregon"
            },
            "award": [
              "Best Roofing Contractor in Lane County 2023",
              "Best Roofing Contractor in Lane County 2022",
              "Best Roofing Contractor in Lane County 2021"
            ],
            "hasCredential": [
              "CCB Licensed Contractor",
              "GAF Certified Installer",
              "CertainTeed SELECT ShingleMaster"
            ]
          })}
        </script>
      </div>
    </section>
  );
};

export default TrustIndicators;
