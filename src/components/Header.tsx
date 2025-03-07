
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { NavigationLinks } from './header/NavigationLinks';

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-sm z-[100]">
        <div className="container mx-auto px-4 py-2">
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
                  <a 
                    href="https://share-na2.hsforms.com/2kBv8I8IESvG_YdjJ25NKlA401s19" 
                    className="bg-secondary hover:bg-secondary/90"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Estimate
                  </a>
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
                  <a 
                    href="https://share-na2.hsforms.com/2kBv8I8IESvG_YdjJ25NKlA401s19" 
                    className="bg-secondary hover:bg-secondary/90"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Free Estimate
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>
      <div className="h-[64px] md:h-[80px]" />
    </>
  );
};

export default Header;
