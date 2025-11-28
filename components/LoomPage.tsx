
import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const LoomPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300 flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-24 px-6 flex items-center justify-center">
        <div className="max-w-5xl w-full mx-auto">
          
          <div className="mb-12 text-center">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest">
              Private Video Brief
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Prepared for <span className="text-brand-500">Justin Howells</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Here is the breakdown of the automation strategy we discussed.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Loom Video */}
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
            
            <div className="p-6 bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-center text-gray-900 dark:text-white">Video Highlights</h3>
              <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2"><span className="text-brand-500 font-bold text-xl">•</span> Current bottlenecks analysis</div>
                  <div className="flex items-center gap-2"><span className="text-brand-500 font-bold text-xl">•</span> Proposed AI architecture</div>
                  <div className="flex items-center gap-2"><span className="text-brand-500 font-bold text-xl">•</span> ROI projection & timeline</div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};