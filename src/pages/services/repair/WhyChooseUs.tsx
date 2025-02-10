
import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us for Your Roof Repair in Eugene?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Local Expertise", description: "Serving Eugene community with deep understanding of Oregon's climate" },
            { title: "Emergency Repairs", description: "Quick response times for urgent repairs to prevent further damage" },
            { title: "Quality Craftsmanship", description: "Premium materials and proven techniques for lasting results" },
            { title: "Free Estimates", description: "Transparent pricing with no hidden fees or surprises" }
          ].map((item) => (
            <div key={item.title} className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
