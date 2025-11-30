import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ArrowRight, ArrowLeft, CheckCircle2, AlertTriangle, ChevronRight, DollarSign, Target, BarChart2, Layers } from 'lucide-react';
import { CAL_LINK } from '../constants';

const PROPOSAL_CONTENT = [
  {
    id: 'executive-summary',
    title: "Executive Summary",
    subtitle: "Scaling to $80–100k/mo",
    content: (
      <div className="space-y-8 animate-fade-in">
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
            With the context from our recent project, we strongly believe your coaching business could be an <strong className="text-brand-600 dark:text-brand-500 font-bold">$80–100k/mo business</strong> with a few focused changes—primarily around how you convert existing attention and leads into booked calls.
          </p>
        </div>

        <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 border border-gray-200 dark:border-dark-700 shadow-sm">
          <h3 className="text-lg font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-brand-500" /> Why we believe this
          </h3>
          <ul className="space-y-6">
            {[
              { title: "High Quality Service", text: "Your clients tend to stay, resign for another term, and see a strong ROI from working with you." },
              { title: "Deep Market Understanding", text: "You know the language they use, the offers that resonate, and you consistently generate 100–150 warm leads per week." },
              { title: "Massive Audience Reach", text: "Combined audience of ~500K followers. The opportunity is already there; it’s primarily a conversion problem." },
              { title: "Ethical Approach", text: "You’re not trying to 'replace humans with robots', but to give your team leverage." },
              { title: "Founder Bottleneck", text: "You are charismatic and intelligent, but currently the bottleneck. When you don't personally DM, things stall." }
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <div className="mt-1 min-w-[24px]">
                    <div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-500 font-bold text-xs">
                        {i + 1}
                    </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'goals',
    title: "Your Goals",
    subtitle: "What we heard between the lines",
    content: (
      <div className="space-y-8 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
                "Consistent $40–50k/month baseline you can rely on.",
                "Scaling to $80–100k/month within 12 months.",
                "Predictable flow of booked calls, making revenue about math, not hope.",
                "Leverage the 100–150 warm leads/week instead of losing them.",
                "More freedom: less time saving deals in DMs at 11pm.",
                "Ability to fill assistant coaches confidently.",
                "Duplicate success onto your fiancée’s side of the business.",
                "Differentiate from generic automation with a personalized experience."
            ].map((goal, i) => (
                <div key={i} className="bg-gray-50 dark:bg-dark-800/50 p-6 rounded-xl border border-gray-200 dark:border-dark-700 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{goal}</span>
                </div>
            ))}
        </div>
        <p className="text-center text-gray-500 dark:text-gray-400 italic">
            If any of these are off, we’re happy to adjust—but this is what we identified as the core targets.
        </p>
      </div>
    )
  },
  {
    id: 'problems',
    title: "The Bottlenecks",
    subtitle: "Why the current funnel prevents scaling",
    content: (
      <div className="space-y-12 animate-fade-in">
        <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-xl">
            <p className="text-lg text-red-800 dark:text-red-200 font-medium">
                "Lead → DM conversation → qualified → booked → showed" is the bottleneck, not lead generation.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
                <div className="group">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500" /> 1. DM Conversion
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pl-7 border-l border-gray-200 dark:border-dark-700">
                        You have 150+ warm leads/week, but they slip through cracks. Every week this persists, revenue is left on the table.
                    </p>
                </div>
                <div className="group">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                         <AlertTriangle className="w-5 h-5 text-red-500" /> 2. Setter Inconsistency
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pl-7 border-l border-gray-200 dark:border-dark-700">
                        Speed-to-lead is variable. Over-following up burns trust. You are relying on human consistency for a process that demands machine precision.
                    </p>
                </div>
                <div className="group">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                         <AlertTriangle className="w-5 h-5 text-red-500" /> 3. Low Show-up Rate
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pl-7 border-l border-gray-200 dark:border-dark-700">
                        Prospects feel like it's "just another sales call". Missing a high-value pre-call asset (like a custom plan) to anchor their commitment.
                    </p>
                </div>
            </div>
            <div className="space-y-6">
                <div className="group">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                         <AlertTriangle className="w-5 h-5 text-red-500" /> 4. Generic Automation
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pl-7 border-l border-gray-200 dark:border-dark-700">
                        GHL reminders blend into the noise. You need personalized automations that reference their specific goals and struggles.
                    </p>
                </div>
                <div className="group">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                         <AlertTriangle className="w-5 h-5 text-red-500" /> 5. Founder Bottleneck
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pl-7 border-l border-gray-200 dark:border-dark-700">
                        The most valuable person (you) is doing $30/hr DM work to save deals. This prevents you from working on $100k/mo tasks.
                    </p>
                </div>
                <div className="group">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                         <AlertTriangle className="w-5 h-5 text-red-500" /> 6. Untapped Upside
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pl-7 border-l border-gray-200 dark:border-dark-700">
                        Success here multiplies x2-3 when cloned to your fiancée’s brand. Current bottlenecks block that expansion.
                    </p>
                </div>
            </div>
        </div>
      </div>
    )
  },
  {
    id: 'solutions-1',
    title: "Proposed Solutions",
    subtitle: "Phase 1: Conversion & Consistency",
    content: (
      <div className="space-y-8 animate-fade-in">
        <p className="text-gray-600 dark:text-gray-400">
            We prioritize increasing booked calls and freeing your time. Each system is modular.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* System 1 */}
            <div className="bg-white dark:bg-dark-800 rounded-xl border-2 border-brand-500 shadow-lg p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Core P1</div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">System 1: AI DM Foundation</h3>
                <p className="text-xs text-gray-500 mb-4">Converts CTAs & Followers into Booked Calls</p>
                <ul className="space-y-2 mb-6">
                    {['Qualifies leads intelligently', 'Generates custom mini-plans', 'Sends contextual reminders', 'Frictionless booking flow'].map((feat, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" /> {feat}
                        </li>
                    ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-dark-700 flex justify-between items-center text-sm">
                   <span className="text-gray-500">Setup: $2,500</span>
                   <span className="font-bold text-gray-900 dark:text-white">$690/mo</span>
                </div>
            </div>

            {/* System 2 */}
            <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-6 relative">
                 <div className="absolute top-0 right-0 bg-gray-200 dark:bg-dark-600 text-gray-600 dark:text-gray-300 text-xs font-bold px-3 py-1 rounded-bl-lg">High P2</div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">System 2: AI Setter Co-Pilot</h3>
                <p className="text-xs text-gray-500 mb-4">Superpowers for your human setters</p>
                <ul className="space-y-2 mb-6">
                    {['Suggested AI replies', 'Hot signal alerts', 'Prevents missed DMs', 'Ensures consistency'].map((feat, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" /> {feat}
                        </li>
                    ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-dark-700 flex justify-between items-center text-sm">
                   <span className="text-gray-500">Setup: ~$1.6k</span>
                   <span className="font-bold text-gray-900 dark:text-white">~$400/mo</span>
                </div>
            </div>

            {/* System 3 */}
            <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-6 relative">
                 <div className="absolute top-0 right-0 bg-gray-200 dark:bg-dark-600 text-gray-600 dark:text-gray-300 text-xs font-bold px-3 py-1 rounded-bl-lg">High P3</div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">System 3: Reactivation</h3>
                <p className="text-xs text-gray-500 mb-4">Monetize "Non-Buyers" & No-Shows</p>
                <ul className="space-y-2 mb-6">
                    {['Pulls CRM context', 'Personalized "Hey, saw this..." msgs', 'Prioritizes intent', 'Recovers lost revenue'].map((feat, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" /> {feat}
                        </li>
                    ))}
                </ul>
                 <div className="mt-auto pt-4 border-t border-gray-100 dark:border-dark-700 flex justify-between items-center text-sm">
                   <span className="text-gray-500">Setup: ~$1.5k</span>
                   <span className="font-bold text-gray-900 dark:text-white">~$450/mo</span>
                </div>
            </div>
        </div>
      </div>
    )
  },
  {
    id: 'solutions-2',
    title: "Proposed Solutions",
    subtitle: "Phase 2: Intelligence & Retention",
    content: (
      <div className="space-y-8 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* System 4 */}
            <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-6 relative">
                 <div className="absolute top-0 right-0 bg-gray-200 dark:bg-dark-600 text-gray-600 dark:text-gray-300 text-xs font-bold px-3 py-1 rounded-bl-lg">High P3</div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">System 4: Call Analysis</h3>
                <p className="text-xs text-gray-500 mb-4">Prevent "lost leads" post-call</p>
                <ul className="space-y-2 mb-6">
                    {['Transcribes & extracts goals', 'Auto-populates CRM', 'Generates follow-up drafts', 'Buying temperature scoring'].map((feat, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" /> {feat}
                        </li>
                    ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-dark-700 flex justify-between items-center text-sm">
                   <span className="text-gray-500">Setup: ~$1.2k</span>
                   <span className="font-bold text-gray-900 dark:text-white">~$300/mo</span>
                </div>
            </div>

            {/* System 5 */}
            <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-6 relative">
                 <div className="absolute top-0 right-0 bg-gray-100 dark:bg-dark-700 text-gray-500 text-xs font-bold px-3 py-1 rounded-bl-lg">Med P4</div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">System 5: Content Engine</h3>
                <p className="text-xs text-gray-500 mb-4">Competitor Analysis + Script Gen</p>
                <ul className="space-y-2 mb-6">
                    {['Analyzes viral competitor posts', 'Breaks down hooks & structure', 'Generates scripts in your voice', 'Recommends weekly topics'].map((feat, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" /> {feat}
                        </li>
                    ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-dark-700 flex justify-between items-center text-sm">
                   <span className="text-gray-500">Setup: ~$1.2k</span>
                   <span className="font-bold text-gray-900 dark:text-white">~$400/mo</span>
                </div>
            </div>

            {/* System 6 */}
            <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-6 relative opacity-75 hover:opacity-100 transition-opacity">
                 <div className="absolute top-0 right-0 bg-gray-100 dark:bg-dark-700 text-gray-500 text-xs font-bold px-3 py-1 rounded-bl-lg">Long-Term P5</div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">System 6: Client App</h3>
                <p className="text-xs text-gray-500 mb-4">LTV Engagement Dashboard</p>
                <ul className="space-y-2 mb-6">
                    {['Progress tracking', 'Daily check-ins', 'Milestone nudges', 'Increases stickiness & LTV'].map((feat, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" /> {feat}
                        </li>
                    ))}
                </ul>
                 <div className="mt-auto pt-4 border-t border-gray-100 dark:border-dark-700 flex justify-between items-center text-sm">
                   <span className="text-gray-500">Setup: ~$2.5k</span>
                   <span className="font-bold text-gray-900 dark:text-white">~$550/mo</span>
                </div>
            </div>
        </div>
      </div>
    )
  },
  {
    id: 'summary',
    title: "Next Steps",
    subtitle: "Execution Plan",
    content: (
      <div className="space-y-12 animate-fade-in">
        <div className="bg-brand-50 dark:bg-brand-900/10 border border-brand-200 dark:border-brand-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Implementation Priority</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs">1</div> AI DM Foundation</div>
                <ChevronRight className="w-4 h-4 text-gray-400 rotate-90 md:rotate-0" />
                <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-gray-600 text-white flex items-center justify-center text-xs">2</div> Setter Co-Pilot</div>
                <ChevronRight className="w-4 h-4 text-gray-400 rotate-90 md:rotate-0" />
                <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-gray-600 text-white flex items-center justify-center text-xs">3</div> Reactivation & Analysis</div>
            </div>
        </div>

        <div className="flex flex-col items-center gap-6">
             <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-center">
                We are ready to start with System 1 immediately to fix the conversion leak. 
                Everything else can be layered on as revenue increases.
            </p>
            <a 
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-brand-500/30 transition-all flex items-center gap-2"
            >
                Start Implementation <ArrowRight className="w-5 h-5" />
            </a>
        </div>
      </div>
    )
  }
];

export const ProposalPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < PROPOSAL_CONTENT.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const progress = ((currentSlide + 1) / PROPOSAL_CONTENT.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300 flex flex-col">
      <Header isSharedPage={true} hideThemeToggle={false} />
      
      <main className="flex-grow pt-24 pb-12 px-4 md:px-6 flex flex-col items-center">
        <div className="w-full max-w-5xl">
            
            {/* Progress Bar */}
            <div className="mb-8 flex items-center gap-4">
                <span className="text-xs font-mono text-gray-400 w-12 text-right">
                    {currentSlide + 1} / {PROPOSAL_CONTENT.length}
                </span>
                <div className="h-1.5 flex-grow bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-brand-500 transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            {/* Slide Container */}
            <div className="bg-white dark:bg-dark-950 rounded-2xl shadow-xl border border-gray-200 dark:border-dark-700 overflow-hidden min-h-[600px] flex flex-col relative">
                
                {/* Header */}
                <div className="p-8 border-b border-gray-100 dark:border-dark-800 bg-gray-50/50 dark:bg-dark-900/50 backdrop-blur-sm">
                    <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">
                        {PROPOSAL_CONTENT[currentSlide].title}
                    </h1>
                    <p className="text-lg text-brand-600 dark:text-brand-500 font-medium">
                        {PROPOSAL_CONTENT[currentSlide].subtitle}
                    </p>
                </div>

                {/* Content Body */}
                <div className="p-8 md:p-12 flex-grow overflow-y-auto">
                    {PROPOSAL_CONTENT[currentSlide].content}
                </div>

                {/* Navigation Footer */}
                <div className="p-6 border-t border-gray-100 dark:border-dark-800 bg-gray-50 dark:bg-dark-900 flex justify-between items-center">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                            currentSlide === 0 
                                ? 'opacity-0 pointer-events-none' 
                                : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 border border-gray-200 dark:border-dark-700'
                        }`}
                    >
                        <ArrowLeft className="w-4 h-4" /> Previous
                    </button>

                    {currentSlide < PROPOSAL_CONTENT.length - 1 ? (
                        <button
                            onClick={nextSlide}
                            className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm bg-brand-600 hover:bg-brand-500 text-white shadow-lg hover:shadow-brand-500/25 transition-all"
                        >
                            Next <ArrowRight className="w-4 h-4" />
                        </button>
                    ) : (
                         <a
                            href={CAL_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm bg-brand-600 hover:bg-brand-500 text-white shadow-lg hover:shadow-brand-500/25 transition-all"
                        >
                            Book Call <ArrowRight className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>

        </div>
      </main>
    </div>
  );
};
