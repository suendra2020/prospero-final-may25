import { 
  FacultyMember, 
  AcademicProgram, 
  SchoolFacility, 
  GalleryItem, 
  ParentTestimonial, 
  AcademicTopper, 
  NewsEventItem, 
  StudentActivityItem, 
  FAQItem 
} from './types';

export const SCHOOL_INFO = {
  name: 'Prospero English Medium School',
  tagline: 'Empowering Young Minds for a Brighter Future',
  location: 'Gudur, Nellore District, Andhra Pradesh, India',
  phone: '+91 86242 22233',
  altPhone: '+91 99887 76655',
  email: 'info@prosperoschoolgudur.edu.in',
  admissionsEmail: 'admissions@prosperoschoolgudur.edu.in',
  address: 'Raja Street, Near Clock Tower, Gudur - 524101, Nellore Dist., AP',
  established: '2005',
  affiliation: 'State Board / CBSE Registered Curriculum Secondary'
};

export const CHAIRMAN_CORNER = {
  name: 'Dr. DASARADH. Rao, M.Tech, Ph.D.',
  role: 'Chairman & Founder',
  quote: 'Education is not merely the preparation for life; education is life itself. At Prospero, we do not simply teach kids letters—we build architects of tomorrow who possess global insight integrated with robust ethics.',
  image: 'https://i.ibb.co/FfW1qFj/drr.png',
  message: 'For the last two decades, Prospero English Medium School has remained steadfast in its vision to provide highly modern, global, and affordable English-medium education to the children of Gudur and neighboring villages. Our state-of-the-art labs, high-tech digital classrooms, and focus on non-cognitive skillsets guarantee that a Prosperian stands distinguished in any international arena.'
};

export const PRINCIPAL_CORNER = {
  name: 'Dr. S. srinivasul reddy, M.A., M.Ed.',
  role: 'Principal',
  quote: 'A child-centered atmosphere with custom pedagogical modules guarantees that every single student discovers their authentic talent and pursues it with maximum vigor.',
  image: 'https://i.ibb.co/ghz9Ckh/balaji-2-3.png',
  message: 'Welcome to Prospero. We recognize that each child comes with unique strengths and speeds of comprehension. Our specialized "Continuous Skill Mapping Program" allows teachers to track academic progress and artistic/athletic development with extreme personalization. By embedding smart-classroom technology with solid moral frameworks, we empower young minds to scale the summits of excellence.'
};

export const CORE_VALUES = [
  {
    title: 'Academic Nobility',
    description: 'Nurturing a pure scholarly passion, strict logical thinking, and high English fluency.',
    color: 'from-blue-600 to-cyan-500'
  },
  {
    title: 'Character First',
    description: 'Instilling discipline, respect, secular ideals, and deep empathy in every student actions.',
    color: 'from-amber-600 to-yellow-500'
  },
  {
    title: 'Global Innovation',
    description: 'Embedding virtual coding platforms, robotic sciences, and digital smart class tools.',
    color: 'from-emerald-600 to-teal-500'
  }
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'prog-kg',
    grade: 'Kindergarten (Nursery, LKG, UKG)',
    title: 'Early Years Foundation Wing',
    ageGroup: '3 to 5 Years',
    description: 'A completely stress-free, play-way based curriculum concentrating heavily on motor skills, English speech triggers, phonetics, and sensory cognitive operations.',
    keyHighlights: [
      'Phonetics-driven interactive audio books',
      'Montessori play-way educational toys',
      'Daily basic behavioral and social routines training',
      'Safe indoor children activity arcade'
    ],
    subjects: ['English Listening & Phonic Sounds', 'Pre-Mathematics Concepts', 'General Awareness (Nature & Hygiene)', 'Creative Craft & Rhythm Music']
  },
  {
    id: 'prog-primary',
    grade: 'Primary School (Grades I to V)',
    title: 'Core Intellectual Development Wing',
    ageGroup: '6 to 10 Years',
    description: 'Shifting gears towards writing competency, critical math applications, bilingual command, and physical development. Introduces computerized learning modules.',
    keyHighlights: [
      'Daily digital blackboard interactive slides',
      'Introductory computer science & logic games',
      'Weekly English speech contests & extempore',
      'Comprehensive environmental sensitivity assignments'
    ],
    subjects: ['English Prose & Composition', 'Mathematics (Logical Core & Speed)', 'General Sciences', 'Social Studies', 'Regional Language (Telugu/Hindi)']
  },
  {
    id: 'prog-secondary',
    grade: 'Middle & Secondary School (Grades VI to X)',
    title: 'Higher Scholarly & Technical Academy',
    ageGroup: '11 to 15 Years',
    description: 'Prepares students deeply for secondary certifications. Incorporates regular laboratory schedules, specialized competitive coding exercises, and intensive athletic modules.',
    keyHighlights: [
      'State-of-the-art experimental labs sessions',
      'Pre-coaching for IIT-JEE/NEET foundation criteria',
      'Dynamic STEM/Robotics clubs involvement',
      'Inter-school debate summits and team competitions'
    ],
    subjects: ['Advanced English Grammar & Literature', 'Physical Sciences (Physics/Chemistry)', 'Biological Sciences', 'Mathematics (Algebra, Trig & Calculus Core)', 'History, Civics & Economic Geographies', 'Computer Applications with Core Coding Python']
  }
];

