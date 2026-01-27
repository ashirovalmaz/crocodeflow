
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SYSTEMS } from '../../data/proposals';

export const SolutionsSlide: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <p className="text-gray-600 dark:text-gray-400 mb-4">
        These phases are prioritized around three things: Increasing booked calls & show-up rates, Improving ROI from leads you already generate, and Freeing your time from the DMs. Each system can be added modularly.
    </p>
    
    <div className="flex flex-col gap-4">
        {/* System 1 - Always Expanded & Prominent */}
        <div className="bg-white dark:bg-dark-800 rounded-xl border-2 border-brand-500 shadow-xl p-6 relative flex flex-col">
            <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Core P1</div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">System 1: AI-Powered DM Foundation + Custom Presentations</h3>
            <div className="text-sm text-brand-600 dark:text-brand-400 font-bold mb-4">Timeframe: 25–30 days</div>
            
            <div className="flex-grow space-y-6 mb-4">
                <div className="bg-brand-50 dark:bg-brand-900/10 p-4 rounded-lg border border-brand-100 dark:border-brand-500/20">
                     <h4 className="text-xs font-bold uppercase text-brand-700 dark:text-brand-400 mb-1">Goal</h4>
                     <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        Convert CTAs, comments, DMs, new followers, and existing warm leads into booked calls — consistently, instantly, and with personalized pre-call assets. The system begins working from the very first touchpoint and stays with the lead all the way until they actually join the scheduled call.
                     </p>
                </div>

                <div>
                    <h4 className="text-sm font-bold uppercase text-gray-900 dark:text-white mb-3">What this system does</h4>
                    
                    <div className="space-y-4 pl-2">
                         {/* Step 1 */}
                         <div className="relative pl-6 border-l-2 border-gray-200 dark:border-dark-700">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 dark:bg-dark-700 text-[10px] flex items-center justify-center font-bold text-gray-500">1</div>
                            <h5 className="text-sm font-bold text-gray-900 dark:text-white">Handles the very first interaction</h5>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 mb-2">
                                The system instantly interacts with potential clients triggered by:
                            </p>
                            <ul className="text-xs text-gray-600 dark:text-gray-400 list-disc pl-4 space-y-0.5">
                                <li>incoming DM</li>
                                <li>comment with a keyword</li>
                                <li>reply to your CTA</li>
                                <li>new follower</li>
                                <li>response to your lead magnet or macro calculator</li>
                            </ul>
                            <p className="text-xs font-medium text-brand-600 dark:text-brand-500 mt-1">This ensures zero lost leads and perfect speed-to-lead, even at 2am.</p>
                         </div>

                         {/* Step 2 */}
                         <div className="relative pl-6 border-l-2 border-gray-200 dark:border-dark-700">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 dark:bg-dark-700 text-[10px] flex items-center justify-center font-bold text-gray-500">2</div>
                            <h5 className="text-sm font-bold text-gray-900 dark:text-white">Qualifies leads with intelligent, conversational questions</h5>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 mb-2">
                                It asks personalized follow-up questions to understand:
                            </p>
                            <ul className="text-xs text-gray-600 dark:text-gray-400 list-disc pl-4 space-y-0.5">
                                <li>their goals & struggles</li>
                                <li>lifestyle constraints</li>
                                <li>urgency & timeline</li>
                                <li>past attempts & emotional drivers</li>
                            </ul>
                            <p className="text-xs text-gray-500 italic mt-1">This creates a natural “brain dump” dynamic — not a scripted chatbot.</p>
                         </div>

                         {/* Step 3 */}
                         <div className="relative pl-6 border-l-2 border-gray-200 dark:border-dark-700">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 dark:bg-dark-700 text-[10px] flex items-center justify-center font-bold text-gray-500">3</div>
                            <h5 className="text-sm font-bold text-gray-900 dark:text-white">Extracts key variables for personalization</h5>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                Every important detail (goal, obstacles, schedule, motivation) is stored and used dynamically in later steps. This allows the next steps to feel deeply personal and relevant.
                            </p>
                         </div>

                         {/* Step 4 */}
                         <div className="relative pl-6 border-l-2 border-gray-200 dark:border-dark-700">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 dark:bg-dark-700 text-[10px] flex items-center justify-center font-bold text-gray-500">4</div>
                            <h5 className="text-sm font-bold text-gray-900 dark:text-white">Generates a custom mini-presentation or plan</h5>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 mb-2">
                                For each qualified lead, the system produces a fully customized PDF, mini-deck, or carousel containing their goals (in their words), blockers, and your specific path for them.
                            </p>
                            <p className="text-xs font-medium text-gray-800 dark:text-gray-200 italic mt-1">
                                This is the first moment where prospects feel: “Damn… these guys actually prepared something for me.”
                            </p>
                         </div>

                         {/* Step 5 */}
                         <div className="relative pl-6 border-l-2 border-gray-200 dark:border-dark-700">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 dark:bg-dark-700 text-[10px] flex items-center justify-center font-bold text-gray-500">5</div>
                            <h5 className="text-sm font-bold text-gray-900 dark:text-white">Drives the lead toward booking a call</h5>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                The system transitions smoothly from qualification → value → booking. It offers the call only when intent is clear and gives a reason to book (“we prepared your plan… let’s walk through it together”).
                            </p>
                         </div>

                         {/* Step 6 */}
                         <div className="relative pl-6 border-l-2 border-gray-200 dark:border-dark-700">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 dark:bg-dark-700 text-[10px] flex items-center justify-center font-bold text-gray-500">6</div>
                            <h5 className="text-sm font-bold text-gray-900 dark:text-white">Sends automated, contextual reminders</h5>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 mb-2">
                                Sends reminders 3 days before, 24h before (with plan), 3h before, and 30m before.
                            </p>
                            <div className="bg-gray-50 dark:bg-dark-900 p-2 rounded text-[10px] text-gray-500 italic border border-gray-100 dark:border-dark-700">
                                Example: “Hey — since you mentioned that energy is a big issue for you, I want to make sure you take a quick look at the sleep section of your plan before the call tomorrow.”
                            </div>
                            <p className="text-xs text-brand-600 dark:text-brand-500 font-medium mt-1">
                                This dramatically improves show-up rate because it feels human.
                            </p>
                         </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-bold uppercase text-gray-900 dark:text-white mb-2">Why this matters</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                        This system solves your biggest bottleneck: <span className="font-bold">DM → booked call → showed-up call</span>.
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        It’s essentially two systems combined: <strong>Acquisition & DM conversion engine</strong> + <strong>Show-up maximization engine</strong>. We intentionally merged them because they rely on the same personalized data, and splitting them would reduce both effectiveness and clarity.
                    </p>
                </div>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-dark-700 flex justify-between items-center text-xs">
               <span className="text-gray-500">Setup: $2,500</span>
               <span className="font-bold text-gray-900 dark:text-white">$690/mo</span>
            </div>
        </div>

        {/* Other Systems - Collapsible Accordions */}
        <div className="space-y-3">
            {[
                {
                    sys: SYSTEMS[1],
                    what: ["Gives setters AI-powered suggested replies", "Alerts them to hot signals", "Prevents over-following up or missing messages", "Ensures consistency across all 3 setters"],
                    why: "Setters are your weakest operational link today. This system dramatically reduces human error.",
                },
                {
                    sys: SYSTEMS[2],
                    what: ["Pulls client data from CRM (goals, pain points)", "Builds personal strategy for reactivation", "Sends \"personally written\" messages based on context", "Recovers lost revenue automatically"],
                    why: "Turns \"cold storage\" leads into high-ROI booked calls without your involvement.",
                },
                {
                    sys: SYSTEMS[3],
                    what: ["Ingests and transcribes call recordings", "Extracts goals, objections, budget clues", "Auto-populates CRM & generates follow-ups"],
                    why: "Prevents \"lost leads\" post-call and strengthens show-up → close rate.",
                },
                {
                    sys: SYSTEMS[4],
                    what: ["Analyzes viral competitor posts & structure", "Generates scripts in your voice", "Recommends weekly topics & CTAs"],
                    why: "Ensures you never run out of proven content ideas and maintains consistency.",
                },
                {
                    sys: SYSTEMS[5],
                    what: ["Branded client app with progress tracking", "Personalized AI recommendations", "Daily check-ins and milestone nudges"],
                    why: "Increases stickiness, engagement, and retention — raising LTV.",
                },
            ].map(({ sys, what, why }) => (
                 <details key={sys.id} className="group bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 overflow-hidden">
                    <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-dark-700/50 transition-colors">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <h3 className="font-bold text-sm text-gray-900 dark:text-white">{sys.title}</h3>
                                <span className="text-[10px] font-bold px-2 py-0.5 bg-gray-100 dark:bg-dark-700 rounded text-gray-500">{sys.priority}</span>
                            </div>
                        </div>
                         <div className="flex items-center gap-3">
                             <div className="text-xs text-right hidden sm:block">
                                <div className="text-gray-500">Setup: ${sys.setup.toLocaleString()}</div>
                                <div className="font-bold text-gray-900 dark:text-white">${sys.monthly.toLocaleString()}/mo</div>
                             </div>
                             <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
                         </div>
                    </summary>
                    
                    <div className="px-4 pb-4 pt-0 border-t border-gray-100 dark:border-dark-700">
                         <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="text-xs font-bold uppercase text-gray-500 mb-1">What this system does</h4>
                                <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1 list-disc pl-4">
                                    {what.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold uppercase text-gray-500 mb-1">Why this matters</h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400">{why}</p>
                            </div>
                        </div>
                        
                        <div className="mt-4 sm:hidden text-xs flex justify-between pt-2 border-t border-gray-100 dark:border-dark-700">
                            <span className="text-gray-500">Setup: ${sys.setup.toLocaleString()}</span>
                            <span className="font-bold text-gray-900 dark:text-white">${sys.monthly.toLocaleString()}/mo</span>
                        </div>
                    </div>
                </details>
            ))}
        </div>
    </div>
  </div>
);
