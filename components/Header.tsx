import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_ITEMS, CAL_LINK } from '../constants';
import { Waypoints, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
    onNavigate?: (href: string) => void;
    isDetailView?: boolean;
    bookingLink?: string; 
    ctaLabel?: string; 
    isSharedPage?: boolean;
    position?: 'fixed' | 'absolute';
    hideThemeToggle?: boolean;
    companyName?: string;
    customBookingLink?: string; 
    forcedTheme?: 'light' | 'dark';
}

export const Header: React.FC<HeaderProps> = ({ 
    onNavigate, 
    isDetailView, 
    bookingLink,
    customBookingLink,
    ctaLabel,
    isSharedPage = false,
    position = 'fixed',
    hideThemeToggle = false,
    companyName,
    forcedTheme
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const isLoomPage = location.pathname.startsWith('/looms');
  const isProposalPage = location.pathname.startsWith('/proposals');
  
  // Theme-aware class helper
  const t = (light: string, dark: string) => {
    if (forcedTheme === 'light') return light;
    if (forcedTheme === 'dark') return dark;
    return `${light} dark:${dark}`;
  };

  let activeBookingLink = CAL_LINK;
  let showBookingButton = true;

  if (bookingLink !== undefined) {
      activeBookingLink = bookingLink;
      showBookingButton = !!bookingLink; 
  } else if (customBookingLink !== undefined) {
      activeBookingLink = customBookingLink;
      showBookingButton = !!customBookingLink;
  }

  const buttonText = ctaLabel || "Book Strategy Call";

  useEffect(() => {
    if (position === 'absolute') {
        setIsScrolled(true); 
        return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [position]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href.startsWith('http')) {
        window.open(href, '_blank');
        return;
    }

    if (href.startsWith('/') && !href.startsWith('/#')) {
        navigate(href);
        return;
    }

    if (href.startsWith('#')) {
        if (location.pathname === '/') {
            onNavigate?.(href);
        } else {
            navigate('/' + href);
        }
    }
  };

  const showNavLinks = !isLoomPage && !isProposalPage;

  const Logo = ({ className = "", simple = false }: { className?: string, simple?: boolean }) => (
    <a 
        href="/" 
        onClick={(e) => handleNavClick(e, '#home')}
        className={`flex items-center gap-2 group ${className}`}
    >
      <div className="relative">
        <Waypoints className={`w-8 h-8 text-brand-500 transition-transform group-hover:rotate-90 duration-500 ${simple ? '' : 'fill-brand-500/20'}`} />
        {!simple && <div className={`absolute inset-0 bg-brand-500/20 blur-lg rounded-full animate-pulse-slow`}></div>}
      </div>
      <div className="flex flex-col md:flex-row md:items-baseline gap-0 md:gap-1">
        {isSharedPage && !simple && (
            <span className={`text-[10px] uppercase font-bold tracking-wider ${t('text-gray-500', 'text-gray-400')}`}>
                Made with
            </span>
        )}
        <span className={`text-2xl font-display font-bold tracking-tight ${t('text-gray-900', 'text-white')} transition-colors leading-none`}>
            Crocode<span className="text-brand-500">Flow</span>
        </span>
      </div>
    </a>
  );

  return (
    <header
      className={`${position} top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled || mobileMenuOpen || isDetailView
          ? `${t('bg-white/95', 'bg-dark-900/95')} backdrop-blur-md ${t('border-gray-200', 'border-dark-700')} shadow-sm`
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative min-h-[72px]">
        <div className="flex items-center gap-3 relative z-20 max-w-[70%] md:max-w-none">
            {companyName ? (
                 <div className={`font-display font-bold text-lg md:text-2xl ${t('text-gray-900', 'text-white')} tracking-tight truncate w-full`} title={companyName}>
                    {companyName}
                 </div>
            ) : (
                 <Logo />
            )}
        </div>

        {companyName && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                 <div className="transform scale-75 opacity-40 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0">
                    <Logo />
                 </div>
            </div>
        )}

        <nav className="hidden md:flex items-center gap-6 relative z-20">
          {showNavLinks && NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm font-medium ${t('text-gray-600', 'text-gray-300')} hover:text-brand-600 dark:hover:text-white transition-colors`}
            >
              {item.label}
            </a>
          ))}
          
          {!hideThemeToggle && <ThemeToggle />}

          {showBookingButton && (
            <a
                href={activeBookingLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-brand-500 hover:bg-brand-400 text-white text-sm font-bold rounded-lg transition-all shadow-[0_0_20px] shadow-brand-500/30 hover:shadow-[0_0_30px] hover:shadow-brand-500/50 border border-brand-500/50"
            >
                {buttonText}
            </a>
          )}
        </nav>

        <div className="md:hidden flex items-center gap-4 relative z-20">
          {!hideThemeToggle && <ThemeToggle />}
          <button
            className={`${t('text-gray-900', 'text-gray-300')} p-1`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full ${t('bg-white', 'bg-dark-900')} border-b ${t('border-gray-200', 'border-dark-700')} py-4 px-6 flex flex-col gap-4 shadow-2xl animate-fade-in max-h-[85vh] overflow-y-auto`}>
          {showNavLinks && NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-base font-medium ${t('text-gray-800', 'text-gray-300')} py-2 border-b ${t('border-gray-100', 'border-dark-800')}`}
            >
              {item.label}
            </a>
          ))}
          
          {showBookingButton && (
            <a
                href={activeBookingLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-2 w-full py-3 bg-brand-500 text-center text-white font-bold rounded-lg uppercase tracking-wide shadow-lg shadow-brand-500/20"
                onClick={() => setMobileMenuOpen(false)}
            >
                {buttonText}
            </a>
          )}

          {companyName && (
             <div className={`mt-4 pt-6 border-t ${t('border-gray-100', 'border-dark-800')} flex justify-center pb-2`}>
                 <div className="opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform scale-90">
                    <Logo />
                 </div>
             </div>
          )}
        </div>
      )}
    </header>
  );
};