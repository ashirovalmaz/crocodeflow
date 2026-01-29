
import React from 'react';
import { Clock, TrendingDown, Hourglass } from 'lucide-react';

export const TimeEconomicsSlide: React.FC = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="prose max-w-none">
      <p className="text-lg text-gray-700 leading-relaxed font-light">
        Right now, your most limited resource isn’t leads or clients — it’s your <strong className="text-gray-900 font-semibold">time and attention</strong>.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6 flex items-center gap-2">
          <TrendingDown className="w-4 h-4 text-brand-500" /> Based on what you shared:
        </h3>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start gap-3 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
            <span>You handle the majority of DM conversations yourself</span>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
            <span>Many of these conversations never convert</span>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
            <span>Each interaction may only take a few minutes — but they compound daily</span>
          </li>
        </ul>
      </div>

      <div className="bg-brand-50 p-8 rounded-2xl border border-brand-100">
        <h3 className="text-sm font-bold uppercase tracking-wider text-brand-600 mb-6 flex items-center gap-2">
          <Clock className="w-4 h-4" /> Even conservatively:
        </h3>
        <div className="space-y-2 mb-6 font-mono text-brand-900">
          <div className="flex justify-between border-b border-brand-200 pb-1">
            <span>20–30 DM conversations</span>
            <span>/ day</span>
          </div>
          <div className="flex justify-between border-b border-brand-200 pb-1">
            <span>2–4 minutes</span>
            <span>/ conv</span>
          </div>
          <div className="flex justify-between pt-1 font-bold">
            <span>60–120 minutes</span>
            <span>/ day</span>
          </div>
        </div>
        <p className="text-sm text-brand-800 font-medium">
          That’s <span className="text-xl text-brand-700 font-bold">20–40 hours</span> per month spent on low-leverage tasks.
        </p>
      </div>
    </div>

    <div className="bg-gray-100 p-8 rounded-2xl border border-gray-200">
      <p className="text-gray-700 mb-4 leading-relaxed">
        Tasks that you’ve explicitly said you don’t enjoy — tasks that <strong className="text-gray-900 font-semibold">don’t require your experience, judgment, or expertise.</strong>
      </p>
      <div className="flex items-center gap-4 text-brand-600 font-bold">
        <Hourglass className="w-6 h-6 animate-pulse" />
        <p className="text-lg">Reclaiming your time while improving outcomes.</p>
      </div>
    </div>
  </div>
);
