import React from 'react';
import { AlertTriangle, UserMinus, ZapOff } from 'lucide-react';

export const BottlenecksOneSlide: React.FC = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
        <p className="text-lg text-red-800 font-medium italic">
             "Success is hard to scale when the founder is the primary engine of every conversation."
        </p>
    </div>

    <div className="grid grid-cols-1 gap-6">
        {/* Point 1 */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-brand-300 transition-all group">
            <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                    <UserMinus className="w-6 h-6 text-red-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">1. Founder dependency</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Sales and qualification depend on your availability. When you’re busy, <span className="text-gray-900 font-semibold">leads wait</span>. This creates a ceiling on how much revenue can flow through the business at any given time.
                    </p>
                </div>
            </div>
        </div>

        {/* Point 2 */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-brand-300 transition-all group">
            <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                    <ZapOff className="w-6 h-6 text-red-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2. Inconsistent speed-to-lead</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Even small delays in DMs <span className="text-gray-900 font-semibold">reduce intent and trust</span>. In a world of instant gratification, the business that responds first wins. Right now, response times fluctuate based on human schedules.
                    </p>
                </div>
            </div>
        </div>
    </div>
  </div>
);