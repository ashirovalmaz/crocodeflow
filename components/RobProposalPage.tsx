
import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { CAL_LINK } from '../constants';
import { ExecutiveSummarySlide } from './proposal_rob/ExecutiveSummarySlide';
import { GoalsSlide } from './proposal_rob/GoalsSlide';
import { TimeEconomicsSlide } from './proposal_rob/TimeEconomicsSlide';
import { BottlenecksOneSlide } from './proposal_rob/BottlenecksOneSlide';
import { BottlenecksTwoSlide } from './proposal_rob/BottlenecksTwoSlide';
import { PathForwardSlide } from './proposal_rob/PathForwardSlide';
import { SolutionsSlide } from './proposal_rob/SolutionsSlide';
import { PitchSlide } from './proposal_rob/PitchSlide';
import { TermsSlide } from './proposal_rob/TermsSlide';
import { BonusSlide } from './proposal_rob/BonusSlide';
import { ClosingSlide } from './proposal_rob/ClosingSlide';

export const RobProposalPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSystems, setSelectedSystems] = useState<string[]>(['sys1']);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.remove('dark');
    
    return () => {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    };
  }, [currentSlide]);

  const PROPOSAL_CONTENT = [
    {
      id: 'executive-summary',
      title: "Executive summary",
      subtitle: "Building a system that works without relying on you",
      content: <ExecutiveSummarySlide />
    },
    {
      id: 'goals',
      title: "Your goals",
      subtitle: "What we heard between the lines",
      content: <GoalsSlide />
    },
    {
      id: 'time-economics',
      title: "Time economics",
      subtitle: "The hidden cost of the current setup",
      content: <TimeEconomicsSlide />
    },
    {
      id: 'problems-1',
      title: "The bottlenecks (1/2)",
      subtitle: "Why the current setup limits growth",
      content: <BottlenecksOneSlide />
    },
    {
      id: 'problems-2',
      title: "The bottlenecks (2/2)",
      subtitle: "Why the current setup limits growth",
      content: <BottlenecksTwoSlide />
    },
    {
      id: 'path-forward',
      title: "The path forward",
      subtitle: "Point A → Point B → Point C",
      content: <PathForwardSlide />
    },
    {
      id: 'solutions',
      title: "Proposed systems",
      subtitle: "AI Architecture",
      content: <SolutionsSlide />
    },
    {
      id: 'pitch',
      title: "Our pitch",
      subtitle: "The Partnership Model",
      content: <PitchSlide />
    },
    {
      id: 'terms',
      title: "Pricing & terms",
      subtitle: "Investment Details",
      content: <TermsSlide selected={selectedSystems} setSelected={setSelectedSystems} />
    },
    {
      id: 'bonus',
      title: "Fast-action bonus",
      subtitle: "24-Hour Opportunity",
      content: <BonusSlide />
    },
    {
      id: 'closing',
      title: "Next steps",
      subtitle: "Let's Get Started",
      content: <ClosingSlide selected={selectedSystems} />
    }
  ];

  const nextSlide = () => {
    if (currentSlide < PROPOSAL_CONTENT.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const progress = ((currentSlide + 1) / PROPOSAL_CONTENT.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors duration-300 flex flex-col">
      <Header isSharedPage={true} hideThemeToggle={true} forcedTheme="light" />
      
      <main className="flex-grow pt-24 pb-12 px-4 md:px-6 flex flex-col items-center">
        <div className="w-full max-w-5xl">
            <div className="mb-8 flex items-center gap-4">
                <span className="text-xs font-mono text-gray-400 w-12 text-right">
                    {currentSlide + 1} / {PROPOSAL_CONTENT.length}
                </span>
                <div className="h-1.5 flex-grow bg-gray-200 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-brand-500 transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden min-h-[600px] flex flex-col relative">
                <div className="p-8 border-b border-gray-100 bg-gray-50/50 backdrop-blur-sm">
                    <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
                        {PROPOSAL_CONTENT[currentSlide].title}
                    </h1>
                    <p className="text-lg text-brand-600 font-medium">
                        {PROPOSAL_CONTENT[currentSlide].subtitle}
                    </p>
                </div>

                <div className="p-8 md:p-12 flex-grow overflow-y-auto">
                    {PROPOSAL_CONTENT[currentSlide].content}
                </div>

                <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-between items-center">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                            currentSlide === 0 
                                ? 'opacity-0 pointer-events-none' 
                                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                        }`}
                    >
                        <ArrowLeft className="w-4 h-4" /> Previous
                    </button>

                    {currentSlide < PROPOSAL_CONTENT.length - 1 && (
                        <button
                            onClick={nextSlide}
                            className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm bg-brand-600 hover:bg-brand-500 text-white shadow-lg hover:shadow-brand-500/25 transition-all"
                        >
                            Next <ArrowRight className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};
