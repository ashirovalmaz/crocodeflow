import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Hero } from './Hero';
import { LiveTicker } from './LiveTicker';
import { Services } from './Services';
import { CaseStudies } from './CaseStudies';
import { CaseDetail } from './CaseDetail';
import { ROICalculator } from './ROICalculator';
import { Testimonials } from './Testimonials';
import { Team } from './Team';
import { Footer } from './Footer';
import { ProcessRoast } from './ProcessRoast';
import { CaseStudy } from '../types';

export const LandingPage: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const location = useLocation();

  // Handle hash scrolling on mount (e.g. returning from another page)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleNavigate = (href: string) => {
    // If navigating to home or a section while in Detail View, reset to landing first
    if (selectedCase) {
        setSelectedCase(null);
        // Small timeout to allow render, then scroll
        setTimeout(() => {
             // Extract ID from href (e.g. #services -> services)
             const id = href.replace('#', '');
             const element = document.getElementById(id);
             element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        // Normal scroll
        const id = href.replace('#', '');
        const element = document.getElementById(id);
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