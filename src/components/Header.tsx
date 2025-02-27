
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import EstimateFormModal from './EstimateFormModal';

const Header = () => {
  const isMobile = useIsMobile();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const location = useLocation();

  const navigationLinks = [
    { to: '/services/eugene-or-roof-repair', label: 'Roof Repair' },
    { to: '/services/eugene-or-roof-installation', label: 'Installation' },
    { to: '/services/emergency-roof-repair-eugene-or', label: 'Emergency' },
    { to: '/services/roof-cleaning-eugene-or', label: 'Cleaning' },
    { to: '/services/roof-replacement-eugene-or', label: 'Replacement' },
    { to: '/blog', label: 'Blog' },
    { to: '/about-eugene-roofing', label: 'About' },
    { to: '/contact-eugene-roofing', label: 'Contact' },
  ];

  const NavigationLinks = () => (
    <>
      {navigationLinks.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={`text-gray-600 hover:text-primary transition-colors ${
            location.pathname === link.to ? 'text-primary font-semibold' : ''
          }`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  const handleEstimateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFormOpen(true);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-[100]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/b161862e-e6ae-4e2d-ac94-f4d465c5d06d.png" 
                alt="Eugene Roofing NW Logo" 
                className="h-12 md:h-16" 
              />
            </Link>
            
            {isMobile ? (
              <div className="flex items-center gap-4">
                <Button asChild size="sm">
                  <Link onClick={handleEstimateClick} to="#" className="bg-secondary hover:bg-secondary/90">
                    Get Estimate
                  </Link>
                </Button>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="w-[300px]">
                    <nav className="flex flex-col gap-6 mt-8">
                      <NavigationLinks />
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            ) : (
              <div className="flex items-center gap-8">
                <nav className="flex items-center gap-8">
                  <NavigationLinks />
                </nav>
                <Button asChild>
                  <Link onClick={handleEstimateClick} to="#" className="bg-secondary hover:bg-secondary/90">
                    Get Free Estimate
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>
      <div className="h-[72px] md:h-[88px]" />
      <EstimateFormModal 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </>
  );
};

export default Header;
