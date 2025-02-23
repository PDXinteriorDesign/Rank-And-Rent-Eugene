
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Home } from 'lucide-react';

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
                (541) 555-0123
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@eugeneroofingnw.com
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/eugene-or-roof-repair" className="hover:text-secondary transition-colors">
                  Roof Repair
                </Link>
              </li>
              <li>
                <Link to="/services/eugene-or-roof-installation" className="hover:text-secondary transition-colors">
                  Roof Installation
                </Link>
              </li>
              <li>
                <Link to="/services/emergency-roof-repair-eugene-or" className="hover:text-secondary transition-colors">
                  Emergency Services
                </Link>
              </li>
              <li>
                <Link to="/services/roof-cleaning-eugene-or" className="hover:text-secondary transition-colors">
                  Roof Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-eugene-roofing" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-eugene-roofing" className="hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 7am - 6pm</li>
              <li>Saturday: 8am - 4pm</li>
              <li>Sunday: Closed</li>
              <li className="text-secondary mt-4">24/7 Emergency Service Available</li>
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
