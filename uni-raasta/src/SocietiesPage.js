// SocietiesPage.js
import React from 'react';
import './SocietiesPage.css'; // Import the CSS file for additional styling
import { Link } from 'react-router-dom';
import { Grid, Button, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew'; // Import the OpenInNew icon

const SocietiesPage = () => {
    const societiesData = [
        { id: 1, name: "NUS Chinese Studies Students' Society", link: 'https://nus.campuslabs.com/engage/organization/nus-chinese-studies-students-society' },
        { id: 2, name: "NUS Economics Society", link: 'https://nus.campuslabs.com/engage/organization/nus-economics-society' },
        { id: 3, name: "NUS Dental Society", link: 'https://nus.campuslabs.com/engage/organization/nus-dental-society' },
        { id: 4, name: "NUS History Society", link: 'https://nus.campuslabs.com/engage/organization/nus-history-society' },
        { id: 5, name: "NUS Investment Society", link: 'https://nus.campuslabs.com/engage/organization/nus-investment-society' },
        { id: 6, name: "NUS Literary Society", link: 'https://nus.campuslabs.com/engage/organization/nus-literary-society' },
        { id: 7, name: "NUS Mathematics Society", link: 'https://nus.campuslabs.com/engage/organization/nus-mathematics-society' },
        { id: 8, name: "NUS Medical Society", link: 'https://nus.campuslabs.com/engage/organization/nus-medical-society' },
        { id: 9, name: "NUS Muslim Society", link: 'https://nus.campuslabs.com/engage/organization/nus-muslim-society' },
        { id: 10, name: "NUS Physics Society", link: 'https://nus.campuslabs.com/engage/organization/physoc' },
        { id: 11, name: "NUS Psychology Society", link: 'https://nus.campuslabs.com/engage/organization/nuspsychsoc' },
        { id: 12, name: "Society of Social Work Students", link: 'https://nus.campuslabs.com/engage/organization/ssws' },
        // Add more societies as needed
    ];

    const clubsData = [
        { id: 1, name: "NUS Drone Club", link: 'https://nus.campuslabs.com/engage/organization/nus-drone-club' },
        { id: 2, name: "NUS Motoring Club", link: 'https://nus.campuslabs.com/engage/organization/nus-motoring-club' },
        { id: 3, name: "NUS Skating", link: 'https://nus.campuslabs.com/engage/organization/nus-students-sports-club' },
        { id: 4, name: "NUS Students' Sports Club", link: 'https://nus.campuslabs.com/engage/organization/nus-students-sports-club' },
        { id: 5, name: "Rovers Adventure club", link: 'https://nus.campuslabs.com/engage/organization/rovers-adventure-club' },
        { id: 6, name: "Boxing", link: 'https://www.nussportsclub.org/clubs/boxing' },
        { id: 7, name: "Intellectual Games Club", link: 'https://www.nussportsclub.org/clubs/igc' },
        { id: 8, name: "NUS Kayaking", link: 'https://nus.campuslabs.com/engage/organization/nuskayaking' },
        { id: 9, name: "NUS Judo", link: 'https://nus.campuslabs.com/engage/organization/nus-judo-team' },
        { id: 10, name: "NUS Toastmasters Club", link: 'https://nus.campuslabs.com/engage/organization/nus-toastmasters-club' },
        { id: 11, name: "NUS Board Games", link: 'https://nus.campuslabs.com/engage/organization/nus-board-games' },
        { id: 12, name: "NUS Comedy Club", link: 'https://nus.campuslabs.com/engage/organization/nuscomedyclub' },
        // Add more clubs as needed
    ];

    const interestGroupsData = [
        { id: 1, name: "Residential College 4", link: 'https://rc4.nus.edu.sg/rc4life/?tab=0' },
        { id: 2, name: "Ridge View Residential College", link: 'https://rvrc.nus.edu.sg/college/interest-groups/' },
        { id: 3, name: "College of Alice and Peter Tan", link: 'https://capt.nus.edu.sg/activities-interest-groups' },
        { id: 4, name: "Tembusu College", link: 'https://tembusu.nus.edu.sg/college-life/interest-groups' },
        { id: 5, name: "Kent Ridge Hall", link: 'https://nus.edu.sg/osa/kentridgehall/interest-groups' },
        { id: 6, name: "Eusoff Hall", link: 'https://nus.edu.sg/osa/eusoffhall/hall-life/cca' },
        { id: 7, name: "King Edward VII Hall", link: 'https://nus.edu.sg/osa/keviihall/residential-life/ccas' },
        { id: 8, name: "Raffles Hall", link: 'https://nus.edu.sg/osa/raffleshall/cca/sports#' },
        { id: 9, name: "Prince George's Park House", link: 'https://nus.edu.sg/osa/pioneerhouse/residential-life/interest-groups' },
        { id: 10, name: "Sheares Hall", link: 'https://nus.edu.sg/osa/sheareshall/cca' },
        { id: 11, name: "Temasek Hall", link: 'https://nus.edu.sg/osa/temasekhall/hall-life/committees' },
        { id: 12, name: "Duke-NUS", link: 'https://www.duke-nus.edu.sg/education/student-resources/student-life/student-interest-groups-(sig)' },
        // Add more interest groups as needed
    ];

    return (
        <div>
            <header>
                <Typography variant="h1">Societies, Clubs, and Interest Groups</Typography>
            </header>
        <Grid container spacing={3} direction="row">
            <Grid item xs={12} sm={4}>
                <Typography variant="h2">Societies</Typography>
                {renderClickableItems(societiesData, 'Societies')}
            </Grid>
        </Grid>

        <Grid container spacing={3} direction="row">
            <Grid item xs={12} sm={4}>
                <Typography variant="h2">Clubs</Typography>
                {renderClickableItems(clubsData, 'Clubs')}
            </Grid>
        </Grid>

        <Grid container spacing={3} direction="row">
            <Grid item xs={12} sm={4}>
                <Typography variant="h2">Interest Groups</Typography>
                {renderClickableItems(interestGroupsData, 'Interest Groups')}
            </Grid>
        </Grid>
        </div>
    );
};

const renderClickableItems = (data, sectionTitle) => (
    <Grid container spacing={2}>
        {data.map((item, index) => (
            <Grid item key={item.id} xs={12} sm={6} md={3}>
                {/* Use a Material-UI Button for styling */}
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="custom-button" // Apply a class for additional styling from the CSS file
                    onClick={() => {
                        if (index === 2) {
                            window.open(item.link); // Open link in new window for the third item
                        } else {
                            window.location.href = item.link; // Redirect to the specified link
                        }
                    }}
                >
                    <Typography variant="h6" noWrap>
                        {item.name}
                    </Typography>
                    {/* Optionally, add the OpenInNew icon */}
                    {index === 2 && <OpenInNewIcon />}
                </Button>
            </Grid>
        ))}
        {sectionTitle !== 'Interest Groups' && ( <Grid item xs={12} sm={12} md={12} style={{ textAlign: 'right', marginTop: '10px' }}>
            <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                    window.open('https://nus.edu.sg/osa/student-life/student-organisations-directory')
                }}
            >
                Find Out More
            </Button>
        </Grid> )}
    </Grid>
);

export default SocietiesPage;

