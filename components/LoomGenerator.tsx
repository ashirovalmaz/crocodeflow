import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { Link, Copy, Check, ArrowRight, AlertCircle, Settings, ChevronDown, Eye } from 'lucide-react';
import { LoomPage } from './LoomPage';
import { CAL_LINK } from '../constants';

const DEFAULT_HIGHLIGHTS = "Current bottlenecks analysis\nProposed AI architecture\nROI projection & timeline";

export const LoomGenerator: React.FC = () => {
  const [clientName, setClientName] = useState('');
  const [senderName, setSenderName] = useState(''); // New State
  const [loomUrl, setLoomUrl] = useState('');
  const [themeColor, setThemeColor] = useState('#22c55e'); // Default Brand Green
  const [bookingLink, setBookingLink] = useState('');
  
  // Advanced Customization State
  const [headline, setHeadline] = useState("Prepared for {name}");
  const [description, setDescription] = useState("We analyzed your current workflow. Here is the blueprint to automate it and scale.");
  const [highlights, setHighlights] = useState(DEFAULT_HIGHLIGHTS);
  const [ctaTitle, setCtaTitle] = useState("Ready to execute?");
  const [ctaDesc, setCtaDesc] = useState("Let's discuss the implementation plan and get your automation systems running next week.");
  const [ctaBtn, setCtaBtn] = useState("Book Strategy Call");
  
  // New Customizable Fields
  const [badgeText, setBadgeText] = useState("Private Video Brief");
  const [highlightsTitle, setHighlightsTitle] = useState("Key Takeaways");
  
  const [generatedLink, setGeneratedLink] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  
  const [previewTheme, setPreviewTheme] = useState<'dark' | 'light'>('dark');

  // Sync Preview Theme with Global App Theme
  useEffect(() => {
    const syncTheme = () => {
        const isDark = document.documentElement.classList.contains('dark');
        setPreviewTheme(isDark ? 'dark' : 'light');
    };

    // Initial sync
    syncTheme();

    // Observer for changes
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const extractLoomId = (url: string) => {
    if (!url) return '';
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

    if (senderName.trim()) params.append('from', senderName.trim());
    if (bookingLink.trim()) params.append('booking', bookingLink.trim());
    
    // Only append text params if they differ from defaults to keep URL clean
    if (headline !== "Prepared for {name}") params.append('h1', headline);
    if (description !== "We analyzed your current workflow. Here is the blueprint to automate it and scale.") params.append('desc', description);
    if (highlights !== DEFAULT_HIGHLIGHTS) params.append('list', highlights.split('\n').join('|'));
    if (ctaTitle !== "Ready to execute?") params.append('cta_t', ctaTitle);
    if (ctaDesc !== "Let's discuss the implementation plan and get your automation systems running next week.") params.append('cta_d', ctaDesc);
    if (ctaBtn !== "Book Strategy Call") params.append('cta_b', ctaBtn);
    if (badgeText !== "Private Video Brief") params.append('badge', badgeText);
    if (highlightsTitle !== "Key Takeaways") params.append('list_t', highlightsTitle);

    setGeneratedLink(`${baseUrl}/looms/share?${params.toString()}`);
    
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
      senderName: senderName, // Pass to preview
      videoId: extractLoomId(loomUrl),
      color: themeColor,
      bookingLink: bookingLink || CAL_LINK,
      text: {
          headline,
          description,
          highlights: highlights.split('\n'),
          ctaTitle,
          ctaDescription: ctaDesc,
          ctaButton: ctaBtn,
          badgeText,
          highlightsTitle,
      }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300 flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 px-4 lg:px-6">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-5 flex flex-col py-6 lg:py-10">
            <div className="text-left mb-8">
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                New <span className="text-brand-500">Video Brief</span>
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                Generate a personalized landing page for a prospect.
                </p>
            </div>

            <div className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-2xl p-6 shadow-xl">
                
                <div className="space-y-5">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                             Client Name
                            </label>
                            <input
                            type="text"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            placeholder="e.g. Elon Musk"
                            className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-300 dark:border-dark-600 rounded-lg p-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none"
                            />
                        </div>
                         <div>
                            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                             Your Name / Company
                            </label>
                            <input
                            type="text"
                            value={senderName}
                            onChange={(e) => setSenderName(e.target.value)}
                            placeholder="e.g. Acme Corp"
                            className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-300 dark:border-dark-600 rounded-lg p-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         <div>
                            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                             Brand Color
                            </label>
                            <div className="flex items-center gap-2">
                                <div className="relative overflow-hidden w-full h-[46px] rounded-lg border border-gray-300 dark:border-dark-600 shadow-sm bg-gray-50 dark:bg-dark-900">
                                    <input
                                    type="color"
                                    value={themeColor}
                                    onChange={(e) => setThemeColor(e.target.value)}
                                    className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] cursor-pointer p-0 border-0"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                            Booking Link (Optional)
                            </label>
                            <input
                            type="text"
                            value={bookingLink}
                            onChange={(e) => setBookingLink(e.target.value)}
                            placeholder="e.g. https://cal.com/..."
                            className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-300 dark:border-dark-600 rounded-lg p-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                          Loom Video Link
                        </label>
                        <input
                        type="text"
                        value={loomUrl}
                        onChange={(e) => setLoomUrl(e.target.value)}
                        placeholder="Paste full Loom URL..."
                        className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-300 dark:border-dark-600 rounded-lg p-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none"
                        />
                    </div>
                    
                    {/* Advanced Customization Toggle */}
                    <details className="group border-t border-gray-200 dark:border-dark-700 pt-4">
                        <summary className="flex items-center justify-between cursor-pointer text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-brand-500">
                            <span className="flex items-center gap-2"><Settings className="w-4 h-4" /> Advanced Customization</span>
                            <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                        </summary>
                        
                        <div className="mt-4 space-y-4 pl-1">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Badge Text</label>
                                <input type="text" value={badgeText} onChange={e => setBadgeText(e.target.value)} className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-300 dark:border-dark-600 rounded-lg p-2 text-sm" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Headline</label>
                                <input type="text" value={headline} onChange={e => setHeadline(e.target.value)} className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-300 dark:border-dark-600 rounded-lg p-2 text-sm" />
                                <p className="text-[10px] text-gray-400 mt-1">Use {'{name}'} to insert client name dynamically.</p>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Description</label>
                                <textarea rows={2} value={description} onChange={e => setDescription(e.target.value)} className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-300 dark:border-dark-600 rounded-lg p-2 text-sm resize-none" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Highlights Title</label>
                                <input type="text" value={highlightsTitle} onChange={e => setHighlightsTitle(e.target.value)} className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-300 dark:border-dark-600 rounded-lg p-2 text-sm" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Highlights List (One per line)</label>
                                <textarea rows={3} value={highlights} onChange={e => setHighlights(e.target.value)} className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-300 dark:border-dark-600 rounded-lg p-2 text-sm resize-none" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">CTA Title</label>
                                    <input type="text" value={ctaTitle} onChange={e => setCtaTitle(e.target.value)} className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-300 dark:border-dark-600 rounded-lg p-2 text-sm" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Button Text</label>
                                    <input type="text" value={ctaBtn} onChange={e => setCtaBtn(e.target.value)} className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-300 dark:border-dark-600 rounded-lg p-2 text-sm" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">CTA Description</label>
                                <textarea rows={2} value={ctaDesc} onChange={e => setCtaDesc(e.target.value)} className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-300 dark:border-dark-600 rounded-lg p-2 text-sm resize-none" />
                            </div>
                        </div>
                    </details>


                    {error && (
                        <div className="flex items-center gap-2 text-red-500 text-sm font-bold bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                        <AlertCircle className="w-4 h-4" /> {error}
                        </div>
                    )}

                    <button
                        onClick={handleGenerate}
                        className="w-full py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2 mt-2"
                    >
                        Generate Page <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Result Section */}
                {generatedLink && (
                <div id="generated-result" className="mt-8 pt-6 border-t border-gray-200 dark:border-dark-700 animate-slide-up">
                    <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
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
          <div className="lg:col-span-7 sticky top-24 bg-gray-200 dark:bg-dark-950 rounded-2xl border-4 border-gray-300 dark:border-dark-700 shadow-2xl overflow-hidden flex flex-col h-[calc(100vh-10rem)]">
             <div className="bg-gray-300 dark:bg-dark-800 flex items-center justify-between px-4 py-2 z-20 shrink-0">
                 <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                 </div>
                 <div className="bg-gray-100 dark:bg-dark-900 rounded px-3 py-0.5 text-[10px] text-gray-500 flex items-center gap-1 opacity-70">
                    <Eye className="w-3 h-3" /> Live Preview
                 </div>
                 <div className="w-6"></div>
             </div>
             
             {/* Preview Container */}
             <div className="w-full h-full bg-white dark:bg-dark-900 overflow-y-auto custom-scrollbar relative pb-20">
                 <LoomPage previewData={previewData} themeMode={previewTheme} />
             </div>
          </div>

        </div>
      </main>
    </div>
  );
};