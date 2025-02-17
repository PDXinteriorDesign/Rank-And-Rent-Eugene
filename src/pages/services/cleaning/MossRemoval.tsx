
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sprout, Shield, LineChart, Home, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: "Prevents Roof Damage",
    description: "Protects against leaks, rot, and structural deterioration"
  },
  {
    icon: LineChart,
    title: "Improves Energy Efficiency",
    description: "A clean, moss-free roof reflects heat better, reducing energy costs"
  },
  {
    icon: Home,
    title: "Enhances Curb Appeal",
    description: "Restores your roof's natural color and boosts your home's aesthetic"
  },
  {
    icon: Sprout,
    title: "Saves Money",
    description: "Prevents costly repairs and premature roof replacements"
  }
];

const successStories = [
  {
    title: "South Eugene Home Recovery",
    description: "Removed extensive moss growth from a 25-year-old roof, preventing the need for early replacement and saving the homeowner $12,000.",
    savings: "$12,000 saved"
  },
  {
    title: "Historic District Restoration",
    description: "Carefully cleaned and treated a 1920s craftsman home's cedar shake roof, preserving its historic character while preventing further decay.",
    result: "15+ years extended life"
  }
];

const MossRemoval = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Eugene's Climate Challenges: Why Moss Removal Matters
          </h2>
          <p className="text-gray-600 mb-8">
            Eugene's unique climate, with an average of 47 inches of annual rainfall and humidity 
            levels between 71-89%, creates perfect conditions for moss growth. The Willamette Valley's 
            abundant tree coverage provides shade that further promotes moss development on roofs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle>Our EPA-Compliant Cleaning Process</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <p className="font-semibold">Initial Assessment</p>
                    <p className="text-sm text-gray-600">Comprehensive inspection following Oregon state guidelines</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <p className="font-semibold">Eco-Friendly Treatment</p>
                    <p className="text-sm text-gray-600">Oregon DEQ approved cleaning solutions safe for local watershed</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <p className="font-semibold">Preventative Protection</p>
                    <p className="text-sm text-gray-600">Application of zinc or copper sulfate treatments to prevent regrowth</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle>Local Success Stories</CardTitle>
            </CardHeader>
            <CardContent>
              {successStories.map((story) => (
                <div key={story.title} className="mb-4 last:mb-0">
                  <h4 className="font-semibold text-primary">{story.title}</h4>
                  <p className="text-sm text-gray-600 mb-1">{story.description}</p>
                  <p className="text-sm font-medium text-secondary">
                    {story.savings || story.result}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">Benefits of Professional Moss Removal</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              className="text-center animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <benefit.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            With over 15 years of experience in Eugene's unique climate, our team understands the 
            specific challenges that local homeowners face. Our proven methods are tailored to the 
            Willamette Valley's weather patterns and environmental regulations, ensuring effective 
            and compliant roof cleaning solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MossRemoval;
