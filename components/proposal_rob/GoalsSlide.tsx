import React from 'react';
import { CheckCircle2, TrendingUp } from 'lucide-react';

export const GoalsSlide: React.FC = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="flex items-center gap-3 mb-2">
        <TrendingUp className="w-5 h-5 text-brand-500" />
        <p className="text-gray-700 font-medium">From our call, here’s what we believe you want from the business:</p>
    </div>

    <div className="grid grid-cols-1 gap-4">
        {[
            "Spend far less time in DMs and manual sales conversations",
            "Respond to leads instantly without being tied to your phone",
            "Increase conversion from the attention you already generate",
            "Scale without chaos, burnout, or loss of control",
            "Build systems that support growth long-term — not short-term hacks"
        ].map((goal, i) => (
            <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4 hover:border-brand-300 transition-colors group">
                <div className="mt-0.5 rounded-full bg-brand-50 p-1 group-hover:bg-brand-500 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 group-hover:text-white transition-colors shrink-0" />
                </div>
                <span className="text-gray-800 font-semibold text-base">{goal}</span>
            </div>
        ))}
    </div>

    <div className="pt-8 border-t border-gray-100 mt-4">
        <p className="text-center text-gray-500 italic text-sm">
            If any of this feels off, we’re happy to adjust. <br/> This is simply what we heard clearly.
        </p>
    </div>
  </div>
);