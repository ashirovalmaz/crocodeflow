import React from 'react';
import { CAL_LINK } from '../constants';
import { BookingEmbed } from './BookingEmbed';
import { Sparkles, ShieldCheck, Clock } from 'lucide-react';

export const BookingSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Text & Benefits */}
        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3" /> Step 1: The Audit
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Ready to See Your <br />
              <span className="text-brand-500">Revenue Engine?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Book a 30-minute high-level strategy call. We won't just pitch you — we'll live-map one automation that will save you at least 5 hours next week.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: ShieldCheck, text: "Zero-pressure technical audit" },
              { icon: Clock, text: "Immediate actionable feedback" },
              { icon: Sparkles, text: "Custom ROI roadmap delivered same day" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 flex items-center justify-center text-brand-500 shadow-sm">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Embedded Calendar */}
        <div className="lg:col-span-7 bg-white dark:bg-dark-800 p-2 rounded-2xl border border-gray-200 dark:border-dark-700 shadow-2xl relative">
            <div className="absolute -inset-4 bg-brand-500/5 rounded-[2.5rem] -z-10 blur-2xl"></div>
            <BookingEmbed url={CAL_LINK} height="700px" />
        </div>

      </div>
    </div>
  );
};