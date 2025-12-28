import React, { useEffect, useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CAL_LINK } from '../constants';
import { CheckCircle2, ArrowRight, PlayCircle, Video, ListChecks, Calendar as CalendarIcon } from 'lucide-react';
import { BookingEmbed } from './BookingEmbed';

// Default Text Constants
const DEFAULTS = {
  headline: "Prepared for {name}",
  description: "We analyzed your current workflow. Here is the blueprint to automate it and scale.",
  highlights: [
    "Current bottlenecks analysis",
    "Proposed AI architecture",
    "ROI projection & timeline"
  ],
  ctaTitle: "Ready to execute?",
  ctaDescription: "Select a time below to discuss the implementation plan and get your systems running.",
  ctaButton: "Book Strategy Call",
  badgeText: "Private Video Brief",
  highlightsTitle: "Key Takeaways"
};

type VideoPlatform = 'loom' | 'youtube' | 'vimeo' | 'drive' | 'vidyard' | 'wistia' | 'unknown';

// Robust color adjustment (Tint/Shade)
const adjustColor = (hex: string, percent: number) => {
    hex = hex.replace(/^\s*#|\s*$/g, '');
    if (hex.length === 3) hex = hex.replace(/(.)/g, '$1$1');
    
    let r = parseInt(hex.substr(0, 2), 16);
    let g = parseInt(hex.substr(2, 2), 16);
    let b = parseInt(hex.substr(4, 2), 16);

    if (percent > 0) {
        // Lighten (Mix with White) - Reduced intensity for lighter shades to keep visibility
        const factor = percent / 100;
        r = Math.round(r + (255 - r) * factor);
        g = Math.round(g + (255 - g) * factor);
        b = Math.round(b + (255 - b) * factor);
    } else {
        // Darken (Mix with Black)
        const factor = 1 + (percent / 100); // e.g. -20% -> 0.8
        r = Math.round(r * factor);
        g = Math.round(g * factor);
        b = Math.round(b * factor);
    }

    const toHex = (n: number) => {
        const h = Math.max(0, Math.min(255, n)).toString(16);
        return h.length === 1 ? '0' + h : h;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

interface LoomPageProps {
  previewData?: {
    name: string;
    videoId: string;
    videoType?: VideoPlatform;
    color: string;
    bookingLink: string;
    embedBooking?: boolean;
    senderName?: string;
    theme?: 'light' | 'dark';
    text?: {
      headline?: string;
      description?: string;
      highlights?: string[];
      ctaTitle?: string;
      ctaDescription?: string;
      ctaButton?: string;
      badgeText?: string;
      highlightsTitle?: string;
    }
  };
  themeMode?: 'light' | 'dark';
}

export const LoomPage: React.FC<LoomPageProps> = ({ previewData, themeMode }) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (!previewData) {
      window.scrollTo(0, 0);
    }
  }, [previewData]);

  const pageData = useMemo(() => {
    if (previewData) {
      return {
          ...previewData,
          theme: themeMode || previewData.theme,
          videoType: previewData.videoType || 'loom',
          embedBooking: previewData.embedBooking ?? true,
          text: {
              headline: previewData.text?.headline || DEFAULTS.headline,
              description: previewData.text?.description || DEFAULTS.description,
              highlights: previewData.text?.highlights || DEFAULTS.highlights,
              ctaTitle: previewData.text?.ctaTitle || DEFAULTS.ctaTitle,
              ctaDescription: previewData.text?.ctaDescription || DEFAULTS.ctaDescription,
              ctaButton: previewData.text?.ctaButton || DEFAULTS.ctaButton,
              badgeText: previewData.text?.badgeText || DEFAULTS.badgeText,
              highlightsTitle: previewData.text?.highlightsTitle || DEFAULTS.highlightsTitle,
          }
      };
    }

    const isJustinDemo = location.pathname.includes('justinhowells');
    const highlightsParam = searchParams.get('list');
    
    return {
      name: searchParams.get('name') || (isJustinDemo ? "Justin Howells" : "Valued Partner"),
      senderName: searchParams.get('from') || "", 
      videoId: searchParams.get('id') || "d803199dda4449eeaae27cc46d019fae", 
      videoType: (searchParams.get('vtype') as VideoPlatform) || 'loom',
      color: searchParams.get('color'),
      bookingLink: searchParams.get('booking') || CAL_LINK, 
      embedBooking: searchParams.get('embed') !== 'false',
      theme: (searchParams.get('theme') as 'light' | 'dark') || (isJustinDemo ? 'dark' : undefined),
      text: {
          headline: searchParams.get('h1') || DEFAULTS.headline,
          description: searchParams.get('desc') || DEFAULTS.description,
          highlights: highlightsParam ? highlightsParam.split('|') : DEFAULTS.highlights,
          ctaTitle: searchParams.get('cta_t') || DEFAULTS.ctaTitle,
          ctaDescription: searchParams.get('cta_d') || DEFAULTS.ctaDescription,
          ctaButton: searchParams.get('cta_b') || DEFAULTS.ctaButton,
          badgeText: searchParams.get('badge') || DEFAULTS.badgeText,
          highlightsTitle: searchParams.get('list_t') || DEFAULTS.highlightsTitle,
      }
    };
  }, [location, searchParams, previewData, themeMode]);

  const renderVideoEmbed = () => {
    const { videoId, videoType } = pageData;
    if (!videoId) return (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-gray-500 flex-col gap-2">
            <PlayCircle className="w-12 h-12 opacity-50" />
            <p className="font-medium text-sm">Video Preview Unavailable</p>
        </div>
    );

    let src = '';
    switch (videoType) {
        case 'loom':
            src = `https://www.loom.com/embed/${videoId}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`;
            break;
        case 'youtube':
            src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=0`;
            break;
        case 'vimeo':
            src = `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`;
            break;
        case 'drive':
            src = `https://drive.google.com/file/d/${videoId}/preview`;
            break;
        case 'vidyard':
            src = `https://play.vidyard.com/${videoId}?disable_popouts=1&v=4.3.9`;
            break;
        case 'wistia':
            src = `https://fast.wistia.net/embed/iframe/${videoId}`;
            break;
        default:
            return <div className="absolute inset-0 flex items-center justify-center text-white">Unsupported platform</div>;
    }

    return (
        <iframe 
            src={src} 
            frameBorder="0" 
            allowFullScreen 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            title="Project Video"
        ></iframe>
    );
  };

  // Theme-aware class helper
  const t = (light: string, dark: string) => {
    if (pageData.theme === 'light') return light;
    if (pageData.theme === 'dark') return dark;
    return `${light} dark:${dark}`;
  };

  useEffect(() => {
    if (previewData) return; 
    
    if (pageData.theme === 'light') {
        document.documentElement.classList.remove('dark');
    } else if (pageData.theme === 'dark') {
        document.documentElement.classList.add('dark');
    }
  }, [pageData.theme, previewData]);

  useEffect(() => {
    if (!pageData.color) return;

    const color = pageData.color;
    const styleId = previewData ? 'preview-dynamic-theme-styles' : 'dynamic-theme-styles';
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) existingStyle.remove();
    
    const p = previewData ? '.custom-theme-scope' : '';
    const l = (sel: string) => p ? `${p} ${sel}` : sel;
    const d = (sel: string) => p ? `${p}.dark ${sel}` : `.dark ${sel}`;

    // Full Palette Generation - adjusted percentages for better visibility of light shades
    const palette = {
        50: adjustColor(color, 94),
        100: adjustColor(color, 88),
        200: adjustColor(color, 75), // Was 65
        300: adjustColor(color, 55), // Was 45
        400: adjustColor(color, 35), // Was 25
        500: color,
        600: adjustColor(color, -10),
        700: adjustColor(color, -20),
        800: adjustColor(color, -35),
        900: adjustColor(color, -50)
    };

    const style = document.createElement('style');
    style.id = styleId;
    
    let css = ``;
    
    // RGB for opacity calculations
    const hexToRgb = (hex: string) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `${r}, ${g}, ${b}`;
    };
    const rgb = hexToRgb(color);

    // Generate rules for all shades (50 - 900)
    Object.entries(palette).forEach(([shade, hex]) => {
        const shadeRgb = hexToRgb(hex);

        // Text
        css += `${l(`.text-brand-${shade}`)} { color: ${hex} !important; }\n`;
        css += `${d(`.dark\\:text-brand-${shade}`)} { color: ${hex} !important; }\n`;
        
        // Background
        css += `${l(`.bg-brand-${shade}`)} { background-color: ${hex} !important; }\n`;
        css += `${d(`.dark\\:bg-brand-${shade}`)} { background-color: ${hex} !important; }\n`;
        
        // Border
        css += `${l(`.border-brand-${shade}`)} { border-color: ${hex} !important; }\n`;
        css += `${d(`.dark\\:border-brand-${shade}`)} { border-color: ${hex} !important; }\n`;
        
        // Gradients (From)
        css += `${l(`.from-brand-${shade}`)} { 
            --tw-gradient-from: ${hex} !important; 
            --tw-gradient-to: ${hex}00 !important;
            --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important; 
        }\n`;
        
        // Gradients (To)
        css += `${l(`.to-brand-${shade}`)} { --tw-gradient-to: ${hex} !important; }\n`;

        // Shadow colors (fix green glow)
        css += `${l(`.shadow-brand-${shade}\\/20`)} { --tw-shadow-color: rgba(${shadeRgb}, 0.2) !important; }\n`;
        css += `${l(`.shadow-brand-${shade}\\/30`)} { --tw-shadow-color: rgba(${shadeRgb}, 0.3) !important; }\n`;
        css += `${l(`.shadow-brand-${shade}\\/50`)} { --tw-shadow-color: rgba(${shadeRgb}, 0.5) !important; }\n`;
        css += `${d(`.dark\\:shadow-brand-${shade}\\/20`)} { --tw-shadow-color: rgba(${shadeRgb}, 0.2) !important; }\n`;
        css += `${d(`.dark\\:shadow-brand-${shade}\\/30`)} { --tw-shadow-color: rgba(${shadeRgb}, 0.3) !important; }\n`;
        css += `${d(`.dark\\:shadow-brand-${shade}\\/50`)} { --tw-shadow-color: rgba(${shadeRgb}, 0.5) !important; }\n`;
    });

    // Special handling for opacity utilities
    css += `
        ${l('.bg-brand-500\\/5')} { background-color: rgba(${rgb}, 0.05) !important; }
        ${l('.bg-brand-500\\/10')} { background-color: rgba(${rgb}, 0.1) !important; }
        ${l('.bg-brand-500\\/20')} { background-color: rgba(${rgb}, 0.2) !important; }
        ${d('.dark\\:bg-brand-500\\/5')} { background-color: rgba(${rgb}, 0.05) !important; }
        ${d('.dark\\:bg-brand-500\\/10')} { background-color: rgba(${rgb}, 0.1) !important; }
        ${d('.dark\\:bg-brand-500\\/20')} { background-color: rgba(${rgb}, 0.2) !important; }
    `;
    
    style.innerHTML = css;
    document.head.appendChild(style);
    
    return () => {
      const s = document.getElementById(styleId);
      if (s) s.remove();
    };
  }, [pageData.color, previewData]);

  const displayHeadline = pageData.text?.headline?.replace('{name}', pageData.name) || `Prepared for ${pageData.name}`;

  return (
    <div className={`custom-theme-scope ${pageData.theme || ''} w-full isolate`}>
        <div className={`
            ${t('bg-gray-50', 'bg-dark-900')} ${t('text-gray-900', 'text-white')} transition-colors duration-300 relative
            ${previewData ? 'min-h-full block' : 'min-h-screen flex flex-col overflow-x-hidden'} 
        `}>
        
        <Header 
            bookingLink={pageData.bookingLink} 
            ctaLabel={pageData.text?.ctaButton} 
            isSharedPage={true}
            position={previewData ? 'absolute' : 'fixed'}
            hideThemeToggle={true}
            companyName={pageData.senderName} 
            forcedTheme={pageData.theme}
        />
        
        <main className={`px-4 md:px-6 relative z-10 flex flex-col items-center ${previewData ? 'pt-24 pb-12' : 'flex-grow pt-28 pb-16 md:pt-32 md:pb-24'}`}>
            <div className="max-w-6xl w-full mx-auto">
            
            <div className="mb-8 md:mb-12 text-center animate-fade-in">
                <div className={`inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full ${t('bg-brand-50', 'bg-brand-500/5')} border ${t('border-brand-200', 'border-brand-500/20')} ${t('text-brand-700', 'text-brand-400')} text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-sm`}>
                  <Video className="w-3 h-3 text-brand-500" />
                  {pageData.text?.badgeText}
                </div>
                
                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold ${t('text-gray-900', 'text-white')} mb-4 md:mb-6 tracking-tight leading-tight`}>
                    {displayHeadline.includes(pageData.name) ? (
                        <>
                            {displayHeadline.split(pageData.name)[0]}
                            {/* Adjusted gradient for visibility: goes to 800 (deep) in light mode, and 100 (bright) in dark mode */}
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${t('from-brand-500 to-brand-800', 'from-brand-400 to-brand-100')}`}>{pageData.name}</span>
                            {displayHeadline.split(pageData.name)[1]}
                        </>
                    ) : (
                        displayHeadline
                    )}
                </h1>
                
                <p className={`text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-light px-2 ${t('text-gray-600', 'text-gray-400')}`}>
                    {pageData.text?.description}
                </p>
            </div>

            <div className="flex flex-col gap-12">
                {/* Video Section */}
                <div className={`w-full max-w-5xl mx-auto group relative rounded-2xl overflow-hidden border-2 ${t('border-gray-200', 'border-dark-700')} shadow-xl md:shadow-2xl bg-black animate-slide-up`}>
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-brand-300 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-black rounded-xl overflow-hidden" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                        {renderVideoEmbed()}
                    </div>
                </div>
                
                {/* Information & Booking Section */}
                <div className={`grid grid-cols-1 ${pageData.embedBooking ? 'lg:grid-cols-1' : 'lg:grid-cols-12'} gap-8 animate-slide-up w-full max-w-5xl mx-auto`} style={{ animationDelay: '0.2s' }}>
                    
                    {/* Takeaways List */}
                    <div className={`${pageData.embedBooking ? 'w-full' : 'lg:col-span-7'} p-6 md:p-8 ${t('bg-white', 'bg-dark-800/50')} backdrop-blur-sm rounded-2xl border ${t('border-gray-200', 'border-dark-700')} shadow-sm`}>
                        <h3 className={`font-display font-bold text-xl mb-6 ${t('text-gray-900', 'text-white')} flex items-center gap-2`}>
                            <ListChecks className="w-5 h-5 text-brand-500" /> {pageData.text?.highlightsTitle}
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {pageData.text?.highlights?.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 group">
                                    <div className={`mt-0.5 rounded-full ${t('bg-brand-50', 'bg-brand-500/10')} p-1`}>
                                        <CheckCircle2 className={`w-4 h-4 ${t('text-brand-600', 'text-brand-400')} shrink-0`} />
                                    </div>
                                    <span className={`text-sm md:text-base leading-relaxed ${t('text-gray-700', 'text-gray-300')} transition-colors`}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Booking Area */}
                    {pageData.bookingLink && (
                        pageData.embedBooking ? (
                            <div className="w-full space-y-8 mt-4">
                                <div className="text-center max-w-2xl mx-auto">
                                    <h2 className={`text-3xl font-display font-bold mb-3 ${t('text-gray-900', 'text-white')}`}>{pageData.text?.ctaTitle}</h2>
                                    <p className={`text-sm ${t('text-gray-600', 'text-gray-400')}`}>{pageData.text?.ctaDescription}</p>
                                </div>
                                <BookingEmbed url={pageData.bookingLink} height="700px" />
                            </div>
                        ) : (
                            <div className={`lg:col-span-5 p-6 md:p-8 ${t('bg-gray-900', 'bg-gradient-to-br from-dark-800 to-dark-900')} rounded-2xl border ${t('border-gray-800', 'border-dark-700')} shadow-lg flex flex-col justify-center items-start relative overflow-hidden group`}>
                                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-500/20 transition-colors duration-500"></div>
                                <h3 className="font-display font-bold text-xl md:text-2xl mb-3 text-white relative z-10">
                                    {pageData.text?.ctaTitle}
                                </h3>
                                <p className="text-gray-400 text-sm mb-8 relative z-10 leading-relaxed">
                                    {pageData.text?.ctaDescription}
                                </p>
                                <a 
                                    href={pageData.bookingLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative z-10 w-full py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-all shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-brand-500/30 flex items-center justify-center gap-2 group/btn border border-transparent hover:border-brand-400/50"
                                >
                                    {pageData.text?.ctaButton} <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        )
                    )}
                </div>
            </div>

            </div>
        </main>

        {!previewData && <Footer />}
        </div>
    </div>
  );
}