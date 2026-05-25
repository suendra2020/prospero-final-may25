import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  Sparkles,
  Check,
  Trophy,
  ChevronRight,
  ChevronLeft,
  Quote,
  Laptop,
  HelpCircle,
  Clock
} from 'lucide-react';

import {
  SCHOOL_INFO,
  PARENT_TESTIMONIALS,
  NEWS_EVENTS,
  FAQ_ITEMS,
  SCHOOL_FACILITIES,
  GALLERY_ITEMS
} from '../data';

import { EnquiryForm } from '../components/EnquiryForm';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HomeViewProps {
  setView: (view: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setView }) => {

  // HERO TEXT CAROUSEL
  const heroSlides = [
    "Empowering Young Minds for a Brighter Future",
    "Building Future Leaders Through Innovation",
    "Smart Learning for Smart Generations",
    "Where Knowledge Meets Creativity",
    "Excellence in Education Since 2005",
    "Transforming Dreams Into Achievements",
    "Future-Ready Education for Every Child"
  ];

  // HERO IMAGE CAROUSEL
  const heroImages = [
      "https://i.ibb.co/jk9vTL7W/logo-prospero.png",
    "https://i.ibb.co/FfW1qFj/drr.png",  
    "https://i.ibb.co/Z17QJD18/Chat-GPT-Image-May-25-2026-12-58-21-PM.png",
    "https://i.ibb.co/1JR8xDGZ/Chat-GPT-Image-May-25-2026-12-56-30-PM.png",
    // "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
    // "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
    // "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1200&q=80"
  ];

  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [activeHeroImage, setActiveHeroImage] = useState(0);

  // TESTIMONIAL
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // FAQ
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  // COUNTERS
  const [counters, setCounters] = useState({
    years: 0,
    students: 0,
    ratio: 0,
    classes: 0
  });

  // HERO AUTO SLIDE
  useEffect(() => {
    const textInterval = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    const imageInterval = setInterval(() => {
      setActiveHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 3500);

    return () => {
      clearInterval(textInterval);
      clearInterval(imageInterval);
    };
  }, []);

  // COUNTER ANIMATION
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => {

        const nextYears = prev.years < 21 ? prev.years + 1 : 21;
        const nextStudents = prev.students < 1250 ? prev.students + 50 : 1250;
        const nextRatio = 25;
        const nextClasses = prev.classes < 28 ? prev.classes + 1 : 28;

        if (
          nextYears === 21 &&
          nextStudents === 1250 &&
          nextClasses === 28
        ) {
          clearInterval(interval);
        }

        return {
          years: nextYears,
          students: nextStudents,
          ratio: nextRatio,
          classes: nextClasses
        };
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // GSAP
  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.fromTo(
        '#achievements-section',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '#achievements-section',
            start: 'top 85%'
          }
        }
      );

    });

    return () => ctx.revert();

  }, []);

  // TESTIMONIAL FUNCTIONS
  const handleNextTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev + 1) % PARENT_TESTIMONIALS.length
    );
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + PARENT_TESTIMONIALS.length) %
      PARENT_TESTIMONIALS.length
    );
  };

  // FAQ TOGGLE
  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (

    <div className="space-y-24 pb-20 font-sans overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] overflow-hidden bg-slate-50 dark:bg-slate-950 flex items-center">

        {/* BG EFFECTS */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT SIDE */}
            <div className="space-y-8">

              <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-500 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                Admissions Open 2026-27
              </div>

              {/* TEXT CAROUSEL */}
              <div className="min-h-[180px] flex items-center">

                <h1
                  key={activeHeroSlide}
                  className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-slate-900 font-serif  dark:text-white animate-fadeIn"
                >
                  {heroSlides[activeHeroSlide]}
                </h1>

              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                Experience excellence at Gudur's premier English medium school.
                We nurture academic brilliance, leadership, communication,
                innovation, and future-ready learning through digital classrooms
                and holistic education.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4">

                <button
                  onClick={() => setView('admissions')}
                  className="px-7 py-3.5 bg-cyan-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Apply Admission
                </button>

                <button
                  onClick={() => setView('about')}
                  className="px-7 py-3.5 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-300"
                >
                  Explore Campus
                </button>

              </div>

            </div>

            {/* RIGHT SIDE IMAGE CAROUSEL */}
            <div className="relative">

              <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">

                {heroImages.map((img, index) => (

                  <img
                    key={index}
                    src={img}
                    alt="School"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                      activeHeroImage === index
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-110'
                    }`}
                  />

                ))}

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                {/* FLOATING CARD */}
                <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/20 max-w-xs">

                  <h4 className="text-xs uppercase tracking-widest font-bold text-cyan-500 mb-2">
                    Smart Digital Campus
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Interactive classrooms, science labs, STEM learning,
                    sports arenas, and advanced digital infrastructure.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STATS BELOW HERO */}
      <section className="relative -mt-32 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 text-center">
            <div className="text-3xl font-black text-cyan-500">
              {counters.years}+
            </div>
            <div className="text-xs uppercase tracking-wider font-bold text-slate-500 mt-1">
              Years Legacy
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 text-center">
            <div className="text-3xl font-black text-cyan-500">
              {counters.students}+
            </div>
            <div className="text-xs uppercase tracking-wider font-bold text-slate-500 mt-1">
              Students
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 text-center">
            <div className="text-3xl font-black text-cyan-500">
              1:{counters.ratio}
            </div>
            <div className="text-xs uppercase tracking-wider font-bold text-slate-500 mt-1">
              Teacher Ratio
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 text-center">
            <div className="text-3xl font-black text-cyan-500">
              {counters.classes}
            </div>
            <div className="text-xs uppercase tracking-wider font-bold text-slate-500 mt-1">
              Smart Classes
            </div>
          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">

            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              PROSPERO ADVANTAGE
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
              Why Parents Choose Our School
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Modern education with strong academic foundations, STEM learning,
              communication skills, and future-focused development.
            </p>

            <ul className="space-y-4">

              <li className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-cyan-500" />
                </div>
                <span className="text-sm text-slate-700 dark:text-slate-300">
                  Smart digital classrooms
                </span>
              </li>

              <li className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-cyan-500" />
                </div>
                <span className="text-sm text-slate-700 dark:text-slate-300">
                  IIT & NEET foundation programs
                </span>
              </li>

              <li className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-cyan-500" />
                </div>
                <span className="text-sm text-slate-700 dark:text-slate-300">
                  Holistic student development
                </span>
              </li>

            </ul>

          </div>

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1200"
              alt="School"
              className="rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      </section>

    </div>
  );
};
