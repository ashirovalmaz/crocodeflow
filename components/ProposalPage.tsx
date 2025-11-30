import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { ArrowRight, ArrowLeft, CheckCircle2, AlertTriangle, Calculator, Check, Target, Gift, FileSignature, Handshake, ChevronDown } from 'lucide-react';
import { CAL_LINK } from '../constants';

// --- Types & Data ---

const SYSTEMS = [
  {
    id: 'sys1',
    title: 'System 1: AI DM Foundation + Presentations',
    desc: 'Automated conversion & booking flow + Custom PDF Plans',
    setup: 2500,
    monthly: 690,
    priority: 'Core P1'
  },
  {
    id: 'sys2',
    title: 'System 2: AI Setter Co-Pilot',
    desc: 'Assists human setters, prevents missed leads, ensures consistency',
    setup: 1600,
    monthly: 400,
    priority: 'High P2'
  },
  {
    id: 'sys3',
    title: 'System 3: Personalized Reactivation',
    desc: 'Monetizes "Non-Buyers" & No-Shows from CRM',
    setup: 1500,
    monthly: 450,
    priority: 'High P3'
  },
  {
    id: 'sys4',
    title: 'System 4: Call Analysis & CRM',
    desc: 'Transcribes calls, extracts insights, auto-populates CRM',
    setup: 1200,
    monthly: 300,
    priority: 'High P3'
  },
  {
    id: 'sys5',
    title: 'System 5: Content Intelligence',
    desc: 'Competitor analysis & script generation engine',
    setup: 1250,
    monthly: 400,
    priority: 'Med P4'
  },
  {
    id: 'sys6',
    title: 'System 6: Client App / Dashboard',
    desc: 'LTV Engagement, Progress Tracking, Retention',
    setup: 2500,
    monthly: 550,
    priority: 'Long-Term P5'
  }
];

// --- Internal Components ---

