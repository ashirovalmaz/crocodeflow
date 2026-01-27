
import React from 'react';
import { FileSignature, Handshake, ArrowRight } from 'lucide-react';
import { CAL_LINK } from '../../constants';

export const ClosingSlide: React.FC = () => (
  <div className="space-y-12 animate-fade-in max-w-4xl mx-auto">
    <div className="prose dark:prose-invert max-w-none text-center">
        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            As mentioned, I believe strongly that your coaching company can be multiple times larger than it is now — especially with your existing audience size, the quality of your product, and the demand you’ve already proven.
        </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl border border-gray-200 dark:border-dark-700">
            <FileSignature className="w-10 h-10 text-brand-500 mb-6" />
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">The Execution</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                With a few focused improvements to your DM workflows, follow-ups, nurturing, and call prep, you can convert significantly more of the leads you already generate. Scaling becomes a matter of operations, not luck.
            </p>
        </div>
        <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl border border-gray-200 dark:border-dark-700">
            <Handshake className="w-10 h-10 text-brand-500 mb-6" />
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">The Commitment</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                I am ambitious and deeply committed to the craft of building AI systems that generate revenue autonomously. I wrote this in detail because I see the path clearly.
            </p>
        </div>
    </div>

    <div className="flex flex-col items-center gap-6 pt-8 border-t border-gray-200 dark:border-dark-800">
         <p className="text-gray-600 dark:text-gray-400 text-center max-w-lg">
            If this resonates and you’d like to move forward, simply pay the associated invoice and we can begin implementation immediately.
        </p>
        
        <a 
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-brand-600 hover:bg-brand-500 text-white text-xl font-bold rounded-xl shadow-xl hover:shadow-brand-500/30 transition-all flex items-center gap-3 transform hover:-translate-y-1"
        >
            Let's Build It <ArrowRight className="w-6 h-6" />
        </a>

        <p className="text-xs text-gray-400 dark:text-dark-600 text-center">
            If not, you’re still welcome to use everything I’ve laid out above; <br/>I genuinely want you and your company to succeed.
        </p>
    </div>
  </div>
);
