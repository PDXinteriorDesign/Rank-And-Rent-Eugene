import React from 'react';
import { Shield, Award, Wrench, Phone, CheckCircle2, MapPin, Check, ArrowRight } from 'lucide-react';
import { Card } from "@/components/ui/card";
import RoofingProcess from './RoofingProcess';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const MainContent = () => {
  return (
    <section className="container mx-auto px-4 py-16 space-y-12" aria-labelledby="main-content-title">
      <h1 id="main-content-title" className="text-4xl md:text-5xl font-bold text-center mb-12">
        Eugene&apos;s Premier Roofing Experts
      </h1>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="prose prose-lg">
              <h2 className="text-3xl font-medium text-primary mb-6">
                Eugene Roofing NW | Trusted Roofing Experts in Eugene &amp; Lane County
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                For over 25 years, Eugene Roofing NW has been the go-to roofing company for homeowners and businesses in Eugene, Springfield, and throughout Lane County. We are committed to delivering exceptional craftsmanship, superior materials, and customer-first service, making us a trusted name in the local roofing industry.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                As a locally owned and operated roofing contractor, we take pride in helping our fellow Oregonians protect their homes with high-quality roofing, siding, and gutter services. Whether you need a full roof replacement, emergency roof repair, or preventative maintenance, our experienced team ensures a seamless, stress-free experience.
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">
                Comprehensive Roofing &amp; Exterior Services in Eugene
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                At Eugene Roofing NW, we go beyond just roofing. Our team specializes in:
              </p>

              <ul className="space-y-2 mb-8">
                {[
                  'Roof Replacement & Installation – Asphalt, metal, tile & flat roofing solutions',
                  'Roof Repairs – Storm damage, leak repairs & general maintenance',
                  'Siding Installation & Repair – Durable materials built to withstand Oregon\'s climate',
                  'Gutter Installation & Maintenance – Protect your home from water damage',
                  'Windows & Doors – Energy-efficient upgrades to enhance your property',
                  'Exterior Painting – A fresh coat to improve curb appeal & longevity'
                ].map((service, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 italic mb-8">
                All of our services come backed by industry-leading warranties and are performed using the highest-quality roofing materials available today.
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">
                Why Lane County Homeowners Trust Eugene Roofing NW
              </h2>

              <div className="grid gap-4 mb-8">
                {[
                  ['🏠 Locally Owned & Operated', 'Deep roots in Eugene & surrounding areas'],
                  ['🔨 Certified & Experienced Contractors', 'Over 25 years of hands-on roofing expertise'],
                  ['🛡 Durable & Long-Lasting Materials', 'Premium roofing products built for the PNW climate'],
                  ['⭐ Customer-First Approach', 'Transparent pricing, honest assessments & top-tier service'],
                  ['✅ Fully Licensed & Insured', 'Your home\'s protection is our top priority']
                ].map(([title, desc], index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{title}</h3>
                      <p className="text-gray-700">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <img 
              src="/lovable-uploads/5997350c-7571-42cc-b7c1-6b57b007c504.png" 
              alt="Professional roofing services in Eugene"
              className="rounded-lg shadow-lg w-full object-cover h-[400px]"
            />
            <img 
              src="/lovable-uploads/b161862e-e6ae-4e2d-ac94-f4d465c5d06d.png" 
              alt="Quality roofing installation"
              className="rounded-lg shadow-lg w-full object-cover h-[400px]"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Why Lane County Homeowners Trust Eugene Roofing NW
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ['Locally Owned & Operated', 'Deep roots in Eugene & surrounding areas'],
              ['Certified & Experienced Contractors', 'Over 25 years of hands-on roofing expertise'],
              ['Durable & Long-Lasting Materials', 'Premium roofing products built for the PNW climate'],
              ['Customer-First Approach', 'Transparent pricing, honest assessments & top-tier service'],
              ['Fully Licensed & Insured', 'Your home\'s protection is our top priority']
            ].map(([title, desc], index) => (
              <div key={index} className="flex items-start gap-3 p-4">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
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
            Trusted Roofing Experts Since 1996
          </h2>
          
          <p className="text-gray-700 mb-4">
            Founded in 1996, Eugene Roofing NW started as a small, family-run business and has grown into one of Lane County&apos;s most trusted roofing companies. Over the years, we&apos;ve built our reputation on quality work, reliability, and customer referrals, earning us the trust of homeowners and businesses across Oregon.
          </p>
          
          <p className="text-gray-700 mb-8">
            As a third-generation roofing company, we remain committed to providing top-notch roofing solutions that stand the test of time. Whether you need a new roof or a quick repair, our team is ready to deliver excellence.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                Serving Eugene, Springfield &amp; Surrounding Areas
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Eugene, OR</li>
                <li>Springfield, OR</li>
                <li>Cottage Grove, OR</li>
                <li>Junction City, OR</li>
                <li>Veneta, OR</li>
                <li>Other Lane County Communities</li>
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
                Contact Us
              </h3>
              <p className="text-gray-700 mb-4">
                Looking for expert roofing services near you? Contact Eugene Roofing NW today!
              </p>
              <p className="text-primary font-semibold mb-4">
                Get a Free Quote Today! Call or request an estimate online.
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
