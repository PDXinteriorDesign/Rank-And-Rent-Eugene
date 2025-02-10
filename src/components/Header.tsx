
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();

  const navigationLinks = [
    { to: '/services/repair', label: 'Roof Repair' },
    { to: '/services/installation', label: 'Installation' },
    { to: '/services/emergency', label: 'Emergency' },
    { to: '/services/cleaning', label: 'Cleaning' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const NavigationLinks = () => (
    <>
      {navigationLinks.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="text-gray-600 hover:text-primary transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
            <Home className="w-6 h-6 text-secondary" />
            Eugene Roofing NW
          </Link>
          
          {isMobile ? (
            <div className="flex items-center gap-4">
              <Button asChild size="sm">
                <Link to="/contact" className="bg-secondary hover:bg-secondary/90">
                  Get Estimate
                </Link>
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <nav className="flex flex-col gap-4 mt-8">
                    <NavigationLinks />
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          ) : (
            <>
              <nav className="flex items-center space-x-8">
                <NavigationLinks />
              </nav>
              <Button asChild>
                <Link to="/contact" className="bg-secondary hover:bg-secondary/90">
                  Get Free Estimate
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
