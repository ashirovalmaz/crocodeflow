
import React from 'react';
import { Gift } from 'lucide-react';

export const BonusSlide: React.FC = () => (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto text-center">
        <div className="bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-500/30 rounded-3xl p-12">
            <Gift className="w-16 h-16 text-brand-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Fast-Action Incentive</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
                Commit within 24 hours to waive the setup fee for any one additional system.
            </p>
        </div>
    </div>
);
