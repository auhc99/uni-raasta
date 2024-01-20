import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function ResourceCard({ title, description }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h3">{title}</Typography>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default ResourceCard;
