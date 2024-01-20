import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AdmissionsPage from './AdmissionsPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/admissions" element={<AdmissionsPage />} />
        {/* ... other routes */}
      </Routes>
    </div>
  );
}

export default App;
