import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccommodationsDropDown = ({ title, data }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ border: 1, borderRadius: '10px', borderColor: 'divider' }}
        aria-controls={`panel-${title}-content`}
        id={`panel-${title}-header`}
      >
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardActionArea href={item.link} target="_blank">
                  <CardMedia
                    component="img"
                    image={item.logo}
                    alt={item.name}
                    sx={{ height: 140, objectFit: 'contain', backgroundSize: 'contain' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccommodationsDropDown;
