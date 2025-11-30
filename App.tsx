import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { LoomPage } from './components/LoomPage';
import { LoomGenerator } from './components/LoomGenerator';
import { ProposalPage } from './components/ProposalPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/looms/justinhowells" element={<LoomPage />} />
      <Route path="/looms/share" element={<LoomPage />} />
      <Route path="/looms/new" element={<LoomGenerator />} />
      <Route path="/proposals/justinhowells" element={<ProposalPage />} />
    </Routes>
  );
};

export default App;