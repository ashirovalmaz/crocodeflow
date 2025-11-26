
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CASES } from '../data/cases';
import { CaseStudy } from '../types';

interface CaseStudiesProps {
  onCaseClick: (caseStudy: CaseStudy) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onCaseClick }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Battle <span className="text-brand-500">Tested.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Real businesses. Real automation. Real money saved.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CASES.map((study) => (
          <div 
            key={study.id} 
            onClick={() => onCaseClick(study)}
            className="group cursor-pointer rounded-xl bg-dark-800 border border-dark-700 overflow-hidden hover:border-brand-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] flex flex-col h-full"
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
                  <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-gray-500 bg-dark-700 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-brand-500 transition-colors">
                {study.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {study.shortDescription}
              </p>

              <div className="flex items-center text-brand-500 text-sm font-bold uppercase tracking-wide mt-auto group-hover:gap-2 transition-all">
                Read Case <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
