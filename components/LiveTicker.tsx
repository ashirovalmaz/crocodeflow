import React from 'react';
import { User, Bot, Zap, Clock, DollarSign, Brain } from 'lucide-react';

export const LiveTicker: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 dark:bg-dark-800 border-y border-gray-200 dark:border-dark-700 py-12 relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-brand-500/5 dark:bg-brand-900/5 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-10">
                 <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2">The Efficiency Gap</h3>
                 <p className="text-gray-600 dark:text-gray-400 text-sm">Honest data. No fake counters. This is why you're losing.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Card 1: Availability */}
                <div className="bg-white dark:bg-dark-900/50 border border-gray-200 dark:border-dark-600 rounded-xl p-6 backdrop-blur-sm shadow-sm dark:shadow-none">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500"><Clock className="w-5 h-5" /></div>
                        <span className="font-bold text-gray-800 dark:text-gray-300">Availability</span>
                    </div>
                    <div className="flex justify-between items-end mb-4 border-b border-gray-100 dark:border-dark-700 pb-4">
                        <div className="text-right flex-1 pr-4 border-r border-gray-200 dark:border-dark-700">
                            <div className="text-xs text-gray-500 mb-1 flex items-center justify-end gap-1">Human <User className="w-3 h-3" /></div>
                            <div className="text-xl font-bold text-gray-700 dark:text-gray-400">40h <span className="text-xs font-normal">/ wk</span></div>
                        </div>
                        <div className="text-left flex-1 pl-4">
                            <div className="text-xs text-brand-500 mb-1 flex items-center gap-1"><Bot className="w-3 h-3" /> AI Agent</div>
                            <div className="text-3xl font-display font-bold text-gray-900 dark:text-white">168h <span className="text-xs font-normal text-gray-500">/ wk</span></div>
                        </div>
                    </div>
                    <p className="text-xs text-center text-gray-500">AI doesn't take lunch breaks, weekends, or sick days.</p>
                </div>

                {/* Card 2: Cost Per Action */}
                <div className="bg-white dark:bg-dark-900/50 border border-gray-200 dark:border-dark-600 rounded-xl p-6 backdrop-blur-sm shadow-sm dark:shadow-none">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-green-500/10 rounded-lg text-green-500"><DollarSign className="w-5 h-5" /></div>
                        <span className="font-bold text-gray-800 dark:text-gray-300">Cost per Lead</span>
                    </div>
                    <div className="flex justify-between items-end mb-4 border-b border-gray-100 dark:border-dark-700 pb-4">
                        <div className="text-right flex-1 pr-4 border-r border-gray-200 dark:border-dark-700">
                             <div className="text-xs text-gray-500 mb-1 flex items-center justify-end gap-1">Human SDR <User className="w-3 h-3" /></div>
                            <div className="text-xl font-bold text-gray-700 dark:text-gray-400">~$45.00</div>
                        </div>
                        <div className="text-left flex-1 pl-4">
                             <div className="text-xs text-brand-500 mb-1 flex items-center gap-1"><Bot className="w-3 h-3" /> AI Agent</div>
                            <div className="text-3xl font-display font-bold text-gray-900 dark:text-white">~$0.12</div>
                        </div>
                    </div>
                     <p className="text-xs text-center text-gray-500">Software scales infinitely. Salaries scale linearly.</p>
                </div>

                {/* Card 3: Reaction Time */}
                <div className="bg-white dark:bg-dark-900/50 border border-gray-200 dark:border-dark-600 rounded-xl p-6 backdrop-blur-sm shadow-sm dark:shadow-none">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500"><Zap className="w-5 h-5" /></div>
                        <span className="font-bold text-gray-800 dark:text-gray-300">Response Speed</span>
                    </div>
                    <div className="flex justify-between items-end mb-4 border-b border-gray-100 dark:border-dark-700 pb-4">
                        <div className="text-right flex-1 pr-4 border-r border-gray-200 dark:border-dark-700">
                             <div className="text-xs text-gray-500 mb-1 flex items-center justify-end gap-1">Human <User className="w-3 h-3" /></div>
                            <div className="text-xl font-bold text-gray-700 dark:text-gray-400">~20 min</div>
                        </div>
                        <div className="text-left flex-1 pl-4">
                             <div className="text-xs text-brand-500 mb-1 flex items-center gap-1"><Bot className="w-3 h-3" /> AI Agent</div>
                            <div className="text-3xl font-display font-bold text-gray-900 dark:text-white">2 sec</div>
                        </div>
                    </div>
                     <p className="text-xs text-center text-gray-500">Lead conversion drops 400% after 5 minutes.</p>
                </div>

            </div>
        </div>
    </div>
  );
};
