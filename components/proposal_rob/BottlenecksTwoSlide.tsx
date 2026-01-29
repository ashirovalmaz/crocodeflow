import React from 'react';
import { AlertTriangle, Target, TrendingUp } from 'lucide-react';

export const BottlenecksTwoSlide: React.FC = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="grid grid-cols-1 gap-6">
        {/* Point 3 */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-brand-300 transition-all group">
            <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                    <Target className="w-6 h-6 text-red-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">3. Time spent on non-buyers</h3>
                    <p className="text-gray-600 leading-relaxed">
                        You invest attention into conversations that <span className="text-gray-900 font-semibold">never convert</span>. Without an automated qualification layer, high-value founder time is wasted on "tire kickers" instead of qualified prospects.
                    </p>
                </div>
            </div>
        </div>

        {/* Point 4 */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-brand-300 transition-all group">
            <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                    <TrendingUp className="w-6 h-6 text-red-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">4. Growth increases workload</h3>
                    <p className="text-gray-600 leading-relaxed">
                        More attention currently means <span className="text-gray-900 font-semibold">more manual work</span> — not leverage. Under the current setup, scaling the business would require doubling your personal hours, which is a recipe for burnout.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div className="mt-8 bg-brand-50 border border-brand-100 p-8 rounded-2xl flex items-center gap-4">
        <div className="w-2 h-12 bg-brand-500 rounded-full"></div>
        <p className="text-brand-900 font-bold text-lg">
            The goal of this transition is to flip the script: <br/>
            <span className="text-brand-600">Growth should increase your freedom, not your workload.</span>
        </p>
    </div>
  </div>
);