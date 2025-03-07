
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const locationCategories = {
  cities: [
    { to: '/locations/springfield', label: 'Springfield' },
    { to: '/locations/coburg', label: 'Coburg' },
    { to: '/locations/creswell', label: 'Creswell' },
    { to: '/locations/veneta', label: 'Veneta' },
    { to: '/locations/junction-city', label: 'Junction City' }
  ],
  neighborhoods: [
    { to: '/locations/downtown-eugene', label: 'Downtown Eugene' },
    { to: '/locations/south-eugene', label: 'South Eugene' },
    { to: '/locations/west-eugene', label: 'West Eugene' },
    { to: '/locations/whiteaker', label: 'Whiteaker' },
    { to: '/locations/cal-young', label: 'Cal Young' }
  ]
};

export const LocationNavigation = () => {
  const location = useLocation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-white hover:text-white/80 transition-colors">
        Locations <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white mt-2 z-[9999]" sideOffset={8}>
        <div className="p-2">
          <div className="mb-2">
            <span className="px-2 text-sm font-semibold text-gray-500">Cities</span>
            {locationCategories.cities.map((link) => (
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
            <span className="px-2 text-sm font-semibold text-gray-500">Eugene Neighborhoods</span>
            {locationCategories.neighborhoods.map((link) => (
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
};
