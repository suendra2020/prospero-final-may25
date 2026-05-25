import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsappFloatingButton } from './components/WhatsappFloatingButton';

// Views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { AcademicsView } from './views/AcademicsView';
import { AdmissionsView } from './views/AdmissionsView';
import { FacilitiesView } from './views/FacilitiesView';
import { GalleryView } from './views/GalleryView';
import { TestimonialsView } from './views/TestimonialsView';
import { NewsEventsView } from './views/NewsEventsView';
import { StudentActivitiesView } from './views/StudentActivitiesView';
import { ContactView } from './views/ContactView';

const MainAppContent: React.FC = () => {
  const { theme } = useTheme();
  const [currentView, setView] = useState<string>('home');

  // Render the requested page dynamically
  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView setView={setView} />;
      case 'about':
        return <AboutView />;
      case 'academics':
        return <AcademicsView />;
      case 'admissions':
        return <AdmissionsView />;
      case 'facilities':
        return <FacilitiesView />;
      case 'gallery':
        return <GalleryView />;
      case 'testimonials':
        return <TestimonialsView />;
      case 'news-events':
        return <NewsEventsView />;
      case 'activities':
        return <StudentActivitiesView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView setView={setView} />;
    }
  };

  return (
    <div id="school-main-app" className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      {/* Sticky Top-level Multi-nav Bar */}
      <Navbar currentView={currentView} setView={setView} />

      {/* Primary Dynamic View Content Container */}
      <main id="primary-view-stage" className="flex-grow animate-fade-in">
        {renderView()}
      </main>

      {/* Global institutional contact and mapping footer */}
      <Footer setView={setView} />

      {/* Pulsing floating WhatsApp admissions query anchor */}
      <WhatsappFloatingButton />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <MainAppContent />
    </ThemeProvider>
  );
}
