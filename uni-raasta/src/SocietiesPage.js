// SocietiesPage.js
import React from 'react';
import './SocietiesPage.css'; // Import the CSS file for additional styling
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const SocietiesPage = () => {
  const societiesData = [
    {
      id: 1,
      name: "NUS Chinese Studies Students' Society",
      link: 'https://nus.campuslabs.com/engage/organization/nus-chinese-studies-students-society',
      imageURL: '/pictures/Societies/nuscsss.jpg',
    },
    {
      id: 2,
      name: 'NUS Economics Society',
      link: 'https://nus.campuslabs.com/engage/organization/nus-economics-society',
      imageURL: '/pictures/Societies/nuses.jpg',
    },
    {
      id: 3,
      name: 'NUS Dental Society',
      link: 'https://nus.campuslabs.com/engage/organization/nus-dental-society',
      imageURL: '/pictures/Societies/nusds.jpg',
    },
    {
      id: 4,
      name: 'NUS History Society',
      link: 'https://nus.campuslabs.com/engage/organization/nus-history-society',
      imageURL: '/pictures/Societies/nushs.png',
    },
    {
      id: 5,
      name: 'NUS Investment Society',
      link: 'https://nus.campuslabs.com/engage/organization/nus-investment-society',
      imageURL: '/pictures/Societies/nusis.jpg',
    },
    {
      id: 6,
      name: 'NUS Literary Society',
      link: 'https://nus.campuslabs.com/engage/organization/nus-literary-society',
      imageURL: '/pictures/Societies/nusls.jpg',
    },
    {
      id: 7,
      name: 'NUS Mathematics Society',
      link: 'https://nus.campuslabs.com/engage/organization/nus-mathematics-society',
      imageURL: '/pictures/Societies/nusms.png',
    },
    {
      id: 8,
      name: 'NUS Medical Society',
      link: 'https://nus.campuslabs.com/engage/organization/nus-medical-society',
      imageURL: '/pictures/Societies/med.jpg',
    },
    {
      id: 9,
      name: 'NUS Muslim Society',
      link: 'https://nus.campuslabs.com/engage/organization/nus-muslim-society',
      imageURL: '/pictures/Societies/mus.jpg',
    },
    {
      id: 10,
      name: 'NUS Physics Society',
      link: 'https://nus.campuslabs.com/engage/organization/physoc',
      imageURL: '/pictures/Societies/nusps.png',
    },
    {
      id: 11,
      name: 'NUS Psychology Society',
      link: 'https://nus.campuslabs.com/engage/organization/nuspsychsoc',
      imageURL: '/pictures/Societies/psycho.png',
    },
    {
      id: 12,
      name: 'Society of Social Work Students',
      link: 'https://nus.campuslabs.com/engage/organization/ssws',
      imageURL: '/pictures/Societies/ssws.jpg',
    },
    // Add more societies as needed
  ];

  const clubsData = [
    {
      id: 1,
      name: 'NUS Drone Club',
      link: 'https://nus.campuslabs.com/engage/organization/nus-drone-club',
      imageURL: '/pictures/Clubs/drone.jpg',
    },
    {
      id: 2,
      name: 'NUS Motoring Club',
      link: 'https://nus.campuslabs.com/engage/organization/nus-motoring-club',
      imageURL: '/pictures/Clubs/motoring.png',
    },
    {
      id: 3,
      name: 'NUS Skating',
      link: 'https://nus.campuslabs.com/engage/organization/nus-students-sports-club',
      imageURL: '/pictures/Clubs/skating.png',
    },
    {
      id: 4,
      name: "NUS Students' Sports Club",
      link: 'https://nus.campuslabs.com/engage/organization/nus-students-sports-club',
      imageURL: '/pictures/Clubs/nusssc.png',
    },
    {
      id: 5,
      name: 'Rovers Adventure club',
      link: 'https://nus.campuslabs.com/engage/organization/rovers-adventure-club',
      imageURL: '/pictures/Clubs/rac.jpg',
    },
    {
      id: 6,
      name: 'Boxing',
      link: 'https://www.nussportsclub.org/clubs/boxing',
      imageURL: '/pictures/Clubs/boxing.jpg',
    },
    {
      id: 7,
      name: 'Intellectual Games Club',
      link: 'https://www.nussportsclub.org/clubs/igc',
      imageURL: '/pictures/Clubs/igc.png',
    },
    {
      id: 8,
      name: 'NUS Kayaking',
      link: 'https://nus.campuslabs.com/engage/organization/nuskayaking',
      imageURL: '/pictures/Clubs/kayaking.png',
    },
    {
      id: 9,
      name: 'NUS Judo',
      link: 'https://nus.campuslabs.com/engage/organization/nus-judo-team',
      imageURL: '/pictures/Clubs/judo.png',
    },
    {
      id: 10,
      name: 'NUS Toastmasters Club',
      link: 'https://nus.campuslabs.com/engage/organization/nus-toastmasters-club',
      imageURL: '/pictures/Clubs/toastmaster.jpg',
    },
    {
      id: 11,
      name: 'NUS Board Games',
      link: 'https://nus.campuslabs.com/engage/organization/nus-board-games',
      imageURL: '/pictures/Clubs/boardgames.jpg',
    },
    {
      id: 12,
      name: 'NUS Comedy Club',
      link: 'https://nus.campuslabs.com/engage/organization/nuscomedyclub',
      imageURL: '/pictures/Clubs/comedy.jpg',
    },
    // Add more clubs as needed
  ];

  const interestGroupsData = [
    {
      id: 1,
      name: 'Residential College 4',
      link: 'https://rc4.nus.edu.sg/rc4life/?tab=0',
      imageURL: '/pictures/Interest_Groups/rc4.jpg',
    },
    {
      id: 2,
      name: 'Ridge View Residential College',
      link: 'https://rvrc.nus.edu.sg/college/interest-groups/',
      imageURL: '/pictures/Interest_Groups/rvrc.png',
    },
    {
      id: 3,
      name: 'College of Alice and Peter Tan',
      link: 'https://capt.nus.edu.sg/activities-interest-groups',
      imageURL: '/pictures/Interest_Groups/capt.jpg',
    },
    {
      id: 4,
      name: 'Tembusu College',
      link: 'https://tembusu.nus.edu.sg/college-life/interest-groups',
      imageURL: '/pictures/Interest_Groups/tembusu.jpg',
    },
    {
      id: 5,
      name: 'Kent Ridge Hall',
      link: 'https://nus.edu.sg/osa/kentridgehall/cca',
      imageURL: '/pictures/Interest_Groups/krh.png',
    },
    {
      id: 6,
      name: 'Eusoff Hall',
      link: 'https://nus.edu.sg/osa/eusoffhall/hall-life/cca',
      imageURL: '/pictures/Interest_Groups/eh.jpg',
    },
    {
      id: 7,
      name: 'King Edward VII Hall',
      link: 'https://nus.edu.sg/osa/keviihall/residential-life/ccas',
      imageURL: '/pictures/Interest_Groups/ke7h.png',
    },
    {
      id: 8,
      name: 'Raffles Hall',
      link: 'https://nus.edu.sg/osa/raffleshall/cca/sports#',
      imageURL: '/pictures/Interest_Groups/rh.png',
    },
    {
      id: 9,
      name: "Prince George's Park House",
      link: 'https://nus.edu.sg/osa/pioneerhouse/residential-life/interest-groups',
      imageURL: '/pictures/Interest_Groups/pgph.jpg',
    },
    {
      id: 10,
      name: 'Sheares Hall',
      link: 'https://nus.edu.sg/osa/sheareshall/cca',
      imageURL: '/pictures/Interest_Groups/sh.png',
    },
    {
      id: 11,
      name: 'Temasek Hall',
      link: 'https://nus.edu.sg/osa/temasekhall/hall-life/committees',
      imageURL: '/pictures/Interest_Groups/th.png',
    },
    {
      id: 12,
      name: 'Duke-NUS',
      link: 'https://www.duke-nus.edu.sg/education/student-resources/student-life/student-interest-groups-(sig)',
      imageURL: '/pictures/Interest_Groups/duke.jpg',
    },
    // Add more interest groups as needed
  ];

  const handleFindOutMoreSocieties = () => {
    window.open('https://nus.edu.sg/osa/student-life/student-organisations-directory');
  };

  const handleFindOutMoreClubs = () => {
    window.open('https://nus.edu.sg/osa/student-life/student-organisations-directory');
  };

  return (
    <div className="page-container">
      <header>
        <Typography variant="h2" color="primary" gutterBottom>
          NUS Societies, Clubs, and Interest Groups
        </Typography>
      </header>
      {/* Societies Container */}
      <div className="container" style={{ marginBottom: '50px' }}>
        <Typography variant="h3" gutterBottom my={2} style={{ marginBottom: '50px' }}>
          Societies
        </Typography>
        <Grid container spacing={1}>
          {renderClickableItems(societiesData)}
        </Grid>

        {/* "Find Out More" button for Societies */}
        <div style={{ position: 'relative', marginBottom: '100px' }}>
          <Button
            variant="outlined"
            onClick={handleFindOutMoreSocieties}
            sx={{ position: 'absolute', top: '20px', right: '40px', zIndex: 1 }}
          >
            Find Out More (Societies)
          </Button>
        </div>
      </div>

      {/* Clubs Container */}
      <div className="container" style={{ marginBottom: '50px' }}>
        <Typography variant="h3" gutterBottom my={2} style={{ marginBottom: '50px' }}>
          Clubs
        </Typography>
        <Grid container spacing={1}>
          {renderClickableItems(clubsData)}
        </Grid>

        {/* "Find Out More" button for Clubs */}
        <div style={{ position: 'relative', marginBottom: '100px' }}>
          <Button
            variant="outlined"
            onClick={handleFindOutMoreClubs}
            sx={{ position: 'absolute', top: '20px', right: '40px', zIndex: 1 }}
          >
            Find Out More (Clubs)
          </Button>
        </div>
      </div>

      {/* Interest Groups Container */}
      <Grid container spacing={3} direction="row" justifyContent="center">
        <Grid item xs={12} sm={12}>
          <Typography variant="h3" gutterBottom my={2} style={{ marginBottom: '50px' }}>
            Interest Groups
          </Typography>
          {renderClickableItems(interestGroupsData)}
        </Grid>
      </Grid>
    </div>
  );
};

const renderClickableItems = (data) => (
    <Grid container spacing={4}>
        {data.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={3}>
        {/* Use a Material-UI Card for styling */}
        <Card
          sx={{
            height: '100%',
            width: '90%', // Adjust the width as needed
            display: 'flex',
            flexDirection: 'column',
            '&:hover': {
              boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          {/* Card Action Area for making the entire card clickable */}
          <CardActionArea
            onClick={() => {
              window.open(item.link); // Redirect to the specified link
            }}
          >
            {/* Card Media with adjusted paddingTop for a smaller image */}
            <CardMedia
              component="div"
              sx={{
                height: '300px',
                width: '360px',
                backgroundImage: `url(${item.imageURL})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                display: 'flex',
                alignItems: 'center', // Center the content vertically
                justifyContent: 'center', // Center the content horizontally
                margin: 0,
              }}
            />
            {/* Card Content */}
            <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                {item.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default SocietiesPage;
