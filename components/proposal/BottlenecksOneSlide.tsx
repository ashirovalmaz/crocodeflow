
import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const BottlenecksOneSlide: React.FC = () => (
  <div className="space-y-12 animate-fade-in">
    <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-xl">
        <p className="text-lg text-red-800 dark:text-red-200 font-medium">
             As mentioned, one of your goals is to get to consistent $40–50k/month as a stepping stone to $80–100k+. Right now, the way your funnel is set up is actively preventing that. Let me explain.
        </p>
    </div>

    <div className="space-y-8">
        <div className="group">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" /> 1. DM conversion bottleneck (not a lead gen problem)
            </h3>
            <div className="pl-7 border-l-2 border-gray-200 dark:border-dark-700 ml-2">
                <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    You already proved that lead volume is not the issue:
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>80–100 warm leads per week from direct-to-DM ads for lead magnets.</li>
                        <li>100–150+ warm leads per week when you combine ads and organic CTAs.</li>
                        <li>7–20k story views and 3–4k new followers in a 1–2 month window.</li>
                    </ul>
                </div>
                <p className="text-gray-900 dark:text-white font-medium text-sm mb-2">
                    Despite that, almost none of those leads consistently become booked calls unless you personally intervene.
                </p>
                 <p className="text-gray-900 dark:text-white font-medium text-sm mb-2">
                    This means the real bottleneck is: <br/> <span className="font-bold text-brand-600 dark:text-brand-500">“Lead → DM conversation → qualified → booked → showed”</span>, <br/> not “getting more leads”.
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs italic">
                    Every week this persists, you’re leaving booked calls (and revenue) on the table.
                </p>
            </div>
        </div>

        <div className="group">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" /> 2. Setter underperformance and inconsistency
            </h3>
            <div className="pl-7 border-l-2 border-gray-200 dark:border-dark-700 ml-2">
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
                    From our conversation:
                    <br/>• Speed-to-lead is inconsistent; some DMs are simply missed.
                    <br/>• The setter follows up multiple times with people who never replied once, making you look like a bot and burning trust.
                    <br/>• New setters are being rotated in and tested, but there is still no guarantee the human layer will perform at the level you need.
                </p>
                <p className="text-gray-900 dark:text-white font-medium text-sm">
                    In short: You have human inconsistency on a process that demands speed, context, and reliability.
                </p>
            </div>
        </div>

        <div className="group">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" /> 3. Low show-up rate due to generic pre-call experience
            </h3>
            <div className="pl-7 border-l-2 border-gray-200 dark:border-dark-700 ml-2">
                <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    You mentioned weeks with:
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>9 calls booked → only 3 show up.</li>
                    </ul>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    Given your close rate (50–60% on show-ups), this is a huge leak.
                    <br/>Right now, the pre-call experience is: <span className="italic">A few questions in the DMs → “book a call” → generic reminders.</span>
                </p>
                <p className="text-gray-900 dark:text-white font-medium text-sm mb-4">
                    What’s missing is: <br/>
                    A custom, high-value pre-call asset (e.g. tailored presentation/plan) that makes them feel, <span className="italic">“These guys actually prepared something for me, I’d be stupid not to show up.”</span>
                </p>
                 <p className="text-gray-900 dark:text-white font-medium text-sm">
                    Without this, prospects feel like they’re just entering “another sales call”, so they flake more.
                </p>
            </div>
        </div>
    </div>
  </div>
);
