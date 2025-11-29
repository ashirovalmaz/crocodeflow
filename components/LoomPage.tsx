import React, { useEffect, useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CAL_LINK } from '../constants';
import { CheckCircle2, ArrowRight, PlayCircle } from 'lucide-react';

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
  ctaButton: "Book Strategy Call"
};

// Helper to lighten/darken hex color slightly for hover states
const adjustBrightness = (hex: string, percent: number) => {
    // Strip hash
    hex = hex.replace(/^\s*#|\s*$/g, '');
    if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
    }
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    return '#' +
       ((0|(1<<8) + r + (256 - r) * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + g + (256 - g) * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + b + (256 - b) * percent / 100).toString(16)).substr(1);
}

interface LoomPageProps {
  previewData?: {
    name: string;
    videoId: string;
    color: string;
    bookingLink: string;
    text?: {
      headline?: string;
      description?: string;
      highlights?: string[];
      ctaTitle?: string;
      ctaDescription?: string;
      ctaButton?: string;
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
          text: {
              headline: previewData.text?.headline || DEFAULTS.headline,
              description: previewData.text?.description || DEFAULTS.description,
              highlights: previewData.text?.highlights || DEFAULTS.highlights,
              ctaTitle: previewData.text?.ctaTitle || DEFAULTS.ctaTitle,
              ctaDescription: previewData.text?.ctaDescription || DEFAULTS.ctaDescription,
              ctaButton: previewData.text?.ctaButton || DEFAULTS.ctaButton,
          }
      };
    }

    // 2. Secondary: URL Params
    const isJustinDemo = location.pathname.includes('justinhowells');
    
    // Justin Demo Defaults
    if (isJustinDemo) {
      return {
        name: "Justin Howells",
        videoId: "d803199dda4449eeaae27cc46d019fae",
        color: null,
        bookingLink: CAL_LINK,
        text: DEFAULTS
      };
    }

    // Dynamic Data from URL Query Params
    const highlightsParam = searchParams.get('list');
    
