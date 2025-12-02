import React, { useState } from 'react';
import { Header } from './Header';
import { 
  Link, Copy, Check, ArrowRight, AlertCircle, Settings, ChevronDown, Eye, Moon, Sun,
  User, Building2, Palette, Video, Calendar, Sparkles, Wand2, ExternalLink, Type, Quote, List, MessageSquare
} from 'lucide-react';
import { LoomPage } from './LoomPage';

const DEFAULT_HIGHLIGHTS = "Current bottlenecks analysis\nProposed AI architecture\nROI projection & timeline";

export const LoomGenerator: React.FC = () => {
  const [clientName, setClientName] = useState('');
  const [senderName, setSenderName] = useState('');
  const [loomUrl, setLoomUrl] = useState('');
  const [themeColor, setThemeColor] = useState('#22c55e');
  const [bookingLink, setBookingLink] = useState('');
  
  // Advanced Customization State
  const [headline, setHeadline] = useState("Prepared for {name}");
  const [description, setDescription] = useState("We analyzed your current workflow. Here is the blueprint to automate it and scale.");
  const [highlights, setHighlights] = useState(DEFAULT_HIGHLIGHTS);
  const [ctaTitle, setCtaTitle] = useState("Ready to execute?");
  const [ctaDesc, setCtaDesc] = useState("Let's discuss the implementation plan and get your automation systems running next week.");
  const [ctaBtn, setCtaBtn] = useState("Book Strategy Call");
  
  const [badgeText, setBadgeText] = useState("Private Video Brief");
  const [highlightsTitle, setHighlightsTitle] = useState("Key Takeaways");
  
  const [generatedLink, setGeneratedLink] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  
  const [previewTheme, setPreviewTheme] = useState<'dark' | 'light'>('dark');

  const extractLoomId = (url: string) => {
    if (!url) return '';
    const match = url.match(/[a-f0-9]{32}/);
    return match ? match[0] : '';
  };

  const handleSenderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (val.length <= 30) {
          setSenderName(val);
      }
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

    const baseUrl = window.location.origin;
    const params = new URLSearchParams({
      name: clientName,
      id: videoId,
      color: themeColor,
      theme: previewTheme,
    });

    if (senderName.trim()) params.append('from', senderName.trim());
    if (bookingLink.trim()) params.append('booking', bookingLink.trim());
    
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

  const previewData = {
      name: clientName || "Client Name",
      senderName: senderName,
      videoId: extractLoomId(loomUrl),
      color: themeColor,
      bookingLink: bookingLink,
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
      
      <main className="flex-grow pt-24 px-4 lg:px-8 pb-12">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-start">
          
          {/* Left Column: Editor Form */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="text-left">
                <h1 className="text-2xl md:text-3xl font-display font-bold mb-2 flex items-center gap-3">
                    <span className="p-2 bg-brand-500/10 rounded-lg text-brand-500"><Wand2 className="w-6 h-6" /></span>
                    New Video Brief
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 ml-12">
                    Create a high-converting personalized page in seconds.
                </p>
            </div>

            <div className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 space-y-8">
                    
                    {/* Section 1: Core Identity */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                            <span>Identity</span>
                            <span className="flex-grow h-px bg-gray-100 dark:bg-dark-700"></span>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="relative group">
                                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-1.5 block">Client Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand-500 transition-colors" />
                                    <input
                                        type="text"
                                        value={clientName}
                                        onChange={(e) => setClientName(e.target.value)}
                                        placeholder="e.g. Elon Musk"
                                        className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="flex justify-between items-center mb-1.5">
                                    <label className="text-xs font-bold text-gray-500 dark:text-gray-400">Sender Name / Company</label>
                                    <span className={`text-[10px] ${senderName.length >= 30 ? 'text-red-500' : 'text-gray-400'}`}>
                                        {senderName.length}/30
                                    </span>
                                </div>
                                <div className="relative">
                                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand-500 transition-colors" />
                                    <input
                                        type="text"
                                        value={senderName}
                                        onChange={handleSenderNameChange}
                                        placeholder="e.g. CrocodeFlow"
                                        className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Branding */}
                    <div className="space-y-4">
                         <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                            <span>Branding</span>
                            <span className="flex-grow h-px bg-gray-100 dark:bg-dark-700"></span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 dark:text-gray-400">Accent Color</label>
                                <div className="h-[46px] w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl p-1.5 flex items-center gap-3 cursor-pointer relative overflow-hidden group hover:border-brand-500/50 transition-colors">
                                    <div 
                                        className="w-8 h-8 rounded-lg shadow-sm ring-1 ring-black/5"
                                        style={{ backgroundColor: themeColor }}
                                    ></div>
                                    <span className="text-xs font-mono text-gray-600 dark:text-gray-300 font-medium uppercase tracking-wide">{themeColor}</span>
                                    <input
                                        type="color"
                                        value={themeColor}
                                        onChange={(e) => setThemeColor(e.target.value)}
                                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 dark:text-gray-400">Preview Theme</label>
                                <div className="flex bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl p-1 h-[46px]">
                                    <button 
                                        onClick={() => setPreviewTheme('light')} 
                                        className={`flex-1 rounded-lg flex items-center justify-center gap-1.5 text-xs font-bold transition-all ${previewTheme === 'light' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
                                    >
                                        <Sun className="w-3.5 h-3.5" />
                                    </button>
                                    <button 
                                        onClick={() => setPreviewTheme('dark')} 
                                        className={`flex-1 rounded-lg flex items-center justify-center gap-1.5 text-xs font-bold transition-all ${previewTheme === 'dark' ? 'bg-dark-700 shadow-sm text-white' : 'text-gray-400 hover:text-gray-200'}`}
                                    >
                                        <Moon className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Content Assets */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                            <span>Assets</span>
                            <span className="flex-grow h-px bg-gray-100 dark:bg-dark-700"></span>
                        </div>

                        <div className="space-y-4">
                             <div className="relative group">
                                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-1.5 block">Booking Link (Optional)</label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand-500 transition-colors" />
                                    <input
                                        type="text"
                                        value={bookingLink}
                                        onChange={(e) => setBookingLink(e.target.value)}
                                        placeholder="https://cal.com/your-link"
                                        className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                                <p className="text-[10px] text-gray-400 mt-1 pl-1">Leave empty to hide the CTA section entirely.</p>
                            </div>

                            <div className="relative group">
                                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-1.5 block">Loom Video Link</label>
                                <div className="relative">
                                    <Video className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand-500 transition-colors" />
                                    <input
                                        type="text"
                                        value={loomUrl}
                                        onChange={(e) => setLoomUrl(e.target.value)}
                                        placeholder="https://www.loom.com/share/..."
                                        className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Advanced Customization */}
                    <div className="border-t border-gray-100 dark:border-dark-700 pt-4">
                        <details className="group">
                            <summary className="flex items-center justify-between cursor-pointer p-3 rounded-xl bg-gray-50 dark:bg-dark-900/50 hover:bg-gray-100 dark:hover:bg-dark-900 transition-colors select-none">
                                <span className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300">
                                    <Settings className="w-4 h-4 text-gray-500" /> Advanced Customization
                                </span>
                                <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
                            </summary>
                            
                            <div className="mt-4 space-y-5 px-1 animate-fade-in">
                                {/* Header Text */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                                        <Type className="w-3 h-3" /> Header
                                    </div>
                                    <div className="grid grid-cols-1 gap-3 pl-2 border-l-2 border-gray-100 dark:border-dark-700 ml-1">
                                         <div className="space-y-1">
                                            <label className="text-[10px] font-bold uppercase text-gray-500">Badge Text</label>
                                            <input type="text" value={badgeText} onChange={e => setBadgeText(e.target.value)} className="w-full bg-transparent border-b border-gray-200 dark:border-dark-700 py-1.5 text-xs focus:border-brand-500 outline-none transition-colors" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold uppercase text-gray-500">Headline</label>
                                            <input type="text" value={headline} onChange={e => setHeadline(e.target.value)} className="w-full bg-transparent border-b border-gray-200 dark:border-dark-700 py-1.5 text-xs focus:border-brand-500 outline-none transition-colors" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold uppercase text-gray-500">Description</label>
                                            <textarea rows={2} value={description} onChange={e => setDescription(e.target.value)} className="w-full bg-transparent border-b border-gray-200 dark:border-dark-700 py-1.5 text-xs focus:border-brand-500 outline-none transition-colors resize-none leading-relaxed" />
                                        </div>
                                    </div>
                                </div>

                                {/* List Content */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                                        <List className="w-3 h-3" /> Highlights
                                    </div>
                                    <div className="grid grid-cols-1 gap-3 pl-2 border-l-2 border-gray-100 dark:border-dark-700 ml-1">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold uppercase text-gray-500">Section Title</label>
                                            <input type="text" value={highlightsTitle} onChange={e => setHighlightsTitle(e.target.value)} className="w-full bg-transparent border-b border-gray-200 dark:border-dark-700 py-1.5 text-xs focus:border-brand-500 outline-none transition-colors" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold uppercase text-gray-500">List Items (One per line)</label>
                                            <textarea rows={3} value={highlights} onChange={e => setHighlights(e.target.value)} className="w-full bg-transparent border-b border-gray-200 dark:border-dark-700 py-1.5 text-xs focus:border-brand-500 outline-none transition-colors resize-none leading-relaxed" />
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Content */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                                        <MessageSquare className="w-3 h-3" /> Call to Action
                                    </div>
                                    <div className="grid grid-cols-1 gap-3 pl-2 border-l-2 border-gray-100 dark:border-dark-700 ml-1">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-bold uppercase text-gray-500">Card Title</label>
                                                <input type="text" value={ctaTitle} onChange={e => setCtaTitle(e.target.value)} className="w-full bg-transparent border-b border-gray-200 dark:border-dark-700 py-1.5 text-xs focus:border-brand-500 outline-none transition-colors" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-bold uppercase text-gray-500">Button Text</label>
                                                <input type="text" value={ctaBtn} onChange={e => setCtaBtn(e.target.value)} className="w-full bg-transparent border-b border-gray-200 dark:border-dark-700 py-1.5 text-xs focus:border-brand-500 outline-none transition-colors" />
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold uppercase text-gray-500">Card Description</label>
                                            <textarea rows={2} value={ctaDesc} onChange={e => setCtaDesc(e.target.value)} className="w-full bg-transparent border-b border-gray-200 dark:border-dark-700 py-1.5 text-xs focus:border-brand-500 outline-none transition-colors resize-none leading-relaxed" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* Action Button */}
                    <div className="space-y-4 pt-4">
                        {error && (
                            <div className="flex items-center gap-2 text-red-500 text-xs font-bold bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-500/20">
                                <AlertCircle className="w-4 h-4" /> {error}
                            </div>
                        )}

                        <button
                            onClick={handleGenerate}
                            className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-all shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.23)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group"
                        >
                            Generate Page <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Result Card */}
                    {generatedLink && (
                        <div id="generated-result" className="pt-6 border-t border-gray-100 dark:border-dark-700 animate-slide-up">
                            <div className="bg-brand-50 dark:bg-brand-900/10 border border-brand-200 dark:border-brand-500/20 rounded-xl p-5 space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-brand-700 dark:text-brand-400 uppercase tracking-wider flex items-center gap-2">
                                        <Link className="w-3.5 h-3.5" /> Your Link is Ready
                                    </span>
                                    <span className="flex items-center gap-1.5 text-[10px] text-brand-600/70 font-mono">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span> Live
                                    </span>
                                </div>
                                <div className="bg-white dark:bg-dark-950 border border-gray-200 dark:border-dark-800 rounded-lg p-3 text-xs font-mono text-gray-500 break-all select-all shadow-inner">
                                    {generatedLink}
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={copyToClipboard}
                                        className="flex-1 py-2.5 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 hover:border-brand-500 dark:hover:border-brand-500 text-gray-700 dark:text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 text-xs shadow-sm"
                                    >
                                        {copied ? <Check className="w-3.5 h-3.5 text-brand-500" /> : <Copy className="w-3.5 h-3.5" />}
                                        {copied ? 'Copied' : 'Copy Link'}
                                    </button>
                                    <a 
                                        href={generatedLink} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="flex-1 py-2.5 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 text-xs shadow-sm"
                                    >
                                        Open Page <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
          </div>

          {/* Right Column: Live Preview */}
          <div className="lg:col-span-8 sticky top-24 h-[calc(100vh-6rem)]">
             <div className="h-full bg-gray-100 dark:bg-dark-950 rounded-2xl border-4 border-gray-200 dark:border-dark-800 shadow-2xl overflow-hidden flex flex-col">
                 <div className="bg-white dark:bg-dark-900 border-b border-gray-200 dark:border-dark-800 flex items-center justify-between px-4 py-3 z-20 shrink-0">
                     <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-dark-700"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-dark-700"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-dark-700"></div>
                     </div>
                     <div className="bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded px-3 py-1 text-[10px] font-mono text-gray-400 flex items-center gap-1.5">
                        <Eye className="w-3 h-3" /> Live Preview
                     </div>
                     <div className="w-10"></div>
                 </div>
                 
                 {/* Preview Container */}
                 <div className="w-full h-full bg-gray-50 dark:bg-dark-900 overflow-y-auto custom-scrollbar relative">
                     <LoomPage previewData={previewData} themeMode={previewTheme} />
                 </div>
              </div>
          </div>

        </div>
      </main>
    </div>
  );
};