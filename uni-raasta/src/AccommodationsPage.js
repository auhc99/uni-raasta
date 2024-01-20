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
