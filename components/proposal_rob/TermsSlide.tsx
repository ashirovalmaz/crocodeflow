
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
    const finalSetup = baseSetup - (baseSetup * discountPercent);

    return (
        <div className="space-y-8 animate-fade-in max-w-6xl mx-auto">
            <div className="bg-gray-50 dark:bg-dark-800/50 rounded-xl border border-gray-200 dark:border-dark-700 p-6">
                <h3 className="font-bold text-gray-700 dark:text-gray-300 mb-4">Choose Your Systems</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {SYSTEMS.map((sys) => (
                        <div 
                            key={sys.id}
                            onClick={() => toggle(sys.id)}
                            className={`cursor-pointer rounded-lg p-3 border transition-all ${selected.includes(sys.id) ? 'bg-white dark:bg-dark-700 border-brand-500' : 'bg-white dark:bg-dark-800 opacity-60'}`}
                        >
                            <div className="text-sm font-bold text-gray-900 dark:text-white">{sys.title}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl border border-gray-200 dark:border-dark-700 shadow-sm">
                    <h4 className="text-2xl font-bold mb-4">Setup: ${finalSetup.toLocaleString()}</h4>
                    <p className="text-xl text-gray-500">+ ${totalMonthly.toLocaleString()} / mo</p>
                </div>
            </div>
        </div>
    );
};
