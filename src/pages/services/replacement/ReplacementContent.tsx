
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Clock, CheckCircle, Star, Tool, Calendar, Receipt } from 'lucide-react';
import { useScrollTop } from '@/hooks/use-scroll-top';

const ReplacementContent = () => {
  const scrollToTopAndNavigate = useScrollTop();

  return (
    <section className="py-20 bg-white" id="roof-replacement-services">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Expert Roof Replacement in Eugene, Oregon</h2>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700 mb-6">
              When repairs aren't enough, our expert team provides comprehensive roof replacement services 
              using premium materials designed specifically for Eugene's climate. With our lifetime workmanship 
              warranty and manufacturer-backed material guarantees, you can trust your new roof will protect 
              your home for decades to come.
            </p>
            
            <h3 className="text-2xl font-semibold mb-6">Why Eugene Homeowners Choose Our Roof Replacement Services</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: Shield,
                  title: "Lifetime Warranty",
                  desc: "Industry-leading workmanship guarantee on all installations"
                },
                {
                  icon: Award,
                  title: "Premium Materials",
                  desc: "GAF and CertainTeed certified products with enhanced weather protection"
                },
                {
                  icon: Clock,
                  title: "Efficient Installation",
                  desc: "Most projects completed in just 2-3 days with minimal disruption"
                },
                {
                  icon: CheckCircle,
                  title: "Clean Worksite",
                  desc: "Daily cleanup, property protection, and thorough final inspection"
                },
                {
                  icon: Star,
                  title: "5-Star Rated Service",
                  desc: "Eugene's highest-rated roofing contractor (4.9/5 across 100+ reviews)"
                },
                {
                  icon: Receipt,
                  title: "Competitive Pricing",
                  desc: "Transparent estimates with financing options and flexible payment plans"
                },
                {
                  icon: Tool,
                  title: "Certified Expertise",
                  desc: "GAF Master Elite® certified contractors (top 2% in the country)"
                },
                {
                  icon: Calendar,
                  title: "10-Year No-Leak Guarantee",
                  desc: "Extended protection beyond standard industry warranties"
                }
              ].map((item, index) => (
                <Card key={index} className="border-none shadow-sm">
                  <CardContent className="flex items-start gap-4 p-6">
                    <item.icon className="w-8 h-8 text-secondary shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-4">The Average Roof Replacement Cost in Eugene</h3>
            <p className="text-gray-700 mb-6">
              The cost of replacing your roof in Eugene depends on several factors, including your home's size, roof complexity, and chosen materials. As of 2025, the average roof replacement cost in Eugene ranges from $8,000 to $15,000 for standard asphalt shingle roofs, while premium materials like metal or cedar can range from $15,000 to $25,000+.
            </p>
            <p className="text-gray-700 mb-6">
              At Eugene Roofing NW, we provide detailed, transparent estimates and offer flexible financing options to make your roof replacement as affordable as possible. Many homeowners are surprised to learn that a high-quality roof replacement actually provides an excellent return on investment, with most premium roofs returning 60-70% of their cost in home value appreciation.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Our Comprehensive Replacement Process</h3>
            <ol className="list-decimal pl-6 space-y-4 mb-8">
              <li className="text-gray-700">
                <span className="font-semibold">Free In-Depth Consultation:</span> We begin with a thorough inspection of your current roof, documenting all issues with detailed photos and measurements.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Custom Material Selection:</span> Our experts help you choose from premium roofing options specifically designed for Eugene's climate, ensuring optimal performance and longevity.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Detailed Project Planning:</span> We provide a comprehensive timeline, prepare your home for installation, and obtain all necessary permits.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Professional Installation:</span> Our certified installation teams carefully remove your old roof, inspect and repair the underlying structure, and install your new roofing system using manufacturer-specified techniques.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Rigorous Quality Inspection:</span> We perform a 21-point final inspection to ensure every aspect of your new roof meets our exacting standards, followed by a thorough cleanup.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Warranty Registration:</span> We handle all paperwork to register your manufacturer warranties and provide documentation of our workmanship guarantee.
              </li>
            </ol>

            <div className="bg-muted/30 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Premium Roofing Materials for Eugene Homes</h3>
              <p className="mb-4">We offer a wide selection of high-quality roofing materials specifically chosen to withstand Eugene's unique climate challenges:</p>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Architectural Shingles (30-50 year warranty)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Standing Seam Metal Roofing (50+ year lifespan)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Premium Slate Tiles (lifetime durability)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Cedar Shakes (natural beauty, 30+ years)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Composite Roofing (eco-friendly options)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>TPO/EPDM (for flat/low-slope roofs)</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mb-4">When to Consider a Complete Roof Replacement</h3>
            <p className="mb-4">While <button onClick={() => scrollToTopAndNavigate('/services/roof-repair-eugene-oregon')} className="text-primary font-medium hover:underline">roof repairs</button> can address many issues, some situations warrant a full replacement:</p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Your roof is over 20 years old (asphalt) or 40+ years (metal)</li>
              <li>Multiple leaks or structural issues throughout the roof</li>
              <li>Significant storm damage affecting large areas</li>
              <li>Visible sagging or structural compromise</li>
              <li>Extensive mold or moisture damage in the attic</li>
              <li>Previous improper installations or repairs</li>
              <li>Desire to upgrade to more energy-efficient or aesthetically pleasing materials</li>
            </ul>

            <p className="text-gray-700 italic mb-8">
              Our certified roofing experts will always provide honest assessments, recommending replacement only when it's truly the most cost-effective and beneficial solution for your home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReplacementContent;
