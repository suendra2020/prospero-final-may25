import React from 'react';
import { EnquiryForm } from '../components/EnquiryForm';
import { SCHOOL_INFO } from '../data';
import { 
  FileText, 
  HelpCircle, 
  UserCheck, 
  Layers, 
  Calendar, 
  Check, 
  AlertTriangle 
} from 'lucide-react';

export const AdmissionsView: React.FC = () => {
  // Timeline steps
  const steps = [
    {
      step: '01',
      title: 'Online Registration',
      description: 'Fill in the integrated enquiry sheet below or visit the campus physically to submit credentials.'
    },
    {
      step: '02',
      title: 'Academic Consultation',
      description: 'Meet our lead counselors to analyze your child behavioral parameters and academic speed.'
    },
    {
      step: '03',
      title: 'Placement Mapping',
      description: 'A friendly diagnostic check (for Grades II to X) to align basic english reading and logical numbers.'
    },
    {
      step: '04',
      title: 'Enrollment Locked',
      description: 'Verify original documents list, complete annual fee divisions, and lock in the student pass.'
    }
  ];

  const documentChecklist = [
    { id: 'doc-birth', label: 'Municipal Birth Certificate', required: true, notes: 'Original for validation + 2 photocopies' },
    { id: 'doc-tc', label: 'Transfer Certificate (TC)', required: true, notes: 'From previous recognized school (Grade II onwards)' },
    { id: 'doc-report', label: 'Previous Grade Scorecards', required: true, notes: 'For verifying scholastic metrics and curriculum' },
    { id: 'doc-photos', label: 'Recent Passport size Photographs', required: true, notes: '4 of student + 2 of each parent/guardian' },
    { id: 'doc-aadhaar', label: 'Student Aadhaar Card Copy', required: true, notes: '1 copy' },
    { id: 'doc-blood', label: 'Certified Blood Group Report', required: false, notes: 'From any registered local laboratory diagnostics' }
  ];

  const eligibilityMatrix = [
    { class: 'Nursery', minimumAge: '3 Years as of June 1st of Admission Year', syllabus: 'Montessori Play' },
    { class: 'LKG', minimumAge: '4 Years as of June 1st of Admission Year', syllabus: 'Early Years Base' },
    { class: 'UKG', minimumAge: '5 Years as of June 1st of Admission Year', syllabus: 'Advanced Phonics' },
    { class: 'Grade I', minimumAge: '6 Years as of June 1st of Admission Year', syllabus: 'State / CBSE Core' }
  ];

  return (
    <div id="admissions-view-container" className="space-y-16 pb-16 font-sans">
      
      {/* View Header */}
      <section className="relative py-14 bg-gradient-to-r from-slate-900 to-brand-blue text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 text-brand-cyan text-xs font-bold uppercase rounded-full">
            <span>SEAMLESS ENROLLMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight">Admission Guidelines & Registration</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Simple, highly transparent structures that allow families to explore curriculum alignments and secure seats guilt-free.
          </p>
        </div>
      </section>

      {/* visual Timeline of Admission metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10 max-w-lg mx-auto">
          <h3 className="text-lg sm:text-2xl font-bold font-serif text-slate-800 dark:text-slate-100">Our Admission Process Timeline</h3>
          <p className="text-xs text-slate-500">
            Four simple steps structured to welcome your child into the Prospero wing environment safely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {steps.map((st, i) => (
            <div 
              key={i}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 shadow-xs relative space-y-3"
            >
              <div className="text-3xl font-extrabold font-mono text-brand-cyan/25 absolute top-3 right-4">
                {st.step}
              </div>
              <div className="w-10 h-10 rounded-full bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                {i === 0 ? <FileText className="w-5 h-5" /> : i === 1 ? <HelpCircle className="w-5 h-5" /> : i === 2 ? <Layers className="w-5 h-5" /> : <UserCheck className="w-5 h-5" />}
              </div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-slate-100 mt-2">{st.title}</h4>
              <p className="text-[11px] text-slate-400 dark:text-slate-400 leading-relaxed font-light">{st.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Grid of Documents Checklist & Criteria table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left: Document parameters */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-2xl font-bold font-serif text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <FileText className="text-brand-cyan w-6 h-6" />
              <span>Required Paperwork Verification</span>
            </h3>
            <p className="text-xs text-slate-500 leading-normal">
              Kindly assemble the following certificates. Discrepancies in verification reports may void the seat placement allocations.
            </p>
          </div>

          <div className="space-y-3">
            {documentChecklist.map((doc) => (
              <div 
                key={doc.id}
                className="p-3.5 rounded-xl border border-slate-200/50 dark:border-slate-850 bg-white dark:bg-slate-900/40 flex items-start gap-3.5"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-100">{doc.label}</span>
                    {doc.required ? (
                      <span className="text-[9px] font-mono uppercase bg-red-500/10 text-red-500 px-1 rounded font-bold">Mandatory</span>
                    ) : (
                      <span className="text-[9px] font-mono uppercase bg-slate-100 dark:bg-slate-800 text-slate-400 px-1 rounded">Optional</span>
                    )}
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5 font-light leading-normal">{doc.notes}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-brand-gold flex gap-2">
            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="leading-relaxed font-light">
              <strong>Please Note:</strong> Transfer Certificate (TC) must be duly signed by recognized block officials if migrating from an out-of-district board.
            </p>
          </div>
        </div>

        {/* Right: Age Matrices */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-2xl font-bold font-serif text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <Calendar className="text-amber-500 w-6 h-6" />
              <span>Age Eligibility criteria Matrix</span>
            </h3>
            <p className="text-xs text-slate-500 leading-normal">
              Age calibrations are strictly adhered to, conforming to national rules. Check the table configurations before filing application.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-850">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="px-4 py-3.5">Standard Wing</th>
                  <th className="px-4 py-3.5">Age Milestone Requirement</th>
                  <th className="px-4 py-3.5 text-right">Curriculum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-850 text-slate-600 dark:text-slate-400 font-light">
                {eligibilityMatrix.map((matrix, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                    <td className="px-4 py-4 font-bold text-slate-850 dark:text-slate-200">{matrix.class}</td>
                    <td className="px-4 py-4">{matrix.minimumAge}</td>
                    <td className="px-4 py-4 text-right font-semibold text-brand-cyan">{matrix.syllabus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850">
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">Admissions Helpline Call Desk</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed font-light">
              Having complex queries regarding migrating fee partitions or diagnostic schedules? Speak with our admission clerk desk: <br />
              <span className="font-mono font-bold text-brand-cyan text-xs">{SCHOOL_INFO.admissionsEmail}</span>
            </p>
          </div>
        </div>

      </section>

      {/* Form Submission Embed block */}
      <section className="max-w-3xl mx-auto px-4">
        <EnquiryForm />
      </section>

    </div>
  );
};
