import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { LoomPage } from './components/LoomPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/looms/justinhowells" element={<LoomPage />} />
    </Routes>
  );
};

export default App;