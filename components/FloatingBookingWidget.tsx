import React, { useState, useEffect } from 'react';
import { Calendar, X, MessageSquare, Sparkles, Zap } from 'lucide-react';
import { BookingEmbed } from './BookingEmbed';
import { CAL_LINK } from '../constants';

export const FloatingBookingWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after a short delay
    const timer = setTimeout(() => {
      if (!isOpen) setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
    if (showTooltip) setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Tooltip / Notification Bubble */}
      {showTooltip && !isOpen && (
        <div className="mb-4 mr-2 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 p-4 rounded-2xl shadow-2xl max-w-[240px] animate-slide-up relative">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900 dark:text-white mb-1">AI Growth Audit</p>
              <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-tight">
                Ready to find your first $10k in automation? Let's chat.
              </p>
            </div>
          </div>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white dark:bg-dark-800 border-r border-b border-gray-200 dark:border-dark-700 rotate-45"></div>
        </div>
      )}

      {/* Pop-up Window */}
      {isOpen && (
        <div className="mb-4 bg-white dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-2xl shadow-2xl w-[90vw] sm:w-[400px] md:w-[450px] overflow-hidden flex flex-col animate-slide-up origin-bottom-right">
          {/* Header */}
          <div className="bg-brand-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-brand-600 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Book Strategy Session</h4>
                <p className="text-[10px] text-brand-100 uppercase tracking-widest font-medium">Online Now</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content (Calendar) */}
          <div className="h-[500px] overflow-hidden">
            <BookingEmbed url={CAL_LINK} height="100%" className="border-none shadow-none rounded-none" />
          </div>

          {/* Footer Branding */}
          <div className="p-3 bg-gray-50 dark:bg-dark-800 border-t border-gray-100 dark:border-dark-700 flex justify-center">
            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest flex items-center gap-1.5">
              Powered by <span className="text-brand-500 font-bold">CrocodeFlow</span>
            </p>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={toggleWidget}
        className={`
          group relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl
          ${isOpen 
            ? 'bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-white rotate-90 scale-90' 
            : 'bg-brand-600 hover:bg-brand-500 text-white hover:scale-110 active:scale-95'
          }
        `}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <Calendar className="w-6 h-6" />
            {/* Pulsing ring */}
            <div className="absolute inset-0 rounded-full bg-brand-500 animate-ping opacity-20 group-hover:opacity-40"></div>
          </>
        )}
        
        {/* "1" Badge for notification look */}
        {!isOpen && !showTooltip && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full border-2 border-white dark:border-dark-900 flex items-center justify-center animate-bounce">
                1
            </div>
        )}
      </button>
    </div>
  );
};