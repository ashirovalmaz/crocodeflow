import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { 
  Search, PenTool, Hammer, Rocket, 
  CheckCircle2, Target, ListTodo, Package,
  ArrowRight, Calendar
} from 'lucide-react';
import { CAL_LINK } from '../constants';

const PLAN_DATA = [
  {
    week: 1,
    title: "Deep Dive & Mapping",
    subtitle: "Understanding the Human Layer",
    icon: Search,
    theme: "blue", // Conceptual theme, mapped to classes below
    description: "We start by analyzing exactly how your best deals are closed today, so the AI doesn't just 'talk'—it sells like you.",
    goals: [
      "Understand real decision-making of setters & closer",
      "Map funnel: DM → qualified → booked → showed → closed",
      "Capture your voice (tone, wording, emphasis)"
    ],
    todo: [
      "Interview with you",
      "Interviews with 1–2 setters and the closer",
      "Audit: DM scripts, saved replies, call recordings, lead magnets",
      "Voice analysis → “Do / Don’t” Messaging Guide"
    ],
    deliverables: [
      "DM Funnel Map",
      "Setter & Closer Decision Blueprint",
      "Voice & Messaging Guide"
    ]
  },
  {
    week: 2,
    title: "Conversation Design & Assets",
    subtitle: "Building the Brain & The Magnet",
    icon: PenTool,
    theme: "purple",
    description: "We architect the conversation flows to feel natural, and design the custom assets that make booking a call irresistible.",
    goals: [
      "Build natural, non-scripted AI conversation flow",
      "Design personalized branded presentation template"
    ],
    todo: [
      "Map entry points: DM, comment, CTA reply, new follower",
      "Build qualification logic: goals, struggles, urgency",
      "Define variable schema for personalization",
      "Build Pre-Call Plan structure (Goals, Blockers, Path)",
      "Design the branded pre-call presentation"
    ],
    deliverables: [
      "Conversation Flow Diagram",
      "Variable Schema",
      "Approved Pre-Call Plan Template"
    ]
  },
  {
    week: 3,
    title: "Build, Integration & Pilot",
    subtitle: "Bringing the System to Life",
    icon: Hammer,
    theme: "amber",
    description: "We connect the pipes. The AI starts talking, the PDFs start generating, and we turn the traffic on safely.",
    goals: [
      "Turn designed flows into a functioning system",
      "Run a safe controlled pilot"
    ],
    todo: [
      "Implement AI DM system: speed-to-lead, questions, transitions",
      "Build pre-call plan generator (PDF/deck/carousel)",
      "Connect CRM + calendar",
      "Build contextual reminder system (3 days, 24h + plan, 3h, 30m)",
      "Launch partial-traffic pilot"
    ],
    deliverables: [
      "Fully functioning AI DM system",
      "Auto-generated pre-call assets",
      "Contextual reminder flows",
      "Pilot performance snapshot"
    ]
  },
  {
    week: 4,
    title: "Optimization & Handover",
    subtitle: "Refining & Scaling",
    icon: Rocket,
    theme: "green",
    description: "We review the data, polish the rough edges, and hand you the keys to a Ferrari that drives itself.",
    goals: [
      "Validate metrics against KPIs",
      "Full team adoption"
    ],
    todo: [
      "Analyze early metrics: DM→qualified, qualified→booked",
      "Improve logic + tone alignment",
      "Train setters + closer on the system",
      "Deliver SOPs + documentation",
      "Finalize bonus system"
    ],
    deliverables: [
      "Optimized system",
      "Team training recording",
      "SOPs + handover docs",
      "Playbook for cloning to other brands"
    ]
  }
];

