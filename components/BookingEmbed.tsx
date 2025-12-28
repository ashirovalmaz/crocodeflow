import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

interface BookingEmbedProps {
  url: string;
  height?: string;
  className?: string;
}

export const BookingEmbed: React.FC<BookingEmbedProps> = ({ 
  url, 
  height = "600px",
  className = "" 
}) => {
  const [isLoading, setIsLoading] = useState(true);

  // Auto-append embed parameters for common platforms
  const getEmbedUrl = (rawUrl: string) => {
    if (!rawUrl) return "";
    try {
      const urlObj = new URL(rawUrl);
      if (urlObj.hostname.includes('cal.com')) {
        urlObj.searchParams.set('embed', 'true');
        // Support dark mode matching for Cal.com
        const isDark = document.documentElement.classList.contains('dark');
        urlObj.searchParams.set('theme', isDark ? 'dark' : 'light');
      }
      return urlObj.toString();
    } catch (e) {
      return rawUrl;
    }
  };

  const embedUrl = getEmbedUrl(url);

  if (!url) return null;

  return (
    <div className={`relative w-full rounded-xl overflow-hidden bg-white dark:bg-dark-900 border border-gray-200 dark:border-dark-700 shadow-inner ${className}`} style={{ height }}>
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 dark:bg-dark-900 z-10">
          <Loader2 className="w-8 h-8 text-brand-500 animate-spin mb-2" />
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Loading Calendar...</p>
        </div>
      )}
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        onLoad={() => setIsLoading(false)}
        className="w-full h-full"
        allow="camera; microphone; autoplay; encrypted-media;"
      ></iframe>
    </div>
  );
};