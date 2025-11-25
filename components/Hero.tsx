import React from 'react';
import { ArrowRight, DollarSign, ShieldAlert } from 'lucide-react';
import { CAL_LINK } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-dark-900 perspective-1000">
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-900/20 rounded-full blur-[100px] animate-float"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        <div className="animate-slide-up max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-950 border border-brand-500/40 text-brand-400 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:bg-brand-900/50 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            Stop Burning Cash
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tighter">
            We Automate Revenue. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600 animate-pulse-slow">Not Paperwork.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            If it doesn't add a zero to your bank account or cut your work week in half, <span className="text-white font-semibold">we don't build it.</span> 
            We build aggressive AI systems for businesses that want to dominate.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a 
              href={CAL_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group px-8 py-5 bg-brand-600 hover:bg-brand-500 text-white text-lg font-bold rounded-xl flex items-center gap-2 transition-all shadow-[0_0_40px_rgba(34,197,94,0.3)] hover:scale-105 hover:shadow-[0_0_60px_rgba(34,197,94,0.5)] border border-transparent hover:border-brand-300"
            >
              Book Your 30min Audit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center gap-8 justify-center text-sm text-gray-500">
            <div className="flex items-center gap-2 bg-dark-800/50 px-4 py-2 rounded-full border border-dark-700/50">
              <DollarSign className="w-5 h-5 text-brand-500" />
              <span>Paid for itself in 30 days (Avg)</span>
            </div>
            <div className="flex items-center gap-2 bg-dark-800/50 px-4 py-2 rounded-full border border-dark-700/50">
              <ShieldAlert className="w-5 h-5 text-brand-500" />
              <span>We don't take projects we can't scale</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};