export const SCHOOL_FACILITIES: SchoolFacility[] = [
  {
    id: 'fac-smart',
    title: 'Smart Classroom Arrays',
    shortDescription: 'Every single instruction room is powered with fully touch-enabled digital systems and audio-visual assets.',
    detailedDescription: 'We believe instruction should be visually immersive. Our smart class modules utilize high-definition projectors, specialized school pedagogical software, 3D animated anatomical structures, and real-time quiz feedback panels. This makes complex mathematics and scientific systems effortlessly simple to comprehend.',
    iconName: 'Laptop',
    bannerImage: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800',
    features: ['Fully Air-Conditioned Classrooms', 'Interactive Digital Whiteboards', 'Pre-loaded 3D Digital Syllabus Animations', 'Ergonomic orthopedic benches for correct posture']
  },
  {
    id: 'fac-labs',
    title: 'Modern Science & STEM Laboratories',
    shortDescription: 'Separate highly equipped laboratories for Physics, Chemistry, Biology, and Computer Science.',
    detailedDescription: 'Theoretical knowledge is complete only with robust practical discovery. Our laboratories conform to global safety protocols, featuring state-of-the-art sensor equipment, high-grade chemicals, standard compound microscopes, and advanced digital interfaces. Our robotics station allows students to wire and code actual mechanical models.',
    iconName: 'Beaker',
    bannerImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
    features: ['Individually assigned experiment workstations', 'Highly secure safety extraction hoods and eye showers', 'Advanced Computerized Lab systems with high-speed internet', 'Modular Robotics Kits and Arduino controllers']
  },
  {
    id: 'fac-library',
    title: 'Infinite Knowledge Book Stack',
    shortDescription: 'Over 12,000 reference books, encyclopedias, children fiction journals, and national research papers.',
    detailedDescription: 'The library is the silent beating heart of Prospero. It has quiet reading nooks, an fully computerized index catalogue system, and a digital archive center where students can search through thousands of global educational magazines and scholarly websites on dedicated school tablets.',
    iconName: 'Book',
    bannerImage: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800',
    features: ['Computerized search terminal cataloging', 'Regular weekly newspaper subscriptions', 'Dedicated kindergarten reading corner with soft toys', 'Comfortable ambient acoustic configurations']
  },
  {
    id: 'fac-transport',
    title: 'Global Standard Transport fleet',
    shortDescription: 'A secure fleet of modern school buses covering all major directions around Gudur with active live-tracking.',
    detailedDescription: 'Safety is our absolute paramount duty. Each of our school buses is manned by professional operators with clean commercial logs, a secondary onboard lady matron companion, comprehensive medical first-aid boxes, and high-frequency GPS units synced to our admin servers and available for live mapping in parent portals.',
    iconName: 'Bus',
    bannerImage: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=800',
    features: ['GPS Real-Time Location tracking tracking', 'Integrated automated panic alerts', 'Direct communication lines with drivers', 'On-board lady auxiliary attenders']
  },
  {
    id: 'fac-sports',
    title: 'Champion Sports Arena',
    shortDescription: 'Immense professional athletic fields configures for Football, Cricket, Badminton, and Skating.',
    detailedDescription: 'Prospero champions regular exercise. Our multisport campus incorporates standard running tracks, specialized concrete skating rinks, professional synthetic table tennis gear, and indoor chess/carrom hubs. We have separate specialized co-coaches for physical training, athletic runs, and dynamic sports.',
    iconName: 'Trophy',
    bannerImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800',
    features: ['Professional concrete roller skating tracks', 'Fully grass-laid football field and cricket net practice cages', 'Indoor standard badminton zone', 'Inter-house tournaments hosted monthly']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'National Science Fair Exhibition',
    category: 'Academics',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
    description: 'Students displaying their automated solar-grid design projects for the Nellore District Science Meet.'
  },
  {
    id: 'gal-2',
    title: 'Under-16 Football Gold Trophy',
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800',
    description: 'Prospero Falcons team celebrating their historic victory at the Inter-School Sports Meet.'
  },
  {
    id: 'gal-3',
    title: 'Annual Cultural Festival Dance performance',
    category: 'Cultural',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800',
    description: 'Prospero Senior Girls troupe staging a classic-traditional fusion narrative on global environmental themes.'
  },
  {
    id: 'gal-4',
    title: 'Premium Chemistry Lab Station',
    category: 'Infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=800',
    description: 'Our fully modular chemistry station where grade 10 students safely conduct qualitative compound evaluations.'
  },
  {
    id: 'gal-5',
    title: 'Independence Day National Pride Rally',
    category: 'Celebrations',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
    description: 'Students proudly forming the national tricolor map outline on our central assembly layout.'
  }
];

