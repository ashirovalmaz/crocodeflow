import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { LoomPage } from './components/LoomPage';
import { LoomGenerator } from './components/LoomGenerator';
import { ProposalPage } from './components/ProposalPage';
import { ClientPlanPage } from './components/ClientPlanPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/looms/justinhowells" element={<LoomPage />} />
      <Route path="/looms/share" element={<LoomPage />} />
      <Route path="/looms/new" element={<LoomGenerator />} />
      <Route path="/proposals/justinhowells" element={<ProposalPage />} />
      <Route path="/clients/justinhowells/plan" element={<ClientPlanPage />} />
    </Routes>
  );
};

export default App;