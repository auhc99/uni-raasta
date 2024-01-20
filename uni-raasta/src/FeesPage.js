import React from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from '@mui/material';

function createRow(matriculationYear, tierA, tierB, tierC, noTuitionGrant) {
  return { matriculationYear, tierA, tierB, tierC, noTuitionGrant };
}

const rows = [
  createRow('AY2023/2024', 8250, 11550, 17965, 39168),
  createRow('AY2022/2023', 8250, 11550, 17980, 39168),
  createRow('AY2021/2022', 8200, 11500, 17878, 38914),
];

const miscellaneousFeesRows = [
  // AY2023/2024
  ['AY2023/2024', '$111.15', '$50.75', '$93.45', '--', '$49.10', '--', '$117.75', '--'],
  // AY2022/2023
  ['AY2022/2023', '$111.15', '$50.75', '$93.45', '--', '$44.60', '$107.05', '$117.75', '--'],
  // AY2021/2022
  ['AY2021/2022', '$110.45', '$50.45', '$92.85', '--', '$44.35', '$106.40', '$117.75', '--'],
];

const tuitionFeeRows = [
  {
    studentType: 'Single degree students',
    semester: '1st',
    feeDescription:
      "'Full semestral fees X Workload%* ' capped at 'Subsidised semestral fees X 120%'",
  },
  {
    studentType: 'Single degree students',
    semester: '2nd',
    feeDescription:
      "'Full semestral fees X Workload%* ' capped at 'Subsidised semestral fees X 150%'",
  },
  {
    studentType: 'Single degree students',
    semester: '3rd onwards',
    feeDescription: 'Full semestral fees X Workload%* ',
  },
  {
    studentType: 'Double degree students',
    semester: '1st',
    feeDescription:
      "'Full semestral fees X Workload%* ' capped at 'Subsidised 9th/10th semestral fees X 120%'",
  },
  {
    studentType: 'Double degree students',
    semester: '2nd',
    feeDescription:
      "'Full semestral fees X Workload%* ' capped at 'Subsidised 9th/10th semestral fees X 150%'",
  },
  {
    studentType: 'Double degree students',
    semester: '3rd onwards',
    feeDescription: 'Full semestral fees X Workload%* ',
  },
];


const bubbleStyle = {
  position: 'center',
  backgroundColor: 'rgba(100, 150, 200, 0.1)', // Blue color with transparency
  borderRadius: '10px', // Rounded corners
  padding: '15px', // Padding inside the bubble
  maxWidth: '1500px', // Maximum width of the bubble
  margin: '20px 0' // Margin around the bubble
};



const tableHeaderStyle = {
  backgroundColor: 'rgba(255, 165, 0, 0.8)', // Translucent orange background
  borderRadius: '10px', // Rounded corners
  padding: '15px', // Padding inside the table container
  margin: '20px 0', // Margin around the table container
};


const tableBodyStyle = {
  backgroundColor: 'rgba(255,238,170, 0.6)', // Translucent orange background
  borderRadius: '10px', // Rounded corners
  padding: '15px', // Padding inside the table container
  margin: '20px 0', // Margin around the table container
};



