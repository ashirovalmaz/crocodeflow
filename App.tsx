import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { LoomPage } from './components/LoomPage';
import { LoomGenerator } from './components/LoomGenerator';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/looms/justinhowells" element={<LoomPage />} />
      <Route path="/looms/share" element={<LoomPage />} />
      <Route path="/looms/new" element={<LoomGenerator />} />
    </Routes>
  );
};

export default App;