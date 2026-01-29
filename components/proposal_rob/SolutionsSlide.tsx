import React from 'react';
import { MessageSquare, Layout, MousePointer2, BarChart3, CheckCircle2 } from 'lucide-react';

export const SolutionsSlide: React.FC = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="bg-brand-50 border border-brand-100 p-8 rounded-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 bg-brand-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-widest shadow-lg">
        Phase 1
      </div>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-brand-500 flex items-center justify-center text-white shadow-brand-500/20 shadow-lg">
          <MessageSquare className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 leading-tight">AI DM funnel + Personalized pages</h3>
          <p className="text-brand-600 font-medium text-sm">Keyword-triggered conversion engine</p>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl">
        We start with a controlled, measurable system built around keyword-triggered conversations using <strong className="text-gray-900">ManyChat</strong>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
            How it works
          </h4>
          <ul className="space-y-4">
            {[
              { icon: MessageSquare, text: "Prospect comments a trigger word under a post" },
              { icon: MousePointer2, text: "The DM conversation opens automatically" },
              { icon: Layout, text: "Structured questions capture goals and intent" },
              { icon: Rocket, text: "A personalized private page is generated" },
              { icon: Calendar, text: "From that page, the prospect can book a call" },
              { icon: Bell, text: "If they don’t, contextual follow-ups are sent" }
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 group">
                <div className="w-5 h-5 rounded bg-white border border-gray-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  <span className="text-[10px] font-bold">{i + 1}</span>
                </div>
                <span className="text-sm text-gray-700 font-medium">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white">
          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-4 flex items-center gap-2">
            What this achieves
          </h4>
          <ul className="space-y-4">
            {[
              "Higher DM-to-call conversion",
              "Less manual back-and-forth",
              "Fewer dead-end conversations",
              "Clear metrics at every step"
            ].map((benefit, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span className="text-sm text-gray-800 font-bold">{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t border-brand-100 flex items-center gap-3">
             <BarChart3 className="w-6 h-6 text-brand-500 animate-pulse" />
             <p className="text-[11px] font-bold text-brand-800 uppercase tracking-widest">Growth Engine Active</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

import { Rocket, Calendar, Bell } from 'lucide-react';