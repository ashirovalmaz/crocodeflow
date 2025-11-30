
import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { ArrowRight, ArrowLeft, CheckCircle2, AlertTriangle, Calculator, Check, Target, Gift, FileSignature, Handshake, ChevronDown, ChevronUp } from 'lucide-react';
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
    desc: 'Transcribes calls, auto-populates CRM, generates insights',
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

const TermsSlideContent: React.FC = () => {
    const [selected, setSelected] = useState<string[]>(['sys1']);

    const toggle = (id: string) => {
        if (selected.includes(id)) {
            // Prevent unselecting everything? Maybe allow it but warn.
            if (selected.length === 1) return; 
            setSelected(selected.filter(s => s !== id));
        } else {
            setSelected([...selected, id]);
        }
    };

    const count = selected.length;
    let discountPercent = 0;
    
    if (count === 2) discountPercent = 0.10;
    else if (count === 3) discountPercent = 0.15;
    else if (count >= 4) discountPercent = 0.20;

    const baseSetup = SYSTEMS.reduce((acc, sys) => selected.includes(sys.id) ? acc + sys.setup : acc, 0);
    const totalMonthly = SYSTEMS.reduce((acc, sys) => selected.includes(sys.id) ? acc + sys.monthly : acc, 0);
    
    const discountAmount = baseSetup * discountPercent;
    const finalSetup = baseSetup - discountAmount;

    // Calculate Annual Option (Approx 45-50% savings on total first year value)
    // Formula: (Setup + 12 * Monthly) * 0.55 -> Rounded to nearest 100
    const firstYearValue = finalSetup + (totalMonthly * 12);
    const annualPrice = Math.floor((firstYearValue * 0.55) / 100) * 100;
    const annualSavings = firstYearValue - annualPrice;

    return (
        <div className="space-y-8 animate-fade-in max-w-6xl mx-auto">
            <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                To make this simple, low-risk, and fully aligned with your goals, I’m proposing we start with the core system. However, you can customize your implementation package below to include additional acceleration systems immediately.
            </p>

            {/* Customizer */}
            <div className="bg-gray-50 dark:bg-dark-800/50 rounded-xl border border-gray-200 dark:border-dark-700 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <Calculator className="w-5 h-5 text-brand-500"/> 
                    <h3 className="font-bold text-gray-700 dark:text-gray-300">Select Included Systems</h3>
                    <span className="text-xs text-gray-500 ml-auto">Pricing updates automatically below</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {SYSTEMS.map((sys) => {
                        const isSelected = selected.includes(sys.id);
                        return (
                            <div 
                                key={sys.id}
                                onClick={() => toggle(sys.id)}
                                className={`
                                    cursor-pointer rounded-lg p-3 border transition-all duration-200 flex items-start gap-3
                                    ${isSelected 
                                        ? 'bg-white dark:bg-dark-700 border-brand-500 shadow-sm ring-1 ring-brand-500' 
                                        : 'bg-white dark:bg-dark-800 border-gray-200 dark:border-dark-600 opacity-70 hover:opacity-100'
                                    }
                                `}
                            >
                                <div className={`
                                    w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center transition-colors mt-0.5
                                    ${isSelected ? 'bg-brand-500 border-brand-500' : 'border-gray-400'}
                                `}>
                                    {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-900 dark:text-white leading-tight mb-1">{sys.title}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">{sys.desc}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Pricing Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Standard Option */}
                <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl border border-gray-200 dark:border-dark-700 flex flex-col shadow-sm">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Option 1</h3>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Standard Engagement</h4>
                    
                    <div className="flex items-baseline gap-2 mb-1">
                        <div className="text-4xl font-display font-bold text-brand-600 dark:text-brand-500">
                            ${finalSetup.toLocaleString()}
                        </div>
                        <span className="text-lg font-normal text-gray-500">setup</span>
                    </div>
                    {discountAmount > 0 && (
                        <div className="text-xs text-brand-600 dark:text-brand-400 font-bold mb-2">
                            Includes ${discountAmount.toLocaleString()} Bundle Discount
                        </div>
                    )}
                    <div className="text-xl text-gray-600 dark:text-gray-400 mb-8">+ ${totalMonthly.toLocaleString()} / month</div>

                    <ul className="space-y-3 mb-8 flex-grow">
                        {SYSTEMS.filter(s => selected.includes(s.id)).map(sys => (
                            <li key={sys.id} className="flex gap-2 text-sm text-gray-600 dark:text-gray-300">
                                <Check className="w-4 h-4 text-brand-500 shrink-0"/> {sys.title}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Annual Option */}
                <div className="bg-gray-900 dark:bg-black p-8 rounded-2xl border border-brand-500/50 shadow-2xl relative overflow-hidden flex flex-col transform md:-translate-y-4">
                    <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                        Best Value
                    </div>
                    
                    <h3 className="text-sm font-bold uppercase tracking-wider text-brand-400 mb-2">Option 2</h3>
                    <h4 className="text-2xl font-bold text-white mb-6">Annual Engagement</h4>
                    
                    <div className="flex items-baseline gap-2 mb-2">
                        <div className="text-4xl font-display font-bold text-white">
                            ${annualPrice.toLocaleString()}
                        </div>
                        <span className="text-lg font-normal text-gray-400">upfront</span>
                    </div>
                    <div className="text-sm text-brand-400 font-bold mb-8 uppercase tracking-wide">
                        ~45% Total Savings
                    </div>

                    <div className="space-y-4 mb-8 flex-grow">
                         <div className="flex justify-between items-center text-sm border-b border-gray-800 pb-2">
                            <span className="text-gray-400">Standard 12-Mo Cost</span>
                            <span className="text-gray-500 line-through">${firstYearValue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm border-b border-gray-800 pb-2">
                            <span className="text-gray-400">Annual Plan Cost</span>
                            <span className="text-white font-bold">${annualPrice.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm bg-brand-500/10 p-2 rounded">
                            <span className="text-brand-400 font-bold">Total Savings</span>
                            <span className="text-brand-400 font-bold">${annualSavings.toLocaleString()}</span>
                        </div>
                    </div>
                    
                    <p className="text-xs text-gray-500 text-center">
                        One-time payment. No monthly fees for 12 months.
                    </p>
                </div>
            </div>
        </div>
    );
};

const PROPOSAL_CONTENT = [
  {
  id: 'welcome',
  title: "Proposal for Justin",
  subtitle: "AI Systems to Scale Your Coaching Business",
  content: (
    <div className="space-y-12 animate-fade-in max-w-3xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">
            Welcome, Justin 👋
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            This proposal outlines the systems, automations, and architecture we recommend to 
            help you unlock predictable growth, increase booked calls, improve show-up rate, 
            and scale your coaching brand toward <strong>$80–100k/month</strong> — 
            without adding more complexity or pulling you back into the DMs.
        </p>

        <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl border border-gray-200 dark:border-dark-700 shadow-md text-left">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-brand-500" />
                What you’ll find in this proposal
            </h3>

            <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-sm">
                <li className="flex gap-3">
                    <CheckCircle2 className="text-brand-500 w-5 h-5 shrink-0" />
                    A clear breakdown of your goals & the bottlenecks preventing scaling
                </li>
                <li className="flex gap-3">
                    <CheckCircle2 className="text-brand-500 w-5 h-5 shrink-0" />
                    A detailed systems architecture for fixing DM conversion, show-up rate, and lead efficiency
                </li>
                <li className="flex gap-3">
                    <CheckCircle2 className="text-brand-500 w-5 h-5 shrink-0" />
                    Pricing options with modular add-ons you can include immediately
                </li>
                <li className="flex gap-3">
                    <CheckCircle2 className="text-brand-500 w-5 h-5 shrink-0" />
                    A fast-action bonus to accelerate your implementation
                </li>
                <li className="flex gap-3">
                    <CheckCircle2 className="text-brand-500 w-5 h-5 shrink-0" />
                    A clear path to execution + next steps
                </li>
            </ul>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            Let’s get started.
        </p>
    </div>
  )
},
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
            With that out of the way, let us get a little more specific. We’ll start by outlining what we believe your goals are; then the key problems that are blocking those goals; then solutions to each of those problems; and finally how we believe we could implement them together.
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
                 As mentioned, one of your goals is to get to consistent $40–50k/month as a stepping stone to $80–100k+. Right now, the way your funnel is set up is actively preventing that. Let us explain.
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
    id: 'solutions',
    title: "Proposed Solutions",
    subtitle: "Phase 1 & 2: Systems Architecture",
    content: (
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
                    We want to become your AI Systems & Automation Partners.
                </h3>
                
                <div className="prose dark:prose-invert text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                    <p>
                        We’ve gotten a clear understanding of your business, your goals, and the bottlenecks that are slowing your growth — and we genuinely want to see you scale far beyond your current level. 
                        In our view, <span className="text-brand-600 dark:text-brand-500 font-bold">$80–100k/mo</span> is on the lower end of what’s possible for you with the right systems in place.
                    </p>
                    <p>
                        To that end, we want to become the team responsible for building, maintaining, and scaling the internal engines that drive your booked calls, show-up rates, reactivations, client experience, and long-term retention.
                    </p>
                    <p>
                        Our goal is simple: remove every operational bottleneck limiting your growth, and engineer a predictable machine behind your coaching brand.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                 <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">The Vision</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        If you choose to move forward, we’re confident we can solve the conversion issues you’re facing today and partner with you to scale this into a semi-autonomous acquisition and retention system capable of reliably supporting $1M+/year.
                    </p>
                 </div>
                 <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">The Partnership</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        You’d gain a dedicated partner team whose technical depth, systems thinking, and execution ability complement your expertise, brand, and market demand.
                    </p>
                 </div>
            </div>
        </div>
    )
  },
  {
    id: 'terms',
    title: "Terms of Engagement",
    subtitle: "Implementation Package",
    content: <TermsSlideContent />
  },
  {
  id: 'bonus',
  title: "Fast-Action Bonus",
  subtitle: "For Decisive Partners",
  content: (
    <div className="space-y-10 animate-fade-in max-w-4xl mx-auto">
      
      {/* Текст про быстрые решения */}
      <div className="bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-2xl p-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          We deeply value fast, clear decision-makers.
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          In our experience, the most enjoyable and successful clients tend to share one trait:
          they make decisions quickly once they have enough signal.Those are also the clients who get results fastest.
        </p>
      </div>

      {/* Бонусный блок */}
      <div className="bg-gradient-to-br from-brand-50 via-white to-white dark:from-brand-900/20 dark:via-dark-900 dark:to-dark-800 border border-brand-200 dark:border-brand-500/40 rounded-3xl p-10 relative overflow-hidden">
        
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_0%_0%,rgba(34,197,94,0.5),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(34,197,94,0.4),transparent_55%)]" />

        <div className="relative z-10 space-y-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center">
              <Gift className="w-8 h-8 text-brand-600 dark:text-brand-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white">
              Fast-Action Bonus for Justin
            </h3>
            <p className="text-sm uppercase tracking-[0.18em] text-brand-600 dark:text-brand-400 font-semibold">
              One Additional System · 0$ For 1 Year
            </p>
          </div>

          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            If you move forward within <strong>24 hours</strong> of receiving this proposal, we’ll waive the 
            setup fee on <strong>one additional system</strong> of your choice. This is our way of rewarding 
            clear, decisive partners — the ones we most enjoy building with.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
            <div className="bg-white dark:bg-dark-900 p-4 rounded-xl border border-gray-200 dark:border-dark-700 shadow-sm flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-500 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Personalized Reactivations</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Monetize non-buyers & no-shows in a way that still feels 1:1 and contextual.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-dark-900 p-4 rounded-xl border border-gray-200 dark:border-dark-700 shadow-sm flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-500 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Call Analysis & CRM</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Turn every call into structured data, insights, and intelligent follow-ups.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-dark-900 p-4 rounded-xl border border-gray-200 dark:border-dark-700 shadow-sm flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-500 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Content Intelligence</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Feed your audience with proven angles, hooks, and scripts tailored to your voice.
                </p>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 italic max-w-xl mx-auto">
            This is a full implementation, not a “lite” feature add-on. It requires us to front-load 
            additional dev and systems work — which is why we reserve it for founders who are ready to move.
          </p>
        </div>
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
                As mentioned, we believe strongly that your coaching company can be multiple times larger than it is now — especially with your existing audience size, the quality of your product, and the demand you’ve already proven.
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
                    We are ambitious and deeply committed to the craft of building AI systems that generate revenue autonomously. We wrote this in detail because we see the path clearly.
                </p>
            </div>
        </div>

        <div className="flex flex-col items-center gap-6 pt-8 border-t border-gray-200 dark:border-dark-800">
             <p className="text-gray-600 dark:text-gray-400 text-center max-w-lg">
                If this resonates and you’d like to move forward, simply let us know, we'll prepare an invoice for you so we can begin implementation immediately.
            </p>

            <p className="text-xs text-gray-400 dark:text-dark-600 text-center">
                If not, you’re still welcome to use everything we’ve laid out above; <br/>We genuinely want you and your brand to succeed.
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
      <Header isSharedPage={true} hideThemeToggle={true} />
      
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
    <div className="w-[180px]" /> // просто пустой блок-заглушка
)}
                </div>
            </div>

        </div>
      </main>
    </div>
  );
};
