import React from 'react';
import { EnquiryForm } from '../components/EnquiryForm';
import { SCHOOL_INFO } from '../data';
import { 
  Building2, 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';

export const ContactView: React.FC = () => {
  return (
    <div id="contact-view-container" className="space-y-16 pb-16 font-sans">
      
      {/* Header Banner */}
      <section className="relative py-14 bg-gradient-to-r from-slate-900 to-brand-blue text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 text-brand-cyan text-xs font-bold uppercase rounded-full">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight">Contact & Campus Geography</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Deliberately structured channels that allow families to schedule counseling sessions, trace buses, and submit registries.
          </p>
        </div>
      </section>

      {/* Grid of details & forms */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left: Contact Info & Maps Frame */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl sm:text-3xl font-extrabold font-serif text-slate-900 dark:text-white tracking-tight">
              Administrative Headquarters
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              We organize educational consultations and direct campus diagnostic walkthroughs inside our primary blocks. Skip the queue by submitting the form.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Address */}
            <div className="p-4 rounded-xl border border-slate-205 dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-3.5">
              <MapPin className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">School Location</h4>
                <p className="text-[11px] text-slate-400 leading-normal font-light">{SCHOOL_INFO.address}</p>
              </div>
            </div>

            {/* Helpline Calls */}
            <div className="p-4 rounded-xl border border-slate-205 dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-3.5">
              <PhoneCall className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">Call Desks</h4>
                <p className="text-[11px] text-slate-400 leading-normal font-light">
                  Admissions office: <br />
                  <a href={`tel:${SCHOOL_INFO.phone}`} className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-brand-cyan">{SCHOOL_INFO.phone}</a> <br />
                  Primary desk: <br />
                  <a href={`tel:${SCHOOL_INFO.altPhone}`} className="font-mono text-[11px] text-slate-405">{SCHOOL_INFO.altPhone}</a>
                </p>
              </div>
            </div>

            {/* Email Channels */}
            <div className="p-4 rounded-xl border border-slate-250 dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-3.5">
              <Mail className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-850 dark:text-slate-200">Registered Email</h4>
                <p className="text-[11px] text-slate-400 leading-normal font-light break-all">
                  Inquiries: <br />
                  <a href={`mailto:${SCHOOL_INFO.email}`} className="font-mono text-slate-705 dark:text-slate-300 hover:text-brand-cyan">{SCHOOL_INFO.email}</a> <br />
                  Admissions desk: <br />
                  <a href={`mailto:${SCHOOL_INFO.admissionsEmail}`} className="font-mono text-[10px] text-slate-450">{SCHOOL_INFO.admissionsEmail}</a>
                </p>
              </div>
            </div>

            {/* Working times */}
            <div className="p-4 rounded-xl border border-slate-250 dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-3.5">
              <Clock className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-850 dark:text-slate-200">Office Working Hours</h4>
                <p className="text-[11px] text-slate-400 leading-normal font-light">
                  Monday – Saturday: <br />
                  <span className="font-mono font-bold text-slate-750 dark:text-slate-350">08:30 AM – 04:30 PM</span> <br />
                  <span className="text-[10px] text-slate-500">Sunday holiday</span>
                </p>
              </div>
            </div>

          </div>

          {/* SIMULATED MODERN INTERACTIVE MAP PANEL (No API key required) */}
          <div className="space-y-2.5">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-800 dark:text-slate-200 font-mono">
              Campus Topographical Map Coordinates
            </h4>
            
            {/* Elegant Map container with high reliability and zero crashing */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-250 dark:border-slate-800 h-64 bg-slate-950 flex flex-col justify-between p-6">
              {/* Blurred abstract coordinates representation with beautiful design */}
              <div className="absolute inset-0 bg-slate-900 overflow-hidden opacity-30 select-none">
                <div className="w-full h-full flex flex-wrap justify-between p-2">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-sm bg-slate-880/20 border border-slate-800/10" />
                  ))}
                </div>
              </div>
              
              {/* Interactive design card overlay */}
              <div className="relative z-10 flex flex-col h-full justify-between items-start">
                <div className="bg-slate-950/95 p-3 rounded-lg border border-slate-800/80 backdrop-blur-md text-white max-w-xs">
                  <div className="flex gap-2 items-center">
                    <Building2 className="w-5 h-5 text-brand-cyan" />
                    <span className="text-xs font-bold font-serif">Campus central corridor</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1 font-mono font-light uppercase tracking-wide leading-tight">
                    Raja Street, Near Clock Tower, Gudur - 524101
                  </p>
                </div>

                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  referrerPolicy="no-referrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-brand-cyan hover:bg-sky-600 text-white font-semibold text-[11px] uppercase tracking-wider shadow-md transition-all cursor-pointer self-stretch text-center justify-center hover:scale-102 transform duration-150"
                >
                  <span>Open Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Right: Enquiry sheet */}
        <div className="p-1">
          <EnquiryForm />
        </div>

      </section>

    </div>
  );
};
