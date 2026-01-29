import React from 'react';
import { User, Rocket, FastForward, CheckCircle2, ArrowRight } from 'lucide-react';

export const PathForwardSlide: React.FC = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="grid grid-cols-1 gap-8 relative">
      {/* Connector Line (Vertical on mobile, logic handled by layout) */}
      <div className="absolute left-[23px] top-8 bottom-8 w-0.5 bg-gray-100 hidden md:block md:left-1/2 md:-translate-x-1/2"></div>

      {/* Point A */}
      <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
        <div className="z-10 w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-red-400 group-hover:text-red-500 transition-all shadow-sm">
          <User className="w-6 h-6" />
        </div>
        <div className="flex-1 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-md transition-all">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Point A — Current reality</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            Your business works because you do. You personally manage DMs, qualification, and early sales conversations.
          </p>
          <div className="flex items-center gap-2 text-[10px] font-bold text-red-600 uppercase tracking-widest bg-red-50 px-2 py-1 rounded w-fit">
            Founder Dependent
          </div>
        </div>
      </div>

      {/* Point B */}
      <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
        <div className="z-10 w-12 h-12 rounded-full bg-white border-2 border-brand-500 flex items-center justify-center text-brand-600 shadow-lg shadow-brand-500/10">
          <Rocket className="w-6 h-6" />
        </div>
        <div className="flex-1 bg-brand-50 p-6 rounded-2xl border border-brand-100 shadow-sm group-hover:shadow-md transition-all">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-brand-900">Point B — System-assisted growth</h3>
            <span className="text-[10px] font-bold bg-brand-500 text-white px-2 py-1 rounded uppercase tracking-tighter">Our Starting Point</span>
          </div>
          <p className="text-sm text-brand-800 leading-relaxed mb-4">
            We automate the repetitive front-end work while improving conversion:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Trigger-based DM conversations",
              "Structured qualification",
              "Personalized private pages",
              "Automated, contextual follow-ups"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-brand-700 font-medium">
                <CheckCircle2 className="w-3 h-3" /> {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs italic text-brand-600 border-t border-brand-200 pt-3">
            You still close calls — but the system does the heavy lifting.
          </p>
        </div>
      </div>

      {/* Point C */}
      <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
        <div className="z-10 w-12 h-12 rounded-full bg-gray-900 border-2 border-gray-800 flex items-center justify-center text-brand-400 group-hover:scale-110 transition-transform">
          <FastForward className="w-6 h-6" />
        </div>
        <div className="flex-1 bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-xl">
          <h3 className="text-lg font-bold text-white mb-2">Point C — System-driven business</h3>
          <p className="text-xs text-brand-400 font-bold uppercase tracking-widest mb-4">Long-Term Vision</p>
          <ul className="space-y-3">
            {[
              "DMs handled by AI + assistant",
              "Sales handled by a closer",
              "Automated feedback, reviews, and client experience",
              "A scalable platform that runs without you being involved daily"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <ArrowRight className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 text-center max-w-xl mx-auto space-y-4">
      <p className="text-gray-500 italic text-sm">
        "Most people stop at Point B. Our role is helping you reach Point C responsibly."
      </p>
    </div>
  </div>
);