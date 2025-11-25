import React from 'react';
import { Bot, Database, TrendingUp, MessageCircle, Mic, Network, ArrowRight } from 'lucide-react';
import { CAL_LINK } from '../constants';

const SERVICES = [
  {
    icon: MessageCircle,
    title: "The 24/7 Sales Closer",
    description: "Not a 'support bot'. A sales agent. It chats, handles objections, and books meetings while your sales team sleeps."
  },
  {
    icon: Mic,
    title: "AI Voice Callers",
    description: "Outbound AI that calls 10,000 leads in an hour. It sounds human, books appointments, and filters out the tire-kickers."
  },
  {
    icon: Database,
    title: "Lead Enrichment Ops",
    description: "Stop researching manually. Our bots scrape, verify, and enrich your CRM with data so your team only talks to qualified buyers."
  },
  {
    icon: TrendingUp,
    title: "Predictive Supply Chain",
    description: "Don't guess what to order. Our models analyze historical data to tell you exactly what sells and when."
  },
  {
    icon: Network,
    title: "Total Workflow Autopilot",
    description: "We connect your disparate apps. If a lead hits your site, they get emailed, texted, and added to your CRM instantly."
  },
  {
    icon: Bot,
    title: "Custom Growth Architecture",
    description: "Don't see what you need? We build bespoke AI infrastructure tailored to your specific bottlenecks."
  }
];

export const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            We Don't Build "Tools". <br />
            <span className="text-brand-500">We Build Revenue Engines.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Most agencies give you a shiny toy. We give you infrastructure that replaces entire departments and prints cash.
          </p>
        </div>
        <div className="hidden md:block">
            <div className="w-24 h-1 bg-brand-500 rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, index) => {
          const isLast = index === SERVICES.length - 1;
          
          if (isLast) {
            return (
              <a 
                key={index}
                href={CAL_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-8 rounded-xl bg-brand-600 border border-brand-500 hover:bg-brand-500 transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.15)] hover:shadow-[0_0_50px_rgba(34,197,94,0.4)] flex flex-col cursor-pointer transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white font-display">{service.title}</h3>
                <p className="text-brand-100 leading-relaxed text-sm mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                   Book Strategy Call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          }

          return (
            <div key={index} className="group p-8 rounded-xl bg-dark-800 border border-dark-700 hover:border-brand-500 hover:bg-dark-800/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-dark-700 flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors group-hover:scale-110 duration-300">
                <service.icon className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white font-display">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};