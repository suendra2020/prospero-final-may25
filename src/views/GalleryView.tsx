import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { Image, X, ZoomIn, Eye } from 'lucide-react';

export const GalleryView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Academics', 'Sports', 'Cultural', 'Infrastructure', 'Celebrations'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div id="gallery-view-container" className="space-y-12 pb-16 font-sans">
      
      {/* Header Banner */}
      <section className="relative py-14 bg-gradient-to-r from-slate-900 to-brand-blue text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 text-brand-cyan text-xs font-bold uppercase rounded-full">
            <span>VISUAL CHRONICLES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight">Our Campus Life In Frames</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            A window into daily scientific discoveries, athletic medals, cultural festivals, and structural excellence.
          </p>
        </div>
      </section>

      {/* Filter Tabs Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-brand-cyan text-white shadow-md shadow-brand-cyan/20 scale-102 font-extrabold'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-205/60 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image Frame */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Glass Overlay */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md rounded-full flex items-center justify-center text-slate-800 dark:text-white shadow-lg border border-white/20 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5 text-brand-cyan" />
                  </div>
                </div>

                {/* Category Badge */}
                <span className="absolute top-4 left-4 text-[9px] uppercase font-mono font-extrabold text-white bg-brand-cyan/80 px-2.5 py-1 rounded">
                  {item.category}
                </span>
              </div>

              {/* Caption text */}
              <div className="p-5 space-y-1.5">
                <h4 className="font-bold text-sm block tracking-wide text-slate-800 dark:text-slate-100 leading-normal group-hover:text-brand-cyan transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 font-light leading-normal truncate">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/40 rounded-3xl border border-dashed border-slate-200">
            <Eye className="w-10 h-10 text-slate-300 mx-auto" />
            <h4 className="text-sm font-bold text-slate-550 dark:text-slate-450 mt-3 font-serif">No images recorded in category</h4>
            <p className="text-xs text-slate-450 mt-1 font-light">We will populate this partition as soon as the oncoming academic term logs begin.</p>
          </div>
        )}

      </section>

      {/* LIGHTBOX MODAL TRIGGER */}
      {lightboxItem && (
        <div 
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
        >
          {/* Close trigger */}
          <button 
            onClick={() => setLightboxItem(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
            title="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Zooms box container */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="max-w-4xl w-full flex flex-col gap-4 text-white"
          >
            <div className="max-h-[75vh] rounded-2xl overflow-hidden border border-white/10 bg-slate-950 flex items-center justify-center select-none shadow-2xl">
              <img 
                src={lightboxItem.imageUrl} 
                alt={lightboxItem.title} 
                className="w-auto max-h-[75vh] object-contain" 
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="space-y-1 p-2">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-brand-cyan">
                {lightboxItem.category} Category
              </span>
              <h3 className="text-base sm:text-lg font-serif font-bold text-white leading-snug">{lightboxItem.title}</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">{lightboxItem.description}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
