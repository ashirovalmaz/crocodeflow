import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Link, Copy, Check, Video, User, ArrowRight, AlertCircle, Palette } from 'lucide-react';

export const LoomGenerator: React.FC = () => {
  const [clientName, setClientName] = useState('');
  const [loomUrl, setLoomUrl] = useState('');
  const [themeColor, setThemeColor] = useState('#22c55e'); // Default Brand Green
  const [generatedLink, setGeneratedLink] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const extractLoomId = (url: string) => {
    // Basic regex to find the 32-character hex ID in a Loom URL
    const match = url.match(/[a-f0-9]{32}/);
    return match ? match[0] : null;
  };

  const handleGenerate = () => {
    setError('');
    setGeneratedLink('');

    if (!clientName.trim() || !loomUrl.trim()) {
      setError('Please fill in both fields.');
      return;
    }

    const videoId = extractLoomId(loomUrl);
    if (!videoId) {
      setError('Could not find a valid Video ID in that Loom URL.');
      return;
    }

    // Construct the dynamic URL
    const baseUrl = window.location.origin;
    const params = new URLSearchParams({
      name: clientName,
      id: videoId,
      color: themeColor
    });

    setGeneratedLink(`${baseUrl}/looms/share?${params.toString()}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300 flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-24 px-6 flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full mx-auto">
          
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
              New <span className="text-brand-500">Video Brief</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Generate a personalized landing page for a prospect in seconds.
            </p>
          </div>

          <div className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-2xl p-8 shadow-xl">
            
            <div className="space-y-6">
              {/* Client Name Input */}
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-brand-500" /> Client Name
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Elon Musk"
                  className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-300 dark:border-dark-600 rounded-lg p-4 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                />
              </div>

              {/* Loom URL Input */}
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <Video className="w-4 h-4 text-brand-500" /> Loom Video Link
                </label>
                <input
                  type="text"
                  value={loomUrl}
                  onChange={(e) => setLoomUrl(e.target.value)}
                  placeholder="Paste the full Loom URL here..."
                  className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-300 dark:border-dark-600 rounded-lg p-4 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                />
                <p className="text-xs text-gray-500 mt-2">
                  We'll extract the ID automatically.
                </p>
              </div>

              {/* Color Picker */}
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <Palette className="w-4 h-4 text-brand-500" /> Brand Color
                </label>
                <div className="flex items-center gap-4">
                  <div className="relative overflow-hidden w-16 h-16 rounded-xl border border-gray-300 dark:border-dark-600 shadow-inner">
                    <input
                      type="color"
                      value={themeColor}
                      onChange={(e) => setThemeColor(e.target.value)}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] p-0 m-0 border-none cursor-pointer"
                    />
                  </div>
                  <div className="flex-1">
                     <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Select the primary accent color for this specific page.</p>
                     <p className="font-mono text-xs text-gray-500">{themeColor}</p>
                  </div>
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-500 text-sm font-bold bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                  <AlertCircle className="w-4 h-4" /> {error}
                </div>
              )}

              <button
                onClick={handleGenerate}
                className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2"
              >
                Generate Page <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Result Section */}
            {generatedLink && (
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-700 animate-slide-up">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <Link className="w-4 h-4 text-brand-500" /> Your Custom Link
                </label>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-grow bg-brand-50 dark:bg-brand-900/10 border border-brand-200 dark:border-brand-500/20 rounded-lg p-4 text-sm text-gray-600 dark:text-gray-300 font-mono break-all">
                    {generatedLink}
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="shrink-0 px-6 py-3 bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-600 hover:border-brand-500 text-gray-700 dark:text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 min-w-[120px]"
                  >
                    {copied ? <Check className="w-4 h-4 text-brand-500" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>

                <div className="mt-4 text-center">
                  <a 
                    href={generatedLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-brand-600 dark:text-brand-500 text-sm font-bold hover:underline"
                  >
                    Test Link in New Tab
                  </a>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};