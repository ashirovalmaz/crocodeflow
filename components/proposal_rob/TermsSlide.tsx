
import React from 'react';
import { Calculator, Check, Zap, TrendingDown } from 'lucide-react';

export const ROB_SYSTEMS = [
  { id: 'sys1', title: 'AI DM Foundation + Presentations', desc: 'Core conversion engine & custom asset generator', setup: 2900, monthly: 790, priority: 'Core P1' },
  { id: 'sys2', title: 'Automated Newsletter', desc: 'Highly personalized emails using CRM data', setup: 2400, monthly: 650, priority: 'High P2' },
  { id: 'sys3', title: 'Personalized Reactivation', desc: 'Monetizes non-buyers and no-shows automatically', setup: 1900, monthly: 550, priority: 'High P2' },
  { id: 'sys4', title: 'Content Intelligence', desc: 'Competitor analysis and content scripting engine', setup: 1500, monthly: 450, priority: 'High P3' },
  { id: 'sys5', title: 'Client App / Dashboard', desc: 'LTV, Retention & Engagement tracking', setup: 4500, monthly: 850, priority: 'Premium P4' }
];

interface TermsSlideProps {
    selected: string[];
    setSelected: (ids: string[]) => void;
}

export const TermsSlide: React.FC<TermsSlideProps> = ({ selected, setSelected }) => {
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
        <div className="space-y-8 animate-fade-in max-w-6xl mx-auto">
            <p className="text-center text-gray-600 max-w-3xl mx-auto">
                Select your implementation package. Pricing updates automatically based on the systems you include in the roadmap.
            </p>

            {/* Customizer */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <Calculator className="w-5 h-5 text-brand-500"/> 
                    <h3 className="font-bold text-gray-700">Customize Roadmap</h3>
                    <span className="text-xs text-gray-500 ml-auto font-medium">Bundling 2+ systems applies a <span className="text-brand-600 font-bold">significant setup discount</span></span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {ROB_SYSTEMS.map((sys) => {
                        const isSelected = selected.includes(sys.id);
                        return (
                            <div 
                                key={sys.id}
                                onClick={() => toggle(sys.id)}
                                className={`
                                    cursor-pointer rounded-lg p-3 border transition-all duration-200 flex items-start gap-3
                                    ${isSelected 
                                        ? 'bg-white border-brand-500 shadow-sm ring-1 ring-brand-500' 
                                        : 'bg-white border-gray-200 opacity-70 hover:opacity-100'
                                    }
                                `}
                            >
                                <div className={`
                                    w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center transition-colors mt-0.5
                                    ${isSelected ? 'bg-brand-500 border-brand-500' : 'border-gray-400'}
                                `}>
                                    {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-900 leading-tight mb-1">{sys.title}</div>
                                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{sys.priority}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Pricing Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Standard Option */}
                <div className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col shadow-sm">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Option 1</h3>
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Standard Engagement</h4>
                    
                    <div className="flex items-baseline gap-2 mb-4">
                        <div className="text-4xl font-display font-bold text-brand-600">
                            ${finalSetup.toLocaleString()}
                        </div>
                        <span className="text-lg font-normal text-gray-500">setup</span>
                    </div>

                    {discountAmount > 0 && (
                        <div className="mb-6 animate-slide-up">
                            <div className="inline-flex flex-col gap-1 px-4 py-2.5 rounded-xl bg-brand-600 text-white shadow-xl shadow-brand-500/20 border border-brand-400">
                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                                    <Zap className="w-3 h-3 fill-white" /> Bundle Discount Applied
                                </div>
                                <div className="text-lg font-bold">Save ${discountAmount.toLocaleString()}</div>
                            </div>
                        </div>
                    )}

                    <div className="text-xl text-gray-600 mb-8">+ ${totalMonthly.toLocaleString()} / month</div>

                    <ul className="space-y-3 mb-8 flex-grow border-t border-gray-50 pt-6">
                        {ROB_SYSTEMS.filter(s => selected.includes(s.id)).map(sys => (
                            <li key={sys.id} className="flex gap-2 text-sm text-gray-600">
                                <Check className="w-4 h-4 text-brand-500 shrink-0"/> {sys.title}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Annual Option */}
                <div className="bg-gradient-to-br from-brand-900 to-emerald-950 p-8 rounded-2xl border border-brand-500/50 shadow-2xl relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 bg-brand-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-widest z-10">
                        Recommended
                    </div>
                    
                    <h3 className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-2">Option 2</h3>
                    <h4 className="text-xl font-bold text-white mb-6">Annual Engagement</h4>
                    
                    <div className="flex items-baseline gap-2 mb-2">
                        <div className="text-4xl font-display font-bold text-white">
                            ${annualPrice.toLocaleString()}
                        </div>
                        <span className="text-lg font-normal text-gray-400">upfront</span>
                    </div>
                    <div className="text-sm text-brand-400 font-bold mb-8 uppercase tracking-wide flex items-center gap-2">
                        <TrendingDown className="w-4 h-4" /> ~45% Total Savings Included
                    </div>

                    <div className="space-y-4 mb-8 flex-grow">
                         <div className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                            <span className="text-gray-400">Standard 12-Mo Cost</span>
                            <span className="text-gray-500 line-through">${firstYearValue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                            <span className="text-gray-400">Annual Plan Cost</span>
                            <span className="text-white font-bold">${annualPrice.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm bg-brand-500/20 p-3 rounded-xl border border-brand-500/30">
                            <span className="text-brand-300 font-bold uppercase text-[10px] tracking-widest">Total Value Saved</span>
                            <span className="text-white font-bold text-xl">${annualSavings.toLocaleString()}</span>
                        </div>
                    </div>
                    
                    <p className="text-[10px] text-brand-400/80 text-center font-bold uppercase tracking-widest">
                        One-time payment. No monthly fees for 12 months.
                    </p>
                </div>
            </div>
        </div>
    );
};
