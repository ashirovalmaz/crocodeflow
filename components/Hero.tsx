import React, { useMemo } from 'react';
import { ArrowRight, DollarSign, ShieldAlert } from 'lucide-react';
import { CAL_LINK } from '../constants';

export const Hero: React.FC = () => {
  // Memoize particles to prevent re-calculation on re-renders
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 2}px`, // 2px to 6px
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 10 + 10}s`, // 10s to 20s
      opacity: Math.random() * 0.5 + 0.1,
    }));
  }, []);

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-gray-50 dark:bg-dark-900 perspective-1000 transition-colors duration-300">
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Grid lines - slightly darker in light mode for visibility */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(22,163,74,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(22,163,74,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-900/10 dark:bg-brand-900/20 rounded-full blur-[100px] animate-float"></div>

        {/* Dynamic Particles */}
        <div className="absolute inset-0">
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-brand-500/30 dark:bg-brand-400/30 animate-float"
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                opacity: p.opacity,
                animationDelay: p.delay,
                animationDuration: p.duration,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        <div className="animate-slide-up max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-brand-950 border border-brand-500/40 text-brand-600 dark:text-brand-400 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:bg-brand-50 dark:hover:bg-brand-900/50 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            Stop Burning Cash
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] md:leading-[0.9] mb-8 tracking-tighter text-gray-900 dark:text-white">
            We Automate Revenue. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700 dark:from-brand-400 dark:to-brand-600 animate-pulse-slow">Not Paperwork.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            If it doesn't add a zero to your bank account or cut your work week in half, <span className="text-gray-900 dark:text-white font-semibold">we don't build it.</span> 
            We build aggressive AI systems for businesses that want to dominate.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto">
            <a 
              href={CAL_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-5 bg-brand-600 hover:bg-brand-500 text-white text-lg font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_40px_rgba(34,197,94,0.3)] hover:scale-105 hover:shadow-[0_0_60px_rgba(34,197,94,0.5)] border border-transparent hover:border-brand-300"
            >
              Book Your 30min Audit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center gap-4 md:gap-8 justify-center text-sm text-gray-500 dark:text-gray-500">
            <div className="flex items-center gap-2 bg-white/50 dark:bg-dark-800/50 px-4 py-2 rounded-full border border-gray-200 dark:border-dark-700/50 shadow-sm dark:shadow-none backdrop-blur-sm">
              <DollarSign className="w-5 h-5 text-brand-600 dark:text-brand-500" />
              <span>Paid for itself in 30 days (Avg)</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 dark:bg-dark-800/50 px-4 py-2 rounded-full border border-gray-200 dark:border-dark-700/50 shadow-sm dark:shadow-none backdrop-blur-sm">
              <ShieldAlert className="w-5 h-5 text-brand-600 dark:text-brand-500" />
              <span>We don't take projects we can't scale</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};