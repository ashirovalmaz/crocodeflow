
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const GoalsSlide: React.FC = () => (
  <div className="space-y-8 animate-fade-in">
    <p className="text-gray-600 dark:text-gray-400">
         Here’s what we believe you want (that you have yet to fully achieve) from the coaching business:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
            "Consistent $40–50k/month in the next few months, as a baseline you can rely on.",
            "Scaling to $80–100k/month within 12 months, once the conversion and booking issues are resolved.",
            "A predictable flow of booked calls from your existing audience and ads, so that hitting revenue targets is about math and not hope.",
            "To leverage the 100–150 warm leads/week you can generate (via ads + organic CTAs) instead of watching them slip through the cracks.",
            "More freedom and flexibility: less time personally saving deals in the DMs at 11pm, more time on leadership, content, and rest.",
            "The ability to bring on and fill assistant coaches confidently, because you trust the leadflow and call volume.",
            "To duplicate what works for you onto your fiancée’s side of the business, turning this into a multi-stream coaching machine.",
            "To differentiate from the generic “DM script + GHL reminders” everyone else is running, by offering prospects an actually personalized experience (custom breakdown, custom presentation, etc.), without increasing your personal workload."
        ].map((goal, i) => (
            <div key={i} className="bg-gray-50 dark:bg-dark-800/50 p-6 rounded-xl border border-gray-200 dark:border-dark-700 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span className="text-gray-800 dark:text-gray-200 font-medium text-sm leading-relaxed">{goal}</span>
            </div>
        ))}
    </div>
    <p className="text-center text-gray-500 dark:text-gray-400 italic text-sm">
        If any of these are off, we’re happy to adjust—but this is what we heard between the lines of our call.
    </p>
  </div>
);
