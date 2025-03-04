
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Eugene Roofing NW</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Eugene, OR
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:5415550123" className="hover:text-secondary transition-colors">(541) 555-0123</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@eugeneroofingnw.com" className="hover:text-secondary transition-colors">
                  info@eugeneroofingnw.com
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/roof-repair-eugene" className="hover:text-secondary transition-colors">
                  Roof Repair Services
                </Link>
              </li>
              <li>
                <Link to="/services/roof-installation-eugene" className="hover:text-secondary transition-colors">
                  New Roof Installation
                </Link>
              </li>
              <li>
                <Link to="/services/emergency-roof-repair-eugene" className="hover:text-secondary transition-colors">
                  24/7 Emergency Services
                </Link>
              </li>
              <li>
                <Link to="/services/roof-cleaning-eugene" className="hover:text-secondary transition-colors">
                  Professional Roof Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services/roof-replacement-eugene" className="hover:text-secondary transition-colors">
                  Complete Roof Replacement
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/roofing-tips" className="hover:text-secondary transition-colors">
                  Roofing Tips
                </Link>
              </li>
              <li>
                <Link to="/roofing-tips/professional-roof-inspection-guide" className="hover:text-secondary transition-colors">
                  Inspection Guide
                </Link>
              </li>
              <li>
                <Link to="/roofing-tips/metal-roofing-benefits-considerations" className="hover:text-secondary transition-colors">
                  Metal Roofing Guide
                </Link>
              </li>
              <li>
                <Link to="/roofing-tips/essential-roof-maintenance-tips" className="hover:text-secondary transition-colors">
                  Maintenance Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
              <li className="text-secondary mt-4">24/7 Emergency Service Available</li>
              <li>Monday - Friday: 7am - 6pm</li>
              <li>Saturday: 8am - 4pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Eugene Roofing NW. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
