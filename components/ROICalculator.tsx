import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CAL_LINK } from '../constants';

const DATA = [
  { month: 'Now', manual: 10000, automated: 10000 },
  { month: '+1 Mo', manual: 12000, automated: 16000 },
  { month: '+2 Mo', manual: 13500, automated: 24000 },
  { month: '+3 Mo', manual: 15000, automated: 36000 },
  { month: '+4 Mo', manual: 16000, automated: 52000 },
  { month: '+5 Mo', manual: 17500, automated: 74000 },
];

export const ROICalculator: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
          The High Cost of <br />
          <span className="text-red-500">Doing Nothing</span>
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          While you hesitate, your competitors are automating. 
          The gap doesn't grow linearly; it grows exponentially. 
          Every day you don't automate is money set on fire.
        </p>
        
        <ul className="space-y-4 mb-8 border-l-2 border-dark-700 pl-6">
          <li className="flex flex-col">
            <span className="text-gray-500 text-xs uppercase tracking-wider font-bold">The Old Way</span>
            <span className="text-gray-300 font-medium">Hiring more humans. Slow. Expensive. Errors.</span>
          </li>
           <li className="flex flex-col">
            <span className="text-brand-500 text-xs uppercase tracking-wider font-bold">The CrocodeFlow Way</span>
            <span className="text-white font-medium">Scale infinitely at near-zero marginal cost.</span>
          </li>
        </ul>

        <a 
            href={CAL_LINK}
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg bg-brand-600 text-white font-bold hover:bg-brand-500 transition-colors shadow-lg inline-block"
        >
            Stop The Bleeding
        </a>
      </div>

      <div className="flex-1 w-full h-[400px] bg-dark-900 border border-dark-700 rounded-2xl p-6 shadow-2xl">
        <div className="text-xs text-center text-gray-500 mb-4 uppercase tracking-widest">Revenue Projection</div>
        <ResponsiveContainer width="100%" height="90%">
          <AreaChart data={DATA}>
            <defs>
              <linearGradient id="colorAutomated" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
            <XAxis dataKey="month" stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#525252" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value / 1000}k`} />
            <Tooltip 
                contentStyle={{ backgroundColor: '#111', borderColor: '#333', color: '#fff', borderRadius: '8px' }}
                itemStyle={{ color: '#fff' }}
                labelStyle={{ color: '#888', marginBottom: '0.5rem' }}
            />
            <Area 
                type="monotone" 
                dataKey="automated" 
                stroke="#22c55e" 
                strokeWidth={4}
                fillOpacity={1} 
                fill="url(#colorAutomated)" 
                name="CrocodeFlow AI"
            />
            <Area 
                type="monotone" 
                dataKey="manual" 
                stroke="#4b5563" 
                strokeWidth={2}
                fillOpacity={0.1} 
                fill="#4b5563" 
                name="Manual Scaling"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};