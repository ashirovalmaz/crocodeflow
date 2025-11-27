import React, { useState, useEffect } from 'react';
import { Quote, ArrowUpRight } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  role: string;
  result: string;
  company: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    text: "We were burning $15k/mo on lead gen agencies. CrocodeFlow replaced them with one bot.",
    author: "Alex V.",
    role: "Founder",
    company: "TechScale",
    result: "+$45k MRR",
  },
  {
    text: "I didn't believe the '24/7' claim until I woke up to 12 booked meetings on a Sunday.",
    author: "Sarah J.",
    role: "VP Sales",
    company: "CloudForce",
    result: "60hrs Saved/mo",
  },
  {
    text: "Our support costs dropped 70% in week one. The AI answers better than our junior staff.",
    author: "Mike T.",
    role: "Director",
    company: "Shopify Plus Brand",
    result: "-70% OpEx",
  },
  {
    text: "They don't just write code. They understand P&L. Best investment we made this year.",
    author: "David K.",
    role: "Owner",
    company: "Luxury Estates",
    result: "2x Conversion",
  },
  {
    text: "ROI was positive by day 14. We are now scaling to new markets without hiring.",
    author: "Jessica L.",
    role: "CMO",
    company: "FinTech Corp",
    result: "10x ROI",
  },
  {
    text: "The lead enrichment is scary good. Our closers only talk to qualified buyers now.",
    author: "Tom H.",
    role: "Head of Growth",
    company: "SaaS Unicorn",
    result: "100% Quality Leads",
  },
  {
    text: "Scaled from 10 to 50 clients. Zero new hires. Pure profit margin expansion.",
    author: "Rachel P.",
    role: "COO",
    company: "Agency X",
    result: "5x Growth",
  },
  {
    text: "Fastest implementation I've seen. We were live and printing money in 8 days.",
    author: "Chris M.",
    role: "CEO",
    company: "StartUp Inc",
    result: "8 Day Launch",
  },
  {
    text: "It's not just automation; it's a competitive advantage. We are crushing our rivals.",
    author: "Daniel R.",
    role: "Founder",
    company: "Logistics Co",
    result: "+22% Margin",
  },
];

const TestimonialCard: React.FC<{ t: Testimonial }> = ({ t }) => (
  <div className="mb-6 p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm hover:border-brand-500/50 transition-all duration-300 group shadow-lg dark:shadow-none flex flex-col gap-4">
    {/* Header with Result Badge */}
    <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-dark-700 dark:to-dark-600 flex items-center justify-center text-gray-600 dark:text-gray-300 font-bold text-sm">
                {t.author.charAt(0)}
            </div>
            <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">{t.author}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{t.role}, {t.company}</p>
            </div>
        </div>
        <div className="bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 px-2 py-1 rounded text-xs font-bold text-brand-700 dark:text-brand-400 flex items-center gap-1">
            {t.result} <ArrowUpRight className="w-3 h-3" />
        </div>
    </div>

    {/* Quote */}
    <div className="relative">
        <Quote className="absolute -top-1 -left-1 w-4 h-4 text-gray-300 dark:text-dark-700 transform -scale-x-100 opacity-50" />
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed pl-4">
            {t.text}
        </p>
    </div>
  </div>
);

const TestimonialSkeleton: React.FC = () => (
    <div className="mb-6 p-6 rounded-2xl bg-white dark:bg-dark-800/50 border border-gray-100 dark:border-dark-700 h-[200px] flex flex-col gap-4 animate-pulse">
        <div className="flex justify-between">
            <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-dark-700"></div>
                <div className="space-y-2">
                    <div className="w-20 h-3 bg-gray-200 dark:bg-dark-700 rounded"></div>
                    <div className="w-16 h-2 bg-gray-200 dark:bg-dark-700 rounded"></div>
                </div>
            </div>
            <div className="w-16 h-6 bg-gray-200 dark:bg-dark-700 rounded"></div>
        </div>
        <div className="flex-1 space-y-2 mt-2">
             <div className="w-full h-3 bg-gray-200 dark:bg-dark-700 rounded"></div>
             <div className="w-5/6 h-3 bg-gray-200 dark:bg-dark-700 rounded"></div>
             <div className="w-4/6 h-3 bg-gray-200 dark:bg-dark-700 rounded"></div>
        </div>
    </div>
);

export const Testimonials: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Split testimonials into 3 columns
  const col1 = [...TESTIMONIALS.slice(0, 3), ...TESTIMONIALS.slice(0, 3)];
  const col2 = [...TESTIMONIALS.slice(3, 6), ...TESTIMONIALS.slice(3, 6)];
  const col3 = [...TESTIMONIALS.slice(6, 9), ...TESTIMONIALS.slice(6, 9)];

  return (
    <div className="py-24 bg-gray-50 dark:bg-dark-900 border-y border-gray-200 dark:border-dark-800 transition-colors duration-300 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row items-end justify-between gap-6 relative z-10">
        <div className="max-w-2xl">
           <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900 dark:text-white">
            Wall of <span className="text-brand-500">Wins</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            We don't collect "nice feedback". We collect ROI metrics.
          </p>
        </div>
        <div className="hidden md:block">
             <div className="px-4 py-2 rounded-full border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-xs font-mono text-gray-500">
                Verified Client Results
             </div>
        </div>
      </div>

      {/* Grid Container */}
      <div className="relative h-[600px] max-w-7xl mx-auto overflow-hidden px-6">
        
        {/* Gradients to mask top/bottom */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 dark:from-dark-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 dark:from-dark-900 to-transparent z-10 pointer-events-none"></div>

        {loading ? (
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="hidden md:block space-y-6"><TestimonialSkeleton /><TestimonialSkeleton /></div>
                <div className="space-y-6"><TestimonialSkeleton /><TestimonialSkeleton /></div>
                <div className="hidden md:block space-y-6"><TestimonialSkeleton /><TestimonialSkeleton /></div>
           </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Column 1 - Slow */}
                <div className="hidden md:block space-y-6 animate-scroll-up [animation-duration:45s] hover:[animation-play-state:paused]">
                    {col1.map((t, i) => <TestimonialCard key={`c1-${i}`} t={t} />)}
                </div>

                {/* Column 2 - Faster (Main Mobile Column) */}
                <div className="space-y-6 animate-scroll-up [animation-duration:35s] hover:[animation-play-state:paused]">
                    {col2.map((t, i) => <TestimonialCard key={`c2-${i}`} t={t} />)}
                    {/* Duplicate col2 for mobile infinite feel if needed, though scroll-up handles it */}
                </div>

                {/* Column 3 - Medium */}
                <div className="hidden md:block space-y-6 animate-scroll-up [animation-duration:50s] hover:[animation-play-state:paused]">
                    {col3.map((t, i) => <TestimonialCard key={`c3-${i}`} t={t} />)}
                </div>
            </div>
        )}
      </div>
    </div>
  );
};