    return {
      name: searchParams.get('name') || "Valued Partner",
      videoId: searchParams.get('id') || "d803199dda4449eeaae27cc46d019fae", 
      color: searchParams.get('color'),
      bookingLink: searchParams.get('booking') || CAL_LINK,
      text: {
          headline: searchParams.get('h1') || DEFAULTS.headline,
          description: searchParams.get('desc') || DEFAULTS.description,
          highlights: highlightsParam ? highlightsParam.split('|') : DEFAULTS.highlights,
          ctaTitle: searchParams.get('cta_t') || DEFAULTS.ctaTitle,
          ctaDescription: searchParams.get('cta_d') || DEFAULTS.ctaDescription,
          ctaButton: searchParams.get('cta_b') || DEFAULTS.ctaButton,
      }
    };
  }, [location, searchParams, previewData]);

  // Inject Dynamic Color Styles if provided
  useEffect(() => {
    if (!pageData.color) return;

    const color = pageData.color;
    const darker = adjustBrightness(color, -20); // for hover states or 600
    const lighter = adjustBrightness(color, 20); // for gradients or 400
    
    const styleId = previewData ? 'preview-dynamic-theme-styles' : 'dynamic-theme-styles';
    // Remove existing if any (cleanup)
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) existingStyle.remove();
    
    const scope = previewData ? '.custom-theme-scope ' : '';

    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
      /* --- Base Colors (Light Mode) --- */
      ${scope}.text-brand-500 { color: ${color} !important; }
      ${scope}.text-brand-600 { color: ${darker} !important; }
      ${scope}.text-brand-400 { color: ${lighter} !important; }
      
      ${scope}.bg-brand-500 { background-color: ${color} !important; }
      ${scope}.bg-brand-600 { background-color: ${darker} !important; }
      ${scope}.bg-brand-500\\/10 { background-color: ${color}1a !important; } 
      ${scope}.bg-brand-500\\/20 { background-color: ${color}33 !important; }
      ${scope}.bg-brand-50 { background-color: ${color}0d !important; }
      
      ${scope}.border-brand-500 { border-color: ${color} !important; }
      ${scope}.border-brand-500\\/20 { border-color: ${color}33 !important; }
      ${scope}.border-brand-500\\/50 { border-color: ${color}80 !important; }
      
      /* Gradients */
      ${scope}.from-brand-500 { --tw-gradient-from: ${color} !important; var(--tw-gradient-stops, var(--tw-gradient-from), var(--tw-gradient-to)) !important; }
      ${scope}.to-brand-400 { --tw-gradient-to: ${lighter} !important; var(--tw-gradient-stops, var(--tw-gradient-from), var(--tw-gradient-to)) !important; }
      ${scope}.to-brand-600 { --tw-gradient-to: ${darker} !important; var(--tw-gradient-stops, var(--tw-gradient-from), var(--tw-gradient-to)) !important; }
      
      /* Shadows */
      ${scope}.shadow-brand-500\\/25 { --tw-shadow-color: ${color}40 !important; }
      
      /* --- DARK MODE OVERRIDES --- */
      /* We must target the specific dark classes generated by Tailwind (e.g. .dark:text-brand-400) */
      
      /* Text */
      ${scope}.dark .dark\\:text-brand-400 { color: ${lighter} !important; }
      ${scope}.dark .dark\\:text-brand-500 { color: ${color} !important; }
      ${scope}.dark .dark\\:text-brand-600 { color: ${darker} !important; }

      /* Backgrounds */
      ${scope}.dark .dark\\:bg-brand-500 { background-color: ${color} !important; }
      ${scope}.dark .dark\\:bg-brand-900\\/10 { background-color: ${darker}1a !important; }
      ${scope}.dark .dark\\:bg-brand-900\\/20 { background-color: ${darker}33 !important; }
      
      /* Borders */
      ${scope}.dark .dark\\:border-brand-500 { border-color: ${color} !important; }
      ${scope}.dark .dark\\:border-brand-500\\/20 { border-color: ${color}33 !important; }
      ${scope}.dark .dark\\:border-brand-500\\/30 { border-color: ${color}4d !important; }
      
      /* Gradients Dark */
      ${scope}.dark .dark\\:from-brand-500 { --tw-gradient-from: ${color} !important; var(--tw-gradient-stops, var(--tw-gradient-from), var(--tw-gradient-to)) !important; }
      
      /* Other */
      ${scope}.fill-brand-500\\/20 { fill: ${color}33 !important; }
      ${scope}.hover\\:bg-brand-500:hover { background-color: ${color} !important; }
      ${scope}.hover\\:border-brand-500:hover { border-color: ${color} !important; }
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
    <div className={`custom-theme-scope ${themeMode || ''} w-full h-full font-sans antialiased selection:bg-brand-500/30`}>
        <div className={`min-h-screen bg-gray-50 dark:bg-dark-950 text-gray-900 dark:text-gray-100 transition-colors duration-500 flex flex-col relative overflow-hidden ${previewData ? 'h-full min-h-0' : ''}`}>
        
        {/* Background Effects - Enhanced */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Mesh Gradient */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-60 animate-float" style={{ animationDuration: '15s' }}></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-60 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(100,100,100,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,100,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60"></div>
        </div>

        <Header 
            customBookingLink={pageData.bookingLink} 
            isSharedPage={true}
            position={previewData ? 'absolute' : 'fixed'}
            hideThemeToggle={true}
        />
        
        <main className={`flex-grow px-4 md:px-6 relative z-10 flex flex-col items-center ${previewData ? 'pt-24 pb-12' : 'pt-32 pb-24'}`}>
            <div className="max-w-6xl w-full mx-auto">
            
            {/* Header Section - Refined Typography */}
            <div className="mb-14 text-center animate-fade-in">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-8 rounded-full bg-white/50 dark:bg-white/5 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-[11px] font-bold uppercase tracking-[0.2em] backdrop-blur-md shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                  </span>
                  Private Video Brief
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
                    {/* Render with gradient on the name part if possible, otherwise full text */}
                    {displayHeadline.includes(pageData.name) ? (
                        <>
                            {displayHeadline.split(pageData.name)[0]}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-400 decoration-clone">{pageData.name}</span>
                            {displayHeadline.split(pageData.name)[1]}
                        </>
                    ) : (
                        displayHeadline
                    )}
                </h1>
                
                <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                    {pageData.text?.description}
                </p>
            </div>

            <div className="space-y-8">
                {/* Loom Video Container - Premium Frame */}
                <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden border border-gray-200 dark:border-dark-700 shadow-2xl bg-gray-900 animate-slide-up mx-auto max-w-5xl">
                    {/* Glow Effect behind borders */}
                    <div className="absolute -inset-[1px] bg-gradient-to-br from-brand-500/30 via-transparent to-blue-600/30 rounded-3xl blur-sm opacity-100 group-hover:opacity-100 transition duration-500"></div>
                    
                    {/* Dark glass reflection top */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"></div>

                    {/* 16:9 Aspect Ratio Container */}
                    <div className="relative bg-black rounded-2xl md:rounded-[22px] overflow-hidden m-[1px]" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                        {pageData.videoId ? (
                            <iframe 
                            src={`https://www.loom.com/embed/${pageData.videoId}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`} 
                            frameBorder="0" 
                            allowFullScreen 
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            ></iframe>
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-gray-500">
                                <p>Video Preview Will Appear Here</p>
                            </div>
                        )}
                    </div>
                </div>
                
                {/* Highlights & CTA - Refined Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-slide-up max-w-5xl mx-auto" style={{ animationDelay: '0.15s' }}>
                    
                    {/* Highlights Card */}
                    <div className="lg:col-span-7 p-8 md:p-10 bg-white/80 dark:bg-dark-800/40 backdrop-blur-xl rounded-3xl border border-gray-100 dark:border-white/5 shadow-xl shadow-gray-200/50 dark:shadow-none flex flex-col justify-center relative overflow-hidden">
                         {/* Decoration */}
                         <div className="absolute top-0 right-0 p-8 opacity-5">
                            <PlayCircle className="w-32 h-32" />
                         </div>

                        <h3 className="font-display font-bold text-2xl mb-8 text-gray-900 dark:text-white flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400">
                                <PlayCircle className="w-6 h-6" />
                            </div>
                            Key Takeaways
                        </h3>
                        <ul className="space-y-5 relative z-10">
                            {pageData.text?.highlights?.map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-gray-700 dark:text-gray-300 text-base group">
                                    <div className="mt-0.5 min-w-[1.25rem] h-5 rounded-full border border-brand-200 dark:border-brand-500/30 flex items-center justify-center bg-brand-50 dark:bg-brand-500/10 text-brand-500 shadow-sm group-hover:scale-110 transition-transform">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="leading-relaxed font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Card */}
                    <div className="lg:col-span-5 p-8 md:p-10 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-dark-800 dark:to-dark-900 text-white rounded-3xl border border-gray-800 dark:border-dark-700/50 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
                        {/* Ambient Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-500/30 transition-all duration-700"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/20 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2"></div>
                        
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
                                <ArrowRight className="w-6 h-6 text-brand-400 -rotate-45" />
                            </div>
                            <h3 className="font-display font-bold text-2xl mb-3 text-white">
                                {pageData.text?.ctaTitle}
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-8">
                                {pageData.text?.ctaDescription}
                            </p>
                        </div>
                        
                        <a 
                            href={pageData.bookingLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 w-full py-4.5 bg-brand-600 hover:bg-brand-500 text-white font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-brand-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group/btn border border-transparent hover:border-brand-400/50"
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
};