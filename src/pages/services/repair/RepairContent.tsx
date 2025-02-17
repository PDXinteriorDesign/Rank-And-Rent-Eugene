
import React from 'react';
import { Check, MapPin, ClipboardEdit, Shield, Clock, Wrench, ChartBar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const RepairContent = () => {
  const benefits = [
    "24/7 Emergency Response",
    "Licensed & OSHA-Certified Teams",
    "97% Customer Satisfaction Rate",
    "Average Response Time: 2-4 Hours",
    "Locally Owned & Operated",
    "Comprehensive Material Warranty"
  ];

  const signs = [
    "Interior Water Stains",
    "Missing or Damaged Shingles",
    "Visible Daylight Through Roof Boards",
    "Sagging Roof Deck",
    "Granules in Gutters",
    "High Energy Bills"
  ];

  const process = [
    {
      title: "Rapid Response Assessment",
      description: "Our certified inspectors arrive quickly to assess damage and prevent further issues. We provide detailed documentation for insurance claims when applicable."
    },
    {
      title: "Custom Repair Strategy",
      description: "We develop a targeted repair plan using materials rated for Eugene's climate, with a focus on long-term durability and weather resistance."
    },
    {
      title: "Professional Repair Execution",
      description: "Our experienced teams work efficiently while maintaining the highest quality standards. Most repairs are completed within 1-2 days."
    },
    {
      title: "Quality Assurance",
      description: "Every repair undergoes a comprehensive inspection, including moisture testing and structural integrity verification."
    }
  ];

  const performanceMetrics = [
    {
      icon: Clock,
      stat: "2-4 Hours",
      description: "Average emergency response time"
    },
    {
      icon: Shield,
      stat: "15+ Years",
      description: "Average repair lifespan"
    },
    {
      icon: Wrench,
      stat: "5,000+",
      description: "Repairs completed in Eugene"
    },
    {
      icon: ChartBar,
      stat: "97%",
      description: "Customer satisfaction rate"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "South Eugene",
      quote: "They responded within 2 hours during a major storm leak. Professional, thorough, and reasonably priced.",
      date: "March 2024"
    },
    {
      name: "Mike Thompson",
      location: "Springfield",
      quote: "Fixed our persistent leak that two other companies couldn't solve. Their attention to detail is outstanding.",
      date: "February 2024"
    }
  ];

  return (
    <article className="py-16 bg-white">
      <div className="container mx-auto px-4 space-y-16">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Expert Roof Repair in Eugene, OR – Fast, Reliable Solutions</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Eugene's weather demands prompt, professional roof repair services you can trust. With over 15 years of local experience, we understand the unique challenges posed by the Pacific Northwest climate. Our certified repair teams specialize in addressing everything from storm damage to wear-and-tear issues, using materials specifically rated for our region's weather patterns.
          </p>
          <div className="flex items-center gap-2 justify-center text-gray-600">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Serving Eugene, Springfield, and surrounding Oregon communities</span>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {performanceMetrics.map((metric) => (
              <div key={metric.stat} className="text-center p-4 bg-muted/30 rounded-lg">
                <metric.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-primary">{metric.stat}</div>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Why Choose Our Eugene Roof Repair Services?</h3>
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
          <h3 className="text-2xl font-bold mb-6">Common Roof Problems in Eugene</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {signs.map((sign) => (
              <div key={sign} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-gray-700">{sign}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Repair Process */}
        <section className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Our Efficient Repair Process</h3>
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

        {/* Testimonials */}
        <section className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Recent Repair Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-muted/30 p-6 rounded-lg">
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div className="text-sm">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.location} - {testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Financing */}
        <section className="max-w-4xl mx-auto bg-primary/5 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Emergency Repairs & Financing Available</h3>
          <p className="text-gray-700 mb-6">
            Don't wait until a small repair becomes a major problem. We offer flexible financing options and quick response times for emergency situations. Our team is ready 24/7 to protect your home from roof damage.
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
