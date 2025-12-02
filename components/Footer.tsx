import React from 'react';
import { Waypoints } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-dark-800 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="max-w-md text-center md:text-left">
             <div className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-600">Made with</div>
             <a href="/" className="flex items-center justify-center md:justify-start gap-2 mb-4 group w-fit mx-auto md:mx-0">
                <Waypoints className="w-6 h-6 text-brand-500 fill-brand-500/20 group-hover:rotate-90 transition-transform duration-500" />
                <span className="text-xl font-display font-bold text-gray-900 dark:text-white">
                    Crocode<span className="text-brand-500">Flow</span>
                </span>
            </a>
            <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed">
                We automate the boring stuff so you can focus on the money stuff. 
                Based on the internet. Operating globally 24/7.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-dark-800 pt-8 flex justify-center md:justify-start">
            <p className="text-xs text-gray-400 dark:text-dark-600">© 2024 CrocodeFlow AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};