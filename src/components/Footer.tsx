import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data';
import { SchoolLogo } from './SchoolLogo';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Award,
  Send,
  ShieldCheck
} from 'lucide-react';

interface FooterProps {
  setView: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setView }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const navigateTo = (viewId: string) => {
    setView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-16 pb-8 overflow-hidden border-t border-slate-900 font-sans">
      {/* Absolute design background items (No Tech-Larping, simple radial light) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          {/* Logo, About & Accreditations Column */}
          <div className="space-y-6">
            <button 
              onClick={() => navigateTo('home')}
              className="flex items-center gap-2.5 text-left group animate-fade-in"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border border-slate-800 shadow-md p-1 shrink-0 transition-transform hover:scale-105 duration-250">
                <SchoolLogo className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-base font-black font-serif tracking-tight leading-none text-white block">PROSPERO</h3>
                <span className="text-[10px] text-brand-cyan font-sans tracking-widest block mt-0.5 font-light">INTERNATIONAL</span>
              </div>
            </button>
            <p className="text-xs text-slate-400 leading-relaxed">
              Established in {SCHOOL_INFO.established}, Prospero English Medium School is a flagship academic institution in Gudur dedicated to intellectual maturity, scientific mastery, and solid ethical systems.
            </p>
            
            {/* Accreditation Badge */}
            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
              <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
              <div>
                <h4 className="text-[11px] font-bold text-slate-100 leading-none">REGISTRATION VERIFIED</h4>
                <p className="text-[10px] text-slate-400 mt-1 leading-tight">{SCHOOL_INFO.affiliation}</p>
              </div>
            </div>
          </div>

          {/* Quick Nav Options */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-100 font-mono flex items-center gap-2">
              <Award className="w-4 h-4 text-brand-cyan" />
              <span>Campus Map</span>
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button onClick={() => navigateTo('home')} className="hover:text-brand-cyan text-left pb-1 transition-colors">Home</button>
              <button onClick={() => navigateTo('about')} className="hover:text-brand-cyan text-left pb-1 transition-colors">About Us</button>
              <button onClick={() => navigateTo('academics')} className="hover:text-brand-cyan text-left pb-1 transition-colors">Academics</button>
              <button onClick={() => navigateTo('admissions')} className="hover:text-brand-cyan text-left pb-1 transition-colors">Admissions</button>
              <button onClick={() => navigateTo('facilities')} className="hover:text-brand-cyan text-left pb-1 transition-colors">Facilities</button>
              <button onClick={() => navigateTo('gallery')} className="hover:text-brand-cyan text-left pb-1 transition-colors">Gallery</button>
              <button onClick={() => navigateTo('testimonials')} className="hover:text-brand-cyan text-left pb-1 transition-colors">Testimonials</button>
              <button onClick={() => navigateTo('news-events')} className="hover:text-brand-cyan text-left pb-1 transition-colors">News Logs</button>
              <button onClick={() => navigateTo('activities')} className="hover:text-brand-cyan text-left pb-1 transition-colors">Activities</button>
              <button onClick={() => navigateTo('contact')} className="hover:text-brand-cyan text-left pb-1 transition-colors">Get Help</button>
            </div>
          </div>

          {/* Direct Address & Contact */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-100 font-mono">
              Direct Contact
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span className="leading-relaxed">{SCHOOL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-white transition-colors">{SCHOOL_INFO.phone}</a>
                  <a href={`tel:${SCHOOL_INFO.altPhone}`} className="hover:text-white transition-colors text-[11px] text-slate-500 mt-0.5">{SCHOOL_INFO.altPhone}</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white transition-colors break-all leading-tight">{SCHOOL_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Office Timing & Newsletter Columns */}
          <div className="space-y-5">
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-100 font-mono flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-cyan" />
                <span>Office Hours</span>
              </h4>
              <p className="text-xs text-slate-400 leading-normal">
                Monday – Saturday: 08:30 AM – 04:30 PM <br />
                <span className="text-[10px] text-slate-500 font-mono">Closed on public gazetted holidays.</span>
              </p>
            </div>

            {/* Newsletter form */}
            {/* <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-100">School Newsletter</h4>
              <form onSubmit={handleSubscribe} className="flex gap-1.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Parent's email"
                  className="w-full text-xs px-3 py-2 bg-slate-900 border border-slate-800 rounded focus:border-brand-cyan outline-none text-slate-100 placeholder:text-slate-500"
                  required
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-brand-cyan hover:bg-sky-600 rounded text-white flex items-center justify-center transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              {subscribed && (
                <p className="text-[10px] font-mono text-emerald-400 animate-pulse">
                  ✓ Successfully locked in. Weekly reports sent.
                </p>
              )}
            </div> */}
          </div>

        </div>

        {/* Footer Base bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {SCHOOL_INFO.name}, Gudur. All individual rights reserved.</p>
          
          {/* Social Profiles Grid */}
          <div className="flex items-center gap-3">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              referrerPolicy="no-referrer"
              className="p-1 px-2 rounded-md bg-slate-900 hover:bg-indigo-600 hover:text-white transition-all text-slate-400 flex items-center justify-center gap-1.5"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono hidden sm:inline">Facebook</span>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              referrerPolicy="no-referrer"
              className="p-1 px-2 rounded-md bg-slate-900 hover:bg-sky-500 hover:text-white transition-all text-slate-400 flex items-center justify-center gap-1.5"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              referrerPolicy="no-referrer"
              className="p-1 px-2 rounded-md bg-slate-900 hover:bg-pink-600 hover:text-white transition-all text-slate-400 flex items-center justify-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono hidden sm:inline">Instagram</span>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              referrerPolicy="no-referrer"
              className="p-1 px-2 rounded-md bg-slate-900 hover:bg-red-600 hover:text-white transition-all text-slate-400 flex items-center justify-center gap-1.5"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
