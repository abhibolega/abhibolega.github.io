
import React from 'react';
import { FRAMEWORKS, MANAGERIAL_PILLARS } from '../constants';
import { Pillar, FrameworkType } from '../types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { ArrowRight, Info, CheckCircle } from 'lucide-react';

interface DashboardProps {
  activeFramework: FrameworkType;
  onFrameworkChange: (framework: FrameworkType) => void;
  onPillarSelect: (pillar: Pillar) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ activeFramework, onFrameworkChange, onPillarSelect }) => {
  const pillars = FRAMEWORKS[activeFramework];
  
  const radarData = pillars.map(p => ({
    subject: p.title,
    level: Math.floor(Math.random() * 5) + 1,
    fullMark: 5,
  }));

  const frameworkDescriptions = {
    WCM: "An integrated management system aimed at achieving world-class competitive performance through the elimination of all types of waste.",
    TPM: "A system of maintaining and improving the integrity of production, safety and quality systems through equipment ownership.",
    TQM: "A management approach to long-term success through customer satisfaction, where all members of an organization participate in improvement.",
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      {/* Framework Selector Bar */}
      <div className="flex bg-slate-200 dark:bg-slate-800 p-1 rounded-xl w-fit">
        {(['WCM', 'TPM', 'TQM'] as FrameworkType[]).map((f) => (
          <button
            key={f}
            onClick={() => onFrameworkChange(f)}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
              activeFramework === f 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Intro Section */}
      <section className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row gap-8 items-center transition-colors">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
             <div className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] font-black uppercase rounded">Methodology</div>
             <h3 className="text-3xl font-black text-slate-900 dark:text-slate-100">{activeFramework} Excellence</h3>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            {frameworkDescriptions[activeFramework]} For a <strong>Chemical Process Engineer</strong>, this provides the rigorous tools needed to stabilize and optimize complex reaction environments.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <StatCard value="ZERO" label="Accidents" color="text-green-600" />
            <StatCard value="ZERO" label="Breakdowns" color="text-red-500" />
            <StatCard value="ZERO" label="Defects" color="text-purple-600" />
            <StatCard value="ZERO" label="Waste" color="text-orange-500" />
          </div>
        </div>
        <div className="w-full lg:w-96 h-96 shrink-0 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-2 border border-slate-100 dark:border-slate-700 overflow-hidden">
           <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 text-center mt-2 mb-2 uppercase tracking-widest">{activeFramework} RADAR MATURITY</p>
           <ResponsiveContainer width="100%" height="90%">
            <RadarChart 
              cx="50%" 
              cy="50%" 
              outerRadius="65%" 
              data={radarData}
              margin={{ top: 20, right: 40, bottom: 20, left: 40 }}
            >
              <PolarGrid stroke="#475569" strokeDasharray="3 3" />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{fontSize: 9, fill: '#94a3b8', fontWeight: 600, width: 80}} 
              />
              <Radar name="Status" dataKey="level" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Methodology Pillars */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100">
            The {pillars.length} {activeFramework === 'TQM' ? 'Core Principles' : 'Technical Pillars'}
          </h4>
          <span className="text-sm text-slate-500 dark:text-slate-400">Step-by-step implementation modules</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {pillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => onPillarSelect(pillar)}
              className="group bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-400 dark:hover:border-blue-500 transition-all text-left flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 -mr-8 -mt-8 rounded-full group-hover:scale-150 transition-transform"></div>
              <div className={`w-12 h-12 ${pillar.color} rounded-xl flex items-center justify-center text-white text-2xl mb-4 group-hover:rotate-6 transition-all shadow-md`}>
                {pillar.icon}
              </div>
              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-2">{pillar.title}</h5>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 mb-4 flex-1">
                {pillar.description}
              </p>
              <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-[10px] font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all">
                VIEW METHODOLOGY <ArrowRight size={14} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Strategic Integration Section */}
      {activeFramework === 'WCM' && (
        <section className="bg-slate-900 dark:bg-slate-800 rounded-2xl p-8 text-white transition-colors border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
             <div className="w-96 h-96 border-8 border-white rounded-full"></div>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-500/20 rounded-lg"><Info className="text-blue-400" /></div>
            <h4 className="text-xl font-bold tracking-tight">Managerial Foundation</h4>
          </div>
          <p className="text-slate-400 mb-8 max-w-2xl leading-relaxed">
            The technical pillars of WCM cannot stand without a strong managerial foundation. These 10 criteria drive leadership behaviors and cultural consistency.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-4">
            {MANAGERIAL_PILLARS.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-blue-500 font-mono text-sm font-bold">{String(idx + 1).padStart(2, '0')}</span>
                <span className="text-xs font-medium text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

const StatCard: React.FC<{ value: string; label: string; color: string }> = ({ value, label, color }) => (
  <div className="flex flex-col">
    <span className={`text-3xl font-black ${color} tracking-tighter`}>{value}</span>
    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{label}</span>
  </div>
);

export default Dashboard;