export const PARENT_TESTIMONIALS: ParentTestimonial[] = [
  {
    id: 'test-1',
    name: 'K. Srinivasa Rao, Senior Architect',
    relationship: 'Father of K. Akhila (Grade IX)',
    quote: "Prospero stands out singularly for its exceptional balance between discipline and innovation. My daughter has become an extremely fluent English speaker and even builds small Python code blocks, thanks to their fantastic digital teaching modules.",
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-2',
    name: 'Dr. Pallavi Varma, Consultant Pediatrician',
    relationship: 'Mother of V. Sidharth (Grade IV)',
    quote: "As a pediatrician, I am highly focused on cognitive development and orthopedic health. Prospero's child seating layout and their stress-free Early Years framework have done wonders for my son. He absolutely loves going to school everyday!",
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-3',
    name: 'M. Ramesh Reddy, Agricultural Enterprise CEO',
    relationship: 'Father of M. Karthik (Grade VII)',
    quote: "Living in the suburban area of Gudur, we were very worried about finding high-quality CBSE style English instruction. Prospero solved everything for us. Their school bus drops him safely off at our farms door, and the online parent portal makes monitoring seamless.",
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
  }
];

export const ACADEMIC_TOPPERS: AcademicTopper[] = [
  {
    id: 'topper-1',
    name: 'G. Mohan Krishna',
    achievement: '99.2% Class X - State Meritorious List First',
    grade: 'Grade X',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300',
    quote: "The teachers didn't just push me to memorize; they broke down every science model into fun experiments. The special IIT-JEE foundation tests kept my reasoning extremely sharp!"
  },
  {
    id: 'topper-2',
    name: 'S. Amrutha Varshini',
    achievement: '98.5% Class X - Nellore District Second Spot',
    grade: 'Grade X',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    quote: "At Prospero, I was encouraged to participate in district tennis tournaments without losing my homework tracking. They gave me customized support schedules."
  },
  {
    id: 'topper-3',
    name: 'V. Lakshmi Narayana',
    achievement: '98.0% Class X - Outstanding Mathematics Core Centum',
    grade: 'Grade X',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300',
    quote: "The computational lab and coding assignments turned geometry and algebra into puzzles. The math teacher spent hours clearing our foundational doubts."
  }
];

export const STUDENT_ACTIVITIES: StudentActivityItem[] = [
  {
    id: 'act-stem',
    title: 'Future Tech STEM & Robotics Lab',
    description: 'Students assemble robots with dynamic motors, configure logic using basic block coding languages, and model basic physical IoT units.',
    category: 'Clubs & STEM',
    schedule: 'Tuesdays & Thursdays, 2:30 PM - 4:00 PM',
    benefits: ['Develops spatial engineering and creative logic', 'Hands-on training with modern electronic circuits', 'Qualification for Inter-School National Olympiads'],
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'act-classical',
    title: 'Symphonie Instrumental & Dance Wings',
    description: 'Comprehensive coaching in classic Carnatic vocals, tabla, keyboard synthesizer, as well as classical Indian folk dances and classical storytelling acts.',
    category: 'Arts & Music',
    schedule: 'Mondays & Fridays, 2:30 PM - 4:00 PM',
    benefits: ['Builds stage confidence and performance skills', 'Preserves vital classical Indian heritage', 'Enhances neuro-cognitive memory and coordination'],
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'act-parl',
    title: 'Mock parliament & Language Club',
    description: 'Simulates municipal and national democratic houses to deliberate global environments, state policies, and sharpen extempore public speaking skills.',
    category: 'Leadership',
    schedule: 'Alternating Wednesdays, 1:45 PM - 3:45 PM',
    benefits: ['Teaches civic duty and political research skills', 'Sharpens English debate phrasing and presentation safety', 'Prepares for state-level model parliament meets'],
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800'
  }
];

