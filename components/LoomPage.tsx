
import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const LoomPage: React.FC = () => {
  useEffect(() => {
    // Cal.com embed script
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal as any; // Explicit cast to any to fix TS7022
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Initialize
    (window as any).Cal("init", "30min", { origin: "https://app.cal.com" });

    // Configuration
    (window as any).Cal.ns["30min"]("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: { 
          "layout": "month_view",
          "theme": "dark" // Forced dark mode to match site
      },
      calLink: "crocodeflow.ai/30min",
    });

    // UI Styles
    (window as any).Cal.ns["30min"]("ui", {
        "styles": {
            "branding": {
                "brandColor": "#22c55e" // CrocodeFlow Green
            }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12 text-center md:text-left">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest">
              Private Video Brief
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Prepared for <span className="text-brand-500">Justin Howells</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
              Here is the breakdown of the automation strategy we discussed. Watch the video below, then pick a time on the right to finalize the roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Loom Video */}
            <div className="w-full space-y-6">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-dark-700 shadow-2xl bg-black">
                {/* 16:9 Aspect Ratio Container */}
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe 
                    src="https://www.loom.com/embed/d803199dda4449eeaae27cc46d019fae" 
                    frameBorder="0" 
                    allowFullScreen 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  ></iframe>
                </div>
              </div>
              
              <div className="p-6 bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700">
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Video Highlights</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex gap-2"><span className="text-brand-500 font-bold">•</span> Current bottlenecks analysis</li>
                    <li className="flex gap-2"><span className="text-brand-500 font-bold">•</span> Proposed AI architecture</li>
                    <li className="flex gap-2"><span className="text-brand-500 font-bold">•</span> ROI projection & timeline</li>
                </ul>
              </div>
            </div>

            {/* Right Column: Calendar */}
            <div className="w-full h-full min-h-[600px] bg-white dark:bg-dark-800/50 rounded-2xl border border-gray-200 dark:border-dark-700 shadow-xl overflow-hidden p-2 md:p-4">
               <div style={{ width: '100%', height: '100%', overflow: 'scroll' }} id="my-cal-inline-30min"></div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
