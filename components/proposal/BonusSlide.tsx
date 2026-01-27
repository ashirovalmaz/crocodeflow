
import React from 'react';
import { Gift, CheckCircle2 } from 'lucide-react';

export const BonusSlide: React.FC = () => (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-b from-brand-50 to-white dark:from-brand-900/20 dark:to-dark-800 border border-brand-200 dark:border-brand-500/30 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,_rgba(34,197,94,0.4)_0%,_transparent_50%)]"></div>

            <div className="w-20 h-20 bg-brand-100 dark:bg-brand-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-10 h-10 text-brand-600 dark:text-brand-400 animate-pulse" />
            </div>

            <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
                One Additional System <span className="text-brand-600 dark:text-brand-500">100% FREE</span>
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                If you decide in the next 24 hours, you’ll receive one additional system of your choice with <strong>no setup fee</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-3xl mx-auto mb-8">
                 <div className="bg-white dark:bg-dark-900 p-4 rounded-xl border border-gray-200 dark:border-dark-700 shadow-sm flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-500" />
                    <span className="text-sm font-bold">Personalized Reactivations</span>
                 </div>
                 <div className="bg-white dark:bg-dark-900 p-4 rounded-xl border border-gray-200 dark:border-dark-700 shadow-sm flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-500" />
                    <span className="text-sm font-bold">Call Analysis & CRM</span>
                 </div>
                 <div className="bg-white dark:bg-dark-900 p-4 rounded-xl border border-gray-200 dark:border-dark-700 shadow-sm flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-500" />
                    <span className="text-sm font-bold">Content Intel Engine</span>
                 </div>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                This is a full system, not a “lite” version. It requires me to front-load additional development time, so I only offer it when someone is ready to move quickly.
            </p>
        </div>
    </div>
);
