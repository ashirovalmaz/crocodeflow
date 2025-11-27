import React from 'react';
import { TEAM } from '../data/team';
import { Fingerprint, BarChart2, Code2 } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
           <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Command <span className="text-brand-500">Unit</span>
          </h2>
          <p className="text-gray-400 max-w-xl text-lg">
             No account managers. No juniors. You work directly with the architects.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {TEAM.map((member, index) => (
          <div key={index} className="group bg-dark-900 border border-dark-700 rounded-2xl p-8 hover:border-brand-500/50 transition-all duration-300 relative overflow-hidden">
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

            <div className="flex flex-col sm:flex-row gap-8 items-start relative z-10">
              {/* Avatar Frame */}
              <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-dark-600 group-hover:border-brand-500 transition-colors">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-dark-900 border border-dark-600 p-1.5 rounded-lg text-brand-500">
                    <Fingerprint className="w-5 h-5" />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                   <h3 className="text-2xl font-bold text-white font-display">{member.name}</h3>
                   <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-brand-900/30 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider mt-2 sm:mt-0 w-fit">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></div> Active
                   </span>
                </div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    {index === 0 ? <Code2 className="w-4 h-4"/> : <BarChart2 className="w-4 h-4"/>}
                    {member.role}
                </div>
                
                <p className="text-gray-400 leading-relaxed text-sm border-l-2 border-dark-700 pl-4">
                  {member.bio}
                </p>

                {/* Tech Stats Mini-Grid */}
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-dark-800">
                    <div>
                        <div className="text-[10px] text-gray-600 uppercase font-bold tracking-wider mb-1">Specialty</div>
                        <div className="text-sm text-gray-300 font-medium">{index === 0 ? "System Architecture" : "Process Mining"}</div>
                    </div>
                    <div>
                        <div className="text-[10px] text-gray-600 uppercase font-bold tracking-wider mb-1">Focus</div>
                        <div className="text-sm text-gray-300 font-medium">{index === 0 ? "Automation" : "Revenue Ops"}</div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};