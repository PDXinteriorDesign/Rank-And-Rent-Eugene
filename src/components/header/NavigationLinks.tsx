
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { ServiceNavigation } from './ServiceNavigation';
import { LocationNavigation } from './LocationNavigation';

export const otherLinks = [
  { to: '/locations', label: 'Locations' },
  { to: '/about', label: 'About Us' },
  { to: '/roofing-tips', label: 'Roofing Tips' },
  { to: '/contact', label: 'Contact' },
];

export const NavigationLinks = () => {
  const isMobile = useIsMobile();
  const location = useLocation();

  if (isMobile) {
    return (
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
  }

  return (
    <>
      <ServiceNavigation />
      <LocationNavigation />
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
};
