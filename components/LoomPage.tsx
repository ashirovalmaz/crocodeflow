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

type VideoPlatform = 'loom' | 'youtube' | 'vimeo' | 'drive' | 'vidyard' | 'wistia' | 'unknown';

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
    videoType?: VideoPlatform;
    color: string;
    bookingLink: string;
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
    if (isJustinDemo) {
      return {
        name: "Justin Howells",
        senderName: "",
        videoId: "d803199dda4449eeaae27cc46d019fae",
        videoType: 'loom' as VideoPlatform,
        color: null,
        bookingLink: CAL_LINK,
        theme: 'dark' as const,
        text: DEFAULTS
      };
    }

    const highlightsParam = searchParams.get('list');
    return {
      name: searchParams.get('name') || "Valued Partner",
      senderName: searchParams.get('from') || "", 
      videoId: searchParams.get('id') || "d803199dda4449eeaae27cc46d019fae", 
      videoType: (searchParams.get('vtype') as VideoPlatform) || 'loom',
      color: searchParams.get('color'),
      bookingLink: searchParams.get('booking') ?? "", 
      theme: (searchParams.get('theme') as 'light' | 'dark') || undefined,
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
    const c50  = adjustColor(color, 95);
    const c200 = adjustColor(color, 50);
    const c300 = adjustColor(color, 30);
    const c400 = adjustColor(color, 15);
    const c500 = color;
    const c600 = adjustColor(color, -10);
    const c700 = adjustColor(color, -20);
    
    const styleId = previewData ? 'preview-dynamic-theme-styles' : 'dynamic-theme-styles';
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) existingStyle.remove();
    
    const p = previewData ? '.custom-theme-scope' : '';
    const l = (sel: string) => p ? `${p} ${sel}` : sel;
    const d = (sel: string) => p ? `${p}.dark ${sel}` : `.dark ${sel}`;

    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
      ${l('.text-brand-500')} { color: ${c500} !important; }
      ${l('.text-brand-600')} { color: ${c600} !important; }
      ${l('.text-brand-700')} { color: ${c700} !important; }
      ${l('.text-brand-400')} { color: ${c400} !important; }
      ${l('.bg-brand-500')} { background-color: ${c500} !important; }
      ${l('.bg-brand-600')} { background-color: ${c600} !important; }
      ${l('.bg-brand-400')} { background-color: ${c400} !important; }
      ${l('.bg-brand-50')} { background-color: ${c50} !important; }
      ${l('.bg-brand-500\\/5')}  { background-color: ${c500}0d !important; } 
      ${l('.bg-brand-500\\/10')} { background-color: ${c500}1a !important; } 
      ${l('.bg-brand-500\\/20')} { background-color: ${c500}33 !important; }
      ${l('.bg-brand-500\\/30')} { background-color: ${c500}4d !important; }
      ${l('.border-brand-200')} { border-color: ${c200} !important; }
      ${l('.border-brand-500')} { border-color: ${c500} !important; }
      ${l('.border-brand-500\\/20')} { border-color: ${c500}33 !important; }
      ${l('.border-brand-500\\/30')} { border-color: ${c500}4d !important; }
      ${l('.border-brand-500\\/50')} { border-color: ${c500}80 !important; }
      ${l('.border-brand-400\\/50')} { border-color: ${c400}80 !important; }
      ${l('.from-brand-600')} { --tw-gradient-from: ${c600} !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important; }
      ${l('.from-brand-500')} { --tw-gradient-from: ${c500} !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important; }
      ${l('.to-brand-400')} { --tw-gradient-to: ${c400} !important; }
      ${l('.to-brand-300')} { --tw-gradient-to: ${c300} !important; }
      ${l('.to-brand-200')} { --tw-gradient-to: ${c200} !important; }
      ${l('.shadow-brand-500\\/25')} { --tw-shadow-color: ${c500}40 !important; }
      ${l('.shadow-brand-500\\/30')} { --tw-shadow-color: ${c500}4d !important; }
      ${l('.shadow-brand-500\\/50')} { --tw-shadow-color: ${c500}80 !important; }
      ${l('.fill-brand-500\\/20')} { fill: ${c500}33 !important; }
      ${l('.hover\\:bg-brand-500:hover')} { background-color: ${c500} !important; }
      ${l('.hover\\:bg-brand-400:hover')} { background-color: ${c400} !important; }
      ${l('.hover\\:border-brand-500:hover')} { border-color: ${c500} !important; }
      ${l('.hover\\:border-brand-400\\/50:hover')} { border-color: ${c400}80 !important; }
      ${l('.hover\\:shadow-brand-500\\/50:hover')} { --tw-shadow-color: ${c500}80 !important; }
      ${d('.dark\\:text-brand-200')} { color: ${c200} !important; }
      ${d('.dark\\:text-brand-400')} { color: ${c400} !important; }
      ${d('.dark\\:text-brand-500')} { color: ${c500} !important; }
      ${d('.dark\\:text-brand-600')} { color: ${c600} !important; }
      ${d('.dark\\:bg-brand-500')} { background-color: ${c500} !important; }
      ${d('.dark\\:bg-brand-500\\/5')} { background-color: ${c500}0d !important; }
      ${d('.dark\\:bg-brand-500\\/10')} { background-color: ${c500}1a !important; }
      ${d('.dark\\:bg-brand-900\\/10')} { background-color: ${c500}1a !important; } 
      ${d('.dark\\:bg-brand-900\\/20')} { background-color: ${c500}33 !important; }
      ${d('.dark\\:border-brand-500')} { border-color: ${c500} !important; }
      ${d('.dark\\:border-brand-500\\/20')} { border-color: ${c500}33 !important; }
      ${d('.dark\\:border-brand-500\\/30')} { border-color: ${c500}4d !important; }
      ${d('.dark\\:from-brand-500')} { --tw-gradient-from: ${c500} !important; }
      ${d('.dark\\:from-brand-400')} { --tw-gradient-from: ${c400} !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important; }
      ${d('.dark\\:to-brand-200')} { --tw-gradient-to: ${c200} !important; }
    `;
    
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
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className={`absolute inset-0 bg-[linear-gradient(rgba(100,100,100,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,100,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60`}></div>
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] ${t('bg-brand-500/5', 'bg-brand-500/10')} rounded-full blur-[100px] opacity-70`}></div>
        </div>

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
                <div className={`inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full ${t('bg-white', 'bg-brand-500/5')} border ${t('border-brand-200', 'border-brand-500/20')} ${t('text-brand-700', 'text-brand-400')} text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-sm`}>
                  <Video className="w-3 h-3 text-brand-500" />
                  {pageData.text?.badgeText}
                </div>
                
                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold ${t('text-gray-900', 'text-white')} mb-4 md:mb-6 tracking-tight leading-tight`}>
                    {displayHeadline.includes(pageData.name) ? (
                        <>
                            {displayHeadline.split(pageData.name)[0]}
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${t('from-brand-600 to-brand-400', 'from-brand-400 to-brand-200')}`}>{pageData.name}</span>
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

            <div className="flex flex-col gap-8 md:gap-12">
                <div className={`w-full max-w-5xl mx-auto group relative rounded-2xl overflow-hidden border-2 ${t('border-gray-200', 'border-dark-700')} shadow-xl md:shadow-2xl bg-black animate-slide-up`}>
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-brand-300 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-black rounded-xl overflow-hidden" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                        {renderVideoEmbed()}
                    </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-slide-up w-full max-w-5xl mx-auto" style={{ animationDelay: '0.2s' }}>
                    
                    <div className={`${pageData.bookingLink ? 'lg:col-span-7' : 'lg:col-span-12'} p-6 md:p-8 ${t('bg-white', 'bg-dark-800/50')} backdrop-blur-sm rounded-2xl border ${t('border-gray-200', 'border-dark-700')} shadow-sm flex flex-col justify-center`}>
                        <h3 className={`font-display font-bold text-xl mb-6 ${t('text-gray-900', 'text-white')} flex items-center gap-2`}>
                            <ListChecks className="w-5 h-5 text-brand-500" /> {pageData.text?.highlightsTitle}
                        </h3>
                        <ul className="space-y-4">
                            {pageData.text?.highlights?.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 group">
                                    <div className={`mt-0.5 rounded-full ${t('bg-brand-50', 'bg-brand-500/10')} p-1`}>
                                        <CheckCircle2 className={`w-4 h-4 ${t('text-brand-600', 'text-brand-400')} shrink-0`} />
                                    </div>
                                    <span className={`text-sm md:text-base leading-relaxed ${t('text-gray-700', 'text-gray-300')} ${t('group-hover:text-gray-900', 'group-hover:text-white')} transition-colors`}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {pageData.bookingLink && (
                        <div className={`lg:col-span-5 p-6 md:p-8 ${t('bg-gray-900', 'bg-gradient-to-br from-dark-800 to-dark-900')} rounded-2xl border ${t('border-gray-800', 'border-dark-700')} shadow-lg flex flex-col justify-center items-start relative overflow-hidden group`}>
                            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-500/20 transition-colors duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

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