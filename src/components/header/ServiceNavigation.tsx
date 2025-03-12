import { useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useScrollTop } from '@/hooks/use-scroll-top';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const serviceCategories = {
  repair: [
    { to: '/services/roof-repair-eugene-oregon', label: 'Roof Repair' },
    { to: '/services/emergency-roof-repair-eugene-oregon', label: 'Emergency Repair' },
  ],
  installation: [
    { to: '/services/roof-installation-eugene-oregon', label: 'New Installation' },
    { to: '/services/roof-replacement-eugene-oregon', label: 'Roof Replacement' },
  ],
  maintenance: [
    { to: '/services/roof-cleaning-eugene-oregon', label: 'Roof Cleaning' },
  ],
};

export const ServiceNavigation = () => {
  const location = useLocation();
  const scrollToTopAndNavigate = useScrollTop();
  
  return (
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
                <button
                  onClick={() => scrollToTopAndNavigate(link.to)}
                  className={`w-full px-2 py-1 rounded hover:bg-gray-100 text-left ${
                    location.pathname === link.to ? 'text-primary font-semibold' : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </button>
              </DropdownMenuItem>
            ))}
          </div>
          <div className="mb-2">
            <span className="px-2 text-sm font-semibold text-gray-500">Installation</span>
            {serviceCategories.installation.map((link) => (
              <DropdownMenuItem key={link.to}>
                <button
                  onClick={() => scrollToTopAndNavigate(link.to)}
                  className={`w-full px-2 py-1 rounded hover:bg-gray-100 text-left ${
                    location.pathname === link.to ? 'text-primary font-semibold' : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </button>
              </DropdownMenuItem>
            ))}
          </div>
          <div>
            <span className="px-2 text-sm font-semibold text-gray-500">Maintenance</span>
            {serviceCategories.maintenance.map((link) => (
              <DropdownMenuItem key={link.to}>
                <button
                  onClick={() => scrollToTopAndNavigate(link.to)}
                  className={`w-full px-2 py-1 rounded hover:bg-gray-100 text-left ${
                    location.pathname === link.to ? 'text-primary font-semibold' : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </button>
              </DropdownMenuItem>
            ))}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
