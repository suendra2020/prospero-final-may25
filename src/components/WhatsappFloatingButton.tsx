import React, { useState, useEffect } from 'react';
import { MessageSquareShare } from 'lucide-react';

export const WhatsappFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Hide tooltip automatically after 8 seconds, or keep it responsive.
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8500);
    return () => clearTimeout(timer);
  }, []);

  const prefilledText = encodeURIComponent("Hello Prospero EM School, I would like to know about admissions.");
  // Formal gudur school target simulated, universal click link
  const whatsappUrl = `https://wa.me/918624222233?text=${prefilledText}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 font-sans select-none pointer-events-auto">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="relative animate-bounce bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-xs px-3 py-2 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-1">
          <span className="font-semibold text-brand-cyan">Admissions Help?</span> Chat with us live!
          <button 
            onClick={() => setShowTooltip(false)}
            className="ml-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-extrabold text-[10px]"
          >
            ✕
          </button>
          {/* Tooltip carrot */}
          <div className="absolute right-4 bottom-[-6px] w-3 h-3 bg-white dark:bg-slate-900 border-r border-b border-slate-200 dark:border-slate-800 rotate-45" />
        </div>
      )}

      {/* Pulsing button trigger */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        referrerPolicy="no-referrer"
        id="whatsapp-floating-trigger"
        onClick={() => setShowTooltip(false)}
        className="relative group w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/25 transition-transform duration-300 hover:scale-110 active:scale-95"
        aria-label="Contact Prospero School on WhatsApp"
        title="Chat on WhatsApp"
      >
        {/* Pulsing rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping -z-10" />
        
        {/* Custom structured WhatsApp SVG icon or lucide equivalent with custom styling */}
        <MessageSquareShare className="w-6.5 h-6.5 text-white" />
        
        {/* Unread dot indicator for visual density and look-and-feel */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        </span>
      </a>
    </div>
  );
};
