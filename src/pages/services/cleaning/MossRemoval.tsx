
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sprout, Shield, LineChart, Home } from 'lucide-react';

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

const MossRemoval = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Roof Cleaning and Moss Removal: Protect Your Home from Hidden Damage
          </h2>
          <p className="text-gray-600 mb-8">
            Moss growth on your roof might seem like a minor aesthetic issue, but it can cause significant 
            damage if left untreated. The damp, shaded environment created by moss traps moisture against 
            roofing materials, leading to rot, leaks, and costly repairs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle>Why Moss Removal is Essential</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Moss doesn't just affect your roof's appearance—it compromises its structural health. 
                The roots of moss can infiltrate shingles, causing them to lift, crack, or deteriorate 
                over time. This leads to water seepage, mold growth, and insulation issues inside your home.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle>Our Comprehensive Process</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Thorough roof inspection to assess moss growth</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Gentle cleaning with soft-brush techniques</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Eco-friendly treatments to prevent regrowth</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Ongoing maintenance plans available</span>
                </li>
              </ul>
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
            We understand the unique climate challenges that contribute to moss growth in Eugene. 
            Our team is trained to handle moss issues specific to this region, ensuring long-lasting results. 
            Whether you're dealing with minor moss patches or a full infestation, we've got you covered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MossRemoval;
