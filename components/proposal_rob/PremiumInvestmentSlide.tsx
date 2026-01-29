
import React, { useState } from 'react';
import { ShieldCheck, Zap, Star, Check, Calculator, ArrowRight, Sparkles, TrendingDown, Target } from 'lucide-react';

const ROB_SYSTEMS = [
  { id: 'sys1', title: 'AI DM Foundation + Presentations', desc: 'Core conversion engine & custom asset generator', setup: 2900, monthly: 790, priority: 'Core P1' },
  { id: 'sys2', title: 'Automated Newsletter', desc: 'Highly personalized emails using CRM data', setup: 2400, monthly: 650, priority: 'High P2' },
  { id: 'sys3', title: 'Personalized Reactivation', desc: 'Monetizes non-buyers and no-shows automatically', setup: 1900, monthly: 550, priority: 'High P2' },
  { id: 'sys4', title: 'Content Intelligence', desc: 'Competitor analysis and content scripting engine', setup: 1500, monthly: 450, priority: 'High P3' },
  { id: 'sys5', title: 'Client App / Dashboard', desc: 'LTV, Retention & Engagement tracking', setup: 4500, monthly: 850, priority: 'Premium P4' }
];

export const PremiumInvestmentSlide: React.FC = () => {
    const [selected, setSelected] = useState<string[]>(['sys1']);

    const toggle = (id: string) => {
        if (selected.includes(id)) {
            if (selected.length === 1) return; 
            setSelected(selected.filter(s => s !== id));
        } else {
            setSelected([...selected, id]);
        }
    };

    const count = selected.length;
    let discountPercent = 0;
    if (count === 2) discountPercent = 0.10;
    else if (count === 3) discountPercent = 0.15;
    else if (count >= 4) discountPercent = 0.20;

    const baseSetup = ROB_SYSTEMS.reduce((acc, sys) => selected.includes(sys.id) ? acc + sys.setup : acc, 0);
    const totalMonthly = ROB_SYSTEMS.reduce((acc, sys) => selected.includes(sys.id) ? acc + sys.monthly : acc, 0);
    const discountAmount = baseSetup * discountPercent;
    const finalSetup = baseSetup - discountAmount;
    const firstYearValue = finalSetup + (totalMonthly * 12);
    
    const annualPrice = Math.floor((firstYearValue * 0.55) / 100) * 100;
    const annualSavings = firstYearValue - annualPrice;

    return (
        <div className="space-y-10 animate-fade-in max-w-6xl mx-auto">
            {/* Context Header */}
            <div className="text-center space-y-4">
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Scaling to the next level requires shifting from founder-led DMs to a structured, automated acquisition engine. Select your starting implementation package below.
                </p>
            </div>

            {/* Configurator Card */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
                            <Calculator className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-display font-bold text-xl text-gray-900 leading-none">Implementation Scope</h4>
                            <p className="text-xs text-gray-500 mt-1">Select systems to include in Phase 1</p>
                        </div>
                    </div>
                    {discountAmount > 0 && (
                        <div className="flex items-center gap-2 bg-brand-600 text-white px-4 py-2 rounded-full text-xs font-bold animate-pulse shadow-lg shadow-brand-500/20 uppercase tracking-widest border border-brand-400">
                           <Sparkles className="w-3.5 h-3.5" /> Bundle Discount: {Math.round(discountPercent * 100)}% Off Setup
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ROB_SYSTEMS.map((sys) => {
                        const isSelected = selected.includes(sys.id);
                        return (
                            <div 
                                key={sys.id}
                                onClick={() => toggle(sys.id)}
                                className={`
                                    cursor-pointer rounded-xl p-5 border transition-all duration-300 flex flex-col gap-3 group
                                    ${isSelected 
                                        ? 'bg-white border-brand-500 shadow-md ring-1 ring-brand-500' 
                                        : 'bg-white/50 border-gray-200 opacity-70 hover:opacity-100 hover:border-gray-300'
                                    }
                                `}
                            >
                                <div className="flex justify-between items-start">
                                    <div className={`
                                        w-6 h-6 rounded border flex items-center justify-center transition-all
                                        ${isSelected ? 'bg-brand-500 border-brand-500 scale-110' : 'border-gray-300 bg-white'}
                                    `}>
                                        {isSelected && <Check className="w-4 h-4 text-white" />}
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-brand-500 transition-colors">{sys.priority}</span>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-900 leading-tight mb-1">{sys.title}</div>
                                    <div className="text-xs text-gray-500 leading-relaxed">{sys.desc}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Pricing Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {/* Standard Plan */}
                <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-[100px] -mr-16 -mt-16 -z-10"></div>
                    
                    <div className="mb-10">
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Option 01</h4>
                        <h3 className="text-2xl font-display font-bold text-gray-900">Standard Plan</h3>
                        <p className="text-sm text-gray-500 mt-2 italic">Month-to-month flexibility after setup</p>
                    </div>

                    <div className="space-y-6 mb-10">
                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-display font-bold text-brand-600">${finalSetup.toLocaleString()}</span>
                            <span className="text-gray-500 font-medium">setup</span>
                        </div>
                        {discountAmount > 0 && (
                             <div className="text-xs font-bold text-brand-600 flex items-center gap-1.5 uppercase tracking-wider">
                                <TrendingDown className="w-4 h-4" /> Save ${discountAmount.toLocaleString()} on setup fees
                             </div>
                        )}
                        <div className="text-2xl text-gray-700 font-medium">+ ${totalMonthly.toLocaleString()} / mo.</div>
                    </div>

                    <div className="flex-grow space-y-4 border-t border-gray-100 pt-8 mb-8">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Included Systems:</p>
                        <div className="grid grid-cols-1 gap-3">
                            {ROB_SYSTEMS.filter(s => selected.includes(s.id)).map(s => (
                                <div key={s.id} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                                    <Check className="w-4 h-4 text-brand-500 shrink-0" /> {s.title}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                        <ShieldCheck className="w-5 h-5 text-brand-500" />
                        <span className="text-[10px] text-gray-600 font-bold uppercase tracking-wider">30-Day Implementation Guarantee</span>
                    </div>
                </div>

                {/* Annual Plan (Premium) */}
                <div className="bg-gradient-to-br from-brand-900 to-emerald-950 p-10 rounded-3xl border border-brand-500/50 shadow-2xl flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-brand-600 text-white text-[10px] font-bold px-6 py-2 rounded-bl-2xl uppercase tracking-[0.2em] shadow-lg">
                        Best Value
                    </div>
                    
                    <div className="mb-10">
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-400 mb-2">Option 02</h4>
                        <h3 className="text-2xl font-display font-bold text-white">Annual Engagement</h3>
                        <p className="text-sm text-brand-300/60 mt-2 italic">Maximized ROI & 12-month roadmap</p>
                    </div>

                    <div className="space-y-6 mb-10">
                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-display font-bold text-white">${annualPrice.toLocaleString()}</span>
                            <span className="text-gray-400 font-medium">upfront</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-500/10 border border-brand-500/30 rounded-lg text-brand-400 text-xs font-bold uppercase tracking-widest">
                            <Zap className="w-3.5 h-3.5 fill-brand-400" /> ~45% Total Savings Included
                        </div>
                        <div className="text-xl text-gray-400 font-medium">No monthly fees for 12 months</div>
                    </div>

                    <div className="flex-grow space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                        <div className="flex justify-between items-center text-sm border-b border-white/10 pb-3">
                            <span className="text-gray-400">Standard 12-Month Total</span>
                            <span className="text-gray-500 line-through">${firstYearValue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm border-b border-white/10 pb-3">
                            <span className="text-gray-400">Annual Plan Investment</span>
                            <span className="text-white font-bold">${annualPrice.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                            <div className="flex flex-col">
                                <span className="text-[10px] text-brand-400 font-bold uppercase tracking-widest">Total Value Saved</span>
                                <span className="text-2xl font-display font-bold text-white">${annualSavings.toLocaleString()}</span>
                            </div>
                            <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/40">
                                <TrendingDown className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                         <button className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-2xl transition-all shadow-xl hover:shadow-brand-500/40 flex items-center justify-center gap-3 group">
                            Select Annual Roadmap <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                         </button>
                         <p className="text-[10px] text-brand-400/50 text-center uppercase tracking-widest font-bold italic">Priority Support Included</p>
                    </div>
                </div>
            </div>

            {/* Bottom Proof */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-10 border-t border-gray-100">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-50 rounded-lg text-brand-600">
                        <Target className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-900 uppercase">Revenue Focused</p>
                        <p className="text-[10px] text-gray-500">Every system prints money</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-50 rounded-lg text-brand-600">
                        <Zap className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-900 uppercase">Fast Deployment</p>
                        <p className="text-[10px] text-gray-500">Live in ~14 days</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-50 rounded-lg text-brand-600">
                        <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-900 uppercase">Scalable Tech</p>
                        <p className="text-[10px] text-gray-500">Built for 10x volume</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
