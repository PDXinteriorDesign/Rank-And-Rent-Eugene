
import React from 'react';
import { Shield, Users, MapPin, Award, Clock, Wrench, Leaf, BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Users,
    title: "Local Installation Experts",
    description: "Eugene's most experienced roofing team with over 20 years of local installation expertise.",
    points: [
      "Licensed CCB contractors",
      "Factory-certified installers",
      "Local Eugene team members"
    ]
  },
  {
    icon: Shield,
    title: "Premium Materials",
    description: "Partnering with industry-leading manufacturers to provide the best roofing materials for Oregon's climate.",
    points: [
      "Weather-rated materials",
      "Extended warranties",
      "Energy-efficient options"
    ]
  },
  {
    icon: MapPin,
    title: "Eugene Climate Specialists",
    description: "Expert knowledge of local weather patterns and building codes for optimal roof performance.",
    points: [
      "Lane County code compliance",
      "Climate-specific solutions",
      "Local permit handling"
    ]
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Maintaining the highest standards with a 4.9/5 rating from Eugene homeowners.",
    points: [
      "Multi-point inspections",
      "Third-party verification",
      "15-year workmanship warranty"
    ]
  },
  {
    icon: Clock,
    title: "Efficient Installation",
    description: "Streamlined process with minimal disruption to your daily routine.",
    points: [
      "3-5 day completion time",
      "Weather monitoring",
      "Flexible scheduling"
    ]
  },
  {
    icon: Wrench,
    title: "Advanced Techniques",
    description: "Using the latest installation methods and technology for superior results.",
    points: [
      "Precision equipment",
      "Digital roof mapping",
      "Modern ventilation systems"
    ]
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Environmentally conscious installation methods and materials.",
    points: [
      "Recycled materials",
      "Energy Star certified",
      "Reduced waste practices"
    ]
  },
  {
    icon: BadgeCheck,
    title: "Proven Results",
    description: "A track record of excellence in the Eugene community.",
    points: [
      "1,500+ roofs installed",
      "300+ 5-star reviews",
      "Zero safety incidents"
    ]
  }
];

const successStories = [
  {
    name: "David Wilson",
    location: "South Hills, Eugene",
    quote: "They installed our new roof in just 4 days, even with Oregon's unpredictable weather. The team's attention to detail and clean-up was impressive.",
    rating: 5,
    date: "March 2024"
  },
  {
    name: "Lisa Martinez",
    location: "Friendly Area",
    quote: "Their energy-efficient roofing solution has already reduced our heating costs by 20%. The installation team was professional and courteous throughout.",
    rating: 5,
    date: "February 2024"
  }
];

const InstallationWhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us for Your Roof Installation?</h2>
          <p className="text-gray-600">
            As Eugene's premier roofing installation experts, we combine decades of local experience 
            with cutting-edge techniques and materials. Our deep understanding of the Willamette Valley's 
            unique climate ensures your new roof will stand up to Oregon's challenging weather conditions.
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
          <h3 className="text-2xl font-bold text-center mb-8">Recent Installation Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <Card key={story.name} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{story.quote}"</p>
                  <div className="text-sm">
                    <p className="font-semibold">{story.name}</p>
                    <p className="text-gray-500">{story.location} - {story.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-gray-600">
            Trust Eugene's leading roofing installation team to protect your home. With our proven track 
            record, comprehensive warranties, and commitment to excellence, we ensure your new roof will 
            provide lasting protection and value for your home.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstallationWhyChooseUs;
