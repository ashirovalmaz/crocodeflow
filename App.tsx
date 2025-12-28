import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { LoomPage } from './components/LoomPage';
import { LoomGenerator } from './components/LoomGenerator';
import { ProposalPage } from './components/ProposalPage';
import { ClientPlanPage } from './components/ClientPlanPage';
import { FloatingBookingWidget } from './components/FloatingBookingWidget';

const App: React.FC = () => {
  const location = useLocation();
  const hideWidget = location.pathname.startsWith('/looms/new');

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/looms/justinhowells" element={<LoomPage />} />
        <Route path="/looms/share" element={<LoomPage />} />
        <Route path="/looms/new" element={<LoomGenerator />} />
        <Route path="/proposals/justinhowells" element={<ProposalPage />} />
        <Route path="/clients/justinhowells/plan" element={<ClientPlanPage />} />
      </Routes>
      {!hideWidget && <FloatingBookingWidget />}
    </>
  );
};

export default App;