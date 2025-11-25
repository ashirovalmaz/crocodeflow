import React, { useState } from 'react';
import { generateBusinessAdvice } from '../services/geminiService';
import { ConsultantResponse } from '../types';
import { Loader2, Zap, DollarSign, Timer } from 'lucide-react';
import { CAL_LINK } from '../constants';

export const AIConsultant: React.FC = () => {
  const [businessInput, setBusinessInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ConsultantResponse | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessInput.trim()) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await generateBusinessAdvice(businessInput);
      if (response) {
        setResult(response);
      } else {
        setError("Our system is overloaded with demand. Try again in a second.");
      }
    } catch (err) {
      setError("Connection error. Refresh and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="bg-dark-900 border border-dark-700 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
        
        {/* Glow Effects */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-500/10 blur-[100px] rounded-full group-hover:bg-brand-500/20 transition-all duration-1000"></div>

        <div className="relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-brand-500/10 rounded-lg mb-4 border border-brand-500/20">
              <Zap className="w-6 h-6 text-brand-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
              The "No-BS" Opportunity Finder
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Tell us what you do. Our AI will brutally analyze where you're wasting money and tell you exactly how to fix it with automation.
            </p>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <textarea
                value={businessInput}
                onChange={(e) => setBusinessInput(e.target.value)}
                placeholder="E.g., I run a logistics company with 10 trucks. My dispatcher spends 6 hours a day on the phone and we miss calls..."
                className="w-full bg-dark-800 border border-dark-600 rounded-xl p-6 text-white placeholder-gray-600 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all min-h-[140px] resize-none font-mono text-sm"
              />
              <button
                type="submit"
                disabled={loading || !businessInput.trim()}
                className={`absolute bottom-4 right-4 px-6 py-2 rounded-lg font-bold text-sm transition-all flex items-center gap-2 ${
                  loading || !businessInput.trim()
                    ? 'bg-dark-700 text-gray-500 cursor-not-allowed'
                    : 'bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-500/20 hover:scale-105'
                }`}
              >
                {loading ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Analyzing...</>
                ) : (
                  'Find My Profit'
                )}
              </button>
            </div>
            {error && <p className="text-red-400 text-sm mt-3 text-center">{error}</p>}
          </form>

          {/* Results Display */}
          {result && (
            <div className="animate-fade-in space-y-8">
              <div className="bg-brand-950/50 border-l-4 border-brand-500 p-6 rounded-r-xl">
                <h3 className="text-brand-400 font-bold uppercase tracking-wider text-xs mb-2">Verdict</h3>
                <p className="text-white text-lg font-medium leading-relaxed">"{result.analysis}"</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {result.suggestions.map((suggestion, idx) => (
                  <div key={idx} className="bg-dark-800 border border-dark-600 rounded-xl p-6 hover:border-brand-500 transition-colors flex flex-col h-full">
                    <div className="mb-4 flex items-start justify-between">
                       <h4 className="text-lg font-bold text-white leading-tight">{suggestion.title}</h4>
                       <span className="text-brand-500 font-bold text-xs bg-brand-500/10 px-2 py-1 rounded">#{idx + 1}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-6 flex-grow">{suggestion.description}</p>
                    
                    <div className="space-y-3 pt-4 border-t border-dark-700">
                        <div className="flex items-center gap-2 text-white font-mono text-xs">
                            <DollarSign className="w-4 h-4 text-brand-500" />
                            <span>{suggestion.estimatedROI}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 font-mono text-xs">
                            <Timer className="w-4 h-4" />
                            <span>{suggestion.implementationTime}</span>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-10">
                <a 
                    href={CAL_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-[0_5px_15px_rgba(255,255,255,0.1)]"
                >
                    Implement This Plan Now
                </a>
                <p className="mt-4 text-xs text-gray-500">Limited spots available for this month.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};