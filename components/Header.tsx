import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_ITEMS, CAL_LINK } from '../constants';
import { Waypoints, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
    onNavigate?: (href: string) => void;
    isDetailView?: boolean;
    customBookingLink?: string;
    isSharedPage?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ 
    onNavigate, 
    isDetailView, 
    customBookingLink,
    isSharedPage = false 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const isLoomPage = location.pathname.startsWith('/looms');
  
  // Use custom link if provided, otherwise default constant
  const activeBookingLink = customBookingLink || CAL_LINK;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // Case 1: External Link (Starts with http or https)
    if (href.startsWith('http')) {
        window.open(href, '_blank');
        return;
    }

    // Case 2: Internal Route (Starts with /)
    if (href.startsWith('/') && !href.startsWith('/#')) {
        navigate(href);
        return;
    }

    // Case 3: Section Link (Starts with #)
    if (href.startsWith('#')) {
        if (location.pathname === '/') {
            if (onNavigate) {
                onNavigate(href);
            } else {
                const id = href.replace('#', '');
                const element = document.getElementById(id);
                element?.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/' + href);
        }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled || mobileMenuOpen || isDetailView
          ? 'bg-white/95 dark:bg-dark-900/95 backdrop-blur-md border-gray-200 dark:border-dark-700 shadow-sm'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a 
            href="/" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
        >
          <div className="relative">
            <Waypoints className="w-8 h-8 text-brand-500 transition-transform group-hover:rotate-90 duration-500 fill-brand-500/20" />
            <div className="absolute inset-0 bg-brand-500/20 blur-lg rounded-full animate-pulse-slow"></div>
          </div>
          <div className="flex flex-col md:flex-row md:items-baseline gap-0 md:gap-1">
            {isSharedPage && (
                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500 dark:text-gray-400">
                    Made with
                </span>
            )}
            <span className="text-2xl font-display font-bold tracking-tight text-gray-900 dark:text-white transition-colors leading-none">
                Crocode<span className="text-brand-500">Flow</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {!isLoomPage && NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          
          <ThemeToggle />

          <a
            href={activeBookingLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white text-sm font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] border border-brand-500/50"
          >
            Book Strategy Call
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="text-gray-900 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-dark-900 border-b border-gray-200 dark:border-dark-700 py-4 px-6 flex flex-col gap-4 shadow-2xl">
          {!isLoomPage && NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-base font-medium text-gray-800 dark:text-gray-300 py-2 border-b border-gray-100 dark:border-dark-800"
            >
              {item.label}
            </a>
          ))}
          <a
            href={activeBookingLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-2 w-full py-3 bg-brand-600 text-center text-white font-bold rounded-lg uppercase tracking-wide"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Strategy Call
          </a>
        </div>
      )}
    </header>
  );
};