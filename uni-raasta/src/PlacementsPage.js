import React from 'react';
import {
  Typography,
  Grid,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Card,
  CardContent,
} from '@mui/material';

const resourceData = [
  {
    title: 'Recruitment Events',
    description:
      'Direct interactions with potential employers for internships or full-time positions.',
  },
  {
    title: 'Career Fairs',
    description:
      'Opportunities to meet numerous employers and learn about job openings and internships.',
  },
  {
    title: 'AI-Powered Platform',
    description:
      'Advanced technology to match students with suitable job opportunities and career paths.',
  },
  {
    title: 'Alumni Mentoring',
    description:
      'Mentorship and advice from experienced alumni to guide career choices and networking.',
  },
  {
    title: 'Career Counselling',
    description: 'Personalized guidance and support for career planning and decision-making.',
  },
  {
    title: 'Networking Events',
    description: 'Connect with alumni, industry professionals, and potential employers.',
  },
];

const branchData = [
  { name: 'Computer Science', rate: '96.8%', salary: '$6500' },
  { name: 'Information Systems', rate: '95.3%', salary: '$5300' },
  { name: 'Information Security', rate: '94.6%', salary: '$5400' },
  { name: 'Business Analytics', rate: '96.2%', salary: '$5500' },
];

function PlacementsPage() {
  return (
    <Box my={2}>
      <Typography variant="h4" color="primary" gutterBottom>
        NUS Computer Science Placements
      </Typography>
      {/* Career Resources Section */}
      <Typography variant="h5" gutterBottom>
        Career Resources for Students
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {resourceData.map((resource, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <CardContent>
                <Typography variant="h6" component="div">
                  {resource.title}
                </Typography>
                <Typography variant="body2">{resource.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Branch Details Section */}
      <Typography variant="h5" gutterBottom>
        Branch Details (As of 2022)
      </Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Branch</TableCell>
              <TableCell align="right">Employment Rate</TableCell>
              <TableCell align="right">Median Salary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {branchData.map((branch, index) => (
              <TableRow key={index}>
                <TableCell>{branch.name}</TableCell>
                <TableCell align="right">{branch.rate}</TableCell>
                <TableCell align="right">{branch.salary}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}

export default PlacementsPage;
