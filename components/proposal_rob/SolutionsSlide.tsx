
import React from 'react';
import { ChevronDown, MessageSquare, Mail, Zap, Target, Layout, Rocket, Calendar, Bell, Database } from 'lucide-react';

export const SolutionsSlide: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <p className="text-gray-600 mb-4">
        These phases are prioritized around three things: Increasing booked calls & show-up rates, Improving ROI from leads you already generate, and freeing your time from the DMs. Each system can be added modularly.
    </p>
    
    <div className="flex flex-col gap-4">
        {/* System 1 - Full Detailed Content */}
        <div className="bg-white rounded-xl border-2 border-brand-500 shadow-xl p-6 relative flex flex-col">
            <div className="absolute top-0 right-0 bg-brand-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-widest shadow-lg">Core P1</div>
            <h3 className="font-bold text-lg text-gray-900 mb-1">System 1: AI-powered DM foundation + Custom presentations</h3>
            <div className="text-sm text-brand-600 font-bold mb-4">Timeframe: 25–30 days</div>
            
            <div className="flex-grow space-y-6 mb-4">
                <div className="bg-brand-50 p-4 rounded-lg border border-brand-100">
                     <h4 className="text-xs font-bold uppercase text-brand-700 mb-1">Goal</h4>
                     <p className="text-sm text-gray-700 leading-relaxed">
                        Convert leads into booked calls — consistently, instantly, and with personalized pre-call assets. The system begins working from the very first touchpoint and stays with the lead all the way until they actually join the scheduled call.
                     </p>
                </div>

                <div>
                    <h4 className="text-sm font-bold uppercase text-gray-900 mb-3">What this system does</h4>
                    
                    <div className="space-y-4 pl-2">
                         {/* Step 1 */}
                         <div className="relative pl-6 border-l-2 border-gray-200">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 text-[10px] flex items-center justify-center font-bold text-gray-500">1</div>
                            <h5 className="text-sm font-bold text-gray-900">Handles the very first interaction</h5>
                            <p className="text-xs text-gray-600 mt-1 mb-2">
                                The system instantly interacts with potential clients triggered by:
                            </p>
                            <ul className="text-xs text-gray-600 list-disc pl-4 space-y-0.5">
                                <li>incoming DM</li>
                                <li>comment with a keyword</li>
                                <li>reply to your CTA</li>
                                <li>response to your lead magnet</li>
                            </ul>
                            <p className="text-xs font-medium text-brand-600 mt-1">This ensures zero lost leads and perfect speed-to-lead, even at 2am.</p>
                         </div>

                         {/* Step 2 */}
                         <div className="relative pl-6 border-l-2 border-gray-200">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 text-[10px] flex items-center justify-center font-bold text-gray-500">2</div>
                            <h5 className="text-sm font-bold text-gray-900">Qualifies leads with intelligent, conversational questions</h5>
                            <p className="text-xs text-gray-600 mt-1 mb-2">
                                It asks personalized follow-up questions to understand goals, struggles, lifestyle constraints, urgency, and past attempts.
                            </p>
                            <p className="text-xs text-gray-500 italic mt-1">This creates a natural “brain dump” dynamic — not a scripted chatbot.</p>
                         </div>

                         {/* Step 3 */}
                         <div className="relative pl-6 border-l-2 border-gray-200">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 text-[10px] flex items-center justify-center font-bold text-gray-500">3</div>
                            <h5 className="text-sm font-bold text-gray-900">Extracts key variables for personalization</h5>
                            <p className="text-xs text-gray-600 mt-1">
                                Every important detail (goal, obstacles, schedule, motivation) is stored and used dynamically in later steps. This allows the next steps to feel deeply personal and relevant.
                            </p>
                         </div>

                         {/* Step 4 */}
                         <div className="relative pl-6 border-l-2 border-gray-200">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 text-[10px] flex items-center justify-center font-bold text-gray-500">4</div>
                            <h5 className="text-sm font-bold text-gray-900">Generates a custom mini-presentation or plan</h5>
                            <p className="text-xs text-gray-600 mt-1 mb-2">
                                For each qualified lead, the system produces a fully customized PDF or mini-deck containing their goals (in their words), blockers, and your specific path for them.
                            </p>
                            <p className="text-xs font-medium text-gray-800 italic mt-1">
                                This is the first moment where prospects feel: “Damn… these guys actually prepared something for me.”
                            </p>
                         </div>

                         {/* Step 5 */}
                         <div className="relative pl-6 border-l-2 border-gray-200">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 text-[10px] flex items-center justify-center font-bold text-gray-500">5</div>
                            <h5 className="text-sm font-bold text-gray-900">Drives the lead toward booking a call</h5>
                            <p className="text-xs text-gray-600 mt-1">
                                The system transitions smoothly from qualification → value → booking. It offers the call only when intent is clear and gives a reason to book (“we prepared your plan… let’s walk through it together”).
                            </p>
                         </div>

                         {/* Step 6 */}
                         <div className="relative pl-6 border-l-2 border-gray-200">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 text-[10px] flex items-center justify-center font-bold text-gray-500">6</div>
                            <h5 className="text-sm font-bold text-gray-900">Sends automated, contextual reminders</h5>
                            <p className="text-xs text-gray-600 mt-1 mb-2">
                                Sends reminders 3 days before, 24h before (with plan), 3h before, and 30m before.
                            </p>
                            <p className="text-xs text-brand-600 font-medium mt-1">
                                This dramatically improves show-up rate because it feels human.
                            </p>
                         </div>

                         {/* Step 7 */}
                         <div className="relative pl-6 border-l-2 border-gray-200">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 text-[10px] flex items-center justify-center font-bold text-gray-500">7</div>
                            <h5 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                                CRM Implementation & Analytics <Database className="w-3.5 h-3.5 text-brand-500" />
                            </h5>
                            <p className="text-xs text-gray-600 mt-1">
                                We digitize your operations by either auditing your existing CRM or implementing a new, high-performance one. This ensures every lead is tracked, making it easy to monitor metrics, run deep analytics, and continuously improve the entire sales engine.
                            </p>
                         </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-bold uppercase text-gray-900 mb-2">Why this matters</h4>
                    <p className="text-xs text-gray-600 leading-relaxed mb-2">
                        This system solves your primary bottleneck: <span className="font-bold">Founder Dependency in the DMs.</span>
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                        It’s essentially a 24/7 filter and conversion engine that <span className="font-bold">removes you from the manual grind</span>. By automating qualification and pre-call value delivery, your time is only spent on high-intent sales conversations, while simultaneously increasing lead quality and show-up rates as a secondary (but critical) win.
                    </p>
                </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xs">
               <span className="text-gray-500 font-medium">Setup: $2,900</span>
               <div className="flex items-center gap-1">
                   <span className="text-brand-600 font-bold">$790/mo</span>
               </div>
            </div>
        </div>

        {/* Other Systems */}
        <div className="space-y-3">
            {[
                {
                    title: "Automated newsletter",
                    icon: Mail,
                    setup: 2400,
                    monthly: 650,
                    priority: "P2",
                    what: ["Highly personalized emails using CRM data", "Automated segmentation based on user goals", "Consistent nurture without founder involvement", "Direct call-to-action integration"],
                    why: "Scales your authority and keeps you top-of-mind across your entire database without manual writing."
                },
                {
                    title: "Personalized reactivation",
                    icon: Zap,
                    setup: 1900,
                    monthly: 550,
                    priority: "P2",
                    what: ["Monetizes non-buyers and no-shows automatically", "Context-aware outreach based on previous chats", "Intent-triggered recovery sequences", "Automated calendar clean-up"],
                    why: "Recovers lost revenue sitting in your CRM from people who were 'almost' ready but fell off."
                },
                {
                    title: "Content intelligence",
                    icon: Target,
                    setup: 1500,
                    monthly: 450,
                    priority: "P3",
                    what: ["Competitor analysis and trend spotting", "Content scripting engine in your unique voice", "Viral hook library and performance tracking", "Automated content scheduling"],
                    why: "Cuts content creation time by 80% while ensuring every post is engineered to convert."
                },
                {
                    title: "Client app / Dashboard",
                    icon: Layout,
                    setup: 4500,
                    monthly: 850,
                    priority: "P4",
                    what: ["Branded hub for client engagement", "Automated progress and retention tracking", "Milestone notifications and LTV growth tools", "Centralized client communication"],
                    why: "Elevates the client experience to premium levels, increasing retention and lifetime value."
                },
            ].map((sys, i) => (
                 <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                    <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
                                <sys.icon className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <h3 className="font-bold text-sm text-gray-900">{sys.title}</h3>
                                    <span className="text-[9px] font-bold px-1.5 py-0.5 bg-gray-100 rounded text-gray-500 uppercase tracking-tighter">{sys.priority}</span>
                                </div>
                            </div>
                        </div>
                         <div className="flex items-center gap-4">
                             <div className="text-xs text-right hidden sm:block">
                                <div className="text-gray-400 font-medium">Setup: ${sys.setup.toLocaleString()}</div>
                                <div className="font-bold text-brand-600">${sys.monthly.toLocaleString()}/mo</div>
                             </div>
                             <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
                         </div>
                    </summary>
                    
                    <div className="px-4 pb-4 pt-0 border-t border-gray-100 bg-gray-50/30">
                         <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-[10px] font-bold uppercase text-gray-400 mb-2 tracking-widest">What this system does</h4>
                                <ul className="text-xs text-gray-600 space-y-2 list-disc pl-4">
                                    {sys.what.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-bold uppercase text-gray-400 mb-2 tracking-widest">Why this matters</h4>
                                <p className="text-xs text-gray-600 leading-relaxed font-medium italic border-l-2 border-brand-200 pl-3">
                                    {sys.why}
                                </p>
                            </div>
                        </div>
                    </div>
                </details>
            ))}
        </div>
    </div>
  </div>
);
