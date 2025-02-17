import React from 'react';
import { Shield, Users, MapPin, Award, Clock, Wrench, Leaf, BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Users,
    title: "Local Experienced Team",
    description: "Our certified technicians have over 15 years of experience specifically with Eugene's unique roofing challenges and moss removal needs.",
    points: [
      "OSHA safety certified team",
      "Ongoing professional training",
      "Local Eugene residents"
    ]
  },
  {
    icon: Shield,
    title: "Comprehensive Solutions",
    description: "We don't just clean - we provide complete roof protection services tailored to Oregon's climate.",
    points: [
      "Custom treatment plans",
      "Preventative maintenance",
      "Multi-year protection guarantees"
    ]
  },
  {
    icon: MapPin,
    title: "Eugene Climate Specialists",
    description: "Understanding the specific challenges of Willamette Valley weather patterns and their impact on roof maintenance.",
    points: [
      "Local weather expertise",
      "Region-specific solutions",
      "Year-round service availability"
    ]
  },
  {
    icon: Award,
    title: "5-Star Service Quality",
    description: "Maintaining a 4.9/5 star rating with over 200 verified Eugene customer reviews.",
    points: [
      "Satisfaction guarantee",
      "Free post-service inspections",
      "Detailed maintenance reports"
    ]
  },
  {
    icon: Clock,
    title: "Timely Service",
    description: "Quick response times with flexible scheduling to accommodate Eugene homeowners' needs.",
    points: [
      "Same-week appointments",
      "Emergency service available",
      "Efficient completion times"
    ]
  },
  {
    icon: Wrench,
    title: "Advanced Equipment",
    description: "Using state-of-the-art cleaning equipment designed for Oregon's diverse roof types.",
    points: [
      "Soft-wash systems",
      "Eco-friendly technology",
      "Professional-grade tools"
    ]
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Practices",
    description: "Following Oregon DEQ guidelines with environmentally conscious cleaning methods.",
    points: [
      "Bio-degradable solutions",
      "Water conservation",
      "Safe for local vegetation"
    ]
  },
  {
    icon: BadgeCheck,
    title: "Proven Track Record",
    description: "Successfully maintaining roofs across Eugene for over a decade.",
    points: [
      "2,000+ roofs cleaned",
      "500+ recurring clients",
      "100% safety record"
    ]
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "South Eugene",
    quote: "They did an amazing job removing years of moss buildup from my historic home's roof. Their attention to detail with our cedar shakes was impressive.",
    rating: 5,
    date: "March 2024"
  },
  {
    name: "Michael Chang",
    location: "Cal Young",
    quote: "After their treatment, my energy bills noticeably decreased. The team explained everything and provided great preventative maintenance tips.",
    rating: 5,
    date: "February 2024"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us for Roof Cleaning?</h2>
          <p className="text-gray-600">
            With over a decade of experience serving Eugene homeowners, we've developed specialized 
            techniques for the unique challenges posed by our local climate. Our commitment to quality 
            and customer satisfaction has made us Eugene's most trusted roof cleaning service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="bg-white rounded-lg shadow-sm animate-slideUp hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <feature.icon className="w-12 h-12 mb-4 text-secondary" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Recent Customer Testimonials</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div className="text-sm">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.location} - {testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-gray-600">
            Trust Eugene's premier roof cleaning service to protect your investment. Our proven track 
            record, specialized knowledge of local conditions, and commitment to customer satisfaction 
            make us the clear choice for your roof maintenance needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