const PricingCalculator: React.FC = () => {
  const [selected, setSelected] = useState<string[]>(['sys1']); 

  const toggle = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(s => s !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const count = selected.length;
  let discountPercent = 0;
  let discountLabel = '';

  if (count === 2) { discountPercent = 0.10; discountLabel = '10% Bundle Discount'; }
  else if (count === 3) { discountPercent = 0.15; discountLabel = '15% Bundle Discount'; }
  else if (count >= 4) { discountPercent = 0.20; discountLabel = '20% Scale Discount'; }

  const totalSetup = SYSTEMS.reduce((acc, sys) => selected.includes(sys.id) ? acc + sys.setup : acc, 0);
  const totalMonthly = SYSTEMS.reduce((acc, sys) => selected.includes(sys.id) ? acc + sys.monthly : acc, 0);
  
  const discountAmount = totalSetup * discountPercent;
  const finalSetup = totalSetup - discountAmount;

  return (
    <div className="space-y-8 animate-fade-in">
        <p className="text-gray-600 dark:text-gray-400">
            Select the modules you want to implement. Pricing updates dynamically.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Selection Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 gap-4">
                {SYSTEMS.map((sys) => {
                    const isSelected = selected.includes(sys.id);
                    return (
                        <div 
                            key={sys.id}
                            onClick={() => toggle(sys.id)}
                            className={`
                                relative cursor-pointer rounded-xl p-4 border-2 transition-all duration-200 flex items-center gap-4
                                ${isSelected 
                                    ? 'bg-brand-50 dark:bg-brand-900/10 border-brand-500 shadow-sm' 
                                    : 'bg-white dark:bg-dark-800 border-gray-200 dark:border-dark-700 hover:border-brand-200 dark:hover:border-brand-500/30'
                                }
                            `}
                        >
                            <div className={`
                                w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                                ${isSelected ? 'bg-brand-500 border-brand-500' : 'border-gray-300 dark:border-dark-600'}
                            `}>
                                {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                            </div>

                            <div className="flex-grow">
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className={`font-bold text-sm md:text-base ${isSelected ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                                        {sys.title}
                                    </h4>
                                    <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 dark:bg-dark-700 text-gray-500 px-2 py-0.5 rounded ml-2 whitespace-nowrap">
                                        {sys.priority}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-500">{sys.desc}</p>
                            </div>

                            <div className="text-right min-w-[100px]">
                                <div className="text-sm font-bold text-gray-900 dark:text-white">${sys.setup.toLocaleString()}</div>
                                <div className="text-xs text-gray-500">+${sys.monthly}/mo</div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Sticky Summary Card */}
            <div className="lg:col-span-4">
                <div className="bg-gray-900 dark:bg-black text-white rounded-2xl p-6 shadow-2xl border border-gray-800 dark:border-dark-700">
                    <div className="flex items-center gap-2 mb-6 text-brand-400 font-bold uppercase tracking-widest text-xs">
                        <Calculator className="w-4 h-4" /> Estimated Investment
                    </div>

                    <div className="space-y-4 mb-6 pb-6 border-b border-gray-800">
                        <div className="flex justify-between text-sm text-gray-400">
                            <span>Selected Systems</span>
                            <span className="text-white font-mono">{count}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-400">
                            <span>Base Setup Fee</span>
                            <span className="text-white font-mono">${totalSetup.toLocaleString()}</span>
                        </div>
                        {discountPercent > 0 && (
                            <div className="flex justify-between text-sm text-brand-400">
                                <span>{discountLabel}</span>
                                <span className="font-mono">-${discountAmount.toLocaleString()}</span>
                            </div>
                        )}
                    </div>

                    <div className="space-y-1 mb-8">
                        <div className="text-xs text-gray-500 uppercase tracking-wider">One-Time Setup</div>
                        <div className="text-4xl font-display font-bold text-white tracking-tight">
                            ${finalSetup.toLocaleString()}
                        </div>
                        {discountPercent > 0 && (
                            <div className="text-xs text-brand-400 font-bold bg-brand-500/10 inline-block px-2 py-0.5 rounded mt-1">
                                You Save ${discountAmount.toLocaleString()}
                            </div>
                        )}
                    </div>

                    <div className="space-y-1 mb-8">
                         <div className="text-xs text-gray-500 uppercase tracking-wider">Monthly Retainer</div>
                         <div className="text-2xl font-display font-bold text-gray-300">
                            ${totalMonthly.toLocaleString()}<span className="text-sm font-normal text-gray-600">/mo</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

const PROPOSAL_CONTENT = [
  {
    id: 'executive-summary',
    title: "Executive Summary",
    subtitle: "Scaling to $80–100k/mo",
    content: (
      <div className="space-y-8 animate-fade-in">
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
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
              { title: "Deep Market Understanding", text: "You know the language they use, the offers that resonate, and you consistently generate 100–150 warm leads per week when you push." },
              { title: "Massive Audience Reach", text: "You and your fiancée have a combined audience of ~500K followers on Instagram, plus strong story views. The opportunity is already there; it’s primarily a conversion problem." },
              { title: "Ethical Approach", text: "You genuinely care about your clients and your team. You’re not trying to “replace humans with robots”, but to give your team leverage and make better use of the volume you’re already creating." },
              { title: "Founder Bottleneck", text: "Like many strong founders, you’re charismatic, intelligent, and—unfortunately—the bottleneck. When you personally jump into the DMs, calls book and close; when you don’t, things stall." }
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
        
        <p className="text-gray-600 dark:text-gray-400 italic">
            With that out of the way, let us get a little more specific. We’ll start by outlining what I believe your goals are; then the key problems that are blocking those goals; then solutions to each of those problems; and finally how we believe we could implement them together.
        </p>
      </div>
    )
  },
  {
    id: 'goals',
    title: "Your Goals",
    subtitle: "What we heard between the lines",
    content: (
      <div className="space-y-8 animate-fade-in">
        <p className="text-gray-600 dark:text-gray-400">
             Here’s what we believe you want (that you have yet to fully achieve) from the coaching business:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
                "Consistent $40–50k/month in the next few months, as a baseline you can rely on.",
                "Scaling to $80–100k/month within 12 months, once the conversion and booking issues are resolved.",
                "A predictable flow of booked calls from your existing audience and ads, so that hitting revenue targets is about math and not hope.",
                "To leverage the 100–150 warm leads/week you can generate (via ads + organic CTAs) instead of watching them slip through the cracks.",
                "More freedom and flexibility: less time personally saving deals in the DMs at 11pm, more time on leadership, content, and rest.",
                "The ability to bring on and fill assistant coaches confidently, because you trust the leadflow and call volume.",
                "To duplicate what works for you onto your fiancée’s side of the business, turning this into a multi-stream coaching machine.",
                "To differentiate from the generic “DM script + GHL reminders” everyone else is running, by offering prospects an actually personalized experience (custom breakdown, custom presentation, etc.), without increasing your personal workload."
            ].map((goal, i) => (
                <div key={i} className="bg-gray-50 dark:bg-dark-800/50 p-6 rounded-xl border border-gray-200 dark:border-dark-700 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                    <span className="text-gray-800 dark:text-gray-200 font-medium text-sm leading-relaxed">{goal}</span>
                </div>
            ))}
        </div>
        <p className="text-center text-gray-500 dark:text-gray-400 italic text-sm">
            If any of these are off, we’re happy to adjust—but this is what we heard between the lines of our call.
        </p>
      </div>
    )
  },
  {
    id: 'problems-1',
    title: "The Bottlenecks (1/2)",
    subtitle: "Why the current funnel prevents scaling",
    content: (
      <div className="space-y-12 animate-fade-in">
        <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-xl">
            <p className="text-lg text-red-800 dark:text-red-200 font-medium">
                 As mentioned, one of your goals is to get to consistent $40–50k/month as a stepping stone to $80–100k+. Right now, the way your funnel is set up is actively preventing that. Let me explain.
            </p>
        </div>

        <div className="space-y-8">
            <div className="group">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" /> 1. DM conversion bottleneck (not a lead gen problem)
                </h3>
                <div className="pl-7 border-l-2 border-gray-200 dark:border-dark-700 ml-2">
                    <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                        You already proved that lead volume is not the issue:
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>80–100 warm leads per week from direct-to-DM ads for lead magnets.</li>
                            <li>100–150+ warm leads per week when you combine ads and organic CTAs.</li>
                            <li>7–20k story views and 3–4k new followers in a 1–2 month window.</li>
                        </ul>
                    </div>
                    <p className="text-gray-900 dark:text-white font-medium text-sm mb-2">
                        Despite that, almost none of those leads consistently become booked calls unless you personally intervene.
                    </p>
                     <p className="text-gray-900 dark:text-white font-medium text-sm mb-2">
                        This means the real bottleneck is: <br/> <span className="font-bold text-brand-600 dark:text-brand-500">“Lead → DM conversation → qualified → booked → showed”</span>, <br/> not “getting more leads”.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs italic">
                        Every week this persists, you’re leaving booked calls (and revenue) on the table.
                    </p>
                </div>
            </div>

            <div className="group">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500" /> 2. Setter underperformance and inconsistency
                </h3>
                <div className="pl-7 border-l-2 border-gray-200 dark:border-dark-700 ml-2">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
                        From our conversation:
                        <br/>• Speed-to-lead is inconsistent; some DMs are simply missed.
                        <br/>• The setter follows up multiple times with people who never replied once, making you look like a bot and burning trust.
                        <br/>• New setters are being rotated in and tested, but there is still no guarantee the human layer will perform at the level you need.
                    </p>
                    <p className="text-gray-900 dark:text-white font-medium text-sm">
                        In short: You have human inconsistency on a process that demands speed, context, and reliability.
                    </p>
                </div>
            </div>

            <div className="group">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500" /> 3. Low show-up rate due to generic pre-call experience
                </h3>
                <div className="pl-7 border-l-2 border-gray-200 dark:border-dark-700 ml-2">
                    <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                        You mentioned weeks with:
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>9 calls booked → only 3 show up.</li>
                        </ul>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                        Given your close rate (50–60% on show-ups), this is a huge leak.
                        <br/>Right now, the pre-call experience is: <span className="italic">A few questions in the DMs → “book a call” → generic reminders.</span>
                    </p>
                    <p className="text-gray-900 dark:text-white font-medium text-sm mb-4">
                        What’s missing is: <br/>
                        A custom, high-value pre-call asset (e.g. tailored presentation/plan) that makes them feel, <span className="italic">“These guys actually prepared something for me, I’d be stupid not to show up.”</span>
                    </p>
                     <p className="text-gray-900 dark:text-white font-medium text-sm">
                        Without this, prospects feel like they’re just entering “another sales call”, so they flake more.
                    </p>
                </div>
            </div>
        </div>
      </div>
    )
  },
  {
    id: 'problems-2',
    title: "The Bottlenecks (2/2)",
    subtitle: "Why the current funnel prevents scaling",
    content: (
      <div className="space-y-12 animate-fade-in">
        <div className="space-y-8">
            <div className="group">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500" /> 4. Reliance on generic automations
                </h3>
                <div className="pl-7 border-l-2 border-gray-200 dark:border-dark-700 ml-2">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
                        Current automations: GHL reminders and basic texts → generic and unpersonalized. Non-buyers are thrown into a 365-day nurture sequence that is not truly based on their goals, struggles, or what was said.
                    </p>
                    <p className="text-gray-900 dark:text-white font-medium text-sm">
                        In a market where everyone has a lead magnet and a 5-step reminder sequence, generic automations blend into the noise. People grab the free thing and forget. You need personalized automations that feel human.
                    </p>
                </div>
            </div>

            <div className="group">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500" /> 5. You are still the “break-glass-in-case-of-emergency” closer
                </h3>
                <div className="pl-7 border-l-2 border-gray-200 dark:border-dark-700 ml-2">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
                        You said it yourself: “If I jump into the DMs, we get calls booked and deals closed. I just don’t want to spend my time that way.”
                        <br/>Right now: The most valuable operator in the company (you) is occasionally doing $20–$40/hr DM work, just to plug holes.
                    </p>
                    <p className="text-gray-900 dark:text-white font-medium text-sm">
                        Every time you do this, you’re not creating higher-level content, building systems, or designing offers that could move you toward $80–100k/mo. This is the classic founder bottleneck.
                    </p>
                </div>
            </div>

            <div className="group">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500" /> 6. Untapped upside on your fiancée’s side
                </h3>
                <div className="pl-7 border-l-2 border-gray-200 dark:border-dark-700 ml-2">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
                        You mentioned your fiancée runs her own coaching side. If this system works for you, you’d want to clone it for her. Right now, that’s pure upside that’s waiting on fixing the main funnel.
                    </p>
                    <p className="text-gray-900 dark:text-white font-medium text-sm">
                        In other words: every improvement we make for you can be multiplied x2–3 across the other brand(s).
                    </p>
                </div>
            </div>
        </div>

        <div className="bg-gray-100 dark:bg-dark-800 p-6 rounded-xl text-center">
            <p className="text-gray-700 dark:text-gray-300 font-medium">
                If these problems aren’t addressed, the pattern will likely continue: You generate leads → Setters handle them "okay-ish" → You feel compelled to jump in → Revenue plateaus at ~$30–40k.
            </p>
        </div>
      </div>
    )
  },
  {
    id: 'solutions-1',
    title: "Proposed Solutions (1/2)",
    subtitle: "Phase 1: Conversion & Consistency",
    content: (
      <div className="space-y-8 animate-fade-in">
        <p className="text-gray-600 dark:text-gray-400">
            These phases are prioritized around three things: Increasing booked calls & show-up rates, Improving ROI from leads you already generate, and Freeing your time from the DMs. Each system can be added modularly.
        </p>
        
        <div className="grid grid-cols-1 gap-6">
            {/* System 1 */}
            <div className="bg-white dark:bg-dark-800 rounded-xl border-2 border-brand-500 shadow-lg p-6 relative flex flex-col">
                <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Core P1</div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">System 1: AI-Powered DM Foundation + Custom Presentations</h3>
                
                <div className="flex-grow space-y-4 mb-4">
                    <div>
                        <h4 className="text-xs font-bold uppercase text-gray-500 mb-1">What this system does</h4>
                        <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1 list-disc pl-4">
                            <li>Interacts with potential clients (comments, DMs)</li>
                            <li>Qualifies leads with intelligent questions</li>
                            <li>Pulls key variables (goals, struggles)</li>
                            <li>Generates a custom mini-presentation/plan</li>
                            <li>Drives them to book a call frictionlessly</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold uppercase text-gray-500 mb-1">Why this matters</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Directly addresses your biggest bottleneck: DM → call conversion. Lifts show-up rates via tailored assets.</p>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-dark-700 flex justify-between items-center text-xs">
                   <span className="text-gray-500">Setup: $2,500</span>
                   <span className="font-bold text-gray-900 dark:text-white">$690/mo</span>
                </div>
            </div>

            {/* System 2 */}
            <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-6 relative flex flex-col">
                 <div className="absolute top-0 right-0 bg-gray-200 dark:bg-dark-600 text-gray-600 dark:text-gray-300 text-xs font-bold px-3 py-1 rounded-bl-lg">High P2</div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">System 2: AI Setter Co-Pilot</h3>
                
                <div className="flex-grow space-y-4 mb-4">
                    <div>
                        <h4 className="text-xs font-bold uppercase text-gray-500 mb-1">What this system does</h4>
                        <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1 list-disc pl-4">
                            <li>Gives setters AI-powered suggested replies</li>
                            <li>Alerts them to hot signals</li>
                            <li>Prevents over-following up or missing messages</li>
                            <li>Ensures consistency across all 3 setters</li>
                        </ul>
                    </div>
                    <div>
                         <h4 className="text-xs font-bold uppercase text-gray-500 mb-1">Why this matters</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Setters are your weakest operational link today. This system dramatically reduces human error.</p>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-dark-700 flex justify-between items-center text-xs">
                   <span className="text-gray-500">Setup: ~$1.6k</span>
                   <span className="font-bold text-gray-900 dark:text-white">~$400/mo</span>
                </div>
            </div>

            {/* System 3 */}
            <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-6 relative flex flex-col">
                 <div className="absolute top-0 right-0 bg-gray-200 dark:bg-dark-600 text-gray-600 dark:text-gray-300 text-xs font-bold px-3 py-1 rounded-bl-lg">High P3</div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">System 3: Personalized Re-Activation</h3>
                
                <div className="flex-grow space-y-4 mb-4">
                    <div>
                        <h4 className="text-xs font-bold uppercase text-gray-500 mb-1">What this system does</h4>
                        <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1 list-disc pl-4">
                            <li>Pulls client data from CRM (goals, pain points)</li>
                            <li>Builds personal strategy for reactivation</li>
                            <li>Sends "personally written" messages based on context</li>
                            <li>Recovers lost revenue automatically</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold uppercase text-gray-500 mb-1">Why this matters</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Turns "cold storage" leads into high-ROI booked calls without your involvement.</p>
                    </div>
                </div>

                 <div className="pt-4 border-t border-gray-100 dark:border-dark-700 flex justify-between items-center text-xs">
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
    title: "Proposed Solutions (2/2)",
    subtitle: "Phase 2: Intelligence & Retention",
    content: (
      <div className="space-y-8 animate-fade-in">
        <div className="grid grid-cols-1 gap-6">
            {/* System 4 */}
            <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-6 relative flex flex-col">
                 <div className="absolute top-0 right-0 bg-gray-200 dark:bg-dark-600 text-gray-600 dark:text-gray-300 text-xs font-bold px-3 py-1 rounded-bl-lg">High P3</div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">System 4: AI Call Analysis & CRM Enrichment</h3>
                
                <div className="flex-grow space-y-4 mb-4">
                    <div>
                        <h4 className="text-xs font-bold uppercase text-gray-500 mb-1">What this system does</h4>
                        <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1 list-disc pl-4">
                            <li>Ingests and transcribes call recordings</li>
                            <li>Extracts goals, objections, budget clues</li>
                            <li>Auto-populates CRM & generates follow-ups</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold uppercase text-gray-500 mb-1">Why this matters</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Prevents "lost leads" post-call and strengthens show-up → close rate.</p>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-dark-700 flex justify-between items-center text-xs">
                   <span className="text-gray-500">Setup: ~$1.2k</span>
                   <span className="font-bold text-gray-900 dark:text-white">~$300/mo</span>
                </div>
            </div>

            {/* System 5 */}
            <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-6 relative flex flex-col">
                 <div className="absolute top-0 right-0 bg-gray-100 dark:bg-dark-700 text-gray-500 text-xs font-bold px-3 py-1 rounded-bl-lg">Med P4</div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">System 5: Content Intelligence Engine</h3>
                
                <div className="flex-grow space-y-4 mb-4">
                    <div>
                        <h4 className="text-xs font-bold uppercase text-gray-500 mb-1">What this system does</h4>
                        <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1 list-disc pl-4">
                            <li>Analyzes viral competitor posts & structure</li>
                            <li>Generates scripts in your voice</li>
                            <li>Recommends weekly topics & CTAs</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold uppercase text-gray-500 mb-1">Why this matters</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Ensures you never run out of proven content ideas and maintains consistency.</p>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-dark-700 flex justify-between items-center text-xs">
                   <span className="text-gray-500">Setup: ~$1.2k</span>
                   <span className="font-bold text-gray-900 dark:text-white">~$400/mo</span>
                </div>
            </div>

            {/* System 6 */}
            <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-6 relative flex flex-col">
                 <div className="absolute top-0 right-0 bg-gray-100 dark:bg-dark-700 text-gray-500 text-xs font-bold px-3 py-1 rounded-bl-lg">Long-Term P5</div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">System 6: Client App / LTV Dashboard</h3>
                
                <div className="flex-grow space-y-4 mb-4">
                     <div>
                        <h4 className="text-xs font-bold uppercase text-gray-500 mb-1">What this system does</h4>
                        <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1 list-disc pl-4">
                            <li>Branded client app with progress tracking</li>
                            <li>Personalized AI recommendations</li>
                            <li>Daily check-ins and milestone nudges</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold uppercase text-gray-500 mb-1">Why this matters</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Increases stickiness, engagement, and retention — raising LTV.</p>
                    </div>
                </div>

                 <div className="pt-4 border-t border-gray-100 dark:border-dark-700 flex justify-between items-center text-xs">
                   <span className="text-gray-500">Setup: ~$2.5k</span>
                   <span className="font-bold text-gray-900 dark:text-white">~$550/mo</span>
                </div>
            </div>
        </div>
      </div>
    )
  },
  {
    id: 'pitch',
    title: "My Pitch",
    subtitle: "Why CrocodeFlow?",
    content: (
        <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
            <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl border border-gray-200 dark:border-dark-700 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-brand-500"></div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-display">
                    I want to become your AI Systems & Automation Partner.
                </h3>
                
                <div className="prose dark:prose-invert text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                    <p>
                        I've grown to really enjoy working with your company and I deeply want to see it succeed far past its current level. 
                        I think <span className="text-brand-600 dark:text-brand-500 font-bold">$80–100k/mo</span> is on the lower end of what's possible, if I'm being honest.
                    </p>
                    <p>
                        To that end, I want to become the person responsible for building, maintaining, and scaling the internal engines that drive your booked calls, show-up rates, reactivations, client experience, and LTV.
                    </p>
                    <p>
                        My goal is simple: help you remove every operational bottleneck that limits your growth, and engineer a predictable machine behind your coaching brand.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                 <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">The Vision</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        If you accept, I believe I can solve your current conversion issues and pair with you to scale this into a semi-autonomous acquisition and retention system that reliably supports $1M+/year.
                    </p>
                 </div>
                 <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">The Partnership</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        You'd gain a partner who is as invested in your success as you are, with the technical depth, strategic thinking, and execution ability to match your competence, reputation, and market demand.
                    </p>
                 </div>
            </div>
        </div>
    )
  },
  {
    id: 'terms',
    title: "Terms of Engagement",
    subtitle: "System 1 Implementation",
    content: (
        <div className="space-y-12 animate-fade-in max-w-5xl mx-auto">
            <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                To make this simple, low-risk, and fully aligned with your goals, I’m proposing we start with <strong>one system only</strong> — the core system that will have the biggest and fastest impact on your booked calls and show-up rate: <strong>System 1</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Standard Option */}
                <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl border border-gray-200 dark:border-dark-700 flex flex-col">
                    <h3 className="text-lg font-bold uppercase tracking-wider text-gray-500 mb-2">Option 1</h3>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Standard Engagement</h4>
                    
                    <div className="text-4xl font-display font-bold text-brand-600 dark:text-brand-500 mb-2">$2,500 <span className="text-lg font-normal text-gray-500">setup</span></div>
                    <div className="text-xl text-gray-600 dark:text-gray-400 mb-8">+ $690 / month</div>

                    <ul className="space-y-3 mb-8 flex-grow">
                        <li className="flex gap-2 text-sm text-gray-600 dark:text-gray-300"><Check className="w-4 h-4 text-brand-500 shrink-0"/> Full Implementation of System 1</li>
                        <li className="flex gap-2 text-sm text-gray-600 dark:text-gray-300"><Check className="w-4 h-4 text-brand-500 shrink-0"/> Qualification Logic & Instant CTA</li>
                        <li className="flex gap-2 text-sm text-gray-600 dark:text-gray-300"><Check className="w-4 h-4 text-brand-500 shrink-0"/> Personalized Plan Generation</li>
                        <li className="flex gap-2 text-sm text-gray-600 dark:text-gray-300"><Check className="w-4 h-4 text-brand-500 shrink-0"/> Intelligent Reminders</li>
                        <li className="flex gap-2 text-sm text-gray-600 dark:text-gray-300"><Check className="w-4 h-4 text-brand-500 shrink-0"/> Ongoing Optimization</li>
                    </ul>
                </div>

                {/* Annual Option */}
                <div className="bg-gray-900 dark:bg-black p-8 rounded-2xl border border-brand-500/50 shadow-2xl relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                        Best Value
                    </div>
                    
                    <h3 className="text-lg font-bold uppercase tracking-wider text-brand-400 mb-2">Option 2</h3>
                    <h4 className="text-2xl font-bold text-white mb-6">Annual Engagement</h4>
                    
                    <div className="text-4xl font-display font-bold text-white mb-2">$6,000 <span className="text-lg font-normal text-gray-400">upfront</span></div>
                    <div className="text-sm text-brand-400 font-bold mb-8 uppercase tracking-wide">Nearly 50% Savings</div>

                    <div className="space-y-4 mb-8 flex-grow">
                         <div className="flex justify-between items-center text-sm border-b border-gray-800 pb-2">
                            <span className="text-gray-400">Monthly Plan Cost</span>
                            <span className="text-gray-500 line-through">$8,280/yr</span>
                        </div>
                        <div className="flex justify-between items-center text-sm border-b border-gray-800 pb-2">
                            <span className="text-gray-400">Annual Plan Cost</span>
                            <span className="text-white font-bold">$6,000/yr</span>
                        </div>
                        <div className="flex justify-between items-center text-sm bg-brand-500/10 p-2 rounded">
                            <span className="text-brand-400 font-bold">Total Savings</span>
                            <span className="text-brand-400 font-bold">$2,280</span>
                        </div>
                    </div>
                    
                    <p className="text-xs text-gray-500 text-center">
                        Effective cost: $500/month. No monthly payments.
                    </p>
                </div>
            </div>

            {/* Collapsible Calculator */}
            <details className="bg-gray-50 dark:bg-dark-800/50 rounded-xl border border-gray-200 dark:border-dark-700">
                <summary className="p-6 cursor-pointer font-bold flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-brand-500 select-none">
                    <Calculator className="w-5 h-5"/> Customize Your Package (Full Stack Calculator)
                    <ChevronDown className="w-4 h-4 ml-auto" />
                </summary>
                <div className="p-6 border-t border-gray-200 dark:border-dark-700">
                    <PricingCalculator />
                </div>
            </details>
        </div>
    )
  },
  {
    id: 'bonus',
    title: "Fast-Action Bonus",
    subtitle: "Valid for 24 Hours",
    content: (
        <div className="space-y-8 animate-fade-in max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-b from-brand-50 to-white dark:from-brand-900/20 dark:to-dark-800 border border-brand-200 dark:border-brand-500/30 rounded-3xl p-12 relative overflow-hidden">
                {/* Decorative confetti */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,_rgba(34,197,94,0.4)_0%,_transparent_50%)]"></div>

                <div className="w-20 h-20 bg-brand-100 dark:bg-brand-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Gift className="w-10 h-10 text-brand-600 dark:text-brand-400 animate-pulse" />
                </div>

                <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
                    One Additional System <span className="text-brand-600 dark:text-brand-500">100% FREE</span>
                </h3>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    If you decide in the next 24 hours, you’ll receive one additional system of your choice with <strong>no setup fee</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-3xl mx-auto mb-8">
                     <div className="bg-white dark:bg-dark-900 p-4 rounded-xl border border-gray-200 dark:border-dark-700 shadow-sm flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-500" />
                        <span className="text-sm font-bold">Personalized Reactivations</span>
                     </div>
                     <div className="bg-white dark:bg-dark-900 p-4 rounded-xl border border-gray-200 dark:border-dark-700 shadow-sm flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-500" />
                        <span className="text-sm font-bold">Call Analysis & CRM</span>
                     </div>
                     <div className="bg-white dark:bg-dark-900 p-4 rounded-xl border border-gray-200 dark:border-dark-700 shadow-sm flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-500" />
                        <span className="text-sm font-bold">Content Intel Engine</span>
                     </div>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                    This is a full system, not a “lite” version. It requires me to front-load additional development time, so I only offer it when someone is ready to move quickly.
                </p>
            </div>
        </div>
    )
  },
  {
    id: 'closing',
    title: "In Closing",
    subtitle: "The Next Steps",
    content: (
      <div className="space-y-12 animate-fade-in max-w-4xl mx-auto">
        <div className="prose dark:prose-invert max-w-none text-center">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                As mentioned, I believe strongly that your coaching company can be multiple times larger than it is now — especially with your existing audience size, the quality of your product, and the demand you’ve already proven.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl border border-gray-200 dark:border-dark-700">
                <FileSignature className="w-10 h-10 text-brand-500 mb-6" />
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">The Execution</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    With a few focused improvements to your DM workflows, follow-ups, nurturing, and call prep, you can convert significantly more of the leads you already generate. Scaling becomes a matter of operations, not luck.
                </p>
            </div>
            <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl border border-gray-200 dark:border-dark-700">
                <Handshake className="w-10 h-10 text-brand-500 mb-6" />
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">The Commitment</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    I am ambitious and deeply committed to the craft of building AI systems that generate revenue autonomously. I wrote this in detail because I see the path clearly.
                </p>
            </div>
        </div>

        <div className="flex flex-col items-center gap-6 pt-8 border-t border-gray-200 dark:border-dark-800">
             <p className="text-gray-600 dark:text-gray-400 text-center max-w-lg">
                If this resonates and you’d like to move forward, simply pay the associated invoice and we can begin implementation immediately.
            </p>
            
            <a 
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-brand-600 hover:bg-brand-500 text-white text-xl font-bold rounded-xl shadow-xl hover:shadow-brand-500/30 transition-all flex items-center gap-3 transform hover:-translate-y-1"
            >
                Let's Build It <ArrowRight className="w-6 h-6" />
            </a>

            <p className="text-xs text-gray-400 dark:text-dark-600 text-center">
                If not, you’re still welcome to use everything I’ve laid out above; <br/>I genuinely want you and your company to succeed.
            </p>
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
                            Book Implementation Call <ArrowRight className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>

        </div>
      </main>
    </div>
  );
};