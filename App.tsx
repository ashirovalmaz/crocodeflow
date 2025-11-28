import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LiveTicker } from './components/LiveTicker';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { CaseDetail } from './components/CaseDetail';
import { ROICalculator } from './components/ROICalculator';
import { Testimonials } from './components/Testimonials';
import { Team } from './components/Team';
import { Footer } from './components/Footer';
import { ProcessRoast } from './components/ProcessRoast';
import { LoomPage } from './components/LoomPage';
import { CaseStudy } from './types';

const App: React.FC = () => {
  // State to manage the view: 'landing' or a specific CaseStudy object
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Simple URL listener to handle popstate (back button) if we were doing real routing,
    // but primarily just to grab the initial path.
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Simple Router Logic
  if (currentPath === '/looms/justinhowells') {
    return <LoomPage />;
  }

  const handleNavigate = (href: string) => {
    // If navigating to home or a section while in Detail View, reset to landing first
    if (selectedCase) {
        setSelectedCase(null);
        // Small timeout to allow render, then scroll
        setTimeout(() => {
             const element = document.querySelector(href);
             element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        // Normal scroll
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-white selection:bg-brand-500 selection:text-white transition-colors duration-300">
      <Header onNavigate={handleNavigate} isDetailView={!!selectedCase} />
      
      {selectedCase ? (
        <CaseDetail study={selectedCase} onBack={() => setSelectedCase(null)} />
      ) : (
        <main>
          <section id="home">
            <Hero />
          </section>

          <LiveTicker />

          <section id="services" className="py-24 bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
            <Services />
          </section>

          <section id="roast">
            <ProcessRoast />
          </section>

          <section id="cases" className="py-24 bg-gray-50 dark:bg-dark-900 relative transition-colors duration-300">
             <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent"></div>
             <CaseStudies onCaseClick={setSelectedCase} />
          </section>

          <section id="testimonials">
              <Testimonials />
          </section>

          <section id="roi" className="py-24 bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
            <ROICalculator />
          </section>

          <section id="team" className="py-24 bg-gray-100 dark:bg-dark-800/50 border-t border-gray-200 dark:border-dark-800 transition-colors duration-300">
            <Team />
          </section>
        </main>
      )}

      <Footer />
    </div>
  );
};

export default App;