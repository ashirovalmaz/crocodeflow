
import React, { useState } from 'react';
import { FileSignature, Handshake, ArrowRight, FileText, Loader2 } from 'lucide-react';
import { CAL_LINK } from '../../constants';
import { ROB_SYSTEMS } from './TermsSlide';
// @ts-ignore
import { jsPDF } from 'jspdf';
// @ts-ignore
import html2canvas from 'html2canvas';

interface ClosingSlideProps {
    selected: string[];
}

export const ClosingSlide: React.FC<ClosingSlideProps> = ({ selected }) => {
    const [isGenerating, setIsGenerating] = useState(false);

    const generatePDF = async () => {
        setIsGenerating(true);
        const selectedSystems = ROB_SYSTEMS.filter(s => selected.includes(s.id));
        
        // Calculation logic (duplicated for PDF content)
        const count = selected.length;
        let discountPercent = 0;
        if (count === 2) discountPercent = 0.10;
        else if (count === 3) discountPercent = 0.15;
        else if (count >= 4) discountPercent = 0.20;

        const baseSetup = ROB_SYSTEMS.reduce((acc, sys) => selected.includes(sys.id) ? acc + sys.setup : acc, 0);
        const totalMonthly = ROB_SYSTEMS.reduce((acc, sys) => selected.includes(sys.id) ? acc + sys.monthly : acc, 0);
        const discountAmount = baseSetup * discountPercent;
        const finalSetup = baseSetup - discountAmount;
        const firstYearValue = finalSetup + (totalMonthly * 12);
        const annualPrice = Math.floor((firstYearValue * 0.55) / 100) * 100;
        const annualSavings = firstYearValue - annualPrice;

        const printEl = document.createElement('div');
        printEl.style.position = 'fixed';
        printEl.style.left = '-9999px';
        printEl.style.top = '0';
        printEl.style.width = '800px';
        printEl.style.padding = '60px';
        printEl.style.backgroundColor = '#ffffff';
        printEl.style.color = '#111827';
        printEl.style.fontFamily = 'Inter, sans-serif';

        printEl.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 60px; border-bottom: 2px solid #f3f4f6; padding-bottom: 30px;">
                <div>
                    <h1 style="font-size: 32px; font-weight: 800; margin: 0; color: #111827;">Crocode<span style="color: #16a34a;">Flow</span></h1>
                    <p style="font-size: 12px; color: #6b7280; margin-top: 4px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Revenue Automations</p>
                </div>
                <div style="text-align: right;">
                    <p style="font-size: 14px; font-weight: 700; margin: 0;">PREPARED FOR</p>
                    <p style="font-size: 20px; font-weight: 800; margin: 4px 0 0 0; color: #16a34a;">Rob Jessen</p>
                </div>
            </div>

            <div style="margin-bottom: 40px;">
                <h2 style="font-size: 18px; font-weight: 800; color: #374151; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px;">Selected Infrastructure</h2>
                <div style="display: grid; gap: 12px;">
                    ${selectedSystems.map(s => `
                        <div style="padding: 16px; border: 1px solid #e5e7eb; border-radius: 12px; display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <p style="font-size: 14px; font-weight: 700; margin: 0;">${s.title}</p>
                                <p style="font-size: 12px; color: #6b7280; margin: 2px 0 0 0;">${s.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div style="display: flex; gap: 20px; margin-bottom: 60px; border-top: 1px solid #f3f4f6; padding-top: 40px;">
                <div style="flex: 1; padding: 25px; border-radius: 20px; background: #f9fafb; border: 1px solid #e5e7eb;">
                    <h3 style="font-size: 12px; font-weight: 800; color: #9ca3af; margin: 0 0 15px 0; text-transform: uppercase;">Option 01</h3>
                    <p style="font-size: 16px; font-weight: 800; margin: 0 0 10px 0;">Standard Monthly</p>
                    <p style="font-size: 24px; font-weight: 800; color: #16a34a; margin: 0;">$${finalSetup.toLocaleString()} <span style="font-size: 12px; color: #6b7280; font-weight: 400;">setup</span></p>
                    <p style="font-size: 16px; color: #4b5563; font-weight: 600; margin-top: 5px;">+ $${totalMonthly.toLocaleString()} / month</p>
                </div>

                <div style="flex: 1; padding: 25px; border-radius: 20px; background: #064e3b; color: #ffffff; border: 1px solid #065f46;">
                    <h3 style="font-size: 12px; font-weight: 800; color: #6ee7b7; margin: 0 0 15px 0; text-transform: uppercase;">Option 02</h3>
                    <p style="font-size: 16px; font-weight: 800; margin: 0 0 10px 0;">Annual Roadmap</p>
                    <p style="font-size: 24px; font-weight: 800; color: #ffffff; margin: 0;">$${annualPrice.toLocaleString()} <span style="font-size: 12px; color: #d1d5db; font-weight: 400;">upfront</span></p>
                    <p style="font-size: 12px; color: #6ee7b7; font-weight: 700; margin-top: 5px;">SAVINGS: $${annualSavings.toLocaleString()}</p>
                </div>
            </div>

            <div style="text-align: center; border-top: 1px solid #f3f4f6; padding-top: 40px;">
                <p style="font-size: 12px; color: #6b7280; font-weight: 600;">CrocodeFlow AI Systems | proprietary document</p>
            </div>
        `;

        document.body.appendChild(printEl);
        
        try {
            const canvas = await html2canvas(printEl, { 
                scale: 2,
                logging: false,
                useCORS: true,
                backgroundColor: '#ffffff'
            });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save(`CrocodeFlow_Offer_Rob_Jessen.pdf`);
        } catch (err) {
            console.error('PDF Generation failed', err);
        } finally {
            document.body.removeChild(printEl);
            setIsGenerating(false);
        }
    };

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
                    <button 
                        onClick={generatePDF}
                        disabled={isGenerating}
                        className="w-full md:w-auto px-8 py-4 bg-white border-2 border-brand-500 text-brand-600 hover:bg-brand-50 font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-3 group"
                    >
                        {isGenerating ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" /> Preparing Offer...
                            </>
                        ) : (
                            <>
                                Give me Offer (PDF) <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </>
                        )}
                    </button>

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
