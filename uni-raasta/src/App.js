import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AccommodationsPage from './AccommodationsPage';
import AdmissionsPage from './AdmissionsPage';
import TuitionFeesTable from './Fees';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/accommodations" element={<AccommodationsPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/fees" element={<TuitionFeesTable />} />
        {/* ... other routes */}
      </Routes>
    </div>
  );
}

export default App;
