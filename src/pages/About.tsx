
import React from 'react';
import { Helmet } from 'react-helmet';
import { Users, Award, HandShake, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const About = () => {
  const teamValues = [
    {
      title: "Expert Craftsmanship",
      description: "Our team brings decades of combined experience in roofing excellence",
      icon: Award,
      features: ["Licensed professionals", "Continuous training", "Quality workmanship"]
    },
    {
      title: "Customer-First Approach",
      description: "We prioritize your needs and ensure complete satisfaction",
      icon: Heart,
      features: ["Personalized service", "Clear communication", "100% satisfaction"]
    },
    {
      title: "Community Focus",
      description: "Proud to serve and support the Eugene community",
      icon: Users,
      features: ["Local business", "Community involvement", "Eugene-based team"]
    },
    {
      title: "Professional Standards",
      description: "Committed to the highest standards of service and integrity",
      icon: HandShake,
      features: ["Licensed & insured", "Best practices", "Transparent pricing"]
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Eugene Roofing Experts",
      "description": "Professional roofing services in Eugene, Oregon with over 20 years of experience.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Eugene",
        "addressRegion": "OR",
        "postalCode": "97401"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Eugene Roofing Experts | Professional Roofers in Eugene, OR</title>
        <meta 
          name="description" 
          content="Learn about Eugene Roofing Experts - your trusted local roofing professionals. Over 20 years of experience, licensed & insured, serving Eugene and surrounding areas."
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Your Trusted Roofing Partner in Eugene
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              With over 20 years of experience, we've built our reputation on quality workmanship, 
              integrity, and exceptional customer service.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link to="/contact">Get to Know Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teamValues.map((value, index) => (
              <Card 
                key={value.title}
                className="border border-gray-100 hover:border-secondary/20 transition-all duration-300 animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <value.icon className="w-8 h-8 text-secondary" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{value.description}</p>
                  <ul className="space-y-2">
                    {value.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "Founder & Lead Expert",
                description: "20+ years of roofing expertise"
              },
              {
                name: "Sarah Johnson",
                role: "Project Manager",
                description: "15 years of project management"
              },
              {
                name: "Mike Wilson",
                role: "Lead Technician",
                description: "12 years of hands-on experience"
              }
            ].map((member, index) => (
              <div 
                key={member.name}
                className="text-center p-6 bg-white rounded-lg shadow-sm animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-24 h-24 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-secondary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Work with Us?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's discuss your roofing needs and how we can help protect your home 
              or business with quality roofing solutions.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
