import React from 'react';
import { Target, CheckCircle2, Zap } from 'lucide-react';

export const ExecutiveSummarySlide: React.FC = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="prose max-w-none">
      <p className="text-xl text-gray-700 leading-relaxed font-light mb-8">
        Based on our conversation and a deeper look at how your business currently operates, we’re
        confident that your next stage of growth isn’t about more demand — it’s about <strong className="text-brand-600 font-bold">leverage</strong>.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-brand-50 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110"></div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6 flex items-center gap-2">
        <Target className="w-4 h-4 text-brand-500" /> You already have:
      </h3>
      <ul className="space-y-4">
        {[
          "A proven service",
          "A steady flow of inbound leads",
          "A strong reputation built over 15 years"
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-xs shrink-0">
                {i + 1}
            </div>
            <span className="text-gray-700 font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
    
    <div className="space-y-6 text-gray-700 leading-relaxed">
      <p>
        What’s limiting scale right now is <strong className="text-gray-900 font-semibold">how much of the operation still depends on you personally</strong> —
        especially in DMs, qualification, and early sales conversations.
      </p>
      
      <div className="bg-brand-600 p-8 rounded-2xl shadow-lg shadow-brand-500/20 relative overflow-hidden">
        <Zap className="absolute top-1/2 right-4 -translate-y-1/2 w-32 h-32 text-white/10 rotate-12" />
        <p className="text-white font-medium italic relative z-10 leading-relaxed text-lg">
          "This proposal outlines how we move you to a system-driven business capable of supporting $80k–$100k USD/mo — step by step, without breaking what already works."
        </p>
      </div>
    </div>
  </div>
);