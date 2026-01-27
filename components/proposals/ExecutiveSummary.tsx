
import React from 'react';
import { Target } from 'lucide-react';
import { ProposalData } from '../../data/proposals';

interface ExecutiveSummaryProps {
  data: ProposalData;
}

export const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({ data }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
          Based on our analysis, we strongly believe your business could be an <strong className="text-brand-600 dark:text-brand-500 font-bold">$80–100k/mo business</strong> with a few focused changes—primarily around how you convert existing attention and leads into booked calls.
        </p>
      </div>

      <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 border border-gray-200 dark:border-dark-700 shadow-sm">
        <h3 className="text-lg font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
          <Target className="w-5 h-5 text-brand-500" /> Why we believe this
        </h3>
        <ul className="space-y-6">
          {[
            { title: "High Quality Service", text: "Your clients tend to stay, resign for another term, and see a strong ROI from working with you." },
            { title: "Deep Market Understanding", text: "You know the language they use and you consistently generate a significant volume of warm leads." },
            { title: "Massive Audience Reach", text: "With an audience of ~500K followers on Instagram, the opportunity for scale is already there." },
            { title: "Ethical Approach", text: "You genuinely care about your clients and your team. You’re not trying to “replace humans”, but to give your team leverage." },
            { title: "Founder Bottleneck", text: "Charismatic and intelligent, but currently the bottleneck. When systems take over the front-end, things scale." }
          ].map((item, i) => (
            <li key={i} className="flex gap-4">
              <div className="mt-1 min-w-[24px]">
                <div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-500 font-bold text-xs">{i + 1}</div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
