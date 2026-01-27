
import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const BottlenecksTwoSlide: React.FC = () => (
  <div className="space-y-12 animate-fade-in">
    <div className="space-y-8">
        <div className="group">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" /> 4. Reliance on generic automations
            </h3>
            <div className="pl-7 border-l-2 border-gray-200 dark:border-dark-700 ml-2">
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
                    Current automations: GHL reminders and basic texts → generic and unpersonalized. Non-buyers are thrown into a 365-day nurture sequence that is not truly based on their goals, struggles, or what was said.
                </p>
                <p className="text-gray-900 dark:text-white font-medium text-sm">
                    In a market where everyone has a lead magnet and a 5-step reminder sequence, generic automations blend into the noise. People grab the free thing and forget. You need personalized automations that feel human.
                </p>
            </div>
        </div>

        <div className="group">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" /> 5. You are still the “break-glass-in-case-of-emergency” closer
            </h3>
            <div className="pl-7 border-l-2 border-gray-200 dark:border-dark-700 ml-2">
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
                    You said it yourself: “If I jump into the DMs, we get calls booked and deals closed. I just don’t want to spend my time that way.”
                    <br/>Right now: The most valuable operator in the company (you) is occasionally doing $20–$40/hr DM work, just to plug holes.
                </p>
                <p className="text-gray-900 dark:text-white font-medium text-sm">
                    Every time you do this, you’re not creating higher-level content, building systems, or designing offers that could move you toward $80–100k/mo. This is the classic founder bottleneck.
                </p>
            </div>
        </div>

        <div className="group">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" /> 6. Untapped upside on your fiancée’s side
            </h3>
            <div className="pl-7 border-l-2 border-gray-200 dark:border-dark-700 ml-2">
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
                    You mentioned your fiancée runs her own coaching side. If this system works for you, you’d want to clone it for her. Right now, that’s pure upside that’s waiting on fixing the main funnel.
                </p>
                <p className="text-gray-900 dark:text-white font-medium text-sm">
                    In other words: every improvement we make for you can be multiplied x2–3 across the other brand(s).
                </p>
            </div>
        </div>
    </div>

    <div className="bg-gray-100 dark:bg-dark-800 p-6 rounded-xl text-center">
        <p className="text-gray-700 dark:text-gray-300 font-medium">
            If these problems aren’t addressed, the pattern will likely continue: You generate leads → Setters handle them "okay-ish" → You feel compelled to jump in → Revenue plateaus at ~$30–40k.
        </p>
    </div>
  </div>
);
