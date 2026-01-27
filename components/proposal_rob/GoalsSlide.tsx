
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const GoalsSlide: React.FC = () => (
  <div className="space-y-8 animate-fade-in">
    <p className="text-gray-600 dark:text-gray-400">
         Our primary objectives for this implementation are:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
            "Establish a consistent $50k/month revenue floor within 90 days.",
            "Eliminate 'Speed-to-Lead' issues by responding to every inquiry in < 5 seconds.",
            "Increase the Show-Up rate on calls by 30% through personalized pre-call assets.",
            "Automate 90% of the setter's repetitive tasks, allowing them to focus only on high-intent leads.",
            "Reclaim 10-15 hours of your personal time every week.",
            "Build a CRM that actually works and auto-populates with rich lead data.",
            "Deploy a custom content strategy engine to maintain market dominance.",
            "Differentiate from competitors by providing a 'white-glove' automated experience."
        ].map((goal, i) => (
            <div key={i} className="bg-gray-50 dark:bg-dark-800/50 p-6 rounded-xl border border-gray-200 dark:border-dark-700 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span className="text-gray-800 dark:text-gray-200 font-medium text-sm leading-relaxed">{goal}</span>
            </div>
        ))}
    </div>
  </div>
);
