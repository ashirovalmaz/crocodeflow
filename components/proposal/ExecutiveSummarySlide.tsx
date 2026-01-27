
import React from 'react';
import { Target } from 'lucide-react';

export const ExecutiveSummarySlide: React.FC = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
        With the context from our recent project, we strongly believe your coaching business could be an <strong className="text-brand-600 dark:text-brand-500 font-bold">$80–100k/mo business</strong> with a few focused changes—primarily around how you convert existing attention and leads into booked calls.
      </p>
    </div>

    <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 border border-gray-200 dark:border-dark-700 shadow-sm">
      <h3 className="text-lg font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
        <Target className="w-5 h-5 text-brand-500" /> Why we believe this
      </h3>
      <ul className="space-y-6">
        {[
          { title: "High Quality Service", text: "Your clients tend to stay, resign for another term, and see a strong ROI from working with you." },
          { title: "Deep Market Understanding", text: "You know the language they use, the offers that resonate, and you consistently generate 100–150 warm leads per week when you push." },
          { title: "Massive Audience Reach", text: "You and your fiancée have a combined audience of ~500K followers on Instagram, plus strong story views. The opportunity is already there; it’s primarily a conversion problem." },
          { title: "Ethical Approach", text: "You genuinely care about your clients and your team. You’re not trying to “replace humans with robots”, but to give your team leverage and make better use of the volume you’re already creating." },
          { title: "Founder Bottleneck", text: "Like many strong founders, you’re charismatic, intelligent, and—unfortunately—the bottleneck. When you personally jump into the DMs, calls book and close; when you don’t, things stall." }
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
        With that out of the way, let us get a little more specific. We’ll start by outlining what I believe your goals are; then the key problems that are blocking those goals; then solutions to each of those problems; and finally how we believe we could implement them together.
    </p>
  </div>
);
