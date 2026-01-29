import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';

export const ExecutiveSummarySlide: React.FC = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="prose max-w-none">
      <p className="text-xl text-gray-700 leading-relaxed font-light mb-6">
        Based on our conversation and a deeper look at how your business currently operates, we’re
        confident that your next stage of growth isn’t about more demand — it’s about <strong className="text-brand-600 font-bold">leverage</strong>.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
      <h3 className="text-lg font-bold uppercase tracking-wider text-gray-500 mb-6 flex items-center gap-2">
        <Target className="w-5 h-5 text-brand-500" /> You already have:
      </h3>
      <ul className="space-y-4">
        {[
          "A proven service",
          "A steady flow of inbound leads",
          "A strong reputation built over 15 years"
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
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
      
      <p className="bg-brand-50 p-6 rounded-xl border-l-4 border-brand-500 font-medium italic">
        This proposal outlines how we move you from a founder-dependent setup to a system-driven
        business — step by step, without breaking what already works.
      </p>
    </div>
  </div>
);