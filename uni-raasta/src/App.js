import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AdmissionsPage from './AdmissionsPage';
import TuitionFeesTable from './Fees';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/fees" element={<TuitionFeesTable />} />
        {/* ... other routes */}
      </Routes>
    </div>
  );
}

export default App;
