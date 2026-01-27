
import React, { useEffect, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { 
  Search, PenTool, Hammer, Rocket, 
  CheckCircle2, Target, ListTodo, Package,
  ArrowRight, Calendar, BrainCircuit,
  Sparkles, Layers
} from 'lucide-react';
import { CAL_LINK } from '../constants';
import { PROPOSALS } from '../data/proposals';

const PLAN_DATA = [
  {
    week: "01",
    phase: "Week 1",
    title: "Deep Dive & Mapping",
    subtitle: "Understanding the Human Layer",
    description: "We start by analyzing exactly how your best deals are closed today, so the AI doesn't just 'talk'—it sells like you.",
    icon: Search,
    themeColor: "blue",
    gradient: "from-blue-500 to-cyan-400",
    goals: [
      "Understand real decision-making of setters & closer",
      "Map funnel: DM → qualified → booked → showed → closed",
      "Capture your voice (tone, wording, emphasis)"
    ],
    todo: [
      "Interview with you",
      "Interviews with 1–2 setters and the closer",
      "Audit: DM scripts, saved replies, call recordings",
      "Voice analysis → “Do / Don’t” Messaging Guide"
    ],
    deliverables: [
      "DM Funnel Map",
      "Setter & Closer Decision Blueprint",
      "Voice & Messaging Guide"
    ]
  },
  {
    week: "02",
    phase: "Week 2",
    title: "Conversation Design & Assets",
    subtitle: "Building the Brain & The Magnet",
    description: "We architect the conversation flows to feel natural, and design the custom assets that make booking a call irresistible.",
    icon: BrainCircuit,
    themeColor: "purple",
    gradient: "from-purple-500 to-pink-500",
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
    week: "03",
    phase: "Week 3",
    title: "Build, Integration & Pilot",
    subtitle: "Bringing the System to Life",
    description: "We connect the pipes. The AI starts talking, the PDFs start generating, and we turn the traffic on safely.",
    icon: Hammer,
    themeColor: "amber",
    gradient: "from-amber-500 to-orange-500",
    goals: [
      "Turn designed flows into a functioning system",
      "Run a safe controlled pilot"
    ],
    todo: [
      "Implement AI DM system: speed-to-lead, questions",
      "Build pre-call plan generator (PDF/deck/carousel)",
      "Connect CRM + calendar",
      "Build contextual reminder system",
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
    week: "04",
    phase: "Week 4",
    title: "Optimization & Handover",
    subtitle: "Refining & Scaling",
    description: "We review the data, polish the rough edges, and hand you the keys to a Ferrari that drives itself.",
    icon: Rocket,
    themeColor: "emerald",
    gradient: "from-emerald-500 to-green-400",
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
  const { slug } = useParams<{ slug: string }>();
  
  const clientData = useMemo(() => {
    if (!slug || !PROPOSALS[slug]) return null;
    return PROPOSALS[slug];
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!clientData) return <Navigate to="/" />;

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-brand-500 selection:text-white font-sans overflow-x-hidden">
      <Header isSharedPage={true} companyName={clientData.clientName} />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 text-brand-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-lg">
                <Sparkles className="w-3.5 h-3.5" /> Project Roadmap
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
                4-Week <br className="md:hidden"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-200 to-brand-400 animate-pulse-slow">
                    Implementation Plan
                </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                AI DM System + Custom Pre-Call Assets. <br/>
                From <span className="text-white font-medium">manual grind</span> to <span className="text-brand-400 font-medium">automated scale</span> in 30 days.
            </p>
        </div>
      </div>

      {/* Timeline Section */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 pb-32 relative z-10">
        
        {/* Central Line (Desktop) */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-32 w-px bg-gradient-to-b from-transparent via-brand-500/20 to-transparent md:-translate-x-1/2 hidden md:block"></div>
        
        {/* Mobile Line */}
        <div className="absolute left-8 top-0 bottom-32 w-px bg-gradient-to-b from-transparent via-brand-500/20 to-transparent md:hidden"></div>

        <div className="space-y-16 md:space-y-32">
            {PLAN_DATA.map((step, index) => {
                const isEven = index % 2 === 0;
                
                const themeColors: Record<string, string> = {
                    blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
                    purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
                    amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
                    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
                };

                const deliverableColors: Record<string, string> = {
                    blue: "bg-blue-500/10 text-blue-300 border-blue-500/20",
                    purple: "bg-purple-500/10 text-purple-300 border-purple-500/20",
                    amber: "bg-amber-500/10 text-amber-300 border-amber-500/20",
                    emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
                };

                return (
                    <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-20 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                        
                        <div className={`
                            absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full 
                            bg-[#0a0a0a] border border-gray-800 flex items-center justify-center z-20
                            shadow-[0_0_30px_rgba(0,0,0,0.5)]
                        `}>
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${step.gradient} animate-pulse`}></div>
                            <div className="absolute top-12 bottom-[-80px] w-px bg-gray-800 md:hidden -z-10"></div> 
                        </div>

                        <div className="w-full md:w-1/2 pl-20 md:pl-0">
                            <div className="relative group perspective-1000">
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.gradient} rounded-2xl opacity-20 group-hover:opacity-50 blur transition duration-500`}></div>
                                
                                <div className="relative bg-[#0F0F0F] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/10 transition-colors duration-300">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <div className={`text-xs font-bold uppercase tracking-widest mb-1 bg-clip-text text-transparent bg-gradient-to-r ${step.gradient}`}>
                                                {step.phase}
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                                                {step.title}
                                            </h2>
                                            <p className="text-gray-500 text-sm">{step.subtitle}</p>
                                        </div>
                                        <div className={`p-3 rounded-xl ${themeColors[step.themeColor]} hidden sm:block`}>
                                            <step.icon className="w-6 h-6" />
                                        </div>
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-8 border-b border-white/5 pb-8">
                                        {step.description}
                                    </p>

                                    <div className="space-y-6">
                                        {step.goals && (
                                            <div>
                                                <h4 className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider mb-3">
                                                    <Target className="w-3.5 h-3.5 text-gray-400" /> Goals
                                                </h4>
                                                <ul className="space-y-2">
                                                    {step.goals.map((g, i) => (
                                                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                                            <div className={`w-1 h-1 rounded-full mt-2 bg-gradient-to-r ${step.gradient}`}></div>
                                                            {g}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        <div>
                                            <h4 className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider mb-3">
                                                <ListTodo className="w-3.5 h-3.5 text-gray-400" /> Execution
                                            </h4>
                                            <ul className="space-y-2">
                                                {step.todo.map((t, i) => (
                                                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                                        <CheckCircle2 className="w-4 h-4 text-gray-600 group-hover:text-brand-500 transition-colors mt-0.5 shrink-0" />
                                                        {t}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pt-2">
                                            <h4 className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider mb-3">
                                                <Package className="w-3.5 h-3.5 text-gray-400" /> Deliverables
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {step.deliverables.map((d, i) => (
                                                    <span key={i} className={`px-3 py-1.5 rounded-lg border text-[11px] font-medium tracking-wide ${deliverableColors[step.themeColor]}`}>
                                                        {d}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block w-1/2">
                            <div className={`text-[12rem] font-display font-bold text-white/[0.02] select-none leading-none ${isEven ? 'text-left -ml-12' : 'text-right -mr-12'}`}>
                                {step.week}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

        <div className="mt-32 max-w-2xl mx-auto text-center relative">
            <div className="absolute inset-0 bg-brand-500/20 blur-[100px] pointer-events-none"></div>
            
            <div className="relative bg-[#0F0F0F] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                <h3 className="text-3xl font-display font-bold text-white mb-4">Ready to Launch Week 1?</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                    We can begin the Deep Dive & Mapping phase for {clientData.clientName} immediately. <br/>
                    The sooner we map the funnel, the sooner we automate it.
                </p>
                
                <a 
                    href={CAL_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-200 font-bold rounded-xl transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                    Start Implementation <ArrowRight className="w-5 h-5" />
                </a>
                
                <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gray-500 font-mono uppercase tracking-widest">
                    <span className="flex items-center gap-2"><Layers className="w-3 h-3" /> 4 Phases</span>
                    <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> 30 Days</span>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
