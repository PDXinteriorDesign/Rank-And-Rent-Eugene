
import React from 'react';
import { Check, MapPin, ClipboardEdit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const RepairContent = () => {
  const benefits = [
    "Licensed & Insured",
    "High-Quality Materials",
    "Energy-Efficient Options",
    "Free Roof Installation Estimates",
    "Workmanship Guarantee",
    "Locally Owned & Operated"
  ];

  const signs = [
    "Frequent Leaks",
    "Missing or Damaged Shingles",
    "Sagging Rooflines",
    "Moss & Algae Growth",
    "High Energy Bills"
  ];

  const process = [
    {
      title: "Free Roof Consultation & Estimate",
      description: "We begin with a detailed inspection of your home's roofing needs. Our team will provide an honest assessment and recommend the best materials and installation options."
    },
    {
      title: "Customized Roofing Plan",
      description: "Every home is unique, and we tailor our roof installation services to your home's structure, climate considerations, and aesthetic preferences."
    },
    {
      title: "Professional Roof Installation",
      description: "Our experienced roofers handle the installation efficiently, ensuring precision and adherence to safety standards."
    },
    {
      title: "Final Inspection & Cleanup",
      description: "Once the installation is complete, we conduct a final walkthrough to ensure quality and durability. We leave your property spotless, removing all debris and materials."
    }
  ];

  return (
    <article className="py-16 bg-white">
      <div className="container mx-auto px-4 space-y-16">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Expert Roof Installation in Eugene, OR – Protect Your Home with Quality Roofing</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            When it comes to roof installation in Eugene, OR, you need a roofing company that delivers durability, reliability, and superior craftsmanship. Your roof is your home's first line of defense against the Pacific Northwest's unpredictable weather—rain, wind, and occasional snow. That's why choosing the right roofing materials and expert contractors is critical to ensuring long-term protection and energy efficiency.
          </p>
          <div className="flex items-center gap-2 justify-center text-gray-600">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Serving Eugene, Springfield, and surrounding Oregon communities</span>
          </div>
        </section>

        {/* Benefits */}
        <section className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Why Choose Our Eugene Roofing Contractors?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <Check className="text-primary w-5 h-5 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Warning Signs */}
        <section className="max-w-4xl mx-auto bg-muted/30 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Signs It's Time for a New Roof</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {signs.map((sign) => (
              <div key={sign} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-gray-700">{sign}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Installation Process */}
        <section className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Our Roof Installation Process</h3>
          <div className="space-y-6">
            {process.map((step, index) => (
              <div key={step.title} className="flex gap-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Financing */}
        <section className="max-w-4xl mx-auto bg-primary/5 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Financing Options Available</h3>
          <p className="text-gray-700 mb-6">
            We understand that a new roof installation in Eugene is a significant investment. That's why we offer flexible roofing financing options to help homeowners get the best roofing system within their budget.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="secondary">
              <Link to="/contact" className="flex items-center gap-2">
                <ClipboardEdit className="w-4 h-4" /> Get Free Quote
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </article>
  );
};

export default RepairContent;
