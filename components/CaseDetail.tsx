
import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, TrendingUp } from 'lucide-react';
import { CaseStudy } from '../types';
import { CAL_LINK } from '../constants';

interface CaseDetailProps {
  study: CaseStudy;
  onBack: () => void;
}

export const CaseDetail: React.FC<CaseDetailProps> = ({ study, onBack }) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-12 animate-fade-in">
      {/* Navigation */}
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-brand-500 transition-colors text-sm font-bold uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Cases
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 mb-6">
            {study.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-brand-900/20 border border-brand-500/20 rounded-full text-brand-400 text-xs font-bold uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            {study.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light border-l-4 border-brand-500 pl-6 py-2">
            {study.shortDescription}
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden mb-16 relative">
             <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10"></div>
            <img 
                src={study.image} 
                alt={study.title} 
                className="w-full h-full object-cover object-center filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {study.fullStory.results.map((res, idx) => (
                <div key={idx} className="bg-dark-800 border border-dark-700 p-8 rounded-xl text-center relative overflow-hidden group">
                     <div className="absolute inset-0 bg-brand-500/5 group-hover:bg-brand-500/10 transition-colors"></div>
                    <div className="text-4xl md:text-5xl font-bold text-brand-500 mb-2 font-display">{res.value}</div>
                    <div className="text-gray-400 text-sm font-bold uppercase tracking-widest">{res.label}</div>
                </div>
            ))}
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="w-8 h-8 rounded bg-red-500/20 flex items-center justify-center text-red-500 text-sm">01</span>
                        The Problem
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        {study.fullStory.challenge}
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="w-8 h-8 rounded bg-brand-500/20 flex items-center justify-center text-brand-500 text-sm">02</span>
                        The Automation
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        {study.fullStory.solution}
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                         <span className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-500 text-sm">03</span>
                        The Result
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg whitespace-pre-line">
                        {study.fullStory.content}
                    </p>
                </div>
            </div>

            {/* Sticky Sidebar CTA */}
            <div className="lg:col-span-1">
                <div className="sticky top-32 bg-brand-900/10 border border-brand-500/30 rounded-xl p-8 backdrop-blur-sm">
                    <TrendingUp className="w-10 h-10 text-brand-500 mb-6" />
                    <h4 className="text-xl font-bold text-white mb-4">Want these numbers?</h4>
                    <p className="text-gray-400 text-sm mb-6">
                        We can implement this exact workflow for your business in less than 14 days.
                    </p>
                    <a 
                        href={CAL_LINK}
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full py-4 bg-brand-600 hover:bg-brand-500 text-white text-center font-bold rounded-lg transition-all shadow-lg hover:shadow-brand-500/25"
                    >
                        Book Implementation Call
                    </a>
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                        <CheckCircle2 className="w-3 h-3" /> No Hiring Required
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
