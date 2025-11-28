import React, { useState, useEffect, useRef } from 'react';
import { Play, RefreshCw, AlertCircle, Zap, Terminal, CheckCircle2, XCircle, Database, Mail, FileText } from 'lucide-react';
import { CAL_LINK } from '../constants';

type Log = {
  id: number;
  time: string;
  message: string;
  type: 'info' | 'error' | 'success';
};

export const ProcessVisualizer: React.FC = () => {
  const [isAutomated, setIsAutomated] = useState(false);
  const [logs, setLogs] = useState<Log[]>([]);
  const [metrics, setMetrics] = useState({ processed: 0, lost: 0, revenue: 0 });
  const logContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logs
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  // Simulation Loop
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }) + "." + Math.floor(Math.random() * 999);
      
      if (isAutomated) {
        // AUTOMATED MODE SIMULATION
        const newLog: Log = {
          id: Date.now(),
          time: now,
          message: `[AUTO] Lead processed in ${Math.floor(Math.random() * 50)}ms. Enriched. Synced.`,
          type: 'success'
        };
        setLogs(prev => [...prev.slice(-15), newLog]);
        setMetrics(prev => ({
          processed: prev.processed + 12, // High speed
          lost: prev.lost, // No loss
          revenue: prev.revenue + 1200 // High revenue
        }));
      } else {
        // MANUAL MODE SIMULATION
        const events = [
            { msg: "Human checking email...", type: 'info' as const },
            { msg: "Copy-pasting data to Excel...", type: 'info' as const },
            { msg: "ERROR: Data format mismatch in row 42", type: 'error' as const },
            { msg: "Human took a coffee break (15m)", type: 'error' as const },
            { msg: "Lead missed: Response time > 2hrs", type: 'error' as const },
            { msg: "Typo in email address. Bounce.", type: 'error' as const },
        ];
        const randomEvent = events[Math.floor(Math.random() * events.length)];
        
        setLogs(prev => [...prev.slice(-8), { id: Date.now(), time: now, message: randomEvent.msg, type: randomEvent.type }]);
        
        // Slower processing, higher loss
        setMetrics(prev => ({
          processed: prev.processed + 1,
          lost: prev.lost + (Math.random() > 0.6 ? 1 : 0),
          revenue: prev.revenue + (Math.random() > 0.8 ? 100 : 0)
        }));
      }
    }, isAutomated ? 200 : 1500); // Speed difference

    return () => clearInterval(interval);
  }, [isAutomated]);

  return (
    <div className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            See The <span className="text-brand-500">Difference</span>
          </h2>
          <p className="text-gray-400">Run the simulation. Watch your money disappear (or multiply).</p>
        </div>

        {/* Toggle Controls */}
        <div className="flex justify-center mb-12">
            <div className="bg-gray-800 p-1 rounded-xl flex gap-1 border border-gray-700">
                <button 
                    onClick={() => setIsAutomated(false)}
                    className={`px-6 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-all ${!isAutomated ? 'bg-gray-700 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                >
                    <RefreshCw className={`w-4 h-4 ${!isAutomated ? 'animate-spin-slow' : ''}`} /> Manual Chaos
                </button>
                <button 
                    onClick={() => setIsAutomated(true)}
                    className={`px-6 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-all ${isAutomated ? 'bg-brand-600 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]' : 'text-gray-400 hover:text-white'}`}
                >
                    <Zap className={`w-4 h-4 ${isAutomated ? 'fill-current' : ''}`} /> AI Hyperloop
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[500px]">
            
            {/* Visualizer Canvas */}
            <div className="lg:col-span-2 bg-gray-950 rounded-xl border border-gray-800 relative overflow-hidden flex items-center justify-center p-8 shadow-2xl">
                
                {/* Manual Mode Visuals */}
                {!isAutomated && (
                    <div className="w-full h-full relative">
                        {/* Nodes */}
                        <div className="absolute top-1/2 left-[10%] -translate-y-1/2 flex flex-col items-center gap-2">
                            <div className="w-16 h-16 rounded-xl bg-blue-900/20 border border-blue-500/50 flex items-center justify-center animate-pulse">
                                <Mail className="w-8 h-8 text-blue-500" />
                            </div>
                            <span className="text-xs text-blue-400 font-mono">Lead In</span>
                        </div>

                        {/* Zig Zag Path */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            <path d="M 120 250 L 250 150 L 380 350 L 510 250" fill="none" stroke="#374151" strokeWidth="2" strokeDasharray="5,5" />
                             {/* Dropped packets */}
                            <path d="M 250 150 L 250 400" fill="none" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.5" />
                        </svg>

                        <div className="absolute top-[30%] left-[35%] -translate-y-1/2 flex flex-col items-center gap-2 animate-shake">
                             <div className="w-16 h-16 rounded-xl bg-yellow-900/20 border border-yellow-500/50 flex items-center justify-center">
                                <FileText className="w-8 h-8 text-yellow-500" />
                            </div>
                            <span className="text-xs text-yellow-400 font-mono">Manual Entry</span>
                        </div>

                         <div className="absolute top-[70%] left-[60%] -translate-y-1/2 flex flex-col items-center gap-2 animate-shake" style={{ animationDelay: '0.5s' }}>
                             <div className="w-16 h-16 rounded-xl bg-gray-800 border border-gray-600 flex items-center justify-center">
                                <Database className="w-8 h-8 text-gray-400" />
                            </div>
                            <span className="text-xs text-gray-500 font-mono">CRM (Old)</span>
                        </div>
                        
                         {/* Lost Lead Indicator */}
                         <div className="absolute bottom-10 left-[40%] flex items-center gap-1 text-red-500 text-xs font-bold animate-pulse">
                            <XCircle className="w-4 h-4" /> LEAD LOST
                         </div>
                    </div>
                )}

                {/* Automated Mode Visuals */}
                {isAutomated && (
                    <div className="w-full h-full relative flex items-center justify-between">
                         <div className="absolute top-1/2 left-0 w-full h-1 bg-brand-900/30"></div>
                         <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-400 to-transparent animate-beam-flow shadow-[0_0_15px_#22c55e]"></div>

                         {/* AI Core */}
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-500/10 rounded-full blur-xl animate-pulse"></div>
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-4">
                            <div className="w-24 h-24 rounded-full bg-black border-2 border-brand-500 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                                <Zap className="w-10 h-10 text-brand-400 fill-brand-400 animate-pulse" />
                            </div>
                            <span className="px-3 py-1 rounded-full bg-brand-900/50 border border-brand-500/30 text-brand-400 text-xs font-bold uppercase tracking-widest">
                                Neural Engine Active
                            </span>
                         </div>
                    </div>
                )}

            </div>

            {/* Metrics & Terminal */}
            <div className="lg:col-span-1 flex flex-col gap-4">
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Processed</div>
                        <div className="text-2xl font-mono font-bold text-white">{metrics.processed}</div>
                    </div>
                    <div className={`bg-gray-800 p-4 rounded-xl border ${isAutomated ? 'border-brand-900/50' : 'border-red-900/50'}`}>
                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Lost Revenue</div>
                        <div className={`text-2xl font-mono font-bold ${isAutomated ? 'text-brand-500' : 'text-red-500'}`}>
                            ${metrics.lost * 250}
                        </div>
                    </div>
                </div>

                {/* Terminal */}
                <div className="flex-1 bg-black rounded-xl border border-gray-800 overflow-hidden flex flex-col font-mono text-xs">
                    <div className="bg-gray-900 px-4 py-2 border-b border-gray-800 flex items-center gap-2 text-gray-500">
                        <Terminal className="w-3 h-3" /> System Log
                    </div>
                    <div ref={logContainerRef} className="flex-1 p-4 overflow-y-auto space-y-2">
                        {logs.map(log => (
                            <div key={log.id} className="flex gap-2">
                                <span className="text-gray-600">[{log.time}]</span>
                                <span className={`${
                                    log.type === 'error' ? 'text-red-400' : 
                                    log.type === 'success' ? 'text-brand-400' : 
                                    'text-gray-300'
                                }`}>
                                    {log.message}
                                </span>
                            </div>
                        ))}
                         {logs.length === 0 && <span className="text-gray-600 italic">Waiting for process start...</span>}
                    </div>
                </div>

                <a 
                    href={CAL_LINK}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-xl font-bold text-center transition-all ${isAutomated ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}
                >
                    {isAutomated ? "Implement This System" : "Switch to Auto First"}
                </a>

            </div>

        </div>
      </div>
    </div>
  );
};
