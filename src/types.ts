export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  qualification: string;
  experience: string;
  image: string;
  category: 'Administration' | 'Primary Faculty' | 'Secondary Faculty' | 'Specialist';
}

export interface AcademicProgram {
  id: string;
  grade: string;
  title: string;
  ageGroup: string;
  description: string;
  keyHighlights: string[];
  subjects: string[];
  syllabusPdfUrl?: string;
}

export interface SchoolFacility {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string; // Lucide icon name representation
  bannerImage: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Academics' | 'Sports' | 'Cultural' | 'Infrastructure' | 'Celebrations';
  imageUrl: string;
  description: string;
}

export interface ParentTestimonial {
  id: string;
  name: string;
  relationship: string; // "Parent of Arjun (Grade VIII)", etc.
  quote: string;
  rating: number;
  avatarUrl: string;
}

export interface AcademicTopper {
  id: string;
  name: string;
  achievement: string; // "98.4% - CBSE Class X" or "State Zone 1st"
  grade: string;
  year: string;
  imageUrl: string;
  quote?: string;
}

export interface NewsEventItem {
  id: string;
  title: string;
  date: string;
  category: 'Academic' | 'Sports' | 'Event' | 'Announcement';
  summary: string;
  description: string;
  imageUrl: string;
  isFeatured?: boolean;
}

export interface StudentActivityItem {
  id: string;
  title: string;
  description: string;
  category: 'Sports & Athletics' | 'Arts & Music' | 'Clubs & STEM' | 'Leadership';
  schedule: string; // e.g. "Every Wednesday, 2:30 PM - 4:00 PM"
  benefits: string[];
  imageUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface EnquirySubmission {
  studentName: string;
  parentName: string;
  phoneNumber: string;
  email: string;
  classApplyingFor: string;
  message: string;
}
