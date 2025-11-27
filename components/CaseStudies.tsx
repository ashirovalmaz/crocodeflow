import React, { useState, useEffect } from 'react';
import { ArrowRight, Trophy } from 'lucide-react';
import { CASES } from '../data/cases';
import { CaseStudy } from '../types';
import { CAL_LINK } from '../constants';

interface CaseStudiesProps {
  onCaseClick: (caseStudy: CaseStudy) => void;
}

const CaseStudySkeleton: React.FC = () => (
  <div className="rounded-xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 overflow-hidden shadow-lg dark:shadow-none h-full flex flex-col">
    <div className="h-48 bg-gray-200 dark:bg-dark-700 animate-pulse"></div>
    <div className="p-6 flex flex-col flex-grow space-y-4">
      <div className="flex gap-2">
        <div className="h-4 w-16 bg-gray-200 dark:bg-dark-700 rounded animate-pulse"></div>
        <div className="h-4 w-20 bg-gray-200 dark:bg-dark-700 rounded animate-pulse"></div>
      </div>
      <div className="h-8 w-3/4 bg-gray-200 dark:bg-dark-700 rounded animate-pulse"></div>
      <div className="h-4 w-full bg-gray-200 dark:bg-dark-700 rounded animate-pulse"></div>
      <div className="h-4 w-2/3 bg-gray-200 dark:bg-dark-700 rounded animate-pulse"></div>
      <div className="mt-auto h-4 w-24 bg-brand-500/20 rounded animate-pulse"></div>
    </div>
  </div>
);

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onCaseClick }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900 dark:text-white">
            Battle <span className="text-brand-500">Tested.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Real businesses. Real automation. Real money saved.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <>
            <CaseStudySkeleton />
            <CaseStudySkeleton />
            <CaseStudySkeleton />
          </>
        ) : (
          <>
            {/* Render Existing Cases */}
            {CASES.map((study) => (
              <div 
                key={study.id} 
                onClick={() => onCaseClick(study)}
                className="group cursor-pointer rounded-xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 overflow-hidden hover:border-brand-500 dark:hover:border-brand-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] flex flex-col h-full shadow-lg dark:shadow-none"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur-sm border border-brand-500/30 px-3 py-1 rounded text-xs font-bold text-brand-400 uppercase tracking-wide">
                    {study.result}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-gray-600 dark:text-gray-500 bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {study.shortDescription}
                  </p>

                  <div className="flex items-center text-brand-600 dark:text-brand-500 text-sm font-bold uppercase tracking-wide mt-auto group-hover:gap-2 transition-all">
                    Read Case <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}

            {/* 'Become Our Next Case' CTA Card */}
            <a 
                href={CAL_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-8 rounded-xl bg-gray-50 dark:bg-dark-900/50 border-2 border-dashed border-gray-300 dark:border-dark-600 hover:border-brand-500 dark:hover:border-brand-500 hover:bg-white dark:hover:bg-dark-800/50 transition-all duration-300 h-full min-h-[400px]"
            >
                <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-dark-800 border border-gray-300 dark:border-dark-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-500 transition-all">
                    <Trophy className="w-10 h-10 text-gray-500 dark:text-gray-600 group-hover:text-brand-500 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-2 text-center">
                    Become Our <br /><span className="text-brand-500">Next Case Study</span>
                </h3>
                <p className="text-gray-500 dark:text-gray-500 text-center text-sm mb-8 max-w-xs">
                    We are looking for ambitious companies that want to dominate their market.
                </p>
                <div className="px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg transition-colors shadow-lg group-hover:shadow-brand-500/25 flex items-center gap-2">
                    Apply Now <ArrowRight className="w-4 h-4" />
                </div>
            </a>
          </>
        )}
      </div>
    </div>
  );
};