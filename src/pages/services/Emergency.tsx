import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Wrench, House, Hammer, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const Emergency = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Emergency Roofing Services Eugene OR",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Eugene Roofing NW",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main Street",
        "addressLocality": "Eugene",
        "addressRegion": "OR",
        "postalCode": "97401",
        "addressCountry": "US"
      }
    },
    "serviceType": "Emergency Roof Repair",
    "areaServed": {
      "@type": "City",
      "name": "Eugene",
      "addressRegion": "OR"
    },
    "description": "24/7 emergency roofing services in Eugene, OR. Immediate response for storm damage, leaks, and urgent repairs. Professional solutions when you need them most."
  };

  const emergencyServices = [
    {
      title: "Storm Damage",
      description: "High winds, hail, and heavy rain can cause severe roof damage",
      icon: Shield,
      features: ["Wind damage", "Hail damage", "Rain protection"]
    },
    {
      title: "Severe Leaks",
      description: "Rapid detection and repair to prevent water damage inside your home",
      icon: House,
      features: ["Leak detection", "Water damage prevention", "Interior protection"]
    },
    {
      title: "Structural Repairs",
      description: "Quick response for fallen tree limbs and structural damage",
      icon: Wrench,
      features: ["Debris removal", "Structural assessment", "Emergency reinforcement"]
    },
    {
      title: "Immediate Solutions",
      description: "Fast replacement of blown-off shingles and compromised sections",
      icon: Hammer,
      features: ["Shingle replacement", "Quick fixes", "Roof stabilization"]
    }
  ];

  const warningSignsList = [
    "Water dripping from ceilings or walls",
    "Visible holes or large gaps in the roof",
    "Missing shingles after a storm",
    "Sagging roof sections or structural instability",
    "Sudden increase in energy bills due to air leaks"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>24/7 Emergency Roof Repair Eugene OR | Immediate Response</title>
        <meta 
          name="description" 
          content="24/7 emergency roof repair in Eugene, OR. Immediate response for storm damage, leaks & structural issues. Licensed experts available day & night. Call now!" 
        />
        <link rel="canonical" href="https://www.eugeneroofingnw.com/emergency-roof-repair-eugene-oregon" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="24/7 Emergency Roof Repair Eugene OR | Immediate Response" />
        <meta property="og:description" content="Emergency roof repair services in Eugene, OR. Available 24/7 for storm damage, leaks & urgent repairs. Licensed contractors ready to help!" />
        <meta property="og:url" content="https://www.eugeneroofingnw.com/emergency-roof-repair-eugene-oregon" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="emergency roof repair Eugene OR, 24/7 roofing service Eugene, urgent roof repair, storm damage repair Eugene, emergency roofer near me" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              24/7 Emergency Roof Repair in Eugene, Oregon
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              When disaster strikes, every minute counts. Our emergency roofing team is available 
              24/7 to protect your home from storm damage, sudden leaks, and structural issues. 
              Trust Eugene's most reliable emergency roofing service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90">
                <Link to="/contact">Request Emergency Service</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Schedule Free Inspection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us for Emergency Repair?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Rapid Response", description: "Available day or night for immediate assistance", icon: Clock },
              { title: "Local Expertise", description: "Understanding Eugene's weather conditions helps us act fast", icon: House },
              { title: "Certified Technicians", description: "Skilled professionals with emergency repair experience", icon: Shield },
              { title: "Complete Solutions", description: "Quick fixes and comprehensive permanent repairs", icon: Wrench }
            ].map((feature, index) => (
              <Card 
                key={feature.title}
                className="border border-gray-100 hover:border-secondary/20 transition-all duration-300 animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Common Roofing Emergencies We Handle</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {emergencyServices.map((service, index) => (
              <Card 
                key={service.title}
                className="border border-gray-100 hover:border-secondary/20 transition-all duration-300 animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <service.icon className="w-8 h-8 text-secondary" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
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

      {/* Warning Signs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Signs You Need Emergency Roof Repair</h2>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {warningSignsList.map((sign, index) => (
                <li 
                  key={sign} 
                  className="flex items-center gap-3 text-lg animate-slideUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                  {sign}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-destructive rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't Wait - Get Emergency Help Now
            </h2>
            <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
              Every minute counts in a roofing emergency. Contact us now for immediate assistance 
              and prevent further damage to your property. Proudly serving Eugene, Springfield, 
              and surrounding communities in Lane County, Oregon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="bg-white">
                <Link to="/contact">Send Emergency Request</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Emergency;
