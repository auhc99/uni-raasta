import React from 'react';
import {
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Tooltip,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GroupIcon from '@mui/icons-material/Group';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import EventIcon from '@mui/icons-material/Event';

const resourceData = [
  {
    title: 'Recruitment Events',
    description:
      'Direct interactions with potential employers for internships or full-time positions.',
    icon: <EventIcon />,
    link: 'https://nus.edu.sg/cfg/students/i-want-to-meet-employers/career-events',
  },
  {
    title: 'Career Fairs',
    description:
      'Opportunities to meet numerous employers and learn about job openings and internships.',
    icon: <BusinessCenterIcon />,
    link: 'https://nus.edu.sg/cfg/employers/career-fairs-recruitment-talks',
  },
  {
    title: 'AI-Powered Platform',
    description:
      'Advanced technology to match students with suitable job opportunities and career paths.',
    icon: <WifiTetheringIcon />,
    link: 'https://nus.edu.sg/cfg/students/career-resources/vmock',
  },
  {
    title: 'Alumni Mentoring',
    description:
      'Mentorship and advice from experienced alumni to guide career choices and networking.',
    icon: <GroupIcon />,
    link: 'https://www.nus.edu.sg/alumnet/alumnuscard/support-for-students',
  },
  {
    title: 'Career Counselling',
    description: 'Personalized guidance and support for career planning and decision-making.',
    icon: <PsychologyIcon />,
    link: 'https://nus.edu.sg/cfg/students/career-ready/career-advisory',
  },
  {
    title: 'Networking Events',
    description: 'Connect with alumni, industry professionals, and potential employers.',
    icon: <SchoolIcon />,
    link: 'https://careerfair.comp.nus.edu.sg/',
  },
];

const branchData = [
  { name: 'Computer Science', rate: '96.8%', salary: '$6500' },
  { name: 'Information Systems', rate: '95.3%', salary: '$5300' },
  { name: 'Information Security', rate: '94.6%', salary: '$5400' },
  { name: 'Business Analytics', rate: '96.2%', salary: '$5500' },
];

function ResourceCard({ title, description, icon, link }) {
  return (
    <Card
      raised
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Avatar sx={{ bgcolor: 'primary.main', mb: 1 }}>{icon}</Avatar>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={link} target="_blank" rel="noopener noreferrer">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

const PlacementsPage = () => {
  return (
    <Box my={2}>
      <Typography variant="h4" color="primary" gutterBottom>
        NUS Computer Science Placements
      </Typography>

      {/* Career Resources Section */}
      <Box my={2}>
        <Typography variant="h5" gutterBottom>
          Career Resources for Students
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {resourceData.map((resource, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ResourceCard
                title={resource.title}
                description={resource.description}
                icon={resource.icon}
                link={resource.link}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Branch Details Section */}
      <Typography variant="h5" gutterBottom>
        Branch Details (As of 2022)
      </Typography>
      <TableContainer component={Paper} sx={{ border: 1 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ border: 1 }}>Branch</TableCell>
              <TableCell align="center" sx={{ border: 1 }}>
                Employment Rate
              </TableCell>
              <TableCell align="center" sx={{ border: 1 }}>
                Median Salary
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {branchData.map((branch, index) => (
              <TableRow key={index} sx={{ border: 1 }}>
                <TableCell component="th" scope="row" sx={{ border: 1 }}>
                  {branch.name}
                </TableCell>
                <TableCell align="center" sx={{ border: 1 }}>
                  <Tooltip
                    title="Employment rate within 6 months of graduation"
                    placement="top"
                    arrow
                  >
                    <span>{branch.rate}</span>
                  </Tooltip>
                </TableCell>
                <TableCell align="center" sx={{ border: 1 }}>
                  {branch.salary}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PlacementsPage;
