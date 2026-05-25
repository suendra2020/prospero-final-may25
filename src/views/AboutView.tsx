import React from 'react';
import { 
  CHAIRMAN_CORNER, 
  PRINCIPAL_CORNER, 
  CORE_VALUES, 
  SCHOOL_INFO 
} from '../data';
import { 
  ShieldAlert, 
  HeartHandshake, 
  Sparkles, 
  Award, 
  Check, 
  CornerDownRight 
} from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div id="about-view-container" className="space-y-16 pb-16 font-sans">
      
      {/* Dynamic Header */}
      <section className="relative py-14 bg-gradient-to-r from-slate-900 to-brand-blue text-white overflow-hidden">
        {/* Abstract Light overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 text-brand-cyan text-xs font-bold uppercase rounded-full">
            <span>ABOUT OUR COHORT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight">Our Roots, Vision & Ideology</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Delivering the gold-standard of English Medium instruction in Gudur for over 21 scholastic terms.
          </p>
        </div>
      </section>

      {/* Legacy and Vision/Mission block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl sm:text-3xl font-extrabold font-serif text-slate-900 dark:text-white">
              Shaping Academic Trajectories Since {SCHOOL_INFO.established}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              Prospero English Medium School emerged from a simple, noble aspiration: to extend highly world-class, English-medium education to Guldur and surrounding semi-urban segments. We understand that local potential is vast, requiring only modern infrastructure, empathetic educators, and a structured system to compete globally.
            </p>
            <div className="p-5 rounded-xl bg-orange-50/50 dark:bg-orange-950/10 border border-orange-100 dark:border-orange-900/20 space-y-2">
              <h4 className="text-xs font-bold text-brand-gold uppercase tracking-wider flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-500" />
                <span>Our Vision</span>
              </h4>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-light">
                To evolve into an international academic reference in Nellore district, breeding free-thinking individuals who combine scientific wisdom with uncompromising ethical values.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-blue-50/50 dark:bg-blue-950/10 border border-blue-105 dark:border-blue-900/20 space-y-2 animate-fade-in">
              <h4 className="text-xs font-bold text-brand-cyan uppercase tracking-wider flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-brand-cyan" />
                <span>Our Mission</span>
              </h4>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-light">
                To implement custom pedagogical mapping models, establish elite laboratory systems, and preserve strict secular values. We guarantee that zero potential goes unused due to structural neglect.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-0 right-0 w-44 h-44 bg-brand-cyan/20 rounded-full blur-3xl -z-10" />
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200"
              alt="Prospero Campus Legacy Block"
              className="w-full h-auto rounded-3xl object-cover shadow-2xl border border-slate-200/50 dark:border-slate-800/50"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Founder Chairman message split */}
      <section className="bg-slate-50 dark:bg-slate-900/40 py-14 border-y border-slate-200/20 dark:border-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl relative">
                <img 
                  src={CHAIRMAN_CORNER.image} 
                  alt={CHAIRMAN_CORNER.name} 
                  className="w-full h-full object-cover filter brightness-95" 
                />
              </div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 mt-4 text-center">{CHAIRMAN_CORNER.name}</h4>
              <p className="text-[10px] font-mono text-brand-cyan uppercase tracking-wider mt-1">{CHAIRMAN_CORNER.role}</p>
            </div>
            
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex px-2.5 py-1 rounded bg-amber-500/10 text-brand-gold text-[10px] font-mono font-bold tracking-widest uppercase">
                Chairman's Welcoming Message
              </div>
              <blockquote className="text-base font-serif italic text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
                "{CHAIRMAN_CORNER.quote}"
              </blockquote>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                {CHAIRMAN_CORNER.message}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Principal message split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 order-2 lg:order-1 space-y-5">
            <div className="inline-flex px-2.5 py-1 rounded bg-brand-cyan/10 text-brand-cyan text-[10px] font-mono font-bold tracking-widest uppercase">
              Principal's Educational Statement
            </div>
            <blockquote className="text-base font-serif italic text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
              "{PRINCIPAL_CORNER.quote}"
            </blockquote>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              {PRINCIPAL_CORNER.message}
            </p>
          </div>

          <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl relative">
              <img 
                src={PRINCIPAL_CORNER.image} 
                alt={PRINCIPAL_CORNER.name} 
                className="w-full h-full object-cover filter brightness-95" 
              />
            </div>
            <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 mt-4 text-center">{PRINCIPAL_CORNER.name}</h4>
            <p className="text-[10px] font-mono text-brand-cyan uppercase tracking-wider mt-1">{PRINCIPAL_CORNER.role}</p>
          </div>
        </div>
      </section>

      {/* Institutional Core Values block on bento layouts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10 max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-3xl font-extrabold font-serif text-slate-900 dark:text-white">Our Anchoring Core Values</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Three principles embedded into our teaching metrics, evaluations, and student daily operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 shadow-sm space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-brand-cyan to-brand-blue text-white flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              <h4 className="font-bold text-base text-slate-800 dark:text-slate-100">{val.title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Classroom Architecture & Logistics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-2xl bg-slate-900 text-white space-y-6">
          <h3 className="text-lg sm:text-2xl font-bold font-serif">Infrastructure Parameters & Structural Safety</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
            <ul className="space-y-3">
              <li className="flex gap-2.5 items-start">
                <CornerDownRight className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span><strong>Immense Built-up Block:</strong> Multi-floor cement blocks designed specifically for natural light and structural wind ventilation.</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <CornerDownRight className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span><strong>Purified Drinking Station:</strong> Fully integrated commercial reverse-osmosis processing grids that sanitize drinking water grids.</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex gap-2.5 items-start">
                <CornerDownRight className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span><strong>Armed Gated Security:</strong> Mandatory visitor verification logs, unified entrance barrier gates, and 24/7 DVR surveillance.</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <CornerDownRight className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span><strong>Medical Emergency Suite:</strong> Active clinical inventory with certified pediatric first-aid items and direct ambulance logistics mapping.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};
