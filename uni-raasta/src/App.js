import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/common/NavBar';
import './App.css';
import AccommodationsPage from './pages/AccommodationsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import SocietiesPage from './pages/SocietiesPage';
import FAQPage from './pages/FAQPage';
import FeesPage from './pages/FeesPage';
import PlacementsPage from './pages/PlacementsPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/admissions" />} />
        <Route path="/accommodations" element={<AccommodationsPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/societies" element={<SocietiesPage />} />
        <Route path="/fees" element={<FeesPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/placements" element={<PlacementsPage />} />
      </Routes>
    </div>
  );
}

export default App;
