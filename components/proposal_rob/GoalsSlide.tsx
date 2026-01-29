
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const GoalsSlide: React.FC = () => (
  <div className="space-y-8 animate-fade-in">
    <p className="text-gray-700 leading-relaxed text-lg">
         From our call, here’s what we believe you want from the business:
    </p>
    <div className="space-y-4">
        {[
            "Spend far less time in DMs and manual sales conversations",
            "Respond to leads instantly without being tied to your phone",
            "Increase conversion from the attention you already generate",
            "Scale without chaos, burnout, or loss of control",
            "Build systems that support growth long-term — not short-term hacks"
        ].map((goal, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex items-start gap-3 transition-all hover:border-brand-500">
                <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span className="text-gray-800 font-medium text-base leading-relaxed">{goal}</span>
            </div>
        ))}
    </div>
    <p className="text-center text-gray-500 italic text-sm pt-4">
        If any of this feels off, we’re happy to adjust. This is simply what we heard clearly.
    </p>
  </div>
);
