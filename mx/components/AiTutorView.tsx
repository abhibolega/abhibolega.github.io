
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, FrameworkType } from '../types';
import { getWcmTutorResponse } from '../geminiService';
import { Send, User, Bot, Sparkles, Loader2, RefreshCcw } from 'lucide-react';

interface AiTutorViewProps {
  currentFramework: FrameworkType;
}

const AiTutorView: React.FC<AiTutorViewProps> = ({ currentFramework }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Re-initialize greeting when framework changes
  useEffect(() => {
    setMessages([
      { 
        role: 'model', 
        text: `Hello! I'm your Manufacturing Excellence Tutor, specialized in **${currentFramework}**. I'm here to help you apply these principles to your chemical process environment. What aspect of ${currentFramework} would you like to explore? (e.g., 'How do I start ${currentFramework === 'WCM' ? 'Cost Deployment' : currentFramework === 'TPM' ? 'Autonomous Maintenance' : 'Customer Focus'} in my plant?')` 
      }
    ]);
  }, [currentFramework]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const contextAwareMessage = `[Context: Framework is ${currentFramework}] ${userMessage}`;
    const response = await getWcmTutorResponse(messages, contextAwareMessage);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-200px)] flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all">
      <div className="bg-slate-900 dark:bg-slate-950 p-4 flex items-center justify-between text-white border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
            <Sparkles size={20} />
          </div>
          <div>
            <h3 className="font-bold">{currentFramework} Master Consultant</h3>
            <p className="text-[10px] text-blue-300 uppercase font-black tracking-widest">AI Engineering Support</p>
          </div>
        </div>
        <button 
          onClick={() => setMessages([{ role: 'model', text: `Session reset. Ready to discuss ${currentFramework}.` }])}
          className="p-2 text-slate-400 hover:text-white transition-colors"
          title="Reset Chat"
        >
          <RefreshCcw size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-slate-200 dark:scroll-thumb-slate-800">
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}>
            <div className={`flex gap-3 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                m.role === 'user' ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400' : 'bg-blue-600 text-white'
              }`}>
                {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-slate-50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-700 rounded-tl-none prose prose-slate dark:prose-invert max-w-none'
              }`}>
                {m.text.split('\n').map((line, i) => (
                  <p key={i} className={line.trim() ? 'mb-2 last:mb-0' : 'h-2'}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                <Bot size={16} />
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 flex items-center gap-3">
                <Loader2 size={16} className="animate-spin text-blue-600" />
                <span className="text-sm text-slate-500 dark:text-slate-400 font-medium italic">Analyzing manufacturing data...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="flex gap-2"
        >
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Ask about ${currentFramework} implementation...`}
            className="flex-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all shadow-inner text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
          />
          <button 
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-blue-600 dark:bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 disabled:bg-slate-400 dark:disabled:bg-slate-700 transition-colors shadow-lg active:scale-95"
          >
            <Send size={20} />
          </button>
        </form>
        <p className="text-[10px] text-center text-slate-400 dark:text-slate-500 mt-2 font-bold tracking-widest uppercase">Expert Domain: {currentFramework} Methodology</p>
      </div>
    </div>
  );
};

export default AiTutorView;
