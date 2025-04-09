
import React from 'react';
import { Shield, Award, Wrench, Phone, CheckCircle2, MapPin, Check, ArrowRight, Star, Clock, Tool } from 'lucide-react';
import { Card } from "@/components/ui/card";
import RoofingProcess from './RoofingProcess';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useScrollTop } from '@/hooks/use-scroll-top';

const MainContent = () => {
  const scrollToTopAndNavigate = useScrollTop();

  return (
    <section className="container mx-auto px-4 py-16 space-y-12" aria-labelledby="main-content-title">
      <h1 id="main-content-title" className="text-4xl md:text-5xl font-bold text-center mb-12">
        Eugene&apos;s Premier Roofing Experts Since 1996
      </h1>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="prose prose-lg">
              <h2 className="text-3xl font-medium text-primary mb-6">
                Eugene Roofing NW | Trusted Roofing Experts in Eugene &amp; Lane County
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                For over 25 years, Eugene Roofing NW has been the go-to roofing company for homeowners and businesses in Eugene, Springfield, and throughout Lane County. Our GAF-certified roofing contractors are committed to delivering exceptional craftsmanship, superior materials, and customer-first service, making us the most trusted name in the local roofing industry.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                As a locally owned and operated roofing contractor, we take pride in helping our fellow Oregonians protect their homes with high-quality roofing solutions designed specifically for the Pacific Northwest climate. Whether you need a full <button onClick={() => scrollToTopAndNavigate('/services/roof-replacement-eugene-oregon')} className="text-primary font-medium hover:underline">roof replacement</button>, emergency <button onClick={() => scrollToTopAndNavigate('/services/roof-repair-eugene-oregon')} className="text-primary font-medium hover:underline">roof repair</button>, or preventative maintenance, our experienced team ensures a seamless, stress-free experience with transparent pricing and exceptional results.
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">
                Comprehensive Roofing &amp; Exterior Services in Eugene
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                At Eugene Roofing NW, we go beyond just roofing to provide complete exterior solutions for Eugene homeowners. Our full-service team specializes in:
              </p>

              <ul className="space-y-2 mb-8">
                {[
                  <>Roof Replacement & Installation – <button onClick={() => scrollToTopAndNavigate('/services/roof-replacement-eugene-oregon')} className="text-primary font-medium hover:underline">Premium roof replacement in Eugene</button> with architectural asphalt shingles, standing seam metal, tile & flat roofing solutions</>,
                  <>Roof Repairs – Professional <button onClick={() => scrollToTopAndNavigate('/services/roof-repair-eugene-oregon')} className="text-primary font-medium hover:underline">roof repair</button> for storm damage, leak repairs & preventative maintenance at competitive prices</>,
                  <>Emergency Roofing – 24/7 emergency services with rapid response times for storm damage, fallen trees, and unexpected leaks</>,
                  'Roof Inspections – Comprehensive 21-point roof inspections to identify potential issues before they become costly problems',
                  'Siding Installation & Repair – Fiber cement, vinyl, and wood siding solutions built to withstand Oregon\'s climate',
                  'Gutter Installation & Maintenance – Seamless gutters and gutter guards to protect your home from water damage',
                  'Roof Cleaning – Professional moss removal and roof cleaning to extend your roof\'s lifespan',
                  'Windows & Doors – Energy-efficient upgrades to enhance your property\'s comfort and value',
                  'Exterior Painting – Premium paints and expert application to improve curb appeal & protect your home'
                ].map((service, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 leading-relaxed mb-8">
                When you choose Eugene Roofing NW, you're getting more than just a contractor – you're partnering with a team of certified professionals who understand Eugene's unique climate challenges. From our premium asphalt shingles with enhanced wind resistance to our metal roofing systems that can withstand decades of Oregon weather, we customize every solution to your home's specific needs.
              </p>

              <p className="text-gray-700 italic mb-8">
                All of our services come backed by industry-leading warranties and are performed using the highest-quality roofing materials from trusted manufacturers like GAF, CertainTeed, and Owens Corning.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <img 
              src="/lovable-uploads/2d103f99-a3cc-4a1c-a537-ef291d77ec26.png" 
              alt="Elegant two-story home with premium architectural shingles and professional roofing installation in Eugene"
              className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              width="800"
              height="400"
            />
            <img 
              src="/lovable-uploads/d51d454d-e055-4fd2-a201-c8ad96c1dac4.png" 
              alt="Modern ranch-style home showcasing expert roofing craftsmanship with durable materials in Eugene, Oregon"
              className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              width="800"
              height="400"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Why Lane County Homeowners Trust Eugene Roofing NW
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              [<Star className="w-5 h-5 text-primary flex-shrink-0 mt-1" />, 'Top-Rated Eugene Roofing Contractor', '4.9/5 stars across 100+ verified customer reviews'],
              [<Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />, 'GAF Certified & Factory-Trained', 'Exclusive access to premium materials & enhanced warranties'],
              [<Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />, 'Award-Winning Service', 'Recognized as Best of Eugene for 5 consecutive years'],
              [<Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />, '25+ Years Local Experience', 'Deep understanding of Eugene\'s climate challenges'],
              [<Tool className="w-5 h-5 text-primary flex-shrink-0 mt-1" />, 'Advanced Roofing Technology', 'Precision installation techniques for longer-lasting roofs'],
              [<Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />, 'Transparent, No-Pressure Estimates', 'Detailed pricing with no hidden costs or surprises']
            ].map(([icon, title, desc], index) => (
              <div key={index} className="flex items-start gap-3 p-4">
                {icon}
                <div>
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                  <p className="text-gray-700">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Eugene's Most Trusted Roofing Experts Since 1996
          </h2>
          
          <p className="text-gray-700 mb-4">
            Founded in 1996, Eugene Roofing NW started as a small, family-run business and has grown into one of Lane County&apos;s most trusted roofing companies. Over the years, we&apos;ve built our reputation on quality work, reliability, and customer referrals, earning us the trust of homeowners and businesses across Oregon.
          </p>
          
          <p className="text-gray-700 mb-8">
            As a third-generation roofing company, we remain committed to providing top-notch roofing solutions that stand the test of time. With an <button onClick={() => scrollToTopAndNavigate('/services/roof-replacement-eugene-oregon')} className="text-primary font-medium hover:underline">average roof replacement cost in Eugene</button> that's competitive and fair, whether you need a <button onClick={() => scrollToTopAndNavigate('/services/roof-replacement-eugene-oregon')} className="text-primary font-medium hover:underline">new roof</button> or a quick <button onClick={() => scrollToTopAndNavigate('/services/roof-repair-eugene-oregon')} className="text-primary font-medium hover:underline">repair</button>, our team is ready to deliver excellence.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                Serving Eugene, Springfield &amp; All Lane County
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Eugene, OR - Complete roofing services for all neighborhoods</li>
                <li>Springfield, OR - Full-service roofing solutions</li>
                <li>Cottage Grove, OR - Residential and commercial roofing</li>
                <li>Junction City, OR - Expert roof repair and installation</li>
                <li>Veneta, OR - Premium roofing materials and installation</li>
                <li>Creswell, OR - Professional roof replacement</li>
                <li>All Lane County Communities - Comprehensive roofing services</li>
              </ul>
              <Button 
                variant="default"
                className="w-full"
                asChild
              >
                <Link to="/locations" className="flex items-center justify-center">
                  View More Locations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
                <Phone className="w-5 h-5 text-primary" />
                Contact Eugene's Roofing Experts
              </h3>
              <p className="text-gray-700 mb-4">
                Looking for expert roofing services near you? Contact Eugene Roofing NW today for a free, no-obligation consultation and estimate!
              </p>
              <p className="text-primary font-semibold mb-4">
                Get a Free Quote Today! Call or request an estimate online. Same-day appointments available for urgent needs.
              </p>
              <Button 
                className="w-full" 
                size="lg"
                asChild
              >
                <a 
                  href="https://share-na2.hsforms.com/2kBv8I8IESvG_YdjJ25NKlA401s19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Get a Free Quote Today
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>

      <RoofingProcess />
    </section>
  );
};

export default MainContent;
