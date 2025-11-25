import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LiveTicker } from './components/LiveTicker';
import { Services } from './components/Services';
import { AIConsultant } from './components/AIConsultant';
import { ROICalculator } from './components/ROICalculator';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white selection:bg-brand-500 selection:text-white">
      <Header />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <LiveTicker />

        <section id="services" className="py-24 bg-dark-900">
          <Services />
        </section>

        <section id="testimonials">
            <Testimonials />
        </section>

        <section id="consultant" className="py-24 bg-dark-800 border-y border-dark-700">
          <AIConsultant />
        </section>

        <section id="roi" className="py-24 bg-dark-900">
          <ROICalculator />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;