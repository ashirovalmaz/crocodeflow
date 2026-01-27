
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SYSTEMS } from '../../data/proposals';

export const SolutionsSlide: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <p className="text-gray-600 dark:text-gray-400 mb-4">
        Our strategy focuses on implementing high-leverage AI systems that work in tandem with your human team.
    </p>
    
    <div className="flex flex-col gap-4">
        <div className="bg-white dark:bg-dark-800 rounded-xl border-2 border-brand-500 shadow-xl p-6 relative flex flex-col">
            <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">CORE SYSTEM</div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">System 1: AI Lead Capture & Custom Pre-Call Plans</h3>
            <div className="text-sm text-brand-600 dark:text-brand-400 font-bold mb-4">Deployment: 21 Days</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
                This system intercepts every lead, qualifies them instantly, and generates a personalized blueprint for them BEFORE the call happens.
            </p>
        </div>

        <div className="space-y-3">
            {SYSTEMS.slice(1).map((sys) => (
                 <details key={sys.id} className="group bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 overflow-hidden">
                    <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-dark-700/50 transition-colors">
                        <div className="flex flex-col">
                            <h3 className="font-bold text-sm text-gray-900 dark:text-white">{sys.title}</h3>
                        </div>
                        <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-4 pb-4 pt-0 border-t border-gray-100 dark:border-dark-700">
                         <p className="mt-4 text-xs text-gray-600 dark:text-gray-400">{sys.desc}</p>
                    </div>
                </details>
            ))}
        </div>
    </div>
  </div>
);
