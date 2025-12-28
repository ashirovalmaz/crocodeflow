import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, X, Sparkles, Volume2 } from 'lucide-react';
import { BookingEmbed } from './BookingEmbed';
import { CAL_LINK } from '../constants';

export const FloatingBookingWidget: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const hasPlayedSound = useRef(false);

  // Get dynamic text from URL or use defaults
  const title = searchParams.get('cta_t') || "Ready to execute?";
  const description = searchParams.get('cta_d') || "Select a time below to discuss the implementation plan and get your systems running.";

  // Function to play a clean notification sound
  const playNotificationSound = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(880, audioCtx.currentTime); // A5
      oscillator.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.5); // A4

      gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, audioCtx.currentTime + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);

      oscillator.start(audioCtx.currentTime);
      oscillator.stop(audioCtx.currentTime + 0.5);
    } catch (e) {
      console.log("Audio playback failed (interaction required)");
    }
  };

  useEffect(() => {
    // Show tooltip after a short delay
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowTooltip(true);
        if (!hasPlayedSound.current) {
          playNotificationSound();
          hasPlayedSound.current = true;
        }
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
    if (showTooltip) setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Tooltip / Notification Bubble - LARGER SIZE */}
      {showTooltip && !isOpen && (
        <div className="mb-6 mr-2 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] max-w-[320px] animate-slide-up relative group">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-brand-500 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center shrink-0 shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="pr-4">
              <p className="text-sm font-bold text-gray-900 dark:text-white mb-1.5 leading-tight">
                {title}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                {description}
              </p>
            </div>
          </div>
          
          {/* Status Indicator */}
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-dark-700 flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Team is Online</span>
          </div>

          {/* Arrow */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white dark:bg-dark-800 border-r border-b border-gray-200 dark:border-dark-700 rotate-45"></div>
        </div>
      )}

      {/* Pop-up Window */}
      {isOpen && (
        <div className="mb-4 bg-white dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-2xl shadow-2xl w-[90vw] sm:w-[400px] md:w-[500px] overflow-hidden flex flex-col animate-slide-up origin-bottom-right">
          {/* Header */}
          <div className="bg-brand-600 p-5 text-white flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center border border-white/30 backdrop-blur-sm">
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-brand-600 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-base font-bold leading-tight">Strategy Session</h4>
                <p className="text-[11px] text-brand-100 uppercase tracking-widest font-bold mt-0.5">Calendly Active</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-xl transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content (Calendar) */}
          <div className="h-[550px] overflow-hidden">
            <BookingEmbed url={CAL_LINK} height="100%" className="border-none shadow-none rounded-none" />
          </div>

          {/* Footer Branding */}
          <div className="p-4 bg-gray-50 dark:bg-dark-800 border-t border-gray-100 dark:border-dark-700 flex justify-center">
            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2">
              Built with <span className="text-brand-500">CrocodeFlow AI</span>
            </p>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={toggleWidget}
        className={`
          group relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl
          ${isOpen 
            ? 'bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-white rotate-90 scale-90' 
            : 'bg-brand-600 hover:bg-brand-500 text-white hover:scale-110 active:scale-95'
          }
        `}
      >
        {isOpen ? (
          <X className="w-8 h-8" />
        ) : (
          <>
            <Calendar className="w-7 h-7" />
            {/* Pulsing ring */}
            <div className="absolute inset-0 rounded-full bg-brand-500 animate-ping opacity-20 group-hover:opacity-40"></div>
          </>
        )}
        
        {/* "1" Badge */}
        {!isOpen && !showTooltip && (
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-[11px] font-bold rounded-full border-2 border-white dark:border-dark-900 flex items-center justify-center animate-bounce shadow-lg">
                1
            </div>
        )}
      </button>
    </div>
  );
};