
import React from 'react';
import { TEAM } from '../data/team';

export const Team: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Who is <span className="text-brand-500">CrocodeFlow?</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          We aren't a bloated agency with 50 interns. We are a specialized hit-squad.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto">
        {TEAM.map((member, index) => (
          <div key={index} className="group relative">
            <div className="absolute inset-0 bg-brand-500 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform opacity-20 group-hover:opacity-30"></div>
            <div className="relative bg-dark-800 border border-dark-700 p-6 rounded-2xl h-full flex flex-col items-center text-center hover:border-brand-500/50 transition-colors duration-300">
              
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-brand-500/50 mb-6 shadow-[0_0_20px_rgba(34,197,94,0.2)] group-hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <h3 className="text-2xl font-bold text-white font-display mb-1">{member.name}</h3>
              <div className="text-brand-500 text-sm font-bold uppercase tracking-widest mb-4">{member.role}</div>
              
              <p className="text-gray-400 leading-relaxed text-sm">
                "{member.bio}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
