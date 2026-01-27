
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CAL_LINK } from '../../constants';

export const ClosingSlide: React.FC = () => (
  <div className="space-y-12 animate-fade-in max-w-4xl mx-auto text-center">
    <h3 className="text-3xl font-bold">Let's build your revenue engine.</h3>
    <a 
        href={CAL_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-10 py-5 bg-brand-600 text-white text-xl font-bold rounded-xl"
    >
        Book Onboarding Call <ArrowRight className="w-6 h-6" />
    </a>
  </div>
);
