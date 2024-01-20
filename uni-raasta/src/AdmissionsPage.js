import React from 'react';

const AdmissionsPage = () => {
  const courses = [
    { name: "Computer Science", link: "https://www.comp.nus.edu.sg/programmes/ug/cs/" },
    { name: "Information Systems", link: "https://www.comp.nus.edu.sg/programmes/ug/is/" },
    { name: "Computer Engineering", link: "https://www.eng.nus.edu.sg/ece/programmes/undergraduate-programmes/" },
    { name: "Business Analytics", link: "https://www.comp.nus.edu.sg/programmes/ug/bza/" },
    // ... other courses
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ color: '#1F4788' }}>National University of Singapore Admissions</h1>
      <h2 style={{ color: '#333' }}>Undergraduate Admissions for International Students</h2>
      
      {/* Admission Details */}
      <section style={{ marginBottom: '20px' }}>
        <h3>Admission Deadline</h3>
        <p>The application deadline for international students is typically in March each year.</p>
        <h3>Acceptance Rate</h3>
        <p>NUS has a competitive acceptance rate. You can check the latest statistics on the official NUS website.</p>
        <h3>Application Fees</h3>
        <p>The application fee for international students is S$20.</p>
      </section>
      
      {/* Programmes and Duration Table */}
      <section>
        <h3>Undergraduate Programmes and Duration</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
          <tr style={{ backgroundColor: '#EEE', textAlign: 'left' }}>
            <th style={{ padding: '8px' }}>Programme</th>
            <th style={{ padding: '8px' }}>Duration</th>
            <th style={{ padding: '8px' }}>Standardised Tests Required</th>
            <th style={{ padding: '8px' }}>English Tests Required</th>
          </tr>
          {/* Map through each course to display information */}
          {courses.map((course, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #DDD' }}>
              <td style={{ padding: '8px' }}>
                <a href={course.link} target="_blank" rel="noopener noreferrer">
                  {course.name}
                </a>
              </td>
              <td style={{ padding: '8px' }}>4 Years</td>
              <td style={{ padding: '8px' }}>SAT/ACT</td>
              <td style={{ padding: '8px' }}>IELTS/TOEFL</td>
            </tr>
          ))}
        </table>
      </section>

      {/* Footer with Link to Official Admissions Page */}
      <footer style={{ backgroundColor: '#F5F5F5', padding: '10px', marginTop: '30px' }}>
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