const FeesPage = () => {
  return (
    <Box my={2}>
      <Typography variant="h4" color="primary" sx={{ mt: 5 }}>
        Tuition Fees
      </Typography>

      <Typography variant="body1" paragraph style={bubbleStyle}>
        The cohort-based fee system is introduced for the new undergraduate intake of all
        Faculties/Schools from AY2008/09. Under the cohort-based fee system, tuition fee for an
        intake cohort of students will be fixed throughout the student's candidature. While fees
        continue to be reviewed annually and adjustments made as and when necessary with each new
        cohort of students, each new cohort will know the exact amount of tuition fees they have to
        pay throughout their candidature. This enables students to better plan for the financing of
        their undergraduate studies.
      </Typography>

      <Typography variant="body1" paragraph style={bubbleStyle}>
        National Servicemen who had accepted admission to NUS earlier but plan to register and
        enroll as a student with the current cohort and beyond will be charged the tuition fees
        prevailing at the time they accepted their offer of admission. If the National Serviceman
        does not accept the place first offered and accepts offers to NUS in the subsequent years,
        he will not be able to enjoy the tuition fee effective in the year of his first offer but
        will have to pay the tuition fee effective in the latest year of offer which he has
        accepted. If the National Serviceman accepts the place first offered and successfully
        changes his course of study in a subsequent year, prior to his enrolment to the University,
        he will pay the tuition fee of the new programme at the rate applicable to the year of the
        first offer accepted.
      </Typography>

      <TableContainer component={Paper} sx={{ border: 1 }}>
        <Table sx={{ minWidth: 700 }} aria-label="tuition fees table">
          <TableHead sx={tableHeaderStyle}>
            <TableRow sx={{ border: 1 }}>
              <TableCell align="center" colSpan={1} rowSpan={2} sx={{ border: 1, fontSize: 18 }}>
                Matriculation Year
              </TableCell>
              <TableCell align="center" colSpan={3} sx={{ border: 1, fontSize: 18 }}>
                Fees payable by students in receipt of MOE Tuition Grant
              </TableCell>
              <TableCell align="center" colSpan={1} sx={{ border: 1, fontSize: 18 }}>
                Fees payable by students NOT in receipt of MOE Tuition Grant (Inclusive of GST)
              </TableCell>
            </TableRow>
            <TableRow sx={{ border: 1 }}>
              <TableCell align="center" sx={{ border: 1, fontSize: 18 }}>
                Singapore Citizens (SGD)
              </TableCell>
              <TableCell align="center" sx={{ border: 1, fontSize: 18 }}>
                Singapore Permanent Residents (SGD)
              </TableCell>
              <TableCell align="center" sx={{ border: 1, fontSize: 18 }}>
                International Students (SGD)
              </TableCell>
              <TableCell align="center" sx={{ border: 1, fontSize: 18 }}>
                No Tuition Grant (SGD)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={tableBodyStyle}>
            {rows.map((row, index) => (
              <TableRow key={index} sx={{ border: 1 }}>
                <TableCell align="center" sx={{ border: 1 }}>
                  {row.matriculationYear}
                </TableCell>
                <TableCell align="center" sx={{ border: 1 }}>
                  {row.tierA.toLocaleString()}
                </TableCell>
                <TableCell align="center" sx={{ border: 1 }}>
                  {row.tierB.toLocaleString()}
                </TableCell>
                <TableCell align="center" sx={{ border: 1 }}>
                  {row.tierC.toLocaleString()}
                </TableCell>
                <TableCell align="center" sx={{ border: 1 }}>
                  {row.noTuitionGrant.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      <Typography variant="h4" color="primary" sx={{ mt: 5 }}>
        Miscellaneous Student Fees
      </Typography>

      <Typography variant="body1" paragraph style={bubbleStyle}>
        Miscellaneous student fees help meet part of the costs incurred by the University in
        providing services to the student community that are either not covered or only partially
        covered by the tuition fee and government subsidy. These services include healthcare for
        students; facilitating student cultural, social and recreational programmes; and maintaining
        the internal shuttle bus service, IT network and other campus-wide services. All students,
        whether registered on a full-time or part-time basis, are charged the miscellaneous student
        fees. These are due at the same time as the tuition fees.
      </Typography>

      <TableContainer component={Paper} sx={{ border: 1 }}>
        <Table sx={{ minWidth: 700 }} aria-label="tuition fees table">
          <TableHead sx={tableHeaderStyle}>
            <TableRow sx={{ border: 1 }}>
              <TableCell align="center" colSpan={1} rowSpan={3} sx={{ border: 1, fontSize: 18 }}>
                Matriculation Year
              </TableCell>
              <TableCell align="center" colSpan={2} rowSpan={2} sx={{ border: 1, fontSize: 18 }}>
                Student Services Fee (SSF) (Lab-based)
              </TableCell>
              <TableCell align="center" colSpan={2} rowSpan={2} sx={{ border: 1, fontSize: 18 }}>
                Student Services Fee (SSF) (Non lab-based)
              </TableCell>
              <TableCell align="center" colSpan={4} rowSpan={1} sx={{ border: 1, fontSize: 18 }}>
                Health Service Fee (HSF)
              </TableCell>
            </TableRow>

            <TableRow sx={{ border: 1 }}>
              <TableCell align="center" colSpan={2} sx={{ border: 1, fontSize: 18 }}>
                Local Students
              </TableCell>
              <TableCell align="center" colSpan={2} sx={{ border: 1, fontSize: 18 }}>
                International Students
              </TableCell>
            </TableRow>
            <TableRow sx={{ border: 1 }}>
              <TableCell align="center" colSpan={1} sx={{ border: 1, fontSize: 18 }}>
                Full-time
              </TableCell>
              <TableCell align="center" colSpan={1} sx={{ border: 1, fontSize: 18 }}>
                Part-time
              </TableCell>
              <TableCell align="center" colSpan={1} sx={{ border: 1, fontSize: 18 }}>
                Full-time
              </TableCell>
              <TableCell align="center" colSpan={1} sx={{ border: 1, fontSize: 18 }}>
                Part-time
              </TableCell>
              <TableCell align="center" colSpan={1} sx={{ border: 1, fontSize: 18 }}>
                Full-time
              </TableCell>
              <TableCell align="center" colSpan={1} sx={{ border: 1, fontSize: 18 }}>
                Part-time
              </TableCell>
              <TableCell align="center" colSpan={1} sx={{ border: 1, fontSize: 18 }}>
                Full-time
              </TableCell>
              <TableCell align="center" colSpan={1} sx={{ border: 1, fontSize: 18 }}>
                Part-time
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody sx={tableBodyStyle}>
            {miscellaneousFeesRows.map(row => (
              <TableRow sx={{ border: 1 }}>
                <TableCell align="center" sx={{ border: 1 }}>{row[0]}</TableCell>
                <TableCell align="center" sx={{ border: 1 }}>{row[1]}</TableCell>
                <TableCell align="center" sx={{ border: 1 }}>{row[2]}</TableCell>
                <TableCell align="center" sx={{ border: 1 }}>{row[3]}</TableCell>
                <TableCell align="center" sx={{ border: 1 }}>{row[4]}</TableCell>
                <TableCell align="center" sx={{ border: 1 }}>{row[5]}</TableCell>
                <TableCell align="center" sx={{ border: 1 }}>{row[6]}</TableCell>
                <TableCell align="center" sx={{ border: 1 }}>{row[7]}</TableCell>
                <TableCell align="center" sx={{ border: 1 }}>{row[8]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h4" color="primary" sx={{ mt: 5 }}>
        Tuition Fee beyond Normal candidature
      </Typography>

      <Typography variant="body1" paragraph style={bubbleStyle}>
        The Tuition Fee beyond Normal Candidature is applicable to students who are admitted into an
        undergraduate degree under the modular system@ in NUS.
      </Typography>
      <Typography variant="body1" paragraph style={bubbleStyle}>
        @ Notes: - UG students admitted to non-modular faculties namely, Medicine / Dentistry / Law
        where the programme structure and duration are fixed (except Law DDP students whose 2nd
        degree is registered with a modular faculty), are excluded. - UG students admitted to
        Bachelor of Technology Programme and Yale-NUS College are also excluded. The fee policies
        for these students are managed separately.
      </Typography>

      <Typography variant="body1" paragraph style={bubbleStyle}>
        With effect from the admission cohort of AY2016/2017, students admitted into an
        undergraduate degree under the modular system@ in NUS and who take longer than the normal
        candidature period to complete their degree requirements will have to pay partial
        non-subsidized fees, culminating in full non-subsidized fees, during the extended semesters.
      </Typography>

      <Typography variant="body1" paragraph style={bubbleStyle}>
        In view that the Ministry of Education provides a Tuition Grant to subsidize a student's
        tuition fees up to the normal candidature period, the tuition fee payable beyond that would
        be the full non-subsidized semestral fees. To mitigate the impact of higher fees, the
        University undertakes to charge affected students only a proportion of the full
        non-subsidized semestral fees pro-rated based on the units read in the extended semesters.
        In addition, the pro-rated full fees payable in the first and second semester beyond normal
        candidature will be capped at 120% and 150% of the subsidized semestral fees respectively.
      </Typography>

      <TableContainer component={Paper} sx={{ border: 1 }}>
        <Table sx={{ minWidth: 700 }} aria-label="tuition fees table">
          <TableHead sx={tableHeaderStyle}>
            <TableRow sx={{ border: 1 }}>
              <TableCell align="center" sx={{ border: 1, fontSize: 18 }}>Student Type</TableCell>
              <TableCell align="center" sx={{ border: 1, fontSize: 18 }}>Semester</TableCell>
              <TableCell align="center" sx={{ border: 1, fontSize: 18 }}>
                Revised Fee Pro-rated Based on Student's Semester Workload
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={tableBodyStyle}>
            {tuitionFeeRows.map((row, index) => (
              <TableRow key={index} sx={{ border: 1 }}>
                <TableCell align="center" sx={{ border: 1 }}>{row.studentType}</TableCell>
                <TableCell align="center" sx={{ border: 1 }}>{row.semester}</TableCell>
                <TableCell align="center" sx={{ border: 1 }}>{row.feeDescription}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="body1" paragraph style={bubbleStyle}>
        *Given that the student reads x-unit of courses in the semester concerned, the 'Workload%'
        is capped at 100% if x exceeds 20 units and x unit/20 units if otherwise, for fee
        computation purposes, i.e., tuition fee is pro-rated for workload less than 20 units.
      </Typography>

      <Typography variant="body1" paragraph style={bubbleStyle}>
        Students who register for course(s) in the Special Term immediately following the expiry of
        their normal candidature period will continue to pay subsidised fees on a per course basis.
        However, for the Special Terms beyond that, the Special Term fees payable will be the full
        non-subsidised semestral fees pro-rated based on the number of units read.
      </Typography>

      <Typography variant="h4" color="primary" sx={{ mt: 5 }}>
        Fee Payment Procedures
      </Typography>

      <Typography variant="body1" paragraph style={bubbleStyle}>
        The{' '}
        <a
          href="https://www.nus.edu.sg/finance/students/student-finance-matters.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Office of Finance
        </a>{' '}
        publishes information on deadlines for fee payments and modes of fee payment. The Office
        will send an email notification to students, at students' NUS email accounts, to view their
        Student Bill online at least 2 weeks before the scheduled deadline for fee payment.
      </Typography>

      <Typography variant="h4" color="primary" sx={{ mt: 5 }}>
        Late and Partial Payment Penalties
      </Typography>

      <Typography variant="body1" paragraph style={bubbleStyle}>
        Students who do not meet fee payment deadlines stipulated by the{' '}
        <a
          href="https://www.nus.edu.sg/finance/students/student-finance-matters.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Office of Finance
        </a>
        , may incur penalty fees. If fees are not paid, or only partially paid, by the due date
        indicated in the bill, a late fee will be stipulated. Should fees remain outstanding after
        the relevant fee payment deadline, the University reserves the right to suspend academic
        rights and privileges, including to withhold degree conferment certifications. In addition,
        students with overdue fees may have their candidature of study terminated.
      </Typography>

      <Typography variant="h4" color="primary" sx={{ mt: 5 }}>
        Refund Policy
      </Typography>

      <Typography variant="body1" paragraph style={bubbleStyle}>
        Students who leave the University, either through withdrawal of their own accord or
        termination of candidature by the University, after Instructional Week 2 of the semester
        will be liable to pay fees for the entire semester. Requests for refund will generally not
        be considered.
      </Typography>
    </Box>
  );
};

export default FeesPage;
