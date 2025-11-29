import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Link, Copy, Check, Video, User, ArrowRight, AlertCircle, Palette, Calendar, Eye } from 'lucide-react';
import { LoomPage } from './LoomPage';
import { CAL_LINK } from '../constants';

export const LoomGenerator: React.FC = () => {
  const [clientName, setClientName] = useState('');
  const [loomUrl, setLoomUrl] = useState('');
  const [themeColor, setThemeColor] = useState('#22c55e'); // Default Brand Green
  const [bookingLink, setBookingLink] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const extractLoomId = (url: string) => {
    if (!url) return '';
    // Basic regex to find the 32-character hex ID in a Loom URL
    const match = url.match(/[a-f0-9]{32}/);
    return match ? match[0] : '';
  };

  const handleGenerate = () => {
    setError('');
    setGeneratedLink('');

    if (!clientName.trim() || !loomUrl.trim()) {
      setError('Please fill in Name and Loom URL.');
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
      color: themeColor,
    });

    if (bookingLink.trim()) {
      params.append('booking', bookingLink.trim());
    }

    setGeneratedLink(`${baseUrl}/looms/share?${params.toString()}`);
    
    // Scroll to result on mobile
    if (window.innerWidth < 1024) {
        setTimeout(() => {
            const el = document.getElementById('generated-result');
            el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Preview Data Object
  const previewData = {
      name: clientName || "Client Name",
      videoId: extractLoomId(loomUrl),
      color: themeColor,
      bookingLink: bookingLink || CAL_LINK
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300 flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 px-4 lg:px-6">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 h-full min-h-[800px]">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-4 flex flex-col justify-center py-10">
            <div className="text-left mb-10">
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                New <span className="text-brand-500">Video Brief</span>
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                Generate a personalized landing page for a prospect. See the real-time preview on the right.
                </p>
            </div>

            <div className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-2xl p-6 shadow-xl">
                
                <div className="space-y-5">
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
                    className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-300 dark:border-dark-600 rounded-lg p-3 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
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
                    placeholder="Paste the full Loom URL..."
                    className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-300 dark:border-dark-600 rounded-lg p-3 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    />
                </div>

                {/* Booking Link Input */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-500" /> Booking Link (Optional)
                    </label>
                    <input
                    type="text"
                    value={bookingLink}
                    onChange={(e) => setBookingLink(e.target.value)}
                    placeholder="e.g. https://cal.com/your-name/30min"
                    className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-300 dark:border-dark-600 rounded-lg p-3 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    />
                </div>

                {/* Color Picker */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                    <Palette className="w-4 h-4 text-brand-500" /> Brand Color
                    </label>
                    <div className="flex items-center gap-4">
                    <div className="relative overflow-hidden w-12 h-12 rounded-lg border border-gray-300 dark:border-dark-600 shadow-inner">
                        <input
                        type="color"
                        value={themeColor}
                        onChange={(e) => setThemeColor(e.target.value)}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] p-0 m-0 border-none cursor-pointer"
                        />
                    </div>
                    <div className="flex-1">
                        <p className="font-mono text-xs text-gray-500 bg-gray-100 dark:bg-dark-900 px-2 py-1 rounded w-fit">{themeColor}</p>
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
                    className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2 mt-4"
                >
                    Generate Page <ArrowRight className="w-4 h-4" />
                </button>
                </div>

                {/* Result Section */}
                {generatedLink && (
                <div id="generated-result" className="mt-8 pt-6 border-t border-gray-200 dark:border-dark-700 animate-slide-up">
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                    <Link className="w-4 h-4 text-brand-500" /> Your Custom Link
                    </label>
                    
                    <div className="flex flex-col gap-3">
                    <div className="w-full bg-brand-50 dark:bg-brand-900/10 border border-brand-200 dark:border-brand-500/20 rounded-lg p-3 text-xs text-gray-600 dark:text-gray-300 font-mono break-all">
                        {generatedLink}
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={copyToClipboard}
                            className="flex-1 px-4 py-2 bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-600 hover:border-brand-500 text-gray-700 dark:text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 text-sm"
                        >
                            {copied ? <Check className="w-4 h-4 text-brand-500" /> : <Copy className="w-4 h-4" />}
                            {copied ? 'Copied' : 'Copy'}
                        </button>
                        <a 
                            href={generatedLink} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex-1 px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 text-sm"
                        >
                             Open <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                    </div>
                </div>
                )}
            </div>
          </div>

          {/* Right Column: Live Preview */}
          <div className="lg:col-span-8 bg-gray-200 dark:bg-dark-950 rounded-3xl p-2 lg:p-4 my-4 lg:my-10 border-4 border-gray-300 dark:border-dark-700 relative shadow-2xl overflow-hidden flex flex-col">
             <div className="absolute top-0 left-0 right-0 h-8 bg-gray-300 dark:bg-dark-800 flex items-center px-4 gap-2 z-20">
                 <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                 </div>
                 <div className="bg-gray-100 dark:bg-dark-900 rounded px-3 py-0.5 text-[10px] text-gray-500 flex items-center gap-1 mx-auto w-1/2 justify-center opacity-70">
                    <Eye className="w-3 h-3" /> Live Preview
                 </div>
             </div>
             
             {/* Preview Container - Scaled if needed, or scrollable */}
             <div className="w-full h-full bg-white dark:bg-dark-900 rounded-b-2xl overflow-y-auto mt-4 custom-scrollbar relative">
                 <LoomPage previewData={previewData} />
             </div>
          </div>

        </div>
      </main>
    </div>
  );
};