import React, { useState } from 'react';
import { Calculator, Check, Zap, TrendingDown, Info, X, Target, Zap as ZapIcon, Database } from 'lucide-react';

export const ROB_SYSTEMS = [
  { 
    id: 'sys1', 
    title: 'AI DM Foundation + Presentations', 
    desc: 'Core conversion engine & custom asset generator', 
    longDesc: 'Our flagship system. It instantly interacts with leads via DMs or comments, qualifies them through intelligent conversation, and generates a personalized PDF presentation tailored to their specific goals and blockers. This significantly boosts booking rates and show-up quality by making prospects feel personally attended to before the call even starts.',
    setup: 2900, 
    monthly: 790, 
    priority: 'Core P1' 
  },
  { 
    id: 'sys2', 
    title: 'Automated Newsletter', 
    desc: 'Highly personalized emails using CRM data', 
    longDesc: 'Scales your authority and keeps you top-of-mind. We use your CRM data to send context-aware emails that aren\'t generic blasts, but personalized updates based on lead status and interests. This maintains a consistent nurture flow without any manual writing from the founder.',
    setup: 2400, 
    monthly: 650, 
    priority: 'High P2' 
  },
  { 
    id: 'sys3', 
    title: 'Personalized Reactivation', 
    desc: 'Monetizes non-buyers and no-shows automatically', 
    longDesc: 'Recovers lost revenue from your existing database. The system identifies leads who didn\'t buy or flaked on calls and reaches out with personalized reactivation sequences based on their previous chat history. It turns "dead" leads back into high-intent bookings.',
    setup: 1900, 
    monthly: 550, 
    priority: 'High P2' 
  },
  { 
    id: 'sys4', 
    title: 'Content Intelligence', 
    desc: 'Competitor analysis and content scripting engine', 
    longDesc: 'Cuts content creation time by 80%. This system analyzes high-performing competitor content, spots trends, and generates scripts or "viral hooks" in your unique voice. It ensures every post is strategically engineered to drive traffic into your DM automation funnel.',
    setup: 1500, 
    monthly: 450, 
    priority: 'High P3' 
  },
  { 
    id: 'sys5', 
    title: 'Client App / Dashboard', 
    desc: 'LTV, Retention & Engagement tracking', 
    longDesc: 'Elevates the client experience to premium levels. A branded hub for your clients to track progress, access resources, and receive milestone notifications. This increases perceived value, improves retention rates, and grows long-term Lifetime Value (LTV).',
    setup: 4500, 
    monthly: 850, 
    priority: 'Premium P4' 
  }
];

interface TermsSlideProps {
    selected: string[];
    setSelected: (ids: string[]) => void;
}

