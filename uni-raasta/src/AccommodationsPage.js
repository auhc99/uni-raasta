import React from 'react';
import {
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Link,
} from '@mui/material';
import AccommodationsDropDown from './AccommodationsDropDown';

const accommodationsData = [
  {
    type: 'Halls of Residence',
    description: 'Vibrant communities dedicated to experiential learning.',
    mealPlan: 'Yes (Compulsory)',
    academicProgrammes: 'Yes (Optional)',
    hostelActivities: 'Yes',
    roomType: 'Single and Double',
    toilet: 'Common',
    airCondition: 'Non air-con',
    link: 'https://nus.edu.sg/osa/residential-options/halls-of-residence',
  },
  {
    type: 'Residential Colleges',
    description: 'Multi-disciplinary academic curriculum offered in a living-learning environment.',
    mealPlan: 'Yes (Compulsory)',
    academicProgrammes: 'Yes (Compulsory)',
    hostelActivities: 'Yes',
    roomType: 'Single and Double',
    toilet: 'Common & Shared',
    airCondition: 'Air-con & Non air-con',
    link: 'https://nus.edu.sg/osa/campus-living/residential-options/residential-colleges',
  },
  {
    type: 'Student Residences',
    description: 'No frills accommodation, programmes offered to enhance personal effectiveness.',
    mealPlan: 'No',
    academicProgrammes: 'No',
    hostelActivities: 'Yes (Optional)',
    roomType: 'Single, Twin-Sharing Apartment, Married Apartment',
    toilet: 'Common, Shared & Attached',
    airCondition: 'Air-con & Non air-con',
    link: 'https://nus.edu.sg/osa/residential-options/student-residences',
  },
  {
    type: 'Houses',
    description: 'Safe spaces for co-creation, peer mentorship and a strong focus on well-being.',
    mealPlan: 'No',
    academicProgrammes: 'No',
    hostelActivities: 'Yes (Optional)',
    roomType: 'Single',
    toilet: 'Common',
    airCondition: 'Non air-con',
    link: 'https://nus.edu.sg/osa/residential-options/houses',
  },
];

const hallsOfResidenceData = [
  {
    name: 'Eusoff Hall',
    logo: 'https://nus.edu.sg/osa/images/librariesprovider2/default-album/eusoff-logo.png?sfvrsn=6c4685b9_0',
    link: 'https://nus.edu.sg/osa/eusoffhall/home-(v2)',
  },
  {
    name: 'Temasek Hall',
    logo: 'https://nus.edu.sg/osa/images/librariesprovider8/default-album/th-logo.png?sfvrsn=71d03d67_0',
    link: 'https://nus.edu.sg/osa/temasekhall/home',
  },
  {
    name: 'Kent Ridge Hall',
    logo: 'https://nus.edu.sg/osa/images/librariesprovider3/default-album/kr-logo.png?sfvrsn=790800fb_0',
    link: 'https://nus.edu.sg/osa/kentridgehall/home',
  },
  {
    name: 'King Edward VII Hall',
    logo: 'https://nus.edu.sg/osa/images/default-source/kevii-hall/about-kevii/test4e2f0c199bffd490fbfed3ab5b3082bb5.png?sfvrsn=d1c0ec06_0',
    link: 'https://nus.edu.sg/osa/keviihall/home',
  },
  {
    name: 'Raffles Hall',
    logo: 'https://nus.edu.sg/osa/images/librariesprovider6/default-album/rh-logo.png?sfvrsn=946bf7ca_0',
    link: 'https://nus.edu.sg/osa/raffleshall/home',
  },
  {
    name: 'Sheares Hall',
    logo: 'https://nus.edu.sg/osa/images/librariesprovider7/default-album/sh-logo.png?sfvrsn=8f923101_0',
    link: 'https://nus.edu.sg/osa/sheareshall/home',
  },
];

const residentialCollegesData = [
  {
    name: 'University Scholars Programme (USP) / Cinnamon College',
    logo: 'https://www.usp.nus.edu.sg/nus_usp/wp-content/uploads/2019/09/sublogo_NEW-Recovered.png',
    link: 'https://www.usp.nus.edu.sg/',
  },
  {
    name: 'Ridge View Residential College (RVRC)',
    logo: 'https://rvrc.nus.edu.sg/wp-content/themes/nus-theme-v2-php8/images/nus-logo.png',
    link: 'https://rvrc.nus.edu.sg/',
  },
  {
    name: 'College of Alice & Peter Tan (CAPT)',
    logo: 'https://capt.nus.edu.sg/wp-content/themes/consap-capt/assets/images/logo.png',
    link: 'https://capt.nus.edu.sg/',
  },
  {
    name: 'Residential College 4 (RC4)',
    logo: 'https://rc4.nus.edu.sg/wp-content/uploads/2022/06/RC4-logo-teal-1-300x112.png',
    link: 'https://rc4.nus.edu.sg/',
  },
  {
    name: 'Tembusu College',
    logo: 'https://tembusu.nus.edu.sg/images/theme/logos.svg',
    link: 'https://tembusu.nus.edu.sg/',
  },
];

const studentResidencesData = [
  {
    name: 'PGP Residence (PGPR)',
    logo: 'https://nus.edu.sg/osa/images/librariesprovider12/default-album/pgpr-logo/pgpr-new-logo-transparent.png?sfvrsn=c13839e7_0',
    link: 'https://nus.edu.sg/osa/pgpr/home',
  },
  {
    name: 'UTown Residence',
    logo: 'https://nus.edu.sg/osa/images/librariesprovider14/default-album/utr_logo.png?sfvrsn=d48cb707_0',
    link: 'https://nus.edu.sg/osa/utr/home',
  },
];

