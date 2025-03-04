import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from '@/hooks/use-mobile';
import EstimateFormModal from './EstimateFormModal';

const Header = () => {
  const isMobile = useIsMobile();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const location = useLocation();

  const serviceCategories = {
    repair: [
      { to: '/services/roof-repair-eugene', label: 'Roof Repair' },
      { to: '/services/emergency-roof-repair-eugene', label: 'Emergency Repair' },
    ],
    installation: [
      { to: '/services/roof-installation-eugene', label: 'New Installation' },
      { to: '/services/roof-replacement-eugene', label: 'Roof Replacement' },
    ],
    maintenance: [
      { to: '/services/roof-cleaning-eugene', label: 'Roof Cleaning' },
    ],
  };

  const otherLinks = [
    { to: '/about', label: 'About Us' },
    { to: '/roofing-tips', label: 'Roofing Tips' },
    { to: '/contact', label: 'Contact' },
  ];

  const ServiceDropdown = () => (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-white hover:text-white/80 transition-colors">
        Services <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white mt-2 z-[9999]" sideOffset={8}>
        <div className="p-2">
          <div className="mb-2">
            <span className="px-2 text-sm font-semibold text-gray-500">Repair</span>
            {serviceCategories.repair.map((link) => (
              <DropdownMenuItem key={link.to}>
                <Link
                  to={link.to}
                  className={`w-full px-2 py-1 rounded hover:bg-gray-100 ${
                    location.pathname === link.to ? 'text-primary font-semibold' : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </div>
          <div className="mb-2">
            <span className="px-2 text-sm font-semibold text-gray-500">Installation</span>
            {serviceCategories.installation.map((link) => (
              <DropdownMenuItem key={link.to}>
                <Link
                  to={link.to}
                  className={`w-full px-2 py-1 rounded hover:bg-gray-100 ${
                    location.pathname === link.to ? 'text-primary font-semibold' : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </div>
          <div>
            <span className="px-2 text-sm font-semibold text-gray-500">Maintenance</span>
            {serviceCategories.maintenance.map((link) => (
              <DropdownMenuItem key={link.to}>
                <Link
                  to={link.to}
                  className={`w-full px-2 py-1 rounded hover:bg-gray-100 ${
                    location.pathname === link.to ? 'text-primary font-semibold' : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const NavigationLinks = () => (
    <>
      {!isMobile && <ServiceDropdown />}
      {isMobile && (
        <>
          <div className="mb-4">
            <span className="text-sm font-semibold text-gray-500">Services</span>
            {Object.values(serviceCategories).flat().map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-2 text-gray-600 hover:text-primary transition-colors ${
                  location.pathname === link.to ? 'text-primary font-semibold' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </>
      )}
      {otherLinks.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={`text-white hover:text-white/80 transition-colors ${
            location.pathname === link.to ? 'font-semibold' : ''
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
      <header className="fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-sm z-[100]">
        <div className="container mx-auto px-4 py-0.5">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center" aria-label="Eugene Roofing NW Home">
              <img 
                src="/lovable-uploads/b161862e-e6ae-4e2d-ac94-f4d465c5d06d.png" 
                alt="Eugene Roofing NW Logo" 
                className="h-auto w-[65px] md:w-[75px]"
                width="75"
                height="24"
                style={{ objectFit: 'contain' }}
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
                    <Button variant="ghost" size="icon" className="text-white">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="w-[300px] bg-white">
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
      <div className="h-[52px] md:h-[68px]" />
      <EstimateFormModal 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </>
  );
};

export default Header;
