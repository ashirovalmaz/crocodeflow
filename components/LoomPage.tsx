import React, { useEffect, useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CAL_LINK } from '../constants';
import { CheckCircle2, ArrowRight, PlayCircle, Video, ListChecks } from 'lucide-react';

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
  ctaDescription: "Let's discuss the implementation plan and get your automation systems running next week.",
  ctaButton: "Book Strategy Call",
  badgeText: "Private Video Brief",
  highlightsTitle: "Key Takeaways"
};

// Robust color adjustment (Tint/Shade)
const adjustColor = (hex: string, percent: number) => {
    hex = hex.replace(/^\s*#|\s*$/g, '');
    if (hex.length === 3) hex = hex.replace(/(.)/g, '$1$1');
    
    let r = parseInt(hex.substr(0, 2), 16);
    let g = parseInt(hex.substr(2, 2), 16);
    let b = parseInt(hex.substr(4, 2), 16);

    if (percent > 0) {
        // Lighten (Mix with White)
        r = Math.round(r + (255 - r) * (percent / 100));
        g = Math.round(g + (255 - g) * (percent / 100));
        b = Math.round(b + (255 - b) * (percent / 100));
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
    color: string;
    bookingLink: string;
    senderName?: string;
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
    // Scroll to top on load only if not in preview mode
    if (!previewData) {
      window.scrollTo(0, 0);
    }
  }, [previewData]);

  // Determine Data Source
  const pageData = useMemo(() => {
    // 1. Priority: Preview Data (Real-time generation)
    if (previewData) {
      return {
          ...previewData,
          theme: themeMode,
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

    // 2. Secondary: URL Params
    const isJustinDemo = location.pathname.includes('justinhowells');
    
    // Justin Demo Defaults
    if (isJustinDemo) {
      return {
        name: "Justin Howells",
        senderName: "",
        videoId: "d803199dda4449eeaae27cc46d019fae",
        color: null,
        bookingLink: CAL_LINK,
        theme: 'dark',
        text: DEFAULTS
      };
    }

    // Dynamic Data from URL Query Params
    const highlightsParam = searchParams.get('list');
    
    return {
      name: searchParams.get('name') || "Valued Partner",
      senderName: searchParams.get('from') || "", 
      videoId: searchParams.get('id') || "d803199dda4449eeaae27cc46d019fae", 
      color: searchParams.get('color'),
      bookingLink: searchParams.get('booking') || CAL_LINK,
      theme: searchParams.get('theme'), // Extract theme
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

  // Handle Theme Application (only for live page)
  useEffect(() => {
    if (previewData) return; // Do not manipulate global document in preview
    
    if (pageData.theme === 'light') {
        document.documentElement.classList.remove('dark');
    } else if (pageData.theme === 'dark') {
        document.documentElement.classList.add('dark');
    }
    // If undefined, respect user preference/system default
  }, [pageData.theme, previewData]);

  // Inject Dynamic Color Styles if provided
  useEffect(() => {
    if (!pageData.color) return;

    const color = pageData.color;
    
    // Generate Palette Variations
    const c50  = adjustColor(color, 95);
    const c200 = adjustColor(color, 50);
    const c300 = adjustColor(color, 30);
    const c400 = adjustColor(color, 15);
    const c500 = color;
    const c600 = adjustColor(color, -10);
    const c700 = adjustColor(color, -20);
    
    const styleId = previewData ? 'preview-dynamic-theme-styles' : 'dynamic-theme-styles';
    // Remove existing if any (cleanup)
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) existingStyle.remove();
    
    const scope = previewData ? '.custom-theme-scope ' : '';

    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
      /* --- Text Colors --- */
      ${scope}.text-brand-500 { color: ${c500} !important; }
      ${scope}.text-brand-600 { color: ${c600} !important; }
      ${scope}.text-brand-700 { color: ${c700} !important; }
      ${scope}.text-brand-400 { color: ${c400} !important; }

      /* --- Background Colors --- */
      ${scope}.bg-brand-500 { background-color: ${c500} !important; }
      ${scope}.bg-brand-600 { background-color: ${c600} !important; }
      ${scope}.bg-brand-400 { background-color: ${c400} !important; }
      ${scope}.bg-brand-50 { background-color: ${c50} !important; }
      
      /* --- Background Opacities (Approximation) --- */
      ${scope}.bg-brand-500\\/5  { background-color: ${c500}0d !important; } 
      ${scope}.bg-brand-500\\/10 { background-color: ${c500}1a !important; } 
      ${scope}.bg-brand-500\\/20 { background-color: ${c500}33 !important; }
      ${scope}.bg-brand-500\\/30 { background-color: ${c500}4d !important; }
      
      /* --- Borders --- */
      ${scope}.border-brand-200 { border-color: ${c200} !important; }
      ${scope}.border-brand-500 { border-color: ${c500} !important; }
      ${scope}.border-brand-500\\/20 { border-color: ${c500}33 !important; }
      ${scope}.border-brand-500\\/30 { border-color: ${c500}4d !important; }
      ${scope}.border-brand-500\\/50 { border-color: ${c500}80 !important; }
      ${scope}.border-brand-400\\/50 { border-color: ${c400}80 !important; }
      
      /* --- Gradients (Setting Variables) --- */
      ${scope}.from-brand-600 { --tw-gradient-from: ${c600} !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important; }
      ${scope}.from-brand-500 { --tw-gradient-from: ${c500} !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important; }
      ${scope}.to-brand-400 { --tw-gradient-to: ${c400} !important; }
      ${scope}.to-brand-300 { --tw-gradient-to: ${c300} !important; }
      ${scope}.to-brand-200 { --tw-gradient-to: ${c200} !important; }
      
      /* --- Shadows --- */
      ${scope}.shadow-brand-500\\/25 { --tw-shadow-color: ${c500}40 !important; }
      ${scope}.shadow-brand-500\\/30 { --tw-shadow-color: ${c500}4d !important; }
      ${scope}.shadow-brand-500\\/50 { --tw-shadow-color: ${c500}80 !important; }
      
      /* --- Fill --- */
      ${scope}.fill-brand-500\\/20 { fill: ${c500}33 !important; }
      
      /* --- Hover States --- */
      ${scope}.hover\\:bg-brand-500:hover { background-color: ${c500} !important; }
      ${scope}.hover\\:bg-brand-400:hover { background-color: ${c400} !important; }
      ${scope}.hover\\:border-brand-500:hover { border-color: ${c500} !important; }
      ${scope}.hover\\:border-brand-400\\/50:hover { border-color: ${c400}80 !important; }
      
      /* --- Shadow Hover --- */
      ${scope}.hover\\:shadow-brand-500\\/50:hover { --tw-shadow-color: ${c500}80 !important; }
      
      /* --- DARK MODE SPECIFIC --- */
      
      ${scope}.dark .dark\\:text-brand-200 { color: ${c200} !important; }
      ${scope}.dark .dark\\:text-brand-400 { color: ${c400} !important; }
      ${scope}.dark .dark\\:text-brand-500 { color: ${c500} !important; }
      ${scope}.dark .dark\\:text-brand-600 { color: ${c600} !important; }

      ${scope}.dark .dark\\:bg-brand-500 { background-color: ${c500} !important; }
      ${scope}.dark .dark\\:bg-brand-500\\/5 { background-color: ${c500}0d !important; }
      ${scope}.dark .dark\\:bg-brand-500\\/10 { background-color: ${c500}1a !important; }
      ${scope}.dark .dark\\:bg-brand-900\\/10 { background-color: ${c500}1a !important; } /* Map 900/10 to 500/10 for simplicity or darken c500 */
      ${scope}.dark .dark\\:bg-brand-900\\/20 { background-color: ${c500}33 !important; }
      
      ${scope}.dark .dark\\:border-brand-500 { border-color: ${c500} !important; }
      ${scope}.dark .dark\\:border-brand-500\\/20 { border-color: ${c500}33 !important; }
      ${scope}.dark .dark\\:border-brand-500\\/30 { border-color: ${c500}4d !important; }
      
      /* Dark Gradients */
      ${scope}.dark .dark\\:from-brand-500 { --tw-gradient-from: ${c500} !important; }
      ${scope}.dark .dark\\:from-brand-400 { --tw-gradient-from: ${c400} !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important; }
      ${scope}.dark .dark\\:to-brand-200 { --tw-gradient-to: ${c200} !important; }
    `;
    
    document.head.appendChild(style);

    return () => {
      const s = document.getElementById(styleId);
      if (s) s.remove();
    };
  }, [pageData.color, previewData]);

  // Handle Headline Replacement
  const displayHeadline = pageData.text?.headline?.replace('{name}', pageData.name) || `Prepared for ${pageData.name}`;

  return (
    <div className={`custom-theme-scope ${themeMode || ''} w-full isolate`}>
        <div className={`
            bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300 flex flex-col relative
            ${previewData ? '' : 'min-h-screen overflow-x-hidden'} 
        `}>
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
             {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(100,100,100,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,100,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60"></div>
            
            {/* Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-[100px] opacity-70"></div>
        </div>

        <Header 
            customBookingLink={pageData.bookingLink} 
            isSharedPage={true}
            position={previewData ? 'absolute' : 'fixed'}
            hideThemeToggle={true}
            companyName={pageData.senderName} // Pass senderName
        />
        
        <main className={`flex-grow px-4 md:px-6 relative z-10 flex flex-col items-center ${previewData ? 'pt-24 pb-12' : 'pt-32 pb-24'}`}>
            <div className="max-w-6xl w-full mx-auto">
            
            {/* Header Section */}
            <div className="mb-12 text-center animate-fade-in">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white dark:bg-brand-500/5 border border-brand-200 dark:border-brand-500/20 text-brand-700 dark:text-brand-400 text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-sm">
                  <Video className="w-3 h-3 text-brand-500" />
                  {pageData.text?.badgeText}
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
                    {/* Render with gradient on the name part if possible, otherwise full text */}
                    {displayHeadline.includes(pageData.name) ? (
                        <>
                            {displayHeadline.split(pageData.name)[0]}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400 dark:from-brand-400 dark:to-brand-200">{pageData.name}</span>
                            {displayHeadline.split(pageData.name)[1]}
                        </>
                    ) : (
                        displayHeadline
                    )}
                </h1>
                
                <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                    {pageData.text?.description}
                </p>
            </div>

            <div className="flex flex-col gap-12">
                {/* Loom Video Container */}
                <div className="w-full max-w-5xl mx-auto group relative rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-dark-700 shadow-2xl bg-black animate-slide-up">
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-brand-300 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                    
                    {/* 16:9 Aspect Ratio Container */}
                    <div className="relative bg-black rounded-xl overflow-hidden" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                        {pageData.videoId ? (
                            <iframe 
                            src={`https://www.loom.com/embed/${pageData.videoId}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`} 
                            frameBorder="0" 
                            allowFullScreen 
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            ></iframe>
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-gray-500 flex-col gap-2">
                                <PlayCircle className="w-12 h-12 opacity-50" />
                                <p className="font-medium">Video Preview</p>
                            </div>
                        )}
                    </div>
                </div>
                
                {/* Highlights & CTA Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-slide-up w-full max-w-5xl mx-auto" style={{ animationDelay: '0.2s' }}>
                    
                    {/* Highlights Card */}
                    <div className="lg:col-span-7 p-8 bg-white dark:bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-dark-700 shadow-sm flex flex-col justify-center">
                        <h3 className="font-display font-bold text-xl mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                            <ListChecks className="w-5 h-5 text-brand-500" /> {pageData.text?.highlightsTitle}
                        </h3>
                        <ul className="space-y-4">
                            {pageData.text?.highlights?.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 group">
                                    <div className="mt-0.5 rounded-full bg-brand-50 dark:bg-brand-500/10 p-1">
                                        <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Card */}
                    <div className="lg:col-span-5 p-8 bg-gray-900 dark:bg-gradient-to-br dark:from-dark-800 dark:to-dark-900 rounded-2xl border border-gray-800 dark:border-dark-700 shadow-lg flex flex-col justify-center items-start relative overflow-hidden group">
                        {/* Ambient Glow */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-500/20 transition-colors duration-500"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

                        <h3 className="font-display font-bold text-2xl mb-3 text-white relative z-10">
                            {pageData.text?.ctaTitle}
                        </h3>
                        <p className="text-gray-400 text-sm mb-8 relative z-10 leading-relaxed">
                             {pageData.text?.ctaDescription}
                        </p>
                        <a 
                            href={pageData.bookingLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-all shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-brand-500/30 flex items-center justify-center gap-2 group/btn border border-transparent hover:border-brand-400/50"
                        >
                            {pageData.text?.ctaButton} <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

            </div>

            </div>
        </main>

        {!previewData && <Footer />}
        </div>
    </div>
  );
}