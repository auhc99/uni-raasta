// SocietiesPage.js
import React from 'react';
import './SocietiesPage.css'; // Import the CSS file for additional styling
import { Link } from 'react-router-dom';
import { Grid, Button, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew'; // Import the OpenInNew icon

const SocietiesPage = () => {
    const societiesData = [
        { id: 1, name: "NUS Chinese Studies Students' Society", link: 'https://nus.campuslabs.com/engage/organization/nus-chinese-studies-students-society', imageURL: 'path/to/image1.jpg'},
        { id: 2, name: "NUS Economics Society", link: 'https://nus.campuslabs.com/engage/organization/nus-economics-society', imageURL: 'path/to/image1.jpg'},
        { id: 3, name: "NUS Dental Society", link: 'https://nus.campuslabs.com/engage/organization/nus-dental-society', imageURL: 'path/to/image1.jpg' },
        { id: 4, name: "NUS History Society", link: 'https://nus.campuslabs.com/engage/organization/nus-history-society', imageURL: 'path/to/image1.jpg' },
        { id: 5, name: "NUS Investment Society", link: 'https://nus.campuslabs.com/engage/organization/nus-investment-society', imageURL: 'path/to/image1.jpg' },
        { id: 6, name: "NUS Literary Society", link: 'https://nus.campuslabs.com/engage/organization/nus-literary-society', imageURL: 'path/to/image1.jpg' },
        { id: 7, name: "NUS Mathematics Society", link: 'https://nus.campuslabs.com/engage/organization/nus-mathematics-society', imageURL: 'path/to/image1.jpg' },
        { id: 8, name: "NUS Medical Society", link: 'https://nus.campuslabs.com/engage/organization/nus-medical-society', imageURL: 'path/to/image1.jpg' },
        { id: 9, name: "NUS Muslim Society", link: 'https://nus.campuslabs.com/engage/organization/nus-muslim-society', imageURL: 'path/to/image1.jpg' },
        { id: 10, name: "NUS Physics Society", link: 'https://nus.campuslabs.com/engage/organization/physoc', imageURL: 'path/to/image1.jpg' },
        { id: 11, name: "NUS Psychology Society", link: 'https://nus.campuslabs.com/engage/organization/nuspsychsoc', imageURL: 'path/to/image1.jpg' },
        { id: 12, name: "Society of Social Work Students", link: 'https://nus.campuslabs.com/engage/organization/ssws', imageURL: 'path/to/image1.jpg' },
        // Add more societies as needed
    ];

    const clubsData = [
        { id: 1, name: "NUS Drone Club", link: 'https://nus.campuslabs.com/engage/organization/nus-drone-club', imageURL: '/pictures/Clubs/drone.jpg' },
        { id: 2, name: "NUS Motoring Club", link: 'https://nus.campuslabs.com/engage/organization/nus-motoring-club', imageURL: 'path/to/image1.jpg' },
        { id: 3, name: "NUS Skating", link: 'https://nus.campuslabs.com/engage/organization/nus-students-sports-club', imageURL: 'path/to/image1.jpg' },
        { id: 4, name: "NUS Students' Sports Club", link: 'https://nus.campuslabs.com/engage/organization/nus-students-sports-club', imageURL: 'path/to/image1.jpg' },
        { id: 5, name: "Rovers Adventure club", link: 'https://nus.campuslabs.com/engage/organization/rovers-adventure-club', imageURL: 'path/to/image1.jpg' },
        { id: 6, name: "Boxing", link: 'https://www.nussportsclub.org/clubs/boxing', imageURL: '/pictures/Clubs/boxing-(2).jpg' },
        { id: 7, name: "Intellectual Games Club", link: 'https://www.nussportsclub.org/clubs/igc', imageURL: 'path/to/image1.jpg' },
        { id: 8, name: "NUS Kayaking", link: 'https://nus.campuslabs.com/engage/organization/nuskayaking', imageURL: 'path/to/image1.jpg' },
        { id: 9, name: "NUS Judo", link: 'https://nus.campuslabs.com/engage/organization/nus-judo-team', imageURL: 'path/to/image1.jpg' },
        { id: 10, name: "NUS Toastmasters Club", link: 'https://nus.campuslabs.com/engage/organization/nus-toastmasters-club', imageURL: 'path/to/image1.jpg' },
        { id: 11, name: "NUS Board Games", link: 'https://nus.campuslabs.com/engage/organization/nus-board-games', imageURL: '/pictures/Clubs/boardgames.jpeg' },
        { id: 12, name: "NUS Comedy Club", link: 'https://nus.campuslabs.com/engage/organization/nuscomedyclub', imageURL: 'path/to/image1.jpg' },
        // Add more clubs as needed
    ];

    const interestGroupsData = [
        { id: 1, name: "Residential College 4", link: 'https://rc4.nus.edu.sg/rc4life/?tab=0', imageURL: 'path/to/image1.jpg' },
        { id: 2, name: "Ridge View Residential College", link: 'https://rvrc.nus.edu.sg/college/interest-groups/', imageURL: 'path/to/image1.jpg' },
        { id: 3, name: "College of Alice and Peter Tan", link: 'https://capt.nus.edu.sg/activities-interest-groups', imageURL: 'path/to/image1.jpg' },
        { id: 4, name: "Tembusu College", link: 'https://tembusu.nus.edu.sg/college-life/interest-groups', imageURL: 'path/to/image1.jpg' },
        { id: 5, name: "Kent Ridge Hall", link: 'https://nus.edu.sg/osa/kentridgehall/interest-groups', imageURL: 'path/to/image1.jpg' },
        { id: 6, name: "Eusoff Hall", link: 'https://nus.edu.sg/osa/eusoffhall/hall-life/cca', imageURL: 'path/to/image1.jpg' },
        { id: 7, name: "King Edward VII Hall", link: 'https://nus.edu.sg/osa/keviihall/residential-life/ccas', imageURL: 'path/to/image1.jpg' },
        { id: 8, name: "Raffles Hall", link: 'https://nus.edu.sg/osa/raffleshall/cca/sports#', imageURL: 'path/to/image1.jpg' },
        { id: 9, name: "Prince George's Park House", link: 'https://nus.edu.sg/osa/pioneerhouse/residential-life/interest-groups', imageURL: 'path/to/image1.jpg' },
        { id: 10, name: "Sheares Hall", link: 'https://nus.edu.sg/osa/sheareshall/cca', imageURL: 'path/to/image1.jpg' },
        { id: 11, name: "Temasek Hall", link: 'https://nus.edu.sg/osa/temasekhall/hall-life/committees', imageURL: 'path/to/image1.jpg' },
        { id: 12, name: "Duke-NUS", link: 'https://www.duke-nus.edu.sg/education/student-resources/student-life/student-interest-groups-(sig)', imageURL: 'path/to/image1.jpg' },
        // Add more interest groups as needed
    ];

    return (
        <div className="page-container">
            <header>
                <Typography variant="h1">NUS Societies, Clubs, and Interest Groups</Typography>
            </header>

            <Grid container spacing={3} direction="row" justifyContent="center">
                <Grid item xs={12} sm={12}>
                    <Typography variant="h2">Societies</Typography>
                    {renderClickableItems(societiesData)}
                </Grid>
            </Grid>

            <Grid container spacing={3} direction="row" justifyContent="center">
                <Grid item xs={12} sm={12}>
                    <Typography variant="h2">Clubs</Typography>
                    {renderClickableItems(clubsData)}
                </Grid>
            </Grid>

            <Grid container spacing={3} direction="row" justifyContent="center">
                <Grid item xs={12} sm={12}>
                    <Typography variant="h2">Interest Groups</Typography>
                    {renderClickableItems(interestGroupsData)}
                </Grid>
            </Grid>
        </div>
    );
};

const renderClickableItems = (data) => (
    <Grid container spacing={2}>
        {data.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={3}>
                {/* Use a Material-UI Button for styling */}
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="custom-button" // Apply a class for additional styling from the CSS file
                    onClick={() => {
                        window.open(item.link); // Redirect to the specified link
                    }}
                    style={{
                        backgroundImage: `url(${item.imageURL})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                        minHeight: '200px', // Adjust the minimum height as needed
                    }}
                >
                    {/* Content */}
                    <div className="button-content">
                        <Typography variant="h6" style={{ color: 'white', fontSize: '14px' }} noWrap>
                            {item.name}
                        </Typography>
                    </div>

                    {/* Footer (e.g., additional icons) */}
                    <div className="button-footer">
                        <OpenInNewIcon style={{ color: 'white' }} />
                    </div>
                </Button>
            </Grid>
        ))}
    </Grid>
);



export default SocietiesPage;