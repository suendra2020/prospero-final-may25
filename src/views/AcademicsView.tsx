import React from 'react';
import { ACADEMIC_PROGRAMS } from '../data';
import { BookOpen, Sparkles, Pin, CheckCircle2, ChevronRight, Award } from 'lucide-react';

export const AcademicsView: React.FC = () => {
  return (
    <div id="academics-view-container" className="space-y-16 pb-16 font-sans">
      
      {/* View Banner */}
      <section className="relative py-14 bg-gradient-to-r from-slate-900 to-brand-blue text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 text-brand-cyan text-xs font-bold uppercase rounded-full">
            <span>CURRICULUM ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight">Our Academic Divisions & Pedagogies</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Deliberately mapped course blocks that enhance cognitive memory, speed-reading, and logical reasoning.
          </p>
        </div>
      </section>

      {/* Program Divisions Loop */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {ACADEMIC_PROGRAMS.map((prog, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={prog.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-900/60 shadow-sm ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              
              {/* Context metrics */}
              <div className={`lg:col-span-7 space-y-5 ${isEven ? 'order-2 lg:order-1' : 'order-2'}`}>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded">
                    {prog.grade}
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 font-bold">{prog.ageGroup}</span>
                </div>

                <h3 className="text-lg sm:text-2xl font-bold font-serif text-slate-800 dark:text-slate-100">
                  {prog.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  {prog.description}
                </p>

                {/* Sub-lists */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>Class Highlights</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                      {prog.keyHighlights.map((hl, k) => (
                        <li key={k} className="flex gap-2 items-start leading-relaxed font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2.5">
                    <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                      <span>Core Subjects</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                      {prog.subjects.map((sub, s) => (
                        <li key={s} className="flex gap-1.5 items-center leading-tight font-light">
                          <ChevronRight className="w-3 h-3 text-slate-400" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              {/* Graphic abstract vector box */}
              <div className={`lg:col-span-5 ${isEven ? 'order-1 lg:order-2' : 'order-1'}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">
                  <img 
                    src={
                      prog.id === 'prog-kg' 
                        ? 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800'
                        : prog.id === 'prog-primary'
                          ? 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1200'
                          : 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800'
                    } 
                    alt={prog.title} 
                    className="w-full h-48 sm:h-56 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply" />
                </div>
              </div>

            </div>
          );
        })}
      </section>

      {/* JEE & NEET IIT Academic foundation section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 text-white space-y-6 relative overflow-hidden">
          {/* Light flare */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/20 text-brand-gold text-[10px] font-mono font-bold tracking-widest uppercase">
                EXCLUSIVE ENRICHMENT ACADEMY
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif leading-tight">
                Integrated IIT-JEE & NEET Academic Foundation Coaching
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Starting from Grade VI, all secondary Prosperians undergo structured analytical coaching once every week. Curated by mathematical experts, these modules build problem-solving speed and critical visual mapping without compromising their board preparation. We focus heavily on speed-maths, logical verbal grids, and conceptual astronomy exercises.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5"><Pin className="w-3.5 h-3.5 text-brand-cyan" /> Monthly analytics diagnostic review</span>
                <span className="flex items-center gap-1.5"><Pin className="w-3.5 h-3.5 text-brand-cyan" /> No high workload - balanced grids</span>
              </div>
            </div>
            
            <div className="lg:col-span-4 flex justify-center">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center space-y-3 w-full max-w-xs">
                <Award className="w-10 h-10 text-brand-gold mx-auto" />
                <h4 className="text-xs font-bold font-mono tracking-widest uppercase">
                  92% PLACEMENT RATIO
                </h4>
                <p className="text-[10px] text-slate-400 leading-normal">
                  Our foundation graduates ranked within Nellore district top 10 positions in high-school competitive Olympiads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
