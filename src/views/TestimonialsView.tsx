import React, { useState } from 'react';
import { PARENT_TESTIMONIALS } from '../data';
import { Quote, Sparkles, Star, Plus, Check } from 'lucide-react';

export const TestimonialsView: React.FC = () => {
  const [reviews, setReviews] = useState(PARENT_TESTIMONIALS);
  const [formData, setFormData] = useState({
    name: '',
    relationship: '',
    quote: '',
    rating: 5
  });
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (stars: number) => {
    setFormData((prev) => ({ ...prev, rating: stars }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.quote) {
      const newReview = {
        id: `custom-review-${Date.now()}`,
        name: formData.name,
        relationship: formData.relationship || 'Parent of Student',
        quote: formData.quote,
        rating: formData.rating,
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
      };
      
      setReviews((prev) => [newReview, ...prev]);
      setSuccess(true);
      setFormData({ name: '', relationship: '', quote: '', rating: 5 });
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <div id="testimonials-view-container" className="space-y-16 pb-16 font-sans">
      
      {/* Header Banner */}
      <section className="relative py-14 bg-gradient-to-r from-slate-900 to-brand-blue text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 text-brand-cyan text-xs font-bold uppercase rounded-full">
            <span>COMMUNITY INSIGHTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight">Parent Reviews & Testimonials</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Real experiences from families whose children have completed their secondary certifications at Prospero.
          </p>
        </div>
      </section>

      {/* Grid of Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-brand-cyan/15 absolute top-4 left-4" />
              <div className="space-y-4 pt-4">
                <p className="text-xs sm:text-sm text-slate-650 dark:text-slate-400 leading-normal italic font-light">
                  "{rev.quote}"
                </p>
                <div className="flex gap-0.5 text-amber-500">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-5 flex items-center gap-3">
                <img 
                  src={rev.avatarUrl} 
                  alt={rev.name} 
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100">{rev.name}</h4>
                  <p className="text-[10px] text-slate-500">{rev.relationship}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Submit Your Testimonial / Feedback Option */}
      <section className="max-w-xl mx-auto px-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-900 space-y-6">
          
          <div className="space-y-1 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-cyan/10 text-brand-cyan text-xs font-bold uppercase rounded-full mb-2">
              <Plus className="w-3.5 h-3.5 animate-spin" />
              <span>REGISTRY CORNER</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold font-serif text-slate-800 dark:text-slate-100">Submit Your Institutional Experience</h3>
            <p className="text-[11px] text-slate-550 dark:text-slate-450 leading-relaxed font-light">
              We value parent inputs. Lodge your reviews, rating score, and child class mapping into our public community list.
            </p>
          </div>

          {success ? (
            <div className="p-4 text-center bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-150 rounded-xl space-y-2">
              <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Check className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">Review Saved Successfully!</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-light max-w-xs mx-auto">
                Thank you. Your testimonial has been populated in real-time above and will undergo quick verification by our administrative system.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Stars selection */}
              <div className="flex flex-col gap-1.5 items-center justify-center">
                <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400">Score Rating:</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => handleRatingChange(st)}
                      className="p-1 cursor-pointer hover:scale-110 transition-transform"
                      aria-label={`Rate ${st} stars`}
                    >
                      <Star className={`w-6 h-6 ${st <= formData.rating ? 'text-amber-400 fill-amber-405' : 'text-slate-350'}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div className="flex flex-col gap-1">
                <label htmlFor="pname" className="text-xs font-semibold text-slate-700 dark:text-slate-300">Parent / Guardian Name</label>
                <input
                  type="text"
                  id="pname"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Ex. G. Srimannarayana"
                  className="text-xs px-3 py-2 border border-slate-205 dark:border-slate-800 bg-white dark:bg-slate-900 dark:text-white rounded focus:border-brand-cyan outline-none"
                />
              </div>

              {/* Relationship with Student */}
              <div className="flex flex-col gap-1">
                <label htmlFor="rel" className="text-xs font-semibold text-slate-705 dark:text-slate-300">Relationship (E.g., Father of Shreya, Grade III)</label>
                <input
                  type="text"
                  id="rel"
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleInputChange}
                  placeholder="Ex. Father of Anand (Grade V)"
                  className="text-xs px-3 py-2 border border-slate-205 dark:border-slate-800 bg-white dark:bg-slate-900 dark:text-white rounded focus:border-brand-cyan outline-none"
                />
              </div>

              {/* Quote Testimonial description */}
              <div className="flex flex-col gap-1">
                <label htmlFor="qte" className="text-xs font-semibold text-slate-705 dark:text-slate-300">Testimonial Review</label>
                <textarea
                  id="qte"
                  name="quote"
                  value={formData.quote}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  placeholder="Share details of your experience with the academics, teachers, safe environment..."
                  className="text-xs px-3 py-2 border border-slate-205 dark:border-slate-800 bg-white dark:bg-slate-900 dark:text-white rounded focus:border-brand-cyan outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                id="testimonial-submit-btn"
                className="w-full py-2.5 bg-brand-cyan hover:bg-sky-600 text-white font-bold text-xs uppercase tracking-widest rounded transition-all transform active:scale-98 shadow-sm flex items-center justify-center gap-1"
              >
                <span>Save Review</span>
              </button>

            </form>
          )}

        </div>
      </section>

    </div>
  );
};
