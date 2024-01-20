import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AccommodationsPage from './AccommodationsPage';
import AdmissionsPage from './AdmissionsPage';
import SocietiesPage from './SocietiesPage';
import FeesPage from './FeesPage';
import PlacementsPage from './PlacementsPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/accommodations" element={<AccommodationsPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/societies" element={<SocietiesPage />} />
        <Route path="/fees" element={<FeesPage />} />
        <Route path="/placements" element={<PlacementsPage />} />
        {/* ... other routes */}
      </Routes>
    </div>
  );
}

export default App;
