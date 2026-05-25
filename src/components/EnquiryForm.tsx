import React, { useState } from 'react';
import { Send, Sparkles, MessageSquare, ClipboardCheck, ArrowRight } from 'lucide-react';
import { SCHOOL_INFO } from '../data';

interface EnquiryFormProps {
  embeddedMode?: boolean; // If true, it fits nicely in a sidebar/section; if false, it serves as a large independent form card.
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ embeddedMode = false }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phoneNumber: '',
    email: '',
    classApplyingFor: 'Grade I',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const gradeOptions = [
    'Nursery', 'LKG', 'UKG',
    'Grade I', 'Grade II', 'Grade III', 'Grade IV', 'Grade V',
    'Grade VI', 'Grade VII', 'Grade VIII', 'Grade IX', 'Grade X'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Create the pre-filled email components
    const recipient = 'vsurendra223344@gmail.com';
    const emailSubject = `PROSPERO ADMISSION ENQUIRY: ${formData.studentName} (${formData.classApplyingFor})`;
    const emailBody = `Respected Chairperson / Admissions Team at Prospero English Medium School,

I am submitting a new student admission enquiry for your consideration. Here are the core details:

1. Student Name: ${formData.studentName}
2. Academic Class Applying For: ${formData.classApplyingFor}
3. Parent / Guardian Name: ${formData.parentName}
4. Contact Phone Number: ${formData.phoneNumber}
5. Contact Email Address: ${formData.email || 'None provided'}

Specific Student Needs or Secondary Queries:
${formData.message || 'No additional questions submitted.'}

Please review this application and let us know the next steps for evaluation and onboarding.

Best Regards,
${formData.parentName}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Trigger user's mail client with pre-filled details
      window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      // Reset form variables
      setFormData({
        studentName: '',
        parentName: '',
        phoneNumber: '',
        email: '',
        classApplyingFor: 'Grade I',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className={`w-full transition-all duration-300 ${embeddedMode ? '' : 'p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 shadow-xl'}`}>
      
      {/* Form header context */}
      {!embeddedMode && (
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-cyan/10 text-brand-cyan text-xs font-bold uppercase rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ADMISSION REGISTRATION 2026-27</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 dark:text-slate-100">
            Submit Physical Placement Inquiry
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Fill in the details below. Our academic counsel will map your entry and contact you within 24 operational hours.
          </p>
        </div>
      )}

      {submitStatus === 'success' ? (
        <div className="p-6 text-center space-y-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-100 dark:border-emerald-900/30 font-sans">
          <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto shadow-md animate-bounce">
            <ClipboardCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 font-serif">Enquiry Drafted & Email Dispatched!</h4>
            <p className="text-xs text-slate-600 dark:text-slate-350 mt-2 leading-relaxed max-w-sm mx-auto">
              Your admission configuration details have been compiled and sent directly to <strong className="text-slate-800 dark:text-white font-semibold">vsurendra223344@gmail.com</strong> via your default email application. Please double-check your mail window to hit "Send", or connect instantly on WhatsApp below!
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-2 max-w-xs mx-auto">
            <button
              onClick={() => setSubmitStatus('idle')}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg shadow-sm"
            >
              Submit Another Form
            </button>
            <a
              href={`https://wa.me/918624222233?text=${encodeURIComponent("Hello, I just submitted an online admission enquiry for my child and would like to follow up.")}`}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="px-4 py-2 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-lg shadow-sm flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Connect</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Two-column layout on modern grids */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Student Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="studentName" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Student Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleInputChange}
                required
                placeholder="Ex. Karthik Reddy"
                className="text-xs px-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/25 dark:text-white outline-none transition-all"
              />
            </div>

            {/* Parent Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="parentName" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Parent / Guardian Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleInputChange}
                required
                placeholder="Ex. M. Ramesh Reddy"
                className="text-xs px-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/25 dark:text-white outline-none transition-all"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phoneNumber" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Contact Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                placeholder="Ex. +91 99887 76655"
                className="text-xs px-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/25 dark:text-white outline-none transition-all"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Email Address <span className="text-slate-400">(Optional)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Ex. parent@domain.com"
                className="text-xs px-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/25 dark:text-white outline-none transition-all"
              />
            </div>

            {/* Class Applying For Selection */}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="classApplyingFor" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Academic Standard applying for <span className="text-red-500">*</span>
              </label>
              <select
                id="classApplyingFor"
                name="classApplyingFor"
                value={formData.classApplyingFor}
                onChange={handleInputChange}
                className="text-xs px-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/25 dark:text-white outline-none transition-all"
              >
                {gradeOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="message" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Secondary Queries or Specific Student Needs
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={embeddedMode ? 3 : 4}
                placeholder="Add any specific items. E.g., special sport achievements, transportation requests, health considerations..."
                className="text-xs px-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/25 dark:text-white outline-none transition-all resize-none"
              />
            </div>

          </div>

          {/* Form Submit button and alternative quick WhatsApp contact options */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:items-center justify-between">
            <span className="text-[10px] text-slate-400 dark:text-slate-500">
              🔒 Information protected under Student Privacy Regulation Act.
            </span>
            <button
              type="submit"
              disabled={isSubmitting}
              id="submit-enquiry-form-btn"
              className="px-6 py-3 bg-gradient-to-r from-brand-cyan to-indigo-600 hover:from-indigo-600 hover:to-brand-cyan disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold text-xs uppercase tracking-widest rounded-lg shadow-lg shadow-brand-cyan/20 duration-200 transition-all flex items-center justify-center gap-2 transform active:scale-[0.98]"
            >
              {isSubmitting ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Transmitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Register Application</span>
                </>
              )}
            </button>
          </div>

          {/* Prompt integration action */}
          <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mt-2">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-500 dark:text-slate-400 text-center sm:text-left leading-normal">
                Prefer immediate support? Skip the form:
              </span>
              <a
                href={`https://wa.me/918624222233?text=${encodeURIComponent("Hello Prospero EM School, I would like to know about admissions.")}`}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-50 dark:bg-emerald-950/20 text-[#25D366] hover:bg-emerald-100 dark:hover:bg-emerald-950/45 font-bold transition-colors border border-emerald-200/50 dark:border-emerald-900/30"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Admission Chat Line</span>
                <ArrowRight className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>

        </form>
      )}

    </div>
  );
};
