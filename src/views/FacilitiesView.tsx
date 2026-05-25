import React from 'react';
import { SCHOOL_FACILITIES } from '../data';
import { 
  Laptop, 
  Beaker, 
  Book, 
  Bus, 
  Trophy, 
  CheckCircle2 
} from 'lucide-react';

export const FacilitiesView: React.FC = () => {
  // Map hardcoded string representations to actual Lucide component elements
  const getIconElement = (iconName: string) => {
    switch (iconName) {
      case 'Laptop': return <Laptop className="w-6 h-6 text-brand-cyan" />;
      case 'Beaker': return <Beaker className="w-6 h-6 text-brand-cyan" />;
      case 'Book': return <Book className="w-6 h-6 text-brand-cyan" />;
      case 'Bus': return <Bus className="w-6 h-6 text-brand-cyan" />;
      case 'Trophy': return <Trophy className="w-6 h-6 text-brand-cyan" />;
      default: return <Laptop className="w-6 h-6 text-brand-cyan" />;
    }
  };

  return (
    <div id="facilities-view-container" className="space-y-16 pb-16 font-sans">
      
      {/* Header Banner */}
      <section className="relative py-14 bg-gradient-to-r from-slate-900 to-brand-blue text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 text-brand-cyan text-xs font-bold uppercase rounded-full">
            <span>INFRASTRUCTURE REPORT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight">Our Premium Campus Facilities</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Deliberately designed educational layout featuring secured biometric corridors, smart visual projectors, and certified green zones.
          </p>
        </div>
      </section>

      {/* Facilities detail boards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {SCHOOL_FACILITIES.map((fac, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={fac.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-6 sm:p-10 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-900/60 shadow-sm ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Graphic Asset representation */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-250 dark:border-slate-800">
                  <img 
                    src={fac.bannerImage} 
                    alt={fac.title} 
                    className="w-full h-52 sm:h-64 object-cover filter brightness-95" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 p-3 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md rounded-xl shadow-md border border-slate-200/20">
                    {getIconElement(fac.iconName)}
                  </div>
                </div>
              </div>

              {/* Informative text columns */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono tracking-widest font-bold uppercase text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded">
                    FACILITY MODEL {idx + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-2xl font-bold font-serif text-slate-850 dark:text-slate-100">
                  {fac.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  {fac.detailedDescription}
                </p>

                {/* Features checklists */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest mb-3">
                    Premium Parameters Included:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {fac.features.map((feature, fIdx) => (
                      <div 
                        key={fIdx}
                        className="flex gap-2 items-start text-xs text-slate-500 dark:text-slate-400 font-light"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Campus physical maintenance details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-900 text-center space-y-4">
          <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wider">
            🌿 Green Eco-Friendly Campus Certification
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Prospero stands strictly committed to sustainability mapping. We incorporate custom storm-water collection pits, zero-plastic packaging guidelines inside snacks refectory corridors, and continuous active tree plantations led by our Student Climate committee.
          </p>
        </div>
      </section>

    </div>
  );
};
