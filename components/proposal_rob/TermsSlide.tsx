import React from 'react';
import { Check, Sparkles, Zap, Package, Mail, Target, Layout } from 'lucide-react';

export const TermsSlide: React.FC = () => (
  <div className="space-y-12 animate-fade-in max-w-6xl mx-auto">
    <div className="text-center max-w-2xl mx-auto">
       <h3 className="text-sm font-bold uppercase tracking-widest text-brand-600 mb-2">Pricing — Core system</h3>
       <p className="text-gray-500 text-sm italic">Scalable infrastructure designed for high-leverage growth.</p>
    </div>

    {/* Primary Pricing Options */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
      {/* Option 1: Standard */}
      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col group hover:border-brand-300 transition-colors">
        <div className="mb-6">
          <h4 className="text-lg font-bold text-gray-900 mb-1">Option 1 — Standard engagement</h4>
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Monthly Plan</p>
        </div>
        
        <div className="space-y-6 mb-8 flex-grow">
          <div>
            <div className="text-3xl font-display font-bold text-gray-900">$2,900</div>
            <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">One-time setup</div>
          </div>
          <div className="w-8 h-px bg-gray-100"></div>
          <div>
            <div className="text-3xl font-display font-bold text-brand-600">$790</div>
            <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Per month</div>
          </div>
        </div>

        <ul className="space-y-3 pt-6 border-t border-gray-50">
           <li className="flex items-center gap-2 text-sm text-gray-600">
             <Check className="w-4 h-4 text-brand-500" /> Phase 1: DM Funnel
           </li>
           <li className="flex items-center gap-2 text-sm text-gray-600">
             <Check className="w-4 h-4 text-brand-500" /> Personalized Pages
           </li>
           <li className="flex items-center gap-2 text-sm text-gray-600">
             <Check className="w-4 h-4 text-brand-500" /> Monthly Maintenance
           </li>
        </ul>
      </div>

      {/* Option 2: Annual */}
      <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col transform md:-translate-y-4 border border-brand-500/30">
        <div className="absolute top-0 right-0 bg-brand-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-widest">
          Recommended
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-bold text-white mb-1">Option 2 — Annual engagement</h4>
          <p className="text-xs text-brand-400 uppercase tracking-widest font-bold">Prepaid Value</p>
        </div>

        <div className="mb-8 flex-grow">
          <div className="text-5xl font-display font-bold text-white mb-2">$6,000</div>
          <div className="text-xs text-brand-400 font-bold uppercase tracking-widest mb-6">Upfront payment</div>
          <div className="bg-brand-500/10 border border-brand-500/20 rounded-xl p-4 text-center">
             <p className="text-brand-400 font-bold text-sm tracking-wide">NO MONTHLY PAYMENTS FOR 12 MONTHS</p>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 space-y-3">
           <div className="flex justify-between items-center text-xs text-gray-400">
             <span>Standard 12-Mo Value</span>
             <span className="line-through">$12,380</span>
           </div>
           <div className="flex justify-between items-center text-sm font-bold text-brand-400">
             <span>Total Savings</span>
             <span>$6,380</span>
           </div>
        </div>
      </div>
    </div>

    {/* Additional Systems */}
    <div className="pt-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-px flex-grow bg-gray-200"></div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap">Additional systems (Now or later)</h3>
        <div className="h-px flex-grow bg-gray-200"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { 
            title: "1. Automated Newsletter", 
            icon: Mail, 
            desc: "Highly personalized emails using CRM data", 
            price: "$2,400 setup / $650 mo" 
          },
          { 
            title: "2. Personalized Reactivation", 
            icon: Zap, 
            desc: "Monetizes non-buyers and no-shows automatically", 
            price: "$1,900 setup / $550 mo" 
          },
          { 
            title: "3. Content Intelligence", 
            icon: Target, 
            desc: "Competitor analysis and content scripting engine", 
            price: "$1,500 setup / $450 mo" 
          },
          { 
            title: "4. Client App / Dashboard", 
            icon: Layout, 
            desc: "Engagement, retention, progress tracking, and LTV growth", 
            price: "$4,500 setup / $850 mo" 
          }
        ].map((sys, i) => (
          <div key={i} className="bg-gray-50 border border-gray-100 p-5 rounded-xl group hover:border-brand-500 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-brand-500 transition-colors">
                <sys.icon className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <h5 className="font-bold text-gray-900 text-sm mb-1">{sys.title}</h5>
                <p className="text-xs text-gray-500 mb-3">{sys.desc}</p>
                <div className="text-[11px] font-bold text-brand-600 uppercase tracking-wider bg-brand-50 w-fit px-2 py-0.5 rounded">
                  {sys.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <p className="mt-8 text-center text-xs text-gray-500 leading-relaxed italic">
        These systems are designed as long-term infrastructure. <br/>
        They can be layered in once Phase 1 is proven — or added immediately if you want to accelerate results.
      </p>
    </div>
  </div>
);