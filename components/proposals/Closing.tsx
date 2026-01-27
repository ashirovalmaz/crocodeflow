
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CAL_LINK } from '../../constants';

export const Closing: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in max-w-4xl mx-auto flex flex-col items-center pt-12">
      <p className="text-xl text-gray-700 dark:text-gray-300 text-center">
        Scaling becomes a matter of operations, not luck. I am ambitious and deeply committed to building AI systems that generate revenue autonomously.
      </p>
      <a href={CAL_LINK} target="_blank" className="px-10 py-5 bg-brand-600 hover:bg-brand-500 text-white text-xl font-bold rounded-xl shadow-xl transition-all flex items-center gap-3">
        Let's Build It <ArrowRight className="w-6 h-6" />
      </a>
    </div>
  );
};
