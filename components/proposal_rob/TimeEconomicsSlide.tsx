import React from 'react';
import { Clock, Hourglass, BarChart3, AlertCircle } from 'lucide-react';

export const TimeEconomicsSlide: React.FC = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="prose max-w-none">
      <p className="text-xl text-gray-700 leading-relaxed font-light">
        Right now, your most limited resource isn’t leads or clients — it’s your <strong className="text-gray-900 font-semibold underline decoration-brand-500 decoration-2 underline-offset-4">time and attention</strong>.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="md:col-span-7 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-center">
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-brand-500" /> Based on what you shared:
        </h3>
        <ul className="space-y-5">
          {[
              "You handle the majority of DM conversations yourself",
              "Many of these conversations never convert",
              "Each interaction may only take a few minutes — but they compound daily"
          ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg leading-snug">{item}</span>
              </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-5 bg-gray-900 p-8 rounded-2xl shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-3xl group-hover:bg-brand-500/20 transition-colors"></div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-6 flex items-center gap-2">
          <BarChart3 className="w-4 h-4" /> Conservative Estimate:
        </h3>
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
            <span className="text-gray-400 text-sm">DM Conv. / day</span>
            <span className="text-xl font-bold text-white">20–30</span>
          </div>
          <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
            <span className="text-gray-400 text-sm">Time / conv.</span>
            <span className="text-xl font-bold text-white">2–4 min</span>
          </div>
          <div className="flex justify-between items-baseline pt-2">
            <span className="text-brand-400 font-bold">Total lost / day</span>
            <span className="text-2xl font-display font-bold text-white">60–120 min</span>
          </div>
        </div>
        <div className="bg-brand-600/20 border border-brand-500/30 p-4 rounded-xl text-center">
            <p className="text-xs text-brand-200 font-bold uppercase tracking-widest mb-1">Monthly Cost</p>
            <p className="text-3xl font-display font-bold text-white tracking-tight">20–40 HOURS</p>
        </div>
      </div>
    </div>

    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 relative">
      <p className="text-gray-600 mb-6 leading-relaxed italic">
        That’s time spent on tasks you’ve explicitly said you don’t enjoy — tasks that <strong className="text-gray-900">don’t require your experience, judgment, or expertise.</strong>
      </p>
      <div className="flex items-center gap-4 text-brand-600">
        <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
            <Hourglass className="w-6 h-6 animate-float" />
        </div>
        <div>
            <p className="text-lg font-bold text-gray-900 leading-tight">The goal of automation here isn’t just revenue.</p>
            <p className="text-brand-600 font-medium">It’s reclaiming your time while improving outcomes.</p>
        </div>
      </div>
    </div>
  </div>
);