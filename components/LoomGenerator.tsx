import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { 
  Link, Copy, Check, ArrowRight, AlertCircle, Settings, Eye, Moon, Sun,
  User, Building2, Palette, Video, Calendar, Sparkles, Wand2, ExternalLink, 
  Type, MessageSquare, Layout, FileText, MousePointer2
} from 'lucide-react';
import { LoomPage } from './LoomPage';

const DEFAULT_HIGHLIGHTS = "Current bottlenecks analysis\nProposed AI architecture\nROI projection & timeline";

type TabType = 'setup' | 'messaging' | 'design' | 'action';
type VideoPlatform = 'loom' | 'youtube' | 'vimeo' | 'drive' | 'vidyard' | 'wistia' | 'unknown';

export const LoomGenerator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('setup');
  
  // State
  const [clientName, setClientName] = useState('');
  const [senderName, setSenderName] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [themeColor, setThemeColor] = useState('#22c55e');
  const [bookingLink, setBookingLink] = useState('');
  
  // Messaging State
  const [headline, setHeadline] = useState("Prepared for {name}");
  const [description, setDescription] = useState("We analyzed your current workflow. Here is the blueprint to automate it and scale.");
  const [highlights, setHighlights] = useState(DEFAULT_HIGHLIGHTS);
  const [badgeText, setBadgeText] = useState("Private Video Brief");
  const [highlightsTitle, setHighlightsTitle] = useState("Key Takeaways");
  
  // CTA State
  const [ctaTitle, setCtaTitle] = useState("Ready to execute?");
  const [ctaDesc, setCtaDesc] = useState("Let's discuss the implementation plan and get your automation systems running next week.");
  const [ctaBtn, setCtaBtn] = useState("Book Strategy Call");
  
  // Meta State
  const [generatedLink, setGeneratedLink] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const [previewTheme, setPreviewTheme] = useState<'dark' | 'light'>('dark');

  const detectVideoData = (url: string): { id: string; type: VideoPlatform } => {
    if (!url) return { id: '', type: 'unknown' };

    // Loom
    const loomMatch = url.match(/(?:loom\.com\/share\/|loom\.com\/embed\/)([a-f0-9]{32})/);
    if (loomMatch) return { id: loomMatch[1], type: 'loom' };

    // YouTube
    const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    if (ytMatch) return { id: ytMatch[1], type: 'youtube' };

    // Vimeo
    const vimeoMatch = url.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/);
    if (vimeoMatch) return { id: vimeoMatch[1], type: 'vimeo' };

    // Google Drive
    const driveMatch = url.match(/(?:drive\.google\.com\/file\/d\/|drive\.google\.com\/open\?id=)([a-zA-Z0-9_-]+)/);
    if (driveMatch) return { id: driveMatch[1], type: 'drive' };

    // Vidyard
    const vidyardMatch = url.match(/(?:vidyard\.com\/(?:watch|share)\/|play\.vidyard\.com\/)([a-zA-Z0-9_-]+)/);
    if (vidyardMatch) return { id: vidyardMatch[1], type: 'vidyard' };

    // Wistia
    const wistiaMatch = url.match(/(?:wistia\.com\/medias\/|fast\.wistia\.net\/embed\/iframe\/)([a-z0-9]+)/);
    if (wistiaMatch) return { id: wistiaMatch[1], type: 'wistia' };

    return { id: '', type: 'unknown' };
  };

  const handleGenerate = () => {
    setError('');
    setGeneratedLink('');

    if (!clientName.trim() || !videoUrl.trim()) {
      setError('Please fill in Client Name and Video URL.');
      setActiveTab('setup');
      return;
    }

    const { id, type } = detectVideoData(videoUrl);
    if (!id || type === 'unknown') {
      setError('Unsupported or invalid Video URL. Check if it is a share link.');
      setActiveTab('setup');
      return;
    }

    const baseUrl = window.location.origin;
    const params = new URLSearchParams({
      name: clientName,
      id: id,
      vtype: type,
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
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const { id: previewId, type: previewType } = detectVideoData(videoUrl);

  const previewData = {
      name: clientName || "Client Name",
      senderName: senderName,
      videoId: previewId,
      videoType: previewType,
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
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300 flex flex-col overflow-hidden">
      <Header />
      
      <main className="flex-grow pt-20 px-4 lg:px-6 pb-6 flex flex-col h-[calc(100vh-80px)]">
        <div className="max-w-[1920px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-stretch">
          
          {/* Editor Sidebar */}
          <div className="lg:col-span-4 flex flex-col bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-2xl shadow-xl overflow-hidden h-full">
            
            {/* Sidebar Navigation */}
            <div className="flex border-b border-gray-100 dark:border-dark-700 bg-gray-50/50 dark:bg-dark-900/50">
              {[
                { id: 'setup', icon: Layout, label: 'Setup' },
                { id: 'messaging', icon: FileText, label: 'Messaging' },
                { id: 'design', icon: Palette, label: 'Design' },
                { id: 'action', icon: MousePointer2, label: 'Action' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`flex-1 py-4 flex flex-col items-center gap-1 transition-all relative ${
                    activeTab === tab.id 
                      ? 'text-brand-600 dark:text-brand-500 bg-white dark:bg-dark-800' 
                      : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                  }`}
                >
                  <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'animate-pulse' : ''}`} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">{tab.label}</span>
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-500"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Scrollable Form Content */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6 custom-scrollbar">
              
              {activeTab === 'setup' && (
                <div className="space-y-5 animate-fade-in">
                  <div className="space-y-4">
                    <div className="relative group">
                      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">Client Identity</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand-500 transition-colors" />
                        <input
                          type="text"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="Client Name (e.g. Acme Corp)"
                          className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="relative group">
                      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">Sender Name / Company</label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand-500 transition-colors" />
                        <input
                          type="text"
                          value={senderName}
                          onChange={(e) => setSenderName(e.target.value.slice(0, 30))}
                          placeholder="Your Brand Name"
                          className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="relative group">
                      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">Video URL</label>
                      <div className="relative">
                        <Video className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand-500 transition-colors" />
                        <input
                          type="text"
                          value={videoUrl}
                          onChange={(e) => setVideoUrl(e.target.value)}
                          placeholder="YouTube, Loom, Vimeo, Drive..."
                          className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      <p className="mt-2 text-[10px] text-gray-500">Supports: Loom, YouTube, Vimeo, Wistia, Vidyard, Google Drive.</p>
                      {previewType !== 'unknown' && videoUrl && (
                        <div className="mt-2 flex items-center gap-1.5">
                            <Check className="w-3 h-3 text-green-500" />
                            <span className="text-[10px] font-bold uppercase text-green-600">{previewType} detected</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'messaging' && (
                <div className="space-y-5 animate-fade-in">
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block">Badge Text</label>
                      <input 
                        type="text" 
                        value={badgeText} 
                        onChange={e => setBadgeText(e.target.value)} 
                        className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none" 
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block">Headline</label>
                      <input 
                        type="text" 
                        value={headline} 
                        onChange={e => setHeadline(e.target.value)} 
                        className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none" 
                      />
                      <p className="text-[10px] text-gray-400 italic">Use {"{name}"} to auto-inject the client name.</p>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block">Description</label>
                      <textarea 
                        rows={3} 
                        value={description} 
                        onChange={e => setDescription(e.target.value)} 
                        className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none resize-none" 
                      />
                    </div>

                    <div className="pt-4 border-t border-gray-100 dark:border-dark-700">
                      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-1.5">Takeaways Section</label>
                      <input 
                        type="text" 
                        value={highlightsTitle} 
                        onChange={e => setHighlightsTitle(e.target.value)} 
                        className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none mb-3" 
                        placeholder="Section Title"
                      />
                      <textarea 
                        rows={4} 
                        value={highlights} 
                        onChange={e => setHighlights(e.target.value)} 
                        className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none resize-none" 
                        placeholder="Items (One per line)"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'design' && (
                <div className="space-y-6 animate-fade-in">
                   <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block">Accent Color</label>
                      <div className="grid grid-cols-5 gap-3 mb-4">
                        {['#22c55e', '#3b82f6', '#8b5cf6', '#ef4444', '#f59e0b'].map(color => (
                          <button
                            key={color}
                            onClick={() => setThemeColor(color)}
                            className={`w-full aspect-square rounded-full transition-all ${themeColor === color ? 'ring-4 ring-brand-500/30 border-2 border-white dark:border-dark-900' : 'hover:scale-110'}`}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <div className="h-[46px] w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl p-1.5 flex items-center gap-3 relative overflow-hidden group">
                          <div className="w-8 h-8 rounded-lg shadow-sm" style={{ backgroundColor: themeColor }}></div>
                          <span className="text-xs font-mono text-gray-500 font-medium uppercase">{themeColor}</span>
                          <input
                              type="color"
                              value={themeColor}
                              onChange={(e) => setThemeColor(e.target.value)}
                              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                          />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block">Global Mode</label>
                      <div className="flex bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl p-1 h-[48px]">
                        <button 
                          onClick={() => setPreviewTheme('light')} 
                          className={`flex-1 rounded-lg flex items-center justify-center gap-2 text-xs font-bold transition-all ${previewTheme === 'light' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                          <Sun className="w-4 h-4" /> Light Mode
                        </button>
                        <button 
                          onClick={() => setPreviewTheme('dark')} 
                          className={`flex-1 rounded-lg flex items-center justify-center gap-2 text-xs font-bold transition-all ${previewTheme === 'dark' ? 'bg-dark-700 shadow-sm text-white' : 'text-gray-400 hover:text-gray-200'}`}
                        >
                          <Moon className="w-4 h-4" /> Dark Mode
                        </button>
                      </div>
                    </div>
                </div>
              )}

              {activeTab === 'action' && (
                <div className="space-y-5 animate-fade-in">
                   <div className="space-y-4">
                    <div className="relative group">
                      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">Booking URL</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand-500 transition-colors" />
                        <input
                          type="text"
                          value={bookingLink}
                          onChange={(e) => setBookingLink(e.target.value)}
                          placeholder="https://cal.com/your-name"
                          className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 dark:border-dark-700 space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block">Card Title</label>
                        <input 
                          type="text" 
                          value={ctaTitle} 
                          onChange={e => setCtaTitle(e.target.value)} 
                          className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none" 
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block">Card Description</label>
                        <textarea 
                          rows={2} 
                          value={ctaDesc} 
                          onChange={e => setCtaDesc(e.target.value)} 
                          className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none resize-none" 
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block">Button Label</label>
                        <input 
                          type="text" 
                          value={ctaBtn} 
                          onChange={e => setCtaBtn(e.target.value)} 
                          className="w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="p-6 bg-gray-50 dark:bg-dark-900/50 border-t border-gray-100 dark:border-dark-700">
               {error && (
                  <div className="flex items-center gap-2 text-red-500 text-[11px] font-bold bg-red-50 dark:bg-red-900/20 p-2.5 rounded-lg border border-red-200 dark:border-red-500/20 mb-4">
                      <AlertCircle className="w-3.5 h-3.5" /> {error}
                  </div>
              )}

              <button
                onClick={handleGenerate}
                className="w-full py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-brand-500/30 flex items-center justify-center gap-2 group"
              >
                Generate Link <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </button>

              {generatedLink && (
                  <div className="mt-4 animate-slide-up space-y-3">
                      <div className="bg-white dark:bg-dark-950 border border-gray-200 dark:border-dark-800 rounded-xl p-3 text-[10px] font-mono text-gray-500 break-all select-all shadow-inner relative group">
                          {generatedLink}
                          <div className="absolute inset-0 bg-white/10 dark:bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                             <span className="text-[8px] uppercase tracking-widest bg-black text-white px-2 py-1 rounded">Triple click to select all</span>
                          </div>
                      </div>
                      <div className="flex gap-2">
                          <button
                            onClick={copyToClipboard}
                            className="flex-1 py-2.5 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 hover:border-brand-500 dark:hover:border-brand-500 text-gray-700 dark:text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-xs"
                          >
                            {copied ? <Check className="w-3.5 h-3.5 text-brand-500" /> : <Copy className="w-3.5 h-3.5" />}
                            {copied ? 'Copied' : 'Copy'}
                          </button>
                          <a 
                            href={generatedLink} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex-1 py-2.5 bg-brand-600/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 hover:bg-brand-600 hover:text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-xs"
                          >
                            View <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                      </div>
                  </div>
              )}
            </div>
          </div>

          {/* Preview Canvas */}
          <div className="lg:col-span-8 flex flex-col h-full min-h-0">
             <div className="flex-grow bg-gray-100 dark:bg-dark-950 rounded-2xl border-4 border-gray-200 dark:border-dark-800 shadow-2xl overflow-hidden flex flex-col relative min-h-0">
                 
                 {/* Browser Chrome UI */}
                 <div className="bg-white dark:bg-dark-900 border-b border-gray-200 dark:border-dark-800 flex items-center justify-between px-4 py-2.5 z-20 shrink-0">
                     <div className="flex gap-1.5 w-20">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                     </div>
                     <div className="flex-grow max-w-md bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded px-3 py-1 text-[10px] font-mono text-gray-400 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-brand-500/20 border border-brand-500/30"></div>
                        crocodeflow.ai/preview
                     </div>
                     <div className="flex justify-end gap-3 w-20">
                         <div className="flex items-center gap-1.5 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                            <Eye className="w-3 h-3" /> Preview
                         </div>
                     </div>
                 </div>
                 
                 {/* The Page Itself - Now with correct scroll container and min-h-0 */}
                 <div className="flex-grow overflow-y-auto custom-scrollbar relative min-h-0">
                     <LoomPage previewData={previewData} themeMode={previewTheme} />
                 </div>
                 
                 {/* Mobile Toggle Hint (Overlay) */}
                 <div className="absolute bottom-4 right-4 z-30 lg:hidden">
                    <button className="p-3 bg-brand-600 text-white rounded-full shadow-2xl">
                        <Eye className="w-5 h-5" />
                    </button>
                 </div>
              </div>
          </div>

        </div>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.1);
          border-radius: 10px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #22c55e;
        }
      `}</style>
    </div>
  );
};