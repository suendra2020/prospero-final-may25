import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { GraduationCap, Menu, X, Sun, Moon, PhoneCall } from 'lucide-react';
import { SCHOOL_INFO } from '../data';
import { SchoolLogo } from './SchoolLogo';

interface NavbarProps {
  currentView: string;
  setView: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Nav items excluding facilities, student activities, and news-events as requested
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academics' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id: string) => {
    setView(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-300">
      {/* Top bar */}
      <div className="bg-brand-blue text-slate-100 text-[11px] sm:text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4 font-mono">
          <div className="flex items-center gap-3">
            <span>✨ SECURE ADMISSIONS OPEN 2026-27</span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline">Affiliated Secondary Wing</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${SCHOOL_INFO.phone}`} className="flex items-center gap-1 hover:text-brand-cyan transition-colors">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{SCHOOL_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header block */}
      <nav id="main-navigation" className={`w-full ${theme === 'dark' ? 'glass-dark bg-slate-950/80' : 'glass-light bg-white/85'} transition-colors duration-350 border-b border-slate-200/60 dark:border-slate-800/60 shadow-xs`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Brand logo */}
          <button 
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left shrink-0 hover:opacity-90 transition-opacity animate-fade-in"
          >
            {/* <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border border-slate-200/60 dark:border-slate-800/60 shadow-md p-1 shrink-0 transition-transform hover:scale-105 duration-250">
              <SchoolLogo className="w-full h-full" />
            </div> */}
            <div className="d-flex">
              <img src="https://i.ibb.co/jk9vTL7W/logo-prospero.png" alt="PROSPERO" className=" prospero-logo" />
              <h1 className="text-base sm:text-lg font-black font-serif tracking-tight leading-none text-indigo-950 dark:text-slate-50 flex flex-col">
               {/* <img src="../assets/logo-prospero.png" alt="PROSPERO" className="w-full h-full" /> */}
                <span className="text-[10px] font-sans font-light text-slate-500 dark:text-slate-400 tracking-widest mt-0.5 logo-text">PROSPERO </span>
                <span className="text-[10px] font-sans font-light text-slate-500 dark:text-slate-400 tracking-widest mt-0.5">EM School</span>
              </h1>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden xl:flex items-center gap-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`py-1 text-xs font-semibold tracking-wider transition-all duration-150 uppercase ${
                  currentView === item.id
                    ? 'text-brand-cyan dark:text-brand-cyan font-black border-b-2 border-brand-cyan'
                    : 'text-slate-600 dark:text-slate-400 hover:text-brand-cyan dark:hover:text-cyan-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Utility Toolbar (Theme Toggler & Quick Enquiry Launcher) */}
          <div className="hidden xl:flex items-center gap-4">
            {/* Theme trigger */}
            <button
              id="theme-toggler"
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            {/* CTA */}
            <button
              id="quick-enquiry-cta"
              onClick={() => handleNavClick('contact')}
              className="px-6 py-2 text-xs font-bold tracking-wider uppercase rounded-full text-white bg-indigo-950 dark:bg-brand-cyan hover:bg-slate-800 dark:hover:bg-indigo-600 transition-all shadow-md shadow-indigo-950/10 duration-200"
            >
              Apply Now
            </button>
          </div>

          {/* Tablet/Mobile Action Tray */}
          <div className="flex xl:hidden items-center gap-2">
            {/* Active page label header on mobile */}
            {/* <span className="text-[11px] font-mono uppercase font-extrabold tracking-widest text-brand-cyan bg-slate-100 dark:bg-slate-800/80 px-2 py-1 rounded-sm mr-1">
              {navItems.find((n) => n.id === currentView)?.label}
            </span> */}

            {/* Mobile Theme Switcher */}
            <button
              id="mobile-theme-toggler"
              onClick={toggleTheme}
              className="p-1 px-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5 text-slate-700" />}
            </button>

            {/* Menu Trigger */}
            <button
              id="mobile-menu-trigger"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Full Screen overlay Drawer */}
        {isOpen && (
          <div className="xl:hidden border-t border-slate-200/50 dark:border-slate-800/50">
            <div className={`px-4 pt-3 pb-6 space-y-1 ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'} shadow-lg transition-colors duration-300`}>
              <div className="grid grid-cols-2 gap-2 pb-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-3 text-[13px] font-bold text-left rounded-lg tracking-wide uppercase transition-all ${
                      currentView === item.id
                        ? 'bg-brand-cyan text-white shadow-xs'
                        : 'bg-slate-100/50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-400 hover:border-brand-cyan'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
                <button
                  id="mobile-cta-btn"
                  onClick={() => handleNavClick('contact')}
                  className="w-full text-center py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-brand-cyan to-indigo-600 rounded-lg shadow-md"
                >
                  Apply Online
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
