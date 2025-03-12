
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { ServiceNavigation } from './ServiceNavigation';
import { useScrollTop } from '@/hooks/use-scroll-top';

export const otherLinks = [
  { to: '/locations', label: 'Locations' },
  { to: '/about', label: 'About Us' },
  { to: '/roofing-tips', label: 'Roofing Tips' },
  { to: '/contact', label: 'Contact' },
];

export const NavigationLinks = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const scrollToTopAndNavigate = useScrollTop();

  if (isMobile) {
    return (
      <>
        <div className="mb-4">
          <span className="text-sm font-semibold text-gray-500">Services</span>
          <ServiceNavigation />
        </div>
        {otherLinks.map((link) => (
          <button
            key={link.to}
            onClick={() => scrollToTopAndNavigate(link.to)}
            className={`block py-2 text-gray-600 hover:text-primary transition-colors ${
              location.pathname === link.to ? 'text-primary font-semibold' : ''
            }`}
          >
            {link.label}
          </button>
        ))}
      </>
    );
  }

  return (
    <>
      <ServiceNavigation />
      {otherLinks.map((link) => (
        <button
          key={link.to}
          onClick={() => scrollToTopAndNavigate(link.to)}
          className={`text-white hover:text-white/80 transition-colors ${
            location.pathname === link.to ? 'font-semibold' : ''
          }`}
        >
          {link.label}
        </button>
      ))}
    </>
  );
};
