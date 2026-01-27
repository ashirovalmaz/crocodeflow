
import React, { useState } from 'react';
import { Calculator, Check } from 'lucide-react';
import { SYSTEMS } from '../../data/proposals';

export const TermsSlide: React.FC = () => {
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

    const baseSetup = SYSTEMS.reduce((acc, sys) => selected.includes(sys.id) ? acc + sys.setup : acc, 0);
    const totalMonthly = SYSTEMS.reduce((acc, sys) => selected.includes(sys.id) ? acc + sys.monthly : acc, 0);
    
    const discountAmount = baseSetup * discountPercent;
    const finalSetup = baseSetup - discountAmount;

    const firstYearValue = finalSetup + (totalMonthly * 12);
    const annualPrice = Math.floor((firstYearValue * 0.55) / 100) * 100;
    const annualSavings = firstYearValue - annualPrice;

    return (
        <div className="space-y-8 animate-fade-in max-w-6xl mx-auto">
            <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                To make this simple, low-risk, and fully aligned with your goals, I’m proposing we start with the core system. However, you can customize your implementation package below to include additional acceleration systems immediately.
            </p>

            {/* Customizer */}
            <div className="bg-gray-50 dark:bg-dark-800/50 rounded-xl border border-gray-200 dark:border-dark-700 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <Calculator className="w-5 h-5 text-brand-500"/> 
                    <h3 className="font-bold text-gray-700 dark:text-gray-300">Select Included Systems</h3>
                    <span className="text-xs text-gray-500 ml-auto">Pricing updates automatically below</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {SYSTEMS.map((sys) => {
                        const isSelected = selected.includes(sys.id);
                        return (
                            <div 
                                key={sys.id}
                                onClick={() => toggle(sys.id)}
                                className={`
                                    cursor-pointer rounded-lg p-3 border transition-all duration-200 flex items-start gap-3
                                    ${isSelected 
                                        ? 'bg-white dark:bg-dark-700 border-brand-500 shadow-sm ring-1 ring-brand-500' 
                                        : 'bg-white dark:bg-dark-800 border-gray-200 dark:border-dark-600 opacity-70 hover:opacity-100'
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
                                    <div className="text-sm font-bold text-gray-900 dark:text-white leading-tight mb-1">{sys.title}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">{sys.desc}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Pricing Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Standard Option */}
                <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl border border-gray-200 dark:border-dark-700 flex flex-col shadow-sm">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Option 1</h3>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Standard Engagement</h4>
                    
                    <div className="flex items-baseline gap-2 mb-1">
                        <div className="text-4xl font-display font-bold text-brand-600 dark:text-brand-500">
                            ${finalSetup.toLocaleString()}
                        </div>
                        <span className="text-lg font-normal text-gray-500">setup</span>
                    </div>
                    {discountAmount > 0 && (
                        <div className="text-xs text-brand-600 dark:text-brand-400 font-bold mb-2">
                            Includes ${discountAmount.toLocaleString()} Bundle Discount
                        </div>
                    )}
                    <div className="text-xl text-gray-600 dark:text-gray-400 mb-8">+ ${totalMonthly.toLocaleString()} / month</div>

                    <ul className="space-y-3 mb-8 flex-grow">
                        {SYSTEMS.filter(s => selected.includes(s.id)).map(sys => (
                            <li key={sys.id} className="flex gap-2 text-sm text-gray-600 dark:text-gray-300">
                                <Check className="w-4 h-4 text-brand-500 shrink-0"/> {sys.title}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Annual Option */}
                <div className="bg-gray-900 dark:bg-black p-8 rounded-2xl border border-brand-500/50 shadow-2xl relative overflow-hidden flex flex-col transform md:-translate-y-4">
                    <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                        Best Value
                    </div>
                    
                    <h3 className="text-sm font-bold uppercase tracking-wider text-brand-400 mb-2">Option 2</h3>
                    <h4 className="text-2xl font-bold text-white mb-6">Annual Engagement</h4>
                    
                    <div className="flex items-baseline gap-2 mb-2">
                        <div className="text-4xl font-display font-bold text-white">
                            ${annualPrice.toLocaleString()}
                        </div>
                        <span className="text-lg font-normal text-gray-400">upfront</span>
                    </div>
                    <div className="text-sm text-brand-400 font-bold mb-8 uppercase tracking-wide">
                        ~45% Total Savings
                    </div>

                    <div className="space-y-4 mb-8 flex-grow">
                         <div className="flex justify-between items-center text-sm border-b border-gray-800 pb-2">
                            <span className="text-gray-400">Standard 12-Mo Cost</span>
                            <span className="text-gray-500 line-through">${firstYearValue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm border-b border-gray-800 pb-2">
                            <span className="text-gray-400">Annual Plan Cost</span>
                            <span className="text-white font-bold">${annualPrice.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm bg-brand-500/10 p-2 rounded">
                            <span className="text-brand-400 font-bold">Total Savings</span>
                            <span className="text-brand-400 font-bold">${annualSavings.toLocaleString()}</span>
                        </div>
                    </div>
                    
                    <p className="text-xs text-gray-500 text-center">
                        One-time payment. No monthly fees for 12 months.
                    </p>
                </div>
            </div>
        </div>
    );
};
