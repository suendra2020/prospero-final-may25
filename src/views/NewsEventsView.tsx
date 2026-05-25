import React, { useState } from 'react';
import { NEWS_EVENTS } from '../data';
import { NewsEventItem } from '../types';
import { BookOpen, Clock, X, ArrowLeft, CalendarDays, ExternalLink, MessageSquare } from 'lucide-react';

export const NewsEventsView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedArticle, setSelectedArticle] = useState<NewsEventItem | null>(null);

  const categories = ['All', 'Academic', 'Sports', 'Announcement'];

  const filteredItems = activeCategory === 'All'
    ? NEWS_EVENTS
    : NEWS_EVENTS.filter((item) => item.category === activeCategory);

  return (
    <div id="newsevents-view-container" className="space-y-12 pb-16 font-sans">
      
      {/* View Header */}
      <section className="relative py-14 bg-gradient-to-r from-slate-900 to-brand-blue text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 text-brand-cyan text-xs font-bold uppercase rounded-full">
            <span>COMMUNICATION PORTAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight">Active News, Logs & Advisories</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Real-time administrative announcements, student milestones, vacation calendars, and safety advisories.
          </p>
        </div>
      </section>

      {/* Main Grid or Expandable Article Detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {selectedArticle ? (
          /* Single Article Detail page */
          <div className="p-6 sm:p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 animate-fade-in max-w-4xl mx-auto">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="inline-flex items-center gap-1 text-xs font-bold text-brand-cyan hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all announcements</span>
            </button>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                <span className="bg-brand-cyan/10 text-brand-cyan px-2 py-0.5 rounded font-bold uppercase">
                  {selectedArticle.category}
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-3.5 h-3.5" />
                  {selectedArticle.date}
                </span>
              </div>
              
              <h3 className="text-xl sm:text-3xl font-extrabold font-serif text-slate-900 dark:text-white leading-tight">
                {selectedArticle.title}
              </h3>
            </div>

            <div className="h-64 sm:h-96 rounded-2xl overflow-hidden border border-slate-200/50">
              <img 
                src={selectedArticle.imageUrl} 
                alt={selectedArticle.title} 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                {selectedArticle.summary}
              </p>
              <p className="whitespace-pre-wrap">
                {selectedArticle.description}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs">
              <span className="text-slate-400 font-mono">Verify ref: PR-{selectedArticle.id}</span>
              <a 
                href={`https://wa.me/918624222233?text=${encodeURIComponent(`Hello Prospero EM School, I saw your bulletin regarding: "${selectedArticle.title}". I would like to learn more details.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold transition-all shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Query desk</span>
              </a>
            </div>
          </div>
        ) : (
          /* List of articles */
          <div className="space-y-8">
            {/* Filter chips */}
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-brand-cyan text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-205 dark:hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid Layout of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setSelectedArticle(item)}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="h-44 relative overflow-hidden">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-4 left-4 text-[9px] uppercase font-mono font-bold text-white bg-brand-cyan/80 px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                    </div>
                    <div className="p-5 space-y-2">
                      <span className="text-[10px] font-mono text-slate-400 font-bold block">{item.date}</span>
                      <h4 className="font-bold text-sm block text-slate-850 dark:text-slate-100 group-hover:text-brand-cyan transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 font-light leading-normal truncate">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-800/50 mt-4 flex justify-between items-center">
                    <span className="text-[11px] font-mono text-slate-400">Read details</span>
                    <ExternalLink className="w-4 h-4 text-slate-350 select-none" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </section>

    </div>
  );
};
