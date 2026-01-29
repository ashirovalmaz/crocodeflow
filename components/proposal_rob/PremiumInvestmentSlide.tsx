import React, { useState } from 'react';
import { ShieldCheck, Zap, Star, Info, Check, Calculator, ArrowRight } from 'lucide-react';

const ROB_SYSTEMS = [
  { id: 'sys1', title: 'AI DM Foundation + Presentations', desc: 'Core conversion engine', setup: 2900, monthly: 790, priority: 'Core P1' },
  { id: 'sys2', title: 'Automated Newsletter', desc: 'CRM-driven email marketing', setup: 2400, monthly: 650, priority: 'High P2' },
  { id: 'sys3', title: 'Personalized Reactivation', desc: 'Automated lead recovery', setup: 1900, monthly: 550, priority: 'High P2' },
  { id: 'sys4', title: 'Content Intelligence', desc: 'AI content engine', setup: 1500, monthly: 450, priority: 'High P3' },
  { id: 'sys5', title: 'Client App / Dashboard', desc: 'Retention & LTV tracking', setup: 4500, monthly: 850, priority: 'Premium P4' }
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
        <div className="space-y-12 animate-fade-in max-w-6xl mx-auto">
            {/* Minimalist Header */}
            <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                    System Configurator
                </div>
                <h3 className="text-3xl font-display font-bold text-gray-900">Choose your implementation scope</h3>
                <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
                    Select the systems you want to include in the initial roadmap. The investment options below will update automatically based on your selection.
                </p>
            </div>

            {/* Subtle Customizer */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <Calculator className="w-5 h-5 text-brand-500" />
                    <h4 className="font-bold text-gray-900">Custom Roadmap</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {ROB_SYSTEMS.map((sys) => {
                        const isSelected = selected.includes(sys.id);
                        return (
                            <div 
                                key={sys.id}
                                onClick={() => toggle(sys.id)}
                                className={`
                                    cursor-pointer rounded-xl p-4 border transition-all duration-300 flex flex-col gap-2
                                    ${isSelected 
                                        ? 'bg-brand-50 border-brand-500 shadow-sm' 
                                        : 'bg-white border-gray-100 hover:border-gray-200 opacity-70 hover:opacity-100'
                                    }
                                `}
                            >
                                <div className="flex justify-between items-start">
                                    <div className={`
                                        w-5 h-5 rounded-full border flex items-center justify-center transition-colors
                                        ${isSelected ? 'bg-brand-500 border-brand-500' : 'border-gray-300 bg-white'}
                                    `}>
                                        {isSelected && <Check className="w-3 h-3 text-white" />}
                                    </div>
                                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">{sys.priority}</span>
                                </div>
                                <div className="mt-2">
                                    <div className="text-xs font-bold text-gray-900 leading-tight">{sys.title}</div>
                                    <div className="text-[10px] text-gray-400 mt-1">{sys.desc}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Refined Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-4">
                {/* Standard Plan - Clean & Corporate */}
                <div className="bg-white p-10 rounded-[2rem] border border-gray-200 flex flex-col relative group">
                    <div className="mb-8">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Option 01</h4>
                        <h5 className="text-2xl font-bold text-gray-900">Standard Plan</h5>
                    </div>
                    
                    <div className="space-y-6 mb-10 flex-grow">
                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-display font-bold text-gray-900">${finalSetup.toLocaleString()}</span>
                            <span className="text-gray-400 font-medium">setup</span>
                        </div>
                        
                        {discountAmount > 0 && (
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-50 text-brand-700 text-[10px] font-bold uppercase tracking-widest border border-brand-100">
                                <Zap className="w-3 h-3" /> Includes ${discountAmount.toLocaleString()} Bundle Discount
                            </div>
                        )}

                        <div className="pt-6 border-t border-gray-50">
                            <div className="text-2xl font-bold text-gray-900">${totalMonthly.toLocaleString()}<span className="text-sm font-normal text-gray-400">/mo</span></div>
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">SLA & Infrastructure Maintenance</p>
                        </div>
                    </div>

                    <ul className="space-y-3 mb-10 text-sm text-gray-600 border-t border-gray-50 pt-8">
                        {ROB_SYSTEMS.filter(s => selected.includes(s.id)).map(sys => (
                            <li key={sys.id} className="flex items-center gap-3">
                                <div className="w-1 h-1 rounded-full bg-brand-500"></div>
                                {sys.title}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Annual Plan - Elegant Dark Mode */}
                <div className="bg-gray-900 p-10 rounded-[2rem] border-2 border-brand-500/30 flex flex-col relative shadow-2xl transform md:-translate-y-4">
                    <div className="absolute top-0 right-10 bg-brand-600 text-white text-[10px] font-bold px-4 py-2 rounded-b-xl uppercase tracking-widest">
                        Best Value
                    </div>

                    <div className="mb-8">
                        <h4 className="text-xs font-bold text-brand-400 uppercase tracking-[0.2em] mb-2">Option 02</h4>
                        <h5 className="text-2xl font-bold text-white">Full Partnership</h5>
                    </div>

                    <div className="space-y-8 flex-grow">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">Annual One-Time Investment</p>
                            <div className="text-6xl font-display font-bold text-white mb-2">${annualPrice.toLocaleString()}</div>
                            <p className="text-brand-400 font-bold text-xs uppercase tracking-wider">Zero Monthly Fees for 1 Year</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                                <p className="text-gray-500 text-[10px] uppercase font-bold mb-1">Standard Cost</p>
                                <p className="text-gray-400 line-through font-bold">${firstYearValue.toLocaleString()}</p>
                            </div>
                            <div className="p-4 rounded-xl border border-brand-500/20 bg-brand-500/5">
                                <p className="text-brand-500 text-[10px] uppercase font-bold mb-1">Total Savings</p>
                                <p className="text-brand-500 font-bold">${annualSavings.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>

                    <ul className="space-y-3 mb-10 text-sm text-gray-300 pt-8 border-t border-white/5 mt-8">
                         <li className="flex items-center gap-3">
                            <ShieldCheck className="w-4 h-4 text-brand-500 shrink-0" />
                            Priority Build-out Queue
                        </li>
                        <li className="flex items-center gap-3">
                            <ShieldCheck className="w-4 h-4 text-brand-500 shrink-0" />
                            Unlimited Performance Updates
                        </li>
                         <li className="flex items-center gap-3">
                            <ShieldCheck className="w-4 h-4 text-brand-500 shrink-0" />
                            Bi-Weekly Strategy Sessions
                        </li>
                    </ul>
                </div>
            </div>

            {/* Performance Bar */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-lg border border-gray-200 shadow-sm"><Info className="w-5 h-5 text-gray-400" /></div>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium">
                        All systems include a <span className="text-gray-900 font-bold">14-Day Performance Guarantee</span>. <br/>
                        If implementation milestones aren't hit, we work for free until they are.
                    </p>
                </div>
                <div className="flex items-center gap-4 border-l border-gray-200 pl-6 hidden md:flex">
                     <div className="text-right">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Selected Scope</p>
                        <p className="text-sm font-bold text-gray-900">{count} Systems Active</p>
                     </div>
                </div>
            </div>
        </div>
    );
};