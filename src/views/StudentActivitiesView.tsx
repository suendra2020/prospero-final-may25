import React from 'react';
import { STUDENT_ACTIVITIES } from '../data';
import { Trophy, Clock, CheckCircle2, Award, Sparkles } from 'lucide-react';

export const StudentActivitiesView: React.FC = () => {
  return (
    <div id="student-activities-view-container" className="space-y-16 pb-16 font-sans">
      
      {/* Header Banner */}
      <section className="relative py-14 bg-gradient-to-r from-slate-900 to-brand-blue text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 text-brand-cyan text-xs font-bold uppercase rounded-full">
            <span>HOLISTIC INTEGRATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight">Student Activities & Club Wings</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            From algorithmic Arduino programming to classical storytelling and mock congress, we breed multipotentialite individuals.
          </p>
        </div>
      </section>

      {/* Clubs Detailed Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {STUDENT_ACTIVITIES.map((act, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={act.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-6 sm:p-10 rounded-3xl border border-slate-205 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              
              {/* Image box with visual badges */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-250 dark:border-slate-800">
                  <img 
                    src={act.imageUrl}
                    alt={act.title} 
                    className="w-full h-52 sm:h-64 object-cover" 
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 text-[9px] uppercase font-mono font-bold text-white bg-amber-500 px-2.5 py-1 rounded">
                    {act.category}
                  </span>
                </div>
              </div>

              {/* Club description context details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-cyan">
                  <Clock className="w-4 h-4" />
                  <span>{act.schedule}</span>
                </div>

                <h3 className="text-lg sm:text-2xl font-bold font-serif text-slate-800 dark:text-slate-100">
                  {act.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  {act.description}
                </p>

                {/* Sub benefits details */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>Skill Mapping Goal Benefits:</span>
                  </h4>
                  <div className="space-y-2">
                    {act.benefits.map((ben, bIdx) => (
                      <div 
                        key={bIdx}
                        className="flex gap-2 items-start text-xs text-slate-500 dark:text-slate-400 font-light leading-snug"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          );
        })}
      </section>

      {/* Structured reward accolades */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 text-white text-center space-y-4">
          <Award className="w-10 h-10 text-brand-gold mx-auto" />
          <h4 className="text-sm font-bold uppercase tracking-widest font-mono">
            🏆 Annual Non-Cognitive Achievement Accolade
          </h4>
          <p className="text-xs text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Each student achievements in creative coding, public speeches, traditional string-instrument rehearsals, or local sports runs are documented systematically. At the end of the term, our counselors grant specialized credit milestones, adding weight to their standard CBSE academic transcripts.
          </p>
        </div>
      </section>

    </div>
  );
};
