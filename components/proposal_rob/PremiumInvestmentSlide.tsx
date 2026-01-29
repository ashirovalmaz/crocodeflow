import React from 'react';
import { ShieldCheck, TrendingUp, Zap, ArrowRight, Star, Info } from 'lucide-react';

export const PremiumInvestmentSlide: React.FC = () => {
  return (
    <div className="space-y-10 animate-fade-in max-w-6xl mx-auto">
      {/* Value Proposition Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-widest">
          <Star className="w-3.5 h-3.5 fill-brand-500" /> Maximum Leverage Package
        </div>
        <h3 className="text-3xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
          The <span className="text-brand-600">ROI-First</span> Investment
        </h3>
        <p className="text-gray-500 max-w-2xl mx-auto">
          We don't view this as a cost. We view it as buying back your time and installing a permanent revenue engine in your business.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Option 1: The Accelerator (Standard) */}
        <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-xl flex flex-col relative group overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
          
          <div className="relative z-10 flex-grow">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Flexible Entry</h4>
            <h5 className="text-2xl font-bold text-gray-900 mb-6">Standard Implementation</h5>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-display font-extrabold text-gray-900">$2,900</span>
                <span className="text-gray-400 font-medium">setup fee</span>
              </div>
              <div className="flex items-center gap-4 py-4 border-y border-gray-50">
                 <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600">
                    <Zap className="w-6 h-6" />
                 </div>
                 <div>
                    <p className="text-2xl font-bold text-gray-900">$790<span className="text-sm font-normal text-gray-400">/mo</span></p>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Infrastructure Maintenance</p>
                 </div>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "Full System 1 Build-out",
                "Unlimited Technical Support",
                "Monthly Performance Audits",
                "CRM & Tool Integrations"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Option 2: The Partner (Annual) - HIGH POWER STYLE */}
        <div className="bg-gray-900 rounded-[2.5rem] p-10 border-4 border-brand-500 shadow-[0_20px_60px_rgba(34,197,94,0.3)] flex flex-col relative overflow-hidden transform lg:-translate-y-6 lg:scale-105">
          <div className="absolute top-0 right-0 bg-brand-500 text-white text-[11px] font-black px-8 py-2 rounded-bl-2xl uppercase tracking-[0.2em] shadow-lg">
            Save Over $5,000
          </div>
          
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-500/10 rounded-full blur-[100px]"></div>

          <div className="relative z-10 flex-grow">
            <h4 className="text-sm font-bold text-brand-400 uppercase tracking-widest mb-2">Full Partnership</h4>
            <h5 className="text-3xl font-bold text-white mb-8">Annual Engine Plan</h5>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8">
                <div className="text-center mb-6">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.15em] mb-2">One-Time Investment</p>
                    <div className="text-6xl font-display font-black text-white">$6,800</div>
                    <p className="text-brand-400 font-bold text-sm mt-2">Zero Monthly Fees for 12 Months</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                    <div className="text-center">
                        <p className="text-gray-500 text-[10px] uppercase font-bold mb-1">Standard Cost</p>
                        <p className="text-gray-400 line-through font-bold">$12,380</p>
                    </div>
                    <div className="text-center">
                        <p className="text-brand-500 text-[10px] uppercase font-bold mb-1">Your Savings</p>
                        <p className="text-brand-500 font-bold">$5,580</p>
                    </div>
                </div>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "Priority Support (1-Hour Response)",
                "Full System 1 + 1 Bonus System",
                "Quarterly Strategic Re-mapping",
                "Advanced AI Customization",
                "Lifetime Logic Updates"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-100 font-medium">
                  <ShieldCheck className="w-5 h-5 text-brand-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 pt-6 border-t border-white/10 text-center">
             <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                Highest Commitment = Highest Priority
             </p>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-gray-100">
          <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-50 rounded-lg"><Info className="w-5 h-5 text-gray-400" /></div>
              <p className="text-sm text-gray-500 leading-tight">
                All systems include a <span className="text-gray-900 font-bold">14-Day Performance Guarantee</span>. <br/>
                If we don't hit the implementation milestones, we work for free until we do.
              </p>
          </div>
          <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-500 flex items-center justify-center text-[10px] font-bold text-white">
                  +12
              </div>
          </div>
      </div>
    </div>
  );
};