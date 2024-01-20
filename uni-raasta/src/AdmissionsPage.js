import React from 'react';
import {
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Link
  } from '@mui/material';

const AdmissionsPage = () => {
  const courses = [
    { name: "Computer Science", link: "https://www.comp.nus.edu.sg/programmes/ug/cs/" },
    { name: "Information Systems", link: "https://www.comp.nus.edu.sg/programmes/ug/is/" },
    { name: "Computer Engineering", link: "https://www.comp.nus.edu.sg/programmes/ug/ceg/" },
    { name: "Business Analytics", link: "https://www.comp.nus.edu.sg/programmes/ug/bza/" },
  ];

  const deadlines = [
    { group: "Singapore-Cambridge GCE 'A' Level", period: 'End-February 2024 to 19 March 2024' },
    { group: 'Polytechnic Diplomas from Singapore', period: '20 December 2023, 10am (SGT) to 7 February 2024' },
    { group: 'NUS High School Diploma', period: 'Application has closed' },
    { group: 'International Baccalaureate (IB) Diploma', period: '1 November 2023 to 21 February 2024' },
    { group: 'International Applicants with International Qualifications', period: '1 November 2023 to 3 March 2024' },
    { group: 'Current and former undergraduates transfer', period: '1 February 2024 to 21 February 2024' },
  ];

  const visaInfo = {
    processSteps: [
      'Submit an application for a Student’s Pass to the Immigration & Checkpoints Authority (ICA) through the Student’s Pass Online Application & Registration (SOLAR) system.',
      'Fill out the eForm 16 and print a copy to be submitted to ICA upon arrival in Singapore.',
      'Wait for the outcome of your Student’s Pass application. The processing time may take about four weeks.',
      'Upon approval, you will receive an In-Principle Approval (IPA) letter, which will serve as a single-entry visa to Singapore.',
      'Complete the formalities for the Student’s Pass issuance upon your arrival in Singapore.'
    ],
    additionalNotes: 'It is important to start your visa application process as soon as you receive your offer letter from NUS, as the process can take several weeks. Make sure to check the latest guidelines on the ICA website or the NUS Office of Admissions site for any updates to the visa process.'
  };  

  return (
    <Container>
      <Typography variant="h4" color="primary" gutterBottom>
        Undergraduate Admissions
      </Typography>

      {/* Admission Deadlines Section */}
      <Typography variant="h5" gutterBottom>
        Admission Deadlines for Academic Year 2024/2025
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Applicant Group</TableCell>
              <TableCell>Application Period</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deadlines.map((deadline, index) => (
              <TableRow key={index}>
              <TableCell>{deadline.group}</TableCell>
              <TableCell>{deadline.period}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Application Process Section */}
      <Typography variant="h5" gutterBottom>
        Application Process
      </Typography>
      <ol>
        {/* Your application process steps */}
      </ol>
      <Typography paragraph>
        For a detailed guide on the application process, please visit the&nbsp;
        <Link href="https://www.nus.edu.sg/oam/apply-to-nus/application" target="_blank" rel="noopener noreferrer">
          NUS application procedures page.
        </Link>
      </Typography>

      {/* Acceptance Rate and Application Fees Section */}
      <Typography variant="h5" gutterBottom>
        Acceptance Rate
      </Typography>
      <Typography paragraph>
        NUS has an acceptance rate of around <strong>5-10%</strong>
      </Typography>
      <Typography variant="h5" gutterBottom>
        Application Fees
      </Typography>
      <Typography paragraph>
        The application fee for international students is <strong>S$20.</strong>
      </Typography>
      
      {/* Programmes and Duration Table */}
      <Typography variant="h5" gutterBottom>
        Undergraduate Programmes and Duration
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Programme</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Standardised Tests Required</TableCell>
              <TableCell>English Tests Required</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Map through each course to display information */}
            {courses.map((course, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Link href={course.link} target="_blank" rel="noopener noreferrer">
                    {course.name}
                  </Link>
                </TableCell>
                <TableCell>4 Years</TableCell>
                <TableCell>SAT/ACT</TableCell>
                <TableCell>IELTS/TOEFL</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Visa Application Process Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Visa Application Process for International Students
      </Typography>
      <ol>
        {visaInfo.processSteps.map((step, index) => (
          <li key={index}>
            <Typography paragraph>{step}</Typography>
          </li>
        ))}
      </ol>
      <Typography paragraph>
        {visaInfo.additionalNotes}
      </Typography>

      {/* Footer with Link to Official Admissions Page */}
      <Typography align="center" style={{ marginTop: '30px', padding: '10px', backgroundColor: '#F5F5F5' }}>
        For more detailed information, please visit the&nbsp;
        <Link href="https://www.nus.edu.sg/oam/apply-to-nus/international-qualifications/admissions-requirements" target="_blank" rel="noopener noreferrer">
          official NUS admissions requirements page.
        </Link>
      </Typography>
    </Container>
  );
};

export default AdmissionsPage;