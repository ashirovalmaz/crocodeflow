
import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const BottlenecksTwoSlide: React.FC = () => (
  <div className="space-y-12 animate-fade-in">
    <div className="space-y-8">
        <div className="group">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" /> 3. Generic Pre-Call Experience
            </h3>
            <div className="pl-7 border-l-2 border-gray-200 dark:border-dark-700 ml-2">
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
                    Prospects treat sales calls as 'another generic pitch' because the pre-call experience is generic.
                </p>
                <p className="text-gray-900 dark:text-white font-medium text-sm">
                    Impact: High flake rates and 'I need to think about it' objections.
                </p>
            </div>
        </div>

        <div className="group">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" /> 4. Lack of Data Centralization
            </h3>
            <div className="pl-7 border-l-2 border-gray-200 dark:border-dark-700 ml-2">
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
                    Lead data is scattered. You don't have a clear picture of what's working and what isn't without manual reporting.
                </p>
            </div>
        </div>
    </div>
  </div>
);
