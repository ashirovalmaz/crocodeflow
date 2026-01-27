
import React, { useState, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Header } from './Header';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { CAL_LINK } from '../constants';
import { PROPOSALS } from '../data/proposals';
import { ExecutiveSummary } from './proposals/ExecutiveSummary';
import { TermsOfEngagement } from './proposals/TermsOfEngagement';
import { Closing } from './proposals/Closing';

export const ProposalPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = useMemo(() => {
    if (!slug || !PROPOSALS[slug]) return null;
    return PROPOSALS[slug];
  }, [slug]);

  const proposalContent = useMemo(() => {
    if (!data) return [];

    return [
      {
        id: 'executive-summary',
        title: "Executive Summary",
        subtitle: `Scaling ${data.clientName} to $80–100k/mo`,
        content: <ExecutiveSummary data={data} />
      },
      {
        id: 'terms',
        title: "Terms of Engagement",
        subtitle: "Implementation Package",
        content: <TermsOfEngagement data={data} />
      },
      {
        id: 'closing',
        title: "In Closing",
        subtitle: "The Next Steps",
        content: <Closing />
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
