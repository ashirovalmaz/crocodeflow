
import React from 'react';
import { FileSignature, Handshake, ArrowRight } from 'lucide-react';
import { CAL_LINK } from '../../constants';

interface ClosingSlideProps {
    selected: string[];
}

export const ClosingSlide: React.FC<ClosingSlideProps> = ({ selected }) => {
    return (
        <div className="space-y-12 animate-fade-in max-w-4xl mx-auto">
            <div className="prose max-w-none text-center">
                <p className="text-xl text-gray-700 leading-relaxed">
                    As mentioned, we believe strongly that your company can be multiple times larger than it is now — especially with your existing reach and the quality of your product.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-gray-200">
                    <FileSignature className="w-10 h-10 text-brand-500 mb-6" />
                    <h4 className="text-lg font-bold text-gray-900 mb-2">The Execution</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        With a few focused improvements to your DM workflows, follow-ups, and nurturing, you can convert significantly more of the leads you already generate. Scaling becomes a matter of operations, not luck.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-200">
                    <Handshake className="w-10 h-10 text-brand-500 mb-6" />
                    <h4 className="text-lg font-bold text-gray-900 mb-2">The Commitment</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        We are ambitious and deeply committed to the craft of building AI systems that generate revenue autonomously. We wrote this in detail because we see the path clearly.
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-6 pt-8 border-t border-gray-200">
                <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
                    <a 
                        href={CAL_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto px-10 py-5 bg-brand-600 hover:bg-brand-500 text-white text-xl font-bold rounded-xl shadow-xl hover:shadow-brand-500/30 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1"
                    >
                        Let's Build It <ArrowRight className="w-6 h-6" />
                    </a>
                </div>

                <p className="text-xs text-gray-400 text-center">
                    If not, you’re still welcome to use everything we’ve laid out above; <br/>we genuinely want you and your company to succeed.
                </p>
            </div>
        </div>
    );
};
