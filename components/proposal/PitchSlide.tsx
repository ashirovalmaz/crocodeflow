
import React from 'react';

export const PitchSlide: React.FC = () => (
  <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl border border-gray-200 dark:border-dark-700 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-brand-500"></div>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-display">
              We want to become your AI Systems & Automation Partners.
          </h3>
          
          <div className="prose dark:prose-invert text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
              <p>
                  We’ve gotten a clear understanding of your business, your goals, and the bottlenecks that are slowing your growth — and we genuinely want to see you scale far beyond your current level. 
                  In our view, <span className="text-brand-600 dark:text-brand-500 font-bold">$80–100k/mo</span> is on the lower end of what’s possible for you with the right systems in place.
              </p>
              <p>
                  To that end, we want to become the team responsible for building, maintaining, and scaling the internal engines that drive your booked calls, show-up rates, reactivations, client experience, and long-term retention.
              </p>
              <p>
                  Our goal is simple: remove every operational bottleneck limiting your growth, and engineer a predictable machine behind your coaching brand.
              </p>
          </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
           <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">The Vision</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  If you choose to move forward, we’re confident we can solve the conversion issues you’re facing today and partner with you to scale this into a semi-autonomous acquisition and retention system capable of reliably supporting $1M+/year.
              </p>
           </div>
           <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">The Partnership</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  You’d gain a dedicated partner team whose technical depth, systems thinking, and execution ability complement your expertise, brand, and market demand.
              </p>
           </div>
      </div>
  </div>
);
