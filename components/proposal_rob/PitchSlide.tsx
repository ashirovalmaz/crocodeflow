import React from 'react';
import { ShieldCheck, TrendingUp, Target, Briefcase, Zap, UserCheck } from 'lucide-react';

export const PitchSlide: React.FC = () => (
  <div className="space-y-12 animate-fade-in max-w-5xl mx-auto py-4">
    {/* Refined Header Section */}
    <div className="border-b border-gray-100 pb-12">
      <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight max-w-3xl">
        We aren't here for <span className="text-brand-600">short-term hacks.</span>
      </h3>
      
      <p className="text-xl text-gray-600 leading-relaxed font-light max-w-3xl">
        We build the <span className="text-gray-900 font-semibold underline decoration-brand-500/30 underline-offset-8">technical infrastructure</span> that allows your business to scale without increasing your personal hours. Our goal is to move from being a vendor to a long-term systems partner.
      </p>
    </div>

    {/* Elegant Values Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Infrastructure",
          desc: "We don't just plug holes; we build foundations. Every system we deploy is designed to be a permanent asset in your company's P&L.",
          icon: ShieldCheck
        },
        {
          title: "Total Leverage",
          desc: "We prioritize automations that give you back the most time. If a system doesn't create freedom for you, it isn't worth building.",
          icon: Zap
        },
        {
          title: "Long-Term ROI",
          desc: "Our architecture is built to support you up to $500k/mo and beyond. We build for where you are going, not just where you are.",
          icon: TrendingUp
        }
      ].map((item, i) => (
        <div key={i} className="group relative">
          <div className="mb-6 w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-brand-50 group-hover:text-brand-600 transition-all duration-300">
            <item.icon className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold text-gray-900 mb-3 font-display tracking-tight">{item.title}</h4>
          <p className="text-sm text-gray-500 leading-relaxed font-medium">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    {/* Commitment Section - Sophisticated Card */}
    <div className="mt-12 bg-white rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50/50 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
      
      <div className="flex-1 relative z-10">
        <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3 font-display">
          <Target className="text-brand-500 w-6 h-6" /> Our commitment to you
        </h4>
        <p className="text-gray-600 leading-relaxed text-lg font-light">
          We don't view ourselves as a vendor. We are a vertical of your team. Our success is tied directly to your results — we are invested in the <strong className="text-gray-900">operational health</strong> of your business.
        </p>
      </div>

      <div className="shrink-0 relative z-10 w-full md:w-auto">
        <div className="px-8 py-6 bg-gray-50 rounded-2xl border border-gray-100 text-center md:text-left">
           <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
             <UserCheck className="w-4 h-4 text-brand-600" />
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Partnership Status</p>
           </div>
           <p className="text-gray-900 font-bold text-xl font-display">Fully Committed</p>
           <p className="text-xs text-gray-400 mt-1 font-medium">Ready for Implementation</p>
        </div>
      </div>
    </div>
  </div>
);