const housesData = [
  {
    name: 'Helix House',
    logo: 'https://nus.edu.sg/osa/images/helixhouselibraries/default-album/helixhouse_tn.png?sfvrsn=a503637b_0',
    link: 'https://nus.edu.sg/osa/helixhouse',
  },
  {
    name: 'Light House',
    logo: 'https://nus.edu.sg/osa/images/librariesprovider15/default-album/lh-logo.png',
    link: 'https://nus.edu.sg/osa/lighthouse/home',
  },
  {
    name: 'Pioneer House',
    logo: 'https://nus.edu.sg/osa/images/default-source/pgp-house/pgph-logo1.png?sfvrsn=bf4e0cc3_6',
    link: 'https://nus.edu.sg/osa/pioneerhouse/',
  },
];

const applicationSteps = [
  {
    title: 'Check Your Eligibility',
    link: 'https://nus.edu.sg/osa/student-services/hostel-admission/undergraduate/eligibility',
  },
  {
    title: 'Review Hostel Options',
    link: 'https://nus.edu.sg/osa/student-services/hostel-admission/undergraduate/living-on-campus',
  },
  {
    title: 'Compare Hostel Rates',
    link: 'https://nus.edu.sg/osa/student-services/hostel-admission/undergraduate/hostel-meal-plan-rates',
  },
  {
    title: 'Mark Application Exercise Period',
    link: 'https://nus.edu.sg/osa/student-services/hostel-admission/undergraduate/application-dates',
  },
  {
    title: 'Read Terms & Conditions',
    link: 'https://nus.edu.sg/osa/student-services/hostel-admission/undergraduate/terms-and-conditions',
  },
  {
    title: 'Apply through UHMS',
    link: 'https://uhms.nus.edu.sg/StudentPortal',
  },
];

const AccommodationsPage = () => {
  return (
    <Box my={2}>
      <Typography variant="h4" color="primary" gutterBottom>
        NUS Accommodations
      </Typography>

      <Typography paragraph>
        Residential living is an essential part of a holistic university education. NUS offers a
        variety of accommodation options to suit the needs and aspirations of full-time students.
      </Typography>

      {/* Accommodations Table */}
      <TableContainer component={Paper} sx={{ border: 1 }}>
        <Table aria-label="accommodations table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', border: 1 }}>Type</TableCell>
              <TableCell sx={{ fontWeight: 'bold', border: 1 }}>Description</TableCell>
              <TableCell sx={{ fontWeight: 'bold', border: 1 }}>Meal Plan</TableCell>
              <TableCell sx={{ fontWeight: 'bold', border: 1 }}>
                Academic Programmes/Courses
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', border: 1 }}>Hostel Activities</TableCell>
              <TableCell sx={{ fontWeight: 'bold', border: 1 }}>Room Type</TableCell>
              <TableCell sx={{ fontWeight: 'bold', border: 1 }}>Toilet</TableCell>
              <TableCell sx={{ fontWeight: 'bold', border: 1 }}>Air-Condition</TableCell>
              <TableCell sx={{ fontWeight: 'bold', border: 1 }}>Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accommodationsData.map((row, index) => (
              <TableRow key={index} sx={{ border: 1 }}>
                <TableCell sx={{ border: 1 }}>{row.type}</TableCell>
                <TableCell sx={{ border: 1 }}>{row.description}</TableCell>
                <TableCell sx={{ border: 1 }}>{row.mealPlan}</TableCell>
                <TableCell sx={{ border: 1 }}>{row.academicProgrammes}</TableCell>
                <TableCell sx={{ border: 1 }}>{row.hostelActivities}</TableCell>
                <TableCell sx={{ border: 1 }}>{row.roomType}</TableCell>
                <TableCell sx={{ border: 1 }}>{row.toilet}</TableCell>
                <TableCell sx={{ border: 1 }}>{row.airCondition}</TableCell>
                <TableCell sx={{ border: 1 }}>
                  <Link href={row.link} target="_blank" rel="noopener noreferrer">
                    View Details
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Application Guide Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Apply for a Hostel in 6 Steps
      </Typography>
      <Stepper orientation="vertical">
        {applicationSteps.map((step, index) => (
          <Step key={index} active={true} completed={false}>
            <StepLabel>
              <Link href={step.link} target="_blank" rel="noopener noreferrer">
                {step.title}
              </Link>
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Halls of Residence Section */}
      <AccommodationsDropDown title="Halls of Residence" data={hallsOfResidenceData} />
      {/* Residential Colleges Section */}
      <AccommodationsDropDown title="Residential Colleges" data={residentialCollegesData} />
      {/* Student Residences Section */}
      <AccommodationsDropDown title="Student Residences" data={studentResidencesData} />
      {/* Houses Section */}
      <AccommodationsDropDown title="Houses" data={housesData} />

      {/* Footer with Link to NUS Residential Options Page */}
      <Typography
        align="center"
        style={{ marginTop: '30px', padding: '10px', backgroundColor: '#F5F5F5' }}
      >
        For more detailed information on each residential option, please visit the&nbsp;
        <Link
          href="https://nus.edu.sg/osa/residential-options"
          target="_blank"
          rel="noopener noreferrer"
        >
          NUS Residential Options page.
        </Link>
      </Typography>
    </Box>
  );
};

export default AccommodationsPage;
