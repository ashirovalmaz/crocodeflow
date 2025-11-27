import React, { useState, useEffect } from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  role: string;
  result: string;
}

const TESTIMONIALS_ROW_1: Testimonial[] = [
  {
    text: "I was skeptical. But after 2 weeks, the AI outreach bot booked 45 qualified demos. We actually had to pause it to catch up.",
    author: "Alex V.",
    role: "Agency Owner",
    result: "+$45k MRR Added",
  },
  {
    text: "CrocodeFlow automated our entire onboarding. What used to take 3 people 4 hours a day now happens instantly.",
    author: "Sarah J.",
    role: "SaaS Founder",
    result: "Saved 60hrs/mo",
  },
  {
    text: "Our customer support response time went from 4 hours to 4 seconds. The AI handles 90% of tickets perfectly.",
    author: "Mike T.",
    role: "E-commerce Director",
    result: "Support Costs -70%",
  },
  {
    text: "They didn't just build a bot, they rebuilt our sales process. The revenue numbers don't lie.",
    author: "David K.",
    role: "Real Estate Broker",
    result: "2x Conversion Rate",
  },
];

const TESTIMONIALS_ROW_2: Testimonial[] = [
  {
    text: "Finally an agency that cares about ROI. We made our investment back in the first month.",
    author: "Jessica L.",
    role: "Marketing Head",
    result: "10x ROI",
  },
  {
    text: "The lead enrichment automation is insane. Our sales team only talks to people who are ready to buy.",
    author: "Tom H.",
    role: "VP of Sales",
    result: "Zero Wasted Calls",
  },
  {
    text: "We scaled from 10 to 50 clients without hiring a single new account manager. The AI does the heavy lifting.",
    author: "Rachel P.",
    role: "Operations Manager",
    result: "Scaled 5x w/ 0 Hires",
  },
  {
    text: "Implementation was scary fast. We were live and printing money in 8 days.",
    author: "Chris M.",
    role: "Startup CEO",
    result: "Live in 8 Days",
  },
];

const TestimonialCard: React.FC<{ t: Testimonial }> = ({ t }) => (
  <div className="flex-shrink-0 w-[400px] p-6 mx-4 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl hover:border-brand-500/50 transition-colors group relative overflow-hidden shadow-sm dark:shadow-none">
    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
        <CheckCircle2 className="w-24 h-24 text-brand-500 -mr-8 -mt-8" />
    </div>
    <div className="flex items-center gap-1 mb-4 text-brand-500">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-brand-500" />
      ))}
    </div>
    <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed relative z-10">"{t.text}"</p>
    <div className="flex items-center justify-between mt-auto border-t border-gray-100 dark:border-dark-700 pt-4">
        <div>
            <p className="font-bold text-gray-900 dark:text-white text-sm">{t.author}</p>
            <p className="text-xs text-gray-500 dark:text-dark-400">{t.role}</p>
        </div>
        <div className="px-3 py-1 bg-brand-50 dark:bg-brand-900/30 border border-brand-200 dark:border-brand-500/30 rounded text-brand-600 dark:text-brand-400 text-xs font-bold font-mono">
            {t.result}
        </div>
    </div>
  </div>
);

const TestimonialSkeleton: React.FC = () => (
  <div className="flex-shrink-0 w-[400px] p-6 mx-4 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-xl shadow-sm dark:shadow-none">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="w-4 h-4 bg-gray-200 dark:bg-dark-700 rounded animate-pulse" />
      ))}
    </div>
    <div className="space-y-2 mb-6">
      <div className="h-4 w-full bg-gray-200 dark:bg-dark-700 rounded animate-pulse" />
      <div className="h-4 w-3/4 bg-gray-200 dark:bg-dark-700 rounded animate-pulse" />
      <div className="h-4 w-5/6 bg-gray-200 dark:bg-dark-700 rounded animate-pulse" />
    </div>
    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-dark-700">
      <div className="space-y-2">
        <div className="h-4 w-24 bg-gray-200 dark:bg-dark-700 rounded animate-pulse" />
        <div className="h-3 w-16 bg-gray-200 dark:bg-dark-700 rounded animate-pulse" />
      </div>
      <div className="h-6 w-20 bg-brand-500/10 rounded animate-pulse" />
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-24 bg-gray-50 dark:bg-dark-900 relative overflow-hidden border-y border-gray-200 dark:border-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-gray-900 dark:text-white">
          Results. <span className="text-brand-500">Or We Don't Eat.</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          We track every dollar. Here is what happens when you replace manual labor with intelligent code.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {loading ? (
          <div className="flex w-full justify-center overflow-hidden">
             <div className="flex">
                <TestimonialSkeleton />
                <TestimonialSkeleton />
                <TestimonialSkeleton />
             </div>
          </div>
        ) : (
          <>
            {/* Row 1 - Scroll Left */}
            <div className="flex w-max animate-scroll hover:[animation-play-state:paused] mb-8">
              {[...TESTIMONIALS_ROW_1, ...TESTIMONIALS_ROW_1, ...TESTIMONIALS_ROW_1].map((t, i) => (
                <TestimonialCard key={`r1-${i}`} t={t} />
              ))}
            </div>

            {/* Row 2 - Scroll Right */}
            <div className="flex w-max animate-scroll-reverse hover:[animation-play-state:paused]">
              {[...TESTIMONIALS_ROW_2, ...TESTIMONIALS_ROW_2, ...TESTIMONIALS_ROW_2].map((t, i) => (
                <TestimonialCard key={`r2-${i}`} t={t} />
              ))}
            </div>
          </>
        )}

        {/* Gradient Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 dark:from-dark-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 dark:from-dark-900 to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};