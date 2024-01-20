import React from 'react';

const AdmissionsPage = () => {
  return (
    <div>
      <h1>National University of Singapore Admissions</h1>
      <h2>Undergraduate Admissions for International Students</h2>
      
      <section>
        <h3>Application Period</h3>
        <p>The application for Academic Year 2024-2025 commenced on 1 November 2023.</p>
      </section>
      
      <section>
        <h3>Application Deadlines</h3>
        <p>For most international qualifications, the application closing date is 3 March 2024.</p>
      </section>
      
      <section>
        <h3>Application Fee</h3>
        <p>A non-refundable application fee of S$20 must be paid during the application submission.</p>
      </section>
      
      <section>
        <h3>Undergraduate Courses for the School of Computing</h3>
        <ul>
          {/* List the courses based on the information provided by NUS */}
          <li>Computer Science</li>
          <li>Information Systems</li>
          <li>Computer Engineering</li>
          <li>Business Analytics</li>
          {/* ... other courses */}
        </ul>
      </section>
      
      <section>
        <h3>Scholarships and Financial Aid</h3>
        <p>Scholarships are available for international students. Financial aid options include loans, subsidies, bursaries, and grants.</p>
      </section>
      
      {/* Add any other relevant sections based on the admissions guide */}
      
      <footer>
        <p>For more detailed information, please visit the&nbsp;
          <a href="https://www.nus.edu.sg/oam/apply-to-nus/international-qualifications/admissions-requirements" target="_blank" rel="noopener noreferrer">
          official NUS admissions requirements page.
          </a>
        </p>
      </footer>

    </div>
  );
};

export default AdmissionsPage;
