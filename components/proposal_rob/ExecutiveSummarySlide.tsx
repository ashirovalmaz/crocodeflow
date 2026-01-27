
import React from 'react';
import { Target } from 'lucide-react';

export const ExecutiveSummarySlide: React.FC = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
        Based on our initial audit of your current infrastructure, we strongly believe your business could be a <strong className="text-brand-600 dark:text-brand-500 font-bold">$100k+/mo engine</strong> with specialized AI automation—primarily by removing the manual friction between lead acquisition and booked calls.
      </p>
    </div>

    <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 border border-gray-200 dark:border-dark-700 shadow-sm">
      <h3 className="text-lg font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
        <Target className="w-5 h-5 text-brand-500" /> Strategic Indicators
      </h3>
      <ul className="space-y-6">
        {[
          { title: "High-Value Offer", text: "Your current market positioning is strong, and your results for existing clients prove the model works." },
          { title: "Consistent Lead Flow", text: "You are already generating significant volume, but the manual handling of these leads is creating a growth ceiling." },
          { title: "Conversion Friction", text: "The gap between a 'warm lead' and a 'booked call' is currently dependent on manual follow-up, which is inherently slow and inconsistent." },
          { title: "Scalability Potential", text: "Your delivery is excellent, meaning the only thing holding you back from 2-3x growth is the acquisition systems." },
          { title: "Operational Drag", text: "As the founder, you are likely still too involved in the day-to-day conversion tasks that AI can now handle 100x faster." }
        ].map((item, i) => (
          <li key={i} className="flex gap-4">
            <div className="mt-1 min-w-[24px]">
                <div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-500 font-bold text-xs">
                    {i + 1}
                </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    
    <p className="text-gray-600 dark:text-gray-400 italic">
        The following proposal outlines the roadmap to professionalizing your acquisition engine and reclaiming your time as a founder.
    </p>
  </div>
);
