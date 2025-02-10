
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
            <Home className="w-6 h-6 text-secondary" />
            Eugene Roofing NW
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/services/repair" className="text-gray-600 hover:text-primary transition-colors">
              Roof Repair
            </Link>
            <Link to="/services/installation" className="text-gray-600 hover:text-primary transition-colors">
              Installation
            </Link>
            <Link to="/services/emergency" className="text-gray-600 hover:text-primary transition-colors">
              Emergency
            </Link>
            <Link to="/services/cleaning" className="text-gray-600 hover:text-primary transition-colors">
              Cleaning
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          
          <div>
            <Button asChild>
              <Link to="/contact" className="bg-secondary hover:bg-secondary/90">
                Get Free Estimate
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
