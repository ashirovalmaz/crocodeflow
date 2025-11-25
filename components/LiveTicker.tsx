import React, { useState, useEffect } from 'react';
import { DollarSign, Clock, TrendingUp } from 'lucide-react';

export const LiveTicker: React.FC = () => {
  // Initial seed values (simulated existing client base stats)
  const [revenue, setRevenue] = useState(4289450);
  const [saved, setSaved] = useState(1250100);
  const [hours, setHours] = useState(14500);

  useEffect(() => {
    // Simulate live ticking
    const revenueInterval = setInterval(() => {
      setRevenue(prev => prev + Math.floor(Math.random() * 50) + 10);
    }, 2000);

    const savedInterval = setInterval(() => {
      setSaved(prev => prev + Math.floor(Math.random() * 20) + 5);
    }, 3500);

    const hoursInterval = setInterval(() => {
      setHours(prev => prev + 1);
    }, 10000);

    return () => {
      clearInterval(revenueInterval);
      clearInterval(savedInterval);
      clearInterval(hoursInterval);
    };
  }, []);

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(num);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="w-full bg-dark-800 border-y border-dark-700 py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-900/5 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    Live Client Ecosystem Stats (Last 30 Days)
                </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-dark-600">
                <div className="flex flex-col items-center justify-center p-4">
                    <div className="text-gray-400 text-sm font-semibold mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-brand-500" /> Revenue Generated
                    </div>
                    <div className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
                        {formatCurrency(revenue)}
                    </div>
                    <p className="text-xs text-dark-400 mt-2">While you were sleeping</p>
                </div>

                <div className="flex flex-col items-center justify-center p-4">
                     <div className="text-gray-400 text-sm font-semibold mb-2 flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-brand-500" /> Operational Costs Cut
                    </div>
                    <div className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
                        {formatCurrency(saved)}
                    </div>
                     <p className="text-xs text-dark-400 mt-2">Wasted spend eliminated</p>
                </div>

                <div className="flex flex-col items-center justify-center p-4">
                     <div className="text-gray-400 text-sm font-semibold mb-2 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-brand-500" /> Man-Hours Freed
                    </div>
                    <div className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
                        {formatNumber(hours)}h
                    </div>
                     <p className="text-xs text-dark-400 mt-2">Reallocated to growth</p>
                </div>
            </div>
        </div>
    </div>
  );
};