export const ClientPlanPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300 flex flex-col font-sans">
      <Header isSharedPage={true} companyName="Justin Howells" />
      
      <main className="flex-grow pt-28 pb-20 px-4 md:px-6 relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-500/5 to-transparent pointer-events-none"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 text-brand-700 dark:text-brand-400 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                  <Calendar className="w-3 h-3" /> Project Roadmap
                </div>
                
                <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                    4-Week <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400 dark:from-brand-400 dark:to-brand-200">Implementation Plan</span>
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    AI DM System + Custom Pre-Call Assets. <br/>
                    A structured path from "Manual Grind" to "Automated Scale".
                </p>
            </div>

            {/* Timeline Container */}
            <div className="relative">
                {/* Vertical Line (Desktop: Center, Mobile: Left) */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/0 via-brand-500/30 to-brand-500/0 md:-translate-x-1/2"></div>

                <div className="space-y-12 md:space-y-24">
                    {PLAN_DATA.map((week, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={week.week} className={`relative flex flex-col md:flex-row gap-8 ${isEven ? '' : 'md:flex-row-reverse'} items-center md:items-stretch group`}>
                                
                                {/* Timeline Node */}
                                <div className="absolute left-6 md:left-1/2 top-0 md:top-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-brand-500 bg-white dark:bg-dark-900 z-20 group-hover:scale-125 transition-transform duration-300">
                                    <div className="absolute inset-0 rounded-full bg-brand-500/50 animate-ping"></div>
                                </div>

                                {/* Content Card */}
                                <div className={`flex-1 w-full pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                    <div className={`
                                        bg-white dark:bg-dark-800/60 backdrop-blur-md border border-gray-200 dark:border-dark-700 
                                        rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:border-brand-500/30 transition-all duration-300
                                        ${isEven ? 'md:mr-auto' : 'md:ml-auto'}
                                    `}>
                                        {/* Week Header */}
                                        <div className={`flex flex-col gap-2 mb-6 ${isEven ? 'md:items-end' : ''}`}>
                                            <div className="flex items-center gap-3 text-brand-600 dark:text-brand-500 font-bold uppercase tracking-wider text-sm">
                                                <span className="p-1.5 bg-brand-50 dark:bg-brand-500/10 rounded-md">Week {week.week}</span>
                                                <span className="w-1 h-1 rounded-full bg-brand-500"></span>
                                                <span>{week.subtitle}</span>
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white">
                                                {week.title}
                                            </h2>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-md">
                                                {week.description}
                                            </p>
                                        </div>

                                        {/* Details Grid */}
                                        <div className="grid grid-cols-1 gap-6 text-left">
                                            {/* Goals */}
                                            <div className="bg-brand-50/50 dark:bg-brand-900/5 rounded-xl p-4 border border-brand-100 dark:border-brand-500/10">
                                                <h3 className="flex items-center gap-2 font-bold text-brand-700 dark:text-brand-400 text-xs uppercase tracking-wider mb-3">
                                                    <Target className="w-4 h-4" /> Goals
                                                </h3>
                                                <ul className="space-y-2">
                                                    {week.goals.map((g, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0 opacity-60"></span>
                                                            {g}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* What we'll do */}
                                            <div>
                                                <h3 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-3">
                                                    <ListTodo className="w-4 h-4 text-gray-400" /> What we'll do
                                                </h3>
                                                <ul className="space-y-2">
                                                    {week.todo.map((t, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                            <CheckCircle2 className="w-4 h-4 text-gray-300 dark:text-dark-600 mt-0.5 shrink-0" />
                                                            {t}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Deliverables */}
                                            <div className="pt-4 border-t border-gray-100 dark:border-dark-700">
                                                <h3 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-3">
                                                    <Package className="w-4 h-4 text-gray-400" /> Key Deliverables
                                                </h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {week.deliverables.map((d, i) => (
                                                        <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300">
                                                            {d}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Empty Spacer for Grid Balance */}
                                <div className="hidden md:block flex-1"></div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-24 text-center pb-8">
                 <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-dark-800 dark:via-dark-700 dark:to-dark-800">
                    <div className="bg-white dark:bg-dark-900 rounded-xl px-8 py-10 md:px-16 border border-gray-200 dark:border-dark-700 shadow-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Ready to start Week 1?</h3>
                        <p className="text-gray-500 mb-8">We can begin the Deep Dive & Mapping phase immediately.</p>
                        
                        <a 
                            href={CAL_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl shadow-lg hover:shadow-brand-500/25 transition-all transform hover:-translate-y-1"
                        >
                            Execute Plan <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                 </div>
            </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