export const TermsSlide: React.FC<TermsSlideProps> = ({ selected, setSelected }) => {
    const [infoId, setInfoId] = useState<string | null>(null);

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
        <div className="space-y-8 animate-fade-in max-w-6xl mx-auto relative">
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
                                className={`
                                    relative rounded-xl p-3 border transition-all duration-200 flex flex-col group
                                    ${isSelected 
                                        ? 'bg-white border-brand-500 shadow-sm ring-1 ring-brand-500' 
                                        : 'bg-white border-gray-200 opacity-70 hover:opacity-100'
                                    }
                                `}
                            >
                                <div className="flex items-start gap-3 flex-grow cursor-pointer" onClick={() => toggle(sys.id)}>
                                    <div className={`
                                        w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center transition-colors mt-0.5
                                        ${isSelected ? 'bg-brand-500 border-brand-500' : 'border-gray-400'}
                                    `}>
                                        {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                                    </div>
                                    <div className="pr-6">
                                        <div className="text-sm font-bold text-gray-900 leading-tight mb-1">{sys.title}</div>
                                        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{sys.priority}</div>
                                    </div>
                                </div>
                                
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setInfoId(sys.id);
                                    }}
                                    className="absolute top-3 right-3 p-1.5 text-gray-300 hover:text-brand-500 hover:bg-brand-50 rounded-lg transition-all"
                                    title="View system details"
                                >
                                    <Info className="w-4 h-4" />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Detailed Info Modal */}
            {infoId && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setInfoId(null)}>
                    <div 
                        className="bg-white rounded-3xl shadow-2xl border border-gray-200 max-w-xl w-full p-8 relative animate-slide-up"
                        onClick={e => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setInfoId(null)}
                            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        
                        {(() => {
                            const sys = ROB_SYSTEMS.find(s => s.id === infoId);
                            if (!sys) return null;
                            return (
                                <>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600">
                                            <Info className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-2xl text-gray-900 leading-tight">{sys.title}</h3>
                                            <p className="text-xs text-brand-600 font-bold uppercase tracking-widest mt-1">{sys.priority} Roadmap Priority</p>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-[11px] font-bold uppercase text-gray-400 mb-2 tracking-widest">System Overview</h4>
                                            <p className="text-gray-600 leading-relaxed text-base">
                                                {sys.longDesc}
                                            </p>
                                        </div>
                                        
                                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="text-sm font-bold text-gray-900">Setup Fee</span>
                                                <span className="text-lg font-bold text-brand-600">${sys.setup.toLocaleString()} USD</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm font-bold text-gray-900">Monthly Support</span>
                                                <span className="text-lg font-bold text-brand-600">${sys.monthly.toLocaleString()} USD</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 flex gap-3">
                                        <button 
                                            onClick={() => setInfoId(null)}
                                            className="flex-1 py-3 px-6 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors"
                                        >
                                            Close
                                        </button>
                                        <button 
                                            onClick={() => {
                                                if (!selected.includes(sys.id)) toggle(sys.id);
                                                setInfoId(null);
                                            }}
                                            className="flex-[2] py-3 px-6 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-500 transition-all shadow-lg shadow-brand-500/20"
                                        >
                                            {selected.includes(sys.id) ? 'Keep System' : 'Add to Package'}
                                        </button>
                                    </div>
                                </>
                            );
                        })()}
                    </div>
                </div>
            )}

            {/* Pricing Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Standard Option */}
                <div className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col shadow-sm">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Option 1</h3>
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Standard Engagement</h4>
                    
                    <div className="flex items-baseline gap-2 mb-4">
                        <div className="text-4xl font-display font-bold text-brand-600">
                            ${finalSetup.toLocaleString()} USD
                        </div>
                        <span className="text-lg font-normal text-gray-500">setup</span>
                    </div>

                    {discountAmount > 0 && (
                        <div className="mb-6 animate-slide-up">
                            <div className="inline-flex flex-col gap-1 px-4 py-2.5 rounded-xl bg-brand-600 text-white shadow-xl shadow-brand-500/20 border border-brand-400">
                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                                    <Zap className="w-3 h-3 fill-white" /> Bundle Discount Applied
                                </div>
                                <div className="text-lg font-bold flex items-center gap-2">
                                    Save ${discountAmount.toLocaleString()} USD
                                    <span className="text-[11px] bg-white/20 px-2 py-0.5 rounded-full font-black">-{Math.round(discountPercent * 100)}%</span>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="text-xl text-gray-600 mb-8">+ ${totalMonthly.toLocaleString()} USD / month</div>

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
                            ${annualPrice.toLocaleString()} USD
                        </div>
                        <span className="text-lg font-normal text-gray-400">upfront</span>
                    </div>
                    <div className="text-sm text-brand-400 font-bold mb-8 uppercase tracking-wide flex items-center gap-2">
                        <TrendingDown className="w-4 h-4" /> ~45% Total Savings Included
                    </div>

                    <div className="space-y-4 mb-8 flex-grow">
                         <div className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                            <span className="text-gray-400">Standard 12-Mo Cost</span>
                            <span className="text-gray-500 line-through">${firstYearValue.toLocaleString()} USD</span>
                        </div>
                        <div className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                            <span className="text-gray-400">Annual Plan Cost</span>
                            <span className="text-white font-bold">${annualPrice.toLocaleString()} USD</span>
                        </div>
                        <div className="flex justify-between items-center text-sm bg-brand-500/20 p-3 rounded-xl border border-brand-500/30">
                            <span className="text-brand-300 font-bold uppercase text-[10px] tracking-widest">Total Value Saved</span>
                            <span className="text-white font-bold text-xl">${annualSavings.toLocaleString()} USD</span>
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