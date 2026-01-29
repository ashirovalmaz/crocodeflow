import React from 'react';
import { ShieldCheck, TrendingUp, Target, Briefcase, Zap } from 'lucide-react';

export const PitchSlide: React.FC = () => (
  <div className="space-y-10 animate-fade-in max-w-5xl mx-auto">
    {/* Hero Section */}
    <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-10 md:p-16 text-white shadow-2xl">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-brand-500/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-brand-500/10 rounded-full blur-[100px]"></div>
      
      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-400 text-xs font-bold uppercase tracking-widest mb-6">
          <Briefcase className="w-3 h-3" /> The Partnership Model
        </div>
        <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-[1.1]">
          We aren't interested in <br/>
          <span className="text-brand-400 italic">short-term hacks.</span>
        </h3>
        <p className="text-lg text-gray-400 leading-relaxed font-light">
          We build the <span className="text-white font-medium">infrastructure</span> that allows your business to scale without relying on your personal hours. Our goal is simple: to become your long-term systems partner.
        </p>
      </div>
    </div>

    {/* Values Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          title: "Infrastructure",
          desc: "We don't just plug holes; we build foundations. Every system we deploy is designed to be a permanent asset in your company's P&L.",
          icon: ShieldCheck
        },
        {
          title: "Leverage",
          desc: "We prioritize automations that give you back the most time. If a system doesn't create freedom for you, we don't build it.",
          icon: Zap
        },
        {
          title: "Long-Term ROI",
          desc: "We think in years, not weeks. Our architecture is built to support you from $50k/mo to $500k/mo and beyond.",
          icon: TrendingUp
        }
      ].map((item, i) => (
        <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-brand-300 transition-all group">
          <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors">
            <item.icon className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    {/* Commitment Footer */}
    <div className="bg-brand-50 border border-brand-200 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h4 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
          <Target className="text-brand-600 w-6 h-6" /> Our Skin in the Game
        </h4>
        <p className="text-gray-600 leading-relaxed">
          We don't view ourselves as a vendor. We are a part of your team. 
          <strong className="text-gray-900"> Our success is tied directly to your results.</strong> If the systems don't work, we don't win.
        </p>
      </div>
      <div className="shrink-0">
        <div className="px-6 py-4 bg-white rounded-xl border border-brand-200 shadow-sm text-center">
           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Status</p>
           <p className="text-brand-600 font-bold text-lg">Fully Committed</p>
        </div>
      </div>
    </div>
  </div>
);