export const NEWS_EVENTS: NewsEventItem[] = [
  {
    id: 'news-1',
    title: 'Online Admissions Open for Academic Session 2026-27',
    date: '2026-05-15',
    category: 'Announcement',
    summary: 'Registrations are formally welcome for Kindergarten through Grade IX. Fill in the online web questionnaire to lock in physical diagnostic review sessions.',
    description: 'Prospero is proud to announce the commencement of admissions for the oncoming school cycle. Parents can complete the digital questionnaire here directly, attach required municipal sheets, and schedule direct consultative reviews with the principal to discuss their child special needs and placement.',
    imageUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1200',
    isFeatured: true
  },
  {
    id: 'news-2',
    title: 'District Scientific Model Exhibition - Grand Championship',
    date: '2026-05-02',
    category: 'Academic',
    summary: 'Prospero senior scientists claimed 1st place in the District Green Energy Model Show, beating 48 other premium schools.',
    description: 'Our senior student cohort engineered an elegant smart village grid model featuring solar micro-converters and passive water-harvesting sensors, earning praise from Nellore Education Inspectors.',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
    isFeatured: false
  },
  {
    id: 'news-3',
    title: 'Summative Sports League Championship Triumphs',
    date: '2026-04-20',
    category: 'Sports',
    summary: 'Prospero Falcons claimed the coveted Gudur Junior Athletic Gold Cup with consecutive victories in track and roller speed-run skating.',
    description: 'After two weeks of rigorous matches, our athletic team secured an expansive haul of 8 Gold Medals, 4 Silver Medals, and the crowning overall Champions Trophy.',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800',
    isFeatured: false
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is the teacher-student ratio at Prospero?',
    answer: 'We strictly maintain a highly premium classroom ratio of 1:25. For Kindergarten classes, we have secondary lady class assistants on duty to ensure absolutely personalized care and supervision.'
  },
  {
    id: 'faq-2',
    question: 'How do I track my child daily activities and scores?',
    answer: 'Each parent is assigned a customized secured sign-in ID for the Prospero Parent web portal, showing attendance logs, real-time bus positions, and digital scorecard results instantly.'
  },
  {
    id: 'faq-3',
    question: 'Does the school offer pre-coaching for competitive examinations?',
    answer: 'Yes! From Grade VI onwards, we incorporate dedicated "IIT-JE & NEET Academic Foundation Coaching Modules" once every week, enhancing logical reasoning and advanced arithmetic without hampering standard syllabus preparation.'
  },
  {
    id: 'faq-4',
    question: 'What is the policy for safety and physical security?',
    answer: 'Our campus features single-portal entry with armed security, full CCTV surveillance covering all public corridors and entrances, and mandatory ID-verification pass checks for any person entering the facility.'
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'fac-1',
    name: 'Mrs. S. Janaki Devi',
    role: 'Principal & English Head',
    qualification: 'M.A. (Eng), M.Ed, PGCTE (CIEFL)',
    experience: '18 Years in Academic Leadership',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    category: 'Administration'
  },
  {
    id: 'fac-2',
    name: 'Mr. P. Satish Kumar',
    role: 'Senior Science Director',
    qualification: 'M.Sc. (Physics), B.Ed',
    experience: '12 Years of Chemistry & Physics Pedagogics',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150',
    category: 'Secondary Faculty'
  },
  {
    id: 'fac-3',
    name: 'Mrs. K. Rama Devi',
    role: 'Mathematics Dean',
    qualification: 'M.Sc. (Applied Mathematics), B.Ed',
    experience: '11 Years of Core Mathematics Mentorship',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    category: 'Secondary Faculty'
  },
  {
    id: 'fac-4',
    name: 'Mrs. T. Anjali',
    role: 'Senior Primary Wing Lead',
    qualification: 'B.A. (English), B.Ed, Child Psy. Dip.',
    experience: '9 Years Primary Level Mentoring',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
    category: 'Primary Faculty'
  }
];
