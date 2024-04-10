import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClickerPresale } from './pages/presale/clicker';

export const RoutesFind = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClickerPresale />} />
      </Routes>
    </Router>
  );
};
