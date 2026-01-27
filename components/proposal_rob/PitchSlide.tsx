
import React from 'react';

export const PitchSlide: React.FC = () => (
  <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl border border-gray-200 dark:border-dark-700 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-brand-500"></div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-display">
              A Partnership Built on Revenue.
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
              We don't want to be 'another vendor'. We want to be your fractional automation department. We win when you scale.
          </p>
      </div>
  </div>
);
