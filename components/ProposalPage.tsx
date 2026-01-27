
import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Header } from './Header';
import { 
    ArrowRight, ArrowLeft, CheckCircle2, Calculator, 
    Check, Target
} from 'lucide-react';
import { CAL_LINK } from '../constants';
import { PROPOSALS, ProposalData } from '../data/proposals';

// --- Internal Components ---

const TermsSlideContent: React.FC<{ data: ProposalData }> = ({ data }) => {
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

    const baseSetup = data.systems.reduce((acc, sys) => selected.includes(sys.id) ? acc + sys.setup : acc, 0);
    const totalMonthly = data.systems.reduce((acc, sys) => selected.includes(sys.id) ? acc + sys.monthly : acc, 0);
    
    const discountAmount = baseSetup * discountPercent;
    const finalSetup = baseSetup - discountAmount;

    const firstYearValue = finalSetup + (totalMonthly * 12);
    const annualPrice = Math.floor((firstYearValue * data.annualFactor) / 100) * 100;
    const annualSavings = firstYearValue - annualPrice;

    return (
        <div className="space-y-8 animate-fade-in max-w-6xl mx-auto">
            <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Select the systems you want to include in your initial implementation. Pricing updates automatically.
            </p>

            <div className="bg-gray-50 dark:bg-dark-800/50 rounded-xl border border-gray-200 dark:border-dark-700 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <Calculator className="w-5 h-5 text-brand-500"/> 
                    <h3 className="font-bold text-gray-700 dark:text-gray-300">Package Customizer</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {data.systems.map((sys) => {
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
                                    <div className="text-xs text-gray-500 dark:text-gray-400">${sys.setup.toLocaleString()} setup</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl border border-gray-200 dark:border-dark-700 flex flex-col shadow-sm">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Standard Engagement</h3>
                    <div className="flex items-baseline gap-2 mb-1">
                        <div className="text-4xl font-display font-bold text-brand-600 dark:text-brand-500">${finalSetup.toLocaleString()}</div>
                        <span className="text-lg font-normal text-gray-500">setup</span>
                    </div>
                    <div className="text-xl text-gray-600 dark:text-gray-400 mb-8">+ ${totalMonthly.toLocaleString()} / mo</div>
                    <ul className="space-y-3 mb-8 flex-grow">
                        {data.systems.filter(s => selected.includes(s.id)).map(sys => (
                            <li key={sys.id} className="flex gap-2 text-sm text-gray-600 dark:text-gray-300">
                                <Check className="w-4 h-4 text-brand-500 shrink-0"/> {sys.title}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-gray-900 dark:bg-black p-8 rounded-2xl border border-brand-500/50 shadow-2xl relative overflow-hidden flex flex-col transform md:-translate-y-4">
                    <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">Best Value</div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-brand-400 mb-2">Annual Engagement</h3>
                    <div className="text-4xl font-display font-bold text-white mb-2">${annualPrice.toLocaleString()}</div>
                    <div className="text-sm text-brand-400 font-bold mb-8 uppercase tracking-wide">Upfront / One-time</div>
                    <div className="space-y-4 mb-8 flex-grow">
                        <div className="flex justify-between items-center text-sm border-b border-gray-800 pb-2">
                            <span className="text-gray-400">Standard 12-Mo Cost</span>
                            <span className="text-gray-500 line-through">${firstYearValue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm bg-brand-500/10 p-2 rounded">
                            <span className="text-brand-400 font-bold">Total Savings</span>
                            <span className="text-brand-400 font-bold">${annualSavings.toLocaleString()}</span>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 text-center">No monthly fees for 12 months.</p>
                </div>
            </div>
        </div>
    );
};

export const ProposalPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = useMemo(() => {
    if (!slug || !PROPOSALS[slug]) return null;
    return PROPOSALS[slug];
  }, [slug]);

  const proposalContent = useMemo(() => {
    if (!data) return [];
    
    // Return original Justin Howells structure for both (duplicate)
    return [
      {
        id: 'executive-summary',
        title: "Executive Summary",
        subtitle: `Scaling ${data.clientName} to $80–100k/mo`,
        content: (
          <div className="space-y-8 animate-fade-in">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                Based on our analysis, we strongly believe your business could be an <strong className="text-brand-600 dark:text-brand-500 font-bold">$80–100k/mo business</strong> with a few focused changes—primarily around how you convert existing attention and leads into booked calls.
              </p>
            </div>
    
            <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 border border-gray-200 dark:border-dark-700 shadow-sm">
              <h3 className="text-lg font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-brand-500" /> Why we believe this
              </h3>
              <ul className="space-y-6">
                {[
                  { title: "High Quality Service", text: "Your clients tend to stay, resign for another term, and see a strong ROI from working with you." },
                  { title: "Deep Market Understanding", text: "You know the language they use and you consistently generate a significant volume of warm leads." },
                  { title: "Massive Audience Reach", text: "With an audience of ~500K followers on Instagram, the opportunity for scale is already there." },
                  { title: "Ethical Approach", text: "You genuinely care about your clients and your team. You’re not trying to “replace humans”, but to give your team leverage." },
                  { title: "Founder Bottleneck", text: "Charismatic and intelligent, but currently the bottleneck. When systems take over the front-end, things scale." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 min-w-[24px]">
                        <div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-500 font-bold text-xs">{i + 1}</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      },
      {
        id: 'terms',
        title: "Terms of Engagement",
        subtitle: "Implementation Package",
        content: <TermsSlideContent data={data} />
      },
      {
        id: 'closing',
        title: "In Closing",
        subtitle: "The Next Steps",
        content: (
          <div className="space-y-12 animate-fade-in max-w-4xl mx-auto flex flex-col items-center pt-12">
            <p className="text-xl text-gray-700 dark:text-gray-300 text-center">
                Scaling becomes a matter of operations, not luck. I am ambitious and deeply committed to building AI systems that generate revenue autonomously.
            </p>
            <a href={CAL_LINK} target="_blank" className="px-10 py-5 bg-brand-600 hover:bg-brand-500 text-white text-xl font-bold rounded-xl shadow-xl transition-all flex items-center gap-3">
                Let's Build It <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        )
      }
    ];
  }, [data]);

  if (!data) return <Navigate to="/" />;

  const progress = ((currentSlide + 1) / proposalContent.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300 flex flex-col">
      <Header isSharedPage={true} />
      
      <main className="flex-grow pt-24 pb-12 px-4 md:px-6 flex flex-col items-center">
        <div className="w-full max-w-5xl">
            <div className="mb-8 flex items-center gap-4">
                <span className="text-xs font-mono text-gray-400 w-12 text-right">{currentSlide + 1} / {proposalContent.length}</span>
                <div className="h-1.5 flex-grow bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-500 transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
                </div>
            </div>

            <div className="bg-white dark:bg-dark-950 rounded-2xl shadow-xl border border-gray-200 dark:border-dark-700 overflow-hidden min-h-[600px] flex flex-col relative">
                <div className="p-8 border-b border-gray-100 dark:border-dark-800 bg-gray-50/50 dark:bg-dark-900/50 backdrop-blur-sm">
                    <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">{proposalContent[currentSlide].title}</h1>
                    <p className="text-lg text-brand-600 dark:text-brand-500 font-medium">{proposalContent[currentSlide].subtitle}</p>
                </div>

                <div className="p-8 md:p-12 flex-grow overflow-y-auto">{proposalContent[currentSlide].content}</div>

                <div className="p-6 border-t border-gray-100 dark:border-dark-800 bg-gray-50 dark:bg-dark-900 flex justify-between items-center">
                    <button
                        onClick={() => currentSlide > 0 && setCurrentSlide(s => s - 1)}
                        disabled={currentSlide === 0}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${currentSlide === 0 ? 'opacity-0' : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100'}`}
                    >
                        <ArrowLeft className="w-4 h-4" /> Previous
                    </button>

                    {currentSlide < proposalContent.length - 1 ? (
                        <button
                            onClick={() => setCurrentSlide(s => s + 1)}
                            className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm bg-brand-600 hover:bg-brand-500 text-white shadow-lg transition-all"
                        >
                            Next <ArrowRight className="w-4 h-4" />
                        </button>
                    ) : (
                         <a href={CAL_LINK} target="_blank" className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm bg-brand-600 hover:bg-brand-500 text-white shadow-lg transition-all">
                            Book Implementation Call <ArrowRight className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};
