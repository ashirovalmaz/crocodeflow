
import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const BottlenecksOneSlide: React.FC = () => (
  <div className="space-y-12 animate-fade-in">
    <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-xl">
        <p className="text-lg text-red-800 dark:text-red-200 font-medium">
             Current infrastructure limitations are creating a bottleneck that prevents scaling to $100k+/mo.
        </p>
    </div>

    <div className="space-y-8">
        <div className="group">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" /> 1. The Response Time Gap
            </h3>
            <div className="pl-7 border-l-2 border-gray-200 dark:border-dark-700 ml-2">
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    Lead attention has a half-life of roughly 5 minutes. If you aren't responding instantly, you are burning your marketing budget. Manual setters can only work so fast.
                </p>
                <p className="text-gray-900 dark:text-white font-medium text-sm">
                    Current Bottleneck: Leads are waiting hours or days for a response, killing conversion rates before the conversation even starts.
                </p>
            </div>
        </div>

        <div className="group">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" /> 2. Inconsistent Setter Output
            </h3>
            <div className="pl-7 border-l-2 border-gray-200 dark:border-dark-700 ml-2">
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
                    Humans get tired, they have 'off' days, and they miss details. This leads to missed follow-ups and lost revenue.
                </p>
                <p className="text-gray-900 dark:text-white font-medium text-sm">
                    Solution Needed: A system that maintains 100% performance 24/7/365.
                </p>
            </div>
        </div>
    </div>
  </div>
);
