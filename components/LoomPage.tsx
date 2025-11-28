import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { CAL_LINK } from '../constants';
import { CheckCircle2, ArrowRight, PlayCircle } from 'lucide-react';

export const LoomPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300 flex flex-col relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(22,163,74,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(22,163,74,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] opacity-50"></div>
      </div>

      <Header />
      
      <main className="flex-grow pt-32 pb-24 px-6 relative z-10 flex flex-col items-center">
        <div className="max-w-5xl w-full mx-auto">
          
          {/* Header Section */}
          <div className="mb-12 text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              Private Video Brief
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Prepared for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-400">Justin Howells</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We analyzed your current workflow. Here is the blueprint to automate it and scale.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Loom Video Container */}
            <div className="group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-dark-700 shadow-2xl bg-black animate-slide-up">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              
              {/* 16:9 Aspect Ratio Container */}
              <div className="relative bg-black rounded-2xl overflow-hidden" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe 
                  src="https://www.loom.com/embed/d803199dda4449eeaae27cc46d019fae?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true" 
                  frameBorder="0" 
                  allowFullScreen 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                ></iframe>
              </div>
            </div>
            
            {/* Highlights & CTA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="p-8 bg-white dark:bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-dark-700 shadow-sm flex flex-col justify-center">
                    <h3 className="font-display font-bold text-xl mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                        <PlayCircle className="w-5 h-5 text-brand-500" /> In this video
                    </h3>
                    <ul className="space-y-4">
                        {[
                            "Current bottlenecks analysis",
                            "Proposed AI architecture",
                            "ROI projection & timeline"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="p-8 bg-gradient-to-br from-brand-900/10 to-brand-900/5 rounded-2xl border border-brand-500/20 flex flex-col justify-center items-start relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-500/20 transition-colors"></div>
                    
                    <h3 className="font-display font-bold text-xl mb-3 text-gray-900 dark:text-white relative z-10">
                        Ready to execute?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 relative z-10">
                        Let's discuss the implementation plan and get your automation systems running next week.
                    </p>
                    <a 
                        href={CAL_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2 group/btn"
                    >
                        Book Strategy Call <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};