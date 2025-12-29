
import React, { useState } from 'react';
import { Search, BookMarked, Wrench } from 'lucide-react';

const glossaryItems = [
  { term: "5S", definition: "Sort, Set in order, Shine, Standardize, Sustain. The fundamental starting point for any improvement.", tool: true },
  { term: "5-Why", definition: "A root cause analysis tool where you ask 'why' five times to get to the underlying process failure.", tool: true },
  { term: "Gemba", definition: "The actual place where value is created—the factory floor or the control room.", tool: false },
  { term: "Kaizen", definition: "Continuous improvement. Small, incremental changes that lead to significant impact over time.", tool: false },
  { term: "Poka-Yoke", definition: "Mistake-proofing. Design features that prevent errors from happening (e.g., unique fittings for different chemicals).", tool: true },
  { term: "SMED", definition: "Single Minute Exchange of Die. A methodology to reduce changeover/cleaning time between batches.", tool: true },
  { term: "OEE", definition: "Overall Equipment Effectiveness. Availability × Performance × Quality.", tool: true },
  { term: "Takt Time", definition: "The pace of production needed to meet customer demand.", tool: false },
  { term: "Loss", definition: "Anything that consumes resources but does not add value (WCM identifies 16 types of losses).", tool: false },
  { term: "MTBF", definition: "Mean Time Between Failure. A measure of equipment reliability.", tool: true },
  { term: "Jishu Hozen", definition: "Japanese term for Autonomous Maintenance (Operator ownership).", tool: false },
  { term: "LCC", definition: "Life Cycle Costing. Evaluating the total cost of ownership of an asset from cradle to grave.", tool: true },
  { term: "One Point Lesson (OPL)", definition: "A single-page visual tool used to train staff on a specific improvement or standard.", tool: true }
];

const GlossaryView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = glossaryItems.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={20} />
        <input 
          type="text" 
          placeholder="Search WCM terms and methodologies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all text-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((item, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-200 dark:hover:border-blue-500 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.term}</h4>
              {item.tool ? (
                <span className="flex items-center gap-1 text-[10px] font-bold bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-2 py-0.5 rounded uppercase">
                  <Wrench size={10} /> Tool
                </span>
              ) : (
                <span className="flex items-center gap-1 text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded uppercase">
                  <BookMarked size={10} /> Concept
                </span>
              )}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {item.definition}
            </p>
          </div>
        ))}
      </div>
      
      {filteredItems.length === 0 && (
        <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800">
          <p className="text-slate-400 dark:text-slate-500 font-medium">No matches found for "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

export default GlossaryView;
