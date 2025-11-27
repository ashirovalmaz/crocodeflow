
import React, { useState } from 'react';
import { Terminal, Send, AlertTriangle, Copy, Check, Bot } from 'lucide-react';
import { CAL_LINK } from '../constants';
import { generateRoast } from '../services/geminiService';

export const ProcessRoast: React.FC = () => {
  const [input, setInput] = useState('');
  const [isRoasting, setIsRoasting] = useState(false);
  const [roastResult, setRoastResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleRoast = async () => {
    if (!input.trim()) return;
    
    setIsRoasting(true);
    setRoastResult(null);

    const result = await generateRoast(input);
    setRoastResult(result);
    setIsRoasting(false);
  };

  const copyRoast = () => {
    if (roastResult) {
      navigator.clipboard.writeText(`My manual process got roasted by CrocodeFlow AI:\n\n"${roastResult}"\n\nhttps://crocodeflow.ai`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="py-24 bg-dark-900 relative overflow-hidden">
       {/* Background noise texture */}
       <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest mb-4">
            <AlertTriangle className="w-3 h-3" /> Warning: Savage Mode On
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Process <span className="text-brand-500">Roast Generator</span>
          </h2>
          <p className="text-gray-400">
            Describe a manual task you hate. Our AI will tell you exactly how ridiculous it is.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="bg-[#1e1e1e] rounded-xl border border-dark-600 shadow-2xl overflow-hidden font-mono text-sm md:text-base">
          {/* Terminal Header */}
          <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-dark-600">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="ml-4 text-gray-500 text-xs flex items-center gap-2">
              <Terminal className="w-3 h-3" /> crocodeflow_roast_cli — v1.0.0
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            
            {/* Input Section */}
            <div>
              <div className="text-brand-500 mb-2 font-bold flex items-center gap-2">
                <span className="animate-pulse">➜</span> Describe the process:
              </div>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g., Every Monday I manually download CSVs from Stripe and paste them into QuickBooks..."
                className="w-full bg-black/30 border border-dark-600 rounded-lg p-4 text-gray-300 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all min-h-[100px] resize-none"
              />
            </div>

            {/* Action Button */}
            {!roastResult && (
              <button
                onClick={handleRoast}
                disabled={!input.trim() || isRoasting}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                  !input.trim() 
                    ? 'bg-dark-700 text-gray-500 cursor-not-allowed'
                    : isRoasting
                      ? 'bg-brand-900/50 text-brand-500 cursor-wait'
                      : 'bg-brand-600 hover:bg-brand-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]'
                }`}
              >
                {isRoasting ? (
                  <>
                    <Bot className="w-4 h-4 animate-spin" /> Analyzing...
                  </>
                ) : (
                  <>Roast Me <Send className="w-4 h-4" /></>
                )}
              </button>
            )}

            {/* Result Area */}
            {roastResult && (
              <div className="animate-slide-up border-t border-dark-700 pt-6 mt-6">
                <div className="text-red-500 font-bold mb-2 flex items-center gap-2">
                  <span className="bg-red-500/20 px-2 py-0.5 rounded text-xs uppercase tracking-wider">Analysis Complete</span>
                </div>
                <div className="text-xl md:text-2xl text-white font-bold leading-relaxed mb-8">
                  "{roastResult}"
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={CAL_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg text-center transition-colors shadow-lg"
                  >
                    Want us to kill this process?
                  </a>
                  
                  <button
                    onClick={copyRoast}
                    className="flex items-center justify-center gap-2 px-6 py-3 border border-dark-600 hover:border-brand-500 text-gray-300 hover:text-white rounded-lg transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-brand-500" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Copied!' : 'Share Roast'}
                  </button>
                </div>
                
                <button 
                  onClick={() => setRoastResult(null)}
                  className="mt-6 text-xs text-dark-400 hover:text-gray-300 underline"
                >
                  Roast another process
                </button>
              </div>
            )}

            {/* Simulated Logs during loading */}
            {isRoasting && (
              <div className="space-y-1 mt-4 font-mono text-xs text-brand-500/70">
                <div>[LOG] Connecting to Neural Core...</div>
                <div className="animate-pulse delay-75">[LOG] Analyzing stupidity levels...</div>
                <div className="animate-pulse delay-150">[LOG] Formulating savage response...</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
