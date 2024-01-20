import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import AccommodationsPage from './AccommodationsPage';
import AdmissionsPage from './AdmissionsPage';
import FAQPage from './FAQPage';
import FeesPage from './FeesPage';
import PlacementsPage from './PlacementsPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/admissions" />} />
        <Route path="/accommodations" element={<AccommodationsPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/fees" element={<FeesPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/placements" element={<PlacementsPage />} />
      </Routes>
    </div>
  );
}

export default App;
